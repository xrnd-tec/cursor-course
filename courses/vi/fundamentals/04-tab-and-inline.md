# 4. Gợi ý Tab và sửa inline

## Tab（phần gợi ý màu xám）

Là phần AI viết tiếp hiện ra trong lúc bạn đang gõ. Nó dựa vào code xung quanh, những sửa đổi gần đây và thông tin từ linter.

| Thao tác | Phím |
|----------|------|
| Nhận toàn bộ | `Tab` |
| Nhận từng từ | `Ctrl+→`（Mac là `Cmd+→`） |
| Từ chối | `Esc`, hoặc cứ gõ tiếp |
| Nhảy tới chỗ sửa kế tiếp | Sau khi nhận, bấm `Tab` lần nữa（khi còn gợi ý） |

Ở chỉ báo **Tab** góc dưới bên phải, bạn có thể tắt tạm thời hoặc tắt riêng theo phần mở rộng của tệp.

### Khi nào Tab phát huy

- Những đoạn lặp lại cùng một khuôn
- Bổ sung import hoặc kiểu dữ liệu
- Viết tiếp đúng mạch đang viết

### Khi nào đừng phó mặc cho Tab

- Logic cần phán đoán về đặc tả
- Những chỗ bắt buộc phải review, như bảo mật hay tính tiền

## Sửa inline（`Ctrl+K`）

Sửa ngay tại chỗ vùng đang chọn（hoặc quanh con trỏ）bằng một chỉ dẫn ngắn.

Hợp với:

- Đổi tên hoặc rút gọn riêng hàm này
- Sửa lại câu chữ này
- Viết lại khối này theo đúng bảng quy ước

Không hợp với:

- Thêm tính năng trải trên nhiều tệp → **Agent**
- “Rốt cuộc cái này chạy thế nào?” → **Ask**

## Bảng chọn nhanh

```text
Muốn viết tiếp đoạn đang gõ      → Tab
Chỉ muốn sửa vùng đang chọn      → Ctrl+K
Muốn tra cứu / khoan hãy viết    → Ask
Làm đi, sửa đi, chạy thử đi      → Agent
Việc lớn, bàn hướng đi trước     → Plan
```

## Thực hành

1. Mở `practice/greeter.js`, chỉ gõ tên một hàm mới（ví dụ `function farewell`）
2. Khi gợi ý Tab hiện ra, thử `Ctrl+→`（Mac là `Cmd+→`）để nhận từng phần trước
3. Bôi đen toàn bộ hàm `formatName` → `Ctrl+K`（Mac là `Cmd+K`）→ `Truyền null hoặc undefined vào thì đang trả về chuỗi "null". Sửa lại để trả về chuỗi rỗng`
4. Làm lại đúng thay đổi đó một lần nữa theo đường **Ask để nghe cách làm → Agent để thực hiện**, và cảm nhận diff hiện ra khác nhau thế nào

Tiếp theo: [05-prompting.md](05-prompting.md)
