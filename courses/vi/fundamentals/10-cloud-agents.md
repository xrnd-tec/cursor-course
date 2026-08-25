# 10. Cloud Agents

Agent chạy cục bộ là chạy ngay trên máy bạn. **Cloud Agents** chạy trong môi trường phía cloud, hợp với những việc kéo dài hoặc việc tạo PR từ xa.

## So sánh nhanh

| | Agent cục bộ | Cloud Agents |
|--|--------------|--------------|
| Chạy ở đâu | Máy của bạn | Môi trường tách riêng trên cloud |
| Hợp với | Sửa code có qua lại, kiểm tra tại chỗ | Việc gọn thành khối, chạy tiếp khi bạn rời máy |
| Phụ thuộc vào | git / mạng / công cụ ở máy bạn | Phần cài đặt phía cloud |

Cả hai đều là “Agent”. Khác nhau ở chỗ **chạy ở đâu và được cách ly thế nào**.

Phía cloud có **máy ảo riêng cho bạn**, nên giao được cả build, test lẫn thao tác trình duyệt.

## Hình dung khi dùng

- Chỉ định repo và branch rồi khởi động
- Nó tra cứu, sửa, chạy test… trên cloud
- Bạn nhận kết quả dưới dạng PR hoặc diff của branch（tùy gói bạn dùng）

### Khởi động được từ đâu

| Đường vào | Khi nào dùng |
|-----------|--------------|
| Cursor / Web | Cách khởi động thông thường |
| **Slack** | Nhắn `@Cursor` ngay trong thread（→ [18-integrations.md](18-integrations.md)） |
| **CLI** | Thêm `&` vào đầu prompt（→ [17-cli.md](17-cli.md)） |
| **Mobile / iPad** | Xem PR và ra chỉ thị khi đang di chuyển |

### Builds（cơ chế cho khởi động nhanh）

Dựng lại môi trường từ đầu mỗi lần thì chậm, nên Cursor âm thầm tạo sẵn **ảnh chụp môi trường đã chuẩn bị**. Agent khởi động từ đó nên bắt tay vào việc luôn, khỏi chờ cài dependency. Bản build thành công gần nhất được giữ lại, hỏng thì quay về đó được.

### Automations（cho chạy tự động）

Là cơ chế tự khởi động Cloud Agent theo **lịch** hoặc theo **sự kiện**.

- Mỗi sáng tóm tắt những thay đổi của hôm trước
- PR vừa cập nhật thì review dưới góc nhìn tìm bug
- Phân loại các báo lỗi vừa đăng lên Slack

Có thể lấy GitHub / GitLab / Slack / Linear / Webhook làm mồi kích hoạt. Đây chính là chỗ nó chuyển từ “công cụ do người bấm nút” thành “đồng nghiệp tự động làm”.

Giao diện chi tiết thay đổi khá nhanh, nên an toàn nhất là mở trang Cloud Agents trong tài liệu chính thức để đối chiếu.

## Quan hệ với Multitask và Worktrees

- **`/multitask`**: chạy song song nhiều sub-agent（phần lớn là trên cùng một bản checkout）. Phía cloud thì tách được thành **từng máy ảo riêng biệt**
- **Worktrees**: tách cây làm việc theo từng branch để bớt đụng nhau
- **Cloud**: đẩy việc nặng, hoặc việc cần chạy khi bạn rời máy, ra bên ngoài

“Song song”, “cách ly” và “chạy từ xa” là ba khái niệm khác nhau. Có lúc dùng chồng lên nhau được.

## Thực hành（thiết kế）

Ask:

```text
Ba việc dưới đây nên giao cho Agent cục bộ / Cloud Agents / multitask?
Phân loại kèm lý do.
1) Thêm một hàm vào practice/calculator.js
2) Thêm test cùng lúc cho hai module không liên quan nhau
3) Chạy một đợt refactor lớn qua đêm, sáng ra xem PR
```

Tiếp theo: [11-bugbot-pr.md](11-bugbot-pr.md)
