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

Có thể lấy GitHub / GitLab / Slack / Linear / PagerDuty / Webhook làm mồi kích hoạt. Đây chính là chỗ nó chuyển từ “công cụ do người bấm nút” thành “đồng nghiệp tự động làm”.

- Cách tạo: tạo từ `cursor.com/automations` hoặc từ template trên marketplace. Cũng có thể gõ **`/automate`** trong chat cục bộ rồi mô tả bằng lời việc muốn làm（tháng 6/2026）
- Có tính năng **bộ nhớ** để học từ các lần chạy trước
- Agent được khởi động có thể dùng máy tính của chính nó để tạo demo hoặc sản phẩm（computer use, bật sẵn theo mặc định）
- Với GitHub, còn có thể lấy comment trên Issue, comment review trên PR, review PR, thread review, và việc GitHub Actions chạy xong làm mồi kích hoạt（tháng 6/2026）

### Subscriptions（theo dõi và tự thức dậy）

Cloud Agent **theo dõi** PR, thread Slack hoặc lịch, và khi có động tĩnh liên quan thì tự thức dậy để làm việc（tháng 8/2026, chỉ dành cho Cloud Agent）.

- Với PR do chính nó tạo, nó sửa lỗi CI hoặc xử lý các nhận xét của bot
- Có thể coi đây là phiên bản cloud của `/goal` · `/loop` chạy cục bộ（[21-goals-loops.md](21-goals-loops.md)）

### Projects（agent điều phối, bản beta）

Đây là cơ chế để tiến hành **những việc lớn** như thêm tính năng, chuyển đổi hệ thống hay xây cả một ứng dụng, kéo dài qua nhiều tháng（công bố bản beta ngày 10/9/2026）.

- **Agent điều phối**（coordinator）chạy trên một máy tính riêng trên cloud, lo lập kế hoạch và phân chia công việc. Bản thân agent này không viết code
- Công việc được chia cho **rất nhiều subagent**, mỗi subagent có môi trường cách ly riêng
- Mỗi Project có tệp dùng chung, và kiến thức về codebase cũng như cách làm việc được tích lũy qua các agent và theo thời gian
- Nếu cho nó theo dõi kênh Slack, lịch hoặc PR thì nó sẽ tự làm các việc định kỳ mà không cần nhờ
- Gập máy lại thì nó cũng không dừng. Mở từ thanh điều hướng bên trái

### Những điểm khác（tháng 8–9/2026）

- **Bắt đầu không cần GitHub**: có thể khởi động Cloud Agent mà không kết nối với GitHub hay dịch vụ tương tự. Sau đó có thể lưu vào repo của Cursor（Cursor Origin）（27/8）
- **Self-hosted Machines**: có thể đặt việc chạy tool bên trong mạng nội bộ, ví dụ trên máy của bạn hoặc máy của team（2/9）
- **Rollouts / Security Review**: bot theo dõi việc deploy, và bot tìm các bug có thể bị khai thác trong PR. **Chỉ dành cho Teams / Enterprise**（23/9）

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

Tham khảo: [Cloud Agents](https://cursor.com/docs/cloud-agent) · [Automations（2026-03-05）](https://cursor.com/changelog/03-05-26) · [Improvements to Automations（2026-06-18）](https://cursor.com/changelog/06-18-26) · [Cloud Agents and Harness Improvements（2026-08-19）](https://cursor.com/changelog/08-19-26) · [Changelog（Projects và các mục khác）](https://cursor.com/changelog)

Tiếp theo: [11-bugbot-pr.md](11-bugbot-pr.md)
