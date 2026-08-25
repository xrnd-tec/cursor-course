# 17. CLI（Agent trong terminal）

Vẫn là Agent đó, nhưng dùng **từ terminal** mà không cần mở editor. Nếu bản trong editor là để “vừa nhìn vừa sửa”, thì CLI là để **nhúng vào quy trình**.

## Cài đặt

```bash
# macOS / Linux / WSL
curl https://cursor.com/install -fsS | bash
```

Windows（PowerShell）:

```powershell
irm 'https://cursor.com/install?win32=true' | iex
```

Tên lệnh là `agent`.

## Hai cách dùng

### 1. Chế độ tương tác

```bash
agent
agent "Làm cho getSubtotal trong practice/cart.js an toàn hơn"
```

Trò chuyện y như panel Agent trong editor.

### 2. Chế độ print（headless）

```bash
agent -p "Review các thay đổi dưới góc nhìn bảo mật" --output-format text
agent -p "Sửa các test đang fail" --model "gpt-5"
```

Thêm `-p` thì nó **trả lời đúng một lần rồi kết thúc, không hội thoại**, nên nhúng được vào script và CI. Đây chính là giá trị lớn nhất của CLI.

## Những thứ nên thuộc

| Tính năng | Cách dùng |
|-----------|-----------|
| Chỉ định mode | `--mode` hoặc lệnh gạch chéo. `agent` / `plan` / `ask` |
| Mở lại phiên | `agent resume` / `agent --continue` |
| Đẩy lên Cloud | Thêm `&` vào đầu prompt là nó chạy thẳng trên cloud |
| Sandbox | `/sandbox` hoặc `--sandbox <mode>` để đổi giới hạn chạy lệnh |

## Dùng vào việc gì

- **Dùng trong CI** — mỗi PR chạy một lượt review, hoặc tóm tắt nguyên nhân các test fail
- **Việc lặp khuôn** — xử lý hàng loạt kiểu máy móc, như “căn đều cấp tiêu đề của mọi tệp”
- **Nơi không mở được editor** — trên server, bên trong container

Việc cần vừa làm vừa nghĩ thì phía editor nhanh hơn. Hãy xem **CLI là cửa vào của tự động hóa**.

## Lưu ý

- Với `-p`, mọi thứ có thể trôi đi mà không ai đọc diff. **Nhất định chỉ chạy trong repo có quản lý bằng git**
- Khi đưa vào CI thì cấp quyền tối thiểu cho token（[13-safety-ignore.md](13-safety-ignore.md)）

## Thực hành

Trong terminal:

```bash
agent -p "Liệt kê vai trò của từng tệp trong practice/, mỗi tệp một dòng. Đừng sửa code" --output-format text
```

Rồi hỏi đúng câu đó bằng Ask trong editor và so xem cách trả lời khác nhau thế nào.

Tham khảo: [CLI](https://cursor.com/docs/cli/overview)

Tiếp theo: [18-integrations.md](18-integrations.md)
