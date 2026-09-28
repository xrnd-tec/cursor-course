# Buổi 6: Harness engineering（90 phút）

> **Mục tiêu của buổi này（4 mục）**  
> 1 Chuẩn bị yêu cầu và task cho ứng dụng tự làm một mình → 2 Đọc nội dung subagent và rule (Quy tắc) đã thêm lúc đầu → 3 Quyết định mục tiêu và điểm dừng, rồi để agent tự chạy vòng “làm → kiểm tra → sửa” → 4 Yêu cầu AI review code, người kiểm tra lần cuối, rồi trình bày  
> **Cả 4 mục đều sẽ được hoàn thành trong buổi này.** Ứng dụng chưa xong hết cũng không sao.

> **Hôm nay, mỗi người sẽ một mình điều khiển AI agent để làm một ứng dụng nhỏ.**
> Trước đây, người nhờ AI 1 lần rồi kiểm tra 1 lần. Hôm nay, người quyết định **mục tiêu, cách kiểm tra và điểm dừng**, còn vòng lặp làm, kiểm tra, sửa thì giao cho agent.

> **Ghi chú soạn bài（2026-09-26）**: Buổi 6 đang ở giai đoạn dự thảo. Chưa quyết định khóa học sẽ gồm 6 buổi, hay buổi này là buổi nâng cao sau buổi 5.
> Trong các chức năng sử dụng, `/goal` được tài liệu chính thức ghi là “đang được phát hành dần”. Hãy kiểm tra trên máy thật trước ngày học.

> **Ghi chú soạn bài（2026-09-27）**: Trong phương án ban đầu, subagent vai kiểm chứng（`verifier`）chạy thử ứng dụng trên trình duyệt để đánh giá điều kiện hoàn thành. Khi thử trên máy thật, có lúc vai kiểm chứng dừng giữa chừng trong lúc chạy thử và không trả về kết quả đạt / không đạt. Việc để subagent kiểm tra hoạt động của game mỗi lần không ổn định, nên **đã đổi sang vai review（`reviewer`）đánh giá bằng cách đọc code.** Chỉ có phần kiểm tra của người ở chương 5 là chạy thử ứng dụng.

> **Ghi chú soạn bài（2026-09-27）**: Khi thử, có lúc sau khi vai triển khai và vai review làm xong, vai điều phối dừng lại mà không báo cáo. Vì vậy, bài đã bỏ cách viết toàn bộ cách tiến hành vào một câu `/goal` dài, và chuyển sang cách **viết cách tiến hành vào rule（`lessons/06/rules/harness.mdc`）, còn `/goal` chỉ ghi mục tiêu**. Rule vẫn có hiệu lực kể cả khi cuộc hội thoại sang đoạn mới. Hook `stop` tự động gửi “Tiếp tục” khi agent dừng không được dùng trong buổi học, vì không thể phát một script chạy được trên cả Windows và Mac. Khi agent dừng, học viên sẽ tự gửi “Tiếp tục”. Việc cách làm này có chạy được đến cuối hay không vẫn chưa được kiểm tra trên máy thật.

---

## Toàn bộ mạch của kịch bản

1. Mục đích của buổi này（dành cho giảng viên）
2. 00-1 Cách đọc kịch bản này
3. 00-2 Chuẩn bị trong ngày
4. 00-3 Bảng thời gian
5. 0-1 Trang bìa và phần mở đầu
6. Chương 1 đến chương 7
7. Checklist cho giảng viên

---

## Mục đích của buổi này（dành cho giảng viên）

Từ buổi 1 đến buổi 5, học viên đã dần tăng những gì giao cho AI.

| Buổi | Những gì đã giao cho AI |
|---|---|
| Buổi 1 | Mục tiêu, ràng buộc và điều kiện hoàn thành trong một yêu cầu |
| Buổi 2 | Chỉ 3 dòng（nhờ AI mà không quyết định gì） |
| Buổi 3 | Yêu cầu, task có điều kiện hoàn thành, rule phát triển, Skill |
| Buổi 4, buổi 5 | Rule của nhóm, PR, vai trò |

Hôm nay, vòng **“nhờ → kiểm tra → sửa” mà trước đây người làm từng lần một** sẽ do agent tự chạy. Để làm được điều đó, người sẽ quyết định 4 điều sau.

| Điều cần quyết định | Nội dung hôm nay |
|---|---|
| **Mục tiêu** | Hoàn thành tất cả task trong `tasks.md` |
| **Cách kiểm tra** | Subagent vai review đọc code đã thay đổi và đối chiếu với điều kiện hoàn thành. Người chạy thử ứng dụng để kiểm tra（chương 5）. Cách tiến hành được ghi trong rule `harness.mdc` |
| **Điểm dừng** | Khi tất cả task đều đạt thì dừng. Nếu cùng một task không đạt 3 lần thì dừng lại và hỏi người |
| **Chỗ người xem** | Hoạt động của harness đã ghi lại trong lúc theo dõi, các điểm được chỉ ra trong code review của AI（Agent Review）, hoạt động của ứng dụng khi tự mình chạy thử lần cuối, và diff |

Như vậy, trong buổi này, việc thiết kế môi trường để agent tự chạy（yêu cầu, rule, vai trò, cách kiểm tra, điểm dừng）được gọi là **Harness engineering**.

Có 2 điều muốn truyền đạt.

- **Phạm vi giao cho AI càng rộng thì chất lượng của những gì người quyết định càng ảnh hưởng đến kết quả.** Nếu điều kiện hoàn thành mơ hồ, vai review cũng không đối chiếu được với code. Điều giống như yêu cầu của B ở buổi 2 sẽ xảy ra ở quy mô lớn hơn.
- **Người kiểm tra lần cuối là con người.** Dù vai review báo cáo “tất cả đều đạt”, đó chỉ là kết quả đọc code. Ứng dụng có chạy hay không thì phải tự mình chạy thử để kiểm tra.

> **Các cơ chế chạy trên cloud（Automations, Subscriptions, Projects）chỉ được giới thiệu trong phần góc mở rộng.** Các bước hôm nay đều hoàn tất trên Cursor ở máy mình.

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Cách trình bày giống buổi 2 đến buổi 5. Số của tiêu đề là **`N-M` = bước M của chương N**.

| Chương | fundamentals được trích |
|----|------------------------|
| Chương 2 | [`07-skills`](../fundamentals/07-skills.md)（`/requirements`, `/task-breakdown`. Ôn lại buổi 3） |
| Chương 3 | [`14-subagents`](../fundamentals/14-subagents.md)（cách đọc file định nghĩa subagent） |
| Chương 4 | [`21-goals-loops`](../fundamentals/21-goals-loops.md)（`/goal`, Steering, những điều cần quyết định khi lắp vòng lặp） |
| Chương 5 | [`11-bugbot-pr`](../fundamentals/11-bugbot-pr.md)（Agent Review, Bugbot） |
| Chương 7 | [`10-cloud-agents`](../fundamentals/10-cloud-agents.md)（góc mở rộng: chạy trên cloud） · [`08-hooks`](../fundamentals/08-hooks.md)（góc mở rộng: hook `stop`） |

Ở chương 4, trong lúc agent chạy, học viên sẽ rảnh tay khoảng 20 phút. Trong thời gian đó, **hãy cho học viên ghi lại harness đang hoạt động như thế nào**（4-2）. Những gì ghi lại sẽ được dùng khi trình bày ở chương 6.

---

## Chuẩn bị trong ngày（kiểm tra lúc 0:00）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trong ngày

### 00-2 Danh sách chuẩn bị trong ngày

| Mục | Các bước |
|------|------|
| **Repository** | Mở `cursor-course/` rồi chạy `git pull`. Kiểm tra xem đã có Skill của buổi 3（`requirements`, `task-breakdown`）, subagent của buổi 6（`lessons/06/agents/reviewer.md`, `implementer.md`）và rule（`lessons/06/rules/harness.mdc`）chưa |
| **Rule** | Sao chép rule `harness.mdc` của buổi 6 vào `.cursor/rules/` ở phần “Trước khi bắt đầu”. Không có `task-cycle.mdc` của buổi 3 cũng được（`harness.mdc` sẽ ghi đè bằng quy định “không dừng lại sau mỗi task”） |
| **Thư mục làm việc** | `session06/`. Ở chương 2, mỗi học viên tự tạo |
| **Run Mode** | Đặt thành **Auto-review**（Settings → Agents → Approvals & Execution）. Nếu mỗi lần xác nhận đều dừng lại, vòng lặp ở chương 4 sẽ không tiến triển |
| **`/goal`** | Nhấn `/` ở ô nhập và kiểm tra xem có hiện `goal` không. Ai không thấy thì thử trong chat mới |
| **Agent Review** | Kiểm tra panel Source Control có hiện **Agent Review**（Find Issues）không |
| **Lượng sử dụng** | Chương 4 chạy lâu, nên sẽ dùng nhiều lượng sử dụng. Giảng viên kiểm tra trước phần còn lại của gói |

---

## Bảng thời gian

### Mạch của phần này

1. 00-3 Lộ trình 90 phút

### 00-3 Lộ trình 90 phút

| Thời gian | Chương | Nội dung | Người thực hiện |
|------|----|------|------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Giải thích nội dung hôm nay và cách nghĩ về harness và vòng lặp（8 phút） | Giảng viên |
| 0:08 | Chương 2 Chuẩn bị spec | Chọn ứng dụng, làm yêu cầu và task（15 phút） | Cả lớp |
| 0:23 | Chương 3 Đọc các file harness | Đọc nội dung subagent và rule đã thêm lúc đầu（4 phút） | Cả lớp |
| 0:27 | Chương 4 Để agent tự chạy | Giao mục tiêu bằng `/goal`, ghi lại hoạt động của harness（30 phút） | Cả lớp |
| 0:57 | Chương 5 AI review và người kiểm tra | Yêu cầu Agent Review xem code, tự mình chạy thử để kiểm tra（13 phút） | Cả lớp |
| 1:10 | Chương 6 Trình bày | Mỗi người 3 phút, nói về ứng dụng và những điều nhận ra（12 phút） | Cả lớp |
| 1:22 | Chương 7 Tổng kết | Nhìn lại những gì giao cho AI đã thay đổi thế nào qua khóa học（8 phút） | Giảng viên |

> **Khi trễ giờ**, dừng chương 4 ở phút thứ 26. Dù mới làm được một phần, vẫn tiến hành chương 5 và chương 6. Việc agent dừng giữa chừng cũng là nội dung để trình bày.

---

## Trang bìa và phần mở đầu — 0:00（nằm trong chương 1）

### Mạch của phần này

1. 0-1 Từ trang bìa đến nội dung hôm nay

### 0-1 Từ trang bìa đến nội dung hôm nay

#### ［Slide］Trang bìa

```
Harness engineering

Khóa thực hành Cursor　Buổi 6　·　90 phút
（ngày）
```

#### ［Slide］Trước khi bắt đầu（0:00 cả lớp cùng làm）

Trước khi vào bài, cả lớp cùng làm 4 việc sau. **Subagent và rule dùng hôm nay có được nhờ `git pull`.**

- [ ] Mở `cursor-course/` rồi chạy `git pull`
- [ ] Trong chat mới, gửi câu bên dưới, rồi kiểm tra `.cursor/agents/` có `reviewer.md` và `implementer.md`, và `.cursor/rules/` có `harness.mdc`

```text
Sao chép agents/reviewer.md và agents/implementer.md trong lessons/06/ vào .cursor/agents/,
và rules/harness.mdc vào .cursor/rules/. Không thay đổi nội dung.
```

- [ ] Đặt Run Mode thành **Auto-review**（Settings → Agents → Approvals & Execution）
- [ ] Nhấn `/` ở ô nhập thì thấy `goal`（ai không thấy thì thử trong chat mới）

> Ai không có `lessons/06/` thì chạy `git pull` lại. Nếu nơi sao chép không phải `.cursor/` ngay dưới `cursor-course/` thì nhờ Agent chuyển sang. **Nếu bước này chưa xong thì vòng lặp ở chương 4 sẽ không chạy.**

#### ［Slide］Nội dung hôm nay

| | Việc cần làm | Chương |
|---|---|---|
| 1 | Chọn ứng dụng tự làm một mình, làm yêu cầu và task | Chương 2 |
| 2 | Đọc nội dung subagent và rule đã thêm lúc đầu | Chương 3 |
| 3 | Quyết định mục tiêu và điểm dừng, rồi để agent tự chạy | Chương 4 |
| 4 | Yêu cầu AI review code, tự mình chạy thử để kiểm tra | Chương 5 |
| 5 | Trình bày | Chương 6 |

#### ［Slide］Cách tiến hành buổi học hôm nay

1. **Ứng dụng chưa xong hết cũng không sao.** Việc agent dừng giữa chừng cũng là nội dung để trình bày.
2. **Trong lúc agent chạy, hãy ghi lại hoạt động của harness.** Nếu agent đi lệch hướng, hãy gửi thêm chỉ dẫn giữa chừng.
3. **Khi gặp khó khăn, hãy giơ tay.**

---

## Chương 1 Mục tiêu hôm nay — 0:00（8 phút）

> Trong chương này, giảng viên giải thích nội dung hôm nay và cách nghĩ về harness và vòng lặp. **Trong chương này, chỉ có giảng viên nói.**

### Mạch của chương

1. 1-1 Khác biệt giữa các buổi trước và hôm nay
2. 1-2 Giải thích harness và hình dạng của vòng lặp

### 1-1 Khác biệt giữa các buổi trước và hôm nay

#### ［Slide］Những gì giao cho AI đã thay đổi

| Giai đoạn | Buổi | Những gì đã giao | Ai chạy vòng lặp |
|---|---|---|---|
| Prompt | Buổi 1 | Một yêu cầu（mục tiêu, ràng buộc, điều kiện hoàn thành） | Người, từng lần một |
| Context / harness（một người） | Buổi 3 | Yêu cầu, task có điều kiện hoàn thành, rule phát triển, Skill | Người, từng task một |
| Harness（dùng chung trong nhóm） | Buổi 4, 5 | Rule của nhóm, yêu cầu và task trong repository, phê duyệt bằng PR | Người trong nhóm chia vai trò |
| **Harness（agent tự chạy）** | **Buổi 6（hôm nay）** | **Mục tiêu, cách kiểm tra, điểm dừng** | **Agent chia vai trò** |

#### ［Slide］Mục tiêu hôm nay

| | Những việc sẽ làm được | Chương |
|----|--------------------|------------|
| 1 | Chuẩn bị yêu cầu và task cho ứng dụng tự làm một mình | Chương 2 |
| 2 | Đọc nội dung subagent và rule đã thêm lúc đầu | Chương 3 |
| 3 | Quyết định mục tiêu và điểm dừng, rồi để agent tự chạy | Chương 4 |
| 4 | Yêu cầu AI review code, người kiểm tra lần cuối, rồi trình bày | Chương 5, chương 6 |

#### ［Slide］Thuật ngữ dùng hôm nay

| Thuật ngữ | Nghĩa |
|---|---|
| **Subagent** | Agent chuyên dụng, nhận một phần việc do agent chính tách ra và giao lại. Hôm nay dùng vai triển khai và vai review đã chuẩn bị sẵn |
| **Orchestration（điều phối）** | Việc agent chính phân chia công việc cho nhiều subagent để tiến hành |
| **Harness engineering** | Việc thiết kế môi trường để agent tự chạy（yêu cầu, rule, vai trò, cách kiểm tra, điểm dừng） |

#### Giảng viên nói gì

Nói những điều sau.

- Trước đây, người nhờ AI 1 lần rồi người kiểm tra. Hôm nay, vòng lặp làm, kiểm tra, sửa sẽ được giao cho agent.
- Việc của người là quyết định mục tiêu, cách kiểm tra, điểm dừng, và kiểm tra lần cuối.
- Yêu cầu và điều kiện hoàn thành viết ở buổi 3, và rule làm ở buổi 3, buổi 4 sẽ được dùng nguyên như vậy hôm nay.

### 1-2 Giải thích harness và hình dạng của vòng lặp

#### ［Slide］Giải thích: Harness là gì

AI agent gồm **model** và môi trường để model hoạt động（**harness**）. Cùng một model, kết quả sẽ khác nhau tùy môi trường chạy. Hôm nay, bạn sẽ tự lắp harness này.

| Thành phần của harness | Nội dung hôm nay | Buổi đã làm |
|---|---|---|
| Yêu cầu và điều kiện hoàn thành | Yêu cầu trong `session06/` và `tasks.md` | Cùng các bước như buổi 3（chương 2） |
| Rule và Skill | Rule `harness.mdc` ghi cách tiến hành, `/requirements`, `/task-breakdown` | Rule thì thêm bản đã chuẩn bị sẵn ngay từ đầu. Skill là của buổi 3 |
| Vai trò | Subagent vai triển khai và vai review | Thêm bản đã chuẩn bị sẵn ngay từ đầu（Trước khi bắt đầu） |
| Cách kiểm tra | Vai review đọc code và đối chiếu với điều kiện hoàn thành | Ghi trong `harness.mdc`（đọc ở chương 3） |
| Điểm dừng | Tất cả đều đạt thì dừng / không đạt 3 lần thì hỏi người | Ghi trong `harness.mdc`（đọc ở chương 3） |

#### ［Slide］Giải thích: Vòng lặp hôm nay

Ở chương 4, agent sẽ tự chạy vòng lặp sau.

1. Vai điều phối（agent chính）lấy 1 task từ `tasks.md`
2. Vai triển khai chỉ triển khai task đó
3. Vai review đối chiếu code với điều kiện hoàn thành
4. Nếu đạt, chuyển sang task tiếp theo
5. Nếu không đạt, chuyển lý do cho vai triển khai để sửa（quay lại bước 2）
6. **Nếu cùng một task không đạt 3 lần, dừng lại và hỏi người**
7. Khi tất cả đều đạt, báo cáo kết quả
8. **Người đưa ra quyết định cuối cùng, dựa trên AI review và việc tự mình kiểm tra**（chương 5）

Việc của người là chuẩn bị nguyên liệu cho vòng lặp này（yêu cầu và điều kiện hoàn thành）và kiểm tra các vai trò（chương 2, chương 3）, ghi lại hoạt động của harness trong lúc vòng lặp chạy（chương 4）, và quyết định cuối cùng（chương 5）.

#### Giảng viên nói gì

- Bước 1–7 do agent tự chạy. Chỉ vào bước 6 và bước 8, nơi vòng lặp được thiết kế để quay về người, và giải thích rằng “không giao phó hoàn toàn cho agent”.
- Nếu không quyết định điểm dừng như ở bước 6, agent có thể tiếp tục tiêu tốn lượng sử dụng mà không kết thúc.

#### ［Slide］Giải thích: Sơ đồ vòng lặp

Đây là sơ đồ của bước 1–8 ở trang trước. Chỗ mũi tên quay lại chính là vòng lặp.

```
 Vai điều phối            Vai triển khai（implementer） Vai review（reviewer）
 Lấy 1 task từ       ──→  Chỉ triển khai        ──→  Đọc code, đối chiếu với
 tasks.md                 task đó                     điều kiện hoàn thành
    ↑                         ↑                          │
    │                         └── Không đạt thì chuyển ──┤
    │                             lý do để sửa           │
    └────── Nếu đạt, sang task tiếp theo ────────────────┤
                                                         │
                          ┌──────────────────────────────┘
                          ├─→ Cùng một task không đạt 3 lần → Dừng lại và hỏi người
                          └─→ Tất cả đều đạt → Báo cáo → Ở chương 5, người chạy thử để kiểm tra
```

Ở 2 lối ra cuối cùng（không đạt 3 lần và tất cả đều đạt）, vòng lặp quay về người. **Chỉ người mới chạy ứng dụng để kiểm tra.**

#### Giảng viên nói gì

- Chỉ vào chỗ mũi tên quay lại và giải thích rằng đó là vòng lặp.
- Vai review chỉ đọc code, không chạy ứng dụng.

---

## Chương 2 Chuẩn bị spec — 0:08（15 phút）

> Trong chương này, học viên chọn ứng dụng tự làm một mình, rồi làm yêu cầu và task. **Các bước giống buổi 3.**

### Mạch của chương

1. 2-1 Chọn ứng dụng
2. 2-2 Làm yêu cầu và task

### 2-1 Chọn ứng dụng

#### ［Slide］Học viên làm gì（2 phút）

Chọn 1 ứng dụng trong danh sách sau. Ứng dụng nào cũng có quy mô mà một người tự viết tay sẽ mất vài ngày. Không dùng server hay API bên ngoài, chỉ chạy bằng HTML và JS.

| # | Ứng dụng | Chức năng chính |
|---|---|---|
| 1 | Game sinh tồn（survivor） | Sống sót trước đám đông kẻ địch. Di chuyển, tự động tấn công, kẻ địch xuất hiện, kinh nghiệm và lên cấp, chọn nâng cấp, boss |
| 2 | Thủ thành（tower defense） | Đặt tháp để tiêu diệt kẻ địch đi trên đường. Các đợt kẻ địch, loại tháp và cách đặt, tiền, nâng cấp, mạng |
| 3 | Roguelike | Đi qua hầm ngục được tạo tự động theo lượt. Tạo bản đồ, di chuyển, kẻ địch và chiến đấu, vật phẩm, cầu thang, game over |
| 4 | Máy trống（drum machine） | Phát ra nhịp đã nhập. 16 bước, âm sắc, tempo, lưu và chuyển pattern, hiệu ứng |

**Nếu phân vân, hãy chọn 1（game sinh tồn）.** Vì có nhiều chức năng nên không làm xong hết trong thời gian chương 4 cũng không sao.

### 2-2 Làm yêu cầu và task

#### ［Slide］Học viên làm gì（13 phút）

**① Tạo thư mục làm việc（1 phút）**

Tạo một thư mục mới tên là `session06/`.

**② Làm yêu cầu（7 phút）**

Trong chat mới, chọn `/requirements` rồi nói ứng dụng muốn làm.

```text
/requirements Làm game sinh tồn trong session06/
```

Trả lời các câu hỏi để hoàn thành yêu cầu. **Phải viết “không làm gì”.**

**③ Chia thành task（5 phút）**

```text
/task-breakdown Chia yêu cầu session06/ thành task, lưu vào session06/tasks.md
```

**Chia thành 3–5 task**（theo quy định của `/task-breakdown`, tối đa là 5 task）. Hãy kiểm tra từng task đều có điều kiện hoàn thành.

（Màn hình: `s02-13` kết quả chia task. Dùng lại ảnh của buổi 3）

#### Giảng viên nói gì

- Yêu cầu và điều kiện hoàn thành là tiêu chuẩn để agent tự kiểm tra ở chương 4. **Điều kiện hoàn thành mơ hồ thì sau đó vai review không đối chiếu được với code.** Điều này giống với yêu cầu của B ở buổi 2.
- `/task-breakdown` chia thành tối đa 5 task. Khi không đưa hết được các chức năng vào, Skill sẽ đề xuất chuyển phần còn lại sang “không làm gì” của yêu cầu. Hãy xếp chức năng muốn cho xem khi trình bày lên trên.
- Nhắc học viên không nhồi quá nhiều điều kiện hoàn thành vào 1 task. Khi thử, với 1 task gộp cả di chuyển, kẻ địch, tự động tấn công, đạn và HP của kẻ địch, vai kiểm tra đã bị dừng.
- Nhắc học viên viết điều kiện hoàn thành **theo dạng “làm gì thì điều gì xảy ra”**（ví dụ: “Nhấn phím debug thì xuất hiện 1 kẻ địch”, “Chọn nâng cấp thì khoảng cách giữa các lần tấn công ngắn lại”）. Viết theo dạng này thì ở chương 4, vai review tìm được đoạn code tương ứng. Ở chương 5, đây cũng là các bước khi tự mình chạy thử.

#### Điểm kiểm tra

- [ ] Đã có `session06/tasks.md`, và mỗi task đều có điều kiện hoàn thành

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không thấy `/requirements` | Có thể học viên chưa chạy `git pull`. Chạy `git pull` trong `cursor-course/` rồi thử trong chat mới |
| `tasks.md` được tạo trong `session02-spec/` | Nhờ Agent chuyển sang `session06/` |
| Điều kiện hoàn thành mơ hồ, ví dụ “hiển thị đẹp” | Nhờ AI viết lại theo dạng “làm gì thì điều gì được hiển thị” |

---

## Chương 3 Đọc các file harness — 0:23（4 phút）

> Subagent vai triển khai, subagent vai review và rule ghi cách tiến hành đã được sao chép vào `.cursor/` ở đầu buổi học（Trước khi bắt đầu）. Trong chương này, học viên đọc nội dung các file đó. **Agent chính sẽ trở thành vai điều phối, làm theo rule để phân chia công việc cho 2 subagent.**

### Mạch của chương

1. 3-1 Lý do chia vai trò
2. 3-2 Đọc các file harness

### 3-1 Lý do chia vai trò

#### ［Slide］Giải thích: 3 vai trò

| Vai trò | Ai làm | Việc cần làm |
|---|---|---|
| Vai điều phối | Agent chính | Giao từng task cho vai triển khai, xem kết quả của vai review, rồi quyết định sang task tiếp hay cho sửa |
| Vai triển khai | Subagent `implementer` | Chỉ triển khai 1 task đã nhận |
| Vai review | Subagent `reviewer` | Đọc code mà vai triển khai đã thay đổi, kiểm tra xem đã thỏa điều kiện hoàn thành chưa. **Không thay đổi code. Không chạy ứng dụng** |

Cách chia vai trò này có cùng hình dạng với vai trò của nhóm ở buổi 4, buổi 5. Ở buổi 4, buổi 5, người chia vai trò để chạy. Hôm nay, bạn để agent chia vai trò và chạy một mình.

| Việc cần làm | Buổi 4, 5（nhóm người） | Buổi 6（nhóm agent） |
|---|---|---|
| Viết spec | PM | Bản thân（`/requirements`, `/task-breakdown`） |
| Chuẩn bị môi trường và rule | Tech Lead | Bản thân（kiểm tra rule và subagent. Hôm nay dùng bản đã chuẩn bị sẵn） |
| Phân chia công việc | PM, Tech Lead | Vai điều phối（agent chính） |
| Triển khai | Kỹ sư | `implementer` |
| Đọc code để kiểm tra | Người đọc PR | `reviewer` |
| Chạy thử để kiểm tra | QA | Bản thân（chương 5） |

Tách vai làm và vai kiểm tra cũng vì lý do giống như quy định “người tạo PR không tự merge” ở buổi 4, buổi 5. Nếu tự mình kiểm tra sản phẩm do mình làm, sẽ dễ bỏ sót.

> Chi tiết hơn: [`14-subagents.md`](../fundamentals/14-subagents.md)

### 3-2 Đọc các file harness

#### ［Slide］Học viên làm gì（3 phút）

Mở `.cursor/agents/` và `.cursor/rules/` ở thanh bên, rồi đọc 3 file.

| File | Vai trò | Chỗ cần kiểm tra |
|---|---|---|
| `reviewer.md` | Vai review | Có **`readonly: true`**（không thay đổi code）. Đọc các file mà vai triển khai đã thay đổi, đối chiếu từng điều kiện hoàn thành với code. **Không chạy ứng dụng.** Với điều kiện hoàn thành mơ hồ thì cho “không đạt” và trả về cách viết lại |
| `implementer.md` | Vai triển khai | Chỉ triển khai 1 task đã nhận, trong `session06/`. Khi nhận lý do không đạt thì chỉ sửa theo lý do đó. Không tự quyết định task đã hoàn thành hay chưa |
| `harness.mdc` | Cách tiến hành của vai điều phối | Chạy từng task từ trên xuống theo thứ tự vai triển khai → vai review. **Ghi 1 dòng trước khi gọi và sau khi có kết quả đạt / không đạt.** Nếu không đạt thì chuyển lý do cho vai triển khai. Nếu cùng một task không đạt 3 lần thì dừng lại và hỏi người. **Không dừng lại sau mỗi task.** Khi tất cả đều đạt thì báo cáo bằng bảng |

Trong `description` của 2 subagent có ghi là “**chỉ dùng khi được nhờ rõ ràng**”. `harness.mdc` luôn có hiệu lực, nhưng trong nội dung chỉ giới hạn cho “lúc tiến hành `session06/tasks.md`”.

（Màn hình: `s06-01` frontmatter của `reviewer.md`）

#### Giảng viên nói gì

- Vai review có `readonly: true` vì nếu vai kiểm tra tự sửa code thì không còn là kiểm tra nữa.
- Vai review không chạy ứng dụng. Nếu để subagent chạy game mỗi lần để kiểm tra thì mất thời gian, và khi thử thì có lúc bị dừng giữa chừng. **Chạy thử để kiểm tra là việc của bản thân ở chương 5.**
- `description` là phần agent chính đọc khi quyết định gọi subagent nào. Vì phần này được giới hạn ở “chỉ khi được nhờ rõ ràng”, nên subagent sẽ không tự bị gọi khi nhờ AI như bình thường ở buổi 1 đến buổi 5.
- Vai review cho “không đạt” với điều kiện hoàn thành mơ hồ. Việc ở chương 2 có viết điều kiện hoàn thành theo dạng “làm gì thì điều gì xảy ra” hay không sẽ có tác dụng ở đây.
- Lúc đầu sao chép vào `.cursor/agents/` vì Cursor chỉ đọc file như subagent khi file nằm ở đó. Nếu file chỉ nằm trong `lessons/06/agents/` thì không có gì xảy ra. Các thành phần của harness có hiệu lực hay không là do nơi đặt file.
- Những gì ghi trong `harness.mdc` là cách kiểm tra và điểm dừng, trong “4 điều cần quyết định” ở chương 1. **Viết cách tiến hành vào rule thì rule vẫn có hiệu lực kể cả khi cuộc hội thoại sang đoạn mới.** Lệnh `/goal` gửi ở chương 4 chỉ cần 1 dòng mục tiêu.
- Phần “ghi 1 dòng” trong `harness.mdc` sẽ là manh mối khi ghi lại hoạt động của harness ở chương 4.
- Ai muốn tự làm thì có thể tạo file tương tự theo các bước trong `14-subagents.md`. Hôm nay dùng bản đã chuẩn bị để dành thời gian cho chương 4.

#### Điểm kiểm tra

- [ ] Đã mở và đọc 3 file

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không có file trong `.cursor/agents/` hoặc `.cursor/rules/` | Việc sao chép ở “Trước khi bắt đầu” chưa xong. Chạy `git pull` trong `cursor-course/`, rồi gửi lại cùng câu đó để sao chép |

---

## Chương 4 Để agent tự chạy — 0:27（30 phút）

> **Đây là chương quan trọng nhất của buổi này.** Giao mục tiêu, cách kiểm tra và điểm dừng, rồi để agent tự chạy.

### Mạch của chương

1. 4-1 Giao mục tiêu
2. 4-2 Theo dõi và ghi lại hoạt động của harness

### 4-1 Giao mục tiêu

#### ［Slide］Học viên làm gì（3 phút）

Trong chat mới, gửi câu sau.

```text
/goal Hoàn thành tất cả task trong session06/tasks.md
```

Chỉ gửi 1 dòng mục tiêu. Cách tiến hành đã ghi trong `harness.mdc`.

（Màn hình: `s06-02` trạng thái nhấn `/` ở ô nhập và thấy `goal`）

> **Nếu không thấy `/goal`**, hãy xóa `/goal` ở đầu rồi gửi cùng câu đó. Nếu agent dừng mà không báo cáo, hãy gửi “Tiếp tục”.

#### ［Slide］Giải thích: Những gì vừa giao cho agent

| Điều cần quyết định | Viết ở đâu | Nội dung |
|---|---|---|
| Mục tiêu | 1 dòng `/goal` | Hoàn thành tất cả task trong tasks.md |
| Cách kiểm tra | `harness.mdc` và `reviewer.md` | reviewer đọc code, đối chiếu với điều kiện hoàn thành |
| Điểm dừng | `harness.mdc` | Khi tất cả task đều đạt thì báo cáo bằng bảng / cùng một task không đạt 3 lần thì dừng lại và hỏi |
| Chỗ người xem | `harness.mdc` | 1 dòng trước khi gọi và sau khi có kết quả đạt / không đạt, và bảng báo cáo cuối cùng |

Mục tiêu thì giao ngay lúc đó, cách kiểm tra và điểm dừng thì viết sẵn trong rule. **Đó chính là thiết kế harness.**

> Chi tiết hơn: [`21-goals-loops.md`](../fundamentals/21-goals-loops.md)

### 4-2 Theo dõi và ghi lại hoạt động của harness

#### ［Slide］Học viên làm gì（27 phút）

Trong lúc agent chạy, **hãy ghi lại harness đang hoạt động như thế nào.** Có thể ghi vào ứng dụng ghi chú trên máy hoặc giấy（không ghi bên trong `session06/`, vì agent sẽ đọc）.

**① Ghi lại từng dòng hoạt động**

Mỗi khi có gì xảy ra trên màn hình, hãy ghi 1 dòng theo dạng sau. “Thành phần được dùng” chọn trong 5 thành phần ở bảng “Harness là gì” của chương 1（yêu cầu và điều kiện hoàn thành, rule và Skill, vai trò, cách kiểm tra, điểm dừng）.

| Giờ | Ai | Đã làm gì | Thành phần được dùng |
|---|---|---|---|
| 0:32 | Vai điều phối | Giao task 1 cho implementer | Yêu cầu và điều kiện hoàn thành |
| 0:36 | implementer | Tạo `index.html` và `game.js` | Vai trò |
| 0:38 | reviewer | Cho task 1 không đạt. Lý do là “không hiển thị HP” | Cách kiểm tra |
| 0:39 | Vai điều phối | Chuyển lý do không đạt cho implementer | Cách kiểm tra |
| 0:44 | Bản thân | Agent bắt đầu làm âm thanh trong “không làm gì”, nên đã thêm chỉ dẫn | Yêu cầu và điều kiện hoàn thành |

（Nội dung trong bảng là ví dụ）

（Màn hình: `s06-03` sơ đồ luồng của vai điều phối, vai triển khai và vai review ／ `s06-04` sơ đồ khái niệm cho thấy cách quay lại khi FAIL. Log lần này không có FAIL. Cả hai đều là sơ đồ giải thích do AI tạo, không phải màn hình thực tế）

**② Khi agent dừng, hãy ghi 1 dòng cuối cùng**

Khi agent dừng, hãy ghi 2 điều sau.

- Lý do dừng（tất cả đạt / không đạt 3 lần / khác）
- Nếu làm lại, sẽ thay đổi chỗ nào của harness（ví dụ: “Task 2 có quá nhiều điều kiện hoàn thành, nên chia thành 2 task”）

**Khi agent đi lệch hướng, không dừng agent mà hãy thêm chỉ dẫn.** Nếu gửi tin nhắn trong lúc agent đang làm, agent sẽ nhận ở lần ngắt tiếp theo（Steering）. Việc đã thêm chỉ dẫn cũng ghi 1 dòng.

（Màn hình: `s06-05` chỗ thêm chỉ dẫn trong lúc agent đang làm ／ `s06-06` sơ đồ tiến độ review và chạy thử dựa trên log thực tế lần này. Đây không phải báo cáo cuối cùng của tất cả task）

Ví dụ:
- “Bạn đang bắt đầu làm chức năng đăng nhập nằm trong ‘không làm gì’ của yêu cầu. Hãy dừng lại và chuyển sang task tiếp theo”
- “Với điều kiện hoàn thành của task 3, hãy kiểm tra việc dữ liệu được lưu, không phải việc hiển thị”

#### Giảng viên nói gì

**Ngay sau khi gửi**: nói những điều sau.

- Từ đây, agent sẽ tự tiến hành một lúc. Việc của người là xem màn hình và ghi lại hoạt động của harness, và thêm chỉ dẫn nếu agent đi lệch hướng.
- Khi ghi lại, học viên sẽ thấy các thành phần của harness đã lắp hôm nay được dùng ở đâu. Nếu có thành phần không được dùng ở đâu cả, hoặc thành phần nhiều lần dừng ở cùng một chỗ, thì đó là chỗ cần sửa tiếp theo.
- Hãy đọc lý do vai review cho “không đạt”. Cách viết điều kiện hoàn thành quyết định việc đánh giá dễ hay khó.
- Những gì ghi lại sẽ dùng khi trình bày ở chương 6.

**Trong lúc agent chạy**: đi quanh lớp, khi thấy các tình huống như sau thì chia sẻ với cả lớp.

- Tình huống vai review cho không đạt, vai triển khai sửa rồi đạt（ví dụ vòng lặp chạy tốt）
- Tình huống cùng một task nhiều lần không đạt（thường là ví dụ điều kiện hoàn thành mơ hồ）
- Tình huống agent bắt đầu làm thứ không có trong yêu cầu（ví dụ dùng Steering để dừng）

#### Điểm kiểm tra

- [ ] Agent đã dừng và bảng báo cáo đã hiện（kể cả khi mới làm được một phần）
- [ ] Đã có bảng ghi lại hoạt động của harness, và đã ghi dòng cuối cùng（lý do dừng và chỗ sẽ thay đổi lần sau）

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Nhiều lần dừng ở hộp thoại xác nhận | Kiểm tra Run Mode đã là Auto-review chưa |
| Agent chính tự triển khai mà không dùng subagent | Thêm chỉ dẫn: “Hãy dùng implementer và reviewer theo đúng harness.mdc” |
| Vai triển khai và vai review đã xong nhưng agent dừng mà không báo cáo | Gửi: “Tiếp tục. Báo cáo 1 dòng theo đúng harness.mdc rồi chuyển sang task tiếp theo” |
| Vai review dừng mà không trả kết quả đạt / không đạt | Thêm chỉ dẫn: “Cho reviewer review lại. Không chạy ứng dụng, chỉ đọc code” |
| Màn hình thay đổi nhanh, ghi lại không kịp | Không cần ghi hết. Chỉ cần ghi chỗ gọi subagent và chỗ có kết quả đạt / không đạt |
| Task đầu tiên nhiều lần không đạt | Đọc lại điều kiện hoàn thành. Nếu mơ hồ, người viết lại rồi gửi “Tiếp tục” |
| 30 phút vẫn chưa xong | Dừng ở phút thứ 26, dùng kết quả đến đó để sang chương 5 |

---

## Chương 5 AI review và người kiểm tra — 0:57（13 phút）

> Không tin ngay báo cáo của agent mà kiểm tra lại. **Sau khi yêu cầu AI review code, cuối cùng người chạy thử để kiểm tra.**

### Mạch của chương

1. 5-1 3 cách kiểm tra
2. 5-2 Yêu cầu Agent Review xem code
3. 5-3 Tự mình chạy thử và so sánh

### 5-1 3 cách kiểm tra

#### ［Slide］Giải thích: Ai kiểm tra điều gì

| Người kiểm tra | Kiểm tra điều gì | Khi nào |
|---|---|---|
| Vai review（`reviewer`） | Code của task có thỏa điều kiện hoàn thành không（đọc code） | Trong vòng lặp ở chương 4, với từng task |
| **Agent Review** | Toàn bộ thay đổi có lỗi hay chỗ nguy hiểm không（đọc code） | Ở chương này, 1 lần cho toàn bộ thay đổi |
| Bản thân | Chạy thử thực tế, xem có chạy đúng điều kiện hoàn thành không, có đúng sản phẩm mình muốn làm không | Cuối chương này |

Vai review và Agent Review đều là AI đọc code. **Chỉ bản thân bạn mới chạy thử ứng dụng để kiểm tra.** Không cho đạt chỉ dựa trên việc AI kiểm tra lẫn nhau, mà cuối cùng phải tự mình chạy thử để kiểm tra.

### 5-2 Yêu cầu Agent Review xem code

#### ［Slide］Học viên làm gì（6 phút）

**① Chạy Agent Review（3 phút）**

Mở panel Source Control, rồi nhấn **Find Issues** của **Agent Review**. Toàn bộ thay đổi hôm nay được review khi so với branch `main`.

- Độ sâu là **Quick**（nhanh, tốn ít lượng sử dụng）

（Màn hình: `s06-07` Agent Review trong panel Source Control ／ `s06-08` danh sách các điểm Agent Review chỉ ra）
- Cũng có thể chạy bằng cách nhập `/agent-review` trong ô nhập của chat

**② Đọc các điểm được chỉ ra và quyết định có sửa không（3 phút）**

| Loại điểm được chỉ ra | Việc cần làm |
|---|---|
| Lỗi liên quan đến điều kiện hoàn thành hoặc yêu cầu | Nhờ Agent sửa |
| Liên quan đến phần “không làm gì” của yêu cầu | Không sửa, để nguyên |
| Vấn đề sở thích（cách viết…） | Hôm nay không sửa cũng được |

### 5-3 Tự mình chạy thử và so sánh

#### ［Slide］Học viên làm gì（7 phút）

**① Chạy ứng dụng（4 phút）**

Mở file HTML trong `session06/` bằng trình duyệt tích hợp, tự thử từng điều kiện hoàn thành trong `tasks.md`.

（Màn hình: `s06-09` mẫu chạy thử của tower defense）

**② So sánh với đánh giá của vai review（2 phút）**

| Task | Đánh giá của vai review | Kết quả tự thử | Có khớp không |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

**③ Xem diff và quyết định có giữ không（1 phút）**

Nếu không có vấn đề, nhấn Keep.

#### Giảng viên nói gì

- Nếu có học viên thấy vai review nói đạt nhưng tự thử lại thấy khác, hãy chia sẻ với cả lớp. Khi đó, có vấn đề ở cách viết điều kiện hoàn thành, hoặc có vấn đề mà chỉ đọc code thì không thấy được（thời điểm, hiển thị trên màn hình…）. Vấn đề thứ hai chỉ người chạy thử để kiểm tra mới tìm ra được.
- Nếu có ví dụ Agent Review tìm ra lỗi mà vai review đã bỏ sót, hãy chia sẻ với cả lớp. Học viên sẽ thấy rằng khi tách riêng vai kiểm tra, những gì tìm được cũng khác đi.

#### Điểm kiểm tra

- [ ] Đã chạy Agent Review và đọc các điểm được chỉ ra
- [ ] Đã tự thử các điều kiện hoàn thành
- [ ] Đã điền bảng so sánh với đánh giá của vai review

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không thấy Agent Review | Nhập `/agent-review` trong chat. Nếu vẫn không thấy, hãy nhờ Agent: “Review thay đổi hôm nay so với main. Chỉ liệt kê lỗi và chỗ nguy hiểm” |
| Có quá nhiều điểm được chỉ ra | Chỉ xem những điểm liên quan đến điều kiện hoàn thành hoặc yêu cầu |

---

## Chương 6 Trình bày — 1:10（12 phút）

### Mạch của chương

1. 6-1 Mỗi người trình bày 3 phút

### 6-1 Mỗi người trình bày 3 phút

#### ［Slide］Cách trình bày（mỗi người 3 phút）

| Thứ tự | Nội dung trình bày | Thời gian dự kiến |
|---|---|---|
| 1 | Chạy ứng dụng đã làm để cho xem | 1 phút |
| 2 | Hoạt động của harness đã ghi lại（lý do dừng, chỉ dẫn đã thêm）và chỗ sẽ thay đổi lần sau | 1 phút |
| 3 | Chỗ mà đánh giá của vai review, Agent Review khác với kết quả tự thử | 1 phút |

**Không so sánh mức độ hoàn thiện.** Ai dừng giữa chừng thì hãy nói đã dừng ở đâu và vì sao.

#### Giảng viên nói gì

Có 4 học viên, mỗi người 3 phút, tổng cộng 12 phút. **Giảng viên bấm giờ.**

---

## Chương 7 Tổng kết — 1:22（8 phút）

> Nhìn lại những gì giao cho AI đã thay đổi thế nào qua toàn khóa học.

### Mạch của chương

1. 7-1 Nhìn lại khóa học
2. 7-2 Góc mở rộng: Chạy trên cloud

### 7-1 Nhìn lại khóa học

#### ［Slide］Chỗ cần tìm cách làm tốt hơn đã thay đổi

| Giai đoạn | Những gì đã tìm cách làm tốt hơn | Buổi |
|---|---|---|
| Prompt | Cách viết một yêu cầu（mục tiêu, ràng buộc, điều kiện hoàn thành） | Buổi 1 |
| Context | Thông tin cho AI xem（`@`, yêu cầu, mỗi task một chat） | Buổi 1, 3 |
| Harness（một người） | Môi trường để AI của mình hoạt động（rule phát triển, Skill） | Buổi 3 |
| Harness（dùng chung trong nhóm） | Môi trường để AI của cả nhóm hoạt động giống nhau（rule của nhóm, yêu cầu và task trong repository, phê duyệt bằng PR） | Buổi 4, 5 |
| Harness（agent tự chạy） | Môi trường để agent chia vai trò và tự chạy（subagent, mục tiêu, cách kiểm tra, điểm dừng） | Buổi 6 |

#### Giảng viên nói gì

- Chỗ cần tìm cách làm tốt hơn đã mở rộng từ cách viết một yêu cầu, sang thông tin cho AI xem, rồi đến môi trường để AI hoạt động.
- Dù phạm vi giao cho AI rộng hơn, người vẫn là người quyết định mục tiêu, cách kiểm tra, điểm dừng, và kiểm tra lần cuối.

### 7-2 Góc mở rộng: Chạy trên cloud

#### ［Slide］Góc mở rộng: Cơ chế vẫn chạy khi tắt máy

Cơ chế hôm nay đều chạy trên Cursor ở máy mình. Cũng có cơ chế chạy những việc tương tự trên cloud.

| Cơ chế | Làm gì |
|---|---|
| **Automations** | Agent trên cloud tự động chạy theo lịch, hoặc khi có sự kiện từ GitHub, Slack… |
| **Subscriptions** | Agent trên cloud theo dõi PR hoặc thread Slack, tự xử lý khi CI thất bại hoặc có góp ý review |
| **Projects**（beta） | Agent điều phối chạy trên cloud, phân chia công việc cho rất nhiều subagent. Tắt máy cũng không dừng |
| **Bugbot** | AI review PR trên GitHub, bình luận các điểm cần sửa và đề xuất sửa. Có thể cho tự động chạy mỗi khi PR được cập nhật |

> **Đây là phần mở rộng.** Các chức năng này tốn lượng sử dụng, và tùy gói có chức năng không dùng được. Ví dụ, Bugbot tốn trung bình $1.00–1.50 cho 1 lần review（thời điểm tháng 9/2026）. Agent Review hôm nay là cách thực hiện việc review tương tự trên máy mình.
>
> Chi tiết hơn: [`10-cloud-agents.md`](../fundamentals/10-cloud-agents.md)

#### ［Slide］Góc mở rộng: Tạo vòng lặp bằng hook `stop`

Cũng có thể tạo vòng lặp bằng Hooks mà không dùng `/goal`. Khi agent làm xong việc, hook `stop` chạy test, và nếu có test thất bại thì tự động gửi “Hãy sửa test bị thất bại”. Số lần tự động gửi có giới hạn（mặc định là 5 lần）.

Câu “Tiếp tục” đã gửi hôm nay khi agent dừng mà không báo cáo cũng có thể được gửi tự động bằng hook `stop`. Tuy nhiên, hook được viết bằng script, nên cần chuẩn bị theo hệ điều hành của máy sử dụng.

> Chi tiết hơn: [`08-hooks.md`](../fundamentals/08-hooks.md)

---

## Checklist cho giảng viên（dùng trong ngày）

#### Trước ngày học

- [ ] Đã tự mình thử chương 2 đến chương 5 từ đầu đến cuối 1 lần（với game sinh tồn, 3–5 task）
- [ ] Đã kiểm tra `/goal` dùng được. Đã thử cả cách tiến hành khi không dùng được（xóa `/goal` rồi gửi）
- [ ] Đã kiểm tra chương 4 dùng khoảng bao nhiêu lượng sử dụng
- [ ] Đã kiểm tra Agent Review（Find Issues）chạy được trong panel Source Control
- [ ] Đã kiểm tra `/task-breakdown` lưu được vào `session06/`（Skill trong repository phát cho học viên được viết dựa trên `session02-spec/`）
- [ ] Repository phát cho học viên có `lessons/06/agents/reviewer.md`, `implementer.md` và `lessons/06/rules/harness.mdc`, và `.gitignore` có `session06/`
- [ ] Đã thêm `harness.mdc`, gửi 1 dòng `/goal`, và kiểm tra agent vừa báo cáo vừa chạy được đến bảng cuối cùng

#### Quản lý thời gian

- Ở chương 2, giữ số task trong khoảng 3–5
- Ở chương 4, nếu trễ giờ thì dừng ở phút thứ 26
- **Không rút ngắn chương 5（người kiểm tra）và chương 6（trình bày）**
