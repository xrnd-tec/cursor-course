# Buổi 3: Phát triển theo spec（90 phút）

> **Mục tiêu của buổi này（4 mục）**  
> 1 Viết yêu cầu cho một game có nhiều điều cần quyết định（poker）→ 2 Chia yêu cầu thành task và nhờ AI làm lần lượt từng task → 3 Biến 2 dòng phải viết mỗi lần thành rule phát triển → 4 Thêm yêu cầu đến sau vào bản yêu cầu và hoàn thiện game（phần thử sức）  
> **Đạt tới mục 1–3 là hoàn thành buổi học.** Mục 4 là phần thử sức, không đạt tới cũng không phải là thất bại. Cuối buổi, tất cả học viên đều trình bày.

> **Buổi trước, chúng ta đã làm trò lật hình theo cách nhờ AI mà không quyết định trước điều gì（vibe coding）.**
> Hôm nay, chúng ta sẽ làm **một game có nhiều điều cần quyết định hơn rất nhiều（poker rút 5 lá）**, theo cách **viết yêu cầu trước rồi mới làm**（phát triển theo spec）.

---

## Toàn bộ mạch của kịch bản

1. Luận điểm của buổi này（dành cho giảng viên）
2. 00-1 Cách đọc kịch bản này
3. 00-2 Chuẩn bị trong ngày
4. 00-3 Bảng thời gian
5. 0-1 Trang bìa và phần mở đầu
6. Chương 1 đến chương 7
7. Phụ lục: bản yêu cầu mẫu
8. Checklist cho giảng viên

---

## Luận điểm của buổi này（giảng viên cần hiểu trước）

Kết luận của buổi trước là: “**Vibe coding giúp làm nhanh, nhưng không làm ra đúng thứ mình muốn.**” Với quy mô như trò lật hình thì cách làm đó không gây khó khăn gì.

Hôm nay, học viên sẽ trải nghiệm rằng **khi có nhiều điều cần quyết định, vibe coding không còn làm ra đúng thứ mình nhắm tới**, và rằng **viết yêu cầu trước thì có thể làm ra đúng thứ mình nhắm tới**.

### Lý do chọn poker

**Vì trò lật hình quá đơn giản.** Những điều cần quyết định ở trò lật hình chỉ khoảng “số lá bài”, “hình trên lá bài”, “số giây trước khi úp lại”, và AI đã có sẵn giá trị mặc định cho các điều đó. Nếu làm lại trò lật hình từ yêu cầu, **học viên chỉ thấy tốn thêm công sức**.

Vì vậy, hôm nay chúng ta chọn **một game có số điều cần quyết định nhiều hơn hẳn**. Poker rút 5 lá có ít nhất những branch sau.

| Không quyết định thì mỗi người một kiểu | Ví dụ |
|---|---|
| Thứ tự mạnh yếu của các bộ bài | Làm tới bậc nào trong 10 bậc |
| **So sánh hai bộ bài giống nhau** | Hai bên cùng có One Pair thì bên nào thắng |
| Đổi bài | Tối đa mấy lá / mấy lần / có được chọn đổi 0 lá không |
| Đối thủ | Có mấy CPU. CPU đổi bài theo cách nào |
| Cược | Có đặt chip hay không |

**AI sẽ tự quyết định tất cả những điều này.** Nếu không có yêu cầu thì không có cách nào kiểm tra điều AI đã quyết định có khớp với ý định của mình hay không.

Điểm chốt cuối cùng là: **“Vibe coding không phải là cách làm tồi. Điều quan trọng là xác định khi nào dùng cách nào.”** Trò lật hình ở buổi trước được tổng kết lại thành bài học: “**với quy mô đó thì vibe coding là đủ**”.

> **Lớp có 4 học viên, nên tất cả học viên trình bày cho cả lớp.**

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Kịch bản được viết theo giả định: **học viên vừa xem tài liệu vừa tự thực hành, giảng viên vừa giải thích vừa dẫn dắt buổi học**. Việc phân bổ thời gian cũng dựa trên giả định đó.

Prompt được in đầy đủ trong tài liệu, vị trí trên màn hình được thể hiện bằng ảnh chụp màn hình, nên kịch bản không giả định giảng viên phải thao tác mẫu riêng. Cách tiến hành thực tế thì giảng viên điều chỉnh tùy theo lớp.

Số ở tiêu đề được đọc là **`N-M` = bước M của chương N**（ví dụ: `2-1`）. Phần trước chương 1 là **`00-M`**（cách đọc, chuẩn bị, bảng thời gian）, phần mở đầu là **`0-1`**. Đầu mỗi chương có mục **Mạch của chương**, các phần trước chương có mục **Mạch của phần này**（mục lục）.

Mỗi chương gồm 5 khối（ở một số phần như phần mở đầu thì có thể thiếu một vài khối）.

| Khối | Dành cho ai |
|----------|------------------|
| **［Slide］Giải thích** | Giải thích cơ chế của Cursor. Đưa lên slide. Nguồn là `courses/vi/fundamentals/` |
| **［Slide］Học viên làm gì** | Đưa nguyên văn vào tài liệu phát. Prompt được in đầy đủ, giảng viên không đọc miệng |
| **Giảng viên nói gì** | Nội dung giảng viên nói trong lúc học viên đang gõ hoặc đang chờ |
| **Điểm kiểm tra** | Căn cứ để quyết định chờ cả lớp theo kịp hay chuyển tiếp |
| **Khi mắc kẹt** | Những chỗ học viên thực sự hay bị kẹt ở chương đó và cách xử lý |

Phần giải thích được trích từ [`courses/vi/fundamentals/`](../fundamentals/). **Khi muốn sửa nội dung, hãy sửa ở phía fundamentals**（kịch bản chỉ là bản trích）.

| Chương | fundamentals được trích |
|----|------------------------|
| Chương 2 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 3 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 4 | [`06-rules`](../fundamentals/06-rules.md)（**trong buổi này, học viên thực sự viết 1 rule**） |
| Chương 5 | [`16-browser-design`](../fundamentals/16-browser-design.md)（góc tham khảo: Design Mode） |


> **Có 1 yêu cầu bổ sung**（chương 2）. **Câu chữ của yêu cầu được đưa lên slide.**
> Giảng viên đọc lên trong vai khách hàng, nhưng **bản chính là chữ trên slide**. Giảng viên không tự ứng biến nội dung yêu cầu.

Sau khi gửi cho Agent, phải chờ 30–60 giây mới có phản hồi. Đó là khoảng thời gian cả lớp cùng chờ, nên mỗi chương đều có sẵn nội dung để giảng viên nói trong khoảng thời gian đó.

---

## Chuẩn bị trong ngày（kiểm tra lúc 0:00）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trong ngày

### 00-2 Danh sách chuẩn bị trong ngày

| Mục | Các bước |
|------|------|
| **Cập nhật repo** | Mở `cursor-course/` rồi chạy `git pull`. **Các Skill dùng hôm nay sẽ được tải về** |
| **Kiểm tra Skill** | Ở sidebar thấy được `.cursor/skills/requirements/` và `.cursor/skills/task-breakdown/` |
| **Thư mục làm việc** | `session02-spec/`（poker）. Mỗi học viên tự tạo ở chương 3 |
| **Model** | Để nguyên Auto |
| **Trình duyệt tích hợp** | Với file HTML, nhấp chuột phải ở sidebar → **Open In Browser** |
| **Trình bày** | Ở chương 6, **mỗi học viên cho cả lớp xem màn hình của mình**. Thử chia sẻ màn hình hoặc máy chiếu 1 lần lúc 0:00 |

> **Nếu có học viên không thấy Skill, cho học viên đó chạy `git pull` ngay tại chỗ.** Thiếu phần này thì chương 2 và chương 3 không thể tiến hành được.

> Tên thư mục làm việc `session02-spec/` được giữ nguyên vì các Skill và `.gitignore` trong repo phát cho học viên đều dựa trên tên này.

---

## Bảng thời gian

### Mạch của phần này

1. 00-3 Mạch 90 phút

### 00-3 Mạch 90 phút

| Thời gian | Chương | Nội dung | Người thực hiện |
|------|----|------|------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Nhìn lại buổi trước, điểm khác với buổi trước, nội dung hôm nay（5 phút） | Giảng viên |
| 0:05 | Chương 2 Viết yêu cầu | Viết yêu cầu cho poker bằng Skill requirements（15 phút） | Cả lớp |
| 0:20 | Chương 3 Chia task và làm trước 2 task | Chia task → tự làm 2 task（15 phút） | Cả lớp |
| 0:35 | Chương 4 Đặt rule phát triển và áp dụng | Viết rule → làm tiếp mà không viết 2 dòng（15 phút） | Cả lớp |
| 0:50 | Chương 5 Hoàn thiện | Các task còn lại và yêu cầu bổ sung（18 phút） | Cả lớp |
| 1:08 | Chương 6 Trình bày | Mỗi người trình bày 3 phút（12 phút） | Cả lớp |
| 1:20 | Chương 7 Tổng kết | Nhìn lại, câu hỏi ôn tập, buổi sau（10 phút） | Giảng viên |

> **Khi bị trễ giờ**: rút ngắn chương 5. **Không cắt chương 4（rule phát triển）và chương 6（trình bày）.**

---

## Trang bìa và phần mở đầu — 0:00（tính trong chương 1）

> **Không tính thành chương riêng.** Giảng viên nói tiếp nối với phần đầu chương 1.

### Mạch của phần này

1. 0-1 Từ trang bìa tới nội dung hôm nay

### 0-1 Từ trang bìa tới nội dung hôm nay

#### ［Slide］Trang bìa

```
Phát triển theo spec

Khóa thực hành Cursor　Buổi 3 / 5　・　90 phút
（Ngày）
```

#### ［Slide］Nhìn lại buổi trước（30 giây）

> **Dùng vibe coding thì làm được nhanh, nhưng không làm ra đúng thứ mình muốn.**

Cùng gửi 3 dòng giống nhau, nhưng 4 người đã làm ra 4 trò lật hình khác nhau. Yêu cầu bổ sung（yêu cầu B）đã được đưa vào đúng hay chưa cũng không kiểm tra được trên màn hình.

#### ［Slide］Khác nhau giữa vibe coding và phát triển theo spec（1 phút）

| | Vibe coding（buổi trước） | Phát triển theo spec（hôm nay） |
|---|---|---|
| Tài liệu quy định thế nào là đúng | Không có. Chỉ nằm trong đầu người nhờ và trong chat | Viết yêu cầu và các task kèm điều kiện hoàn thành thành tài liệu |
| Thứ AI xem khi làm | Chỉ có câu nhờ được gửi lúc đó | Mỗi lần đều xem tài liệu yêu cầu và task |
| Cách kiểm tra đã làm đúng chưa | Không có tiêu chí để so sánh | Đối chiếu với điều kiện hoàn thành |
| Bàn giao cho người khác | Chỉ có thể đoán từ code | Đọc yêu cầu là hiểu |
| Khi yêu cầu thay đổi | Nhờ AI sửa trực tiếp vào code | Sửa yêu cầu trước |

**Cách tiến hành giống với phát triển phần mềm thông thường（yêu cầu → task → triển khai → kiểm tra）.** Điểm khác là AI hỗ trợ phần viết và phần triển khai, và AI cũng đọc lại yêu cầu và task đã viết mỗi lần.

#### Giảng viên nói gì

- Nhược điểm ① của buổi trước（không kiểm tra được đã làm đúng chưa）và nhược điểm ②（không bàn giao được cho người khác）đều xuất phát từ việc “không có tài liệu quy định thế nào là đúng”.
- Hôm nay, chúng ta sẽ viết tài liệu đó trước rồi mới làm. Vẫn dùng Cursor như buổi trước, nhưng thứ đưa cho AI sẽ khác.

#### ［Slide］Nội dung hôm nay

| | Việc cần làm | Chương |
|---|---|---|
| 1 | Viết yêu cầu cho poker | Chương 2 |
| 2 | Chia yêu cầu thành task và làm lần lượt từng task | Chương 3 |
| 3 | Biến 2 dòng phải viết mỗi lần thành rule phát triển | Chương 4 |
| 4 | Hoàn thiện và trình bày | Chương 5・Chương 6 |

**Mục tiêu hôm nay là làm poker “đúng như mình nhắm tới”.**

#### ［Slide］Cách tiến hành buổi học hôm nay（3 điểm）

1. **Không cần hoàn thành.** Dừng giữa chừng vẫn trình bày
2. **Viết yêu cầu trước rồi mới nhờ AI.** Hôm nay không nhờ “làm cho ngon nha”
3. **Khi gặp khó khăn, hãy giơ tay**

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Chưa chạy `git pull` | Cho học viên chạy ngay tại chỗ. Không có Skill thì sẽ bị dừng ở chương 2 |
| Học viên vắng buổi trước | Chỉ giải thích kỹ slide nhìn lại buổi trước |

---

## Chương 1 Mục tiêu hôm nay — 0:00（5 phút）

> **Chương này chỉ có giảng viên nói.**

### Mạch của chương

1. 1-1 Chia sẻ mục tiêu hôm nay

### 1-1 Chia sẻ mục tiêu hôm nay

#### ［Slide］Mục tiêu hôm nay

| | Những điều sẽ làm được | Chương |
|----|--------------------|------------|
| 1 | Viết yêu cầu cho một game có nhiều điều cần quyết định（poker） | Chương 2 |
| 2 | Chia yêu cầu thành task và nhờ AI làm lần lượt từng task | Chương 3 |
| 3 | Biến 2 dòng phải viết mỗi lần thành rule phát triển | Chương 4 |
| 4 | Thêm yêu cầu đến sau vào bản yêu cầu và hoàn thiện game ← **thử sức** | Chương 5 |

#### Giảng viên nói gì

> “Buổi trước, chúng ta đã làm trò lật hình bằng câu ‘làm cho ngon nha’. **4 người đã làm ra 4 trò khác nhau.**
> Hôm nay là poker. **Đây là game có nhiều điều cần quyết định hơn rất nhiều.** Với câu ‘làm cho ngon nha’ thì không làm ra được đúng poker mình muốn. Chúng ta sẽ viết yêu cầu trước.”

#### ［Slide］Góc tham khảo — Luật chơi poker

Học viên không biết luật chơi poker cũng không sao. Ở chương 2, giảng viên sẽ cho xem bảng “thứ tự mạnh yếu của các bộ bài”.

#### Điểm kiểm tra

Không có. Kết thúc trong 5 phút.

---

## Chương 2 Viết yêu cầu — 0:05（15 phút）

> Đây là game thứ hai. **Chúng ta sẽ làm một game khó hơn trò lật hình rất nhiều, bắt đầu từ yêu cầu.**

### Mạch của chương

1. 2-1 Skill là gì（vị trí đặt, cách gọi, nội dung, 2 Skill dùng hôm nay）
2. 2-2 4 mục bắt buộc trong yêu cầu・giảng viên làm mẫu（giải thích）
3. 2-3 Viết yêu cầu cho poker

### 2-1 Skill là gì・nội dung・2 Skill dùng hôm nay（giải thích）

#### ［Slide］Giải thích — Skill là gì

**Skill là gói tổng hợp “quy trình khi làm loại công việc này”.** Nhờ có Skill, học viên không cần viết lại cùng một quy trình mỗi lần.

Vị trí đặt và cách gọi Skill đã được quy định sẵn.

| Loại | Đường dẫn | Phạm vi có tác dụng |
|------|------|----------|
| **Dự án** | `.cursor/skills/<tên>/SKILL.md` | Chỉ repo này |
| **Cá nhân** | `~/.cursor/skills/<tên>/SKILL.md` | Mọi dự án của bạn |

**2 Skill dùng hôm nay đã có sẵn trong repo**（đã được tải về bằng `git pull`）.

| Cách gọi | Phạm vi có tác dụng | Thao tác |
|--------|----------|------|
| **Tự động** | Khi Agent đánh giá là “nên dùng” | Không cần làm gì. Agent quyết định dựa trên description |
| **Gạch chéo** | **Chỉ riêng tin nhắn đó** | Gõ `/` ở ô nhập → chọn tên Skill |
| **Custom Mode** | **Toàn bộ phiên làm việc** | Chọn Skill rồi nhấn `Alt+Enter`（Mac là `Option+Enter`） |

**Hôm nay chúng ta gọi Skill bằng “gạch chéo”.**

#### ［Slide］Giải thích — Nội dung của Skill chỉ là Markdown

Skill chỉ có thêm 2 dòng cấu hình ở đầu file.

```markdown
---
name: requirements
description: dùng khi hỏi chuyện để nắm thứ muốn làm và gom thành yêu cầu gồm 4 mục
---

# Viết yêu cầu

（từ đây trở xuống là bản hướng dẫn thông thường）
```

| Mục | Vai trò |
|---|---|
| **`name`** | Chỉ gồm chữ thường, số và dấu gạch ngang. **Phải trùng với tên thư mục cha** |
| **`description`** | **Đây là mục quan trọng nhất.** Agent dựa vào description để đánh giá “có dùng Skill này trong cuộc hội thoại này hay không” |

**Chỉ có 2 mục này là bắt buộc.**

#### ［Slide］Giải thích — 2 Skill dùng hôm nay

| Skill | Làm gì | Không làm gì |
|---|---|---|
| **`requirements`** | Hỏi chuyện để nắm thứ bạn muốn làm, rồi gom thành 4 mục **làm gì / màn hình / thao tác / không làm gì** | **Không viết code** |
| **`task-breakdown`** | Chia yêu cầu thành **3–5** task（**kèm điều kiện hoàn thành**）, mỗi task có kích thước giao được trong 1 lần nhờ, rồi lưu vào `session02-spec/tasks.md` | **Không viết code** |

**Cả 2 Skill đều không triển khai. Đây là những công cụ chỉ dùng để “quyết định”.**

> Tìm hiểu thêm: [`07-skills.md`](../fundamentals/07-skills.md)

### 2-2 4 mục bắt buộc trong yêu cầu・giảng viên làm mẫu（giải thích）

#### ［Slide］Giải thích — 4 mục của yêu cầu

| Mục | Nội dung |
|---|---|
| **Làm gì** | Những thứ cần có để game thành hình |
| **Màn hình** | Nhìn thấy gì, nhấn được gì |
| **Thao tác** | Người dùng làm gì thì điều gì xảy ra |
| **Không làm gì** | **Những thứ quyết định lần này không làm** |

Mục thứ 4 là trọng tâm của hôm nay. **AI thường tự thêm những thứ không được viết ra**, nên chúng ta cấm trước. Đây cũng là lý do giống như việc điểm số và độ khó không được yêu cầu vẫn tự xuất hiện trong trò lật hình ở buổi trước.

#### ［Slide］Giải thích — Ở poker, những thứ “không quyết định thì mỗi người một kiểu”

**Khác với trò lật hình, poker là game có nhiều điều cần quyết định.**

| Không quyết định thì mỗi người một kiểu | Ví dụ |
|---|---|
| **Đối thủ** | **Có đối thủ hay không.** Nếu có thì có mấy CPU, CPU đổi bài theo cách nào |
| Thứ tự mạnh yếu của các bộ bài | Làm tới bậc nào trong 10 bậc |
| **So sánh hai bộ bài giống nhau** | Hai bên cùng có One Pair thì bên nào thắng |
| Đổi bài | Tối đa mấy lá / mấy lần / có được chọn đổi 0 lá không |
| Cược | Có đặt chip hay không |

**Nếu để mặc thì AI sẽ quyết định tất cả.** Nếu không có yêu cầu thì không có cách nào kiểm tra điều AI đã quyết định có khớp với ý định của mình hay không.

#### ［Slide］Giảng viên làm mẫu — Kết quả khi nhờ làm poker bằng “làm cho ngon nha”

**Giảng viên cho xem 1 màn hình đã làm sẵn từ trước. Học viên không làm phần này.**

Yêu cầu chỉ có 3 dòng này. Cách nhờ giống hệt trò lật hình ở buổi trước.

```text
Làm cho tôi game poker.
Bằng HTML + JS, chơi được trên browser.
Làm cho ngon nha.
```

Giảng viên cùng học viên xem kết quả nhận được.

| | Nội dung |
|---|---|
| **Những thứ AI tự quyết định** | Loại game（**Texas Hold'em**, 2 lá trên tay）／**3 bot**／chip và thao tác cược（Fold / Call / Raise / All-in） |
| **Điểm khác với game làm hôm nay** | **Không phải poker rút 5 lá**（không có 5 lá trên tay, không có đổi bài） |

**Game vẫn chạy. Giao diện cũng gọn gàng.** Dù vậy, đây không phải “poker rút 5 lá” mà hôm nay chúng ta làm.
**Vì chỉ nói “poker”, nên AI đã tự quyết định tất cả: làm loại poker nào, bao nhiêu người chơi, có cược hay không.**

> **Kết quả nhận được mỗi lần mỗi khác.** Ở một lần khác, AI đã làm ra game “có chip và bảng trả thưởng nhưng không có đối thủ”.
> Dù kết quả nào xuất hiện thì điều cần nói vẫn như nhau: **bạn chưa quyết định luật chơi, cũng chưa quyết định số người chơi.**

> Tìm hiểu thêm: [`05-prompting.md`](../fundamentals/05-prompting.md)

#### ［Slide］Tài liệu phát — Thứ tự mạnh yếu của các bộ bài（từ mạnh đến yếu）

**Đây là tài liệu phát cho học viên chưa biết luật chơi.** Học viên vừa xem bảng này vừa viết yêu cầu.

**Trên slide, những lá tạo nên bộ bài được hiển thị có viền.** Lá màu xám là lá không liên quan đến bộ bài.

| Thứ tự | Bộ bài | Nội dung |
|----|-----|------|
| 1 | **Royal Flush**（Thùng phá sảnh lớn） | 10・J・Q・K・A cùng chất |
| 2 | **Straight Flush**（Thùng phá sảnh） | 5 lá có số liên tiếp, cùng chất |
| 3 | **Four of a Kind**（Tứ quý） | 4 lá cùng số |
| 4 | **Full House**（Cù lũ） | 3 lá cùng số ＋ 2 lá cùng số |
| 5 | **Flush**（Thùng） | Cả 5 lá cùng chất |
| 6 | **Straight**（Sảnh） | 5 lá có số liên tiếp |
| 7 | **Three of a Kind**（Sám cô） | 3 lá cùng số |
| 8 | **Two Pair**（Hai đôi） | 2 cặp lá cùng số |
| 9 | **One Pair**（Một đôi） | 2 lá cùng số |
| 10 | **High Card**（Mậu thầu） | Không thuộc bộ nào ở trên |

**Tên bộ bài được thống nhất dùng tiếng Anh.** Trong ngoặc là tên gọi tiếng Việt.

> **Lý do thống nhất dùng tiếng Anh**: game sắp làm cũng **hiển thị tên bộ bài bằng tiếng Anh trên màn hình**.
> Nếu slide và game dùng từ khác nhau thì chủ đề của buổi này là **nhìn màn hình để đánh giá** sẽ không thực hiện được.

**Làm tới đâu trong bảng này là do bạn quyết định trong yêu cầu.** Không cần làm tất cả.

### 2-3 Viết yêu cầu cho poker

#### ［Slide］Học viên làm gì（15 phút）

**① Gọi Skill viết yêu cầu（2 phút）**　Trong chat mới, gõ `/` ở ô nhập rồi chọn **requirements**.

```text
/requirements tôi muốn làm poker rút 5 lá
```

> Học viên không thấy Skill trong danh sách là chưa chạy `git pull`. Giảng viên xử lý ngay tại chỗ.

**② Điền yêu cầu qua hội thoại（8 phút）**　Trả lời lần lượt những gì Skill hỏi. Cần điền 4 mục.

| Mục | Nội dung |
|---|---|
| **Làm gì** | Những thứ cần có để game thành hình |
| **Màn hình** | Nhìn thấy gì, nhấn được gì |
| **Thao tác** | Người dùng làm gì thì điều gì xảy ra |
| **Không làm gì** | **Những thứ quyết định lần này không làm** |

**Về thứ tự mạnh yếu của các bộ bài, hãy tự quyết định làm tới đâu và viết vào yêu cầu.** Không cần làm đủ 10 bậc.

**③ Nhận yêu cầu bổ sung và thêm vào（5 phút）**

Giảng viên sẽ đưa thêm 1 yêu cầu. Học viên xử lý bằng cách **chỉ thêm 1 dòng vào yêu cầu**.

#### ［Slide］Yêu cầu bổ sung

**Đến bước ③, giảng viên đọc lên rồi mới chiếu slide này.**

> “Có thêm một yêu cầu bổ sung.”

```text
Khi có kết quả thắng thua, hãy vẽ viền quanh
những lá tạo nên bộ bài đó.
Các lá không liên quan thì để màu xám.
```

**Cách hiển thị giống với slide thứ tự mạnh yếu của các bộ bài.** Học viên đã biết cách đọc.

Đây cũng là điều **AI không suy ra từ hiểu biết thông thường về poker**. AI tự hiển thị tên bộ bài, nhưng **những lá nào tạo nên bộ bài đó** thì không xuất hiện nếu không viết vào yêu cầu, dù chi phí triển khai thấp（khoảng mười mấy dòng code）.

#### Giảng viên nói gì

**Ở bước ①**: học viên không thấy Skill trong danh sách là chưa chạy `git pull`. Giảng viên xử lý ngay tại chỗ.

**Trong bước ②**: đi quanh lớp và **nhắc những học viên đang để trống mục “không làm gì”**. Để trống mục này thì AI lại tự thêm các chức năng.

> “Mục ‘không làm gì’ là trọng tâm của hôm nay. AI tự thêm những thứ không được viết ra, nên chúng ta **cấm trước**.”

**Với học viên không nghĩ ra được “không làm gì”, giảng viên đưa ví dụ riêng của poker.**

- Cược・chip・tiền đặt cược
- Bluff・chiến thuật của CPU
- Từ 3 người chơi trở lên
- Joker
- Hiệu ứng động（hiệu ứng lật bài）
- Lưu thành tích

**Khi cho xem phần làm mẫu**: chỉ vào màn hình và hỏi 3 câu. **Việc không trả lời được sẽ là động lực để viết yêu cầu.**

> “Đây có phải game poker hôm nay chúng ta làm không?”
> “**Ai đã quyết định làm Texas Hold'em? Ai đã quyết định có 3 bot?**”
> “Ai đã nhờ làm chip và cược?”

Sau đó nói thêm một câu.

> “Với trò lật hình, dù không quyết định gì thì vẫn ra được một game ‘tạm được’. **Với poker, AI đã tự quyết định cả loại game.** Khi có nhiều điều cần quyết định hơn, vibe coding không còn làm ra đúng thứ mình nhắm tới.”

**Nửa sau của bước ②**: chỉ ra điểm khác với lúc nhận yêu cầu bổ sung ở buổi trước.

> “Lúc nãy bạn nhận ra được ‘đây không phải poker hôm nay chúng ta làm’ là **vì trong đầu bạn đã có đáp án đúng**. Nhưng đáp án đó chỉ nằm trong đầu bạn. Bản yêu cầu đang viết bây giờ là **việc đưa đáp án đó ra ngoài**.”

**Ở bước ③**: đây là phần đối chiếu đáp án của hôm nay. Trước tiên, giảng viên hỏi về điểm khác nhau trong **cách giao việc**.

> “Lại có thêm yêu cầu bổ sung. Với yêu cầu bổ sung ở buổi trước, **chúng ta đã sửa trực tiếp vào code**. Lần này **chỉ thêm 1 dòng vào yêu cầu**. Điểm khác nhau là gì?”

Sau đó, giảng viên nói rõ **1 dòng này có tác dụng gì**. **Đây là phần quan trọng nhất của hôm nay.**

> “Với yêu cầu bổ sung ở buổi trước, bạn đã đối chiếu với gì để biết yêu cầu B đã được đưa vào đúng hay chưa? **Chỉ có trí nhớ của bạn.**
> Khi 1 dòng vừa thêm này hoạt động, **chỉ cần nhìn màn hình là biết ‘Two Pair là đúng’**.
> **Chúng ta đã đưa tiêu chí đánh giá từ trong đầu ra màn hình.**”

> “Hơn nữa, 1 dòng này đã được viết thành chữ. **Người khác ngoài bạn cũng có thể đánh giá ‘đúng hay chưa’.**”

#### Điểm kiểm tra

- [ ] Đã điền đủ 4 mục của yêu cầu（đặc biệt là mục **không làm gì**）
- [ ] Đã ghi làm tới đâu trong thứ tự mạnh yếu của các bộ bài
- [ ] Đã thêm yêu cầu bổ sung（vẽ viền quanh những lá tạo nên bộ bài）vào yêu cầu

**Yêu cầu không cần hoàn hảo.** Đã điền đủ thì chuyển sang phần tiếp theo.

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Không gọi được Skill | Gõ `/` rồi tìm trong danh sách. Nếu không thấy thì chạy `git pull` và kiểm tra có thư mục `.cursor/skills/` hay không |
| Học viên không biết luật chơi poker | Cho xem bảng thứ tự mạnh yếu trên slide tài liệu phát. Cho biết **có thể đưa các bộ bài bậc cao vào “không làm gì”** |
| Không nghĩ ra “không làm gì” | Đưa ví dụ: cược / bluff / từ 3 người chơi trở lên / Joker / hiệu ứng động / lưu thành tích |
| Yêu cầu quá lớn | Cho rút mục “làm gì” xuống tối đa 5 ý. Phần còn lại chuyển sang “không làm gì” |
| Học viên hỏi “Ảnh lá bài ở đâu?” | **Không phát ảnh.** Cho viết vào yêu cầu rằng chất bài được hiển thị bằng ký tự `♠ ♥ ♦ ♣` |
| Hội thoại mãi không kết thúc | Dừng sau 8 phút. Mục nào chưa điền thì để trống và đi tiếp |
| Không viết được yêu cầu | Đưa bản yêu cầu mẫu ở phụ lục. **Không để học viên dừng lại ở chương này** |

---

## Chương 3 Chia task và làm trước 2 task — 0:20（15 phút）

> Chia yêu cầu thành các phần có kích thước giao được từng phần một. **Ở đây, trước tiên chỉ làm 2 task.**
> Các task còn lại được làm tiếp ở chương 4, **sau khi rule đã có tác dụng**.

### Mạch của chương

1. 3-1 Mỗi lần nhờ chỉ một việc・những điều cần xem trước khi Keep（giải thích）
2. 3-2 Chia task và làm trước 2 task

### 3-1 Mỗi lần nhờ chỉ một việc・những điều cần xem trước khi Keep（giải thích）

#### ［Slide］Giải thích — Hình thức của một lần nhờ

Ở buổi 1, chúng ta đã học “yêu cầu mơ hồ thì kết quả cũng mơ hồ”. **Chia task chính là cách làm cụ thể của điều đó.** Mỗi lần nhờ được viết theo hình thức này.

```text
【Muốn làm gì】một câu
【Đối tượng】@file hoặc thư mục
【Ràng buộc】những thứ không được làm hỏng
【Điều kiện hoàn thành】có gì thì coi là hoàn thành
```

**Có điều kiện hoàn thành thì có thể đánh giá được kết quả nhận về.** Đây là phần đối lập với việc “tiêu chí đánh giá chỉ nằm trong đầu mình” khi nhận yêu cầu bổ sung ở buổi trước.

Khi cuộc hội thoại dài ra thì chuyển sang **chat mới**, để AI không bị kéo theo các tiền đề cũ.

> Tìm hiểu thêm: [`05-prompting.md`](../fundamentals/05-prompting.md)

#### ［Slide］Giải thích — Những điều cần xem trước khi Keep

**Vòng lặp vẫn giống buổi 1. Chỉ thêm đúng 1 điều.**

| | Buổi 1 | Hôm nay |
|---|---|---|
| Sau khi nhờ | Đọc diff | Đọc diff |
| Trước khi Keep | Chỉ những chỗ mình muốn mới thay đổi | **＋ Đã thỏa điều kiện hoàn thành chưa** |
| Tiêu chí đánh giá | Mắt của mình | **Điều kiện hoàn thành đã được viết ra** |

Với yêu cầu bổ sung ở buổi trước, chúng ta “không kiểm tra được yêu cầu B đã được đưa vào đúng hay chưa” là vì **không có gì để đối chiếu**. Hôm nay thì đã được viết ra.

> **Khi nhờ AI làm mới, diff toàn là các dòng được thêm vào.** Vì đối tượng cần đọc khác nhau, nên lúc đó chỉ xem
> “**có chạy hay không**” và “**số file có tăng quá nhiều hay không**”（trò lật hình ở buổi trước và task 1 ở chương 3）.
> **Khi nhờ AI thêm vào phần đã có**（yêu cầu bổ sung ở buổi trước, task thứ 2 trở đi ở chương 3）thì mới đọc giống như buổi 1.

### 3-2 Chia task và làm trước 2 task

#### ［Slide］Học viên làm gì（15 phút）

**① Tạo thư mục làm việc（1 phút）**

Tạo một thư mục mới tên là `session02-spec/`. **Không trộn lẫn với trò lật hình.**

**② Chia task（4 phút）**

```text
/task-breakdown （đưa yêu cầu đã viết）
```

Chia được **3–5** task là đủ. Nếu nhiều quá thì bớt đi.

Kết quả chia được lưu vào **`session02-spec/tasks.md`**. **Từ đây trở đi, học viên luôn vừa xem file này vừa tiến hành.**

> Với poker, có thể chia như sau（không nhất thiết phải giống hệt）.
>
> 1. Tạo bộ bài 52 lá, xáo bài, chia 5 lá và hiển thị lên màn hình
> 2. Cho phép chọn lá bài để đổi
> 3. Xét bộ bài từ các lá trên tay và hiển thị tên bộ bài
> 4. So sánh với các lá trên tay của CPU và hiển thị kết quả thắng thua

**③ Từ đây, trong 10 phút, thực hiện quy trình này 2 vòng**

**Xong 1 vòng thì quay lại bước 1.** Ở đây **chỉ làm 2 vòng**. Phần còn lại làm tiếp ở chương 4.

```
1  Mở tasks.md, chọn 1 task chưa xong
2  Mở chat mới
3  Dán task đó vào rồi gửi（theo mẫu bên dưới）
4  Nhận kết quả thì đọc diff
5  Kiểm tra đã thỏa điều kiện hoàn thành chưa
6  Cả hai đều ổn thì nhấn Keep
7  Đánh dấu task đó trong tasks.md
8  Quay lại bước 1
```

**Nội dung gửi mỗi lần ở bước ③**

```text
（chép phần “làm gì” của task từ tasks.md）
Điều kiện hoàn thành: （chép từ tasks.md điều kiện hoàn thành của task đó）
Đừng đổi các chức năng khác.
```

> **Không bỏ qua bước 2 “mở chat mới”.** Nếu ngữ cảnh của task trước vẫn còn,
> AI sẽ bắt đầu sửa cả những chỗ không được nhờ. **1 task = 1 chat.**

Khi nhận kết quả, thực hiện theo thứ tự **đọc diff → kiểm tra đã thỏa điều kiện hoàn thành chưa → nhấn Keep**. Sau đó chuyển sang task tiếp theo.

**④ Dừng lại ở đây**

Sau khi làm xong 2 task, học viên tạm dừng. **Các task còn lại được làm tiếp ở chương 4.**

> **Nếu bạn thấy “lần nào mình cũng viết cùng 2 dòng”, thì đó là đúng.** Chương tiếp theo sẽ giải quyết điều đó.

#### Giảng viên nói gì

**Ở bước ②**: “Mỗi lần nhờ chỉ một việc” là cách làm của hôm nay. Ở buổi 1, chúng ta đã học “yêu cầu mơ hồ thì kết quả cũng mơ hồ”. **Chia task chính là cách làm cụ thể của điều đó.**

**Sau khi xong bước ②, đây là chỗ học viên hay bị kẹt nhất.** Ngay sau khi danh sách task hiện ra, sẽ có học viên dừng lại với câu hỏi “Tiếp theo làm gì?”.
**Cho học viên mở `tasks.md` và chỉ vào task số 1.** Nói “Chép task này rồi dán vào chat mới” thì học viên sẽ bắt đầu làm.

**Thời gian chờ ở bước ③**: đi quanh lớp và kiểm tra các điểm sau.

- **Học viên chưa mở `tasks.md`** → cho mở. Đây là chương vừa xem file này vừa tiến hành
- Học viên tiếp tục task thứ 2 trong cùng một chat → nhắc **1 task = 1 chat**
- Học viên không đưa yêu cầu mà vẫn làm theo kiểu vibe coding → nhắc nhở
- Học viên đưa từ 2 việc trở lên vào 1 lần nhờ → nhắc “mỗi lần một việc”
- Học viên ghi đè lên `session02/` → cho tách thư mục

**Xong 2 task thì cho học viên dừng lại.** Mục đích của chương này không phải là hoàn thành, mà là **thực hành cách giao việc 2 lần**.

**Khi có học viên nói “Viết cùng một nội dung mỗi lần thật phiền”, giảng viên hãy nắm lấy ý kiến đó.** Đó là phần mở đầu của chương tiếp theo.

> “Đúng vậy, **phiền** thật. Có bao nhiêu task thì phải viết cùng 2 dòng bấy nhiêu lần. **Chương tiếp theo sẽ giải quyết điều đó.**”

#### Điểm kiểm tra

- [ ] Đã chia được 3–5 task
- [ ] **Đã triển khai 2 task và nhấn Keep**

**Chỉ xong 1 task cũng chuyển sang phần tiếp theo.** Chương 4 là chương viết rule, nên vẫn tiến hành được dù phần triển khai còn dở dang.

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Học viên dừng tay sau khi danh sách task hiện ra | **Cho mở `tasks.md` và chỉ vào task số 1.** Làm cùng học viên tới bước “chép task này rồi dán vào chat mới” |
| Task được chia thành hơn 10 cái | Yêu cầu quá lớn. Cho thêm mục vào “không làm gì” rồi chia lại |
| Thấy làm từng task một phiền nên đưa tất cả một lần | Không ngăn lại. Đây sẽ là **tư liệu để so sánh kết quả sau này** |
| Phần xét bộ bài khó nên không tiến triển | Có thể dừng ở task 1・2. Cũng có thể chuyển phần xét bộ bài sang “không làm gì” |
| Lá bài không hiển thị / hiện ra các ô □ | Thêm vào yêu cầu “Chất bài hiển thị bằng ký tự `♠ ♥ ♦ ♣`. Không dùng ảnh” rồi gửi lại |
| Không đủ thời gian | Dù chưa triển khai được 2 task thì vẫn dừng. **Không cắt chương 4** |
| Bị trộn lẫn với trò lật hình | Tách thư mục（`session02/` và `session02-spec/`） |

---

## Chương 4 Đặt rule phát triển và áp dụng — 0:35（15 phút）

> 2 dòng đã viết **mỗi lần** ở chương 3 sẽ được đặt sẵn vào một chỗ. Sau đó, học viên làm **các task còn lại mà không viết 2 dòng đó**.
> **Đây là cơ chế thứ 3 được dùng trong hôm nay.**

### Mạch của chương

1. 4-1 Rules / Skills / yêu cầu（giải thích・3 phút）
2. 4-2 Viết 1 rule（3 phút）
3. 4-3 Áp dụng rule và làm tiếp（9 phút）

### 4-1 Rules / Skills / yêu cầu（giải thích）

#### ［Slide］Giải thích — 3 cơ chế

| Cơ chế | Khi nào có tác dụng | Vị trí đặt | Trong buổi hôm nay |
|---|---|---|---|
| **Rules** | **Luôn luôn.** Không cần viết vẫn được tuân theo | `.cursor/rules/*.mdc` | **Sắp làm** |
| **Skills** | Chỉ khi được gọi. Là bản hướng dẫn quy trình | `.cursor/skills/<tên>/SKILL.md` | `/requirements`　`/task-breakdown` |
| **Yêu cầu** | Chỉ riêng dự án đó. Là file thông thường | Đặt ở đâu cũng được | Yêu cầu của poker đã viết hôm nay |

**Skills và yêu cầu thì hôm nay đã dùng. Chỉ còn Rules là chưa.**

#### ［Slide］Giải thích — Những gì viết mỗi lần có thể đặt sẵn một chỗ

Ở chương 3, mỗi lần giao task, chúng ta **đều viết 2 dòng này**.

```text
Điều kiện hoàn thành: （chép từ tasks.md điều kiện hoàn thành của task đó）
Đừng đổi các chức năng khác.
```

Có bao nhiêu task thì viết cùng một nội dung bấy nhiêu lần. **Chỗ để không cần viết những dòng này vào mỗi prompt chính là `.cursor/rules/`.**

#### ［Slide］Giải thích — Cách viết file `.mdc`

Đặt file `.mdc` vào `.cursor/rules/`. **File này chỉ là Markdown có thêm phần cấu hình ở đầu.**

```markdown
---
description: mô tả ngắn, hiện trong danh sách rule
globs: chỉ có tác dụng khi làm việc với file khớp mẫu này
alwaysApply: nếu là true thì lần nào cũng được nạp
---

# Tiêu đề

- việc nên làm
- việc không được làm
```

| Mẹo viết | Nội dung |
|---|---|
| **Ngắn và cụ thể** | Thay vì một bộ bách khoa dài, hãy viết **5–15 dòng có thể tuân theo được** |
| **Ghi rõ “làm / không làm”** | Phương châm mơ hồ thì không được tuân theo |
| **Không lạm dụng `alwaysApply: true`** | Vì lần nào cũng được nạp nên sẽ chiếm ngữ cảnh |

> Tìm hiểu thêm: [`06-rules.md`](../fundamentals/06-rules.md)

### 4-2 Viết 1 rule

#### ［Slide］Học viên làm gì（3 phút）

**Gửi nguyên văn nội dung sau cho Agent.**

```text
Tạo file .cursor/rules/task-cycle.mdc.
Đặt alwaysApply: true.
Nội dung chỉ gồm đúng 4 dòng sau. Đừng thêm gì khác.

- mỗi lần chỉ bắt tay vào đúng một task
- làm xong thì đối chiếu với điều kiện hoàn thành của task đó
- thỏa điều kiện hoàn thành thì dừng. Không tự đi tiếp sang task sau
- không thêm chức năng không được yêu cầu
```

**Hãy chú ý dòng thứ 4.** “Không thêm chức năng không được yêu cầu” — đây chính là điều đã gây khó khăn cho chúng ta từ buổi trước.

#### Giảng viên nói gì

**Phần này bắt đầu khi học viên đã “hiểu rồi”.** Vì ở chương 3, cả lớp vừa viết đi viết lại cùng 2 dòng. **Giảng viên giải thích ngắn gọn và cho học viên thực hành.**

> “Có bao nhiêu task thì chúng ta đã viết cùng 2 dòng bấy nhiêu lần. **Thật ra không cần viết mỗi lần.**”

**Sau khi viết xong, cho học viên mở file ra xem nội dung.**

> “Hãy xem dòng thứ 4: ‘**Không thêm chức năng không được yêu cầu**’.
> Với trò lật hình ở buổi trước, điểm số và độ khó không được yêu cầu vẫn tự xuất hiện. **Dòng này cấm đúng điều đó.**”

**Khi học viên hỏi “Rules và Skills dùng khác nhau thế nào?”:**

> “**Điều muốn AI luôn tuân theo thì đặt vào Rules. Quy trình dài thì đặt vào Skills.** Thứ viết hôm nay thuộc loại thứ nhất.”

#### Điểm kiểm tra

- [ ] Đã tạo được `.cursor/rules/task-cycle.mdc`
- [ ] Nội dung chỉ có 4 dòng（**không bị thêm nội dung thừa**）

**Học viên có file bị thêm nội dung thì chính điều đó là tư liệu học của hôm nay.** Chia sẻ với cả lớp rằng đã viết “đừng thêm gì khác” mà vẫn bị thêm.

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Không có thư mục `.cursor/rules/` | Agent sẽ tạo. Không có sẵn cũng không sao |
| Nội dung nhiều hơn 4 dòng | **Dùng làm tư liệu học của hôm nay.** Dù đã viết “đừng thêm gì khác” thì vẫn có lúc bị thêm |
| Không hiểu đuôi file `.mdc` | Chỉ cần giải thích là Markdown + cấu hình. Không đi sâu |
| Không biết rule có tác dụng hay không | Sẽ kiểm tra ở 4-3. Ở đây không tìm hiểu sâu |

### 4-3 Áp dụng rule và làm tiếp

#### ［Slide］Học viên làm gì（9 phút）

**Đây là phần tiếp theo của chương 3. Học viên triển khai các task còn lại. Tuy nhiên, lần này cách viết sẽ thay đổi.**

```text
（chỉ chép phần “làm gì” của task từ tasks.md）
```

**Chỉ cần như vậy.** Cả “điều kiện hoàn thành” lẫn “đừng đổi các chức năng khác” đều **không cần viết nữa**.

| | Chương 3 | Bây giờ |
|---|---|---|
| Nội dung phải viết mỗi lần | Làm gì ＋ **điều kiện hoàn thành** ＋ **đừng đổi các chức năng khác** | **Chỉ phần làm gì** |
| Điều kiện hoàn thành | Viết trong prompt | **Có trong `tasks.md`**（AI đọc） |
| “Đừng đổi các chức năng khác” | Viết trong prompt | **Có trong rule** |

**Quy trình giống chương 3.** Chọn 1 task trong tasks.md → mở chat mới → gửi → đọc diff → đối chiếu với điều kiện hoàn thành → nhấn Keep → đánh dấu.

#### Giảng viên nói gì

**Trước khi học viên gửi, giảng viên chỉ nói một câu.**

> “Khác với lúc nãy, **chúng ta không viết 2 dòng đó**. Nếu AI vẫn hoạt động như cũ thì nghĩa là **rule đang có tác dụng**.”

**Những điểm cần xem khi đi quanh lớp:**

- **Học viên vẫn viết 2 dòng** → nhắc “không cần viết”. **Nếu viết thì không kiểm tra được rule có tác dụng hay không**
- Học viên có rule không có tác dụng → kiểm tra nội dung file `.mdc`, xem có `alwaysApply: true` hay không
- Học viên nhấn Keep mà không đối chiếu với điều kiện hoàn thành → cho mở `tasks.md`

**Sau 9 phút thì tạm dừng.** Mục đích của chương này là **thấy rule có tác dụng 1 lần**. Phần tiếp theo làm ở chương 5.

> “Học viên đang dừng giữa chừng cũng không sao. **Bạn có thể nhờ người khác làm tiếp.** Vì yêu cầu, task và rule đều đã được viết thành chữ.
> Còn với trò lật hình, **chỉ có bạn mới làm tiếp được**. Điểm khác nhau nằm ở đó.”

#### Điểm kiểm tra

- [ ] **Đã triển khai ít nhất 1 task mà không viết 2 dòng đó**

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Lỡ viết 2 dòng đó | Cho gửi task tiếp theo mà không viết. **Chỉ cần 1 lần gửi không viết mà vẫn qua là đạt mục đích** |
| Rule không có tác dụng | Kiểm tra file `.mdc` có `alwaysApply: true` hay không. Nếu không có thì cho thêm vào |
| Không còn task nào（đã xong hết） | Kiểm tra trước vạch hoàn thành của chương 5 |
| Không đủ thời gian | Phần tiếp theo làm ở chương 5. **Không kéo dài ở đây** |

---
---

## Chương 5 Hoàn thiện — 0:50（18 phút）

> Đây là phần tiếp theo của chương 4. Học viên làm các task còn lại và hướng tới vạch hoàn thành.

### Mạch của chương

1. 5-1 Các task còn lại và yêu cầu bổ sung

### 5-1 Các task còn lại và yêu cầu bổ sung

#### ［Slide］Học viên làm gì（18 phút）

**Làm các task còn lại theo quy trình giống chương 4.** Chỉ gửi phần “làm gì”.

```
1  Mở tasks.md, chọn 1 task chưa xong
2  Mở chat mới
3  Chỉ gửi phần “làm gì” của task đó
4  Đọc diff → kiểm tra đã thỏa điều kiện hoàn thành chưa → nhấn Keep
5  Đánh dấu task đó trong tasks.md
```

**Khi còn 5 phút, dừng tay và chuẩn bị trình bày.** Mở poker trong trình duyệt và kiểm tra trước game đã chạy được tới đâu.

#### ［Slide］Vạch hoàn thành

- [ ] 5 lá bài được chia và hiển thị trên màn hình
- [ ] Chọn được lá bài để đổi
- [ ] Hiển thị tên bộ bài
- [ ] **Đã đưa vào yêu cầu bổ sung ở chương 2（vẽ viền quanh những lá tạo nên bộ bài）**

**Đạt tới mục 3 là đủ. Mục 4 là phần thử sức**（mục tiêu 4 của hôm nay）.

#### ［Slide］Góc tham khảo — Dành cho học viên hoàn thành sớm（Design Mode）

**Khi muốn sửa giao diện, có cách “chỉ trực tiếp” thay vì giải thích bằng lời.**

Trong lúc đang mở game của mình trong trình duyệt tích hợp, nhấn **`Ctrl+Shift+D`**（Mac là `Cmd+Shift+D`）.

| Thao tác | Phím |
|------|------|
| Bật / tắt Design Mode | `Ctrl+Shift+D`（Mac là `Cmd+Shift+D`） |
| Chọn vùng | `Shift` + kéo chuột |
| Đưa phần tử đã chọn vào chat | `Ctrl+L`（Mac là `Cmd+L`） |

**Code của phần tử đã chọn và quan hệ với các phần tử xung quanh** được chuyển cùng lúc cho Agent. Cách này nhanh hơn và ít sai hơn so với việc giải thích bằng lời “khoảng cách giữa các lá bài quá hẹp”.

| Phù hợp với | Không phù hợp với |
|---|---|
| Chỉnh giao diện, khoảng cách, bố cục, những chỗ nhấn vào mà không phản hồi | **Logic tính toán như xét bộ bài.** Phần này nhờ Agent như bình thường |

> **Đây là phần tham khảo thêm.** Không làm cũng được. **Vì đây là thay đổi giao diện không có trong yêu cầu, nên không phải nội dung chính của hôm nay.** Nếu muốn thay đổi, hãy thêm 1 dòng vào yêu cầu trước rồi mới nhờ AI.
>
> Tìm hiểu thêm: [`16-browser-design.md`](../fundamentals/16-browser-design.md)


#### Giảng viên nói gì

Đi quanh lớp và xem học viên đã tới đâu trong vạch hoàn thành. **Đạt tới mục 3 là đủ.**

- Học viên quay lại vibe coding mà không viết yêu cầu → nhắc nhở: “Hãy thêm 1 dòng vào yêu cầu trước rồi mới nhờ AI.”
- Học viên chưa làm yêu cầu bổ sung（viền） → cho thêm 1 dòng vào yêu cầu, thêm 1 task rồi nhờ AI làm

#### Điểm kiểm tra

- [ ] Đã đạt tới mục 3 của vạch hoàn thành
- [ ] Đã mở poker trong trình duyệt, ở trạng thái sẵn sàng trình bày

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Phần xét bộ bài không chạy đúng | Có thể giảm số bộ bài. Đưa các bộ bài bậc cao vào “không làm gì” |
| Lá bài không hiển thị / hiện ra các ô □ | Thêm vào yêu cầu “Chất bài hiển thị bằng ký tự `♠ ♥ ♦ ♣`. Không dùng ảnh” rồi gửi lại |
| Không đạt tới vạch hoàn thành | Dừng giữa chừng cũng được. **Khi trình bày, cho xem game đã chạy được tới đâu** |

---

## Chương 6 Trình bày — 1:08（12 phút）

> Cả lớp cho nhau xem poker của mình. **Không cắt phần này.**

### Mạch của chương

1. 6-1 Mỗi người trình bày 3 phút

### 6-1 Mỗi người trình bày 3 phút

#### ［Slide］Cách trình bày（mỗi người 3 phút）

| Thứ tự | Nội dung trình bày | Thời gian |
|---|---|---|
| 1 | Chạy poker của mình cho cả lớp xem | 1 phút |
| 2 | 1 thứ đã đưa vào mục **“không làm gì”** của yêu cầu | 30 giây |
| 3 | Những lá tạo nên bộ bài **đã có viền chưa**（có đánh giá được trên màn hình không） | 30 giây |
| 4 | So với trò lật hình ở buổi trước thì có gì khác | 1 phút |

**Không so sánh mức độ hoàn thiện.** Học viên dừng giữa chừng chỉ cần cho xem game đã chạy được tới đâu.

#### Giảng viên nói gì

Lớp có 4 người, mỗi người 3 phút, tổng cộng 12 phút. **Giảng viên giữ vai trò bấm giờ.**

Nếu có học viên đã làm được mục 3（viền）, giảng viên chỉ vào màn hình và nói:

> “**Chỉ cần nhìn màn hình là biết Two Pair đúng hay chưa.** Yêu cầu B ở buổi trước thì nhìn màn hình cũng không biết được.”

Ở mục 4, nếu học viên nói “Viết yêu cầu thật mất công”, giảng viên không phủ nhận.

> “Đúng vậy. **Với trò lật hình thì không cần viết cũng được.** Còn với poker thì bạn thấy thế nào?”

#### Điểm kiểm tra

- [ ] Tất cả học viên đã trình bày

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Có học viên không cho xem được màn hình | Mở `session02-spec/` của học viên đó trên máy của giảng viên, hoặc cho học viên giải thích bằng lời |
| Không đủ thời gian | Rút xuống mỗi người 2 phút. Mục 4 thì giảng viên hỏi chung cả lớp |

---

## Chương 7 Tổng kết — 1:20（10 phút）

> Cách đánh giá khi nào dùng cách nào, câu hỏi ôn tập và buổi sau. **Không rút ngắn phần này.**
> Phân bổ: nhìn lại 2 + những điều cần nhớ 1,5 + câu hỏi ôn tập 3 + giới thiệu buổi sau 1 + kiểm tra cho buổi sau 2,5 = 10 phút

### Mạch của chương

1. 7-1 Nhìn lại và cách chọn cách làm
2. 7-2 Câu hỏi ôn tập
3. 7-3 Buổi sau và phần kiểm tra cho buổi sau

### 7-1 Nhìn lại và cách chọn cách làm

#### ［Slide］Nhìn lại（hỏi học viên）

1. Giữa lúc làm trò lật hình và lúc làm poker, **thứ đưa cho AI khác nhau ở điểm nào?**
2. Nếu ngày mai phải làm lại 2 game này, bạn sẽ dùng cách nào cho **từng** game?

**Câu hỏi thứ 2 chính là đáp án của hôm nay.** Nếu câu trả lời được chia thành “trò lật hình thì dùng vibe coding, poker thì làm từ yêu cầu”, buổi học này đã thành công.

#### ［Slide］3 điều cần nhớ hôm nay

1. **Viết yêu cầu ở dạng “giao được cho người khác”**（làm gì + **không làm gì**）
2. **Để ở dạng kiểm tra được**（đưa tiêu chí trong đầu ra màn hình hoặc điều kiện hoàn thành）
3. **Những gì viết mỗi lần thì đặt vào rule**（`.cursor/rules/`）

#### ［Slide］Tiêu chí chọn cách làm

| Trường hợp | Cách làm |
|---|---|
| Nhỏ・chỉ dùng một lần・chỉ mình dùng | **Vibe coding**（quy mô cỡ trò lật hình） |
| Có nhiều điều cần quyết định・làm cùng người khác・sau này còn sửa | **Phát triển theo spec**（từ quy mô cỡ poker trở lên） |

**Ranh giới không phải là “quy mô” mà là “số điều cần quyết định”.**

### 7-2 Câu hỏi ôn tập

#### ［Slide］Học viên làm gì（3 phút）

| # | Câu hỏi | Đáp án |
|---|---|---|
| 1 | 4 mục bắt buộc trong yêu cầu là gì? | Làm gì / Màn hình / Thao tác / Không làm gì |
| 2 | Khi giao task, mỗi lần nhờ đưa bao nhiêu task? | 1 task |
| 3 | File ghi những điều muốn AI luôn tuân theo được đặt ở thư mục nào? | `.cursor/rules/` |

#### Giảng viên nói gì

Đối chiếu đáp án từng câu một. Nếu bị trễ giờ thì chỉ hỏi câu 3.

### 7-3 Buổi sau và phần kiểm tra cho buổi sau

#### ［Slide］Buổi sau（buổi 4）

> “Từ buổi sau, trong 2 buổi, **4 người sẽ cùng làm một ứng dụng theo nhóm.** Cách ‘viết yêu cầu trước’ của hôm nay sẽ được thực hiện theo nhóm. Chúng ta sẽ dùng GitHub để chia sẻ các thay đổi.”

#### Điểm kiểm tra（kiểm tra cho buổi sau・cả lớp）

Buổi 4 sẽ dùng GitHub. **Chúng ta kiểm tra ngay tại đây.** Nếu đến hôm đó mới phát hiện thì thời gian làm việc nhóm sẽ bị giảm.

- [ ] **Mục “Source Control” ở sidebar đang hiển thị các thay đổi của hôm nay**
- [ ] Đã có tài khoản GitHub

Nếu có học viên thiếu một trong hai mục, giảng viên ghi lại và xử lý trước buổi sau. **Việc cài GitHub CLI（`gh`）sẽ được thông báo muộn nhất vào ngày trước buổi 4**（mục 00-2 trong kịch bản buổi 4）.

#### Bài tập về nhà（tùy chọn）

- Tự thêm 1 dòng vào yêu cầu poker của hôm nay và thêm 1 chức năng
- Đọc [`06-rules.md`](../fundamentals/06-rules.md)

#### Khi mắc kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Không ai trả lời phần nhìn lại | Giảng viên chọn 1 nội dung đã xuất hiện trong phần trình bày và hỏi “Đó là cách làm nào?” |
| Bị trễ giờ | Chỉ hỏi 1 câu ôn tập. **Không cắt phần kiểm tra cho buổi sau** |

---

## Phụ lục: bản yêu cầu mẫu（để đối chiếu đáp án）

**Không được phát cho học viên ngay từ đầu.** Dùng để hỗ trợ học viên không tự viết được yêu cầu ở chương 2, hoặc để giảng viên cho thấy “viết được tới mức này là đủ”.

```markdown
# Yêu cầu — Poker rút 5 lá

## Làm gì

- Xáo bộ bài 52 lá（không có Joker）
- Chia cho người chơi và CPU mỗi bên 5 lá
- Người chơi chọn những lá muốn giữ và đổi các lá còn lại, chỉ được đổi 1 lần
- CPU cũng chỉ đổi 1 lần（dùng tiêu chí đơn giản: giữ lại các lá đã tạo thành từ One Pair trở lên）
- Xét bộ bài từ các lá trên tay của cả hai bên
- Hiển thị bên có bộ bài mạnh hơn là bên thắng
- **Khi có kết quả thắng thua, vẽ viền quanh những lá tạo nên bộ bài đó. Các lá không liên quan thì để màu xám**
- Nếu hai bên có bộ bài giống nhau và hòa hoàn toàn, bên đổi ít lá hơn là bên thắng

## Các bộ bài được triển khai（từ mạnh đến yếu）

Four of a Kind / Full House / Flush / Straight / Three of a Kind / Two Pair / One Pair / High Card

> Straight Flush và Royal Flush được đưa vào “không làm gì”.

## Màn hình

- Xếp 5 lá trên tay của người chơi ở mặt ngửa
- Các lá trên tay của CPU úp xuống cho tới khi có kết quả thắng thua
- Lá bài là hình chữ nhật màu trắng, hiển thị số（A 2 3 … K）và chất（♠ ♥ ♦ ♣）**bằng ký tự**. Không dùng ảnh
- Nút “Đổi bài” và nút “Chơi lại”
- **Tên bộ bài hiển thị bằng tiếng Anh**（Two Pair / Full House, v.v.）
- Kết quả hiển thị theo dạng “Bạn: One Pair / CPU: Two Pair → CPU thắng”
- **Khi có kết quả thắng thua, vẽ viền quanh những lá tạo nên bộ bài trong các lá trên tay của cả hai bên**

## Thao tác

- Nhấp vào lá bài thì chuyển đổi giữa “giữ” và “bỏ”
- Nhấn “Đổi bài” thì chỉ những lá được chỉ định “bỏ” mới được rút lại
- Chỉ được đổi 1 lần. Lần thứ 2 không nhấn được
- Nhấn “Chơi lại” thì bắt đầu lại từ đầu

## Không làm gì

- Cược・chip・tiền đặt cược
- Bluff・đấu trí chiến thuật của CPU
- Từ 3 người chơi trở lên
- Joker
- Straight Flush / Royal Flush
- Hiệu ứng động（hiệu ứng lật bài）
- **Ảnh lá bài**（chất bài hiển thị bằng ký tự）
- Thư viện ngoài, API（bao gồm cả dịch vụ cung cấp ảnh）
- Lưu thành tích（reload thì đặt lại từ đầu cũng được）
```

**Dòng ★**（vẽ viền quanh những lá tạo nên bộ bài）là điểm then chốt của buổi này.

**Tên** bộ bài thì AI tự hiển thị dù không được nhờ. Thứ AI không hiển thị là “**những lá nào tạo nên bộ bài đó**”. Khi có dòng này, **chỉ cần nhìn màn hình là kiểm tra được việc xét bộ bài có đúng hay không**. Đây chính là câu trả lời cho việc “chỉ có thể đối chiếu với trí nhớ của mình” khi nhận yêu cầu bổ sung ở buổi trước.

Dòng “Nếu hai bên có bộ bài giống nhau thì bên đổi ít lá hơn là bên thắng” được đặt vào như **một ví dụ về điều có thể quyết định trong yêu cầu**. Dòng này không được dùng làm yêu cầu bổ sung.


---

## Checklist cho giảng viên（dùng trong ngày）

#### Trước hôm đó

- [ ] **`.cursor/skills/requirements/` và `.cursor/skills/task-breakdown/` đã có trong repo**
- [ ] **Giảng viên đã tự tạo thử rule của chương 4（`.cursor/rules/task-cycle.mdc`）1 lần**（kiểm tra AI có dừng ở 4 dòng không／với `alwaysApply: true` thì rule có thực sự có tác dụng không）
- [ ] Đã báo trước cho học viên rằng “trong ngày học sẽ chạy `git pull`”
- [ ] Giảng viên đã tự làm thử một lượt từ chương 2 đến chương 5
- [ ] **Đã nhờ AI làm poker và đo thực tế xem trong khoảng 50 phút của chương 3–chương 5 thì làm được tới đâu**（kiểm tra tính khả thi của vạch hoàn thành）
- [ ] **Đã làm poker bằng vibe coding 1 lần và chụp ảnh màn hình để làm mẫu**（cho xem ở 2-2 của chương 2）
- [ ] Đã xem 1 lần lá bài hiển thị bằng ký tự `♠ ♥ ♦ ♣` trên cùng hệ điều hành với học viên
- [ ] Đã kiểm tra có thể cho cả lớp xem màn hình của học viên bằng chia sẻ màn hình hoặc máy chiếu（chương 6）

#### Yêu cầu bổ sung（câu chữ được đưa lên slide）

| Thời điểm đưa ra | Nội dung |
|---|---|
| Chương 2, 2-3 ③ | Khi có kết quả thắng thua, vẽ viền quanh những lá tạo nên bộ bài（các lá không liên quan để màu xám） |

**Nếu xuất hiện phiên bản AI đoán ra được yêu cầu này, hãy thay yêu cầu khác.** Điều kiện là “chi phí triển khai thấp” và “không xuất hiện từ hiểu biết thông thường về game đó”.

#### Quản lý thời gian

- Chương 2: dừng hội thoại sau 8 phút. Dù yêu cầu còn nhiều chỗ trống vẫn chuyển sang chương 3
- Chương 3: **xong 2 task thì cho dừng.** Không cho làm hết（làm tiếp ở chương 4）
- **Không cắt chương 4（rule phát triển）.** Đây là chỗ duy nhất để thấy “rule có tác dụng”
- Chương 5: rút ngắn khi bị trễ giờ. **Không cắt chương 6（trình bày）**
- Chương 7: dù thế nào cũng giữ đủ 10 phút

#### Những chỗ hay bị kẹt

| Tình huống | Cách xử lý |
|--------|------|
| Chưa chạy `git pull` nên không thấy Skill | Kiểm tra cả lớp ngay đầu chương 2. Bị dừng ở đây thì mất 15 phút |
| Có học viên không biết luật chơi poker | Cho xem bảng các bộ bài ở chương 2. Cho biết có thể đưa các bộ bài bậc cao vào “không làm gì” |
| Đã đưa yêu cầu mà vẫn bị thêm chức năng thừa | Nhấn mạnh mục “không làm gì” rồi gửi lại. Bản thân điều này cũng là tư liệu học tốt |
| Lá bài không hiển thị | **Không phát ảnh lá bài.** Cho sửa yêu cầu để chất bài hiển thị bằng ký tự `♠ ♥ ♦ ♣` |
| Học viên cảm thấy vibe coding hiệu quả hơn | Nói thẳng rằng đúng là như vậy với quy mô cỡ trò lật hình. Khi có nhiều điều cần quyết định hơn thì kết quả dễ đảo ngược |
