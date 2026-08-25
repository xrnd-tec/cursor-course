# Tài liệu khóa học（tiếng Việt）

> **Phím tắt trong tài liệu này viết theo Windows, Mac để trong ngoặc.**
> Ví dụ: `Ctrl+K`（Mac là `Cmd+K`）. Phím nào hai hệ giống nhau như `Tab`, `Shift+Tab` thì không ghi ngoặc.

| Đường dẫn | Nội dung |
|-----------|----------|
| [fundamentals/](fundamentals/) | Bài tự học thao tác Cursor（0–18） |
| [4sessions/](4sessions/) | Khóa thực hành（90 phút × 4 buổi） |

## Học thế nào

### Tự học

1. Mở panel hội thoại và đi cùng AI ngay trong repo này（**khuyến khích**）
2. Đọc [fundamentals/](fundamentals/) từ trên xuống
3. Làm phần **Thực hành** ở cuối mỗi bài, ngay trong [`practice/`](../../practice/)
4. Gặp thao tác chưa rõ thì hỏi thẳng trong panel

Phần cơ bản（0–5）nên đọc theo thứ tự. Phần nâng cao（6–18）là tài liệu tra cứu ngược, cần chương nào thì mở chương đó.

### Nếu bạn đứng lớp

Bản gốc của tiến trình là [`4sessions/overview.md`](4sessions/overview.md). Buổi 1 tham chiếu `fundamentals/00`–`05`.

## Cơ bản

| # | Tệp | Nội dung | Thời lượng |
|---|-----|----------|------------|
| 0 | [00-map.md](fundamentals/00-map.md) | Toàn cảnh Cursor và những thiết lập đầu tiên | 10 phút |
| 1 | [01-modes.md](fundamentals/01-modes.md) | Agent / Ask / Plan / Debug / Multitask | 15 phút |
| 2 | [02-shortcuts.md](fundamentals/02-shortcuts.md) | Những phím tắt cần thuộc | 10 phút |
| 3 | [03-context.md](fundamentals/03-context.md) | Truyền ngữ cảnh bằng `@` | 15 phút |
| 4 | [04-tab-and-inline.md](fundamentals/04-tab-and-inline.md) | Gợi ý Tab và sửa inline | 15 phút |
| 5 | [05-prompting.md](fundamentals/05-prompting.md) | Cách nhờ AI cho đúng ý | 10 phút |

## Nâng cao（tra cứu ngược）

Không cần đọc theo thứ tự. **Khi nào cần thì mở chương đó.**

| Khi bạn muốn… | Mở chương |
|---------------|-----------|
| Cursor mở lên là Agents Window / muốn đổi ngôn ngữ giao diện | [00. Toàn cảnh](fundamentals/00-map.md) |
| Bớt phải xác nhận mỗi lần AI chạy lệnh | [13. Thông tin bí mật · giới hạn chạy lệnh](fundamentals/13-safety-ignore.md) |
| Ngán phải gõ lại cùng một chỉ dẫn mỗi lần | [06. Project Rules](fundamentals/06-rules.md) |
| Muốn AI nhớ một quy trình cố định | [07. Skills](fundamentals/07-skills.md) |
| Muốn chặn tự động những lệnh nguy hiểm | [08. Hooks](fundamentals/08-hooks.md) |
| Muốn nối Cursor với Issue, DB hay công cụ ngoài | [09. MCP](fundamentals/09-mcp.md) |
| Muốn việc nặng chạy tiếp khi mình rời máy | [10. Cloud Agents](fundamentals/10-cloud-agents.md) |
| Muốn tự động hóa review PR | [11. Bugbot / review PR](fundamentals/11-bugbot-pr.md) |
| Muốn chạy nhiều agent cùng lúc | [12. Agents Window / Worktrees](fundamentals/12-agents-window.md) |
| Không muốn AI đọc thông tin bí mật | [13. Thông tin bí mật · giới hạn chạy lệnh](fundamentals/13-safety-ignore.md) |
| Muốn giao việc tra cứu, kiểm chứng cho agent khác | [14. Subagents](fundamentals/14-subagents.md) |
| Muốn phát cùng một bộ thiết lập cho cả team | [15. Plugins](fundamentals/15-plugins.md) |
| Muốn chỉ thẳng vào màn hình để AI sửa UI | [16. Trình duyệt và Design Mode](fundamentals/16-browser-design.md) |
| Muốn chạy Cursor từ CI hoặc script | [17. CLI](fundamentals/17-cli.md) |
| Muốn kích hoạt từ Slack hay Issue | [18. Kết nối dịch vụ ngoài](fundamentals/18-integrations.md) |

## Nơi để tự tay làm

[`practice/`](../../practice/) là một giỏ hàng nhỏ đang hỏng. Mở `index.html` là thấy ngay chỗ hỏng trên màn hình.

Code và giao diện của `practice/` **để bằng tiếng Anh**, dùng chung cho cả bản tiếng Việt lẫn bản tiếng Anh.
