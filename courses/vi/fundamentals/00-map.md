# 0. Toàn cảnh Cursor

Cursor là một editor thuộc dòng VS Code, được gắn thêm **một AI có thể đọc, viết và chạy code**.

## Ba cách dùng（nhớ được ba cái này là bớt rối）

| Cách | Dùng để làm gì | Tình huống điển hình |
|------|----------------|----------------------|
| **Tab** | Gợi ý phần tiếp theo ngay khi đang gõ | Viết nốt hàm, thêm import, các đoạn lặp mẫu |
| **Sửa inline（`Ctrl+K`）** | Chỉ sửa vùng đang chọn | “Đổi hàm này thành async”, “Sửa lại câu chữ này” |
| **Panel Agent（`Ctrl+I`）** | Vừa trò chuyện vừa động tới nhiều tệp | Thêm tính năng, tra cứu, refactor, sửa bug |

Cách gọi cũ “Chat / Composer” giờ không còn là trục chính nữa; trục chính bây giờ là **panel Agent + chuyển mode**.

## Hai kiểu màn hình（biết trước thì đỡ lạc）

Cursor có **hai kiểu bố cục màn hình** và bạn đi lại giữa chúng được. **Không phải chọn một bỏ một.**

| | **IDE view** | **Agents Window** |
|---|---|---|
| Trông thế nào | Editor quen thuộc. Code ở giữa, panel Agent ở bên | Lấy agent làm trung tâm. Xếp các cuộc chat cạnh nhau |
| Hợp với | **Tự tay đọc và viết code** | Chạy song song nhiều việc, kiểm tra kết quả trên trình duyệt |
| Có sẵn những gì | Editor, terminal, panel Agent | Các tab Agent（xếp cạnh nhau）, **trình duyệt tích hợp**, Design Mode |

- **Chuyển đổi**: `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）→ `Agents Window`
- **Lúc nào quay lại IDE view cũng được. Mở cả hai cùng lúc cũng được**

**Thường ngày chỉ cần IDE view là đủ.** Trình duyệt tích hợp cũng mở được ngay trong IDE view, nên không cần chuyển màn hình chỉ để xem kết quả chạy.

Agents Window đáng mở khi bạn **muốn chạy nhiều agent cùng lúc**, hoặc **muốn chạy ở nơi khác máy mình（worktree / cloud / SSH từ xa）**. Còn nếu một người làm một việc thì không mở cũng chẳng thiếu gì.

> Chi tiết xem [12-agents-window.md](12-agents-window.md), phần trình duyệt xem [16-browser-design.md](16-browser-design.md).

## Những thiết lập nên chỉnh trước

Khóa học này lấy **IDE view + panel Agent** làm mặc định. Chỉ cần chỉnh trước ba thứ — cách khởi động, ngôn ngữ và mức phê duyệt — là về sau nhẹ đi nhiều.

### Cho Cursor khởi động vào IDE view

Bản Cursor gần đây đôi khi mở thẳng vào **Agents Window**. Đó là do thay đổi trong sản phẩm, không phải máy bạn hỏng.

1. Vào **Cursor Settings → General → Startup → Window Restoration**, chọn **Last Used Windows**
2. Chuyển về **IDE view** rồi mới thoát Cursor. Nếu thoát trong lúc Agents Window đang ở trước, lần sau nó lại mở Agents Window

Trong Settings, gõ tìm `startup` là thấy.

Ở giao diện cũ, hướng dẫn là tắt **Cursor Settings → Agents → Open Agents Window on startup**. Từ bản 3.12 mục này đã đổi cả chỗ lẫn tên. Và tắt đi cũng không có nghĩa là “luôn luôn vào IDE”, mà là **khôi phục lại cửa sổ dùng lần cuối**. Vì vậy việc thoát từ IDE view mới là thứ có tác dụng.

> Theo hướng dẫn của community support（tháng 7–8/2026）. Không tìm thấy trang riêng trong tài liệu chính thức.
> Tham khảo: [Stop cursor from opening into agents window](https://forum.cursor.com/t/stop-cursor-from-opening-into-agents-window/166472)

### Về ngôn ngữ giao diện

Cursor kế thừa language pack của VS Code, và **tiếng Việt không nằm trong các ngôn ngữ hiển thị chính thức**. Nói cách khác, giao diện sẽ ở **tiếng Anh**, và tài liệu này viết theo đúng những chữ tiếng Anh bạn nhìn thấy trên màn hình.

Muốn tự kiểm chứng thì làm thế này, trong **IDE view**:

1. `Ctrl+Shift+P`（Mac là `Cmd+Shift+P`）
2. Gõ `Configure Display Language`
3. Xem danh sách ngôn ngữ đang có

Thêm một điều nên biết: **phần riêng của Cursor như Agent / Chat / Cursor Settings thì tính đến tháng 8/2026 gần như vẫn là tiếng Anh**, kể cả khi bạn đổi được ngôn ngữ hiển thị. Language pack chỉ với tới phần thừa hưởng từ VS Code.

Nếu không thấy `Configure Display Language` hiện ra, hãy chuyển về **IDE view** rồi thử lại — command palette của Agents Window đôi khi không tìm ra nó.

> Tham khảo: [I can't change the interface language](https://forum.cursor.com/t/i-cant-change-the-interface-language/165625)（community support）

### Mức phê duyệt（Run Mode）

Quyết định xem khi Agent gọi terminal hay MCP thì được tự đi tới đâu mà không cần hỏi. Ở **Settings → Agents → Approvals & Execution**.

| Run Mode | Hành vi | Hợp với ai |
|----------|---------|------------|
| **Auto-review** | Việc có vẻ an toàn thì tự làm. Thứ gì chạy được trong sandbox thì chạy ở đó. Còn lại thì tự review, chỉ hỏi khi thật sự cần | **Khuyến nghị cho người làm cá nhân** |
| **Allowlist** | Chỉ tự động với những thứ nằm trong danh sách cho phép | Khi bạn muốn tự quyết cho phép cái gì |
| **Run Everything** | Về cơ bản chạy hết, không hỏi | Chỉ khi bạn chấp nhận được rủi ro |

Phía Cursor cũng khuyến nghị **Auto-review** cho phần đông người dùng: lệnh an toàn thì chạy trong sandbox, phần còn lại thì tự review và chỉ hỏi khi cần. Chi tiết xem [13-safety-ignore.md](13-safety-ignore.md).

Tham khảo: [Run Modes](https://cursor.com/docs/agent/security/run-modes)

## Nhìn ở đâu trên giao diện

- **Giữa editor**: chỗ viết code như thường lệ. Gợi ý Tab hiện ra ở đây
- **Panel Agent（bên phải, hoặc theo bố cục riêng）**: chỗ trò chuyện với AI. Chọn mode ở đây
- **Agents Window**: màn hình xếp nhiều agent chạy song song. Trình duyệt tích hợp và Design Mode cũng ở đây
- **Khung diff**: những chỗ Agent đã sửa. Quyết bằng **Keep**（nhận）/ **Undo**（bỏ）
- **Vòng ngữ cảnh（context ring）**: gần ô nhập. Cho biết cuộc hội thoại đang dùng bao nhiêu ngữ cảnh

> **Lưu ý cách hiển thị chữ**: ở Cursor 3.16, diff của Agent ghi là **Keep / Undo / Review**.
> Riêng thanh sửa inline của `Ctrl+K` thì ghi là **Accept / Reject**. Ý nghĩa như nhau.

## Mục tiêu học（của khóa này）

### Cơ bản 00–05 — tự dùng được một mình

- Biết chọn mode nào cho việc nào
- Ngón tay nhớ được những phím tắt cần thiết
- Truyền được đúng ngữ cảnh mình muốn bằng `@`
- Biết chọn Tab / `Ctrl+K` / Agent theo từng tình huống
- Đổi được một yêu cầu mơ hồ thành một yêu cầu chạy được

### Nâng cao 06–13 — giữ tiền đề và an toàn bằng chính code

- Nói được Rules / Skills / Hooks mỗi thứ lo phần nào
- Hiểu MCP, Cloud Agents và review PR đứng ở đâu
- Nắm được những điểm cần cẩn thận về thông tin bí mật, giới hạn chạy lệnh và chạy agent song song

### Ứng dụng 14–18 — phát cho cả team, cho chạy tự động

- Cắt được một phần việc giao cho Subagent
- Gói cả bộ thành Plugin để phát đi
- Kích hoạt Agent từ màn hình, terminal hoặc dịch vụ ngoài

## Danh sách chương

| Chương | Nội dung |
|--------|----------|
| [01](01-modes.md) | Các mode（Agent / Plan / Debug / Multitask / Ask）và Custom Mode |
| [02](02-shortcuts.md) | Những phím tắt cần thuộc |
| [03](03-context.md) | Truyền ngữ cảnh bằng `@` |
| [04](04-tab-and-inline.md) | Gợi ý Tab và sửa inline |
| [05](05-prompting.md) | Cách nhờ AI cho đúng ý |
| [06](06-rules.md) | Project Rules |
| [07](07-skills.md) | Skills |
| [08](08-hooks.md) | Hooks |
| [09](09-mcp.md) | MCP |
| [10](10-cloud-agents.md) | Cloud Agents（Builds / Automations） |
| [11](11-bugbot-pr.md) | Bugbot / review PR |
| [12](12-agents-window.md) | Agents Window / Worktrees |
| [13](13-safety-ignore.md) | Thông tin bí mật · giới hạn chạy lệnh · vận hành an toàn |
| [14](14-subagents.md) | Subagents |
| [15](15-plugins.md) | Plugins và marketplace |
| [16](16-browser-design.md) | Trình duyệt và Design Mode |
| [17](17-cli.md) | CLI |
| [18](18-integrations.md) | Kết nối dịch vụ ngoài |

Tiếp theo: [01-modes.md](01-modes.md)
