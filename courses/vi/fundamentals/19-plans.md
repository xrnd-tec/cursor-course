# 19. Gói dịch vụ và mức sử dụng

Cursor **bắt đầu dùng được miễn phí**. Nhưng lượng dùng có giới hạn, và khi vượt quá thì cách xử lý khác nhau tùy gói. Chương này là để bạn phán định được một việc: bài thực hành hôm nay có chạy được không.

> **Giá tiền và lượng hạn mức đều thay đổi.** Những con số ở đây là **thứ đã kiểm chứng trên trang chính thức vào tháng 8/2026**.
> Trước khi quyết định gì, nhất định mở [trang giá chính thức](https://cursor.com/pricing) ra xem.

## Danh sách các gói

| Gói | Vị trí |
|-----|--------|
| **Hobby** | Miễn phí. Không cần thẻ tín dụng |
| **Pro** | Mức chuẩn cho cá nhân |
| **Pro+** | Hạn mức Agent lớn hơn Pro |
| **Ultra** | Hạn mức lớn nhất trong nhóm cá nhân |
| **Teams**（Standard / Premium） | Có thêm quản trị nhóm, ngữ cảnh dùng chung, phân tích mức sử dụng |
| **Enterprise** | Báo giá riêng. Gộp chung mức sử dụng, thanh toán theo hóa đơn, SCIM, kiểm soát truy cập |

> Còn có một gói giới hạn theo khu vực tên **Start**, dành cho Ấn Độ.

## Bản miễn phí（Hobby）làm được gì

Tài liệu chính thức viết thế này:

> The Hobby plan gives you access to Cursor's core features with limited usage. You can use Agent, Chat, and Tab completions with the Auto model.

Nghĩa là **Agent, Chat và gợi ý Tab đều dùng được miễn phí**. Giới hạn nằm ở phía “lượng sử dụng”.

**Hãy để ý chỗ viết “with the Auto model”.** Bản miễn phí có tự chọn tay được một model cụ thể hay không thì **tài liệu chính thức không nói rõ**. Chừng nào chưa kiểm chứng trên máy thật, khóa học này coi như “bản miễn phí thì mặc định là Auto”.

> Chưa kiểm chứng trên máy thật. Đừng khẳng định.

## Cách hiểu về mức sử dụng

> Every plan includes a set amount of model usage. On-demand usage allows you to continue using models after your included amount is consumed, billed in arrears.

**Gói nào cũng có sẵn một lượng sử dụng đi kèm, và dùng hết rồi thì vẫn dùng tiếp được theo kiểu tính theo lượng（on-demand）.** Phần đó bị tính tiền sau.

Với các gói trả phí, hạn mức chia làm hai bể.

| Bể | Nội dung |
|----|----------|
| **Cursor Models** | Các model do chính Cursor cung cấp |
| **Other Models** | Model của bên thứ ba. Tính theo giá API |

Dùng hết thì có hai lựa chọn: **thêm phần on-demand** hoặc **nâng gói**.

## Quan hệ giữa Auto và tiền

Ở [01-modes.md](01-modes.md) đã nói “Auto là cơ chế để Cursor Router tự chọn model”. Về mặt tiền thì như sau:

> All Auto modes bill at the list price of the model each request is routed to.

**Dùng Auto thì vẫn bị tính theo giá của model mà request thực sự được chuyển tới.** Không phải cứ để Auto là rẻ đi. Ba hướng của Auto（Cost / Balance / Intelligence）chỉ đổi phương châm chuyển hướng sang model nào mà thôi.

## Khi tham gia khóa học này

| Tình huống | Phán định |
|------------|-----------|
| Buổi 1（thao tác cơ bản） | Dự tính là bản miễn phí chạy được. Số lần nhờ Agent chỉ vài lần |
| Buổi 2（cố định model） | **Cần chú ý.** Chương 2 yêu cầu chuyển model từ Auto sang một model cụ thể. Bản miễn phí có làm được việc này không thì chưa kiểm chứng |
| Buổi 3 và 4（làm việc nhóm） | Số lượt nhờ nhân theo số người. Có thể có người dùng hết hạn mức |

**Trước buổi 2, giảng viên hãy tự kiểm tra trên máy mình xem “bản miễn phí có cố định model được không”.** Nếu không được thì bỏ phần “cố định model” ở chương 2 khỏi danh sách bắt buộc, chuyển sang cách cho **cả lớp cùng để nguyên Auto**（điều kiện so sánh vẫn đồng đều）.

## Lưu ý

- **Đừng chép giá tiền sang những chỗ khác trong bộ tài liệu này.** Đổi giá là sót ngay. Chỉ nhìn vào chương này và trang chính thức
- Nếu học bằng tài khoản của công ty thì gói do quản trị viên quyết. Có khi cá nhân không tự nâng được

Tham khảo: [Pricing](https://cursor.com/pricing) · [Plans（Help）](https://cursor.com/help/account-and-billing/pricing) · [Models & Pricing](https://cursor.com/docs/models-and-pricing)

Quay lại: [00-map.md](00-map.md)
