# 2. Những phím tắt cần thuộc

Chỉ với bấy nhiêu đây là đã lo được 80% việc hằng ngày. Thiết lập của bạn có thể khác, nếu bấm không ăn thì kiểm tra ở **Cursor → Keyboard Shortcuts**.

> **Cách ghi trong tài liệu này lấy Windows làm chuẩn.** Người dùng Mac đọc `Ctrl` thành `Cmd`, `Alt` thành `Option`（riêng `Tab` và `Shift+Tab` thì hai hệ giống nhau）.

## 9 phím bắt buộc

| Thao tác | Windows | Mac | Một câu để nhớ |
|----------|---------|-----|----------------|
| Mở / đóng panel Agent | `Ctrl+I` | `Cmd+I` | Gọi AI（`Ctrl+L` cùng nhóm） |
| Chuyển mode lần lượt | `Shift+Tab` | `Shift+Tab` | Agent→Plan→… |
| Menu chọn mode | `Ctrl+.` | `Cmd+.` | Chọn từ danh sách |
| Đổi model | `Ctrl+/` | `Cmd+/` | Auto ↔ model cụ thể |
| Sửa inline | `Ctrl+K` | `Cmd+K` | Chỉ sửa ngay chỗ này |
| Nhận gợi ý Tab | `Tab` | `Tab` | Lấy phần chữ xám |
| Chỉ nhận một từ | `Ctrl+→` | `Cmd+→` | Lấy từng chút một |
| Đưa vùng chọn sang chat **mới** | `Ctrl+Shift+L` | `Cmd+Shift+L` | Mang vùng chọn mở hội thoại mới |
| Gắn Skill vào mode | `Alt+Enter` | `Option+Enter` | Custom Mode（có hiệu lực suốt phiên） |

## Có thì tiện

| Thao tác | Windows | Mac |
|----------|---------|-----|
| Nhận tất cả thay đổi | `Ctrl+Enter` | `Cmd+Enter` |
| Bỏ tất cả thay đổi | `Ctrl+Backspace` | `Cmd+Backspace` |
| Dừng đang sinh | `Ctrl+Shift+Backspace` | `Cmd+Shift+Backspace` |
| Command palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Gửi vượt hàng đợi | `Ctrl+Enter` | `Cmd+Enter`（`Enter` sẽ xếp vào lượt sau） |
| Bật / tắt Design Mode | `Ctrl+Shift+D` | `Cmd+Shift+D`（khi đang mở trình duyệt） |
| Chat mới | （nút New Chat trên panel / tùy thiết lập） | như bên trái |
| Từ chối gợi ý | `Esc` hoặc cứ gõ tiếp | như bên trái |
| Đổi sidebar Agent sang trái / phải | `Ctrl+E` | `Cmd+E` |

## Cách hiểu về diff

- Thay đổi của Agent được áp vào ngay trong lúc làm, nên **hãy đọc diff, thấy không cần thì Undo**
- Muốn nhận thì **Keep**. Thanh thay đổi ở đáy panel cũng có `Undo` / `Keep` / `Review`
- Riêng sửa inline bằng `Ctrl+K` thì ghi là **Accept / Reject**（ý nghĩa như nhau）
- Muốn quyết một lượt thì `Ctrl+Enter`（nhận hết）/ `Ctrl+Backspace`（bỏ hết）
- Muốn lùi lại nhiều thì dùng **Restore Checkpoint** ở tin nhắn tương ứng
- Dù nghĩ là “đã nhận hết rồi”, vẫn nên tập thói quen kiểm lại lần cuối bằng git hoặc bằng mắt

## Thực hành

1. Mở `practice/greeter.js`
2. Bôi đen phần thân hàm → `Ctrl+K` → `Đổi thành lời chào lịch sự bằng tiếng Việt`
3. Gõ ở một dòng khác, khi thấy gợi ý Tab màu xám thì thử cả `Tab` lẫn `Ctrl+→`
4. `Ctrl+I` → Ask → đặt câu hỏi về đoạn code đang chọn

Tham khảo: [Keyboard Shortcuts](https://cursor.com/docs/reference/keyboard-shortcuts)

Tiếp theo: [03-context.md](03-context.md)
