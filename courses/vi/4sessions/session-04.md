# Buổi 4: Bắt đầu làm theo nhóm（90 phút）

> **Mục tiêu của buổi này（4 mục）**
> 01 Tạo repository của nhóm và mọi người đều có repository trên máy → 02 Chia sẻ rule của nhóm đến mọi người bằng PR → 03 Cả nhóm viết yêu cầu và task, rồi kiểm tra bằng PR → 04 Merge task 1 và bắt đầu task mình phụ trách（phần thử sức）
> **Hoàn thành đến mục 03 là đạt mục tiêu. Mục 04 là phần thử sức**, nên chưa làm được cũng không phải là thất bại. Phần tiếp theo sẽ được làm ở nửa đầu buổi 5.

> **Từ hôm nay, cả nhóm sẽ cùng làm một ứng dụng.** Mỗi nhóm 3–4 người dùng chung một repository, và **mọi thay đổi đều được chia sẻ bằng PR**.
> Ở buổi 3, giảng viên đã nói: “Nếu yêu cầu, task và rule đã được viết thành văn bản thì có thể nhờ người khác làm tiếp.” **Hôm nay, “người khác” đó là các thành viên trong nhóm.**

---

## Toàn bộ mạch của kịch bản

1. Thông điệp của buổi này（dành cho giảng viên）
2. 00-1 Cách đọc kịch bản này
3. 00-2 Chuẩn bị trước của giảng viên
4. 00-3 Chuẩn bị trong ngày
5. 00-4 Bảng thời gian
6. 0-1 Trang bìa và phần mở đầu
7. Chương 1 đến chương 7
8. Phụ lục A: Nội dung của template repository cho nhóm
9. Checklist cho giảng viên

---

## Thông điệp của buổi này（điều giảng viên cần nắm）

**Buổi này không phải là “buổi học Git”.** Phần giải thích lệnh và cơ chế của Git được giữ ở mức tối thiểu, và buổi học chỉ tập trung vào việc **đi hết một luồng bằng các nút trên màn hình**.

Điều cần truyền đạt trong buổi này không phải là thao tác Git, mà là một điều sau.

> **Chia sẻ thay đổi dưới dạng người khác có thể kiểm tra được.**

Ở buổi 3, học viên đã viết yêu cầu, task và rule thành văn bản. Cuối buổi 3, giảng viên đã nói: “Vì đã viết thành văn bản nên có thể nhờ người khác làm tiếp.” Hôm nay, học viên sẽ thực sự làm việc đó.

| Nội dung đã viết ở buổi 3 | Hôm nay nội dung đó trở thành gì | Chương |
|---|---|---|
| **Rule**（`task-cycle.mdc`） | **Rule của nhóm**. 1 người tạo PR thì rule có hiệu lực trong Cursor của mọi người | Chương 4 |
| **Yêu cầu**（làm gì / không làm gì） | **Nội dung cả nhóm thống nhất**. Được kiểm tra bằng PR | Chương 5 |
| **Task**（có điều kiện hoàn thành） | **Đơn vị phân chia công việc**. 1 task = 1 branch = 1 PR | Chương 5, chương 6 |
| **Điều kiện hoàn thành** | **Tiêu chí kiểm tra PR**. Người kiểm tra xác nhận điều kiện hoàn thành trên màn hình rồi Approve | Chương 6 |

**Việc kiểm tra PR không cần góp ý sâu.** Khi những người mới học kiểm tra PR của nhau, họ chưa thể đánh giá code tốt hay xấu. Những gì học viên có thể đánh giá là “**đã xác nhận được điều kiện hoàn thành trên màn hình chưa**” và “**có thứ gì không được nhờ mà vẫn bị thêm vào không**”. Cả hai điều này đều đã làm ở buổi 3.

### Lý do thực hiện trên màn hình Cursor

Nếu dùng lệnh `git` trong terminal, học viên sẽ hiểu rõ cơ chế hơn, nhưng **với người mới, 40 phút nửa sau sẽ trở thành buổi học Git**. Từ buổi 1 đến buổi 3, mọi thao tác đều hoàn tất bên trong Cursor, nên hôm nay cũng làm theo cách đó.

- Tạo branch, commit và gửi lên GitHub（Publish / Sync）bằng các nút trong **bảng Source Control**
- Commit message được **nút ✨** viết nháp, học viên đọc lại rồi mới Commit
- PR được tạo bằng cách **nhờ Agent chạy `gh pr create`**（học viên không có GitHub CLI thì tạo trên màn hình web của GitHub）
- Task được chuyển thành **Issue trên GitHub**, và khi bắt đầu thì dùng **`/start-task`** để gán mình làm người phụ trách（Assignee）. Nhìn danh sách Issue là biết ai đang làm gì, và không có trường hợp 2 người bắt đầu cùng một task
- Kiểm tra và merge trên **màn hình web của GitHub**

> Chi tiết hơn: [`20-git.md`](../fundamentals/20-git.md)

### Lý do PR đầu tiên là “rule”

PR đầu tiên **không phải là code mà là rule đã viết ở buổi 3**. Có 3 lý do.

1. **Nhỏ.** Chỉ có 5 dòng nên người kiểm tra có thể đọc hết. Nếu diff của PR đầu tiên quá lớn, học viên sẽ quen với việc Approve mà không đọc
2. **Không bị conflict.** Lúc này chưa có ai sửa các file khác
3. **Thấy được hiệu quả ngay khi merge.** Rule do Tech Lead viết sẽ **có hiệu lực trong Cursor của mọi người** chỉ bằng cách Sync. Ý nghĩa của “chia sẻ bằng Git” được truyền đạt mà không cần giải thích

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Kịch bản được viết theo giả định **học viên vừa xem tài liệu vừa tự thao tác, còn giảng viên vừa giải thích vừa dẫn dắt buổi học**. Định dạng giống buổi 3.

Số ở tiêu đề được đọc là **`N-M` = bước M của chương N**. Phần trước chương 1 là **`00-M`**（cách đọc, chuẩn bị, bảng thời gian）, phần mở đầu là **`0-1`**.

Mỗi chương gồm 5 khối（ở một số phần có thể thiếu một vài khối）.

| Khối | Dành cho ai |
|----------|------------------|
| **［Slide］Giải thích** | Giải thích cơ chế của Cursor. Đưa lên slide. Nguồn là `courses/vi/fundamentals/` |
| **［Slide］Học viên làm gì** | Đưa nguyên văn vào tài liệu phát. Prompt được in đầy đủ, không đọc miệng |
| **Giảng viên nói gì** | Nội dung giảng viên nói trong lúc học viên đang gõ hoặc đang chờ |
| **Điểm kiểm tra** | Căn cứ để quyết định chờ cả lớp hay tiếp tục |
| **Khi mắc kẹt** | Những chỗ học viên thực sự gặp khó ở chương đó và cách xử lý |

Phần giải thích được trích từ [`courses/vi/fundamentals/`](../fundamentals/). **Khi muốn sửa nội dung, hãy sửa ở phía fundamentals**（kịch bản chỉ là bản trích）.

| Chương | fundamentals được trích |
|----|------------------------|
| Chương 3 | [`20-git`](../fundamentals/20-git.md)（chuẩn bị repository） · [`07-skills`](../fundamentals/07-skills.md)（Skill có sẵn trong template） |
| Chương 4 | [`20-git`](../fundamentals/20-git.md)（branch, commit, PR） · [`06-rules`](../fundamentals/06-rules.md)（rule dùng chung trong nhóm） |
| Chương 5 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 6 | [`20-git`](../fundamentals/20-git.md)（cập nhật main, conflict） · [`11-bugbot-pr`](../fundamentals/11-bugbot-pr.md)（vị trí của việc kiểm tra PR） |

**Hôm nay, người thao tác thay đổi theo từng vai trò.** Trong phần “Học viên làm gì” của mỗi chương luôn ghi rõ **ai thực hiện**（Tech Lead / PM / Engineer / mọi người）.

---

## Chuẩn bị trước của giảng viên（trước ngày học）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trước

### 00-2 Danh sách chuẩn bị trước

**Nếu để đến ngày học mới quyết định, chỉ riêng việc đó đã mất 15 phút.** Hãy hoàn tất các mục sau trước ngày học.

| Mục | Nội dung |
|------|------|
| **Chia nhóm** | **4 học viên một nhóm**. Mỗi người đảm nhận 1 trong 4 vai trò. Khi có nhiều học viên, chia nhóm 3–4 người, tối đa 8 nhóm（giới hạn số lượt trình bày ở buổi 5） |
| **Template repository** | Chuẩn bị **template cho nhóm** trên GitHub của tổ chức và bật **Template repository**. Nội dung xem ở phụ lục A |
| **Thông báo trước cho học viên** | Gửi nội dung “Những việc nhờ học viên làm trước ngày học” bên dưới qua chat |
| **Repository làm mẫu của giảng viên** | Tạo 1 repository từ template và **chạy thử một lần phần làm mẫu của chương 4**（branch → commit → PR → merge） |
| **Kết quả giơ tay ở buổi 3** | Nắm số người “không thấy thay đổi trong Source Control” và “chưa có tài khoản GitHub” |

#### Những việc nhờ học viên làm trước ngày học

```text
Buổi 4 cả nhóm sẽ dùng GitHub. Hãy hoàn tất các việc sau trước ngày học.

1. Tạo tài khoản GitHub (chỉ với bạn chưa có)
2. Dán tên người dùng GitHub của mình vào chat (dùng để mời vào nhóm)
3. Cài GitHub CLI và đăng nhập sẵn
   Cài từ https://cli.github.com/, sau đó chạy gh auth login trong terminal
```

**Mục 3 là bắt buộc.** GitHub CLI được dùng cho `/start-task` khi bắt đầu task, và để tạo PR và Issue. Học viên chưa làm mục này sẽ phải tạo PR và gán người phụ trách trên màn hình web của GitHub, nên sẽ mất nhiều thời gian hơn（các bước có ở chương 4 và chương 6）.

> **Nếu chưa thu đủ mục 2, việc mời ở chương 3 sẽ bị dừng lại.** Với học viên chưa gửi vào thời điểm trước ngày học, hãy nhắc riêng từng người.

---

## Chuẩn bị trong ngày（kiểm tra lúc 0:00）

### Mạch của phần này

1. 00-3 Danh sách chuẩn bị trong ngày

### 00-3 Danh sách chuẩn bị trong ngày

| Mục | Các bước |
|------|------|
| **Danh sách nhóm** | Đưa lên slide hoặc chat. Gồm **ai ở nhóm nào** và số thứ tự nhóm |
| **URL của template** | Chuẩn bị sẵn để dán `https://github.com/xrnd-tec/cursor-team-template` vào chat |
| **Danh sách chủ đề** | Slide của chương 2（5 chủ đề, 2 trang）. Chuẩn bị thêm **bảng ghi lại số chủ đề mỗi nhóm đã chọn** |
| **Thư mục làm việc** | Hôm nay không làm việc bên trong `cursor-course/`. **Repository của nhóm được clone vào một nơi khác**（chương 3） |
| **Model** | Để nguyên Auto |
| **Node.js** | Hôm nay cũng không cần. Ứng dụng chỉ giới hạn ở loại chạy được chỉ bằng trình duyệt |

> **Không tạo repository của nhóm bên trong `cursor-course/`.** Khi đó sẽ có repository nằm bên trong repository khác, và phần hiển thị của Source Control sẽ bị rối.

---

## Bảng thời gian

### Mạch của phần này

1. 00-4 Lộ trình 90 phút

### 00-4 Lộ trình 90 phút

| Thời gian | Chương | Nội dung | Người thực hiện |
|------|----|------|------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Thông báo làm theo nhóm, phân chia vai trò（5 phút） | Giảng viên |
| 0:05 | Chương 2 Chọn chủ đề | Chọn chủ đề **trong danh sách** và xác nhận “thao tác trình bày”（5 phút） | Nhóm |
| 0:10 | Chương 3 Tạo repository | Tạo từ template → mời thành viên → mọi người clone（12 phút） | Nhóm |
| 0:22 | Chương 4 Tạo PR đầu tiên | Thêm rule của nhóm bằng PR（18 phút） | Nhóm |
| 0:40 | Chương 5 Tạo PR yêu cầu và task | Yêu cầu → task → PR → chuyển task thành Issue（17 phút） | Nhóm |
| 0:57 | Chương 6 Làm task 1 và phân chia task | `/start-task` cho task 1 → merge → mỗi người chạy `/start-task`（23 phút） | Nhóm |
| 1:20 | Chương 7 Tổng kết | Báo cáo tiến độ, giới thiệu buổi sau（10 phút） | Giảng viên |

**Thời gian học viên tự thực hành là 75 / 90 phút.** Vì chủ đề được chọn trong danh sách nên chương 2 được rút xuống 5 phút, và 5 phút còn dư được chuyển sang chương 6（merge task 1）. Giảng viên chỉ nói liền một mạch ở chương 1, chương 7 và phần làm mẫu đầu chương 4.

> **Nếu trễ giờ**: hạ mức hoàn thành của chương 6 xuống “đã tạo PR cho task 1（merge ở buổi sau cũng được）”. **Không rút ngắn chương 4**, vì đây là chương duy nhất cả lớp cùng xem luồng làm PR một lần. Phần viết yêu cầu ở chương 5 dừng ở phút thứ 8, các mục chưa điền có thể để trống và tạo PR.

---

## Trang bìa và phần mở đầu — 0:00（tính trong chương 1）

> **Không tính thành chương riêng.** Nói tiếp ngay ở đầu chương 1.

### Mạch của phần này

1. 0-1 Từ trang bìa đến nội dung hôm nay

### 0-1 Từ trang bìa đến nội dung hôm nay

#### ［Slide］Trang bìa

```
Bắt đầu làm theo nhóm

Khóa thực hành Cursor　Buổi 4 / 5　・　90 phút
（Ngày）
```

#### ［Slide］Ôn lại buổi trước（30 giây）

**Ở buổi trước, học viên đã viết 3 nội dung thành văn bản.**

| Nội dung đã viết | Chi tiết |
|---|---|
| **Yêu cầu** | Làm gì / màn hình / thao tác / **không làm gì** |
| **Task** | Kích thước có thể giao trong 1 lần nhờ. **Có điều kiện hoàn thành** |
| **Rule** | Đặt 2 dòng trước đây phải viết mỗi lần vào `.cursor/rules/` |

> “Vì đã viết thành văn bản nên **có thể nhờ người khác làm tiếp**.” — đây là điều giảng viên đã nói ở cuối buổi trước.

#### ［Slide］Nội dung thực hành hôm nay

**Hôm nay, “người khác” đó là các thành viên trong nhóm.**

| | Việc cần làm | Chương |
|---|---|---|
| 1 | Cả nhóm dùng chung một repository | Chương 3 |
| 2 | Biến rule của buổi trước thành **rule của nhóm** | Chương 4 |
| 3 | **Cả nhóm** viết yêu cầu và task | Chương 5 |
| 4 | Phân chia task và bắt đầu triển khai | Chương 6 |

**Mọi thay đổi đều được chia sẻ bằng PR.** Đây là công cụ mới duy nhất của hôm nay.

#### ［Slide］Cách tiến hành hôm nay（3 điều）

1. **Không cần hoàn thành ứng dụng.** Mục tiêu hôm nay là “bắt đầu làm”. Việc hoàn thiện và trình bày sẽ làm ở buổi 5
2. **Khi chưa đến lượt mình, hãy là người kiểm tra.** Việc của người không thao tác trên màn hình là **đọc PR**
3. **Khi gặp khó khăn, trước tiên hãy hỏi nhóm.** Nếu vẫn chưa rõ thì giơ tay

#### Giảng viên nói gì

Hãy **bắt đầu bằng cách trích nguyên văn** câu cuối của buổi 3（“có thể nhờ người khác làm tiếp”）. Hôm nay là buổi kiểm chứng câu nói đó.

> “Cuối buổi trước, tôi đã nói: ‘Vì đã viết thành văn bản nên có thể nhờ người khác làm tiếp.’ Hôm nay chúng ta sẽ thực sự nhờ. Người được nhờ là các thành viên trong nhóm.”

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Vắng buổi trước nên chưa viết rule | Không sao. Ở chương 4, Tech Lead của nhóm sẽ viết rule, và **chỉ cần Sync là rule đến máy của mọi người** |
| Chưa có tài khoản GitHub | Nhờ học viên tạo ngay tại chỗ（chỉ cần email là tạo được）. Trong lúc chưa tạo xong, học viên xem màn hình cùng nhóm |

---

## Chương 1 Mục tiêu hôm nay — 0:00（5 phút）

> Cả nhóm cùng làm một ứng dụng. **Ở chương này chỉ có giảng viên nói.** Cuối chương, các nhóm phân chia vai trò trong nhóm.

### Mạch của chương

1. 1-1 Chia sẻ mục tiêu hôm nay và phân chia vai trò

### 1-1 Chia sẻ mục tiêu hôm nay và phân chia vai trò

#### ［Slide］Mục tiêu hôm nay

| Mục | Điều làm được | Chương |
|----|--------------------|------------|
| 01 | Tạo repository của nhóm và mọi người đều có repository trên máy | Chương 3 |
| 02 | Chia sẻ rule của nhóm đến mọi người bằng PR | Chương 4 |
| 03 | Cả nhóm viết yêu cầu và task, rồi kiểm tra bằng PR | Chương 5 |
| 04 | Merge task 1 và bắt đầu task mình phụ trách ← **thử sức** | Chương 6 |

#### ［Slide］Vai trò trong nhóm

**Hôm nay có 4 vai trò sau.** Với nhóm 3 người, Tech Lead kiêm nhiệm vai trò QA.

| Vai trò | Số người | Công việc hôm nay |
|------|------|--------------|
| **Tech Lead** | 1 | Tạo repository / mời thành viên / **tạo PR đầu tiên（rule）** |
| **PM** | 1 | Dùng `/requirements` và `/task-breakdown` để **tạo PR yêu cầu và task**. Quyết định khi ý kiến khác nhau và báo cáo tiến độ（là người nói chính khi trình bày ở buổi 5） |
| **Engineer** | 1 | **Triển khai task 1 và tạo PR** |
| **QA** | 1 | Chạy thử trước “thao tác trình bày”. **Chạy PR trên màn hình để kiểm tra, rồi merge**（thao tác màn hình khi trình bày ở buổi 5） |

**Mọi người còn có thêm một việc: đọc PR của người khác.**

#### ［Slide］Quy tắc PR（2 điều）

1. **Người tạo PR không tự merge PR của mình.** Một người khác đọc và Approve rồi mới merge
2. **Không commit thẳng vào `main`.** Luôn tạo branch làm việc trước khi thay đổi

#### ［Slide］Góc giải thích — Thuật ngữ cơ bản của GitHub

**Vì đây là lần đầu dùng GitHub nên các thuật ngữ sử dụng từ hôm nay được giải thích trước.** Học viên không cần nhớ cơ chế chi tiết.

| Từ | Nghĩa | Tình huống dùng hôm nay |
|---|---|---|
| **GitHub** | Dịch vụ web để đặt repository lên Internet và chia sẻ trong nhóm | Đặt repository của nhóm |
| **Repository** | Tập hợp các file của một ứng dụng và lịch sử thay đổi của chúng | Cả nhóm tạo một repository |
| **Branch** | Nơi thực hiện thay đổi tách riêng khỏi main. Sửa trên branch thì main không thay đổi | Mỗi task tạo một branch |
| **main** | Branch gốc của repository. Chỉ đưa vào những gì nhóm đã kiểm tra | Dùng để trình bày ở buổi 5 |
| **Commit** | Ghi lại thay đổi thành một mốc | Mỗi khi hoàn tất một việc |
| **PR（pull request）** | Lời đề nghị “Hãy kiểm tra xem thay đổi của branch này có thể đưa vào main chưa” | Khi chia sẻ thay đổi |
| **Merge** | Đưa thay đổi của PR vào main | Sau khi kiểm tra xong |

> Nguồn chính của phần giải thích thuật ngữ: [mục “Thuật ngữ” trong `20-git.md`](../fundamentals/20-git.md)

#### Giảng viên nói gì

> “Từ hôm nay, cả nhóm sẽ cùng làm một ứng dụng. Ứng dụng sẽ được trình bày ở buổi 5.
> Công cụ mới hôm nay chỉ có **PR**. PR là cách chia sẻ với ý nghĩa ‘**Tôi đã làm đến đây, hãy kiểm tra giúp**’.
> Tiêu chí kiểm tra là **điều kiện hoàn thành** đã viết ở buổi trước.”

**Cho các nhóm 30 giây để phân chia vai trò.** Nếu không quyết được, hãy gán Tech Lead, PM, Engineer, QA **theo thứ tự từ trên xuống trong danh sách nhóm**.

> “Vai trò chỉ áp dụng cho hôm nay. Ở buổi 5 có thể đổi vai.”

#### Điểm kiểm tra

- [ ] Mỗi nhóm đã phân chia xong 4 vai trò（nhóm 3 người là 3 vai trò）

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không quyết được vai trò | Gán theo thứ tự từ trên xuống trong danh sách nhóm |
| Nhóm chỉ còn 2 người（do vắng mặt） | Tech Lead kiêm PM, Engineer kiêm QA. Chỉ cần đảm bảo **luôn có 1 người đọc PR** |
| “PR là gì?” | Cho biết sẽ xem PR thực tế ở chương 4. Ở đây chưa giải thích |

---

## Chương 2 Chọn chủ đề — 0:05（5 phút）

> Các nhóm **chọn nội dung sẽ làm trong danh sách 5 chủ đề giảng viên đã chuẩn bị**. Các chủ đề đều là **loại công việc doanh nghiệp thực sự đặt hàng**, đồng thời **thú vị khi thao tác**.
> **Nếu thỏa các điều kiện, nhóm cũng có thể chọn chủ đề ngoài danh sách.**

### Mạch của chương

1. 2-1 Chọn chủ đề trong danh sách và quyết định “thao tác trình bày”

### 2-1 Chọn chủ đề trong danh sách và quyết định “thao tác trình bày”

#### ［Slide］Danh sách chủ đề

**Lần này, ứng dụng được làm như một dự án có khách hàng đặt hàng.** Giả định là nhóm nhận yêu cầu từ “khách hàng” trong bảng.

| # | Chủ đề | Khách hàng | Thao tác trình bày |
|---|---|---|---|
| 1 | **Gọi món trên điện thoại** | Quán cà phê | “Khách đặt món trên màn hình khách thì món **hiện ở màn hình bếp**; bấm ‘Đã phục vụ’ thì màn hình khách đổi trạng thái” |
| 2 | **Đặt ghế rạp chiếu phim** | Rạp chiếu phim | “Chọn 2 ghế và loại vé thì hiện tổng tiền; đặt xong thì **không chọn được ghế đó nữa**” |
| 3 | **Bốc thăm khuyến mãi** | Phòng marketing hãng nước giải khát | “Bấm nút thì trúng quà và số quà còn lại giảm; **quà đã hết thì không trúng nữa**” |
| 4 | **Trắc nghiệm gợi ý sản phẩm** | Chuỗi cà phê | “Trả lời 5 câu hỏi thì hiện **kiểu người và loại cà phê được gợi ý**” |
| 5 | **Máy bán hàng tự động** | Hãng máy bán hàng | “Bỏ 20.000 đồng vào rồi mua một món giá 12.000 đồng thì ra hàng và hiện **chi tiết tiền thối**” |

**Với chủ đề 1, “màn hình khách” và “màn hình bếp” được đặt hai bên trái phải của cùng một trang**（vì không dùng server）.

#### ［Slide］Những điều cần xác nhận với khách hàng

**Tính thực tế của dự án thể hiện ở mức chi tiết của các quy tắc.** Tất cả các điểm dưới đây đều phải hỏi khách hàng mới quyết định được, và **nếu không hỏi thì AI sẽ tự quyết định**.

| # | Cần quyết trong yêu cầu | Ví dụ “không làm gì” |
|---|---|---|
| 1 | Tuỳ chọn（size, topping）và giá / **cách xử lý món đã hết** / được huỷ đơn đến lúc nào / trạng thái đơn（tiếp nhận → đang chế biến → đã phục vụ） | Thanh toán / đăng nhập / nhiều cửa hàng |
| 2 | Loại vé（thường, học sinh sinh viên, người cao tuổi）và giá / mỗi lần chọn tối đa mấy ghế / **có cho chọn để lại đúng 1 ghế trống lẻ không** / ghế xe lăn | Thanh toán / nhiều suất chiếu / thành viên |
| 3 | **Tỉ lệ trúng của từng quà** / quà hết thì tỉ lệ đó chuyển đi đâu / mỗi ngày bốc được mấy lần（tải lại trang có làm số lần quay về ban đầu không）/ có ô không trúng không | Gửi quà / đăng nhập / hiệu ứng cầu kỳ |
| 4 | Cách tính điểm cho câu hỏi và lựa chọn / **kết quả khi bằng điểm** / có quay lại trả lời lại được không / số kết quả（có bao nhiêu kiểu người） | Đăng mạng xã hội / tạo ảnh / lưu câu trả lời |
| 5 | Loại tiền nhận（các loại xu, tiền giấy）/ **khi không đủ tiền lẻ để thối** / hết hàng / cần trả tiền（huỷ） | Ví điện tử / hiển thị nhiệt độ / thống kê doanh thu |

**Phần in đậm là các quy tắc đặc biệt dễ khác ý kiến.** Giống như phần “so sánh giữa các bộ bài cùng loại” trong bài poker ở buổi 3, nếu không viết ra thì AI thường sẽ không hỏi.

**Điều kiện chung（cho cả 5 chủ đề）**

- Dữ liệu **chỉ lưu trong trình duyệt**（`localStorage`. Không dùng server）
- Thực đơn, ghế, quà, câu hỏi, sản phẩm… được **viết sẵn cố định từ đầu**（không làm màn hình quản lý）
- Không dùng ảnh. Hiển thị bằng **emoji và màu**

**Có thể chọn trùng chủ đề với nhóm khác.** Dù cùng chủ đề, cách quyết định quy tắc khác nhau sẽ cho ra sản phẩm khác nhau（có thể so sánh khi trình bày ở buổi 5）.

#### ［Slide］Điều kiện khi chọn chủ đề ngoài danh sách

| Điều kiện | Lý do |
|------|------|
| **Chạy chỉ bằng trình duyệt**（HTML + JS. Không dùng Node.js, server） | Làm được trong cùng môi trường với buổi 3 |
| **1 màn hình** | Kích thước hoàn thành kịp trước buổi 5 |
| **Không dùng API bên ngoài** | Đây là nguyên nhân khiến ứng dụng chạy được trên máy người này nhưng không chạy trên máy người khác |
| **Nói được “Bấm ○○ thì thành △△”** | Mục tiêu không bị lệch |
| **Nói được khách hàng và những điều cần quyết trong yêu cầu** | Theo cùng hình thức “dự án thực tế” như danh sách |

**Kích thước tối đa là khoảng bằng các chủ đề trong danh sách.** Hãy báo cho giảng viên trước khi tiến hành.

#### ［Slide］Học viên làm gì（5 phút・mọi người）

**① Chọn 1 chủ đề trong danh sách（3 phút）**

Nhóm muốn chọn chủ đề ngoài danh sách thì kiểm tra xem có thỏa các điều kiện ở trên không, rồi báo cho giảng viên.

**② Xác nhận “thao tác trình bày”（1 phút）**

Nhóm chọn trong danh sách có thể dùng nguyên “thao tác trình bày” trong bảng. Nếu muốn thay đổi, hãy sửa để có thể nói theo dạng sau.

```text
“Bấm ○○ thì thành △△”
```

Khi trình bày ở buổi 5, nhóm **chỉ trình bày thao tác này**.

**③ PM ghi lại（1 phút）**

PM giữ lại chủ đề, thao tác trình bày và số thứ tự trong danh sách cho đến chương 5.

#### Giảng viên nói gì

> “Từ hôm nay, chúng ta làm ứng dụng như **một dự án có khách hàng đặt hàng**. Giả định là nhận yêu cầu từ quán cà phê, rạp chiếu phim hoặc nhà sản xuất.
> Hãy xem bảng thứ 2. ‘Có cho chọn để lại đúng 1 ghế trống lẻ không’, ‘Khi không đủ tiền lẻ để thối thì xử lý thế nào’ — **tất cả đều là những điều phải hỏi khách hàng mới quyết định được**.
> Nếu làm mà không hỏi, AI sẽ tự quyết định. Giống như bài poker ở buổi 3, khi AI tự quyết cả loại game.”

**Dù chọn chủ đề nào, trọng tâm của yêu cầu là “quy tắc”.** Ở chương 5, nếu có nhóm không ghi quy tắc nào vào mục “làm gì”, hãy chỉ vào bảng này.

Đi quanh lớp và ghi lại **số chủ đề của mỗi nhóm**（dùng khi báo cáo tiến độ ở chương 7 và khi quyết định thứ tự trình bày ở buổi 5）.

**Với nhóm chọn chủ đề ngoài danh sách, chỉ hỏi 1 câu.**

> “Thao tác trình bày là gì?”

Nếu học viên bắt đầu liệt kê chức năng như “làm được ○○, cũng làm được △△…” thì chủ đề đang quá lớn.

> “Chủ đề này có lớn hơn các chủ đề trong danh sách không? Nếu lớn hơn, hãy chuyển một số phần sang ‘không làm gì’, hoặc chọn lại trong danh sách.”

#### Điểm kiểm tra

- [ ] Đã chọn 1 chủ đề（số trong danh sách, hoặc đã báo giảng viên về chủ đề ngoài danh sách）
- [ ] Nói được “Bấm ○○ thì thành △△” trong một câu

**Với nhóm chưa quyết định được sau 3 phút, giảng viên sẽ chọn 1 chủ đề trong danh sách.**

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không quyết định được | **Giảng viên chọn 1 chủ đề trong danh sách** |
| Ý kiến khác nhau | PM quyết định |
| Chủ đề ngoài danh sách quá lớn（đăng nhập, đấu online, nhiều màn hình） | Thu gọn thành 1 màn hình, 1 người dùng. Nếu không thu gọn được thì chọn lại trong danh sách |
| Muốn dùng API bên ngoài（thời tiết, dịch thuật…） | Lần này không được. Chuyển sang hướng **dùng dữ liệu cố định để tạo giao diện giống vậy**, hoặc chọn trong danh sách |

---

## Chương 3 Tạo repository — 0:10（12 phút）

> Cả nhóm dùng chung một repository. **Tech Lead tạo repository, mọi người clone về máy.**

### Mạch của chương

1. 3-1 Repository là gì, cách đặt repository hôm nay（giải thích）
2. 3-2 Tạo từ template và mọi người clone

### 3-1 Repository là gì, cách đặt repository hôm nay（giải thích）

#### ［Slide］Giải thích — Cách đặt repository hôm nay

```
GitHub (repository của nhóm, 1 cái)
   ├─ clone về máy của Tech Lead
   ├─ clone về máy của PM
   ├─ clone về máy của Engineer
   └─ clone về máy của QA
```

**Mọi người đều có bản sao của cùng một repository trên máy.** Một người gửi thay đổi lên GitHub, những người khác lấy thay đổi đó về — việc này được làm bằng PR.

#### ［Slide］Giải thích — Nội dung có sẵn trong template

Repository của nhóm được tạo từ **template** do giảng viên chuẩn bị. Từ đầu đã có sẵn các nội dung sau.

| Nội dung có sẵn | Chi tiết |
|---|---|
| `.cursor/skills/requirements/` | Skill tạo yêu cầu đã dùng ở buổi trước. **Nơi lưu là `docs/requirements.md`** |
| `.cursor/skills/task-breakdown/` | Skill chia task đã dùng ở buổi trước. **Nơi lưu là `docs/tasks.md`** |
| `README.md` | Chỗ để ghi tên nhóm, chủ đề và thao tác trình bày |
| `.gitignore` | Danh sách các file không commit |

**Rule（`.cursor/rules/`）chưa có sẵn.** Rule sẽ được cả nhóm thêm vào ở chương 4.

> Chi tiết hơn: [`20-git.md`](../fundamentals/20-git.md) · [`07-skills.md`](../fundamentals/07-skills.md)

#### ［Slide］Góc giải thích — Thuật ngữ khi tạo repository

| Từ | Nghĩa | Tình huống dùng hôm nay |
|---|---|---|
| **Template repository** | Repository dùng làm mẫu khi tạo repository mới. Nhấn Use this template để tạo repository có sẵn các file giống vậy | Tạo từ template do giảng viên chuẩn bị |
| **Collaborator** | Thành viên được mời vào với quyền ghi vào repository | Tech Lead mời thành viên |
| **Clone** | Sao chép repository trên GitHub về máy của mình | Mọi người đều thực hiện |
| **GitHub CLI（`gh`）** | Công cụ để thao tác GitHub bằng lệnh trong terminal | Khi Agent tạo PR / Issue, khi dùng `/start-task` |

> Nguồn chính của phần giải thích thuật ngữ: [mục “Thuật ngữ” trong `20-git.md`](../fundamentals/20-git.md)

### 3-2 Tạo từ template và mọi người clone

#### ［Slide］Học viên làm gì（12 phút）

**① Tech Lead: Tạo repository từ template（3 phút）**

1. Mở **URL của template** được dán trong chat
2. **Use this template** → **Create a new repository**
3. Tên repository là **`team-<số nhóm>-<tên ứng dụng>`**（ví dụ: `team-3-quiz`）
4. Để Private cũng được → **Create repository**

**② Tech Lead: Mời thành viên（2 phút）**

Trong repository vừa tạo, chọn **Settings** → **Collaborators** → **Add people** → nhập tên người dùng GitHub của thành viên. Thêm **tất cả thành viên**.

（Màn hình: `s03-01` Use this template ／ `s03-02` Add people）

**③ Các thành viên khác ngoài Tech Lead: Nhận lời mời（2 phút）**

Nhấn **Accept invitation** trong email do GitHub gửi đến hoặc trong thông báo trên GitHub.

> Nếu không tìm thấy email, hãy mở `https://github.com/<tên người dùng của Tech Lead>/<tên repository>/invitations` để hiện màn hình chấp nhận.

**④ Mọi người: Clone và mở bằng Cursor（4 phút）**

Các bước giống buổi 1. Hãy lưu **bên ngoài `cursor-course/`**.

`Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ `Git: Clone` → dán URL của repository → chọn nơi lưu → **Open**

**⑤ Mọi người: Kiểm tra đã dùng được commit và GitHub CLI chưa（1 phút）**

Gửi đoạn sau cho Agent.

```text
Kiểm tra xem git trên máy này đã đặt user.name và user.email chưa.
Kiểm tra luôn gh auth status xem đã đăng nhập GitHub CLI chưa.
Nếu thiếu gì thì chỉ cho tôi biết cần làm gì. Đừng tự cài đặt.
```

Học viên chưa thiết lập `user.name` / `user.email` thì cho Agent biết **tên của mình và địa chỉ email đã đăng ký GitHub** để Agent thiết lập giúp.
Học viên chưa đăng nhập `gh` thì chạy `gh auth login` trong terminal（`` Ctrl+` ``）.

> Nếu phần này còn trống, từ chương 4 trở đi **sẽ bị dừng lại ngay khi commit**. Hãy hoàn tất ngay bây giờ.

#### Giảng viên nói gì

**Trong lúc làm ① đến ③**: các thành viên khác ngoài Tech Lead phải chờ. **Trong lúc này, giảng viên không cần xem màn hình của mọi người.** Hãy chỉ vào nội dung của template（slide）và cho biết trước: “Skill của buổi trước đã có sẵn. Rule thì chưa có. Rule sẽ được thêm ở chương sau.”

**Sau ④**: cho học viên kiểm tra xem thanh bên đã hiện `.cursor/skills/` chưa.

> “Skill của buổi trước **đã có sẵn trong repository này**. Vì tạo từ template nên ngay từ đầu mọi người đều có cùng công cụ.”

#### Điểm kiểm tra

- [ ] Tất cả thành viên trong nhóm đã mở repository của nhóm bằng Cursor
- [ ] Thanh bên đã hiện `.cursor/skills/`
- [ ] Đã thiết lập `user.name` / `user.email` của git
- [ ] `gh auth status` cho thấy đã đăng nhập

**Chưa chuyển sang chương sau cho đến khi mọi người hoàn tất.** Từ chương 4 trở đi, kịch bản giả định mọi người đều đã có repository trên máy. Với nhóm có học viên đang chậm, các thành viên khác hãy hỗ trợ.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không thấy **Use this template** | Trong thiết lập của template chưa bật **Template repository**. Giảng viên sẽ sửa |
| Không nhận được email mời | Cho học viên mở `https://github.com/<Tech Lead>/<tên repository>/invitations`. Nếu vẫn không hiện, Tech Lead kiểm tra lại chính tả tên người dùng |
| Bị yêu cầu xác thực khi clone | Vì là repository Private nên cần đăng nhập GitHub. Cho phép trên trình duyệt rồi quay lại |
| Đã clone vào bên trong `cursor-course/` | Đóng lại một lần rồi clone lại vào nơi khác |
| Không biết cách thiết lập `user.name` | Nhờ Agent: “Hãy đặt user.name là ○○, user.email là ○○”（dùng `--global` cũng được） |
| Tech Lead vắng mặt hoặc đến muộn | Người tiếp theo thay vai trò Tech Lead. Có thể dời các vai trò |

---

## Chương 4 Tạo PR đầu tiên — 0:22（18 phút）

> Biến rule đã viết ở buổi trước thành **rule của nhóm**. Tech Lead tạo PR, một người khác đọc rồi merge, và **rule đến máy của mọi người**.
> **Đây là chương duy nhất hôm nay cả lớp cùng xem luồng làm PR một lần. Không rút ngắn chương này.**

### Mạch của chương

1. 4-1 Luồng làm PR, giảng viên làm mẫu（giải thích・5 phút）
2. 4-2 Thêm rule bằng PR（13 phút）

### 4-1 Luồng làm PR, giảng viên làm mẫu（giải thích）

#### ［Slide］Góc giải thích — Thuật ngữ khi chia sẻ thay đổi

| Từ | Nghĩa | Tên trên màn hình |
|---|---|---|
| **Stage** | Chọn file sẽ đưa vào commit | Nút **＋** trong bảng Source Control |
| **Push** | Gửi branch và commit trên máy mình lên GitHub | **Publish Branch**（lần đầu） / **Sync Changes** |
| **Pull** | Lấy thay đổi mới trên GitHub về máy mình | **Sync Changes** |
| **Review / Approve** | Kiểm tra thay đổi của PR / kiểm tra xong và xác nhận “không có vấn đề” | **Files changed** / **Review changes → Approve** |
| **Conflict** | Trạng thái 2 người sửa cùng một chỗ trong cùng một file nên Git không tự gộp được | This branch has conflicts |

> Nguồn chính của phần giải thích thuật ngữ: [mục “Thuật ngữ” trong `20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Giải thích — Các bước làm PR

```
① Tạo branch                      (tên branch ở góc dưới bên trái Cursor)
② Sửa file                       (Agent)
③ Commit                         (Source Control → ＋ → ✨ → Commit)
④ Gửi lên GitHub                 (Publish Branch)
⑤ Tạo PR                         (nhờ Agent / trên màn hình GitHub)
⑥ Người khác đọc, Approve → merge (trên màn hình GitHub)
⑦ Mọi người cập nhật main        (chuyển sang main → Sync Changes)
```

**Bước ① đến ⑤ do người tạo PR, bước ⑥ do người đọc PR, bước ⑦ do mọi người** thực hiện.

#### ［Slide］Giải thích — Bảng Source Control

Mở **“Source Control” ở thanh bên trái**（`Ctrl+Shift+G`. Trên Mac cũng là `Ctrl+Shift+G`）. Đây là nơi ở buổi trước đã hiện số lượng thay đổi.

| Vị trí | Chức năng |
|---|---|
| **Tên branch** ở góc dưới bên trái（thanh trạng thái） | Nhấp → **Create new branch...** để tạo branch / chuyển branch |
| Nút **＋** ở **Changes** | Chọn file sẽ đưa vào commit（stage） |
| Nút **✨** ở ô nhập | AI viết nháp commit message. **Đọc lại rồi mới** Commit |
| **Publish Branch** / **Sync Changes** | Gửi lên GitHub / lấy từ GitHub về |

> **Message tạo bằng ✨ chỉ là bản nháp.** Giống như không nhấn Keep khi chưa đọc diff, không commit khi chưa đọc message.

#### ［Slide］Giải thích — Cách tạo PR（2 cách）

| Cách làm | Điều kiện | Các bước |
|---|---|---|
| **Nhờ Agent** | Đã cài GitHub CLI（`gh`）và đã đăng nhập | Gửi prompt bên dưới. Agent sẽ chạy `gh pr create` |
| **Tạo trên màn hình GitHub** | Không cần gì thêm | Nhấn **Compare & pull request** hiện ra khi mở repository |

```text
Tạo PR vào main từ branch hiện tại.
Tiêu đề là "Thêm rule của nhóm".
Trong phần mô tả, ghi file đã thêm và tóm tắt nội dung.
```

**Cách nào cũng tạo ra PR giống nhau.** PR và commit do Agent tạo sẽ có dòng `Made with Cursor`（thiết lập mặc định của Cursor）.

> Chi tiết hơn: [`20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Giảng viên làm mẫu（ảnh chụp màn hình）

**Trên repository làm mẫu của giảng viên, lần lượt cho xem 4 slide（Giảng viên làm mẫu ① đến ④）（3 phút）.** Học viên dừng thao tác để quan sát.

| Slide | Màn hình cho xem |
|---|---|
| Giảng viên làm mẫu ① Tạo branch và nhờ Agent tạo file rule | Tên branch ở góc dưới bên trái → Create new branch...（`feature/team-rules`）（`s03-05`） ／ Xem diff của `team.mdc` do Agent tạo rồi nhấn Keep（`s03-06`） |
| Giảng viên làm mẫu ② Stage rồi commit | Nhấn ＋ ở `team.mdc` trong Changes（`s03-07`） ／ Message đã được tạo bằng ✨（`s03-09`） |
| Giảng viên làm mẫu ③ Gửi lên GitHub và tạo PR | Publish Branch（`s03-10`） ／ PR đã được tạo sau khi nhờ Agent（`s03-11`） |
| Giảng viên làm mẫu ④ Kiểm tra, merge rồi cập nhật về máy của mọi người | **Files changed** của PR → **Approve**（`s03-13`） ／ Trên màn hình của thành viên khác: main → Sync Changes → `team.mdc` hiện ra（`s03-17`） |

> Trong buổi học thực tế, lần lượt cho xem bằng ảnh chụp màn hình. Nếu làm trực tiếp, hãy dùng **repository đã chạy thử một lần trước đó**.

### 4-2 Thêm rule bằng PR

#### ［Slide］Học viên làm gì（13 phút）

**① Tech Lead: Tạo branch（1 phút）**

Tên branch ở góc dưới bên trái → **Create new branch...** → `feature/team-rules`

**② Tech Lead: Nhờ Agent viết rule（2 phút）**

Trong chat mới, gửi nguyên văn đoạn sau. **Nội dung gồm 4 dòng của buổi trước và thêm 1 dòng cho nhóm.**

```text
Tạo file .cursor/rules/team.mdc.
Đặt alwaysApply: true.
Nội dung chỉ gồm đúng 5 dòng sau. Đừng thêm gì khác.

- mỗi lần chỉ bắt tay vào đúng một task
- làm xong thì đối chiếu với điều kiện hoàn thành của task đó
- thỏa điều kiện hoàn thành thì dừng. Không tự đi tiếp sang task sau
- không thêm chức năng không được yêu cầu
- khi đang ở branch main thì không sửa file. Hãy nhắc tạo branch làm việc trước
```

Đọc diff, xác nhận chỉ có frontmatter `alwaysApply: true` và **đúng 5 rule**, rồi nhấn Keep.

**③ Tech Lead: Commit rồi gửi lên GitHub（2 phút）**

Source Control → nút **＋** ở `team.mdc` → **✨** → đọc message → **Commit** → **Publish Branch**

**④ Tech Lead: Tạo PR（2 phút）**

Học viên đã cài `gh` thì nhờ Agent（prompt ở trên）. Học viên chưa cài thì trên màn hình GitHub chọn **Compare & pull request** → **Create pull request**.

**⑤ 1 thành viên ngoài Tech Lead: Đọc rồi merge（3 phút）**

1. Mở repository của nhóm trên GitHub → **Pull requests** → PR của Tech Lead
2. Ở **Files changed**, đọc 9 dòng bao gồm frontmatter. Kiểm tra **có nội dung nào ngoài 5 rule bị thêm vào không**
3. **Review changes** → **Approve** → **Submit review**
4. **Merge pull request** → **Confirm merge**

**⑥ Mọi người: Cập nhật main（3 phút）**

1. Tên branch ở góc dưới bên trái → chọn `main`
2. Nhấn **Sync Changes** trong Source Control（hoặc `Ctrl+Shift+P` → `Git: Pull`）
3. Kiểm tra **`.cursor/rules/team.mdc` đã hiện ra** ở thanh bên

#### Giảng viên nói gì

**Ở bước ②**: chỉ vào dòng thứ 5.

> “Dòng thứ 5 là dòng thêm vào hôm nay. Dòng này giúp **AI dừng lại khi bắt đầu làm trực tiếp trên `main`**. Đây là quy tắc PR thứ 2 được viết thành rule.”

**Ở bước ⑤**: nói với người đọc PR.

> “**Approve là dấu hiệu cho biết ‘Tôi đã đọc, nội dung này ổn’.** Không cần góp ý sâu.
> Chỉ cần xem 2 điều: **có đúng 5 dòng đã nhờ không, và có thứ gì không được nhờ mà vẫn bị thêm vào không.** Đây là điều giống như đã kiểm tra trước khi Keep ở buổi trước.”

**Sau bước ⑥ — đây là phần quan trọng nhất của chương này.**

> “Rule được viết trên máy của Tech Lead **đã đến máy của mọi người**.
> Ở buổi trước, mỗi người viết rule **cho riêng mình**. Hôm nay, 1 người viết, chia sẻ bằng PR, và **cùng một rule có hiệu lực trong Cursor của mọi người trong nhóm**.”

**Với nhóm hoàn thành sớm, hãy cho học viên kiểm tra rule có hiệu lực không（không bắt buộc）:**

Khi đang ở `main`, nhờ Agent: “Thêm 1 dòng vào README”. **Nếu dòng thứ 5 có hiệu lực, Agent sẽ nhắc tạo branch.**

#### Điểm kiểm tra

- [ ] PR của Tech Lead đã được merge
- [ ] **Máy của mọi người** đều có `.cursor/rules/team.mdc`
- [ ] Người tạo PR và người merge là **2 người khác nhau**

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Đã tạo file trên `main` mà chưa tạo branch | Chỉ cần tạo branch ngay lúc đó, thay đổi sẽ được chuyển sang branch mới. **Nếu chưa commit** thì không có vấn đề |
| Không thấy nút ✨ / nhấn vào nhưng không có gì | Có thể file chưa được stage. Nhấn **＋** trước. Nếu vẫn không được thì tự viết message（“Thêm rule của nhóm”） |
| Khi Commit hiện thông báo “hãy thiết lập user.name” | Quay lại bước ⑤ của chương 3 |
| Khi Publish Branch bị yêu cầu đăng nhập | Đăng nhập GitHub trên trình duyệt và cho phép |
| Agent không tìm thấy `gh` | Tạo PR trên màn hình GitHub. **Chuyển cách làm ngay, không chờ** |
| Đã cài `gh` nhưng không tạo được PR | Chưa chạy `gh auth login`. Hôm nay tạo PR trên màn hình GitHub |
| **Không nhấn được nút Approve** | Không thể Approve PR của chính mình. **Người khác ngoài người tạo PR** thực hiện |
| Đã Sync nhưng không thấy `team.mdc` | Máy chưa chuyển sang `main`. Kiểm tra tên branch ở góc dưới bên trái |
| Nội dung nhiều hơn 5 dòng | Giống buổi trước, **dùng trường hợp này làm tài liệu học**. Nếu người đọc PR phát hiện ra thì việc kiểm tra đang có tác dụng |

---

## Chương 5 Tạo PR yêu cầu và task — 0:40（17 phút）

> Yêu cầu và task mà buổi trước mỗi người tự viết, hôm nay được **cả nhóm** cùng viết. **Mọi người đều đọc PR yêu cầu.**

### Mạch của chương

1. 5-1 Điểm thay đổi khi cả nhóm viết yêu cầu（giải thích）
2. 5-2 Yêu cầu → task → PR → chuyển task thành Issue

### 5-1 Điểm thay đổi khi cả nhóm viết yêu cầu（giải thích）

#### ［Slide］Giải thích — Điểm khác với buổi trước

| | Buổi trước（1 người） | Hôm nay（nhóm） |
|---|---|---|
| Người viết yêu cầu | Bản thân | **PM** viết. **Mọi người cùng trả lời** |
| Nơi lưu | `session02-spec/requirements.md` | **`docs/requirements.md`** |
| “Không làm gì” | Bản thân quyết định | **Cả nhóm thống nhất** |
| Task | Tự làm tất cả | **Chuyển thành Issue, mỗi người phụ trách một phần** |
| Kiểm tra đúng hay chưa | Tự kiểm tra trước khi Keep | **Mọi người đọc bằng PR** |

**Khi làm nhóm, mục “không làm gì” còn có tác dụng lớn hơn.** Nếu không ghi ra, **mỗi thành viên sẽ bắt đầu thêm những chức năng khác nhau**.

#### ［Slide］Giải thích — Cách chia task（khi làm nhóm）

| Quy định | Lý do |
|---|---|
| **Task 1 làm đến khi “màn hình hiện ra”** | Các task khác được làm trên nền task 1. **Task 1 chưa được merge thì các thành viên khác chưa bắt đầu được** |
| **Số task ≥ số người** | Mỗi người phụ trách ít nhất 1 task |
| **1 task = 1 branch = 1 PR** | PR càng nhỏ, người đọc càng dễ đọc hết |
| **Quản lý người phụ trách và trạng thái hoàn thành bằng Issue** | Nếu ghi người phụ trách hay dấu hoàn thành vào `tasks.md`, mọi người sẽ sửa cùng một file và PR bị xung đột. **Khi bắt đầu thì dùng `/start-task` để nhận phụ trách, khi PR được merge và Issue đóng thì hoàn tất** |

> Chi tiết hơn: [`07-skills.md`](../fundamentals/07-skills.md) · [`05-prompting.md`](../fundamentals/05-prompting.md)

### 5-2 Yêu cầu → task → PR → chuyển task thành Issue

#### ［Slide］Học viên làm gì（17 phút）

**PM là người thao tác trên màn hình.** Các thành viên khác xem màn hình của PM và **trả lời bằng lời**（nếu học online thì chia sẻ màn hình）.

**① PM: Tạo branch（1 phút）**

Xác nhận đang ở `main` → **Create new branch...** → `feature/requirements`

**② PM（mọi người cùng trả lời）: Viết yêu cầu（7 phút）**

Trong chat mới, gõ `/` → chọn **requirements** rồi gửi.

```text
/requirements (chủ đề đã chọn ở chương 2, viết ngắn gọn)
```

Skill sẽ hỏi gộp 4 câu hỏi. **Hãy thảo luận trong nhóm rồi trả lời.** Vừa xem bảng thứ 2 của chương 2（**những điều cần xác nhận với khách hàng**）vừa **ghi các quy tắc vào mục “làm gì”**, và quyết định mục “không làm gì”.

Kết quả được lưu vào **`docs/requirements.md`**.

**③ PM: Chia thành task（3 phút）**

```text
/task-breakdown
```

Chỉ cần chia được **ít nhất bằng số người và tối đa 10 task** là đủ. Nếu mỗi người có khoảng 2 task, ai làm xong sớm có thể nhận Issue tiếp theo. Kết quả được lưu vào **`docs/tasks.md`**. **Không ghi người phụ trách ở đây**（sẽ quyết định sau khi chuyển thành Issue ở bước ⑦）.

**④ PM: Ghi “thao tác trình bày”（1 phút）**

Ghi câu đã quyết định ở chương 2 vào mục “thao tác trình bày” trong `README.md`.

**⑤ PM: Tạo PR（1 phút）**

Giống chương 4. Source Control → ＋（**3 file**） → ✨ → Commit → Publish Branch → PR.

**⑥ Mọi người trừ PM: Đọc rồi 1 người merge（2 phút）**

Đọc `docs/requirements.md` ở **Files changed**. Nội dung cần xem là mục **“không làm gì”**.

- Chức năng mình định làm có nằm trong mục “không làm gì” không
- Mục “không làm gì” còn thiếu điều gì không

**Sau khi mọi người đã đọc**, 1 người Approve rồi merge. Sau đó **mọi người cập nhật main**（bước ⑥ của chương 4）.

#### ［Slide］Góc giải thích — Thuật ngữ về Issue

| Từ | Nghĩa |
|---|---|
| **Issue** | “Việc cần làm” được đăng ký trên GitHub. Hôm nay, mỗi task được tạo thành 1 Issue |
| **Người phụ trách（Assignee）** | Người thực hiện Issue đó. Tên hiện trong danh sách Issue |
| **Issue đang mở / đã đóng** | Issue chưa xong / Issue đã xong |
| **`Closes #số`** | Nếu ghi vào phần mô tả PR, khi PR được merge vào main thì Issue có số đó sẽ tự đóng |
| **Số Issue** | Issue và PR dùng chung dãy số. Nếu đã có 2 PR thì Issue tạo tiếp theo là #3 |

> Nguồn chính của phần giải thích thuật ngữ: [mục “Thuật ngữ” trong `20-git.md`](../fundamentals/20-git.md)

**⑦ PM: Chuyển task thành Issue（2 phút）**

Sau khi merge, gửi đoạn sau trong chat mới.

```text
/create-issues
```

Skill đọc `docs/tasks.md` trên `main` và tạo mỗi task thành 1 Issue. **Không gán người phụ trách（Assignee）.** Dù gửi 2 lần, cùng một Issue cũng không bị tạo trùng. Khi bắt đầu, mỗi người tự gán mình làm người phụ trách bằng `/start-task`（chương 6）.

Cả nhóm mở tab **Issues** của repository trên GitHub và kiểm tra đã có đủ Issue bằng số task.

#### Giảng viên nói gì

**Ở bước ②**: đi quanh lớp và tìm **nhóm đang thảo luận về mục “không làm gì”**. Nếu có, hãy giới thiệu cho cả lớp.

> “Nhóm này đang tranh luận về mục ‘không làm gì’. **Như vậy là tốt.** Nếu không thảo luận bây giờ, khi bắt đầu triển khai, **mỗi người sẽ làm một thứ khác nhau**.”

**Sau bước ③**: chỉ vào task 1 và nói.

> “Task 1 làm đến khi màn hình hiện ra. **Task này chưa được merge thì các thành viên khác chưa bắt đầu được.** Chương sau bắt đầu từ việc Engineer làm task 1.”

**Ở bước ⑥**: nói về điểm khác với buổi trước.

> “Khi mọi người đã đọc yêu cầu trong PR, sau này sẽ không có trường hợp ‘tôi chưa được nghe’.”

**Ở bước ⑦**: cho cả lớp xem tab Issues.

> “Các task đã thành Issue. **Hiện chưa có tên ai cả.** Ở chương sau, người bắt đầu sẽ dùng `/start-task` để gán tên mình. Issue đã có tên thì người khác không lấy được.”

#### Điểm kiểm tra

- [ ] Đã điền 4 mục trong `docs/requirements.md`（đặc biệt là mục **không làm gì**）
- [ ] `docs/tasks.md` có số task ít nhất bằng số người, và **đã có số Issue tương ứng**（chưa gán người phụ trách）
- [ ] `README.md` đã ghi “thao tác trình bày”
- [ ] PR yêu cầu đã được merge và **mọi người đã cập nhật main**

**Yêu cầu không cần hoàn hảo.** Dừng ở phút thứ 8, các mục chưa điền có thể để trống và tạo PR.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| `/requirements` không hiện trong danh sách | Repository không được tạo từ template（không có `.cursor/skills/`）. Báo giảng viên |
| Yêu cầu được lưu ở nơi khác ngoài `docs/` | Nhờ Agent: “Chuyển sang `docs/requirements.md`” |
| Thảo luận mãi không xong | Dừng ở phút thứ 8. **Những gì chưa quyết được thì đưa vào mục “không làm gì”** |
| Số task ít hơn số người | Nhờ `/task-breakdown` chia lại: “Chia lại để ○ người có thể phân chia” |
| Có từ 11 task trở lên | Thêm nội dung vào mục “không làm gì” rồi chia lại |
| Agent bắt đầu viết yêu cầu trên `main` | Quên tạo branch. **Nếu dòng thứ 5 của rule có hiệu lực thì Agent sẽ dừng**（nếu dừng thì giới thiệu cho cả lớp） |
| Mọi người đọc mất nhiều thời gian | Cho biết chỉ cần đọc phần “không làm gì” |
| Không tạo được Issue（không có `gh` / chưa đăng nhập） | Tạo trên màn hình GitHub. Ở **Issues → New issue**, đặt tiêu đề là “Task 1: （tên task）”, dán nội dung làm gì và điều kiện hoàn thành vào phần mô tả. Không gán người phụ trách |
| Issue bị tạo trùng | Đóng 1 Issue bằng **Close issue** |

---

## Chương 6 Làm task 1 và phân chia task — 0:57（23 phút）

> Engineer bắt đầu task 1 bằng `/start-task`, QA kiểm tra trên màn hình rồi merge. **Sau đó, mọi người dùng `/start-task` để bắt đầu task mình phụ trách.**

### Mạch của chương

1. 6-1 Nội dung người đọc PR cần xem（giải thích）
2. 6-2 Merge task 1 bằng PR và mỗi người bắt đầu bằng `/start-task`

### 6-1 Nội dung người đọc PR cần xem（giải thích）

#### ［Slide］Giải thích — Cần kiểm tra gì trước khi Approve

**Nội dung giống với những gì đã kiểm tra trước khi Keep ở buổi trước.** Chỉ khác là người kiểm tra chuyển từ bản thân sang người khác.

| | Buổi trước（trước khi Keep） | Hôm nay（trước khi Approve） |
|---|---|---|
| Đối tượng xem | diff | **Files changed** của PR |
| Nội dung kiểm tra | Đã thỏa điều kiện hoàn thành chưa | **Đã xác nhận được điều kiện hoàn thành trên màn hình chưa** |
| Tiêu chí | Điều kiện hoàn thành trong `tasks.md` | **Giống vậy**（`docs/tasks.md`） |

**Không cần đánh giá code tốt hay xấu.** Chỉ cần đánh giá 2 điều sau.

1. **Đã xác nhận được điều kiện hoàn thành trên màn hình chưa**（chuyển sang branch đó trên máy mình rồi mở bằng trình duyệt）
2. **Có thứ gì không được nhờ mà vẫn bị thêm vào không**（file, chức năng không có trong task）

#### ［Slide］Giải thích — Bắt đầu task bằng `/start-task`

**Mỗi lần bắt đầu task đều dùng `/start-task`.** Lệnh này thực hiện gộp các việc sau.

| Việc `/start-task` thực hiện | Lý do |
|---|---|
| Liệt kê các Issue chưa có người phụ trách | Biết được task nào còn trống |
| Gán mình làm người phụ trách（Assignee）của Issue đã chọn | **Người khác không bắt đầu cùng task đó.** Issue đã có người phụ trách thì không chọn được |
| Cập nhật `main` rồi tạo branch từ đó | Nếu tạo từ `main` cũ, sau này PR sẽ bị xung đột（conflict） |
| Hiện “làm gì” và “điều kiện hoàn thành” của task | Biết được tiếp theo cần gửi gì |

**`/start-task` không viết code.** Sau khi có branch, hãy gửi “làm gì” trong chat mới.

Trong phần mô tả PR, ghi **`Closes #số`**（số của Issue）. Khi PR được merge vào main, Issue đó sẽ tự đóng. **Issue đang mở ＝ task còn lại.**

> Chi tiết hơn: [`20-git.md`](../fundamentals/20-git.md) · [`11-bugbot-pr.md`](../fundamentals/11-bugbot-pr.md)

### 6-2 Merge task 1 bằng PR và mỗi người bắt đầu task mình phụ trách

#### ［Slide］Học viên làm gì（23 phút）

**① Engineer: Làm task 1（8 phút）**

1. Trong chat mới, gửi `/start-task` và chọn **Task 1**. Bạn trở thành người phụ trách và branch `feature/<số>-...` được tạo
2. Mở thêm một **chat mới** nữa, rồi **chỉ gửi phần “làm gì” của task 1** đã hiện ra

```text
(sao chép phần "làm gì" mà /start-task đã hiện ra)
```

**Không ghi điều kiện hoàn thành và câu “đừng đổi chức năng khác”.** Vì đã ghi vào rule ở chương 4 của buổi trước, **không cần ghi lại vẫn được tuân thủ**.

3. Đọc diff → mở bằng trình duyệt để kiểm tra điều kiện hoàn thành → Keep
4. Source Control → ＋ → ✨ → Commit → Publish Branch → PR. **Ghi `Closes #số` vào phần mô tả PR**（khi nhờ Agent, hãy thêm câu “ghi Closes #số vào phần mô tả”）

**Trong lúc làm ①, các thành viên khác: Xem danh sách Issue và suy nghĩ sẽ làm task nào**

Ở tab **Issues** trên GitHub, đọc điều kiện hoàn thành của các Issue khác ngoài task 1. **Chưa chạy `/start-task`**（chờ đến khi task 1 được merge）.

**② QA: Kiểm tra task 1 trên màn hình rồi merge（4 phút）**

1. Tên branch ở góc dưới bên trái → chọn branch của Engineer（`origin/feature/<số>-...`）（**lấy branch của Engineer về máy mình**）
2. Nhấp phải vào file HTML → **Open In Browser** để mở, và kiểm tra **điều kiện hoàn thành của task 1**
3. Xem **Files changed** của PR trên GitHub, kiểm tra không có file nào không được nhờ
4. **Approve** → **Merge pull request**

Khi merge, Issue của task 1 sẽ **tự đóng**（kiểm tra ở tab Issues）.

**③ Mọi người trừ Engineer: Bắt đầu task mình phụ trách bằng `/start-task`（3 phút）**

Trong chat mới, gửi `/start-task` và chọn 1 **Issue còn trống**. Bạn trở thành người phụ trách và branch được tạo từ `main` mới nhất.

> **Ai chọn trước thì được trước.** Issue mà người khác đã nhận phụ trách trước thì `/start-task` không cho chọn. Cả nhóm có thể thảo luận trước rồi mới chọn.

**④ Mọi người（thử sức）: Bắt đầu triển khai task mình phụ trách（thời gian còn lại）**

Các bước giống bước 2 đến 4 của ①. Gửi chỉ phần “làm gì” trong chat mới, và ghi `Closes #số` vào phần mô tả PR. **Nếu tạo được PR thì đã đạt mục 04 của hôm nay.**

#### ［Slide］Mức hoàn thành hôm nay

- [ ] PR của task 1 đã được merge
- [ ] Trên `main` ở máy mọi người, **màn hình của task 1 hiện trên trình duyệt**
- [ ] Mọi người đã nhận 1 Issue mình phụ trách bằng `/start-task`
- [ ] **Đã tạo PR cho task mình phụ trách** ← thử sức

**Hoàn thành đến mục thứ 2 là đủ.** Mục thứ 3 và thứ 4 có thể làm tiếp ở nửa đầu buổi 5.

#### Giảng viên nói gì

**Trong lúc làm ①（thời gian các thành viên khác chờ）**: nói với những người đang chờ.

> “Việc của người đang chờ là **đọc điều kiện hoàn thành của task mình**. Khi tạo PR, hãy chuẩn bị để có thể nói cho người kiểm tra biết ‘cần kiểm tra bằng cách nào’.”

**Ở bước ②**: chọn 1 nhóm mà QA đang mở branch của người khác trên trình duyệt, và cho cả lớp xem.

> “Bây giờ, **QA đang chạy thứ Engineer đã làm trên máy của mình**. Đây chính là việc kiểm tra PR.
> Không đọc được code cũng không sao. **Có chạy đúng điều kiện hoàn thành không** thì ai cũng kiểm tra được.”

**Sau bước ③**: nói ngắn gọn về buổi sau.

> “Hãy xem tab Issues. **Issue nào cũng đã có tên.** Ai đang làm gì thì chỉ cần xem ở đây.”
> “Từ đây, mọi người sẽ cùng lúc sửa cùng một ứng dụng. **PR có thể bị conflict.** Nếu bị conflict, đừng vội, hãy nhờ Agent. Buổi sau sẽ thực hành cả cách xử lý này.”

#### Điểm kiểm tra

- [ ] Đã đạt đến mục thứ 2 của mức hoàn thành

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Danh sách branch không có branch của Engineer | Engineer chưa Publish Branch, hoặc máy mình chưa lấy bản mới nhất. Chạy `Ctrl+Shift+P` → `Git: Fetch` rồi thử lại |
| Task 1 không chạy | QA không Approve. **Ghi comment vào PR về điều đã xảy ra** → Engineer sửa trên cùng branch rồi commit → Sync Changes. PR sẽ tự cập nhật |
| Task 1 quá lớn, không xong trong 8 phút | Tạo PR khi màn hình đã hiện ra. **Dù chưa thỏa điều kiện hoàn thành, hôm nay ưu tiên trải nghiệm tạo PR** |
| **PR hiện “This branch has conflicts”** | Nhờ Agent bằng prompt bên dưới. Phương án giải quyết cũng phải đọc diff rồi mới Keep |
| Máy của mình hiện màn hình conflict | Nhấn **Resolve in Chat**. Agent sẽ đọc thay đổi của cả hai bên và đề xuất phương án giải quyết |
| Task của mình phải chờ task của người khác mới làm được | Vấn đề về thứ tự task. **Hôm nay, trong lúc chờ hãy chuyển sang đọc PR.** Buổi sau tiến hành theo thứ tự đó |
| Agent bắt đầu làm trên `main` | Dòng thứ 5 của rule chưa có hiệu lực. Tạo branch rồi làm lại |
| `/start-task` báo “không dùng được `gh`” | Chưa chạy `gh auth login`. Hôm nay làm thủ công: ở Issue, nhấn **Assignees** bên phải để chọn mình → `main` → Sync Changes → **Create new branch...** → `feature/<số>-<tên>` |
| `/start-task` báo “đã có người phụ trách” | Người khác đã nhận trước. Chọn **một Issue khác còn trống** |
| Không còn Issue trống | Tất cả task đã có người phụ trách. Chuyển sang **vai trò đọc PR của người khác** |
| Đã merge nhưng Issue không đóng | Phần mô tả PR không có `Closes #số`. Nhấn **Close issue** trên màn hình Issue để đóng |

Nội dung gửi cho Agent khi bị conflict:

```text
Lấy bản mới nhất của main vào branch hiện tại.
Nếu có conflict thì đề xuất cách giải quyết, giữ lại thay đổi của cả hai bên.
Giải quyết xong thì commit, nhưng chưa push.
```

---

## Chương 7 Tổng kết — 1:20（10 phút）

> Báo cáo tiến độ và giới thiệu buổi sau. **Chương này không rút ngắn.**
> Phân bổ: báo cáo tiến độ 4 + điều cần nhớ 2 + giới thiệu buổi sau 1 + bài tập và thông báo 3 = 10 phút

### Mạch của chương

1. 7-1 Tiến độ · điều cần nhớ · buổi sau

### 7-1 Tiến độ · điều cần nhớ · buổi sau

#### ［Slide］Báo cáo tiến độ（mỗi nhóm 30 giây）

**PM** nói ngắn gọn 3 nội dung sau.

1. Chủ đề và **thao tác trình bày**
2. Số Issue đã đóng（＝ số task đã xong）
3. Việc đầu tiên sẽ làm ở buổi sau

#### ［Slide］Điều cần nhớ hôm nay（3 điều）

1. **Chia sẻ thay đổi bằng PR.** Người tạo PR và người merge là hai người khác nhau
2. **Tiêu chí đọc PR là điều kiện hoàn thành.** Không xét code tốt hay xấu, mà xem đã xác nhận được trên màn hình chưa
3. **Rule và yêu cầu cũng được chia sẻ đến nhóm bằng PR.** Nội dung do 1 người viết sẽ có hiệu lực trong Cursor của mọi người

#### ［Slide］Buổi sau（buổi 5）

| Thời gian | Nội dung |
|---|---|
| Nửa đầu | Hoàn thành các task còn lại（**không thêm chức năng mới**） |
| Giữa buổi | Làm cho thao tác trình bày chạy được **trên `main`** |
| Nửa sau | Cả nhóm trình bày trong 5 phút |

**Khi trình bày sẽ chạy ứng dụng từ `main`.** Những thay đổi chưa được merge thì không thể dùng để trình bày.

#### Giảng viên nói gì

**Báo cáo tiến độ**: nếu có 1 nhóm thì 30 giây, nếu có nhiều nhóm thì mỗi nhóm 30 giây. **Bắt buộc mỗi nhóm báo số Issue đã đóng.** Nếu có nhóm có số là 0, buổi sau giảng viên sẽ hỗ trợ nhóm đó ngay từ đầu.

**Giới thiệu buổi sau（1 phút）**

> “Buổi sau chúng ta sẽ hoàn thiện và trình bày. Mục tiêu là **thao tác trình bày chạy được trên main**.
> Hãy ưu tiên **không làm hỏng thứ đang chạy** hơn là thêm chức năng mới.”

#### ［Slide］Bài tập về nhà（không bắt buộc）

- **Làm tiếp task mình phụ trách và tạo PR.** Nếu có người đọc và merge giúp, nửa đầu buổi sau sẽ nhẹ hơn
- Học viên đã xong task của mình và còn thời gian thì dùng `/start-task` để nhận **Issue còn trống**
- Người đọc PR hãy **xác nhận điều kiện hoàn thành trên màn hình rồi mới** Approve. Ngoài giờ học, quy tắc này vẫn giữ nguyên
- Học viên muốn ôn lại thao tác Git thì làm phần thực hành trong [`20-git.md`](../fundamentals/20-git.md)

> **Trước khi merge trong bài tập về nhà, luôn cập nhật main rồi mới tạo branch.** Ngoài giờ học không có giảng viên, nên khi bị conflict, học viên tự thực hiện đến bước nhờ Agent xử lý.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Báo cáo tiến độ kéo dài | Dừng ở 30 giây mỗi nhóm. **Chỉ riêng số Issue đã đóng** thì bắt buộc phải báo |
| Có nhóm có 0 Issue đã đóng | Không trách. Hứa rằng **lúc 0:05 buổi sau, giảng viên sẽ đến nhóm đó** |
| Trễ giờ | Bỏ phần bài tập về nhà. **Không bỏ phần giới thiệu buổi sau**（bắt buộc truyền đạt “trình bày từ main”） |

---

## Phụ lục A: Nội dung của template repository cho nhóm

Giảng viên chuẩn bị trên GitHub của tổ chức. Hãy bật **Settings → General → Template repository**.

**Template repository: https://github.com/xrnd-tec/cursor-team-template**（Public, đã thiết lập Template repository）.

> **Lý do để Public**: học viên không phải là thành viên của tổ chức, nên nếu để Private thì học viên không nhấn được Use this template. Nội dung chỉ gồm Skill và README.

```
(template)/
├── README.md
├── .gitignore
└── .cursor/
    └── skills/
        ├── requirements/SKILL.md
        ├── task-breakdown/SKILL.md
        ├── create-issues/SKILL.md
        └── start-task/SKILL.md
```

**Không đưa `.cursor/rules/` vào.** Các nhóm sẽ tự thêm ở chương 4.

| Skill | Nội dung |
|---|---|
| `requirements` | Giống buổi 3. **Chỉ khác nơi lưu là `docs/requirements.md`** |
| `task-breakdown` | Dựa trên buổi 3, thêm quy định **chia ít nhất bằng số người (mỗi người khoảng 2 task, tối đa 10 task)** và **không ghi người phụ trách** |
| `create-issues` | **Mới.** Tạo từng task trong `docs/tasks.md` trên `main` thành Issue. Nếu đã có Issue cùng tiêu đề thì không tạo. Không gán người phụ trách |
| `start-task` | **Mới.** Liệt kê các Issue chưa có người phụ trách → gán mình làm người phụ trách của Issue đã chọn（nếu đã có người phụ trách thì dừng）→ tạo branch từ `main` mới nhất → hiện “làm gì” và điều kiện hoàn thành. Không viết code |

`create-issues` và `start-task` dùng GitHub CLI（`gh`）. **Nhờ tất cả học viên cài trước ngày học**（00-2）.

---

## Checklist cho giảng viên（dùng trong ngày）

### Chuẩn bị trước（trước ngày học）
- [ ] Đã chuẩn bị phương án phân chia vai trò（4 người một nhóm. Khi có nhiều học viên thì 3–4 người, tối đa 8 nhóm）
- [ ] Đã thu đủ tên người dùng GitHub của mọi người
- [ ] Đã tạo template repository và bật **Template repository**
- [ ] Đã xác nhận trên repository tạo từ template rằng Issues dùng được và `/start-task` gán được mình làm người phụ trách
- [ ] Đã tạo repository làm mẫu của mình từ template và chạy thử một lần bước ① đến ⑦ của chương 4
- [ ] Đã cho Agent viết rule（5 dòng）của chương 4 trên máy thật, và xác nhận **Agent dừng ở 5 dòng** và **dừng làm việc khi ở `main`**
- [ ] Đã nắm số người trong kết quả giơ tay ở buổi 3（học viên chưa có tài khoản GitHub thì nhờ tạo trước ngày học）

### Quản lý thời gian
- Chương 2 chỉ chọn trong danh sách nên mất 5 phút. Chỉ hỏi “Thao tác trình bày là gì?” với nhóm chọn chủ đề ngoài danh sách
- Nếu việc chọn chủ đề ở chương 2 quá 3 phút, giảng viên chọn trong danh sách
- Chương 3 **chưa chuyển sang chương sau cho đến khi mọi người clone xong**. Cho nhóm hỗ trợ học viên đang chậm
- Không rút ngắn chương 4. Nếu trễ giờ, dừng phần viết yêu cầu của chương 5 ở phút thứ 8
- Mức tối thiểu của chương 6 là “task 1 đã được merge và màn hình hiện trên máy của mọi người”

### Những chỗ hay mắc kẹt
| Vấn đề | Cách xử lý |
|--------|------|
| Không nhận được lời mời | Cho mở URL `.../invitations` |
| Bị dừng khi commit | `user.name` / `user.email`. Bước ⑤ của chương 3 |
| Không tạo được PR | Bỏ `gh`, tạo PR trên màn hình GitHub |
| 2 người bắt đầu cùng một task | Học viên đã tạo branch mà không dùng `/start-task`. Cho kiểm tra người phụ trách ở tab Issues |
| Không Approve được | Không thể Approve PR của chính mình. Người khác thực hiện |
| Conflict | Dùng Resolve in Chat, hoặc nhờ Agent lấy main mới nhất vào branch |
| 1 người làm tất cả | Chỉ vào bảng vai trò. **Khi chưa đến lượt mình thì đọc PR** |
