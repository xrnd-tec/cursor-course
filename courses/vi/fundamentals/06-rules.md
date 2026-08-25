# 6. Project Rules（`.cursor/rules`）

Những **giao ước của team / của repo** mà bạn không muốn phải gõ lại trong từng prompt thì đặt vào Rules. Agent sẽ lấy đó làm tiền đề để làm việc.

## Rules / Skills / Hooks khác nhau chỗ nào（chỉ cần nắm bấy nhiêu trước）

| Cơ chế | Vai trò | Ví dụ điển hình |
|--------|---------|-----------------|
| **Rules** | Phương châm, ràng buộc luôn có hiệu lực | “Commit viết bằng tiếng Việt”, “CSS dùng modules” |
| **Skills** | Bản hướng dẫn cho một loại việc cụ thể | Quy trình tạo PR, khuôn báo cáo hằng tuần |
| **Hooks** | Chen vào bằng chương trình khi có sự kiện | Chặn shell nguy hiểm, format sau khi sửa tệp |

## Đặt ở đâu

```text
.cursor/rules/
  coding-style.mdc
  practice-js.mdc
```

Mỗi tệp là `.mdc`（Markdown + YAML frontmatter）.

```markdown
---
description: JS trong practice/ dùng ESM, ưu tiên hàm nhỏ
globs: practice/**/*.js
alwaysApply: false
---

# practice JS

- Dùng `export`（không dùng CommonJS）
- Mỗi hàm viết ngắn. Dồn side effect về phía index
```

### Ý nghĩa các trường frontmatter

| Trường | Dùng để làm gì |
|--------|----------------|
| `description` | Mô tả ngắn hiện ra trong danh sách rule |
| `globs` | Chỉ có hiệu lực khi làm việc với tệp khớp mẫu này |
| `alwaysApply` | Đặt `true` thì lần nào cũng nạp vào |

Nhớ thế này cho dễ: **User Rules**（trong Cursor Settings）là cho cá nhân bạn ở mọi dự án; **Project Rules** là để chia sẻ trong repo.

## Mẹo viết

- Ngắn và cụ thể（5–15 dòng giữ được còn hơn một cuốn bách khoa không ai theo）
- Viết rõ “làm gì / không làm gì”
- Chia theo loại tệp（lạm dụng `alwaysApply: true` sẽ ngốn ngữ cảnh）

## Thực hành

Ở mode Agent:

```text
Tạo cho repo này tệp .cursor/rules/practice-js.mdc.
Chỉ có hiệu lực với practice/**/*.js.
Nội dung đúng ba điểm: “dùng ESM”, “hàm viết nhỏ”, “không tạo test trừ khi được yêu cầu”.
```

Xong thì mở chat mới（Ask）:

```text
@practice/calculator.js
Nếu thêm một hàm mới, theo rule của dự án này thì phải viết thế nào?
```

Tiếp theo: [07-skills.md](07-skills.md)
