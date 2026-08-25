# Khóa thực hành: 90 phút × 4 buổi

`courses/vi/fundamentals/`（0–19）và `practice/` trong repo này là **tài liệu tự học thao tác Cursor**.
Tài liệu này thì khác: nó là bản thiết kế tổng thể của **khóa thực hành（4 buổi）** được vận hành riêng.

## Chi tiết từng buổi（kịch bản chạy theo từng phút）

Tài liệu này là thiết kế tổng thể. Hôm chạy lớp thì dùng tệp của từng buổi.

| Buổi | Tệp | Chủ đề |
|------|-----|--------|
| Buổi 1 | [session-01.md](session-01.md) | Thao tác cơ bản（Ask → Agent → diff → Keep） |
| Buổi 2 | [session-02.md](session-02.md) | Vibe coding → phát triển theo đặc tả（trò lật hình tìm cặp） |
| Buổi 3 | [session-03.md](session-03.md) | Làm việc nhóm, nửa đầu（chọn đề tài / đặc tả / PR） |
| Buổi 4 | [session-04.md](session-04.md) | Hoàn thiện và trình bày |

## Mục tiêu của cả khóa

Học xong khóa này, học viên làm được những việc sau.

1. Tự mình làm được những chỉnh sửa nhỏ và thêm tính năng, bằng các thao tác cơ bản của Cursor
2. Cảm nhận được ranh giới của “vibe coding”, và giải thích cũng như thực hành được rằng **quyết đặc tả trước rồi mới làm** thì ổn định hơn
3. Cả nhóm chọn được đề tài, cho ứng dụng chạy qua những vòng ngắn, và đem đi trình bày được

Tài liệu tự học sẵn có（`courses/vi/fundamentals/00–19`）chủ yếu dùng làm **tài liệu tham chiếu cho buổi 1** và **để ôn lại**. Đừng nhồi toàn bộ phần nâng cao vào 4 buổi.

## Khuôn chung của một buổi（90 phút）

| Phần | Ước lượng | Làm gì |
|------|-----------|--------|
| Nói mục tiêu | 5–8 phút | Chốt trong 1–2 câu “buổi này làm được gì” |
| Nửa đầu: vừa giảng vừa làm | 35–40 phút | Học viên bám theo. Không dừng lại, chạy trọn một cái khuôn |
| Nửa sau: làm bài | 35–40 phút | Cá nhân hoặc nhóm tái hiện và áp dụng đúng khuôn đó |
| Tổng kết | 5–8 phút | Cái được của hôm nay + giới thiệu buổi sau |

Nửa đầu kéo dài thì nửa sau chết. Điều kiện hoàn thành của nửa đầu không phải là “giảng hoàn hảo”, mà là **đã chạy trọn một cái khuôn**.

## Giới hạn số học viên（trên mỗi giảng viên）

Thiết kế khóa học này chỉ thành lập trong một số lượng người nhất định. **Vượt qua là buổi 4 vỡ.**

| Ràng buộc | Cách tính | Giới hạn |
|-----------|-----------|----------|
| Khung trình bày ở buổi 4 | 35 phút ÷ 3 phút một nhóm（không hỏi đáp） | 11 nhóm |
| Khung trình bày ở buổi 4 | 35 phút ÷ 4 phút một nhóm（có hỏi đáp） | **8 nhóm** |
| Đi hỗ trợ quanh lớp ở buổi 3 và 4 | Số nhóm một giảng viên đi hết trong 40 phút nửa sau | **6–8 nhóm** |

**Mốc: tối đa 8 nhóm / 24 học viên（một giảng viên）.** Vượt quá thì phải tăng giảng viên hoặc trợ giảng, và chốt trước phương án kiểu chia buổi 4 thành hai phòng.

---

## Buổi 1: Thao tác cơ bản（90 phút）

### Mục tiêu của buổi

Biết chọn giữa các mode, `@`, Tab / Ctrl+K / Agent, và tự hoàn thành được một chỉnh sửa nhỏ.

### Nửa đầu（cùng làm）

- Toàn cảnh（chọn giữa Tab / Ctrl+K / Agent）
- Đổi mode（tối thiểu Ask / Agent / Plan）
- Đưa tệp và thư mục bằng `@`
- Xem diff của Agent rồi Keep / Undo
- Tham chiếu: `courses/vi/fundamentals/00-map.md` đến `05-prompting.md`（đừng bắt đọc hết, chỉ chỗ cần）

### Nửa sau（làm bài）

- Các bài ngắn trong `practice/`（ví dụ: thêm hàm vào calculator, đổi mode giữa giải thích và hiện thực）
- Mỗi người tự chạy hết phần tương đương “Thử ngay” trong README

### Định nghĩa hoàn thành（vạch của buổi này）

- [ ] Đổi qua lại được giữa Ask và Agent để nhờ việc
- [ ] Đưa được đúng tệp mình muốn bằng `@`
- [ ] Xem được diff của Agent và Keep / Undo được
- [ ] Hoàn thành ít nhất một bài trong `practice/`

### Không làm

- Đào sâu Rules / Skills / Hooks / MCP / Cloud Agents（cần thì nhắc một câu là đủ）
- Bắt đầu phát triển ứng dụng thực thụ

---

## Buổi 2: Vibe coding → phát triển theo đặc tả（90 phút）

### Mục tiêu của buổi

Tự tay **trải nghiệm** bốn tính chất thực tế của vibe coding, và biết được điểm nào thì nên chuyển sang viết đặc tả trước.

> **Đừng dựng bài theo hướng “vibe coding thì sẽ vỡ”.** Trò lật hình tìm cặp là thứ AI biết rất rõ nên vibe vẫn làm xong bình thường（đã đo thực tế）. Chi tiết xem phần “Luận điểm của buổi này” ở đầu [session-02.md](session-02.md).

### Đề tài（giảng viên cố định sẵn）

**Trò lật hình tìm cặp（memory match）**

Lý do: luật ai cũng biết, mà số lá bài, thao tác lật, cách phán định khớp… đều dễ viết thành đặc tả. Lại ra được thứ chạy được ngay.

### Nửa đầu（cùng làm）

1. **Làm một lèo bằng vibe** — nhờ một câu mơ hồ cỡ “làm cho tôi trò lật hình tìm cặp” rồi ra được thứ chạy được
2. **Đem ra so với nhau** — nhìn thấy cả lớp cùng một yêu cầu mà ra những thứ khác nhau, và thấy những thứ không ai nhờ vẫn được gắn vào
3. **Nhận yêu cầu phát sinh** — thử nhét yêu cầu mới của chủ đầu tư vào bản vibe, và nhận ra mình không có gì để phán định là nó đã làm đúng hay chưa

### Nửa sau（làm bài）

- Tự viết đặc tả（what it does / screen / interactions / out of scope）, chia thành task rồi làm từng cái một
- Yêu cầu phát sinh thì xử lý bằng cách thêm vào đặc tả

### Định nghĩa hoàn thành（vạch của buổi này）

Tối thiểu là những thứ sau chạy được. Không cần đẹp, không cần hiệu ứng.

- [ ] Các lá bài có mặt trước mặt sau, xếp ra được
- [ ] Lật 2 lá và phán định được khớp / không khớp
- [ ] Có ít nhất một trong các yêu cầu phát sinh đã vào
- [ ] Tự nói được bằng lời của mình: lần này vibe và đặc tả khác nhau ở chỗ nào

### Không làm

- Bắt đầu ứng dụng đề tài riêng（từ buổi 3）
- Đưa hẳn quy trình làm việc nhóm vào

---

## Buổi 3: Làm việc nhóm（nửa đầu）（90 phút）

### Mục tiêu của buổi

Cả nhóm chốt được đề tài, vừa chạy vai trò và luồng Git / PR tối thiểu vừa bắt tay vào làm ứng dụng.

### Ràng buộc về đề tài（để khỏi phình）

Mỗi người / mỗi nhóm tự chọn đề tài, nhưng phải giữ những điều sau.

- Một tới vài màn hình
- Không dùng API ngoài（hoặc tối đa một cái）
- **Chốt trước một thao tác sẽ đem ra demo**
- Mục tiêu tới cuối buổi 4 không phải “hoàn hảo”, mà là **chạy được để demo**

### Nửa đầu（cùng làm）

- Khuôn phân vai trong nhóm（ví dụ: người gõ / người giữ đặc tả / người review）
- Luồng Git tối thiểu: nhánh feature → PR → một người review → merge
- Tập viết trước “một thao tác đem ra demo”
- Cần thì chạm sơ qua Rules và phần kết nối PR（xem `courses/vi/fundamentals/06` và `11`）

### Nửa sau（làm bài）

- Chốt đề tài（trong ràng buộc）
- Viết đặc tả tối thiểu（what it does / out of scope / một thao tác demo）
- Chuẩn bị repo và nhánh, bắt đầu làm

### Định nghĩa hoàn thành（vạch của buổi này）

- [ ] Nhóm đã chốt đề tài và “một thao tác đem ra demo”
- [ ] Đã có đặc tả tối thiểu（what it does / out of scope）
- [ ] Đã trải qua ít nhất một PR（hoặc một cách chia sẻ thay đổi tương đương）
- [ ] Có kết quả dở dang mà chạy được（một màn hình, hoặc một phần xử lý chính）

### Không làm

- Thiết kế quy mô lớn, dựng hạ tầng
- Chăm chút slide trình bày（để buổi 4）

---

## Buổi 4: Làm nốt và trình bày（90 phút）

### Mục tiêu của buổi

Hoàn thiện ứng dụng tới mức demo được, và chia sẻ trong một bài trình bày ngắn: “đã làm cái gì, làm bằng Cursor như thế nào”.

### Nửa đầu（cùng làm）

- Checklist hoàn thiện（chạy thử, bug chí mạng, README ngắn nhất, các bước demo）
- Khuôn trình bày（dự tính 3 phút）: vấn đề → đặc tả → demo → chỗ nào Cursor ăn / chỗ nào bị kẹt
- Xác nhận phân bổ thời gian（thời gian code còn lại so với khung trình bày）

### Nửa sau（làm bài）

- Hoàn thiện phần hiện thực
- Trình bày và demo
- Nhìn lại ngắn gọn（vibe so với đặc tả, cái gì ăn khi làm nhóm）

### Định nghĩa hoàn thành（vạch của buổi này）

- [ ] Demo được “một thao tác đem ra demo”
- [ ] Nhóm đã trình bày（đúng giờ, theo khuôn）
- [ ] Đã chia sẻ ít nhất một điều rút ra（ví dụ: chỗ nào đặc tả phát huy）

### Không làm

- Thêm tính năng lớn（chỉ trong mức không làm vỡ demo）
- Bắt buộc phải deploy lên production

---

## Quan hệ với tài liệu sẵn có

| Tài liệu | Vai trò |
|----------|---------|
| `courses/vi/fundamentals/00–05` | Tham chiếu và ôn lại cho buổi 1 |
| `courses/vi/fundamentals/06–19` | Chỉ tham chiếu chỗ cần（đừng làm hết） |
| `practice/` | Bài tập tay cho buổi 1 |
| Tài liệu này | Bản gốc về tiến trình của khóa thực hành（4 buổi） |

Tài liệu tự học nhắm tới “đi hết cơ bản rồi tới nâng cao”, còn khóa này nhắm tới “90 phút × 4 để ra kết quả”. Hai mục đích khác nhau, đừng lẫn.

## Còn chưa chốt

- [x] Agenda chi tiết từng buổi（kịch bản dẫn chương trình theo phút）→ `session-01.md` đến `session-04.md`
- [x] Bản đặc tả tối thiểu cho buổi 2 → ghi ở phần phụ lục của `session-02.md`
- [ ] Chỗ đặt bản khởi tạo / bản mẫu hoàn chỉnh cho buổi 2（nên tách khỏi `practice/`）
- [ ] Số người mỗi nhóm và cách vận hành repo ở buổi 3–4（dùng chung hay fork）
- [x] Bảng thời gian theo số người và thời lượng trình bày → ghi ở mục “Giới hạn số học viên” bên trên
- [x] Đường dẫn từ README tới tài liệu này

## Liên quan

- Bản đồ tự học: [../fundamentals/00-map.md](../fundamentals/00-map.md)
- Danh sách tài liệu khóa học: [../README.md](../README.md)
