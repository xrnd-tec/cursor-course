# 9. MCP（Model Context Protocol）

MCP là giao diện chung để Agent nối tới **công cụ và dữ liệu bên ngoài**（trình quản lý issue, DB, trình duyệt, API nội bộ…）. Thay vì copy-paste vào khung chat, Agent gọi tool để tự đi lấy.

## Được lợi gì

- Nối thẳng Linear / GitHub / Notion / Datadog… ngay trong hội thoại
- Câu “đọc issue hiện tại rồi sửa đi” chạy được mà không cần dán gì
- Đưa API chỉ-đọc của nội bộ vào một cách an toàn（phần phân quyền vẫn là việc của các bạn）

## Hình dung phía Cursor

1. Cấu hình một MCP server（qua giao diện Settings hoặc `mcp.json`）
2. Server công bố **tools / resources** của nó
3. Agent gọi tool đó khi thấy cần（đôi khi sẽ hỏi bạn duyệt）

Ở giai đoạn học, đừng “nối hết mọi thứ” — nên bắt đầu bằng **đúng một server có mục đích rõ ràng**.

## Quan hệ với Rules / Skills

| Cơ chế | Vai trò |
|--------|---------|
| MCP | Khả năng chạm tới **hệ thống bên ngoài** |
| Skill | Khuôn mẫu về cách chạm, theo quy trình nào |
| Rule | Ràng buộc kiểu “cấm mọi thao tác phá DB production” |

Chỉ “nối được” thôi thì nguy hiểm, nên phải nghĩ kèm luôn: ai được gọi cái gì.

## Lưu ý

- Với tool có ghi dữ liệu, siết chặt phân quyền và bắt duyệt tay
- Đừng commit khóa bí mật hay PAT vào repo
- Khi không chạy, hãy xem trạng thái server trước（cần đăng nhập? đang lỗi?）

## Thực hành（tra cứu）

Ở mode Ask:

```text
Tóm tắt các bước thêm một MCP vào Cursor trên chính máy này.
Nếu chỉ để học thì nối cái gì trước là an toàn? Nêu 3 phương án.
```

Khi thêm server thật, hãy làm theo hướng dẫn chính thức của bên được nối, đối chiếu với mục MCP trong Cursor Settings.

Tiếp theo: [10-cloud-agents.md](10-cloud-agents.md)
