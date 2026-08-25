# 18. Kết nối dịch vụ ngoài

MCP ở [09-mcp.md](09-mcp.md) là cơ chế “tự mình đi nối”. Còn đây là **những kết nối chính thức do phía Cursor dựng sẵn**. Chỉ cần cấu hình xong là **kích hoạt được Agent từ những nơi không hề mở Cursor**.

## Những nơi nối được

| Loại | Dịch vụ |
|------|---------|
| Chat | Slack / Microsoft Teams |
| Issue · task | Jira / Linear / Notion |
| Repository | GitHub / GitLab / Azure DevOps / Bitbucket |
| Editor khác | JetBrains / Xcode |

## Ví dụ: kích hoạt từ Slack

Nhắn `@Cursor` trong thread thì [Cloud Agents](10-cloud-agents.md) chạy.

```text
@Cursor Sửa bug ở màn hình đăng nhập
@Cursor Cập nhật định dạng response của API trên branch dev
```

- Nó đọc repo, branch và model ngay từ nội dung tin nhắn rồi chạy
- Nó **đọc được ngữ cảnh của cả thread**, nên lấy luôn mạch thảo luận làm tiền đề
- Xong việc thì tạo PR và trả link về

Muốn dùng thì phải cài Slack app từ dashboard tích hợp, rồi đặt sẵn repo mặc định và phần thanh toán.

## Deeplink

Là cơ chế **phát cấu hình MCP hoặc plugin chỉ bằng một URL**. Trong tài liệu hướng dẫn viết “bấm vào URL này” là xong, nên môi trường của cả team dễ đồng đều hơn.

## Phân biệt với MCP

| | Kết nối chính thức | MCP |
|--|--------------------|-----|
| Ai chuẩn bị | Cursor | Chính các bạn |
| Nối tới đâu | Các SaaS phổ biến | API nội bộ, DB, công cụ bất kỳ |
| Cửa vào | Kích hoạt Agent **từ bên ngoài**, ví dụ Slack | Gọi **từ bên trong** cuộc hội thoại của Cursor |

“Nhắn trên Slack là có PR trả về” là kết nối chính thức; “đọc DB tồn kho nội bộ rồi sửa” là MCP.

## Lưu ý

- Kích hoạt được từ bên ngoài nghĩa là **những gì viết trong chat sẽ được đem đi chạy thật**. Phải chốt trước ai được phép kích hoạt
- Quyền thì bắt đầu từ mức tối thiểu. Làm quen bằng những kết nối thiên về chỉ-đọc trước

## Thực hành（thiết kế）

Ở mode Ask:

```text
Ba việc sau nên làm bằng kết nối chính thức / MCP / hay không cần cái nào?
Phân loại kèm lý do.
1) Bug được báo trên Slack, muốn sửa ngay tại chỗ và ra PR
2) Muốn đọc API tồn kho nội bộ rồi sửa logic giá
3) Muốn sửa một dòng trong practice/cart.js ngay trên máy
```

Tham khảo: [Integrations](https://cursor.com/docs) · [Slack](https://cursor.com/docs/integrations/slack)

---

Vậy là hết một lượt. Thứ tự bắt tay vào làm thì xem danh sách trong [00-map.md](00-map.md).
