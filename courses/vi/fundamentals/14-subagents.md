# 14. Subagents

Subagent là **agent chuyên trách mà Agent chính cắt việc ra rồi giao cho**. Nó có ngữ cảnh riêng, nên bạn giao được việc tra cứu, kiểm chứng, sửa lỗi mà không làm bẩn cuộc hội thoại chính.

Nếu `/multitask`（[01-modes.md](01-modes.md)）là tên của **cách làm** — làm song song — thì Subagent là định nghĩa về **đối tượng**: giao cho ai.

## Được lợi gì

- Cuộc hội thoại chính chỉ nhận về kết quả của cả một đợt tra cứu dài（không phải gánh đống nội dung đã đọc dọc đường）
- Đổi được model và quyền dùng tool theo từng vai（ví dụ: vai review thì chỉ-đọc）
- Chạy được nhiều Subagent cùng lúc

## Đặt ở đâu

| Loại | Đường dẫn |
|------|-----------|
| Theo dự án | `.cursor/agents/` |
| Cá nhân | `~/.cursor/agents/` |

`.claude/agents/` và `.codex/agents/` cũng được đọc để tương thích, nên tài sản từ công cụ khác dùng lại được ngay.

## Tệp định nghĩa

Là Markdown + YAML frontmatter.

```markdown
---
name: cart-verifier
description: Dùng khi cần đọc phần giỏ hàng trong practice/ và kiểm chứng xem có đúng đặc tả không. Không sửa code.
model: inherit
readonly: true
is_background: false
---

Đọc practice/cart.js và calculator.js, rồi báo cáo những điểm sau.

1. Phần tính tổng phụ, giảm giá, tổng gồm thuế có đúng đặc tả không
2. Nếu có chỗ hỏng thì nêu kèm cách tái hiện
3. Tuyệt đối không sửa code
```

| Trường | Ý nghĩa |
|--------|---------|
| `name` | Tên để gọi. Đặt trùng tên thư mục / tên tệp |
| `description` | **Dùng vào lúc nào**. Agent nhìn đây để quyết có tự giao việc hay không |
| `model` | `inherit`（giống agent cha）hoặc một model ID cụ thể |
| `readonly` | `true` là chỉ-đọc. Rất hợp với vai review, vai tra cứu |
| `is_background` | `true` là chạy nền |

## Cách gọi

1. **Tự động** — Agent đọc `description`, thấy cần thì tự giao
2. **Chỉ định** — gõ gạch chéo để gọi đích danh, kiểu `/cart-verifier xem có đúng đặc tả không`
3. **Nói bình thường** — “cho cart-verifier kiểm tra giùm” cũng chạy
4. **Song song** — gọi đích danh nhiều cái thì chúng chạy cùng lúc

Ở phía cloud, Subagent còn chạy được trong **máy ảo cách ly**（một bản sao sạch của dự án）. Chạy test song song mà không phá lẫn nhau.

## Phân biệt Rules / Skills / Subagents

| Cơ chế | Quyết định điều gì |
|--------|--------------------|
| **Rules** | Phương châm luôn có hiệu lực（[06-rules.md](06-rules.md)） |
| **Skills** | Bản quy trình. Không quy định ai làm（[07-skills.md](07-skills.md)） |
| **Subagents** | **Giao cho ai làm**. Có ngữ cảnh, quyền và model riêng |

## Lưu ý

- `description` mơ hồ thì sẽ không được gọi tự động. Nhất định phải viết “dùng vào lúc nào”
- Vai nào không được phép sửa thì gắn `readonly: true`
- Tạo quá nhiều thì Agent lúng túng không biết gọi cái nào. Bắt đầu từ một cái thôi

## Thực hành

Ở mode Agent:

```text
Tạo .cursor/agents/cart-verifier.md.
Làm thành một sub-agent chỉ-đọc, chỉ đọc phần giỏ hàng trong practice/ rồi báo cáo
xem có đúng đặc tả không. Phải cấu hình để nó không sửa code.
```

Rồi mở chat mới:

```text
/cart-verifier Kiểm chứng phần giỏ hàng trong practice/
```

Tham khảo: [Subagents](https://cursor.com/docs/subagents)

Tiếp theo: [15-plugins.md](15-plugins.md)
