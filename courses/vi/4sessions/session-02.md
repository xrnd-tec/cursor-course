# Buổi 2: Vibe coding（90 phút）

> **Mục tiêu của buổi này（4 mục）**  
> 1 Làm một game chạy được bằng vibe coding → 2 So sánh game của cả lớp ở phần trình bày lần 1 → 3 Thêm yêu cầu bổ sung và nhận ra rằng không kiểm tra được yêu cầu đã được thực hiện đúng hay chưa → 4 Trình bày chức năng đã thêm và điều mình nhận ra ở phần trình bày lần 2  
> **Cả 4 mục đều hoàn thành trong buổi học này.** Không đánh giá mức độ hoàn thiện.

> **Hôm nay chỉ thực hành một cách làm: nhờ AI “làm cho ngon nha” mà không quyết gì trước（vibe coding）.**
> Cả lớp gửi cùng 3 dòng, rồi cho nhau xem ngay thứ đã làm ra. **Cùng một yêu cầu nhưng mỗi người lại làm ra một thứ khác. Đây là đặc điểm của vibe coding.**
> Ở buổi 3, chúng ta sẽ làm một game phải quyết nhiều thứ（poker）bằng cách viết yêu cầu trước rồi mới làm（phát triển theo spec）.

---

## Toàn bộ mạch của kịch bản

1. Mục đích của buổi này（dành cho giảng viên）
2. 00-1 Cách đọc kịch bản này
3. 00-2 Chuẩn bị trong ngày
4. 00-3 Bảng thời gian
5. 0-1 Trang bìa và phần mở đầu
6. Chương 1 đến chương 8
7. Checklist cho giảng viên

---

## Mục đích của buổi này（dành cho giảng viên）

**Buổi này không được xây dựng trên tiền đề “làm bằng vibe coding thì sẽ bị lỗi”.**

Trò lật hình（memory match）là game AI biết rất rõ, nên làm bằng vibe coding vẫn hoàn thành mà không gặp vấn đề gì. Điểm số, độ khó hay giới hạn thời gian, nếu nhờ thì AI cũng thêm được mà không gặp vấn đề gì（**đã thử và xác nhận trên thực tế**）. Nếu tiến hành buổi học với tiền đề “chắc chắn sẽ bị lỗi”, game thực tế lại chạy tốt, và học viên sẽ nhận ra phần giải thích không khớp với thực tế.

Vì vậy, buổi này **không đặt vấn đề game có bị lỗi hay không**. Thay vào đó, học viên sẽ trải nghiệm 4 điều sau.

| Điều xảy ra khi làm bằng vibe coding | Chương trải nghiệm |
|---|---|
| **Cùng một yêu cầu, mỗi người làm ra một thứ khác.** Không làm lại được đúng thứ đã làm | Chương 3（trình bày lần 1） |
| **AI làm cả những thứ không được nhờ.** Học viên không nắm được game của mình có những gì | Chương 3（trình bày lần 1）・Chương 4 |
| **Không xác định được đã làm đúng hay chưa.** Không có tiêu chí để đánh giá “đã đúng chưa” | Chương 4 |
| **Không bàn giao được cho người khác.** Không thể giao cho người không biết quá trình trước đó | Chương 4 |

Đồng thời, học viên cũng trải nghiệm **ưu điểm của vibe coding**（làm được nhanh, dễ dàng cải tiến）ở chương 2 và chương 5.

Điều buổi này muốn truyền đạt là: **“Vibe coding không phải là cách làm xấu. Điều quan trọng là có thể phán đoán khi nào nên dùng cách làm nào.”** Buổi này cho học viên trải nghiệm tình huống mà vibe coding là đủ. Buổi 3 cho học viên trải nghiệm tình huống nên viết yêu cầu trước.

### Lý do trình bày 2 lần

- **Lần 1（chương 3）** diễn ra ngay sau khi làm bằng 3 dòng. Vì đây là lúc trước khi cải tiến, học viên thấy rằng mọi điểm khác nhau đều đến từ “cùng 3 dòng”.
- **Lần 2（chương 6）** diễn ra sau phần yêu cầu bổ sung và phần tự do cải tiến. Nội dung trình bày được thiết kế để không trùng với lần 1.

### Lý do cho học viên chọn yêu cầu bổ sung từ danh sách

Với vibe coding, không thể quyết trước sẽ làm ra những gì. Nếu giảng viên quyết một yêu cầu và cho cả lớp cùng thêm vào, sẽ có học viên mà game đã có sẵn yêu cầu đó từ đầu.

Vì vậy, yêu cầu bổ sung được đưa ra dưới dạng **danh sách 8 yêu cầu**, và học viên **chọn những yêu cầu game của mình chưa có** để thực hiện. Việc kiểm tra “yêu cầu nào đã có sẵn” trước khi chọn cũng chính là trải nghiệm “không nắm được game của mình có những gì”.

> **Lớp học được giả định có 4 học viên, nên ở cả 2 lần trình bày, mọi học viên đều trình bày trước cả lớp.**

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Kịch bản này được viết theo giả định: **học viên vừa xem tài liệu vừa tự thực hành, giảng viên vừa giải thích vừa dẫn dắt buổi học**. Phần phân bổ thời gian cũng dựa trên giả định đó.

Prompt được in đầy đủ trong tài liệu, vị trí trên màn hình được chỉ bằng ảnh chụp. Vì vậy, kịch bản không giả định giảng viên phải thao tác mẫu riêng. Cách tiến hành thực tế có thể điều chỉnh tùy theo lớp học.

Số ở tiêu đề được đọc là **`N-M` = bước M của chương N**（ví dụ: `2-1`）. Các phần trước chương 1 là **`00-M`**（cách đọc, chuẩn bị, bảng thời gian）, phần mở đầu là **`0-1`**. Đầu mỗi chương có **Mạch của chương**, các phần trước chương có **Mạch của phần này**（mục lục）.

Mỗi chương gồm 5 khối sau（một số phần như phần mở đầu có thể không có đủ các khối）.

| Khối | Nội dung |
|------|----------|
| **［Slide］Giải thích** | Giải thích cơ chế của Cursor. Đưa lên slide. Nguồn là `courses/vi/fundamentals/` |
| **［Slide］Học viên làm gì** | Đưa nguyên vào tài liệu phát. Prompt được in đầy đủ, nên không cần đọc to |
| **Giảng viên nói gì** | Nội dung giảng viên nói trong lúc học viên đang nhập hoặc đang chờ kết quả |
| **Điểm kiểm tra** | Tiêu chí để quyết định chờ cả lớp theo kịp hay chuyển sang phần tiếp theo |
| **Khi mắc kẹt** | Những vấn đề thường xảy ra trong chương đó và cách xử lý |

Phần giải thích được trích từ [`courses/vi/fundamentals/`](../fundamentals/). **Khi muốn sửa nội dung, hãy sửa ở phía fundamentals**（kịch bản chỉ trích một phần）.

| Chương | fundamentals được trích |
|--------|-------------------------|
| Chương 1 | [`19-plans`](../fundamentals/19-plans.md)（góc mở rộng: mức sử dụng） |
| Chương 2 | [`01-modes`](../fundamentals/01-modes.md)（model và Auto, ôn lại buổi 1） · [`16-browser-design`](../fundamentals/16-browser-design.md)（browser tích hợp） |
| Chương 4 | [`03-context`](../fundamentals/03-context.md)（dùng `@` để chỉ định đối tượng, ôn lại buổi 1） |
| Chương 5 | [`16-browser-design`](../fundamentals/16-browser-design.md)（góc mở rộng: Design Mode） |

> **Câu chữ của các yêu cầu bổ sung（8 yêu cầu）ở chương 4 được đưa lên slide.**
> Giảng viên giải thích trong vai khách hàng, nhưng **học viên làm theo câu chữ trên slide**. Giảng viên không diễn đạt lại tại chỗ.

Sau khi gửi yêu cầu cho Agent, cần 30–60 giây để có kết quả. Cả lớp sẽ cùng chờ trong khoảng thời gian này, nên mỗi chương đều có sẵn nội dung để giảng viên nói trong lúc chờ.

---

## Chuẩn bị trong ngày（kiểm tra lúc 0:00）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trong ngày

### 00-2 Danh sách chuẩn bị trong ngày

Kịch bản giả định môi trường đã được chuẩn bị xong ở buổi 1. **Trong vài phút đầu từ 0:00, chỉ cần kiểm tra.** Nếu có học viên vắng buổi 1, học viên đó cần thiết lập trước theo các bước ở chương 1 của buổi 1.

| Mục | Các bước |
|------|------|
| **Cập nhật repository** | Mở `cursor-course/` rồi chạy `git pull` |
| **Thư mục làm việc** | `session02/`（trò lật hình）. Mỗi học viên tự tạo ở chương 2 |
| **Model** | **Cứ để Auto là được.** Giống buổi 1, không cần thay đổi thiết lập |
| **Browser tích hợp** | Mở file HTML bằng cách nhấp chuột phải ở sidebar → **Open In Browser**. Nếu mở bằng browser của hệ điều hành, game có thể không chạy |
| **Trình bày** | Ở chương 3 và chương 6, **học viên cho cả lớp xem màn hình của mình**. Thử chia sẻ màn hình hoặc máy chiếu một lần lúc 0:00 |

> **Hôm nay cũng không cần Node.js.** Trò lật hình chạy được chỉ với browser.

---

## Bảng thời gian

### Mạch của phần này

1. 00-3 Lộ trình 90 phút

### 00-3 Lộ trình 90 phút

| Thời gian | Chương | Nội dung | Người thực hiện |
|------|----|------|------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Giải thích nội dung hôm nay（5 phút） | Giảng viên |
| 0:05 | Chương 2 Làm bằng vibe coding | Làm trò lật hình bằng 3 dòng yêu cầu（15 phút） | Cả lớp |
| 0:20 | Chương 3 Trình bày lần 1 | Mỗi người trình bày 1 phút, so sánh game của cả lớp（10 phút） | Cả lớp |
| 0:30 | Chương 4 Thêm yêu cầu bổ sung | Chọn từ danh sách những yêu cầu game chưa có rồi thực hiện（15 phút） | Cả lớp |
| 0:45 | Chương 5 Tự do cải tiến | Thêm chức năng mình thích（10 phút） | Cả lớp |
| 0:55 | Chương 6 Trình bày lần 2 | Mỗi người 3 phút, trình bày chức năng đã thêm và điều mình nhận ra（15 phút） | Cả lớp |
| 1:10 | Chương 7 Tổng kết | Sắp xếp lại ưu điểm và nhược điểm（10 phút） | Giảng viên |
| 1:20 | Chương 8 Câu hỏi ôn tập và buổi sau | Câu hỏi ôn tập và giới thiệu buổi sau（10 phút） | Cả lớp |

Trong 90 phút, có 75 phút là **thời gian học viên tự thực hành hoặc trình bày**.

> **Khi trễ giờ**, rút chương 5（tự do cải tiến）còn 5 phút và giảm câu hỏi ôn tập ở chương 8 còn 4 câu. **Không cắt phần trình bày（chương 3 và chương 6）**, vì kết luận của buổi học đến từ việc đặt game của cả lớp cạnh nhau để so sánh.

---

## Trang bìa và phần mở đầu — 0:00（tính trong chương 1）

> **Phần mở đầu không tách thành chương riêng.** Sau phần này, chuyển ngay sang chương 1.

### Mạch của phần này

1. 0-1 Từ trang bìa đến nội dung hôm nay

### 0-1 Từ trang bìa đến nội dung hôm nay

#### ［Slide］Trang bìa

```
Vibe coding

Khóa thực hành Cursor　Buổi 2 / 5　・　90 phút
（ngày）
```

#### ［Slide］Trước khi bắt đầu（0:00 cả lớp cùng làm）

Trước khi vào bài, cả lớp cùng làm 3 việc sau.

- [ ] Mở `cursor-course/` rồi chạy `git pull`
- [ ] Để model ở Auto（không đổi cài đặt）
- [ ] Mở file HTML bằng cách nhấp chuột phải ở thanh bên → **Open In Browser**（mở bằng trình duyệt của hệ điều hành thì có khi không chạy）

> Bạn nào vắng buổi 1 thì làm phần cài đặt trước, theo chương 1 của buổi 1.

#### ［Slide］Ôn lại buổi trước（30 giây）

**Hôm nay vẫn tiến hành theo các bước giống buổi trước.** Điều khác với buổi trước là **đưa cho AI những gì**.

```
Ask（@file + câu hỏi）
  ↓ hiểu nội dung
Agent（@file + yêu cầu + điều kiện hoàn thành）
  ↓ đọc diff
Keep hoặc Undo
```

#### ［Slide］Nội dung thực hành hôm nay

| | Nội dung | Chương |
|---|---|---|
| 1 | Làm trò lật hình bằng cách chỉ nhờ “làm cho ngon nha”, không quyết gì trước | Chương 2 |
| 2 | Cho xem game vừa làm và so sánh với nhau（trình bày lần 1） | Chương 3 |
| 3 | Chọn từ danh sách yêu cầu bổ sung những yêu cầu game chưa có, rồi thêm vào | Chương 4 |
| 4 | Tự do cải tiến game của mình | Chương 5 |
| 5 | Trình bày chức năng đã thêm và điều mình nhận ra（trình bày lần 2） | Chương 6 |

**Cách làm hôm nay được gọi là “vibe coding”.** Ở buổi 3, chúng ta sẽ học cách viết yêu cầu trước rồi mới làm（phát triển theo spec）.

#### ［Slide］Cách tiến hành buổi học

1. **Game làm chưa đẹp cũng không sao.** Hôm nay chúng ta cố ý nhờ một cách chung chung.
2. **Khi trình bày, không so sánh mức độ hoàn thiện.** Thứ đem ra so sánh là điểm khác nhau giữa các game.
3. **Khi gặp khó khăn, hãy giơ tay.** Nhờ người ngồi cạnh cho xem màn hình cũng là một cách tốt.

#### Giảng viên nói gì

Nếu có học viên vắng buổi 1, chỉ giải thích kỹ slide ôn lại buổi trước. Nếu không có ai vắng, chuyển sang phần tiếp theo sau 30 giây.

Nếu học viên hỏi “Cách nào mới đúng?”, hãy trả lời rằng **cả hai đều đúng**. Đây không phải chuyện cách nào tốt hơn, mà là chọn cách phù hợp với từng tình huống.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Học viên vắng buổi 1 và chưa cài Cursor | Cho học viên thiết lập theo các bước ở chương 1 của buổi 1. Học viên có thể làm trước mà không cần chờ chương 2 bắt đầu |

---

## Chương 1 Mục tiêu hôm nay — 0:00（5 phút）

> Chương này giải thích nội dung hôm nay và các thuật ngữ sẽ dùng. **Trong chương này, chỉ giảng viên nói.**

### Mạch của chương

1. 1-1 Truyền đạt mục tiêu hôm nay（góc mở rộng: mức sử dụng）

### 1-1 Truyền đạt mục tiêu hôm nay

#### ［Slide］Học viên làm gì

Trong chương này, học viên chỉ cần nghe.

#### ［Slide］Mục tiêu hôm nay

| | Điều học viên làm được | Chương |
|----|--------------------|------------|
| 1 | Làm một game chạy được bằng vibe coding | Chương 2 |
| 2 | So sánh game của cả lớp ở phần trình bày lần 1 | Chương 3 |
| 3 | Thêm yêu cầu bổ sung và nhận ra rằng không kiểm tra được yêu cầu đã được thực hiện đúng hay chưa | Chương 4 |
| 4 | Trình bày chức năng đã thêm và điều mình nhận ra ở phần trình bày lần 2 | Chương 6 |

#### ［Slide］Thuật ngữ

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Vibe coding** | Cách làm nhờ AI mà không quyết gì trước. Hôm nay chỉ dùng cách này |
| **Phát triển theo spec** | Cách làm viết yêu cầu trước rồi mới nhờ AI. Sẽ học ở buổi 3 |

**Thứ làm ra được gọi bằng tên game: “trò lật hình”.** Không gọi tắt là “vibe”.

#### Giảng viên nói gì

Giảng viên nói những điều sau.

- Hôm nay chúng ta làm trò lật hình bằng cách chỉ nhờ AI “làm cho ngon nha”. Cách làm này được gọi là vibe coding.
- Làm xong thì trình bày lần 1 ngay. Hãy xem khi cả lớp nhờ bằng cùng 3 dòng thì kết quả khác nhau đến mức nào.

Để ôn lại buổi trước, chỉ nhắc lại một câu về các bước Ask → Agent → diff → Keep.

#### ［Slide］Góc mở rộng: Về mức sử dụng

**Hôm nay sẽ dùng Agent nhiều lần, nên giảng viên nói trước về mức sử dụng trong 30 giây.**

| | |
|---|---|
| **Khi dùng Auto** | Tính tiền theo giá của model thực sự được dùng |
| **Gói nào cũng** | Đã bao gồm một lượng sử dụng nhất định |
| **Khi dùng hết** | Chọn trả theo mức sử dụng（trả sau）để dùng tiếp, hoặc nâng lên gói cao hơn |

Các chế độ của Auto（Cost / Balance / Intelligence）chỉ **thay đổi cách chọn model**. Chúng không giúp giảm giá.

> **Tài liệu này không ghi số tiền.** Lý do là khi giá thay đổi thì dễ quên sửa.
> Khi cần kiểm tra số tiền, hãy xem [trang bảng giá chính thức](https://cursor.com/pricing).
>
> Chi tiết hơn: [`19-plans.md`](../fundamentals/19-plans.md)

#### Điểm kiểm tra

Chương này không có điểm kiểm tra. Sau 5 phút thì chuyển sang chương tiếp theo.

---

## Chương 2 Làm bằng vibe coding — 0:05（15 phút）

> Chương này kiểm tra xem khi nhờ mà không quyết gì trước thì AI làm được đến đâu. **Khi kết thúc chương, mỗi học viên đều có trò lật hình của riêng mình.**

### Mạch của chương

1. 2-1 Nhờ AI làm trò lật hình

### 2-1 Nhờ AI làm trò lật hình

#### ［Slide］Học viên làm gì（15 phút）

> **Cứ để model ở Auto là được.** Giống buổi 1, hôm nay không cần thay đổi thiết lập.

**① Tạo thư mục làm việc（1 phút）**

Tạo một thư mục mới tên `session02/`.

**② Nhờ AI làm trò lật hình（13 phút）**

Mở chat mới rồi gửi 3 dòng bên dưới. **Chỉ gửi đúng như vậy.**

```text
Làm cho tôi game lật hình (memory match).
Bằng HTML + JS, chơi được trên browser.
Làm cho ngon nha.
```

（Màn hình: `s02-03` trạng thái đã nhập yêu cầu）

**③ Chạy thử（1 phút）**

Khi file đã được tạo, hãy mở bằng browser và kiểm tra xem có chơi được không. Nhấp **chuột phải** vào file HTML ở sidebar rồi chọn **Open In Browser**.

> **Ở đây không cần đọc kỹ diff.** Đây là file mới tạo, nên mọi thay đổi đều là các dòng được thêm vào.
> Điều cần kiểm tra ở đây chỉ là **game có chạy hay không**.

#### Giảng viên nói gì

**Nếu học viên hỏi “Nên chọn model nào?”, trả lời rằng cứ để Auto là được.** Hôm nay không phải là buổi so sánh sự khác nhau giữa các model.

**Ngay sau khi gửi ②（chờ 1–3 phút）**: thời gian chờ khá dài, nên giảng viên nói 2 điều sau.

- Hôm nay chúng ta cố ý nhờ một cách chung chung. “Làm cho ngon nha” là cách nói đã được giới thiệu ở buổi trước là “nên tránh”.
- **Khi có kết quả, hãy tìm xem có thứ gì mình không nhờ mà vẫn được thêm vào không.** Ở phần trình bày lần 1 ngay sau đây, mỗi người sẽ giới thiệu 1 thứ đã tìm thấy.

**Sau ③**: xác nhận rằng đã có ngay một thứ chạy được, và giải thích rằng làm được nhanh là thế mạnh của vibe coding.

#### Điểm kiểm tra

- [ ] Trò lật hình của mình đang chạy trên browser

**Dù có học viên chưa chạy được game, vẫn chuyển sang chương tiếp theo.** Ở phần trình bày lần 1, học viên chỉ cần cho xem đã làm được đến đâu.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không mở được bằng browser | Nhấp chuột phải ở sidebar → chọn **Open In Browser** để mở bằng browser tích hợp của Cursor. **Nếu mở file trực tiếp bằng browser của hệ điều hành, JavaScript có thể không được tải do giới hạn của browser, và game sẽ không chạy** |
| AI tạo ra nhiều file, khó theo dõi | Cứ giữ nguyên. Chương này không sắp xếp lại |
| Game không chạy | **Nhờ Agent mở browser và đọc lỗi trong console**（xem phần giải thích bên dưới）. Nếu vẫn không chạy, nhờ người ngồi cạnh cho xem màn hình |
| Không xong trong 15 phút | Dù game chưa chạy, vẫn kết thúc sau 15 phút |

**Khi game “không chạy”, có một cách nhanh hơn việc dán lỗi vào chat.**

Agent **có thể điều khiển** browser tích hợp của Cursor. Học viên có thể nhờ Agent mở trang, nhấp chuột, nhập dữ liệu hay **đọc lỗi trong console**.

```text
Mở game tôi vừa làm bằng browser,
nếu console có lỗi thì cho tôi biết nguyên nhân.
```

**Khi Agent điều khiển browser thì cần duyệt**（mặc định là “duyệt thủ công”, hỏi lại mỗi lần thao tác）. Trong buổi học, cứ giữ nguyên mặc định.

> Chi tiết hơn: [`16-browser-design.md`](../fundamentals/16-browser-design.md)

---

## Chương 3 Trình bày lần 1 — 0:20（10 phút）

> Cả lớp cho nhau xem game ngay sau khi làm bằng 3 dòng. **Vì đây là lúc trước khi cải tiến, mọi điểm khác nhau đều đến từ cùng 3 dòng.**

### Mạch của chương

1. 3-1 Mỗi người trình bày 1 phút
2. 3-2 So sánh game của cả lớp

### 3-1 Mỗi người trình bày 1 phút

#### ［Slide］Cách trình bày lần 1（mỗi người 1 phút）

| Thứ tự | Nội dung trình bày | Thời gian |
|---|---|---|
| 1 | Chạy trò lật hình của mình cho cả lớp xem | 40 giây |
| 2 | Giới thiệu 1 **thứ không nhờ mà vẫn được thêm vào** | 20 giây |

**Không so sánh mức độ hoàn thiện.** Học viên chưa chạy được game thì cho xem đã làm được đến đâu là đủ.

#### Giảng viên nói gì

Lớp có 4 học viên, mỗi người 1 phút nên tổng cộng 4 phút. **Giảng viên bấm giờ.**

Ghi những thứ học viên nêu ở mục 2（thứ không nhờ mà vẫn được thêm vào）lên bảng trắng hoặc vào chat. Nội dung này sẽ được dùng ở 3-2 và chương 7.

### 3-2 So sánh game của cả lớp

#### ［Slide］So sánh trò lật hình của cả lớp

So sánh trò lật hình của cả lớp bằng bảng sau.

| Nội dung so sánh | Người 1 | Người 2 | Người 3 | Người 4 |
|---|---|---|---|---|
| Số lá bài | | | | |
| Hình mặt trước（số / emoji / màu） | | | | |
| Có hiện điểm hay số lượt không | | | | |
| Có chọn được độ khó không | | | | |
| Giao diện（màu, bố cục） | | | | |

#### ［Slide］Kết quả khi giảng viên gửi cùng 3 dòng hai lần

**Đây là game giảng viên làm bằng cách gửi cùng 3 dòng hai lần, với cùng một thiết lập.** Hai game này cũng khác nhau.

（2 ảnh mẫu: `s02-05` / `s02-06`）

#### ［Slide］Cùng một yêu cầu, mỗi người làm ra một thứ khác

> **Từ cùng một yêu cầu, cả lớp đã làm ra những thứ khác nhau. Đây là đặc điểm của vibe coding.**

| Chuyện đã xảy ra | Điều rút ra |
|---|---|
| Mỗi người làm ra một thứ khác | Cùng một yêu cầu, **mỗi lần lại ra một thứ khác** |
| Có thứ không nhờ mà vẫn được thêm vào | **Không phân biệt được** thứ mình chỉ định và thứ AI tự quyết |

#### Giảng viên nói gì

Sau khi điền xong bảng, giảng viên giải thích những điều sau.

- Cả 4 người đều gửi cùng 3 dòng, nhưng số lá bài và hình trên lá lại khác nhau. Người quyết những thứ này là AI.
- Khi giảng viên gửi cùng 3 dòng hai lần, kết quả cũng khác nhau. Lý do không chỉ nằm ở sự khác nhau giữa các model.
- Game nào cũng chạy được. Đó là điểm mạnh của vibe coding.

#### Điểm kiểm tra

- [ ] Tất cả học viên đã trình bày lần 1
- [ ] Đã điền xong bảng so sánh

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Có học viên không cho xem được màn hình | Mở thư mục `session02/` của học viên đó trên máy của giảng viên, hoặc cho học viên giải thích bằng lời |
| Game của cả lớp khá giống nhau | Thường sẽ khác nhau ở ít nhất một trong các điểm: số lá bài, hình trên lá, có tính điểm hay không. Cho học viên xem kỹ các chi tiết. Dùng thêm 2 ảnh mẫu của giảng viên |
| Học viên nói “Chắc là do model khác nhau” | Giải thích rằng 2 ảnh mẫu của giảng viên được làm với **cùng một thiết lập** |
| Không đủ thời gian | Chỉ điền 2 dòng của bảng: số lá bài và hình trên lá |

---

## Chương 4 Thêm yêu cầu bổ sung — 0:30（15 phút）

> **Đây là chương quan trọng nhất của buổi này.** Chương này kiểm tra xem khi khách hàng đưa thêm yêu cầu, trò lật hình vừa làm sẽ ra sao.

### Mạch của chương

1. 4-1 Nhận danh sách yêu cầu bổ sung
2. 4-2 Kiểm tra những gì game đã có và chọn yêu cầu
3. 4-3 Nhờ AI thực hiện trong chat mới và ghi lại kết quả

### 4-1 Nhận danh sách yêu cầu bổ sung

#### ［Slide］Yêu cầu bổ sung từ khách hàng（8 yêu cầu）

**Giảng viên đóng vai khách hàng, nói “Có 8 yêu cầu bổ sung. Hãy thêm vào những yêu cầu game của bạn chưa có” rồi mới chiếu slide này.**

| # | Yêu cầu |
|---|---|
| A1 | Hãy hiển thị số lần lật bài（số lượt）trên màn hình |
| A2 | Hãy hiển thị thời gian cần để hoàn thành game |
| A3 | Hãy thêm nút chơi lại từ đầu |
| A4 | Hãy cho phép chọn số lá bài: 12 lá, 16 lá hoặc 20 lá |
| B1 | Khi sai 3 lần liên tiếp, hãy lật ngửa tất cả các lá trong 1 giây cho người chơi xem |
| B2 | Khi ghép đúng cặp liên tiếp, hãy nhân đôi điểm từ lần thứ 2 trở đi |
| B3 | Khi đã sai từ 5 lần trở lên, hãy rút thời gian chờ trước khi lá úp lại xuống còn 0,5 giây |
| B4 | Nếu cùng một lá đã lật 3 lần mà vẫn chưa ghép được cặp, hãy đánh dấu lá đó |

#### Giảng viên nói gì

**Câu chữ của yêu cầu được đưa lên slide. Giảng viên không diễn đạt lại tại chỗ.**

Slide không ghi sự khác nhau giữa nhóm A và nhóm B. Nhóm A là những yêu cầu chỉ cần nhìn màn hình là biết đã có hay chưa. Nhóm B là những yêu cầu mà câu chữ không ghi rõ “thế nào là đúng”. Giảng viên sẽ giải thích điều này cho học viên ở chương 7.

Ngoài ra, giảng viên cần chú ý **không nói trước những điều muốn học viên tự nhận ra trong chương này**.

> Chương này muốn học viên tự nhận ra 2 điều sau.
> - Học viên không biết rõ game của mình đã có sẵn những yêu cầu nào
> - Với các yêu cầu B, sau khi AI đã thực hiện, học viên không kiểm tra được yêu cầu đã được thực hiện đúng hay chưa. Ví dụ ở B1, yêu cầu không ghi rõ chuỗi sai → đúng cặp → sai → sai có được tính là “3 lần liên tiếp” hay không
>
> **Không nói trước những điều này.** Giảng viên sẽ giải thích ở chương 7.

### 4-2 Kiểm tra những gì game đã có và chọn yêu cầu

#### ［Slide］Học viên làm gì（4 phút）

**① Đánh dấu những yêu cầu đã có（3 phút）**

Chạy game của mình, rồi đánh dấu những yêu cầu trong 8 yêu cầu **đã có sẵn từ đầu**.

| Dấu | Ý nghĩa |
|---|---|
| ○ | Đã có |
| × | Chưa có |
| ？ | Không rõ đã có hay chưa |

**Đánh dấu ？ cũng không sao.** Số yêu cầu không rõ cũng được ghi lại.

**② Chọn 2 yêu cầu để thêm vào（1 phút）**

Chọn 2 yêu cầu trong số các yêu cầu ×. **Trong 2 yêu cầu đó, ít nhất 1 yêu cầu phải chọn từ nhóm B.**

#### Giảng viên nói gì

Đi quanh lớp để xác nhận rằng mỗi học viên đánh dấu ○ × ？ khác nhau. Nhiều học viên sẽ có sẵn các yêu cầu A từ đầu, còn các yêu cầu B thì nhiều học viên sẽ đánh dấu ？.

### 4-3 Nhờ AI thực hiện trong chat mới và ghi lại kết quả

#### ［Slide］Học viên làm gì（11 phút）

**① Mở một chat mới（1 phút）**

Không dùng chat đang mở, hãy mở **một chat mới**.

（Màn hình: `s02-07` chỗ mở chat mới）

> **Lý do**: chat đang mở vẫn còn thông tin về những gì đã làm ở chương 2. Chat mới không có thông tin đó. **Tình huống này giống với việc bàn giao công việc cho người khác.**

**② Nhờ AI thực hiện yêu cầu đã chọn（6 phút）**

Gửi 2 yêu cầu đã chọn, giữ nguyên câu chữ trên slide.

```text
@session02/ Hãy thêm 2 điều sau.
・(yêu cầu đã chọn 1)
・(yêu cầu đã chọn 2)
Đừng đổi các hành vi khác.
```

**③ Ghi lại kết quả（4 phút）**

| Nội dung ghi lại | Câu trả lời |
|---|---|
| Trong 8 yêu cầu: số yêu cầu có sẵn từ đầu（○）và số yêu cầu không rõ（？） | |
| 2 yêu cầu đã chọn | |
| Số dòng đã thay đổi（+/- trong diff） | |
| Chức năng có từ trước có bị lỗi không | |
| **Bạn có tự xác định được yêu cầu đã chọn được thực hiện đúng hay chưa** | |

Dòng cuối là câu hỏi quan trọng nhất hôm nay. Bản ghi này sẽ được dùng ở phần trình bày lần 2 trong chương 6.

#### Giảng viên nói gì

**Ở ①**: nhiều học viên làm tiếp mà không mở chat mới, nên hãy nhắc học viên. Nếu không mở chat mới, sẽ không tạo được tình huống “giao việc cho người không biết quá trình trước đó”, và học viên sẽ không trải nghiệm được nội dung của chương này.

**Ngay sau khi gửi ②**: dặn học viên khi có kết quả thì kiểm tra xem yêu cầu đã được thực hiện đúng chưa. Không giải thích cách kiểm tra.

**Sau ③**: phần giải thích những điều nhận ra trong chương này sẽ được thực hiện ở chương 7. Ở đây chỉ xác nhận rằng tất cả học viên đã ghi dòng cuối（có xác định được yêu cầu đã được thực hiện đúng hay chưa）.

**Phần lớn học viên sẽ thực hiện được yêu cầu. Như vậy cũng không sao.** Điều buổi này muốn truyền đạt không phải là “không thực hiện được”, mà là “**không xác định được đã thực hiện được hay chưa**”.

#### Điểm kiểm tra

- [ ] Đã đánh dấu ○ × ？ cho 8 yêu cầu
- [ ] Đã nhờ AI trong chat mới
- [ ] Đã điền xong bảng ghi lại kết quả

**Nếu có học viên bị lỗi ở chức năng có từ trước, hãy chia sẻ với cả lớp và dùng làm tư liệu để giải thích.** Nếu không có lỗi cũng không sao.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không có đủ 2 yêu cầu × | Nếu chỉ có 1 yêu cầu ×, chỉ thêm 1 yêu cầu đó. Nếu không có yêu cầu ×, chọn từ các yêu cầu có dấu ？ |
| Tất cả yêu cầu B đều là ○ | Có thể chọn 2 yêu cầu từ nhóm A. Ghi lại cả việc “tất cả yêu cầu B đều có sẵn từ đầu” |
| Học viên tiếp tục trong chat cũ | Cho học viên ghi lại cả việc đó. Nhận xét “làm trong chat đã biết quá trình thì dễ hơn” cũng được dùng làm bài học |
| Không biết cách đếm số dòng đã thay đổi | Số +/- hiển thị ở góc trên bên phải của diff, hoặc ở thanh thay đổi của panel Agent |
| Không kiểm tra được yêu cầu đã được thực hiện hay chưa | **Đó chính là kết quả đúng.** Cho học viên ghi lại là “không kiểm tra được” |
| Trò lật hình ở chương 2 không chạy | Cho học viên đọc danh sách, rồi chỉ suy nghĩ xem với các yêu cầu B thì “thế nào mới được coi là đúng” |

---

## Chương 5 Tự do cải tiến — 0:45（10 phút）

> Học viên thêm vào trò lật hình của mình chức năng mà mình thích. Chương này cho học viên trải nghiệm **thế mạnh của vibe coding**.

### Mạch của chương

1. 5-1 Thêm chức năng mình thích

### 5-1 Thêm chức năng mình thích

#### ［Slide］Học viên làm gì（10 phút）

**① Chọn 1 chức năng muốn thêm（1 phút）**

Chức năng nào cũng được. Có thể thêm yêu cầu chưa chọn trong danh sách ở chương 4. Nếu chưa nghĩ ra, hãy chọn từ các ví dụ sau.

| Ví dụ |
|---|
| Đổi hình trên lá（động vật, cờ, món ăn, v.v.） |
| Thêm hiệu ứng khi hoàn thành game |
| Thêm âm thanh |
| Đổi màu hoặc bố cục |

**② Nhờ AI trong chat mới（7 phút）**

```text
@session02/
Thêm (chức năng muốn thêm, nói ngắn gọn) vào.
```

**Không cần mô tả chi tiết.** Hôm nay chúng ta tiến hành theo cách không mô tả chi tiết.

**③ Chạy thử để kiểm tra（2 phút）**

Mở lại game trên browser, kiểm tra xem chức năng vừa thêm có chạy không.

#### ［Slide］Góc mở rộng: Chọn phần tử trên màn hình để sửa giao diện

**Khi muốn sửa giao diện, có một cách là chọn phần tử trên màn hình để chỉ cho AI, thay vì mô tả bằng lời.**

Mở game của mình trong browser tích hợp, rồi dùng nút trên màn hình.

| Màn hình | Cách làm |
|------|------|
| IDE view（màn hình của lớp） | Bấm nút **Select Element** của browser tích hợp, rồi nhấp vào phần tử muốn sửa để chọn. Sau đó, nói nội dung muốn sửa trong chat |
| Agents Window | Bấm nút **Design Mode** của browser. **Design Mode chỉ có trong browser của Agents Window** |

> **Đây là phần mở rộng, không thử cũng được.**
>
> Chi tiết hơn: [`16-browser-design.md`](../fundamentals/16-browser-design.md)

#### Giảng viên nói gì

Giải thích rằng nghĩ ra gì thử được ngay là thế mạnh của vibe coding.

Đi quanh lớp để xác nhận **mỗi học viên đã thêm chức năng khác nhau**. Điều này sẽ được dùng ở phần trình bày trong chương 6.

#### Điểm kiểm tra

- [ ] Đã thêm ít nhất 1 chức năng mình thích

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Chưa quyết được sẽ thêm gì | Cho học viên chọn 1 mục từ bảng ví dụ |
| Thêm chức năng xong thì game bị lỗi | Dùng Undo để quay lại. **Việc game bị lỗi cũng là tư liệu để kể khi trình bày** |
| Yêu cầu đã thêm ở chương 4 bị mất | Học viên có thể kể lại chuyện này khi trình bày. **Đây là ví dụ về điều xảy ra khi giao việc cho người không biết quá trình trước đó** |

---

## Chương 6 Trình bày lần 2 — 0:55（15 phút）

> Cả lớp cho nhau xem game sau phần yêu cầu bổ sung và phần tự do cải tiến. **Khác với lần 1, ở đây học viên trình bày “đã thêm gì và nhận ra điều gì”.**

### Mạch của chương

1. 6-1 Mỗi người trình bày 3 phút

### 6-1 Mỗi người trình bày 3 phút

#### ［Slide］Cách trình bày lần 2（mỗi người 3 phút）

| Thứ tự | Nội dung trình bày | Thời gian |
|---|---|---|
| 1 | Chạy trò lật hình hiện tại cho cả lớp xem | 1 phút |
| 2 | Yêu cầu đã chọn ở chương 4, và **có kiểm tra được yêu cầu đã được thực hiện đúng chưa** | 1 phút |
| 3 | Chức năng đã thêm ở chương 5 | 1 phút |

**Không so sánh mức độ hoàn thiện.** Hãy kể lại cả những lần game bị lỗi hay những gì không kiểm tra được.

#### Giảng viên nói gì

Lớp có 4 học viên, mỗi người 3 phút nên tổng cộng 12 phút. **Giảng viên bấm giờ.** Trong 3 phút còn lại, giảng viên xác nhận những điều sau.

- Nếu có học viên chọn cùng một yêu cầu（nhất là yêu cầu B）, game của các học viên đó có chạy giống nhau không
- Có bao nhiêu học viên nói “không kiểm tra được”

Nếu cùng một yêu cầu mà game của mỗi người chạy khác nhau, đó là ví dụ cho thấy chỉ với câu chữ của yêu cầu thì không xác định được một “cách chạy đúng” duy nhất.

#### Điểm kiểm tra

- [ ] Tất cả học viên đã trình bày lần 2

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Có học viên không cho xem được màn hình | Cho học viên đọc to bản ghi ở chương 4 |
| Không đủ thời gian | Rút xuống mỗi người 2 phút và rút ngắn mục 3（chức năng đã thêm）. **Không cắt mục 2** |

---

## Chương 7 Tổng kết — 1:10（10 phút）

> Chương này sắp xếp lại bằng lời những gì học viên đã trải nghiệm. **Trong buổi này, giảng viên chỉ giảng giải tổng kết ở chương này.**

### Mạch của chương

1. 7-1 Những gì đã xảy ra khi làm bằng vibe coding

### 7-1 Những gì đã xảy ra khi làm bằng vibe coding

#### ［Slide］Những gì bạn quyết và những gì AI quyết

| | Nội dung |
|---|---|
| **Thứ bạn đưa cho AI** | **3 dòng yêu cầu**（tên game, HTML + JS, “làm cho ngon nha”） |
| **Thứ bạn đã quyết** | Chỉ có 2 điều: đây là trò lật hình, và game chạy trên browser |
| **Thứ nhận lại** | Một game chơi được（xong trong vài phút） |
| **Thứ AI đã quyết** | Số lá bài, hình trên lá, cách xếp, màu, có tính điểm hay không, độ khó, thời gian chờ trước khi lá úp lại, v.v. |

**Những thứ AI quyết nhiều hơn hẳn những thứ bạn quyết.**

#### ［Slide］Ưu điểm ① của vibe coding: Làm được nhanh

Chỉ với 3 dòng yêu cầu, sau vài phút đã có game chạy được（chương 2）. Game của cả lớp đều chạy được.

Không cần tự viết code, vẫn có ngay thứ chơi được.

#### ［Slide］Ưu điểm ② của vibe coding: Nghĩ ra gì thử được ngay

Ở chương 5, chỉ cần nhờ một câu là chức năng muốn thêm đã vào game.

Không cần quyết chi tiết, vẫn có thể vừa thử vừa làm tiếp.

#### ［Slide］Nhược điểm ① của vibe coding: Không kiểm tra được đã làm đúng hay chưa

Vì nhờ mà chưa quyết “thế nào là đúng”, nên không có tiêu chí để kiểm tra.

Ví dụ ở B1, yêu cầu không ghi rõ những điều sau.

- Chuỗi sai → đúng cặp → sai → sai có được tính là “3 lần liên tiếp” hay không
- Ở lần sai thứ 4, các lá có được lật ngửa lại một lần nữa không, hay bắt đầu đếm lại từ đầu
- Trong 1 giây các lá đang ngửa, người chơi có nhấp vào lá được không

Những điều không được ghi rõ thì AI tự quyết rồi làm. Khi chạy game, dù có điều gì xảy ra, cũng không có tiêu chí để so sánh xem điều đó có đúng hay không. Với các yêu cầu A, chỉ cần nhìn màn hình là biết đã có hay chưa, nên không xảy ra vấn đề này.

#### ［Slide］Nhược điểm ② của vibe coding: Không bàn giao được cho người khác

Những gì đã quyết không được ghi lại, nên người nhận việc sau đó chỉ có thể đoán từ code.

- AI trong chat mới không biết học viên định làm gì. AI đọc code, đoán rồi mới sửa.
- Ví dụ, 16 lá bài là do học viên quyết hay do AI quyết, điều này không được ghi ở đâu cả.
- Lần này, người nhận bàn giao là AI. Khi bàn giao cho người khác, hay cho chính mình vào một ngày sau, chuyện tương tự cũng xảy ra.

#### ［Slide］Chọn giữa vibe coding và phát triển theo spec

| Trường hợp | Cách làm phù hợp |
|---|---|
| Khi làm thứ nhỏ, chỉ dùng một lần, hoặc chỉ mình dùng | **Vibe coding**（cỡ trò lật hình） |
| Khi phải quyết nhiều thứ, làm cùng người khác, hoặc sau này còn sửa | **Phát triển theo spec**（học ở buổi 3） |

**Chọn cách nào không dựa vào độ lớn của sản phẩm, mà dựa vào số thứ phải quyết.** Lý do là càng nhiều thứ phải quyết, phần giao cho AI tự quyết cũng càng nhiều.

#### Giảng viên nói gì

Giảng viên nói những điều sau.

- Ưu điểm ①② và nhược điểm ①② đều là sự thật. Vibe coding không phải là cách làm xấu. Khi làm nhanh một thứ nhỏ thì ưu điểm có ích, còn khi làm thứ phải quyết nhiều thì nhược điểm sẽ thành vấn đề.
- Khi giải thích nhược điểm ①, nhắc lại việc có học viên đánh dấu ？ ở 4-2. Dù là game do chính mình làm, học viên vẫn không biết rõ game có những gì.
- “Điều kiện hoàn thành” đã học ở buổi 1 thì hôm nay cố ý không viết. Các yêu cầu B không kiểm tra được là vì chưa viết ra “thế nào là đúng”.
- Ở buổi 3, chúng ta sẽ làm một game phải quyết nhiều hơn hẳn trò lật hình（poker）, bằng cách viết yêu cầu và điều kiện hoàn thành trước rồi mới làm.

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Phần giải thích bị kéo dài | Với ưu điểm ①②, chỉ đọc tiêu đề, dành thời gian để giải thích nhược điểm ①② |
| Học viên nói “Làm bằng vibe coding cũng không gặp khó khăn gì” | Không phủ nhận. Giải thích rằng với quy mô cỡ trò lật hình thì đúng là như vậy, và ở buổi 3 chúng ta sẽ thử với một game phải quyết nhiều thứ hơn |

---

## Chương 8 Câu hỏi ôn tập và buổi sau — 1:20（10 phút）

> Học viên giải các câu hỏi để kiểm tra lại nội dung buổi 1 và buổi 2. Sau đó, giảng viên giới thiệu nội dung buổi sau.

### Mạch của chương

1. 8-1 Câu hỏi ôn tập
2. 8-2 Buổi sau

### 8-1 Câu hỏi ôn tập

#### ［Slide］Học viên làm gì（8 phút）

Giảng viên đưa ra từng câu. **Học viên viết câu trả lời ra giấy hoặc vào chat trước**, rồi giảng viên mới chữa.

| # | Câu hỏi | Đáp án |
|---|---|---|
| 1 | Nút để giữ và nút để hủy thay đổi file mà Agent đã sửa là gì? | Keep / Undo |
| 2 | Muốn đưa một file cụ thể cho Agent thì gõ gì vào ô nhập? | `@`（tên file） |
| 3 | Chỉ muốn hỏi（không muốn sửa file）thì dùng Mode nào? | Ask |
| 4 | Cách nhờ “làm cho ngon nha” mà không quyết gì trước gọi là gì? | Vibe coding |
| 5 | Ở chương 4, vì sao không kiểm tra được yêu cầu B đã được thực hiện đúng chưa? | Vì chưa quyết “thế nào là đúng” |
| 6 | Vì sao cả lớp gửi cùng 3 dòng mà lại ra những thứ khác nhau? | Vì AI đã quyết những thứ mình không quyết |

#### Giảng viên nói gì

Chữa từng câu một. **Không trách học viên trả lời sai.** Với câu 5 và câu 6, dù diễn đạt chưa chính xác nhưng đúng ý thì vẫn tính là đúng.

### 8-2 Buổi sau

#### ［Slide］Buổi sau（buổi 3）

Buổi sau chúng ta sẽ làm **poker**. Poker là game phải quyết nhiều thứ hơn hẳn trò lật hình. Nếu nhờ “làm cho ngon nha” như hôm nay thì sẽ không ra đúng poker mình muốn. Vì vậy, **buổi sau chúng ta sẽ viết yêu cầu trước rồi mới làm.**

#### ［Slide］Việc cần làm trước buổi sau（không bắt buộc）

- Chạy `git pull` trong `cursor-course/`（sẽ có thêm Skill dùng ở buổi 3）
- Đọc trước [`05-prompting.md`](../fundamentals/05-prompting.md)（cách nhờ AI hiệu quả）

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Trễ giờ | Giảm câu hỏi ôn tập còn 4 câu（1, 2, 4, 5）. **Không cắt phần giới thiệu buổi sau** |

---

## Checklist cho giảng viên（dùng trong ngày）

#### Trước buổi học

- [ ] Đã xác nhận không có học viên nào chưa clone được repository ở buổi 1（nếu có thì xử lý ngay đầu buổi）
- [ ] Đã tự làm thử một lượt từ chương 2 đến chương 5
- [ ] Đã kiểm tra trong danh sách yêu cầu bổ sung（8 yêu cầu）những yêu cầu mà AI thường làm sẵn từ đầu（xem mục “Yêu cầu bổ sung” bên dưới）
- [ ] **Đã chụp 2 ảnh mẫu（`s02-05` / `s02-06`）bằng cách gửi 2 lần với cùng một thiết lập**（dùng ở chương 3）
- [ ] Đã xác nhận mở được file HTML bằng browser tích hợp của Cursor
- [ ] Đã xác nhận có thể cho cả lớp xem màn hình của học viên bằng chia sẻ màn hình hoặc máy chiếu（chương 3, chương 6）

#### Cách chụp 2 ảnh mẫu

**Học viên không cố định model**（cứ để Auto）. Vì vậy, để cho thấy “cùng một yêu cầu vẫn ra những thứ khác nhau”, giảng viên dùng **2 ảnh mẫu do giảng viên chụp**（`s02-05` / `s02-06`）.

| | |
|---|---|
| **Gửi 2 lần với cùng một thiết lập** | Không gửi liên tiếp trong cùng một chat, mà **mở chat mới rồi gửi, làm 2 lần**. Cả 2 lần dùng cùng một thiết lập |
| **Gửi cùng 3 dòng** | Gửi nguyên 3 dòng trong kịch bản. Không diễn đạt lại |
| **Chọn 2 game thấy rõ điểm khác nhau** | Chọn 2 game khác nhau rõ đến mức nhìn là thấy ngay ở ít nhất một điểm: số lá bài, hình trên lá, có tính điểm hay không |

#### Yêu cầu bổ sung（câu chữ được đưa lên slide）

| Nhóm | Yêu cầu | Lý do đưa vào |
|---|---|---|
| A | A1–A4 | Là những yêu cầu kiểm tra được bằng mắt. Thường đã có sẵn từ đầu, nên là tư liệu cho việc “kiểm tra xem game đã có hay chưa” |
| B | B1–B4 | Là những yêu cầu có điều kiện không rõ ràng. Dù AI đã thực hiện, cũng không có tiêu chí để đánh giá đúng hay sai |

**Nếu AI thường làm sẵn các yêu cầu B từ đầu, hãy thay các yêu cầu B.** Yêu cầu thay thế cần thỏa 3 điều kiện: “dễ thực hiện”, “không suy ra được từ luật chơi thông thường của trò lật hình”, và “câu chữ không xác định được một cách duy nhất thế nào là đúng”.

#### Quản lý thời gian

- Chương 2 kết thúc lúc 0:20. Ưu tiên chuyển sang phần tiếp theo khi game đã chạy, thay vì làm cho hoàn hảo
- Chương 5 được rút xuống 5 phút khi trễ giờ
- **Không cắt chương 3 và chương 6（trình bày）.** Đây là các chương đưa ra kết luận của buổi học
- Câu hỏi ôn tập ở chương 8 được giảm còn 4 câu khi trễ giờ
