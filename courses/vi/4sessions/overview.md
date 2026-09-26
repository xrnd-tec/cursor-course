# Khóa thực hành: 90 phút × 5 buổi

`courses/vi/fundamentals/`（0–20）và `practice/` trong repo này là **tài liệu tự học thao tác Cursor**.
Tài liệu này là bản thiết kế tổng thể của **khóa thực hành（5 buổi）**, được vận hành riêng với tài liệu tự học.

> Ngày 2026-09-25, khóa học được đổi từ 4 buổi thành 5 buổi. Buổi 2 cũ（Vibe coding → phát triển theo spec）được tách thành 2 buổi, và mỗi buổi đều có thời gian trình bày. Buổi 3 và buổi 4 cũ được lùi thành buổi 4 và buổi 5.
> Số học viên dự kiến là **4 người**（phần làm việc nhóm là 1 nhóm）.

## Chi tiết từng buổi（kịch bản tiến hành theo từng phút）

Tài liệu này là thiết kế tổng thể. Khi dẫn buổi học, giảng viên dùng file của từng buổi.

| Buổi | File | Chủ đề |
|------|------|--------|
| Buổi 1 | [session-01.md](session-01.md) | Thao tác cơ bản（Ask → Agent → diff → Keep） |
| Buổi 2 | [session-02.md](session-02.md) | Vibe coding（làm trò lật hình tìm cặp và cả lớp cùng so sánh） |
| Buổi 3 | [session-03.md](session-03.md) | Phát triển theo spec（làm poker từ yêu cầu và trình bày） |
| Buổi 4 | [session-04.md](session-04.md) | Bắt đầu làm theo nhóm（repository / PR của rule / PR của yêu cầu và task） |
| Buổi 5 | [session-05.md](session-05.md) | Hoàn thiện và trình bày（trình bày từ main） |

## Mục tiêu của cả khóa

Sau khi học xong khóa này, học viên có thể làm được những việc sau.

1. Tự thực hiện được những chỉnh sửa nhỏ và thêm tính năng bằng các thao tác cơ bản của Cursor
2. Tự trải nghiệm giới hạn của “Vibe coding”, và giải thích, thực hành được rằng **quyết định yêu cầu trước rồi mới làm** thì kết quả ổn định hơn
3. Cả nhóm chọn được chủ đề, cho ứng dụng chạy qua những vòng ngắn và trình bày được

Tài liệu tự học sẵn có（`courses/vi/fundamentals/00–20`）chủ yếu dùng làm **tài liệu tham chiếu cho buổi 1** và **tài liệu ôn tập**. Không đưa toàn bộ phần nâng cao vào 5 buổi.

## Khuôn chung của một buổi（90 phút）

| Phần | Thời lượng ước tính | Nội dung |
|------|---------------------|----------|
| Giới thiệu mục tiêu | 5–8 phút | Chốt trong 1–2 câu “sau buổi này làm được gì” |
| Nửa đầu: vừa giảng vừa thực hành | 35–40 phút | Học viên làm theo phần demo của giảng viên. Không dừng giữa chừng, chạy trọn 1 “khuôn” |
| Nửa sau: làm bài | 35–40 phút | Cá nhân hoặc nhóm tái hiện và áp dụng đúng khuôn đó |
| Tổng kết | 5–8 phút | Cách làm hiệu quả của hôm nay + giới thiệu buổi sau |

Nếu nửa đầu kéo dài, nửa sau sẽ không còn đủ thời gian. Điều kiện hoàn thành của nửa đầu không phải là “giảng giải hoàn hảo”, mà là **đã chạy trọn 1 khuôn**.

## Số học viên

**Số học viên dự kiến là 4 người.** Ở buổi 2, mỗi người trình bày 2 lần（1 phút và 3 phút）; ở buổi 3, mỗi người trình bày 3 phút. Ở buổi 4 và buổi 5, 4 người tạo thành 1 nhóm（mỗi người đảm nhận 1 trong 4 vai trò）.

Nếu số học viên nhiều hơn, giới hạn ước tính（trên mỗi giảng viên）như sau.

| Ràng buộc | Cách tính | Giới hạn |
|-----------|-----------|----------|
| Phần trình bày ở buổi 2 và buổi 3 | Buổi 2: mỗi người 1 phút（khung 10 phút）và 3 phút（khung 15 phút）; buổi 3: mỗi người 3 phút（khung 12 phút） | 4–6 người（nếu vượt quá thì rút còn 2 phút mỗi người, hoặc cho xem trong từng bàn） |
| Khung trình bày ở buổi 5 | Mỗi nhóm 4 phút（gồm hỏi đáp）. Rút ngắn phần hoàn thiện để mở rộng khung lên 35 phút | **8 nhóm** |
| Hỗ trợ đi quanh lớp ở buổi 4 và buổi 5 | Số nhóm mà 1 giảng viên có thể hỗ trợ | **6–8 nhóm** |

---

## Buổi 1: Thao tác cơ bản（90 phút）

### Mục tiêu của buổi

Sử dụng đúng lúc các Mode, `@`, Tab / Ctrl+K / Agent của Cursor, và tự hoàn thành được một chỉnh sửa nhỏ.

### Nửa đầu（cùng thực hành）

- Toàn cảnh（khi nào dùng Tab / Ctrl+K / Agent）
- Chuyển Mode（tối thiểu Ask / Agent / Plan）
- Đưa file và thư mục bằng `@`
- Xem diff của Agent rồi Keep / Undo
- Tham chiếu: `courses/vi/fundamentals/00-map.md` đến `05-prompting.md`（không bắt đọc hết, chỉ đọc phần cần thiết）

### Nửa sau（làm bài）

- Các bài ngắn trong `practice/`（ví dụ: thêm hàm vào calculator, chuyển Mode giữa giải thích và triển khai）
- Mỗi người tự làm hết phần tương đương “Thử ngay” trong README theo tốc độ của mình

### Định nghĩa hoàn thành（mốc của buổi này）

- [ ] Chuyển qua lại giữa Ask và Agent để nhờ AI làm việc
- [ ] Đưa được đúng file mình muốn bằng `@`
- [ ] Kiểm tra diff của Agent và Keep / Undo được
- [ ] Hoàn thành ít nhất 1 bài trong `practice/`

### Không làm

- Đi sâu vào Rules / Skills / Hooks / MCP / Cloud Agents（nếu cần thì chỉ giới thiệu 1 câu）
- Bắt đầu phát triển ứng dụng thực tế

---

## Buổi 2: Vibe coding（90 phút）

### Mục tiêu của buổi

Làm trò lật hình tìm cặp bằng cách nhờ AI “làm cho ổn” mà không quyết định gì trước（Vibe coding）, và qua phần trình bày, xác nhận rằng **từ cùng một yêu cầu, mỗi người lại làm ra một thứ khác nhau**.

> **Không dựng buổi học theo hướng “Vibe coding thì sẽ hỏng”.** AI biết rất rõ trò lật hình tìm cặp,
> nên dùng Vibe coding vẫn làm xong bình thường（đã kiểm tra thực tế）. Chi tiết xem phần “Mục đích của buổi này” ở đầu [session-02.md](session-02.md).

### Tiến trình

1. **Làm trò lật hình bằng 3 dòng** — chỉ nhờ AI “làm cho ổn”
2. **Trình bày lần 1（mỗi người 1 phút）** — đặt các game vừa làm cạnh nhau để so sánh, xác nhận rằng từ cùng 3 dòng lại ra những thứ khác nhau
3. **Thêm yêu cầu phát sinh** — từ danh sách 8 yêu cầu, chọn yêu cầu chưa có trong game của mình để thêm vào, và nhận ra rằng không có tiêu chuẩn nào để đánh giá “đã thêm đúng hay chưa”
4. **Tự do cải tiến** — trải nghiệm điểm mạnh của Vibe coding
5. **Trình bày lần 2（mỗi người 3 phút）** — nói về việc đã xác nhận được yêu cầu mình chọn đã được thêm đúng hay chưa, và đã thêm những gì
6. **Tổng kết và câu hỏi ôn tập** — những gì đã xảy ra khi dùng Vibe coding, và câu hỏi ôn tập của buổi 1 và buổi 2

### Định nghĩa hoàn thành（mốc của buổi này）

- [ ] Trò lật hình của mình chạy được trên trình duyệt（hoặc nói được đã chạy tới đâu）
- [ ] Ở lần trình bày thứ 1, đã xem và so sánh game của cả lớp
- [ ] Ở lần trình bày thứ 2, đã nói về việc có xác nhận được yêu cầu mình chọn đã được thêm đúng hay chưa
- [ ] Nói được bằng lời của mình tính chất của Vibe coding（nhanh, không nhắm được, không xác nhận được）

### Không làm

- Viết yêu cầu（buổi 3）
- Làm việc nhóm（từ buổi 4）

---

## Buổi 3: Phát triển theo spec（90 phút）

### Mục tiêu của buổi

Làm một game có nhiều điều cần quyết định（poker rút 5 lá）bằng cách **viết yêu cầu trước rồi mới làm**, và trải nghiệm việc làm ra đúng thứ mình nhắm tới.

**Game này được chọn để khó hơn trò lật hình tìm cặp.** Poker có nhiều điều cần quyết định hơn hẳn（thứ tự các tay bài, so sánh 2 tay bài cùng loại, đổi bài, CPU, đặt cược）, nên nếu không viết yêu cầu thì không thể làm ra đúng thứ mình nhắm tới.
**Ranh giới không nằm ở “quy mô” mà ở “số điều cần quyết định”** — đây là điểm kết luận của buổi này.

### Tiến trình

1. **Viết yêu cầu** — dùng `/requirements` để viết những việc cần làm / màn hình / thao tác / những việc không làm
2. **Chia thành task và làm trước 2 task** — dùng `/task-breakdown`, 1 task = 1 chat
3. **Viết 1 rule phát triển** — đưa “điều kiện hoàn thành” và “không thay đổi phần khác” vốn phải viết mỗi lần vào `.cursor/rules/`
4. **Hoàn thành game** — các task còn lại và yêu cầu phát sinh
5. **Trình bày（mỗi người 3 phút）** — cho xem game poker và giới thiệu 1 điều trong mục “những việc không làm”
6. **Tổng kết, câu hỏi ôn tập, kiểm tra chuẩn bị cho buổi sau**（Source Control, tài khoản GitHub）

### Định nghĩa hoàn thành（mốc của buổi này）

Tối thiểu những điều sau phải chạy được. Không cần đẹp, không cần hiệu ứng.

- [ ] 5 lá bài được chia và hiện trên màn hình
- [ ] Chọn được lá bài để đổi
- [ ] Hiện tên tay bài
- [ ] **Đã có file `.cursor/rules/task-cycle.mdc`**
- [ ] Nói được bằng lời của mình Vibe coding và phát triển theo spec khác nhau ở điểm nào

### Tài liệu phát

**Không phát “đặc tả tối thiểu” cho học viên.** Học viên tự viết yêu cầu.
Tài liệu phát chỉ có **bảng độ mạnh của các tay bài**（10 tay bài, có hình lá bài）, và bảng này được vẽ trên slide.
Yêu cầu mẫu nằm ở phụ lục của kịch bản, và **chỉ dùng để hỗ trợ học viên không viết được**.

### Không làm

- Bắt đầu ứng dụng theo chủ đề riêng（từ buổi 4）
- Áp dụng đầy đủ quy trình làm việc nhóm

---

## Buổi 4: Bắt đầu làm theo nhóm（90 phút）

### Mục tiêu của buổi

Cả nhóm（4 người）dùng chung 1 repository và bắt tay vào phát triển ứng dụng, **trong đó mọi thay đổi đều được chuyển giao qua PR**.

> **Buổi này không phải là buổi học Git.** Điều muốn truyền đạt chỉ có 1: “chuyển giao thay đổi theo cách mà người khác kiểm tra được”.
> Chi tiết xem phần “Luận điểm của buổi này” ở đầu [session-04.md](session-04.md).

### Ràng buộc về chủ đề（để phạm vi không bị phình ra）

**Chọn chủ đề từ danh sách giảng viên chuẩn bị（5 chủ đề gần với dự án thực tế và thú vị khi thao tác: gọi món trên điện thoại / đặt ghế rạp chiếu phim / bốc thăm khuyến mãi / trắc nghiệm gợi ý sản phẩm / máy bán hàng tự động）.** Làm như một dự án có khách hàng đặt hàng, và đặt trọng tâm của yêu cầu vào “những điều không hỏi khách hàng thì không quyết được”. Có thể chọn chủ đề ngoài danh sách nếu thỏa mãn các ràng buộc sau.

- Chạy chỉ bằng trình duyệt（HTML + JS, không dùng Node.js）
- 1 màn hình, không dùng API bên ngoài
- **Quyết định trước 1 thao tác sẽ cho xem khi trình bày**
- Mục tiêu đến cuối buổi 5 không phải là “hoàn hảo”, mà là **chạy được để demo**

### Nửa đầu（cùng thực hành）

- Vai trò trong nhóm（Tech Lead / PM / Engineer / QA）và quy tắc PR（người tạo PR không tự merge / không commit thẳng vào main）
- Tạo repository của nhóm từ template của giảng viên, mọi người cùng clone
- **PR đầu tiên là rule của buổi 3**（+ 1 dòng dành cho nhóm）. Sau khi merge và Sync, rule có hiệu lực trong Cursor của mọi người
- Git dùng panel Source Control của Cursor（branch / ✨ commit message / Publish）, PR dùng `gh pr create` qua Agent hoặc màn hình GitHub（`courses/vi/fundamentals/20`）

### Nửa sau（làm bài）

- Cả nhóm viết yêu cầu và task（`/requirements` → `/task-breakdown`）, mọi người đọc mục “những việc không làm” trong PR
- Dùng `/create-issues` để chuyển task thành Issue, mỗi người nhận task của mình bằng `/start-task` rồi mới bắt đầu
- Merge task 1（cho tới khi hiện màn hình）qua PR, sau đó mỗi người bắt đầu phần việc của mình

### Định nghĩa hoàn thành（mốc của buổi này）

- [ ] Máy của mọi người trong nhóm đều có repository, và đã nhận được `.cursor/rules/team.mdc`
- [ ] Yêu cầu（những việc cần làm / những việc không làm）và task đã được merge qua PR, và task đã được chuyển thành Issue
- [ ] Task 1 đã được merge, và màn hình hiện ra trên `main` ở máy của mọi người
- [ ] Người tạo PR và người merge là 2 người khác nhau

### Không làm

- Giảng về cơ chế và lệnh của Git
- Thiết kế quy mô lớn, xây dựng hạ tầng
- Đầu tư làm slide trình bày

---

## Buổi 5: Hoàn thiện và trình bày（90 phút）

### Mục tiêu của buổi

Chạy được “1 thao tác sẽ cho xem khi trình bày” **trên main**, cả nhóm trình bày trong 5 phút, và nói được trong 1 câu điều gì đã thay đổi qua cả khóa học.

### Nửa đầu（hoàn thiện）

- Đưa các task còn lại vào theo cùng luồng PR như buổi 4（55 phút）. **Không thêm chức năng mới**
- Mỗi lần merge, QA chạy thử 1 thao tác đó trên main
- **Dừng merge lúc 1:00**, cập nhật main mới nhất trên máy dùng để trình bày và chạy thử 1 thao tác đó

### Nửa sau（trình bày và nhìn lại）

- Trình bày 5 phút + hỏi đáp 5 phút（khuôn: thứ đã làm → 1 thao tác → những việc không làm → điều làm tốt → điều gặp khó khăn. 4 người chia nhau trình bày）
- Nhìn lại: qua 5 buổi, “thứ đưa cho AI / cho người khác” đã thay đổi như thế nào（`@file` → 3 dòng → yêu cầu và rule → PR → main）

### Định nghĩa hoàn thành（mốc của buổi này）

- [ ] Đã demo “1 thao tác sẽ cho xem khi trình bày” từ main（nếu không chạy được thì nói đã định làm gì）
- [ ] Cả nhóm đã trình bày（đúng giờ, theo khuôn）
- [ ] Đã viết phần nhìn lại và chia sẻ ít nhất 1 điều

### Không làm

- Thêm chức năng mới（ngoài những gì có trong tasks.md）
- Deploy lên môi trường production

---

## Quan hệ với tài liệu sẵn có

| Tài liệu | Vai trò |
|----------|---------|
| `courses/vi/fundamentals/00–05` | Tham chiếu và ôn tập cho buổi 1 |
| `courses/vi/fundamentals/06–20` | Chỉ tham chiếu phần cần thiết（không làm hết）. Buổi 4 và buổi 5 dùng `20-git` |
| `practice/` | Bài luyện tập cho buổi 1 |
| Tài liệu này | Bản gốc về tiến trình của khóa thực hành（5 buổi） |

Tài liệu tự học nhắm tới “đi hết từ cơ bản đến nâng cao”, còn khóa này nhắm tới “ra kết quả trong 90 phút × 5 buổi”. Mục đích của 2 loại tài liệu khác nhau, không nên nhầm lẫn.

## Những điều chưa chốt và cần làm tiếp

- [x] Agenda chi tiết từng buổi（kịch bản dẫn buổi học theo từng phút）→ `session-01.md` đến `session-05.md`
- [x] Tài liệu phát của buổi 3 → **chỉ có bảng độ mạnh của các tay bài**（vẽ trên slide）. Học viên tự viết yêu cầu. Bản mẫu nằm ở phụ lục của kịch bản（dùng để hỗ trợ）
- [x] Nơi đặt bản khởi tạo / bản mẫu hoàn chỉnh của buổi 2 và buổi 3 → **không cần**. Học viên tự tạo trong `session02/`（buổi 2）và `session02-spec/`（buổi 3）（đã thêm vào `.gitignore`. Tên thư mục được giữ nguyên để khớp với skill trong repo phân phối）
- [ ] Chạy thử toàn bộ buổi 2 và buổi 3（kiểm tra trên máy thật mốc hoàn thành, yêu cầu phát sinh và rule ở chương 4 của buổi 3）
- [x] Số người mỗi nhóm và cách vận hành repository ở buổi 4–5 → **4 học viên thành 1 nhóm（nếu đông thì 3–4 người）. Mỗi nhóm tạo 1 repository từ template của giảng viên và mời các thành viên làm Collaborator**（không fork）. Git chủ yếu dùng panel Source Control của Cursor, PR dùng `gh pr create` qua Agent hoặc màn hình GitHub
- [x] Bảng thời gian theo thời lượng trình bày và số người → ghi ở mục “Số học viên” bên trên
- [x] Đường dẫn từ README tới tài liệu này

## Liên quan

- Bản đồ tự học: [../fundamentals/00-map.md](../fundamentals/00-map.md)
- Danh sách tài liệu khóa học: [../README.md](../README.md)
