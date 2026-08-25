# 7. Skills

Skill là một gói gom lại “quy trình khi làm loại việc này”. Nếu Rules là phương châm luôn bật, thì Skills là **cuốn cẩm nang chỉ nạp vào khi cần**.

## Đặt ở đâu

| Loại | Đường dẫn | Phạm vi |
|------|-----------|---------|
| Theo dự án | `.cursor/skills/<tên>/SKILL.md` hoặc `.agents/skills/<tên>/SKILL.md` | Repo này |
| Cá nhân | `~/.cursor/skills/<tên>/SKILL.md` hoặc `~/.agents/skills/<tên>/SKILL.md` | Mọi dự án của bạn |

`.claude/skills/` cũng được đọc để tương thích, nên tài sản viết cho công cụ khác đặt nguyên vào đó vẫn dùng được. Xếp vào thư mục con để phân loại thì vẫn nhận ra.

> Skill dựng sẵn của chính Cursor nằm ở `~/.cursor/skills-cursor/`. **Đừng động vào, đừng ghi đè.**

Cấu trúc tối thiểu:

```text
.cursor/skills/mini-cart-check/
  SKILL.md
```

```markdown
---
name: mini-cart-check
description: Dùng khi cần kiểm tra phần giỏ hàng trong practice/ và báo cáo ngắn gọn trách nhiệm từng phần cùng những chỗ còn thiếu
---

# Mini cart check

1. Đọc practice/cart.js / calculator.js / index.js
2. Lập bảng xem đã có thêm món, xóa món, tổng phụ, tổng gồm thuế hay chưa
3. Nếu có chỗ hỏng thì chỉ ra đúng một chỗ, kèm cách tái hiện
4. Chỉ sửa code khi người dùng yêu cầu
```

Trong frontmatter chỉ **bắt buộc hai trường: `name` và `description`**. `name` chỉ gồm chữ thường, số và dấu gạch ngang, và **phải trùng tên thư mục cha**.

## `description` mới là chỗ quan trọng

Agent **nhìn vào `description`** để quyết định có dùng Skill này cho cuộc hội thoại hay không.
Mẹo là viết rõ “dùng vào lúc nào” ngay trong `description`.

## Ba cách gọi

| Cách gọi | Phạm vi tác dụng | Thao tác |
|----------|------------------|----------|
| **Tự động** | Khi Agent thấy cần | Không làm gì cả. Agent tự đọc `description` rồi quyết |
| **Dấu gạch chéo** | **Chỉ đúng một tin nhắn đó** | Gõ `/` ở ô nhập rồi chọn tên Skill |
| **Custom Mode** | **Cả phiên làm việc** | Chọn Skill rồi `Alt+Enter`（Mac là `Option+Enter`）, hoặc chọn **Use as Mode** |

Đưa lên Custom Mode thì một badge hiện ở ô nhập và quy trình đó có hiệu lực suốt cuộc hội thoại. Kiểu “hôm nay cứ review theo đúng quy ước này giùm” thì dùng cách này（→ [01-modes.md](01-modes.md)）.

## Phân biệt với Rules

- Muốn bắt tuân thủ mọi lúc → **Rule**
- Quy trình dài như “tạo PR”, “báo cáo tuần”, “cách sửa API này” → **Skill**
- Muốn chặn hoặc sửa ngay khi có sự kiện → **Hook**（chương sau）

## Thực hành

Nói với Agent:

```text
Tạo .cursor/skills/mini-cart-check/SKILL.md theo đúng cấu trúc tối thiểu ở trên.
Đừng sinh thêm tệp thừa.
```

Rồi mở chat mới:

```text
Kiểm tra phần giỏ hàng trong practice/（có Skill thì làm theo）
```

Tiếp theo: [08-hooks.md](08-hooks.md)
