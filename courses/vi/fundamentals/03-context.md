# 3. Truyền ngữ cảnh bằng `@`

Gõ `@` trong ô nhập là chọn được thứ muốn đưa vào cuộc hội thoại.

Cách nghĩ theo tài liệu chính thức: **biết rõ tệp liên quan thì `@` thẳng vào. Không biết thì đừng gắn gì cả, để Agent tự đi tìm.**

## Những thứ hay dùng

| Chỉ định | Khi nào dùng |
|----------|--------------|
| `@tên-tệp` | “Lấy tệp này làm tiền đề để nói / để sửa” |
| `@thư-mục/` | “Chỉ nhìn trong phạm vi này thôi” |
| `@Docs` | Tham chiếu tài liệu đã đăng ký（thêm mới cũng được） |
| `@Terminals` | Cho AI xem lỗi hoặc kết quả chạy |
| `@Past Chats` | Nối tiếp cuộc hội thoại trước |
| `@Commit` / `@Branch` | Diff chưa commit, hoặc diff so với main |
| `@Browser` | Ngữ cảnh của trình duyệt tích hợp（→ [16-browser-design.md](16-browser-design.md)） |

Ảnh cũng dùng được: chụp màn hình rồi `Ctrl+V`（Mac là `Cmd+V`）, hoặc kéo thả vào.

## Ví dụ tốt / ví dụ yếu

Yếu:

```text
Sửa bug đi
```

Tốt:

```text
@practice/cart.js @Terminals
Sửa lỗi “tổng phụ ra NaN”.
Cách tái hiện: thêm vào addItem một món không có price, rồi gọi getSubtotal.
```

## Đừng gắn quá tay

- `@` cả một thư mục lớn không liên quan thì chỉ tổ thành nhiễu
- Thay vì dán đi dán lại cùng một tệp dài, hãy chọn đúng phần cần rồi đưa
- Dùng ngữ cảnh theo từng bước: Ask để tra cứu → Agent để làm

## Thực hành

Mode Ask:

```text
@practice/calculator.js @practice/greeter.js
Hai tệp này giống nhau ở điểm nào, và đoán xem vì sao lại cố tình tách ra?
```

Rồi chuyển sang mode Agent:

```text
@practice/cart.js
Sửa getSubtotal để nó bỏ qua những item thiếu price hoặc thiếu qty.
Giữ nguyên hành vi hiện tại là giỏ rỗng trả về 0. Tiện thể thêm một khối JSDoc.
```

Tiếp theo: [04-tab-and-inline.md](04-tab-and-inline.md)
