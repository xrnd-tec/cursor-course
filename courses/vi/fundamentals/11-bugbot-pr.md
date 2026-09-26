# 11. Bugbot / Agent Review / kết nối review PR

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

Dùng **Autofix** thì một Cloud Agent sẽ khởi động luôn để sửa những bug vừa tìm ra. Chuỗi nhận xét → sửa → đưa vào PR nối liền một mạch, nên **cũng dễ sinh ra tai nạn: merge mà chưa đọc nhận xét**. Bản sửa nó đưa ra vẫn phải đọc bằng diff như thường. Autofix đã kết thúc giai đoạn beta, mọi người dùng Bugbot đều dùng được.

### Chi phí（từ tháng 5/2026）

- Không còn tính phí theo từng người dùng, chuyển sang **tính phí theo lượng sử dụng thực tế**. Với Teams thì trừ vào phần sử dụng on-demand, với gói cá nhân thì trừ vào lượng sử dụng đi kèm gói
- Mỗi lần review có chi phí **trung bình $1.00–1.50**, tùy theo kích thước PR
- Có thể chọn mức độ review sâu hay nông（effort）. Cũng có thiết lập chỉ xem phần đã thay đổi kể từ lần review trước

## Agent Review（review trên máy của bạn）

Bugbot chạy trên PR của GitHub, còn **Agent Review chạy ngay trong Cursor trên máy của bạn, trước khi commit hoặc push**. Không cần thiết lập GitHub.

| Cách gọi | Đối tượng |
|----------|-----------|
| Sau khi Agent làm xong, chọn **Review → Find Issues** | Những thay đổi phát sinh từ lần làm việc đó |
| Chạy từ **panel Source Control** | Toàn bộ thay đổi cục bộ, so với branch `main` |
| Gõ **`/agent-review`** trong ô nhập của chat | Review ngay tại chỗ |
| Bật trong phần thiết lập | Tự động chạy mỗi lần commit |

Có 2 mức độ để chọn.

| Mức độ | Phù hợp với |
|--------|-------------|
| **Quick** | Nhanh, dùng ít hạn mức. Diff nhỏ hoặc thay đổi định dạng |
| **Deep** | Tốn thời gian và hạn mức hơn. Xử lý phức tạp hoặc code liên quan tới bảo mật |

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

Tham khảo: [Bugbot](https://cursor.com/docs/bugbot) · [Agent Review](https://cursor.com/docs/agent/agent-review) · [Updates to Bugbot（tháng 5/2026）](https://cursor.com/blog/may-2026-bugbot-changes) · [Bugbot Autofix](https://cursor.com/blog/bugbot-autofix)

Tiếp theo: [12-agents-window.md](12-agents-window.md)
