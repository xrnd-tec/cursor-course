# 11. Bugbot / kết nối review PR

Biết về phần **tự động hóa review PR** quanh Cursor, coi như một cổng chất lượng sau khi code xong, sẽ làm việc nhóm nhẹ đi nhiều.

## Các nhân vật（nói gọn）

| Tên | Vai trò |
|-----|---------|
| **Bạn + Agent** | Code trên branch, commit, tạo PR |
| **Bugbot**（hoặc bot PR tương tự） | Đọc diff của PR rồi chỉ ra bug và rủi ro |
| **Người review** | Đặc tả, thiết kế, và quyết định cuối cùng |

Tên gọi và cách bật thay đổi tùy môi trường. Điểm cần nhớ là đừng trộn lẫn **review trong khung chat** với **review tự động trên PR**.

## Bugbot đứng ở đâu

Bugbot là một tính năng của [Cloud Agents](10-cloud-agents.md). Nó đọc diff của PR rồi để lại nhận xét và đề xuất sửa dưới dạng comment. Bạn cho nó chạy tự động mỗi lần PR cập nhật, hoặc gọi tay khi cần.

Dùng **Autofix** thì một Cloud Agent sẽ khởi động luôn để sửa những bug vừa tìm ra. Chuỗi nhận xét → sửa → đưa vào PR nối liền một mạch, nên **cũng dễ sinh ra tai nạn: merge mà chưa đọc nhận xét**. Bản sửa nó đưa ra vẫn phải đọc bằng diff như thường.

## Làm được gì ngay trong chat（kể cả ở repo học này）

- Nhờ Agent “review giúp diff này”（với thay đổi cục bộ）
- Nhờ Ask lập một checklist trước khi merge
- Đóng gói quy trình dựa trên `gh pr create` thành Skill（[07-skills.md](07-skills.md)）

## Luồng cần thuộc khi làm việc với PR

1. Cắt branch theo đơn vị commit được nhỏ gọn
2. Tạo PR（có tiêu đề và Test plan）
3. Phân loại các nhận xét tự động（sửa hết / cố ý để nguyên）
4. Người review kiểm tra phần đặc tả

Ở repo học này, chỉ cần thuộc **khuôn 1 → 2** là đủ.

## Thực hành

Ask:

```text
Giả sử có thay đổi trong practice/ và courses/ hiện tại,
hãy viết một tiêu đề PR nhỏ kiểu bài tập và một Test plan gồm 3 mục checklist.
Chưa push, chưa tạo PR.
```

Nếu team bạn đã gắn Bugbot vào repo, cách nhanh nhất là trải nghiệm đọc nhận xét một lần trên PR thật.

Tiếp theo: [12-agents-window.md](12-agents-window.md)
