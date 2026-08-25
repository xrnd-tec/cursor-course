# 13. Thông tin bí mật · `.cursorignore` · vận hành an toàn（nên đọc）

Agent càng tiện thì việc vạch rõ ranh giới **cái gì không cho đọc** và **việc gì không cho làm** càng quan trọng.

## Những thứ phải giữ

- `.env`, API key, personal token, dữ liệu khách hàng
- Tài liệu mật của công ty（cần thì để con người quyết định qua kênh khác）

## `.cursorignore` / `.gitignore`

| Tệp | Mục đích chính |
|-----|----------------|
| `.gitignore` | Không đưa lên git |
| `.cursorignore` | Loại khỏi phần index và phần tham chiếu của Cursor / Agent |

Có lúc cần cả hai. **“Không có trong git nên Agent cũng không thấy” là suy nghĩ sai.** Ưu tiên cao nhất vẫn là **ngay từ đầu đừng đặt thông tin bí mật vào repo**.

## Giới hạn việc chạy lệnh（mặc định đã được bảo vệ tới đâu）

Không chỉ “không cho đọc”, bạn còn đặt được “**không cho làm**”. Ngay ở mặc định, mọi thứ đã như sau:

| Đối tượng | Mặc định |
|-----------|----------|
| Đọc và tìm kiếm tệp | Không cần duyệt |
| Ghi đè tệp | **Lưu ngay lập tức**. Chính vì vậy mới cần có quản lý phiên bản |
| Chạy lệnh terminal | **Theo Run Mode**（khuyến nghị Auto-review, xem bên dưới） |
| Mạng | Không gọi tùy tiện được. Chỉ giới hạn ở GitHub, link bạn chỉ định trực tiếp, tìm kiếm web… |
| Gọi tool của MCP | Cả việc kết nối lẫn việc gọi đều cần duyệt（duyệt trước bằng allowlist hoặc Auto-review thì được） |

### Run Modes

Việc Agent gọi tool được tự đi tới đâu mà không hỏi thì quyết ở **Settings → Agents → Approvals & Execution**. Các bước chỉnh lần đầu nằm ở mục “Những thiết lập nên chỉnh trước” trong [00-map.md](00-map.md).

Phía Cursor khuyến nghị **Auto-review** cho phần đông người dùng.

| Run Mode | Chạy gì mà không hỏi | Hợp khi nào |
|----------|----------------------|-------------|
| **Auto-review** | Khớp allowlist thì chạy ngay. Lệnh shell nào chạy được trong sandbox thì chạy ở đó. Còn lại thì phân loại, chỉ hỏi khi cần | Muốn bớt phải xác nhận nhưng vẫn chặn thao tác rủi ro cao |
| **Allowlist** | Chỉ tự động với thứ nằm trong danh sách（sandbox là tùy chọn） | Muốn tự cố định danh sách cho phép |
| **Run Everything** | Tự động mọi lời gọi tool | Khi bạn chấp nhận không xác nhận gì cả |

Auto-review tiện, nhưng **nó không phải một ranh giới an toàn**. Nó có thể phân loại sai. Việc nào cần chặn chặt chẽ thì xử lý bằng Allowlist cộng với chính bạn bấm duyệt. Không bắt buộc phải có thêm tệp cấu hình nào.

Để “tự động chạy tất”（Run Everything）thì chỗ đó thành cửa ngõ của tai nạn.

Phía CLI cũng có `--sandbox` / `/sandbox`（→ [17-cli.md](17-cli.md)）.

Tham khảo: [Run Modes](https://cursor.com/docs/agent/security/run-modes)

## Mức tối thiểu khi vận hành

1. Thông tin bí mật đưa vào biến môi trường hoặc secret manager
2. Đừng bảo Agent “dán key vào chat”
3. Dùng Hook hoặc Rule để chặn những thứ như `git push --force`（[08-hooks.md](08-hooks.md)）
4. Thao tác phá hủy thì tự mình kiểm rồi mới Keep

## Thực hành

Ask:

```text
Nêu 5 ứng viên nên cho vào .cursorignore của repo học này.
Chỉ luôn giúp những thứ mà cho vào lại cản trở việc học.
Chưa tạo tệp nào cả.
```

---

Phần nâng cao dừng ở đây. Nếu muốn bắt tay làm ngay một lượt:

1. Thêm một tệp vào `.cursor/rules`
2. Viết một Skill nhỏ
3. Với Hook thì bắt đầu bằng loại chỉ quan sát

Từ 14 đến 18 là phần ứng dụng: **phát cho cả team, cho chạy tự động**. Tài liệu chính thức cập nhật nhanh, nên khi bí hãy dùng song song Help / Docs của Cursor và chính khung chat này.

Tham khảo: [Agent Security](https://cursor.com/docs/agent/security)

Tiếp theo: [14-subagents.md](14-subagents.md)
