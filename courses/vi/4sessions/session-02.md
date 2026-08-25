# Buổi 2: Vibe coding → phát triển theo đặc tả（90 phút）

> **Mục tiêu của buổi này（4 bậc）**
> 01 Dùng vibe coding để ra được một thứ chạy được → 02 Nhận ra cùng một yêu cầu mà cả lớp làm ra những thứ khác nhau → 03 Viết đặc tả trước rồi mới cho làm → 04 Yêu cầu đến sau thì thêm vào đặc tả rồi cho chạy tiếp（phần thử sức）
> **Lên tới 01–03 là đạt. 04 là phần thử sức**, không tới cũng không phải là thất bại.

---

## Luận điểm của buổi này（giảng viên cần hiểu trước）

**Kịch bản này được dựng trên tiền đề: KHÔNG nói rằng “vibe coding thì sẽ vỡ”.**

Trò lật hình tìm cặp là thứ AI biết rất rõ, nên vibe coding vẫn làm xong bình thường. Điểm số, độ khó, giới hạn thời gian — nhờ thì nó thêm được hết（**đã đo thực tế**）. Dựng kịch bản theo hướng “kiểu gì cũng vỡ” thì thực tế không diễn ra đúng như vậy, và học viên nhìn ra ngay.

Buổi này cho thấy bốn điều sau.

| Vibe coding trên thực tế | Trải nghiệm ở đâu |
|---|---|
| **Nó làm cả những thứ không ai nhờ** — không phân biệt được đâu là thứ mình chỉ định, đâu là thứ AI tự quyết | Chương 3 |
| **Cùng một yêu cầu, mỗi người ra một thứ khác nhau** — không tái lập được | Chương 3 |
| **Không phán định được đúng sai** — không có căn cứ nào để trả lời “thế này là đúng chưa” | Chương 4 |
| **Không bàn giao được** — không đưa cho người không có ngữ cảnh được | Chương 4 |

Chỗ hạ cánh cuối cùng là **“vibe không phải là cái xấu. Vấn đề là nhận ra điểm cần chuyển sang cách khác.”** Nếu vibe làm xong ngon lành thì đó không phải thất bại, mà thu về được bài học “lần này vibe là lựa chọn đúng”. Cấu trúc buổi học thành lập dù kết quả có ra sao.

---

## Cách đọc kịch bản này

Kịch bản viết theo giả định: **học viên vừa nhìn tài liệu vừa tự tay làm, giảng viên vừa giảng vừa dẫn nhịp**. Phần chia thời gian cũng vậy. Mỗi chương gồm 5 khối（ở vài phần như trang bìa và mở đầu thì có thể thiếu vài khối）.

| Khối | Dành cho ai |
|------|-------------|
| **［Slide］Giải thích** | Giải thích cơ chế của Cursor. Đưa lên slide. Nguồn là `courses/vi/fundamentals/` |
| **［Slide］Học viên làm gì** | Đưa thẳng lên tài liệu phát. Prompt in đầy đủ, không đọc miệng |
| **Giảng viên nói gì** | Nội dung nói trong lúc học viên đang gõ, đang chờ |
| **Điểm kiểm tra** | Căn cứ để quyết định chờ cho đủ hay đi tiếp |
| **Khi mắc kẹt** | Những chỗ kẹt thật sự xảy ra ở chương đó và cách xử lý |

Phần giải thích lấy từ [`courses/vi/fundamentals/`](../fundamentals/). **Muốn sửa nội dung thì sửa ở phía fundamentals**（kịch bản chỉ là bản trích）.

| Chương | fundamentals được trích |
|--------|-------------------------|
| Chương 2 | [`01-modes`](../fundamentals/01-modes.md)（model và Auto） |
| Chương 5 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 6 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 7 | [`06-rules`](../fundamentals/06-rules.md) |

> Chỗ nào có dấu **［Nói miệng］**là thứ giảng viên truyền đạt tại chỗ bằng lời. Đó là các “yêu cầu phát sinh” ở chương 4 và chương 5.
> Việc chỉ định thời điểm là để dựng lại tình huống “chủ đầu tư nói thêm sau”, chứ không cần giấu giếm gì.

---

## Chuẩn bị trước（những thứ buổi này cần）

| Thứ cần có | Nội dung |
|---|---|
| `.cursor/skills/requirements/` | Skill viết đặc tả. Hỏi về đề tài rồi cùng học viên điền “what it does / screen / interactions / out of scope”, xuất ra một tệp Markdown |
| `.cursor/skills/task-breakdown/` | Skill chia task. Cắt đặc tả thành các task đủ nhỏ để đưa cho Agent từng cái một, mỗi task có điều kiện hoàn thành |

**Tiền đề là hai skill này đã có trong repo.** Chương 5 và chương 6 dùng tới chúng.

---

## Bảng thời gian

| Giờ | Chương | Nội dung | Ai làm |
|-----|--------|----------|--------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Làm cùng một game hai lần（5 phút） | Giảng viên |
| 0:05 | Chương 2 Làm bằng vibe | Mỗi người tự gõ đúng một câu ví dụ（15 phút） | Cả lớp |
| 0:20 | Chương 3 Đem ra so | Cho nhau xem màn hình với người bên cạnh（10 phút） | Cả lớp |
| 0:30 | Chương 4 Yêu cầu phát sinh | Nhét yêu cầu mới của chủ đầu tư vào bản vibe của mình（15 phút） | Cả lớp |
| 0:45 | Chương 5 Viết đặc tả | Dùng skill viết đặc tả để viết đặc tả của mình（15 phút） | Cả lớp |
| 1:00 | Chương 6 Chia task rồi làm | Chia task → làm từng cái một（20 phút） | Cả lớp |
| 1:20 | Chương 7 Mang về | Cách quyết dùng cái nào, và buổi sau（10 phút） | Giảng viên |

**Học viên tự tay làm 75 phút trên tổng 90 phút.**

> Bảng thời gian này chính là cấu trúc chương của slide. Đầu mỗi chương có một trang bìa chương.

> **Nếu trễ giờ**: cắt chương 6（viết được đặc tả là đã đạt một nửa mục đích）. **Không cắt chương 3 và chương 4.** Hai chương đó là phần chính.

---

## Trang bìa và phần mở đầu — 0:00（tính trong chương 1）

### ［Slide］Trang bìa

```
Từ vibe coding tới phát triển theo đặc tả

Khóa thực hành Cursor　Buổi 2 / 4　·　90 phút
（ngày）
```

### ［Slide］Ôn lại buổi trước（30 giây）

**Vòng lặp của buổi trước hôm nay vẫn y nguyên. Thứ thay đổi chỉ là nội dung của yêu cầu.**

```
Ask（@tệp + câu hỏi）
  ↓ hiểu nội dung
Agent（@tệp + yêu cầu + điều kiện hoàn thành）
  ↓ đọc diff
Keep hoặc Undo
```

### ［Slide］Việc của hôm nay

**Làm cùng một game hai lần.**

| | Cách làm | Ở đâu |
|---|---|---|
| Lần 1 | Không quyết gì cả, chỉ nói “làm cho nó ổn ổn” | Chương 2 |
| Lần 2 | Viết đặc tả trước rồi mới làm | Chương 5, chương 6 |

**Không phải để xem cái nào tốt hơn, mà để mang về câu trả lời: khi nào thì dùng cái nào.**

### Giảng viên nói gì

Có ai vắng buổi 1 thì riêng slide ôn lại hãy nói kỹ. Còn lại chạy trong 30 giây.

**Tuyên bố trước rằng “sẽ làm hai lần” thì học viên sẽ không bận tâm chuyện lần 1 còn thô.** Đừng bỏ qua chỗ này.

---

## Chương 1 Mục tiêu hôm nay — 0:00（5 phút）

> Làm cùng một game hai lần. Lần 1 bằng vibe coding, lần 2 bắt đầu từ đặc tả.

### ［Slide］Học viên làm gì

Không có. Chỉ nghe.

### Giảng viên nói gì

> “Hôm nay cả lớp cùng làm một game: trò lật hình tìm cặp（memory match）. Nhưng làm hai lần.
> Lần 1: không nghĩ gì cả, chỉ nhờ ‘làm cho nó ổn ổn’（vibe coding）
> Lần 2: viết đặc tả trước rồi mới làm（phát triển theo đặc tả）
> Bên nào trôi hơn — cứ để cơ thể tự nhớ.”

**Tuyên bố trước rằng sẽ làm hai lần thì học viên sẽ không bận tâm chuyện lần 1 còn thô.** Đừng bỏ qua chỗ này.

Ôn lại buổi trước đúng một câu（vòng Ask → Agent → diff → Keep）.

**Bốn bậc của hôm nay:**

| Bậc | Làm được gì | Làm ở đâu |
|-----|-------------|-----------|
| 01 | Dùng vibe coding để ra được một thứ chạy được | Chương 2 |
| 02 | Nhận ra cùng một yêu cầu mà cả lớp làm ra những thứ khác nhau | Chương 3 |
| 03 | Viết đặc tả trước rồi mới cho làm | Chương 5, chương 6 |
| 04 | Yêu cầu đến sau thì thêm vào đặc tả rồi cho chạy tiếp ← **thử sức** | Chương 6 |

> **Cách dùng từ**: tên của phương pháp là “vibe coding” và “phát triển theo đặc tả”.
> Khi đem hai sản phẩm ra so thì gọi là “**bản vibe**” và “**bản đặc tả**”. Với học viên cũng dùng đúng hai từ này.

### Điểm kiểm tra

Không có. Gói lại trong 5 phút.

### Khi mắc kẹt

Có ai vắng buổi 1 thì bổ sung riêng vòng Ask → Agent → diff → Keep trong 30 giây.

---

## Chương 2 Làm bằng vibe — 0:05（15 phút）

> Không quyết gì mà cứ nhờ thì ra tới đâu. **Mỗi người có một bản vibe của riêng mình.**

### ［Slide］Giải thích — vì sao phải cố định model

Cạnh ô nhập có cả **mode**（Agent / Ask…）lẫn **model**（Auto…）. Hai thứ khác nhau.

| | Quyết định điều gì | Đổi bằng |
|---|---|---|
| **Mode** | **Cách hành xử** của AI（có sửa tệp hay chỉ tra cứu） | `Shift+Tab` |
| **Model** | **Chính bộ não AI** xử lý yêu cầu | `Ctrl+/`（Mac là `Cmd+/`） |

Mặc định là **Auto**, không có nghĩa “không chọn model”, mà là **Cursor Router tự chọn cho từng request**. Việc khó thì đẩy sang model mạnh, việc dễ thì đẩy sang model rẻ.

**Ngày thường để Auto là không gặp vấn đề gì.** Chỉ đáng cố định lại khi **muốn so sánh kết quả**, đúng như hôm nay. Cứ để Auto thì bản vibe và bản đặc tả chạy hai model khác nhau, và ta không còn phân biệt được khác biệt đến từ “cách làm” hay từ “model”.

> Chi tiết hơn: [`01-modes.md`](../fundamentals/01-modes.md)

### ［Slide］Học viên làm gì

**① Cố định model（3 phút, bắt buộc）**

Bấm vào phần hiển thị model ở ô nhập（**Auto** hoặc **High**）, hoặc `Ctrl+/`（Mac là `Cmd+/`）, rồi chọn **một model cụ thể chứ không phải Auto**.

**Hôm nay từ đây trở đi dùng mãi một model đó.** Đổi ở giữa chừng thì phần so sánh về sau biến thành “khác model” chứ không còn là “khác cách làm”.

**② Tạo thư mục làm việc（1 phút）**

Tạo một thư mục mới tên `session02/`.

**③ Cho nó làm trò lật hình tìm cặp（10 phút）**

Mở một chat mới rồi gửi câu sau. **Chỉ vậy thôi.**

```text
Làm cho tôi một game lật hình tìm cặp.
HTML + JS, chơi được trên trình duyệt.
Làm sao cho ổn ổn là được.
```

**④ Chạy thử（1 phút）**

Có kết quả rồi thì mở trên trình duyệt, xác nhận chơi được.

### Giảng viên nói gì

**Ở ①**: đây là thao tác duy nhất của buổi này mà bỏ qua thì phần so sánh về sau không thành lập. An toàn nhất là xác nhận màn hình của cả lớp rồi mới đi tiếp.

**Ngay sau khi gửi ③ và đang chờ（1–3 phút）**: đây là quãng chờ dài. Hãy nói sẵn mấy điều sau.

- Rằng ta đang cố tình nhờ một cách cẩu thả. “Làm cho nó ổn ổn” chính là câu đã bị liệt vào “tránh nói” ở buổi trước
- Rằng **khi có kết quả, hãy đi tìm xem có thứ gì mình không nhờ mà vẫn được gắn thêm vào không** ← báo trước cho chương 3

**Sau ④**: “Nhanh. Ra ngay một thứ chạy được. Tới đây vẫn là sở trường của vibe coding.”

**Đừng kết thúc ở câu ‘AI đỉnh thật’.** Hãy dùng nó làm móc kéo sang chương sau.

### Điểm kiểm tra

- [ ] Model đã được cố định vào một model cụ thể, không còn là Auto（**bắt buộc với tất cả**）
- [ ] Bản vibe của chính mình đang chạy trên trình duyệt

**Có người không chạy được thì vẫn đi tiếp.** Xin xem màn hình người bên cạnh là chương 3 vẫn thành lập.

### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
|---------|-------|
| Không biết chọn model ở đâu | Bấm vào tên model ở ô nhập. `Ctrl+/`（Mac là `Cmd+/`）cũng mở ra |
| Không mở được trên trình duyệt | Mở bằng trình duyệt tích hợp của Cursor. Kiểm tra luôn đường dẫn tệp |
| Nó sinh ra một đống tệp, rối quá | Cứ để vậy. Chương này không dọn dẹp gì cả |
| Không chạy | Dán lỗi vừa hiện cho Agent và nhờ sửa. Vẫn không được thì xin xem màn hình người bên cạnh |

---

## Chương 3 Đem ra so — 0:20（10 phút）

> **Chương này chỉ làm được ở lớp.** Nó cho thấy thứ mà ngồi một mình thì không nhận ra.

### ［Slide］Học viên làm gì

**① Cho người bên cạnh xem bản vibe của mình（5 phút）**

So các mục sau giữa bản của mình và bản của người bên cạnh.

| Đem ra so | Của mình | Của bạn bên cạnh |
|---|---|---|
| Có bao nhiêu lá bài | | |
| Mặt trước là hình gì（số / emoji / màu） | | |
| Có hiện điểm hay số lượt không | | |
| Có cho chọn độ khó không | | |
| Giao diện（màu, bố cục） | | |

**② Đếm những thứ chính mình “không hề nhờ”（3 phút）**

Yêu cầu bạn gửi đi chỉ có ba dòng. Hãy kể ra những thứ ngoài ba dòng đó mà vẫn có mặt.

**③ Trả lời bằng một câu（2 phút）**

> **Thứ bạn muốn làm ra, là cái nào trong số này?**

### Giảng viên nói gì

**Trong lúc ① thì đi quanh lớp nhặt sẵn các khác biệt.** Người có số lá bài khác, người có hình khác, người có điểm và người không. **Nhặt làm nguyên liệu để nói với cả lớp ngay sau đó.**

**Ở ②**: đây là điểm thứ nhất.

> “Điểm số, độ khó — không ai nhờ cả. AI tự quyết. **Không phân biệt được đâu là thứ mình chỉ định, đâu là thứ AI tự quyết.** Đó là tính chất thứ nhất của vibe.”

**Ở ③**: đây là điểm thứ hai.

> “Cả lớp gõ đúng ba dòng như nhau, mà ra toàn thứ khác nhau. **Gõ lại lần nữa thì lại ra một thứ khác nữa.** Chạy thì có chạy, nhưng không nhắm mà làm ra được.”

Rồi bàn giao sang chương sau.

> “Chạy được rồi thì thôi kệ. Nhưng bản vibe đó sắp nhận **yêu cầu bổ sung từ chủ đầu tư**.”

### Điểm kiểm tra

- [ ] Đã cho nhau xem với người bên cạnh（ai ngồi một mình thì so với màn hình của giảng viên）
- [ ] Nói được ít nhất một thứ “không nhờ mà vẫn có”

### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
|---------|-------|
| Người bên cạnh vắng, ngồi một mình | Cho so với bản vibe của giảng viên, hoặc với người ở bàn bên |
| Cả lớp ra giống nhau quá | Kiểu gì cũng lệch ở một trong ba thứ: số lá, hình, có điểm hay không. Cho soi kỹ hơn |
| Có người bảo “thì cũng có sao đâu” | Phản ứng đó là đúng. Đáp lại: “cái hiện giờ không thấy phiền, chương sau sẽ ra sao — cứ xem tiếp” |

---

## Chương 4 Yêu cầu phát sinh — 0:30（15 phút）

> **Đây là cao trào của buổi.** Khi chủ đầu tư đưa thêm yêu cầu, bản vibe sẽ ra sao.

### ［Nói miệng］Yêu cầu bổ sung do giảng viên đưa tại chỗ

Giảng viên đóng vai chủ đầu tư, tới lúc này thì nói miệng.

> “Chủ đầu tư có thêm yêu cầu. Hai cái.
> **① Ghép được một cặp thì cho lật tiếp một lượt nữa.**
> **② Từ lần sai thứ ba trở đi, rút thời gian chờ trước khi úp lại xuống còn 0,5 giây.**”

Hai điều này là **luật mà AI không suy ra được từ hiểu biết thông thường về trò tìm cặp**. Vì vậy bản vibe không có cái nào trong hai cái đó.

### ［Slide］Học viên làm gì

**① Mở một chat mới（1 phút）**

Không dùng chat đang mở, mà mở **chat mới**.

> **Vì sao**: chat đang mở còn giữ ngữ cảnh “vừa nãy đã làm ra cái gì”. Chat mới thì không có ngữ cảnh đó. **Nó tạo ra đúng tình huống bàn giao cho người khác.**

**② Cho nó làm phần yêu cầu bổ sung（8 phút）**

Hai điều giảng viên vừa nói miệng, hãy tự viết bằng lời của mình rồi gửi.

```text
@session02/
（tự viết lại yêu cầu bổ sung mà giảng viên vừa nói）
Đừng đổi những hành vi khác.
```

**③ Ghi lại（6 phút）**

| Ghi lại cái gì | Trả lời |
|---|---|
| Số dòng thay đổi（+/- của diff） | |
| Có tính năng cũ nào hỏng không | |
| **Bạn có tự phán định được là nó làm đúng chưa không** | |

Dòng thứ ba là câu hỏi quan trọng nhất của hôm nay.

### Giảng viên nói gì

**Ở ①**: rất nhiều người bỏ qua bước mở chat mới. Bỏ qua chỗ này thì không tạo được tình huống “đưa cho người không có ngữ cảnh”, và cả chương mất ý nghĩa.

**Ngay sau khi gửi ② và đang chờ**: nói trước về dòng thứ ba của bảng ghi.

> “Lát nữa có kết quả, hãy kiểm xem nó có vào đúng không. **Bạn đối chiếu với cái gì?**”

**Ở ③**: đây là điểm thứ ba và thứ tư.

> “Chắc là chạy được. Vì AI giỏi mà. Nhưng chuyện ‘có đúng là 0,5 giây không’ thì **bạn nhìn vào cái gì để xác nhận**? Nhìn vào trí nhớ của chính mình. **Cái để đối chiếu chỉ nằm trong đầu bạn.**”

> “Và vừa nãy khi đưa sang chat mới, AI phải đọc lại code từ đầu. **Ngoài bạn ra, không ai biết đoạn code này được viết với ý đồ gì.**”

**Phần lớn học viên sẽ làm được. Như vậy là ổn.** Luận điểm của chương này không phải “không làm được”, mà là “**làm rồi mà không phán định được là đã làm đúng hay chưa**”.

### Điểm kiểm tra

- [ ] Đã nhờ trong một chat mới
- [ ] Ba dòng của bảng ghi đã điền xong

**Có ai bị hỏng thì là may.** Đem chia sẻ với cả lớp làm nguyên liệu. Không hỏng cũng chẳng sao.

### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
|---------|-------|
| Không nhớ yêu cầu bổ sung | Giảng viên nói lại |
| Lỡ làm tiếp trong chat cũ | Cũng ghi lại luôn. “Có ngữ cảnh thì đỡ hơn” cũng là một bài học đáng nhặt |
| Không biết đếm số dòng thay đổi thế nào | Ở góc trên bên phải của diff, hoặc thanh thay đổi trong panel Agent, có hiện +/- |
| Không xác nhận được là nó đã làm đúng chưa | **Đó chính là đáp án.** Cho ghi vào là “không xác nhận được” |

---

## Chương 5 Viết đặc tả — 0:45（15 phút）

> Lần thứ hai. Lần này **tự viết đặc tả trước** rồi mới làm.

### ［Slide］Giải thích — Skill là gì

**Skill là gói gom lại “quy trình khi làm loại việc này”.** Nhờ nó mà khỏi phải viết lại cùng một quy trình mỗi lần.

| Cơ chế | Vai trò | Ví dụ |
|--------|---------|-------|
| **Rules** | Phương châm, ràng buộc luôn có hiệu lực | “Commit viết bằng tiếng Việt” |
| **Skills** | **Bản quy trình, chỉ nạp khi cần** | Cách viết đặc tả, cách chia task |

Đặt ở `.cursor/skills/<tên>/SKILL.md`. Có ba cách gọi.

| Cách gọi | Phạm vi tác dụng |
|----------|------------------|
| **Tự động** | Khi Agent thấy “nên dùng cái này” |
| **Dấu gạch chéo** | Gõ `/` rồi chọn. **Chỉ đúng tin nhắn đó** |
| **Custom Mode** | Cố định bằng `Alt+Enter`（Mac là `Option+Enter`）. **Cả phiên làm việc** |

**Hôm nay gọi bằng dấu gạch chéo.**

---

**Bốn mục nhất định phải có trong đặc tả**

| Mục | Nội dung |
|---|---|
| **What it does** | Những gì cần có để nó thành hình |
| **Screen** | Nhìn thấy gì, bấm được gì |
| **Interactions** | Người dùng làm gì thì xảy ra chuyện gì |
| **Out of scope** | **Những thứ quyết định là lần này không làm** |

Mục thứ tư mới là chỗ ăn tiền của hôm nay. **AI luôn tự thêm vào những thứ không được viết ra**, nên phải cấm trước. Cùng một cái lý với chuyện điểm số và độ khó tự mọc ra ở chương 2.

> Chi tiết hơn: [`07-skills.md`](../fundamentals/07-skills.md) · [`05-prompting.md`](../fundamentals/05-prompting.md)

### ［Slide］Học viên làm gì

**① Gọi skill viết đặc tả（2 phút）**

Trong một chat mới, gõ `/` ở ô nhập rồi chọn **requirements**.

```text
/requirements Tôi muốn làm game lật hình tìm cặp（memory match）
```

**② Vừa đối thoại vừa điền đặc tả（8 phút）**

Trả lời những gì skill hỏi. Cần điền bốn mục.

| Mục | Nội dung |
|---|---|
| **What it does** | Những gì cần có để game thành hình |
| **Screen** | Nhìn thấy gì, bấm được gì |
| **Interactions** | Người dùng làm gì thì xảy ra chuyện gì |
| **Out of scope** | **Những thứ quyết định là lần này không làm** |

**Đừng quên chép cả hai điều chủ đầu tư đã nói ở chương 4 vào đặc tả.**

**③ Nhận thêm một yêu cầu nữa và thêm vào（5 phút）**

Giảng viên sẽ đưa thêm một yêu cầu. Hãy xử lý nó **chỉ bằng cách thêm một dòng vào đặc tả**.

### ［Nói miệng］Yêu cầu bổ sung thứ hai

**Đúng lúc ③, giảng viên nói miệng.**

> “Thêm một cái nữa. **Khi chỉ còn 2 cặp thì đổi màu mặt sau của các lá bài.**”

### Giảng viên nói gì

**Trong lúc ②**: đi quanh lớp và **bắt chuyện với những ai đang để trống mục “Out of scope”**. Trống chỗ đó thì AI lại tự thêm vào nữa.

> “‘Out of scope’ là chỗ ăn tiền của hôm nay. AI luôn tự thêm những thứ không được viết ra, nên **phải cấm trước**.”

**Nửa sau của ②**: kiểm tra xem hai điều ở chương 4 đã được viết vào đặc tả chưa. Viết rồi thì chỉ vào đó mà nói.

> “Cái mà vừa nãy chỉ được nói bằng mồm, giờ **đã thành chữ**. Từ giờ, người khác ngoài bạn cũng phán định được là ‘đúng chưa’.”

**Ở ③**: đây chính là phần đối chiếu đáp án của hôm nay.

> “Lại tới thêm một ‘yêu cầu bổ sung’. Ở chương 4 thì mình đi sờ thẳng vào code, đúng không. **Lần này chỉ thêm một dòng vào đặc tả.** Khác nhau ở chỗ nào?”

### Điểm kiểm tra

- [ ] Bốn mục của đặc tả đã điền（nhất là **Out of scope**）
- [ ] Hai yêu cầu bổ sung ở chương 4 đã được viết vào đặc tả
- [ ] Yêu cầu bổ sung thứ hai đã được thêm một dòng vào đặc tả

**Đặc tả không cần hoàn hảo.** Điền xong là đi tiếp.

### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
|---------|-------|
| Không gọi được skill | Gõ `/` rồi tìm trong danh sách. Không thấy thì kiểm tra xem có `.cursor/skills/` không |
| Không nghĩ ra “Out of scope” | Gợi ý sẵn: “chọn độ khó”, “giới hạn thời gian”, “animation”, “thư viện ngoài” |
| Đặc tả phình to quá | Bắt cắt “What it does” xuống còn tối đa 5 mục. Phần dư đẩy sang “Out of scope” |
| Đối thoại mãi không xong | Cắt ở phút thứ 8. Mục nào chưa điền thì để trống rồi đi tiếp |

---

## Chương 6 Chia task rồi làm — 1:00（20 phút）

> Cắt đặc tả thành những phần đủ nhỏ để đưa từng cái một, rồi mới làm.

### ［Slide］Giải thích — mỗi lần nhờ chỉ một việc

Buổi 1 đã học “yêu cầu mơ hồ thì kết quả cũng mơ hồ”. **Chia task chính là cách làm cụ thể của điều đó.** Mỗi lần nhờ thì theo khuôn này.

```text
【Muốn làm gì】một câu
【Phạm vi】@tệp hoặc thư mục
【Ràng buộc】cái gì không được làm hỏng
【Điều kiện hoàn thành】có gì thì coi như xong
```

**Có điều kiện hoàn thành thì mới phán định được thứ nó trả về.** Nó đối xứng đúng với chuyện ở chương 4: “căn cứ để phán định chỉ nằm trong đầu mình”.

Hội thoại dài ra thì chuyển sang **chat mới**. Để khỏi kéo theo tiền đề cũ.

> Chi tiết hơn: [`05-prompting.md`](../fundamentals/05-prompting.md)

### ［Slide］Học viên làm gì

**① Chia thành task（5 phút）**

```text
/task-breakdown （đưa bản đặc tả vừa viết）
```

Cắt được **3–5 task** là đủ. Nhiều quá thì cắt bớt.

**② Làm từng cái một（15 phút）**

Mở **chat mới** và đưa **đúng một** task.

```text
（nội dung của task 1）
Điều kiện hoàn thành: （điều kiện hoàn thành ghi trong task）
Đừng đổi những tính năng khác.
```

Đọc diff, Keep xong thì sang task tiếp theo.

**③ Vạch hoàn thành**

- [ ] Các lá bài xếp ra và lật được
- [ ] Phán định được khớp / không khớp
- [ ] Ghép đủ mọi cặp thì hiện màn hình hoàn thành
- [ ] **Có ít nhất một trong các yêu cầu bổ sung ở chương 4 và chương 5 đã vào**

### Giảng viên nói gì

**Ở ①**: “mỗi lần nhờ chỉ một việc” là khuôn của hôm nay. Buổi 1 đã học “yêu cầu mơ hồ thì kết quả cũng mơ hồ”. **Chia task chính là cách làm cụ thể của điều đó.**

**Trong quãng chờ ở ②**: vừa đi quanh lớp vừa để ý mấy điểm sau.

- Ai không đưa đặc tả mà lại vibe tiếp → nhắc
- Ai nhét từ hai việc trở lên vào một lần nhờ → nhắc “từng cái một”

**Hết giờ thì dừng, kể cả khi chưa xong.** Mục đích của chương này không phải làm xong, mà là **chạy đúng một lần cái khuôn cách đưa việc**.

### Điểm kiểm tra

- [ ] Đã cắt được 3–5 task
- [ ] Đã làm và Keep ít nhất 2 task

**Không xong cũng không sao.** Đạt 2 trên 4 mục ở vạch hoàn thành là đủ.

### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
|---------|-------|
| Cắt ra hơn 10 task | Đặc tả to quá. Thêm vào “Out of scope” rồi cắt lại |
| Thấy đưa từng cái phiền quá nên đưa hết một lượt | Đừng ngăn. **Đó lại là nguyên liệu để so kết quả về sau** |
| Không đủ giờ | Cắt ở 2 mục hoàn thành. Không được cắt chương 7 |
| Lẫn lộn với bản vibe | Tách thư mục ra（`session02/` và `session02-spec/`） |

---

## Chương 7 Mang về — 1:20（10 phút）

> Cách quyết dùng cái nào, và buổi sau. **Chương này không rút ngắn.**
> Phân bổ: nhìn lại 3 + điều cần nhớ 2 + vibe không phải cái xấu 1 + phía trước 1 + giới thiệu buổi sau 1 + xác nhận cho buổi sau 2 = 10 phút

### ［Slide］Học viên làm gì

- Trả lời ba câu hỏi nhìn lại
- Cuối cùng, **giơ tay** ở phần xác nhận cho buổi sau（`git status` có chạy không / có tài khoản GitHub không）

### Giảng viên nói gì

**Nhìn lại（hỏi học viên, 3 phút）**

1. Cùng một “yêu cầu bổ sung”, lúc nhét vào bản vibe và lúc thêm vào đặc tả, **khác nhau ở chỗ nào**
2. Chuyện “nó làm đúng chưa”, ở mỗi bên bạn xác nhận bằng cách nào
3. Ngày mai bị bảo làm lại đúng game đó, bạn sẽ dùng cách nào

**Ba điều cần nhớ khi ra về（2 phút）**

1. **Vibe thì nhanh. Nhưng không nhắm mà làm ra được**（thứ không nhờ vẫn mọc ra / cùng một yêu cầu vẫn ra thứ khác）
2. **Đặc tả phải ở dạng đưa được cho người khác**（what it does + **out of scope**）
3. **Bổ sung thì từng cái một, kèm điều kiện hoàn thành**

**Vibe coding không phải là cái xấu（1 phút）**

> “Vibe coding hợp với ‘nguyên mẫu đầu tiên’ và ‘đi khảo sát’. Hôm nay chỉ vài phút là ra thứ chạy được, đúng không. **Đó là thế mạnh thật.**
> Nhưng để ‘vừa giữ cho nó chạy đúng vừa cùng người khác nuôi nó lớn’ thì cần đặc tả.
> **Quyết được khi nào dùng cái nào** — đó mới là mục tiêu của hôm nay.”

**Thứ nằm ở phía trước（1 phút, 1 slide）**

Thứ hôm nay viết ra là “đặc tả cho đúng một lần này”. **Còn những giao ước muốn bắt tuân thủ mọi lúc thì đặt được vào `.cursor/rules/`.**

| Cơ chế | Có hiệu lực khi nào |
|--------|---------------------|
| **Rules** | **Luôn luôn**（phương châm, ràng buộc, khỏi phải viết lại trong từng prompt） |
| **Skills** | Chỉ khi cần（bản quy trình） |
| **Đặc tả** | Chỉ trong dự án đó |

Những thứ kiểu “commit viết bằng tiếng Việt”, “không tạo test trừ khi được yêu cầu” — tức **giao ước của team và của repo** — chính là Rules. Buổi 3 sẽ dùng tới khi làm việc nhóm.

> Chi tiết hơn: [`06-rules.md`](../fundamentals/06-rules.md)

**Giới thiệu buổi sau（1 phút）**

> “Buổi 3 thì các nhóm tự chọn đề tài và bắt đầu làm ứng dụng. Cái ‘viết đặc tả trước’ hôm nay, đem vào làm theo nhóm thì sẽ ra sao. Có thêm cả luồng tối thiểu về branch, PR và review.”

### Điểm kiểm tra（đo thực tế cho buổi sau, cả lớp, 2 phút）

Buổi 3 dùng Git và PR. **Đo ngay tại đây.** Để tới hôm đó mới phát hiện thì 40 phút cuối biến thành lớp dạy Git.

- [ ] Chạy được `git status` trong terminal
- [ ] Có tài khoản GitHub

Cho những ai thiếu một trong hai giơ tay, và **giảng viên ghi lại số người**. Từ 3 người trở lên thì đó là căn cứ để chuyển phần PR của buổi 3 thành tùy chọn.

### Khi mắc kẹt

Nếu không ai trả lời được câu nhìn lại số 1, giảng viên chỉ vào bảng ghi ở chương 4. Có sẵn con số nên dễ trả lời hơn.

### Bài tập về nhà（tùy chọn）

- Đọc [`05-prompting.md`](../fundamentals/05-prompting.md)（khuôn mẫu để nhờ cho đúng ý）
- Tự thêm một dòng vào đặc tả hôm nay và làm thêm một tính năng

---

## Phụ lục: bản đặc tả tối thiểu mẫu（để đối chiếu đáp án）

**Không được phát cho học viên ngay từ đầu.** Dùng để cứu những ai không viết nổi đặc tả ở chương 5, hoặc để giảng viên cho thấy “viết được tới mức này là đủ”.

```markdown
# Requirements — Memory match

## What it does

- Xáo 8 cặp（16 lá）rồi xếp úp xuống
- Người chơi lật 2 lá
- Hai lá cùng hình thì để ngửa luôn（ghép thành cặp）
- Hai lá khác hình thì sau 1 giây úp lại
- **Ghép được một cặp thì được lật tiếp một lượt nữa**
- **Từ lần sai thứ ba trở đi, rút thời gian chờ trước khi úp lại xuống 0,5 giây**
- **Khi chỉ còn 2 cặp thì đổi màu mặt sau của các lá bài**
- Ghép đủ mọi cặp thì hoàn thành（hiện “Chúc mừng”）

## Screen

- Xếp bài theo lưới 4×4
- Mặt sau dùng chung một thiết kế（tô màu trơn là được）
- Mặt trước là ký hiệu phân biệt được cặp（emoji hoặc số）

## Interactions

- Click vào lá bài để lật
- Mỗi lượt chỉ lật được tối đa 2 lá（lá thứ ba không phản hồi）
- Lá đã ngửa thì không bấm được

## Out of scope

- Chọn độ khó
- Giới hạn thời gian
- Điểm số, bảng xếp hạng
- Animation（không có hiệu ứng lật, chỉ đổi hiển thị）
- Thư viện ngoài, API
- Lưu trữ lâu dài（reload mà mất hết cũng được）
```

**Ba dòng in đậm**（ghép cặp thì lật tiếp / 0,5 giây / còn 2 cặp thì đổi màu mặt sau）là quân bài tẩy của buổi này. Đó là **những luật mà AI không suy ra được từ hiểu biết thông thường về trò tìm cặp**, nên bản vibe không thể có.

---

## Checklist cho giảng viên（dùng trong ngày）

### Trước hôm đó
- [ ] Đã kiểm tra xem còn ai chưa clone được từ buổi 1 không（còn thì xử lý ngay đầu buổi）
- [ ] **`.cursor/skills/requirements/` và `.cursor/skills/task-breakdown/` đã có trong repo**
- [ ] Tự mình đã chạy thử một lượt từ chương 2 tới chương 6（**bắt buộc**. AI phiên bản khác nhau thì khả năng đoán ra yêu cầu bổ sung cũng khác）
- [ ] Đã xác nhận mở được HTML bằng trình duyệt tích hợp của Cursor
- [ ] Đã chọn sẵn một model để dùng（cố định, không phải Auto）
- [ ] Thư mục `session02/` và `session02-spec/` đang trống
- [ ] **Nắm rõ ba yêu cầu bổ sung（bảng dưới）và thời điểm đưa ra từng cái**

### Danh sách yêu cầu bổ sung（chỉ giảng viên）

| Đưa lúc nào | Nội dung |
|---|---|
| Đầu chương 4 | Ghép được một cặp thì cho lật tiếp một lượt nữa |
| Đầu chương 4 | Từ lần sai thứ ba trở đi, rút thời gian chờ trước khi úp lại xuống 0,5 giây |
| Chương 5, mục ③ | Khi chỉ còn 2 cặp thì đổi màu mặt sau của các lá bài |

**Gặp phiên bản AI đoán ra được mấy cái này thì hãy thay yêu cầu khác.** Điều kiện là “chi phí hiện thực thấp” và “không nằm trong hiểu biết thông thường về trò tìm cặp”.

### Quản lý thời gian theo chương
- Chương 2 cắt ở 15 phút. Cái đà “chạy được rồi” quan trọng hơn một sản phẩm hoàn hảo
- **Không cắt** chương 3 và chương 4. Đó là phần chính của buổi
- Chương 6 mà quá 1:20 thì dừng, kể cả chưa xong
- Chương 7 dù có chuyện gì cũng giữ đủ 10 phút

### Giả định về cách chạy
- Cố định model（chương 2 ①）và mở chat mới（chương 4 ①）— bỏ qua là chương đó mất ý nghĩa. Thời gian đã tính theo hướng xác nhận xong rồi mới đi tiếp
- Yêu cầu bổ sung được đưa bằng miệng ở đầu chương 4 và ở mục ③ của chương 5
- Có ai làm bản vibe ra ngon lành thì “vibe vậy là đủ rồi” cũng là một phần bài học đúng đắn của buổi này

### Những chỗ hay kẹt
| Chỗ kẹt | Xử lý |
|---------|-------|
| Agent sinh ra cả đống tệp, rối | Chương 2 không dọn. Tới chương 6 thì cho viết vào đặc tả “gói gọn trong một tệp cũng được” |
| Không mở được trên trình duyệt | Mở bằng trình duyệt tích hợp của Cursor. Kiểm tra luôn đường dẫn tệp |
| Đưa đặc tả rồi mà vẫn mọc thêm tính năng thừa | Nhấn mạnh “Out of scope” rồi đưa lại. Bản thân chuyện này đã là một giáo cụ tốt |
| Có người thấy vibe lại trôi hơn | Cứ nói thật là đúng vậy. Quy mô nhỏ thì đúng thế. Quy mô lớn lên thì hay đảo chiều |
| Kết quả tản mát quá, không so được | Kiểm tra xem model có còn để Auto không. Chương 2 và chương 6 phải cùng một model cố định |

> **Bài nộp thì chưa chốt.** Cần thì thu bảng ghi ở chương 4（số dòng thay đổi, có hỏng không, có phán định được không）.
