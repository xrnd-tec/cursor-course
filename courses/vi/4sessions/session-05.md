# Buổi 5: Hoàn thiện và trình bày（90 phút）

> **Mục tiêu của buổi này（4 mục）**  
> 01 Hoàn thiện các task còn lại bằng PR → 02 Thao tác trình bày chạy được **trên branch main** → 03 Cả nhóm trình bày trong 5 phút → 04 Nói thành một câu điều đã thay đổi qua cả khóa học  
> **Hoàn thành từ 02 đến 04 là đạt mục tiêu.** Mục 01 chỉ làm trong phạm vi không ảnh hưởng đến mục 02（không cần hoàn thành tất cả task）.

> **Hôm nay là buổi trình bày.** Nửa đầu buổi dùng để hoàn thiện, **dừng merge lúc 1:00**, sau đó cả nhóm trình bày.
> **Không thêm chức năng mới.** Quy ước quan trọng nhất hôm nay là không làm hỏng những gì đang chạy.

---

## Toàn bộ mạch của kịch bản

1. Mục đích của buổi này（dành cho giảng viên）
2. 00-1 Cách đọc kịch bản này
3. 00-2 Chuẩn bị trong ngày
4. 00-3 Bảng thời gian
5. 0-1 Trang bìa và phần mở đầu
6. Chương 1 đến chương 5
7. Checklist cho giảng viên

---

## Mục đích của buổi này（dành cho giảng viên）

**Buổi này không đánh giá bằng “mức độ hoàn thiện”.** Điều được đánh giá là nhóm có cho xem được **thứ đã quyết định（thao tác trình bày）, ở nơi đã quyết định（main）, vào thời điểm đã quyết định** hay không.

Buổi này tiếp nối buổi 3 và buổi 4（vibe coding ở buổi 2 là điểm xuất phát để so sánh）.

| Buổi | Thứ đã quyết định | Tiêu chí kiểm tra |
|---|---|---|
| Buổi 3 | Yêu cầu, task | **Điều kiện hoàn thành**（tự mình kiểm tra trước khi Keep） |
| Buổi 4 | Yêu cầu và phân công của nhóm | **Điều kiện hoàn thành**（người khác kiểm tra trước khi Approve） |
| Buổi 5 | **Thao tác trình bày** | **Có chạy trên main hay không**（trước cả lớp） |

**Thao tác trình bày là điều kiện hoàn thành của toàn bộ ứng dụng.** Thao tác này đã được quyết định ở chương 2 của buổi 4 và đã được ghi vào `README.md`.

### Lý do trình bày “từ main”

Thứ chỉ chạy trên máy của một người thì chưa phải là thành quả của nhóm. **Chỉ những gì đã được merge và có trong main mới là của nhóm.** Ở buổi 4, nhóm đã thống nhất “chia sẻ thay đổi bằng PR”, nên buổi này kết thúc bằng việc **trình bày từ main**.

Từ 1:00 đến 1:05 là thời gian **chuẩn bị trình bày**. Trong thời gian này, nhóm dừng merge PR mới, cập nhật main trên máy dùng để trình bày, và làm thử thao tác trình bày 1 lần.

### Nội dung tổng kết ở phần nhìn lại

Ở phần nhìn lại toàn khóa học, giảng viên nối các cách làm của từng buổi lại với nhau. Điều học viên cần mang về **không phải là “đã nhớ được thao tác của Cursor”, mà là “thứ mình đưa cho người khác đã thay đổi”**.

| Buổi | Thứ đã đưa cho AI（hoặc người khác） |
|---|---|
| Buổi 1 | `@file` và câu nhờ |
| Buổi 2 | Câu nhờ 3 dòng（“làm cho ngon nha”） |
| Buổi 3 | Yêu cầu, task, rule |
| Buổi 4 | PR（thay đổi và tiêu chí để kiểm tra thay đổi đó） |
| Buổi 5 | Ứng dụng chạy được trên main |

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Cách trình bày giống buổi 3 và buổi 4（`N-M` = bước M của chương N; mỗi chương gồm 5 khối “Giải thích / Học viên làm gì / Giảng viên nói gì / Điểm kiểm tra / Khi mắc kẹt”）.

| Chương | fundamentals được trích |
|--------|-------------------------|
| Chương 2 | [`20-git`](../fundamentals/20-git.md)（cập nhật main, conflict） · [`16-browser-design`](../fundamentals/16-browser-design.md)（tham khảo thêm: Design Mode） |
| Chương 3 | [`20-git`](../fundamentals/20-git.md) |

**Hôm nay không dạy chức năng mới của Cursor.** Đây là buổi sử dụng hết các cách làm đã học từ buổi 1 đến buổi 4.

---

## Chuẩn bị trong ngày（kiểm tra lúc 0:00）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trong ngày

### 00-2 Danh sách chuẩn bị trong ngày

| Mục | Các bước |
|------|------|
| **Repository của nhóm** | Dùng tiếp repository của buổi trước. **Mọi người mở repository bằng Cursor và cập nhật `main` lên bản mới nhất** |
| **Phân công nói** | Ở chương 3, nhóm quyết định ai trong 4 người sẽ nói phần nào |
| **Chia sẻ màn hình** | Kiểm tra xem có chiếu được màn hình máy của QA không. **Thử trước với 1 nhóm lúc 0:00** |
| **Đồng hồ bấm giờ** | Dùng để tính 5 phút trình bày. Đặt ở vị trí **cả lớp đều nhìn thấy** |
| **Nơi ghi phần nhìn lại** | Giấy / chat / tài liệu dùng chung. Ở chương 5, học viên trả lời 3 câu hỏi |

> **Với nhóm đã merge PR trong bài tập về nhà, lúc 0:00 main đã có thay đổi mới.** Cho mọi người chuyển sang `main` → nhấn **Sync Changes** rồi mới bắt đầu.

---

## Bảng thời gian

### Mạch của phần này

1. 00-3 Lộ trình 90 phút

### 00-3 Lộ trình 90 phút

| Thời gian | Chương | Nội dung | Người thực hiện |
|------|----|------|------|
| 0:00 | Chương 1 Mục tiêu hôm nay | Chia sẻ hạn chót và cách trình bày（5 phút） | Giảng viên |
| 0:05 | Chương 2 Hoàn thiện | Đưa các task còn lại vào bằng PR và sửa lỗi（55 phút） | Nhóm |
| 1:00 | Chương 3 Chuẩn bị trình bày | Dừng merge, làm thử thao tác trình bày trên máy dùng để trình bày（5 phút） | Nhóm |
| 1:05 | Chương 4 Trình bày | Nhóm trình bày 5 phút + hỏi đáp 5 phút（10 phút） | Nhóm |
| 1:15 | Chương 5 Nhìn lại | Cá nhân → cả lớp → toàn khóa học（15 phút） | Cả lớp |

**Vì học viên là 4 người trong 1 nhóm, phần trình bày là 10 phút（trình bày 5 phút + hỏi đáp 5 phút）.** Nhờ đó, thời gian hoàn thiện được 55 phút.

> Nếu có nhiều nhóm, hãy mở rộng thời gian trình bày thành “số nhóm × 4 phút” và rút ngắn chương 2 tương ứng（với 8 nhóm thì chương 2 còn 35 phút）.

> **Khi trễ giờ**: rút ngắn chương 2. **Không rút ngắn chương 3（chuẩn bị trình bày）**, vì nếu bỏ qua chương này, trong lúc trình bày sẽ xảy ra tình huống “trên máy mình thì chạy được”. Chương 5 chỉ cần giữ lại 2 phần là nhìn lại cá nhân và tổng kết toàn khóa học.

---

## Trang bìa và phần mở đầu — 0:00（nằm trong chương 1）

### Mạch của phần này

1. 0-1 Từ trang bìa đến cách tiến hành hôm nay

### 0-1 Từ trang bìa đến cách tiến hành hôm nay

#### ［Slide］Trang bìa

```
Hoàn thiện và trình bày

Khóa thực hành Cursor　Buổi 5 / 5　·　90 phút
（ngày）
```

#### ［Slide］Trước khi bắt đầu（0:00 cả lớp cùng làm）

Trước khi vào bài, cả lớp cùng làm 2 việc sau.

- [ ] Mở repository của nhóm bằng Cursor
- [ ] Chuyển sang `main` rồi bấm **Sync Changes** để cập nhật mới nhất

> Nhóm nào đã có PR được merge sau buổi trước thì `main` đã có thay đổi mới. Hãy cập nhật rồi mới bắt đầu.

#### ［Slide］Ôn lại buổi trước（30 giây）

```
/start-task（trở thành người phụ trách Issue, branch được tạo từ main mới nhất）
  ↓
Gửi phần “làm gì” của task（điều kiện hoàn thành và “không thay đổi phần khác” đã có trong rule）
  ↓
Đọc diff → kiểm tra điều kiện hoàn thành → Keep → commit → PR（trong mô tả ghi Closes #số）
  ↓
Người khác kiểm tra trên màn hình rồi Approve → merge（Issue tự đóng）
```

#### ［Slide］Cách tiến hành hôm nay（3 điều）

1. **Không thêm chức năng mới.** Chỉ sửa những gì đang cản trở thao tác trình bày
2. **Dừng merge lúc 1:00.** Sau thời điểm đó, không thay đổi main nữa
3. **Vẫn trình bày dù ứng dụng không chạy.** Trình bày “nhóm đã định làm gì” và “gặp khó khăn ở đâu” cũng là một bài trình bày đầy đủ

#### ［Slide］Tham khảo thêm: Ôn lại thuật ngữ buổi 4

**Đây là các thuật ngữ được dùng lần đầu ở buổi 4.** Hôm nay vẫn tiếp tục dùng các thuật ngữ này.

| Thuật ngữ | Nghĩa |
|---|---|
| **Branch / main** | Nơi thực hiện thay đổi tách riêng khỏi main / branch gốc chỉ chứa những gì nhóm đã kiểm tra |
| **Commit / PR / merge** | Ghi lại thay đổi / lời đề nghị kiểm tra xem có đưa vào main được chưa / đưa thay đổi của PR vào main |
| **Issue / người phụ trách（Assignee）** | “Việc cần làm” đã đăng ký trên GitHub / người làm Issue đó |
| **`/start-task`** | Skill giúp mình trở thành người phụ trách một Issue còn trống và tạo branch từ main mới nhất |
| **`Closes #số`** | Nếu ghi vào mô tả PR, khi PR được merge thì Issue đó sẽ tự đóng |
| **Sync Changes** | Lấy thay đổi mới trên GitHub về máy mình, nếu có commit của mình thì gửi lên |
| **Conflict** | Trạng thái 2 người sửa cùng một chỗ trong cùng một file nên không tự gộp được |

> Nguồn chính của phần giải thích thuật ngữ: [phần thuật ngữ trong `20-git.md`](../fundamentals/20-git.md)

#### Giảng viên nói gì

**Lúc 0:00, cho mọi người cập nhật main lên bản mới nhất rồi mới bắt đầu.**

> “Trước hết, mọi người hãy chuyển sang `main` và nhấn Sync Changes. Nếu có bạn đã tạo PR trong bài tập về nhà, thay đổi đó sẽ được cập nhật về máy.”

Hãy **nói câu “vẫn trình bày dù ứng dụng không chạy” ngay từ đầu**. Nếu không nói trước, nhóm có ứng dụng chưa chạy được sẽ vội vàng và bắt đầu thêm chức năng mới ở nửa đầu buổi.

---

## Chương 1 Mục tiêu hôm nay — 0:00（5 phút）

> Chia sẻ trước hạn chót và cách trình bày. **Trong chương này, chỉ có giảng viên nói.**

### Mạch của chương

1. 1-1 Mục tiêu, hạn chót và cách trình bày hôm nay

### 1-1 Mục tiêu, hạn chót và cách trình bày hôm nay

#### ［Slide］Mục tiêu hôm nay

| Mục | Những việc sẽ làm được | Thực hiện ở đâu |
|----|--------------------|------------|
| 01 | Hoàn thiện các task còn lại bằng PR | Chương 2 |
| 02 | Thao tác trình bày chạy được **trên branch main** | Chương 3 |
| 03 | Cả nhóm trình bày trong 5 phút | Chương 4 |
| 04 | Nói thành một câu điều đã thay đổi qua cả khóa học | Chương 5 |

#### ［Slide］Hạn chót

```
0:05 ─────────── Hoàn thiện ─────────── 1:00 ── Chuẩn bị trình bày ── 1:05 ── Trình bày
                                         ↑
                                  Dừng merge ở đây
```

**Những gì được merge sau 1:00 sẽ không được dùng để trình bày.**

#### ［Slide］Cách trình bày（5 phút）

| Thứ tự | Nội dung | Thời gian dự kiến |
|---|---|---|
| 1 | “Nhóm đã làm ○○”（khách hàng và thao tác trình bày） | 30 giây |
| 2 | Thực hiện trực tiếp **thao tác trình bày** | 1 phút 30 giây |
| 3 | Giới thiệu 1 mục **đã đưa vào “không làm gì”**, và việc đưa vào đó có đúng không | 1 phút |
| 4 | Những điều làm tốt với Cursor và khi làm việc nhóm | 1 phút |
| 5 | Những khó khăn đã gặp | 1 phút |

**Không làm slide.** Nhóm vừa chiếu màn hình vừa nói. **4 người chia nhau trình bày**（mỗi người ít nhất 1 mục）.

#### Giảng viên nói gì

> “Mục tiêu hôm nay là cho xem ‘thao tác trình bày’ đã quyết định ở buổi 4 **trên branch main**.
> Đó chính là điều kiện hoàn thành của toàn bộ ứng dụng.”

Chỉ vào mục 3（không làm gì）và nói thêm một câu.

> “Các nhóm nhất định phải nói về 1 mục trong ‘không làm gì’. **Quyết định không làm gì** cũng quan trọng như quyết định làm gì.”

#### Điểm kiểm tra

- [ ] Mọi người đã cập nhật `main` lên bản mới nhất
- [ ] Đã thông báo rằng việc phân công nói sẽ được quyết định ở chương 3

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Học viên vắng buổi trước nên chưa có repository trên máy | Hỏi URL của repository từ một thành viên trong nhóm rồi dùng `Git: Clone`. Nếu chưa được mời vào repository, hôm nay học viên đó sẽ **theo dõi màn hình của nhóm** |
| Khi Sync thì hiện màn hình conflict | Có thể học viên đã làm trực tiếp trên `main`. Giảng viên hỗ trợ trực tiếp（xem phần “Khi mắc kẹt” của chương 2） |

---

## Chương 2 Hoàn thiện — 0:05（55 phút）

> Đưa các task còn lại vào theo cùng các bước như buổi 4. **Không thêm chức năng mới.**

### Mạch của chương

1. 2-1 Thứ tự hoàn thiện（giải thích）
2. 2-2 Đưa các task còn lại vào và kiểm tra thao tác trình bày

### 2-1 Thứ tự hoàn thiện（giải thích）

#### ［Slide］Giải thích: Thứ tự bắt tay vào việc

**Làm lần lượt từ trên xuống.** Khi mục phía trên chưa xong, không làm mục phía dưới.

| Thứ tự | Việc cần làm | Người thực hiện |
|---|---|---|
| 1 | Đưa **các task cần cho thao tác trình bày** vào bằng PR | Người phụ trách |
| 2 | Sửa **lỗi đang cản trở** thao tác trình bày | Người phát hiện |
| 3 | Kiểm tra phần “Cách chạy” trong `README.md` có đúng không | QA |
| 4 | Các task còn lại（không cần cho thao tác trình bày） | Người phụ trách |

**Nếu mục 4 chưa xong trước 1:00 thì bỏ.** Có thể để Issue đó ở trạng thái mở. **Issue còn mở lúc 1:00 là task lần này không làm.**

#### ［Slide］Giải thích: Ranh giới của “không thêm”

| Được thêm | Không thêm |
|---|---|
| Task đã có Issue | Chức năng không có trong Issue |
| Sửa nguyên nhân làm thao tác trình bày không chạy | Chăm chút giao diện（không liên quan đến thao tác trình bày） |
| Sửa lỗi hiển thị làm không nhìn thấy thao tác trình bày | Những cải tiến “tiện thể làm luôn” |

**Nếu phân vân, hãy quyết định dựa trên việc đó “có liên quan đến thao tác trình bày hay không”.**

### 2-2 Đưa các task còn lại vào và kiểm tra thao tác trình bày

#### ［Slide］Học viên làm gì（55 phút）

**① Mọi người: đưa task mình phụ trách vào bằng PR**

Các bước giống buổi 4.

```
1  Chọn Issue bằng /start-task（trở thành người phụ trách, branch được tạo từ main mới nhất）
   （Nếu đã là người phụ trách từ buổi trước, hãy chuyển sang branch của mình bằng tên branch ở góc dưới bên trái）
2  Trong chat mới, chỉ gửi phần “làm gì” của task
3  Đọc diff → kiểm tra điều kiện hoàn thành → Keep
4  ＋ → ✨ → Commit → Publish Branch（từ lần thứ 2 là Sync Changes）
5  Tạo PR. Trong mô tả, ghi Closes #số
6  Một thành viên khác kiểm tra trên màn hình rồi Approve → merge（Issue tự đóng）
```

**Khi xong task của mình, hãy nhận Issue còn trống bằng `/start-task`.** Nếu không còn Issue trống, hãy đọc PR của người khác.

**② QA: mỗi khi có PR được merge, làm thử thao tác trình bày**

Khi có PR được merge, chuyển sang `main` → Sync Changes → mở trên trình duyệt và thử **thao tác trình bày**.

**Nếu ứng dụng bị lỗi, hãy báo ngay cho nhóm.** Sửa khi còn biết PR nào gây lỗi là cách nhanh nhất.

**③ Khi thao tác trình bày đã chạy: quyết định các bước trình bày**

QA chuẩn bị để **nói được bằng lời** “mở cái gì → bấm vào đâu → điều gì xảy ra”.

#### ［Slide］Tham khảo thêm: Thuật ngữ khi huỷ thay đổi（Revert）

| Thuật ngữ | Nghĩa |
|---|---|
| **Revert** | Huỷ thay đổi của một PR đã merge. Khi nhấn **Revert** ở cuối màn hình PR, **một PR mới để đưa về trạng thái cũ** sẽ được tạo ra |
| **PR của Revert** | PR được tạo bởi Revert. **Khi merge PR này, main mới trở về trạng thái cũ.** Chỉ nhấn nút thì main vẫn chưa trở về trạng thái cũ |

**Revert là cách cuối cùng khi hết thời gian mà vẫn chưa sửa được.** Trước hết, người phụ trách PR gây lỗi sẽ sửa trên một branch mới.

> Nguồn chính của phần giải thích thuật ngữ: [phần thuật ngữ trong `20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Tham khảo thêm: Sửa giao diện một chút（Design Mode）

**Chỉ dùng khi thao tác trình bày khó nhìn（nút quá nhỏ, chữ bị chồng lên nhau）.**

Khi đang mở trang bằng trình duyệt tích hợp, nhấn `Ctrl+Shift+D`（Mac là `Cmd+Shift+D`）→ giữ `Shift` và kéo chuột để chọn chỗ muốn sửa → nhấn `Ctrl+L`（Mac là `Cmd+L`）để đưa vào chat.

**Sửa bằng cách này cũng phải tạo branch và đưa vào bằng PR.** Không có ngoại lệ.

> Chi tiết hơn: [`16-browser-design.md`](../fundamentals/16-browser-design.md)

#### Giảng viên nói gì

**Lúc 0:05, hãy đến nhóm có 0 Issue đã đóng trước tiên**（điều này đã được hẹn ở chương 7 của buổi trước）.

Những điểm cần xem khi đi quanh lớp:

| Tình huống | Cách xử lý |
|------|------|
| Thao tác trình bày vẫn chưa chạy | **Cho nhóm bỏ các task không cần cho thao tác trình bày.** “Chỉ cần thao tác trình bày chạy được là đủ” |
| Nhóm đang định thêm chức năng mới | Dừng lại. “Đến 1:00, việc này có thể làm hỏng những gì đang chạy” |
| Nhóm đang sửa trực tiếp trên `main` | Cho nhóm tạo branch. **Hôm nay cũng không có ngoại lệ** |
| Không ai đọc PR | Nhắc lại vai trò “người đang rảnh tay thì đọc PR” |
| Nhóm còn dư thời gian | Nhận Issue còn trống bằng `/start-task`. Khi xong cả phần đó, cho nhóm tập các bước trình bày 2 lần |

**Lúc 0:50, nhắc cả lớp một lần.**

> “Còn 10 phút nữa là dừng merge. **Nếu việc đang làm không xong trong 10 phút, hãy bỏ việc đó.**”

#### Điểm kiểm tra

- [ ] Tất cả task cần cho thao tác trình bày đã được merge
- [ ] Thao tác trình bày đã chạy được trên `main` ở máy của QA

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| **PR hiện “This branch has conflicts”** | Nhờ Agent bằng prompt bên dưới. Sau khi giải quyết, gửi lên bằng Sync Changes. PR sẽ tự cập nhật |
| Máy mình hiện màn hình conflict | Nhấn **Resolve in Chat**. Đề xuất giải quyết cũng phải đọc diff rồi mới Keep |
| Sau khi merge, thao tác trình bày bị lỗi | **Nguyên nhân là PR vừa merge.** Người phụ trách PR đó sửa trên branch mới rồi tạo PR |
| Đã quá 0:55 mà vẫn chưa sửa được | Nhấn **Revert** ở màn hình PR trên GitHub → **merge** PR vừa được tạo（chỉ nhấn nút thì chưa trở về trạng thái cũ）. **Ưu tiên hàng đầu là đưa ứng dụng về trạng thái đang chạy** |
| Lỡ commit trên `main`（chưa gửi lên） | Nhờ Agent: “Chuyển commit hiện tại của `main` sang branch mới, rồi đưa `main` về như cũ” |
| Branch từ buổi trước đã cũ | Lấy thay đổi của `main` vào branch（prompt bên dưới）. Hoặc bỏ branch đó và tạo lại từ `main` mới nhất |
| Người phụ trách vắng mặt | **Nếu task không cần cho thao tác trình bày thì bỏ.** Nếu cần, một người khác đổi người phụ trách của Issue từ người vắng mặt sang mình（**Assignees** ở bên phải Issue）, rồi bắt đầu bằng `/start-task` |
| Buổi trước đã tạo branch mà không dùng `/start-task` | Kiểm tra người phụ trách ở tab Issues. Nếu chưa có tên mình, chọn mình ở **Assignees** bên phải Issue |

Prompt gửi cho Agent khi bị conflict, hoặc khi cần lấy thay đổi của `main` vào branch cũ:

```text
Lấy bản mới nhất của main vào branch hiện tại.
Nếu có conflict thì đề xuất cách giải quyết, giữ lại thay đổi của cả hai bên.
Giải quyết xong thì commit, nhưng chưa push.
```

---

## Chương 3 Chuẩn bị trình bày — 1:00（5 phút）

> **Từ đây dừng merge.** Cập nhật main trên máy dùng để trình bày và làm thử thao tác trình bày 1 lần. **Không rút ngắn chương này.**

### Mạch của chương

1. 3-1 Làm thử thao tác trình bày trên máy dùng để trình bày

### 3-1 Làm thử thao tác trình bày trên máy dùng để trình bày

#### ［Slide］Học viên làm gì（5 phút）

**① Mọi người: dừng merge**

**Sau 1:00, không merge PR nữa.** PR đang làm dở có thể để nguyên.

**② QA: cập nhật main trên máy dùng để trình bày（1 phút）**

Chuyển sang `main` → **Sync Changes**

**Nhất định phải kiểm tra tên branch ở góc dưới bên trái là `main`.** Nếu trình bày khi vẫn đang ở branch làm việc, nhóm sẽ cho xem thứ không có trong main.

**③ QA: làm thử thao tác trình bày 1 lần（2 phút）**

Mở trên trình duyệt và thực hiện **thao tác trình bày** từ đầu đến cuối.

**④ Cả nhóm: xác nhận các bước trình bày bằng lời（2 phút）**

- Ai nói（PM nói chính, QA thao tác màn hình. Cũng có thể chia nhau nói）
- Giới thiệu mục “không làm gì” nào
- Nếu không chạy thì cho xem gì（xem phần “Khi ứng dụng không chạy” bên dưới）

#### ［Slide］Khi ứng dụng không chạy

**Vẫn trình bày dù ứng dụng không chạy.** Hãy chuyển sang một trong các cách sau.

| Tình huống | Cho xem gì |
|---|---|
| Thao tác bị dừng giữa chừng | Cho xem **đến ngay trước chỗ bị dừng**, rồi nói “nhóm đã định làm phần tiếp theo” |
| Màn hình không hiện | Chiếu `docs/requirements.md` và `docs/tasks.md`, rồi nói **nhóm đã định làm gì** |
| Không có trong main nhưng chạy trên máy của ai đó | **Không cho xem.** Trình bày việc “chưa đưa được vào main” như một khó khăn đã gặp |

#### Giảng viên nói gì

> “Hãy dừng merge. **Từ bây giờ, main hiện tại là thứ nhóm sẽ trình bày.**”

**Trường hợp thứ 3（chạy được trên máy của ai đó）là quyết định quan trọng nhất hôm nay.** Học viên sẽ muốn cho xem, nên hãy nói trước lý do.

> “Thứ chỉ chạy trên máy của một người là thứ **chưa ai trong nhóm kiểm tra**. Từ buổi 4, chúng ta đã thống nhất chỉ đưa vào main những gì đã kiểm tra. Đến cuối cùng, chúng ta vẫn làm theo quy tắc đó.”

#### Điểm kiểm tra

- [ ] Góc dưới bên trái trên máy của QA là `main`
- [ ] Đã làm thử thao tác trình bày 1 lần（nhóm có ứng dụng không chạy đã quyết định sẽ cho xem gì）

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Sau khi Sync, ứng dụng không chạy nữa | Nguyên nhân là PR được merge cuối cùng. **Không Revert**（không còn thời gian）. Cho xem đến ngay trước chỗ bị dừng |
| Đã quá 1:00 mà nhóm vẫn định merge | Dừng lại. **Không tạo ngoại lệ** |
| Chia sẻ màn hình không thành công | Clone repository của nhóm về máy giảng viên rồi chiếu（đã thử trước lúc 0:00） |

---

## Chương 4 Trình bày — 1:05（10 phút）

> Trình bày 5 phút + hỏi đáp 5 phút. **Giảng viên là người bấm giờ.**

### Mạch của chương

1. 4-1 Trình bày và hỏi đáp

### 4-1 Trình bày và hỏi đáp

#### ［Slide］Cách trình bày（nhắc lại）

1. “Nhóm đã làm ○○”
2. Thực hiện trực tiếp **thao tác trình bày**
3. Giới thiệu 1 mục **đã đưa vào “không làm gì”**
4. Những điều làm tốt với Cursor
5. Những khó khăn đã gặp

**Đến 4 phút 30 giây, giảng viên nhắc “Hãy chuyển sang phần tóm tắt”.**

#### Giảng viên nói gì

**Điều phối**

- Đến 4 phút 30 giây thì nhắc “Hãy chuyển sang phần tóm tắt”. Đến 5 phút 30 giây thì dừng
- Khi trình bày xong, cả lớp vỗ tay
- Trong thời gian hỏi đáp（5 phút）, giảng viên đặt câu hỏi. **Cố gắng để cả 4 người đều trả lời ít nhất 1 lần**

**Câu hỏi（giảng viên hỏi 1 câu）** — nếu học viên có câu hỏi thì ưu tiên câu hỏi của học viên.

| Câu hỏi | Mục đích |
|---|---|
| “Trong những mục đã đưa vào ‘không làm gì’, có mục nào giữa chừng nhóm muốn thêm vào không?” | Giúp học viên nói ra tình huống mà “không làm gì” đã có tác dụng |
| “Khi đọc PR, có lần nào nhóm đã dừng merge không?” | Kiểm tra xem việc review có hoạt động không |
| “Có bị conflict không? Nhóm đã xử lý thế nào?” | Chia sẻ những khó khăn khi làm việc nhóm |
| “Có phần nào được làm bằng vibe coding không?” | Liên kết với cách chọn cách làm ở buổi 2 và buổi 3 |

**Khi ứng dụng không chạy**: không trách nhóm. **Hỏi “nhóm đã định làm gì” và “dừng lại ở đâu”, rồi chỉ ra 1 điểm nhóm đã làm tốt.**

> “Nhóm đã nói thẳng là chưa đưa được vào main, điều đó rất tốt. **Việc nhóm dừng lại ở đó cho thấy quy tắc của nhóm đã có tác dụng.**”

#### Điểm kiểm tra

- [ ] Nhóm đã trình bày, và cả 4 người đều đã nói ít nhất 1 lần

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Vượt quá 5 phút nhiều | Dừng lúc 5 phút 30 giây. **Giữ thời gian cho phần nhìn lại** |
| Ứng dụng không chạy nữa trong lúc trình bày | Cho nhóm chuyển sang cách trong bảng “Khi ứng dụng không chạy”. Giảng viên nói “Đến đây thì ứng dụng đã chạy được” |
| Không ai đặt câu hỏi | Dùng 1 câu hỏi của giảng viên |

---

## Chương 5 Nhìn lại — 1:15（15 phút）

> Cá nhân → cả lớp → toàn khóa học. **Điều học viên mang về không phải là “cách dùng Cursor”, mà là “thứ mình đưa cho người khác đã thay đổi”.**
> Phân bổ: cá nhân 3 + chia sẻ với cả lớp 6 + tổng kết toàn khóa học 4 + sau khóa học 2 = 15 phút

### Mạch của chương

1. 5-1 Nhìn lại và tổng kết khóa học

### 5-1 Nhìn lại và tổng kết khóa học

#### ［Slide］Học viên làm gì: Nhìn lại cá nhân（3 phút）

Hãy viết 3 điều sau ra giấy hoặc vào chat.

1. **Điều thay đổi nhiều nhất qua khóa học này**（về thao tác hay về cách nghĩ đều được）
2. **1 cách làm sẽ dùng từ ngày mai**（viết yêu cầu trước / 1 task = 1 chat / đưa vào rule / chia sẻ bằng PR …）
3. **Cách làm của người khác trong nhóm mà mình thấy tốt**

#### ［Slide］Những gì đã làm trong 5 buổi

| Buổi | Nội dung | Thứ đã đưa cho AI（hoặc người khác） |
|---|---|---|
| Buổi 1 | Thao tác cơ bản | `@file` và câu nhờ. Đọc diff rồi Keep |
| Buổi 2 | Vibe coding | Câu nhờ 3 dòng（“làm cho ngon nha”）. 4 người tạo ra 4 sản phẩm khác nhau |
| Buổi 3 | Phát triển theo spec | **Yêu cầu, task, rule** |
| Buổi 4 | Bắt đầu làm theo nhóm | **PR**（thay đổi và tiêu chí để kiểm tra thay đổi đó） |
| Buổi 5 | Hoàn thiện và trình bày | **Ứng dụng chạy được trên main** |

**Qua 5 buổi, điều thay đổi không phải là thao tác của Cursor, mà là “đưa cho người khác thứ gì”.**

#### ［Slide］Chọn cách làm（nhắc lại buổi 2 và buổi 3）

| Trường hợp | Cách làm |
|---|---|
| Việc nhỏ, dùng một lần, chỉ mình xem | **Vibe coding** |
| Phải quyết nhiều thứ, làm cùng người khác, sau này còn sửa | **Phát triển theo spec** |

**Làm việc nhóm luôn thuộc trường hợp “làm cùng người khác”.** Đó là lý do ở buổi 4 và buổi 5, nhóm bắt đầu từ yêu cầu.

#### ［Slide］Sau khóa học

| Muốn làm gì | Tài liệu |
|---|---|
| Ôn lại các cách làm hôm nay | `courses/fundamentals/`（05 cách nhờ AI hiệu quả / 06 Rules / 07 Skills / 20 Liên kết với Git） |
| Muốn tự động hoá review PR | `courses/fundamentals/11`（Bugbot） |
| Muốn chạy nhiều Agent cùng lúc | `courses/fundamentals/12`（Agents Window / Worktrees） |
| Thông tin mới nhất về Cursor | [cursor.com/docs](https://cursor.com/docs) |

#### Giảng viên nói gì

**Chia sẻ với cả lớp（6 phút）**: mời cả 4 người nói câu trả lời cho câu 1 hoặc câu 2. **Câu 3 là nhận xét về các thành viên khác trong nhóm, nên hãy đọc to toàn bộ câu trả lời.**

**Tổng kết toàn khóa học（4 phút）**: chỉ lần lượt từ trên xuống cột bên phải của bảng “Những gì đã làm trong 5 buổi”.

> “Ở buổi 1, chúng ta đưa 1 file cho AI rồi nhờ. Ở buổi 2, chúng ta chỉ đưa 3 dòng, và 4 người tạo ra 4 sản phẩm khác nhau. Ở buổi 3, chúng ta đưa yêu cầu và rule. Ở buổi 4, chúng ta đưa thay đổi cho người khác bằng PR. Hôm nay, chúng ta đã cho cả lớp xem ứng dụng chạy được trên main.
> **Thứ chúng ta đưa cho người khác đã dần thay đổi, từ ‘những gì trong đầu mình’ thành ‘chữ viết mà ai cũng kiểm tra được’.**”

Câu nói cuối cùng:

> “Cursor là một công cụ. Công cụ sẽ còn thay đổi. Nhưng **quyết định điều gì và đưa cho người khác thứ gì** thì không thay đổi.”

#### Điểm kiểm tra

- [ ] Mọi người đã viết phần nhìn lại cá nhân
- [ ] 3–4 người đã chia sẻ với cả lớp

#### Khi mắc kẹt

| Vấn đề | Cách xử lý |
|--------|------|
| Không ai nói | Giảng viên chọn 1 điểm trong phần trình bày và hỏi “Đây là cách làm của buổi nào?” |
| Trễ giờ | Rút ngắn phần chia sẻ với cả lớp. **Giữ lại phần nhìn lại cá nhân và phần tổng kết toàn khóa học** |
| Học viên hỏi “Ở công ty nên dùng thế nào?” | Trả lời rằng “viết yêu cầu trước” và “chia sẻ bằng PR” có thể dùng ngay. Những câu hỏi khác thì trao đổi riêng |

---

## Checklist cho giảng viên（dùng trong ngày）

#### Trước buổi học

- [ ] Đã sẵn sàng để thử chia sẻ màn hình với 1 nhóm（kể cả phương án dự phòng chiếu từ máy giảng viên）
- [ ] Có thể đặt đồng hồ bấm giờ（5 phút trình bày）ở vị trí cả lớp đều nhìn thấy
- [ ] Đã quyết định nơi ghi phần nhìn lại（giấy / chat / tài liệu dùng chung）
- [ ] Đã nắm được nhóm có 0 Issue đã đóng ở buổi trước（đến nhóm đó đầu tiên lúc 0:05）

#### Quản lý thời gian

- Lúc 0:50, nhắc cả lớp “còn 10 phút nữa là dừng merge”
- Dừng merge lúc 1:00. **Không tạo ngoại lệ**
- Nếu có nhiều nhóm, mở rộng thời gian trình bày thành “số nhóm × 4 phút” và rút ngắn chương 2
- Nếu còn thời gian sau phần trình bày, dành thêm thời gian cho phần chia sẻ với cả lớp khi nhìn lại

#### Hỗ trợ khi ứng dụng không chạy lúc trình bày

- Cho xem đến ngay trước chỗ bị dừng
- Nếu màn hình không hiện, chiếu yêu cầu và task rồi nói “nhóm đã định làm gì”
- Giảng viên chỉ ra 1 điểm “phần này nhóm đã làm tốt”
