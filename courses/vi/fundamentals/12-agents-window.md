# 12. Agents Window / Worktrees（nên đọc）

Bản thân `/multitask` đã nói ở [01-modes.md](01-modes.md). Chương này chỉ bàn **chỗ để chạy nó（Agents Window）** và **cơ chế tránh đụng nhau（worktree）**.

## Agents Window là “kiểu màn hình thứ hai”

Cursor có **IDE view**（editor quen thuộc）và **Agents Window**, đi lại giữa hai bên được（→ [00-map.md](00-map.md)）.

Cách mở chắc ăn nhất là mở command palette bằng `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）rồi chọn **Agents Window**. **Lúc nào quay lại IDE view cũng được, và mở cả hai cùng lúc cũng được.** Nếu cứ khởi động là vào Agents Window, cách chỉnh nằm ở mục “Những thiết lập nên chỉnh trước” trong [00-map.md](00-map.md).

### Trong Agents Window có gì

| | Nội dung |
|---|---|
| **Agent tabs** | Hiện nhiều cuộc chat cùng lúc, **xếp cạnh nhau hoặc theo lưới**. Khác repo cũng được |
| **Trình duyệt tích hợp** | Mở ứng dụng đang chạy và để Agent thao tác lên đó（→ [16-browser-design.md](16-browser-design.md)） |
| **Design Mode** | Chỉ vào phần tử trên màn hình rồi nhờ sửa. `Ctrl+Shift+D` |
| **Chọn nơi chạy** | Cục bộ / worktree / cloud / SSH từ xa |

Điểm cốt lõi của màn hình này là bạn chọn được nơi cho agent chạy — không chỉ máy mình mà cả worktree lẫn cloud.

### Phần lớn thời gian không cần mở nó

**Nếu một người làm một việc thì cứ ở IDE view, chẳng thiếu gì.** Trình duyệt tích hợp cũng mở được trong IDE view.

Agents Window chỉ đáng mở khi rơi vào một trong hai trường hợp:

- **Muốn chạy nhiều agent cùng lúc**（muốn xếp cạnh nhau để nhìn tiến độ）
- **Muốn chạy ở nơi khác máy mình**（worktree / cloud / SSH từ xa）

Không cần nghĩ kiểu “có màn hình mới thì phải dùng”.

> `Ctrl+Shift+A`（Mac là `Cmd+Shift+A`）ở Cursor 3.16 đang được gán cho việc **bật/tắt comment dòng**, không phải Agents Window.

## Worktrees

Worktree của git là cơ chế **checkout đồng thời nhiều branch của cùng một repo ra nhiều thư mục khác nhau**. Khi chạy song song nhiều agent, ta dùng nó để chúng không giành nhau cùng một tệp.

Phía Cursor cũng có sẵn các thao tác cho worktree.

| Thao tác | Làm gì |
|----------|--------|
| Open new window in worktree | Mở thư mục worktree trong một cửa sổ mới |
| Open terminal in worktree | Mở terminal ngay tại chỗ của worktree |
| Copy worktree path | Copy đường dẫn của worktree |

## Đừng lẫn ba thứ này

| Từ | Quyết định điều gì |
|----|--------------------|
| **Agents Window** | **Nhìn** nhiều agent **ở đâu** |
| **`/multitask`** | Có làm các việc **cùng lúc** hay không（→ [01-modes.md](01-modes.md)） |
| **Worktrees** | **Cách ly** công việc tới mức nào |

“Song song” và “cách ly” là hai chuyện khác nhau. **Song song mà không cách ly thì nhiều agent cùng ghi vào một tệp và hỏng.**

## Khi nào dùng

- Muốn chạy đồng thời hai việc không liên quan → `/multitask`
- Muốn thí nghiệm song song trên cùng một tệp một cách an toàn → **worktree**（checkout riêng）
- Chỉ sửa một tệp tại chỗ → panel Agent bình thường là đủ, đừng song song làm gì

## Thực hành

Ask:

```text
@courses/vi/fundamentals/01-modes.md
Nêu mỗi loại một ví dụ: trường hợp nên dùng Multitask kèm worktree,
và trường hợp không nên.
```

Còn thời gian thì mở Agents Window và thử `/multitask` một lần với hai yêu cầu nhỏ không liên quan nhau.

Tham khảo: [Agents Window](https://cursor.com/docs/agent/agents-window) · [Worktrees](https://cursor.com/docs/configuration/worktrees)

Tiếp theo: [13-safety-ignore.md](13-safety-ignore.md)
