# 16. Trình duyệt tích hợp và Design Mode

Cursor có sẵn một trình duyệt bên trong. Không phải chuyển sang ứng dụng khác, bạn **xem được màn hình đang chạy ngay trong Cursor** — nhưng điểm chính là **Agent thao tác được lên chính trình duyệt đó**.

Không cần cài hay cấu hình công cụ ngoài nào.

## Agent làm được gì trên trình duyệt

| Làm được gì | Cụ thể |
|-------------|--------|
| **Di chuyển** | Mở URL, đi theo link, back / forward, tải lại |
| **Click** | Nút, link, phần tử form. Cả double-click / right-click / hover |
| **Nhập liệu** | Gõ chữ vào form và ô văn bản |
| **Cuộn** | Cuộn trang dài để lộ ra chỗ cần |
| **Screenshot** | Chụp màn hình để đối chiếu bố cục |
| **Đọc console** | Đọc message, error, log trong console của trình duyệt |
| **Xem network** | Xem request và response HTTP（ở panel Agent） |

Nói cách khác, bạn nhờ được cả một mạch: **sửa xong, tự mở lên, tự kiểm chứng**. Đỡ hẳn công copy lỗi rồi dán vào.

```text
Mở http://localhost:3000 và thử đăng nhập.
Nếu console có lỗi thì cho tôi biết nguyên nhân.
```

### Nó tự tìm ra dev server

Nó phát hiện dev server đang chạy sẵn trên máy và **dùng đúng cổng đó**. Không dựng thêm một server thứ hai, cũng không mò cổng theo kiểu đoán.

### Trạng thái được giữ lại

Cookie, localStorage, sessionStorage và IndexedDB **được giữ qua các phiên**（tách riêng theo từng workspace）. Không phải đăng nhập lại, kiểm tra tiếp từ chỗ đang dở.

## Cách duyệt thao tác

Thao tác trình duyệt có ba mức.

| Mức | Hành vi |
|-----|---------|
| **Duyệt tay**（khuyến nghị） | Hỏi bạn ở từng thao tác |
| **Allowlist** | Chỉ những thao tác đã cho phép mới tự chạy |
| **Tự động** | Chạy không hỏi. **Cẩn thận** |

Với Teams / Enterprise, quản trị viên giới hạn được những domain nào được mở tự động（mở bằng tay thì không bị chặn）.

## Design Mode

Khi đang xem trình duyệt, bấm **`Ctrl+Shift+D`**（Mac là `Cmd+Shift+D`）để bật. Đây là mode để **chỉ thẳng vào màn hình thay vì mô tả UI bằng lời**.

| Thao tác | Phím |
|----------|------|
| Bật / tắt Design Mode | `Ctrl+Shift+D` |
| Chọn một vùng | `Shift` + kéo |
| Đưa phần tử đã chọn vào chat | `Ctrl+L`（Mac là `Cmd+L`） |
| Đưa phần tử đã chọn vào ô nhập | `Alt`+click（Mac là `Option`+click） |

**Code, bố cục và quan hệ với xung quanh** của phần tử được chọn sẽ được đưa hết sang cho Agent.

> Yêu cầu sửa UI mà diễn đạt bằng lời thì rất dài（“cái ở giữa trong ba icon xếp ngang bên phải header”）. Chỉ được thì chỉ vẫn nhanh hơn và ít sai hơn.

## Nó nằm ở đâu

Trình duyệt mở ra dưới dạng **một pane bên trong Cursor**. **Mở ngay trong IDE view được**（đã kiểm chứng trên máy thật; không cần chuyển sang Agents Window）.

Riêng **Design Mode** thì trong tài liệu chính thức được mô tả như một tính năng của **trình duyệt trong Agents Window**（→ [12-agents-window.md](12-agents-window.md)）.

Bạn cũng đưa được ngữ cảnh của trình duyệt vào hội thoại bằng `@Browser`（→ [03-context.md](03-context.md)）.

## Hợp và không hợp

- **Hợp**: chỉnh giao diện, canh khoảng cách và vị trí, lỗi kiểu “bấm mà không thấy gì”, kiểm tra vận hành, truy lỗi trong console
- **Không hợp**: sửa logic tính toán hay cấu trúc dữ liệu. Việc đó cứ nhờ Agent như bình thường

## Lưu ý

- **Mở tệp HTML cục bộ trực tiếp bằng trình duyệt của hệ điều hành（`file://`）thì việc nạp ES module bị chặn.** Mở bằng trình duyệt tích hợp của Cursor thì chạy（đã kiểm chứng trên máy thật）
- Đừng để chế độ tự động rồi cho nó động vào trang bên ngoài. Hãy bắt đầu bằng duyệt tay

## Thực hành

1. Chuẩn bị một trang chạy được（dùng `practice/index.html` là được）
2. Mở nó bằng trình duyệt của Cursor
3. Nhờ Agent:

```text
Nhìn trang đang mở và nêu 3 chỗ đang không chạy đúng.
Console có lỗi thì cho tôi biết luôn.
Chưa sửa gì cả.
```

4. Bấm `Ctrl+Shift+D` để vào Design Mode, chọn một phần tử rồi nhờ sửa
5. Đọc diff xong mới Keep（chỉ từ màn hình thì các bước kiểm tra vẫn y nguyên）

Tham khảo: [Browser](https://cursor.com/docs/agent/tools/browser) · [Design Mode](https://cursor.com/docs/agent/design-mode) · [Cursor 3.0](https://cursor.com/changelog/3-0)

Tiếp theo: [17-cli.md](17-cli.md)
