# Buổi 1: Thao tác cơ bản（90 phút）

> **Mục tiêu của buổi này（4 bậc）**
> 01 Thuộc các thao tác cơ bản của Cursor → 02 Bắt AI giải thích code có sẵn → 03 Bắt AI sửa lỗi → 04 Bắt AI làm một tính năng mới（phần thử sức）
> **Lên tới 01–03 là đạt. 04 là phần thử sức**, không tới cũng không phải là thất bại.

> **Giáo cụ hôm nay là một trang giỏ hàng đang hỏng.** Mở `practice/index.html` lên,
> bạn sẽ thấy 3 chỗ hiện màu cam: ① giảm giá không ăn ② tổng phụ ra NaN ③ coupon chưa làm.
> **Việc của hôm nay là bắt AI sửa cả 3 chỗ đó, và nhìn thấy màn hình trở lại bình thường.**

---

## Toàn bộ mạch của kịch bản

1. 00-1 Cách đọc kịch bản này
2. 00-2 Các bước chuẩn bị
3. 00-3 Bảng thời gian
4. 0-1 Trang bìa và phần mở đầu
5. Chương 1 đến chương 7
6. Checklist cho giảng viên

---

## Cách đọc kịch bản này

### Mạch của phần này

1. 00-1 Những điểm chính khi đọc

### 00-1 Những điểm chính khi đọc

Kịch bản viết theo giả định: **học viên vừa nhìn tài liệu vừa tự tay làm, giảng viên vừa giảng vừa dẫn nhịp**. Phần chia thời gian cũng dựa trên giả định đó.

Prompt được in đầy đủ trong tài liệu, vị trí trên màn hình thì có ảnh chụp, nên không cần giảng viên thao tác mẫu riêng. Cách chạy thực tế thì tùy lớp mà điều chỉnh.

Số ở tiêu đề đọc là **`N-M` = bước M của chương N**（ví dụ `1-2`）. Phần trước chương 1 là **`00-M`**（cách đọc, chuẩn bị, bảng thời gian）, phần mở đầu là **`0-1`**. Đầu mỗi chương có **Mạch của chương**, các phần trước chương thì có **Mạch của phần này**.

Mỗi chương gồm 5 khối（ở vài phần như mở đầu thì có thể thiếu vài khối）.

| Khối | Dành cho ai |
| ---- | ----------- |
| **［Slide］Giải thích** | Giải thích cơ chế của Cursor. Đưa lên slide. Nguồn là `courses/vi/fundamentals/` |
| **［Slide］Học viên làm gì** | Đưa thẳng lên tài liệu phát. Prompt in đầy đủ, không đọc miệng |
| **Giảng viên nói gì** | Nội dung nói trong lúc học viên đang gõ, đang chờ |
| **Điểm kiểm tra** | Căn cứ để quyết định chờ cho đủ hay đi tiếp |
| **Khi mắc kẹt** | Những chỗ kẹt thật sự xảy ra ở chương đó và cách xử lý |

Toàn bộ phần giải thích đều lấy từ [`courses/vi/fundamentals/`](../fundamentals/). **Muốn sửa nội dung thì sửa ở phía fundamentals**（kịch bản chỉ là bản trích）.

| Chương | fundamentals được trích |
| ------ | ----------------------- |
| Chương 1 | [`00-map`](../fundamentals/00-map.md)（những thiết lập nên chỉnh trước） |
| Chương 3 | [`00-map`](../fundamentals/00-map.md) · [`04-tab-and-inline`](../fundamentals/04-tab-and-inline.md) |
| Chương 4 | [`01-modes`](../fundamentals/01-modes.md) · [`03-context`](../fundamentals/03-context.md) |
| Chương 5 | [`02-shortcuts`](../fundamentals/02-shortcuts.md) |
| Chương 6 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chương 7 | [`13-safety-ignore`](../fundamentals/13-safety-ignore.md) |

> Chỗ nào có dấu **［Nói miệng］**là thứ giảng viên truyền đạt ngay tại chỗ bằng lời. Buổi 1 không có mục nào như vậy.

Gửi cho Agent xong thì 30–60 giây không thấy hồi âm. Đó là quãng cả lớp cùng chờ, nên mỗi chương đều có sẵn nội dung để nói lấp vào quãng đó.

---

## Các bước chuẩn bị（làm cùng nhau lúc 0:00）

### Mạch của phần này

1. 00-2 Danh sách chuẩn bị trong ngày

### 00-2 Danh sách chuẩn bị trong ngày

Kịch bản giả định học viên không có điều kiện cài trước. **15 phút đầu tính từ 0:00, cả lớp cùng giảng viên làm lần lượt từ trên xuống.**
Ai xong rồi thì cứ đi tiếp các bước sau, không phải chờ.

| Mục | Các bước |
| --- | -------- |
| **Tải Cursor** | Vào [https://cursor.com](https://cursor.com), cài bản đúng hệ điều hành |
| **Mở lần đầu và đăng nhập** | Đăng nhập bằng tài khoản GitHub hoặc Google |
| **Clone repo này** | **Làm ngay trong Cursor.** `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ `Git: Clone` → dán URL → chọn thư mục. Quen terminal thì dùng `git clone https://github.com/xrnd-tec/cursor-course.git`（terminal tích hợp của Cursor là `` Ctrl+` ``） |
| **Mở thư mục bằng Cursor** | Mở thư mục `cursor-course/`（File → Open Folder）. Mở ở **IDE view**（code ở giữa, Agent ở bên） |
| **Node.js** | **Hôm nay không cần cài.** Trang giáo cụ chỉ cần trình duyệt là chạy. Chỉ bài C（phần thử sức）ở chương 6 mới dùng `node`, không có thì bỏ qua cũng không sao |

> **Buổi này lấy IDE view + panel Agent làm mặc định.** Chương 1 sẽ chỉnh cho cả lớp khởi động vào IDE.
> Phần ngôn ngữ và Auto-review là **mục đọc thêm**（tùy chọn）. Bản gốc của các bước nằm ở mục “Những thiết lập nên chỉnh trước” trong [`00-map.md`](../fundamentals/00-map.md).

> **Trang giáo cụ được mở bằng trình duyệt tích hợp của Cursor.** Không phải cài thêm gì.
> Nếu double-click `practice/index.html` để mở bằng trình duyệt của hệ điều hành thì ES module bị chặn và các con số không hiện ra.

> **Gửi giảng viên**: cả lớp cùng tải một lúc thì dễ nghẽn mạng. Trong lúc chờ tải, hãy đi trước một bước:
> nói luôn “những chỗ hay kẹt” và cách chuyển **Agents Window → IDE**, thì 15 phút mới đủ.

---

## Bảng thời gian

### Mạch của phần này

1. 00-3 Mạch 90 phút

### 00-3 Mạch 90 phút

| Giờ | Chương | Nội dung | Ai làm |
| --- | ------ | -------- | ------ |
| 0:00 | （Mở đầu） | Trang bìa, toàn cảnh khóa học, việc của hôm nay（nói trong lúc chờ tải） | Giảng viên |
| 0:00 | Chương 1 Chuẩn bị môi trường | Cài, clone, khởi động（15 phút） | Cả lớp |
| 0:15 | Chương 2 Mục tiêu hôm nay | Bốn bậc của hôm nay（5 phút） | Giảng viên |
| 0:20 | Chương 3 Ba công cụ | Chạm lần lượt Tab / Ctrl+K / Agent（10 phút） | Cả lớp |
| 0:30 | Chương 4 Ask và Agent | Hỏi bằng Ask → làm bằng Agent（15 phút） | Cả lớp |
| 0:45 | Chương 5 Đọc diff | Đọc diff của chính mình rồi Keep（10 phút） | Cả lớp |
| 0:55 | Chương 6 Thực hành | Tự làm bài trong `practice/`（25 phút） | Cả lớp |
| 1:20 | Chương 7 Mang về | Những gì cần nhớ hôm nay, và buổi sau（10 phút） | Giảng viên |

**Học viên tự tay làm 75 phút trên tổng 90 phút.** Giảng viên nói một chiều chỉ có 15 phút ở chương 2 và chương 7.

> Bảng thời gian này chính là cấu trúc chương của slide. Đầu mỗi chương có một trang bìa chương.
> **Phần mở đầu không chiếm khung giờ nào.** Nó được nói chồng lên quãng chờ tải ở chương 1.

> **Nếu nhiều người kẹt ở phần chuẩn bị**: nén chương 3 xuống 3 phút, và bài ở chương 6 chỉ giữ lại bài A. **Không nén chương 4 và 5** — hai chương đó là phần chính của hôm nay.

---

## Trang bìa và phần mở đầu — 0:00（nói trong vài phút chờ tải）

> **Không tính thành chương.** Nói trong lúc đang chờ tải bản cài.
> Đây là lúc duy nhất tay ai cũng rảnh, nên tranh thủ trao luôn bối cảnh của buổi học.

### Mạch của phần này

1. 0-1 Từ trang bìa tới lời hứa hôm nay

### 0-1 Từ trang bìa tới lời hứa hôm nay

#### ［Slide］Trang bìa

```
Thao tác cơ bản của Cursor

Khóa thực hành Cursor　Buổi 1 / 4　·　90 phút
（ngày）
```

#### ［Slide］Về khóa học này

**Bốn buổi để đi tới chỗ “cả nhóm làm được một ứng dụng và đem đi trình bày”.**

| Buổi | Làm gì | Xong thì làm được gì |
| ---- | ------ | -------------------- |
| **Buổi 1（hôm nay）** | Thao tác cơ bản | Bắt AI sửa lỗi, và đọc được diff nó tạo ra |
| Buổi 2 | Vibe coding → phát triển theo đặc tả | Viết yêu cầu trước rồi mới cho làm |
| Buổi 3 | Làm việc nhóm（nửa đầu） | Cả nhóm viết đặc tả và ra được một PR |
| Buổi 4 | Hoàn thiện và trình bày | Demo được một thứ chạy thật |

#### ［Slide］Việc của hôm nay

**Bắt AI sửa một trang giỏ hàng đang hỏng.**

Mở `practice/index.html` lên là thấy 3 chỗ hỏng, hiện màu cam.

| | Chỗ hiển thị đang hỏng |
| --- | --- |
| ① Apply a discount | Giảm 10% của 1,000 mà vẫn **là 1,000** |
| ② Cart subtotal | **NaN** |
| ③ Use a coupon | **not implemented** |

**Ba chỗ đó đổi sang màu xanh đậm là hôm nay đạt.**

#### ［Slide］Ba lời hứa của hôm nay

1. **Không cần nhớ hết.** Hôm nay chỉ dùng đúng ba công cụ
2. **Gần như không có lúc nào chỉ ngồi nhìn.** 75 trên 90 phút là tự tay làm
3. **Kẹt thì nhìn màn hình người bên cạnh.** Vẫn không ra thì giơ tay

#### Giảng viên nói gì

Vừa nhìn tiến độ tải vừa chạy bốn slide trên. **Ai tải xong rồi thì cứ làm tiếp phần chuẩn bị, không phải chờ.**

Nhưng **chỉ sang chương 2 khi cả lớp đã mở được trang**（điểm kiểm tra của chương 1）. Nghĩa là: việc cá nhân thì cho đi trước, còn nhịp chương thì phải đều.

Có ai hỏi “hôm nay mình làm ra cái gì?” thì trả lời: **không làm ra cái gì cả**. Hôm nay là buổi **sửa thứ đã có sẵn**. Làm ra cái mới thì từ buổi 2.

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| “Em cài Cursor rồi” | Cho mở luôn `practice/index.html`, không phải chờ |
| Cả lớp mãi không tải xong | Nói hết phần mở đầu rồi cho ai xong trước đi tiếp chương 1 |

---

## Chương 1 Chuẩn bị môi trường — 0:00（15 phút）

> Cài Cursor và mở được trang giáo cụ. **Ai rảnh tay thì cứ đi tiếp, nhưng chỉ chuyển sang chương 2 khi cả lớp đã mở được trang.**

### Mạch của chương

1. 1-1 Từ cài đặt tới lúc mở được trang
2. 1-2 Những thứ chỉnh trước（bắt buộc + đọc thêm）

### 1-1 Từ cài đặt tới lúc mở được trang

#### ［Slide］Học viên làm gì

1. Vào [https://cursor.com](https://cursor.com) tải Cursor về và cài
2. Mở Cursor, đăng nhập bằng tài khoản GitHub hoặc Google
3. Lấy giáo cụ về. **Làm ngay trong Cursor được**

   `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ `Git: Clone` → dán URL bên dưới → chọn thư mục

```text
https://github.com/xrnd-tec/cursor-course.git
```

   > Ai quen terminal thì `git clone <URL>` cũng được. Terminal tích hợp trong Cursor（`` Ctrl+` ``）cũng vậy.

4. Mở thư mục `cursor-course/` bằng Cursor（File → Open Folder）
5. Trong sidebar, **chuột phải** vào `practice/index.html` → chọn **Open In Browser**（nó mở bằng trình duyệt tích hợp của Cursor）
6. Thấy trang “Mini Shopping Cart” hiện ra là xong phần chuẩn bị

### 1-2 Những thứ chỉnh trước（bắt buộc + đọc thêm）

#### ［Slide］Những thứ chỉnh trước（1 bắt buộc + đọc thêm）

Mở được trang rồi thì **cả lớp chỉnh cho giống nhau đúng phần màn hình dùng hôm nay.** Phần ngôn ngữ và Auto-review là mục đọc thêm（cho ai xong sớm / để mang về）.

**Bắt buộc — cho Cursor khởi động vào IDE**

1. Vào **Cursor Settings → General → Startup → Window Restoration**, chọn **Last Used Windows**
2. Xác nhận đang ở **IDE view**（code nằm giữa）. Nếu đang là Agents Window thì `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ **Open Editor Window**
3. Tập thói quen **thoát Cursor từ IDE view** để lần sau cũng mở vào IDE（hôm nay không cần thoát）

> Ở giao diện cũ, hướng dẫn là tắt **Agents → Open Agents Window on startup**. Chi tiết xem [`00-map.md`](../fundamentals/00-map.md).

**Đọc thêm — về ngôn ngữ giao diện**

Giao diện Cursor là **tiếng Anh**, và tiếng Việt không nằm trong các ngôn ngữ hiển thị chính thức của VS Code. Muốn tự xem danh sách thì trong IDE bấm `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ `Configure Display Language`.
Ngoài ra, phần riêng của Cursor như **Agent / Cursor Settings thì tính đến tháng 8/2026 gần như vẫn là tiếng Anh**, kể cả khi đổi được ngôn ngữ hiển thị. Đó không phải lỗi cấu hình.

**Đọc thêm — Auto-review（tùy chọn, hợp với làm cá nhân）**

Đặt Run Mode ở **Settings → Agents → Approvals & Execution** thành **Auto-review** thì lệnh có vẻ an toàn sẽ tự chạy, còn lệnh rủi ro cao mới hỏi. Bài hôm nay không bắt buộc phải bật.

> Bản gốc: mục “Những thiết lập nên chỉnh trước” trong [`00-map.md`](../fundamentals/00-map.md)

#### Giảng viên nói gì

Cả lớp tải cùng lúc thì nghẽn mạng. **Vài phút chờ tải chính là quãng chờ đầu tiên**, nên hãy đi trước một bước mà nói “những chỗ hay kẹt”. Đừng để cả lớp ngồi im chờ.

Trong quãng chờ, nói đúng một câu:

> “Khởi động lên có thể ra một màn hình lạ（Agents Window）. Không phải hỏng đâu. **Hôm nay mình dùng IDE — cái có code nằm ở giữa.** Slide sau sẽ chỉnh cho giống nhau.”

Mở được trang rồi thì **cả lớp chỉ cùng xác nhận đúng mục bắt buộc là IDE**. Ngôn ngữ và Auto-review là **mục đọc thêm**. Ai xong sớm thì cho làm thử, còn lại nói “để mang về cũng được”, đừng giữ cả lớp lại.

Khi trang đã lên đủ, **chỉ vào ba chỗ màu cam** và nói việc của hôm nay.

> “① giảm giá không ăn ② tổng phụ ra NaN ③ coupon chưa làm. **Hôm nay mình bắt AI sửa cả ba.**
> Sửa xong thì mấy con số này đổi sang màu xanh đậm.”

Ai xong sớm thì cứ để họ nghịch trang đó. **Không cần giữ lại.**

#### Điểm kiểm tra

**Chưa sang chương 2 chừng nào cả lớp chưa tới đây.** Chỉ phải đợi cho đều đúng một lần này（còn ai xong sớm thì không cần giữ）.

- [ ] Cursor đã khởi động
- [ ] Đã đăng nhập xong（góc trên bên phải hiện icon tài khoản）
- [ ] Đang mở `cursor-course/` ở **IDE view**（sidebar thấy cây thư mục）
- [ ] **Trình duyệt tích hợp của Cursor đang hiện trang “Mini Shopping Cart”**
- [ ] Ba mục ①②③ trên trang đang hiện màu cam

Nói “thấy đúng màn hình này là được” rồi đi tiếp.

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| Tải chậm | Cả lớp tải cùng lúc thì hay nghẽn. Cứ chờ, trong lúc đó đi xem những người khác |
| Không biết lấy bản nào（Mac） | Apple Silicon hay Intel. Không rõ thì Apple menu → About This Mac → dòng Chip |
| Cài đòi quyền admin | Có khi không giải quyết tại chỗ được. Nên hỏi IT từ trước |
| Không đăng nhập được | Kiểm tra xem có tài khoản GitHub / Google chưa. Chưa có thì tạo bằng email |
| Không mở được thư mục | Mở Cursor → File → Open Folder → chọn `cursor-course/` |
| Không thấy sidebar | Bật/tắt bằng `Ctrl+B`（Mac là `Cmd+B`） |
| Chưa git clone | `Ctrl+Shift+P` → `Git: Clone` → dán URL. Quen terminal thì chạy `git clone https://github.com/xrnd-tec/cursor-course.git` |
| **Trang lên rồi nhưng số vẫn là “…”** | Nhiều khả năng đang mở bằng trình duyệt của hệ điều hành. Mở lại bằng trình duyệt tích hợp của Cursor |
| Trang trắng trơn | Tải lại trình duyệt tích hợp. Vẫn không được thì xin xem màn hình người bên cạnh |
| Khởi động ra màn hình lạ（Agents Window） | ① `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ **Open Editor Window** ② Trong Cursor Settings tìm `startup` → đặt **Window Restoration** thành **Last Used Windows** ③ Thoát Cursor **từ IDE view**. Chi tiết xem [`00-map.md`](../fundamentals/00-map.md) |
| Menu vẫn tiếng Anh | Đúng như vậy. Tiếng Việt không có trong ngôn ngữ hiển thị chính thức, và phần riêng của Cursor thì vẫn là tiếng Anh. Không phải lỗi cấu hình |

---

## Chương 2 Mục tiêu hôm nay — 0:15（5 phút）

> Bốn bậc thang. Quyết định trước xem sẽ leo tới đâu. **Chương này giảng viên chỉ nói.**

### Mạch của chương

1. 2-1 Chốt bốn bậc của hôm nay

### 2-1 Chốt bốn bậc của hôm nay

#### ［Slide］Học viên làm gì

Không có. Chỉ nghe.

#### Giảng viên nói gì

> “Hôm nay có bốn bậc. Cứ lần lượt leo từ 01, không cần nhớ hết mọi thứ. Tới 03 là đủ rồi. 04 là phần thử sức.”

**Bốn bậc của hôm nay:**

| Bậc | Làm được gì | Làm ở đâu | Chỗ nào trên màn hình được sửa |
| --- | ----------- | --------- | ------------------------------ |
| 01 | Thuộc các thao tác cơ bản của Cursor | Chương 3 | Dòng chào ở tiêu đề đổi |
| 02 | Bắt AI giải thích code có sẵn | Chương 4（hỏi bằng Ask, có gắn `@`） | — |
| 03 | Bắt AI sửa lỗi | Chương 6, bài A | **② tổng phụ hiện ra** |
| 04 | Bắt AI làm tính năng mới ← **thử sức** | Chương 4 / chương 6, bài B | **① giảm giá ăn** / **③ coupon chạy** |

> Chương 4 có làm `applyDiscount`, nên **cả lớp đều đi qua cửa vào của bậc 04 một lần ở chương 4**. Bài B chỉ là phần áp dụng thêm.

> 03 là vạch đích chung của cả lớp. Không tới được 04 thì để dành buổi sau cũng không sao.

> Vị trí của buổi này trong cả khóa **đã nói ở phần mở đầu**. Ở đây chỉ tập trung vào bốn bậc của hôm nay.

#### Điểm kiểm tra

Không có. Gói lại trong 5 phút rồi sang chương 3.

#### Khi mắc kẹt

Thấy ai đang căng thẳng kiểu “chẳng lẽ phải nhớ hết à”, hãy nhắc lại rằng **vạch chung của cả lớp chỉ tới 03**. Gỡ được cái căng đó ở đây thì các chương sau tay mới chịu chạy.

---

## Chương 3 Ba công cụ — 0:20（10 phút）

> `Tab`, `Ctrl+K`, Agent. Chạm lần lượt từng cái, tự tay.

### Mạch của chương

1. 3-1 Ba công cụ（giải thích）
2. 3-2 Chạm thử（Tab / Ctrl+K / Agent）

### 3-1 Ba công cụ（giải thích）

#### ［Slide］Giải thích

**Cursor là một editor dòng VS Code, được gắn thêm “một AI đọc được, viết được và chạy được code”.** Có ba cách để nhờ AI.

| Cách | Làm từ màn hình | Windows | Mac | Dùng để | Tình huống điển hình |
| ---- | --------------- | ------- | --- | ------- | -------------------- |
| **Tab** | （không có） | （tự động） | （tự động） | Gợi ý phần tiếp theo khi đang gõ | Viết nốt hàm, thêm import, đoạn lặp mẫu |
| **Sửa inline** | （không có） | `Ctrl+K` | `Cmd+K` | Chỉ sửa vùng đang chọn | “Đổi hàm này thành async”, “Sửa lại câu chữ này” |
| **Agent** | Panel Agent bên phải | `Ctrl+I` | `Cmd+I` | Vừa trò chuyện vừa động tới nhiều tệp | Thêm tính năng, tra cứu, refactor, sửa bug |

> **Phím tắt trong khóa này lấy Windows làm chuẩn.** Người dùng Mac đọc phần trong ngoặc.

> **Màn hình hôm nay là IDE view（code ở giữa）+ panel Agent bên phải.** Hôm nay không cần mở Agents Window（→ [`00-map.md`](../fundamentals/00-map.md)）.

**Tab đang nhìn vào cái gì**: code xung quanh, những sửa đổi gần đây, thông tin từ linter. Vì vậy nó mạnh ở khoản “viết tiếp đúng mạch đang viết”.

| Khi Tab phát huy | Khi đừng giao cho Tab |
| ---------------- | --------------------- |
| Những đoạn lặp cùng khuôn | Logic cần phán đoán về đặc tả |
| Bổ sung import, bổ sung kiểu | Tính toán liên quan bảo mật hoặc tiền |
| Viết tiếp mạch đang viết | Những chỗ bắt buộc phải review |

**`Ctrl+K`（Mac là `Cmd+K`）hợp và không hợp với gì**

- Hợp: đổi tên hoặc rút gọn riêng hàm này, sửa lại câu chữ này, viết lại khối này
- Không hợp: thêm tính năng trải trên nhiều tệp → **Agent**; “rốt cuộc cái này chạy thế nào?” → **Ask**

**Bảng chọn nhanh**

```text
Muốn viết tiếp đoạn đang gõ      → Tab
Chỉ muốn sửa vùng đang chọn      → Ctrl+K
Muốn tra cứu / khoan hãy viết    → Ask
Làm đi, sửa đi, chạy thử đi      → Agent
Việc lớn, bàn hướng đi trước     → Plan
```

> Chi tiết hơn: [`00-map.md`](../fundamentals/00-map.md) · [`04-tab-and-inline.md`](../fundamentals/04-tab-and-inline.md)

### 3-2 Chạm thử（Tab / Ctrl+K / Agent）

#### ［Slide］Học viên làm gì（10 phút）

Làm lần lượt từ trên xuống. Ở ① và ② mở hai tệp khác nhau.

**① Gọi Tab ra（3 phút）**

Mở `practice/calculator.js`, đặt con trỏ vào trong `applyDiscount` rồi gõ dở dang một thứ gì đó. Thấy chữ xám hiện ra thì `Tab` để nhận, `Esc` để bỏ.

**② Sửa đúng một chỗ bằng `Ctrl+K`（5 phút）**

Mở `practice/greeter.js`, bôi đen toàn bộ hàm `greet` rồi bấm `Ctrl+K`（Mac là `Cmd+K`）. Dán câu sau vào và gửi.

```text
Đổi lời chào tiếng Anh thành một lời chào lịch sự bằng tiếng Việt.
```

Kết quả hiện ra thì bấm **Accept**（nhận）hoặc **Reject**（bỏ）.

**Ai đã Accept thì tải lại trình duyệt. Tiêu đề của trang sẽ đổi.**

**③ Mở ô nhập của Agent（2 phút）**

`Ctrl+I`（Mac là `Cmd+I`）. **Chưa gửi gì cả.** Chỉ mở ra thôi.

#### Giảng viên nói gì

**Trước khi vào ①**: nhắc rằng tài liệu ghi phím tắt theo Windows, người dùng Mac đọc `Ctrl` thành `Cmd`（`Shift+Tab` thì hai bên như nhau）. Và nói trước rằng **ai bấm phím tắt không ăn thì cứ thao tác bằng nút trên màn hình**. Có người đã đổi keybinding, kẹt ở đây là hỏng cả buổi.

**Trong lúc chờ ở ①**: nói trước rằng chữ xám có khi mất vài giây mới ra, để học viên khỏi cuống. Gõ dở thì có gạch chân đỏ, nói thêm rằng như vậy là đúng dự tính.

**Trong lúc chờ ở ②**: giải thích rằng nút xác nhận có hai kiểu chữ. Ô nhập inline thì ghi **Accept / Reject**, còn diff theo dòng thì ghi **Keep / Undo**（bản cũ thì cả hai đều là Accept / Reject）. **Chương sau chắc chắn dùng tới, nên nói luôn ở đây.**

**Sau khi tải lại ở ②**: đây là lần đầu trong hôm nay **thay đổi của chính học viên hiện lên màn hình**. Thêm một câu “vừa nãy sửa là code, nhưng thứ thay đổi là màn hình” thì các chương sau mới sống.

**Sau ③**: “Tab là ‘viết tiếp’, Ctrl+K là ‘chỉ chỗ này’, Agent là ‘vừa nói chuyện vừa làm’. Hôm nay chủ yếu dùng Agent.”

#### Điểm kiểm tra

- [ ] Đã nhìn thấy gợi ý xám của Tab ít nhất một lần
- [ ] Đã sửa một lần bằng `Ctrl+K` rồi Accept hoặc Reject
- [ ] **Đã tải lại và thấy tiêu đề trang đổi**（với người đã Accept）
- [ ] Ô nhập của Agent đang mở

**Có người không gọi được Tab thì vẫn đi tiếp.** Phần chính của hôm nay là chương 4 và 5. Đừng dừng ở đây.

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| Tab không ra gợi ý | Chờ vài giây. Vẫn không ra thì bỏ qua. Cũng có khi chỉ báo Tab ở góc dưới bên phải đang tắt |
| `Ctrl+K` không ăn | Mac là `Cmd+K`. Ai đã đổi keybinding thì bôi đen rồi tìm trong menu chuột phải |
| Mở ra một cửa sổ khác | Có bản mở Agent ở cửa sổ riêng. Đưa về panel bên phải bằng nút Agent ở góc trên bên phải, hoặc `Alt+Ctrl+J`（Mac là `Option+Cmd+J`） |

---

## Chương 4 Ask và Agent — 0:30（15 phút）

> **Đây là trọng tâm của hôm nay.** Hỏi bằng Ask rồi sửa bằng Agent. Cả lớp tự tay chạy trọn một vòng này.

### Mạch của chương

1. 4-1 Ask, Agent và `@`（giải thích）
2. 4-2 Chạy trọn một vòng（Ask → Agent）

### 4-1 Ask, Agent và `@`（giải thích）

#### ［Slide］Giải thích

**Mode là thứ quyết định cách hành xử của AI.** Nó hiện ở góc dưới bên trái ô nhập; bấm vào để chọn, hoặc `Shift+Tab` để chuyển lần lượt.

| Mode | Hợp với việc gì | Có sửa tệp không |
| ---- | --------------- | ---------------- |
| **Agent** | Thêm tính năng, refactor, sửa bug, chạy test | Có |
| **Plan** | Việc lớn: thống nhất hướng trước rồi mới làm | Làm sau khi duyệt kế hoạch |
| **Debug** | Truy bug khó tái hiện, vừa truy vừa thu bằng chứng | Có |
| **Multitask** | Chạy song song nhiều việc độc lập | Có（song song） |
| **Ask** | Tra cứu, giải thích, bàn thiết kế（chưa muốn nó viết） | **Không（chỉ đọc）** |

**Hôm nay chỉ dùng hai cái: Ask và Agent.** Còn lại để khi nào cần.

> Đổi mode là bắt đầu một ngữ cảnh hội thoại mới cho mode đó. Đổi việc thì mở chat mới cũng là cách hay.

**Mode và model là hai thứ khác nhau.** Chúng nằm sát nhau cạnh ô nhập nên rất dễ lẫn.

| | Quyết định điều gì | Đổi bằng |
| --- | --- | --- |
| **Mode** | **Cách hành xử** của AI（có sửa tệp không, có ra kế hoạch trước không） | `Shift+Tab` |
| **Model** | **Chính bộ não AI** xử lý yêu cầu | `Ctrl+/`（Mac là `Cmd+/`） |

Mặc định là **Auto**, không có nghĩa “không chọn model”, mà là **Cursor Router tự chọn cho từng request**. Việc khó thì đẩy sang model mạnh, việc dễ thì đẩy sang model rẻ. **Hôm nay cứ để nguyên.**

---

**`@` là thứ để chỉ định thông tin đưa vào hội thoại.** Gõ `@` ở ô nhập là chọn được.

| Chỉ định | Khi nào dùng |
| -------- | ------------ |
| `@<file>` | “Lấy tệp này làm tiền đề để nói / để sửa” |
| `@<folder>/` | “Chỉ nhìn trong phạm vi này” |
| `@Docs` | Tham chiếu tài liệu đã đăng ký |
| `@Terminals` | Cho AI xem lỗi hoặc kết quả chạy |
| `@Past Chats` | Nối tiếp hội thoại trước |
| `@Commit` / `@Branch` | Diff chưa commit, hoặc diff so với main |

Cách nghĩ: **biết rõ tệp liên quan thì `@` thẳng vào. Không biết thì đừng gắn, để Agent tự tìm.**

| Yêu cầu yếu | Yêu cầu tốt |
| ----------- | ----------- |
| `Sửa bug đi` | `@practice/cart.js @Terminals` Sửa lỗi “tổng phụ ra NaN”. Cách tái hiện: thêm vào addItem một món không có price, rồi gọi getSubtotal. |

**Đừng gắn quá tay**: `@` nguyên một thư mục lớn không liên quan chỉ tổ thành nhiễu. **Hôm nay một tệp là đủ.**

> Chi tiết hơn: [`01-modes.md`](../fundamentals/01-modes.md) · [`03-context.md`](../fundamentals/03-context.md)

### 4-2 Chạy trọn một vòng（Ask → Agent）

#### ［Slide］Học viên làm gì（15 phút）

**① Chuyển sang mode Ask（2 phút）**

Mở ô nhập bằng `Ctrl+I`（Mac là `Cmd+I`）, bấm vào tên mode ở góc dưới bên trái rồi chọn **Ask**（`Shift+Tab` thì chuyển lần lượt）.

**② Hỏi bằng Ask（4 phút）**

```text
@practice/calculator.js
Giải thích vai trò của tệp này trong 3 dòng.
Sau đó cho biết vì sao mục "Apply a discount" trên màn hình lại không ăn.
```

**③ Quay lại mode Agent（1 phút）**

Bấm vào tên mode rồi chọn **Agent**.

**④ Cho Agent làm（8 phút）**

```text
@practice/calculator.js
Hãy hiện thực applyDiscount(amount, percent).
Ví dụ: applyDiscount(1000, 10) → 900
Không cần giữ lại comment TODO
```

Gửi xong thì **chờ diff hiện ra**. Chưa Keep vội. Chương sau đọc xong rồi mới quyết.

#### Giảng viên nói gì

**Ở ①**: mode hiện ở góc dưới bên trái ô nhập. **Bắt học viên tự mắt xác nhận là nó đã đổi chưa.** Để nguyên Ask mà nhờ code, hoặc để nguyên Agent mà đặt câu hỏi — đó là chỗ kẹt đầu tiên.

**Ngay sau khi gửi ② và đang chờ（30–60 giây）**: nói về những thứ `@` đưa được. Nói trước câu “gắn `@` vào một tệp thì nó đọc tệp đó rồi trả lời”, rồi thêm rằng ngoài tệp còn gắn được thư mục và `@Terminals`（kết quả lỗi）. Nhưng **hôm nay một tệp là đủ**.

**Ở ③**: “Ask là ‘tra cứu, xác nhận’, Agent là ‘thay đổi’. Phân biệt được hai cái đó là khuôn đầu tiên.”

**Ngay sau khi gửi ④ và đang chờ（khoảng 1 phút）**: **học trước chương sau ngay tại đây.** Nói trước rằng “lát nữa nó trả về thì màn hình sẽ ra xanh với đỏ. Xanh là thêm, đỏ là xóa. Đọc từng dòng cái đó chính là chương sau” — như vậy vừa có kết quả là cả lớp bắt đầu đọc được ngay.

Có ai hỏi về phần model ở ô nhập（**Auto** hay **High**）thì trả lời **hôm nay cứ để nguyên**.

#### Điểm kiểm tra

- [ ] Ask đã trả lời（tự nói được bằng lời của mình vì sao mục ① không ăn）
- [ ] Đã quay về được mode Agent
- [ ] Diff của `applyDiscount` đang hiện trên màn hình（**chưa Keep**）

**Nếu có từ 3 người trở lên kẹt ở chỗ đổi Ask / Agent, hãy dừng cả lớp lại và giảng thêm.** Không hiểu chỗ này thì hôm nay coi như hết.

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| Không đổi được mode | Bấm vào đúng tên mode hiện tại ở góc dưới bên trái ô nhập. `Shift+Tab` là chuyển lần lượt |
| Gõ `@` không ra gợi ý | Gõ thêm vài chữ của tên tệp thì gợi ý hiện ra |
| Không thấy diff | Cuộn panel Agent xem có dòng “không có thay đổi nào” không |
| Lỡ nhờ code trong khi vẫn ở Ask | Ask không sửa tệp. Đổi mode rồi gửi lại |
| Lỡ Keep trước mất rồi | Không sao. Chương 5 đọc được cả khi đã Keep |

---

## Chương 5 Đọc diff — 0:45（10 phút）

> Đọc **diff do chính mình tạo ra**. Nhìn màn hình người khác thì không lên tay được.

### Mạch của chương

1. 5-1 Cách đọc diff（giải thích）
2. 5-2 Đọc rồi Keep

### 5-1 Cách đọc diff（giải thích）

#### ［Slide］Giải thích

**Thay đổi của Agent được áp thẳng vào tệp ngay trong lúc nó làm.** Không phải “xem đề xuất rồi mới áp”, mà bạn xem diff **khi tệp đã bị sửa rồi**. Chính vì thế mới phải đọc trước khi quyết.

| Nhìn cái gì | Nghĩa là |
| ----------- | -------- |
| **Xanh** | Dòng được thêm |
| **Đỏ** | Dòng bị xóa |

| Nút để quyết | Nghĩa | Nằm ở đâu |
| ------------ | ----- | --------- |
| **Keep** | Nhận | Góc dưới bên phải của diff, hoặc thanh thay đổi ở đáy panel Agent |
| **Undo** | Bỏ và trả về như cũ | Như trên |
| **Review** | Xem gộp toàn bộ thay đổi | Đáy panel Agent |
| **Restore Checkpoint** | Lùi hẳn về thời điểm đó | Cạnh tin nhắn tương ứng |

> **Lưu ý cách hiển thị chữ**: diff theo dòng ghi là **Keep / Undo**, riêng sửa inline bằng `Ctrl+K` thì ghi là **Accept / Reject**. **Ý nghĩa như nhau**（bản cũ thì cả hai đều là Accept / Reject）.

**Dù nghĩ là “đã nhận hết rồi”, vẫn nên tập thói quen kiểm lại lần cuối bằng git hoặc bằng mắt.**

> Chi tiết hơn: [`02-shortcuts.md`](../fundamentals/02-shortcuts.md)

### 5-2 Đọc rồi Keep

#### ［Slide］Học viên làm gì（10 phút）

**① Đọc diff của mình, từng dòng（4 phút）**

Đọc diff của `applyDiscount` vừa tạo ở chương trước. Vừa đọc vừa tự hỏi ba câu:

- Có thứ gì ngoài phần mình nhờ bị thay đổi không
- Những dòng bị xóa（màu đỏ）, mất đi có sao không
- `applyDiscount(1000, 10)` liệu có ra 900 không

**② Keep（2 phút）**

Đọc thấy thuyết phục thì **Keep**. Không thuyết phục thì **Undo** để trả về rồi nhờ lại.

Muốn lùi nhiều thì dùng **Restore Checkpoint** cạnh tin nhắn để về đúng thời điểm đó.

**③ Kiểm chứng trên màn hình（2 phút）**

Tải lại trình duyệt.

| Trước đó | Sau khi tải lại |
| -------- | --------------- |
| ① After discount **1,000**（cam） | ① After discount **900**（xanh đậm） |

Số không đổi thì hoặc là chưa Keep được, hoặc là phần hiện thực sai.

**④ Đối chiếu đáp án bằng Ask（2 phút）**

Chuyển sang mode **Ask** rồi gửi.

```text
@practice/calculator.js
Giá trị mong đợi của applyDiscount(1000, 10) là bao nhiêu? Cách hiện thực hiện tại có đúng không?
```

#### Giảng viên nói gì

**Trong lúc ①**: đi quanh lớp, hỏi một hai người “bạn đang nhìn chỗ nào”. Trả lời không được cũng không sao. Mục đích là tạo ra **trạng thái đang cố đọc**.

**Ở ③**: đây là khoảnh khắc đã nhất của hôm nay. Cả lớp cùng xác nhận **màu cam đổi thành xanh đậm**. “Sửa code, thế là màn hình cũng được sửa. Tới đây là trọn một vòng.”

**Ngay sau khi gửi ④ và đang chờ**: chốt lại khuôn của hôm nay.

```
Ask（@tệp + câu hỏi）
  ↓ hiểu nội dung
Agent（@tệp + yêu cầu + điều kiện hoàn thành）
  ↓ đọc diff
Keep hoặc Undo（bản cũ là Accept hoặc Reject）
```

Rồi nói câu quan trọng nhất của hôm nay, ngay tại đây.

> “Trước khi Keep thì nhất định phải đọc diff. Đó là nền móng để dùng Cursor một cách an toàn.”

#### Điểm kiểm tra

- [ ] Đã đọc diff rồi mới Keep（không phải bấm bừa）
- [ ] **Mục ① trên màn hình đã đổi thành “900”**
- [ ] Phần đối chiếu đáp án bằng Ask đã trả về

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| Không thấy nút Keep / Undo | Góc dưới bên phải của diff, hoặc thanh thay đổi ở đáy panel Agent. Bản cũ ghi là Accept / Reject |
| Undo xong thì mất quá nhiều | Dùng **Restore Checkpoint** cạnh tin nhắn để về đúng thời điểm đó |
| Phần hiện thực sai | Đừng cho sửa ngay. Bắt hỏi bằng Ask “sai ở chỗ nào?” trước. Giảng viên không đưa đáp án |

---

## Chương 6 Thực hành — 0:55（25 phút）

> Từ đây giảng viên không giảng nữa. Chỉ đi quanh lớp.

### Mạch của chương

1. 6-1 Khuôn của một yêu cầu tốt（giải thích）
2. 6-2 Bài A / B / C

### 6-1 Khuôn của một yêu cầu tốt（giải thích）

#### ［Slide］Giải thích

**Bí quyết nhờ cho đúng ý không nằm ở model, mà ở chỗ viết ra trước “mục tiêu, ràng buộc, điều kiện hoàn thành”.** Prompt của các bài hôm nay cũng theo đúng khuôn này.

```text
【Muốn làm gì】một câu
【Phạm vi】@tệp hoặc thư mục（trong chừng mực bạn biết）
【Ràng buộc】cái gì không được làm hỏng / được dùng công nghệ nào
【Điều kiện hoàn thành】có gì thì coi như xong
【Không cần làm】（tùy chọn）
```

| Tránh nói | Nói thế này thay vào |
| --------- | -------------------- |
| Làm cho nó ổn ổn | Cụ thể về giao diện, hành vi, trường hợp biên |
| Refactor hết đi | Nêu rõ tệp nào, và “làm gì / không làm gì” |
| Sửa bug đi | Mong đợi là gì, thực tế ra sao, tái hiện thế nào |
| Tối ưu vào | Ưu tiên tốc độ, dễ đọc hay tương thích |

**Đổi việc thì mở chat mới.** Tiền đề cũ sẽ bớt vướng chân.

> Chi tiết hơn: [`05-prompting.md`](../fundamentals/05-prompting.md)

### 6-2 Bài A / B / C

#### ［Slide］Học viên làm gì

**Bài A（cả lớp, vạch tối thiểu）— mục tiêu 03: sửa lỗi → màn hình ②**

Mục ② trên màn hình đang ra **NaN**. Sửa `getSubtotal` trong `practice/cart.js`.
**Hỏi bằng Ask trước rồi mới nhờ Agent** — đúng thứ tự như chương 4.

```text
【Ask】
@practice/cart.js
Cho tôi 1–2 vấn đề của getSubtotal hiện tại.
Tôi chỉ muốn xác nhận trước khi sửa.
```

```text
【Agent】
@practice/cart.js
Cải thiện getSubtotal theo các điều kiện sau.
- Bỏ qua những item có price hoặc qty là undefined / null
- Giữ nguyên hành vi hiện tại là giỏ rỗng trả về 0
- Không đổi tên hàm và tham số sẵn có
```

Đọc diff rồi Keep xong thì **tải lại trình duyệt**.

| Trước đó | Sau khi tải lại |
| -------- | --------------- |
| ② Subtotal **NaN**（cam） | ② Subtotal **480**（xanh đậm） |

**Bài B（nếu còn thời gian）— mục tiêu 04: làm một tính năng mới → màn hình ③**

```text
【Agent】
@practice/cart.js @practice/calculator.js
Thêm applyCoupon(code) vào cart.js.
- Với mã SUMMER10 thì trả về getSubtotal đã giảm 10%
- Với mã không hợp lệ thì trả về nguyên getSubtotal
- Được phép dùng applyDiscount trong calculator.js
- Không tạo tệp mới
```

Keep rồi tải lại thì chữ “not implemented” ở mục ③ biến mất và số tiền hiện ra. **Tới đây thì cả ba chỗ đều đã sang màu xanh đậm.**

**Bài C（nếu còn dư thời gian nữa）— mục tiêu 03: sửa từ thông báo lỗi**

Vẫn logic đó, nhưng lần này chạy **trong terminal**. `practice/index.js` hiện mới chỉ là chỗ giữ chỗ, còn trống.

```text
【Agent】
@practice/index.js @practice/cart.js
Viết vào index.js phần in nội dung giỏ hàng và tổng phụ ra bằng console.log.
Điều kiện hoàn thành: node practice/index.js chạy không lỗi và in ra số tiền
```

**Nếu ra lỗi, hãy dán nguyên phần output của terminal vào cho Agent và nhờ nó sửa.** Đó chính là khuôn xử lý lỗi.

#### Giảng viên nói gì

**Không nói gì.** Đi quanh lớp hỗ trợ.

Đừng đưa đáp án cho người đang kẹt. Câu trả lời mặc định là **“thử hỏi Ask xem”**. Mục đích của 25 phút này là đưa cái khuôn của hôm nay vào người, nên giảng viên đưa đáp án là chệch mất mục đích.

#### Điểm kiểm tra

- [ ] Cả lớp đã tới được bước nhờ Agent ở bài A
- [ ] **Quá nửa lớp đã thấy màn hình ② đổi thành “480”**

Nếu còn nhiều người chưa xong bài A thì không giới thiệu bài B và C.

#### Khi mắc kẹt

| Chỗ kẹt | Xử lý |
| ------- | ----- |
| Không biết phải nhờ cái gì | Cho dán thẳng prompt trên slide. Tự viết prompt không phải là bài của hôm nay |
| Agent sửa lan sang chỗ không cần | Undo, rồi thêm vào yêu cầu câu “đừng đổi những phần khác” |
| **Sửa rồi mà màn hình không đổi** | Quên tải lại trình duyệt. Kiểm tra luôn xem đã Keep chưa |
| Bài B báo là không có applyDiscount | Người đã Undo ở chương 4. Cho hiện thực `applyDiscount` trước |
| Bài B mà mục ③ vẫn là “not implemented” | Kiểm tra tên hàm có đúng là `applyCoupon` không（và có `export` không） |
| Máy không có `node` | Bỏ qua bài C cũng được |

---

## Chương 7 Mang về — 1:20（10 phút）

> Những gì cần nhớ hôm nay, phần nộp bài, và buổi sau. **Chương này không rút ngắn.**

> Kể cả khi phần chuẩn bị bị trễ khiến chương 3 phải nén lại, chương này vẫn giữ đủ 10 phút.

### Mạch của chương

1. 7-1 Mang về · nộp bài · an toàn · buổi sau

### 7-1 Mang về · nộp bài · an toàn · buổi sau

#### ［Slide］Học viên làm gì

**Nộp bài（30 giây）**

**Chụp đúng một tấm màn hình của mình**, dán vào khung chat hoặc thư mục chung.

> “Chỉ cần một chỗ màu cam đổi sang xanh đậm là đủ. Chưa sửa hết cũng không sao.”

#### Giảng viên nói gì

**Ba điều cần nhớ khi ra về:**

1. **Hỏi bằng Ask cho chắc rồi mới nhờ Agent**（đừng sửa ngay lập tức）
2. **Chỉ rõ đối tượng bằng `@`**（yêu cầu mơ hồ thì kết quả cũng mơ hồ）
3. **Đọc diff rồi mới Keep**（đừng tin Cursor quá mức）

**Một lời nhắc duy nhất（30 giây）:**

> “Hôm nay là repo để học nên làm gì cũng được. Nhưng **khi làm y như vậy trên repo của công ty thì phải cẩn thận: đừng để Agent đọc API key hay dữ liệu khách hàng.**”

**［Slide］Giải thích — mặc định đã được bảo vệ tới đâu**

| Đối tượng | Mặc định |
| --------- | -------- |
| Đọc và tìm kiếm tệp | Không cần duyệt |
| Ghi đè tệp | **Lưu ngay lập tức**. Chính vì vậy mới cần quản lý phiên bản |
| Chạy lệnh terminal | **Theo Run Mode**（làm cá nhân thì Auto-review） |
| Mạng | Không gọi tùy tiện được. Chỉ giới hạn ở GitHub, link chỉ định trực tiếp, tìm kiếm web… |

Thứ không muốn cho đọc thì loại ra bằng `.cursorignore`. Nhưng ưu tiên cao nhất vẫn là **ngay từ đầu đừng đặt thông tin bí mật vào repo**.

Làm cá nhân thì nên dùng **Auto-review**（mục đọc thêm ở chương 1）. Ở **Settings → Agents → Approvals & Execution**.

> Chi tiết hơn: [`13-safety-ignore.md`](../fundamentals/13-safety-ignore.md) · [`00-map.md`](../fundamentals/00-map.md)（những thiết lập nên chỉnh trước）

**Những thứ hôm nay chưa làm（để các buổi sau）:**

- Rules / Skills / Hooks / MCP / Cloud Agents
- Git / PR / làm việc nhóm
- Phát triển ứng dụng thực thụ

“Những cái này sẽ chạm tới ở buổi 2 trở đi, khi nào cần. Việc hôm nay chạy được thứ gì đó mới là quan trọng hơn.”

**Giới thiệu buổi sau:**

> “Buổi sau mình làm trò lật hình tìm cặp. Đầu tiên cứ ‘không nghĩ gì cả’ mà làm. Sau đó viết yêu cầu ra rồi làm lại. Bên nào trôi hơn — cứ để cơ thể tự nhớ.”

#### Điểm kiểm tra

Phần nộp bài là để nắm được **ai đã sửa tới đâu** mà không cần đi quanh lớp. Nhìn còn mấy chỗ màu cam là biết ngay. Đó là căn cứ để quyết cách vào buổi 2.

#### Khi mắc kẹt

Có người không nộp được thì không truy. **Chỉ đếm số người nộp được.**

#### Link ôn lại（tự học）

- [`00-map.md`](../fundamentals/00-map.md) — toàn cảnh, những thiết lập nên chỉnh trước（khởi động / ngôn ngữ / Auto-review）
- [`01-modes.md`](../fundamentals/01-modes.md) — chi tiết về các mode
- [`03-context.md`](../fundamentals/03-context.md) — đầy đủ các loại `@`
- [`05-prompting.md`](../fundamentals/05-prompting.md) — cách nhờ cho đúng ý

---

## Checklist cho giảng viên（dùng trong ngày）

#### Trước hôm đó

- [ ] Đã kiểm tra mạng của phòng học tải được từ cursor.com
- [ ] Cursor của mình đang là bản mới nhất
- [ ] Đã mở `practice/index.html` **và xác nhận ①②③ đều đang màu cam, tức trạng thái ban đầu**（đúng trạng thái của `main`）
- [ ] `applyDiscount` trong `practice/calculator.js` vẫn còn là TODO
- [ ] Lệnh `node` chạy được（**chỉ trên máy giảng viên**. Dùng để quyết có giới thiệu bài C hay không. Đừng bắt học viên cài）
- [ ] Đã chuẩn bị sẵn URL clone để dán vào chat（phát cho cả lớp lúc 0:00）
- [ ] Đã hỏi IT xem môi trường cài đặt có cần quyền admin không
- [ ] **Đã xác nhận prompt được in đầy đủ trên slide**（kiểu vừa giảng vừa làm thì không đọc miệng）
- [ ] **Slide có ảnh chụp chỉ rõ vị trí trên màn hình**（chỗ tên mode, chỗ diff, chỗ Keep / Undo）
- [ ] Đã tự đi qua một lần cách đưa Agents Window về IDE（mục “Khi mắc kẹt” của chương 1）

#### Quản lý thời gian theo chương

- Chương 1 mà quá 0:20 thì nén chương 3 xuống 3 phút（**không nén chương 4 và 5**）
- Kết thúc chương 5 mà **đã quá 0:55** thì chương 6 chỉ giữ bài A
- Chương 7 thì dù có chuyện gì cũng giữ đủ 10 phút

#### Giả định về cách chạy

- Prompt thì đưa lên slide. Đọc miệng dễ sinh gõ sai rồi trễ giờ
- Gửi xong là có quãng chờ. Phần “Giảng viên nói gì” của mỗi chương chính là để lấp quãng đó
- Chỉ chờ cho cả lớp đều nhau đúng ở chương 1. Các chương khác thì cắt và đi tiếp
- Học viên kẹt thì cách nhanh nhất là xin xem màn hình người bên cạnh
