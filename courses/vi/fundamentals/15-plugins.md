# 15. Plugins và marketplace

**Rules / Skills / Subagents / Hooks / MCP** xuất hiện từ đầu tới giờ đều là những cơ chế riêng biệt, nằm ở những tệp riêng biệt. Plugin là thứ **gom tất cả lại thành một đơn vị để phát đi**.

Nghĩ thế này thì gần: “trọn bộ cách làm việc của chỗ này” được phát đi chỉ bằng một lần cài.

## Trong Plugin có gì

| Thành phần | Chương tương ứng |
|------------|------------------|
| Rules | [06-rules.md](06-rules.md) |
| Skills | [07-skills.md](07-skills.md) |
| Agents（Subagents） | [14-subagents.md](14-subagents.md) |
| Hooks | [08-hooks.md](08-hooks.md) |
| MCP server | [09-mcp.md](09-mcp.md) |
| Commands | Lệnh có sẵn gọi bằng dấu gạch chéo |

## Hai chuẩn

| Chuẩn | Manifest | Chứa gì |
|-------|----------|---------|
| **Agent Plugins** | `plugin.json` ở thư mục gốc | Chủ yếu là Skills và MCP. Trung lập với nhà cung cấp, chạy được ở công cụ khác |
| **Cursor Plugins** | `.cursor-plugin/plugin.json` | Ngoài những thứ trên còn có Rules, Hooks, Commands — phần riêng của Cursor |

Cursor đọc được cả hai. Ưu tiên tính di động thì chọn cái đầu; vận hành khép kín trong Cursor thì chọn cái sau.

## Lấy ở đâu

- **Marketplace** — kho chính thức của Cursor, những thứ đã qua kiểm duyệt
- **Team Marketplace** — Teams / Enterprise có kệ phát hành riêng của công ty. Giới hạn phạm vi theo nhóm, và chọn được **mặc định tắt / mặc định bật / bắt buộc**
- **Phát triển cục bộ** — đặt vào `~/.cursor/plugins/local` là được nạp. Chỗ để tự thử cái mình viết
- **Deeplink** — chia sẻ cấu hình MCP bằng URL để người khác cài

Sau khi cài thì quản lý ở **panel Customize**. Chọn cài vào cấp nào — người dùng, team hay workspace — cũng ở đây.

## Khi nào nên đóng thành Plugin

- Một mình dùng → cứ đặt thẳng tệp vào là được（một Rule hay một Skill lẻ）
- **Muốn cả team có chung một tiền đề** → Plugin
- Muốn dựng môi trường cho thành viên mới chỉ bằng một thao tác → Plugin

Ngược lại, đóng gói một quy trình còn chưa định hình thì về sau cập nhật rất phiền. Thứ tự đúng là **cho chạy lẻ trước, ổn định rồi mới bó lại**.

## Thực hành（tra cứu）

Ở mode Ask:

```text
Liệt kê những thứ đang có trong .cursor/ của repo này（rules / skills / agents / hooks）.
Nếu gom thành một Plugin thì nên đưa cái nào vào, bỏ cái nào ra? Nêu lý do.
Chưa tạo tệp nào cả.
```

Tham khảo: [Plugins](https://cursor.com/docs/plugins)

Tiếp theo: [16-browser-design.md](16-browser-design.md)
