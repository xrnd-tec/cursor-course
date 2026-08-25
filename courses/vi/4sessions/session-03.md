# Buổi 3: Thực hành làm việc nhóm, nửa đầu（90 phút）

> **Mục tiêu một câu của buổi này**
> Cả nhóm chốt đề tài, viết đặc tả, và ra được một PR

---

## Bảng thời gian

| Giờ | Phần | Nội dung |
|-----|------|----------|
| 0:00 | Nói mục tiêu | Hôm nay làm gì trong phần làm việc nhóm（5 phút） |
| 0:05 | Nửa đầu ① | Chia nhóm, chốt đề tài（15 phút） |
| 0:20 | Nửa đầu ② | Đặc tả tối thiểu và khuôn Git / PR（20 phút） |
| 0:40 | Nửa sau | Bắt tay vào làm + trải nghiệm PR（40 phút） |
| 1:20 | Tổng kết | Xác nhận tiến độ, giới thiệu buổi sau（10 phút） |

---

## 0:00 Nói mục tiêu（5 phút）

> “Từ hôm nay các bạn tự chọn đề tài và làm ứng dụng.
> Chỉ có bốn luật:
> ① Giữ đúng ràng buộc về đề tài ② Viết đặc tả trước ③ Ra một PR ④ Nhắm tới trạng thái demo được ở buổi 4”

Nhìn lại buổi trước（một câu）: đặc tả → chat mới → thêm từng cái một.

---

## 0:05 Nửa đầu ① — Chia nhóm, chốt đề tài（15 phút）

### Chia nhóm

- 2–3 người（điều chỉnh theo sĩ số）
- Nhóm một người cũng được（nhưng phải nghĩ cách cho thấy PR ở buổi 4）

### Ràng buộc về đề tài

Đưa ra cho học viên và bắt giữ đúng:

| Ràng buộc | Lý do |
|-----------|-------|
| Một tới vài màn hình | Phạm vi kịp xong trước buổi 4 |
| Không API ngoài（hoặc tối đa một cái） | Khỏi sa lầy vì khác môi trường |
| **Chốt trước “một thao tác đem ra demo”** | Để mục tiêu khỏi trôi |
| Hoàn thành = chạy được để demo（không cần hoàn hảo） | Hạ cánh trong thời gian có |

### Vài đề tài gợi ý（cho ai đang phân vân）

- Ứng dụng ToDo（thêm, đánh dấu xong, xóa）
- Oẳn tù tì（đấu với máy, đếm thắng thua）
- Ứng dụng đố vui（ra 3 câu rồi hiện tỉ lệ đúng）
- Đồng hồ hẹn giờ / bấm giờ
- Sổ ghi chú đơn giản（lưu bằng localStorage）

### Hoàn thành phần này

- [ ] Đã chia xong nhóm
- [ ] Đã chốt một đề tài
- [ ] Nói được “một thao tác đem ra demo” bằng một câu

> Có ai phân vân tới mức xài hết 15 phút thì giảng viên đề xuất một cái và chốt luôn.

---

## 0:20 Nửa đầu ② — Đặc tả tối thiểu và khuôn Git / PR（20 phút）

### Mẫu đặc tả（phát cho học viên）

Cùng cấu trúc với buổi trước. Cả nhóm cùng điền.

```markdown
# Tên ứng dụng: ____________

## What it does
- （gạch đầu dòng, 3–5 mục）

## Screen
- （nhìn thấy gì / bấm được gì）

## Interactions
- （người dùng làm gì thì xảy ra chuyện gì）

## Out of scope
- （cắt ra một cách rõ ràng）

## Một thao tác đem ra demo
- “Bấm ○○ thì thành △△”
```

### Luồng Git / PR tối thiểu（giảng viên demo）

> **Xác nhận tiền đề**: ở phần tổng kết buổi 2 đã đo thực tế `git status` và tài khoản GitHub.
> Nếu có từ 3 người trở lên chưa đạt, **chuyển PR sang tùy chọn** cũng được. Bản chất của buổi này
> không phải bản thân cái PR, mà là trải nghiệm “đưa thay đổi của mình cho người khác xem và xác nhận”,
> nên chỉ cần push nhánh lên rồi cho nhau xem diff cũng đã thành lập.

**Chuẩn bị repo:**

```bash
# Tạo thư mục cho từng nhóm, hoặc chuẩn bị một repo mới
mkdir team-app && cd team-app && git init
```

**Khuôn nhánh:**

```
main（không được làm hỏng）
  └── feature/xxx（nhánh làm việc）
```

**Khuôn PR（demo）:**

1. Cắt nhánh `feature/add-html-skeleton` từ `main`
2. Commit một thay đổi tối thiểu（chỉ khung HTML）
3. `gh pr create`（hoặc tạo PR trên giao diện GitHub）
4. Người review đọc diff rồi Approve → Merge

> “PR = điểm chia sẻ ‘tôi làm tới đây rồi’. Review thì không cần nhận xét sâu, ‘đọc diff rồi, OK’ là đủ.”

### Khuôn phân vai（đề xuất）

Trong nhóm có thể xoay vòng mỗi lần:

| Vai | Làm gì |
|-----|--------|
| Người gõ | Hiện thực bằng Cursor |
| Người giữ đặc tả | Viết đặc tả / viết câu nhờ cho Agent |
| Người review | Đọc diff của PR rồi OK hoặc đặt câu hỏi |

> Nhóm hai người thì luân phiên giữa người gõ và người review.

---

## 0:40 Nửa sau — Bắt tay vào làm + trải nghiệm PR（40 phút）

### Làm gì

1. **Điền mẫu đặc tả**（trong vòng 10 phút. Không cần hoàn hảo）
2. **Chuẩn bị repo / thư mục**
3. **Cắt nhánh `feature/` rồi bắt đầu làm**
4. **Commit một cái rồi ra PR**（ít nhất một cái）

### Những chỗ giảng viên đi quanh lớp cần để ý

| Tình huống | Xử lý |
|------------|-------|
| Chưa viết đặc tả đã lao vào code | Hỏi: “thao tác đem ra demo chốt chưa?” |
| Đặc tả to quá（từ 10 mục trở lên） | “Cắt xuống 3–5 mục. Thêm vào Out of scope” |
| Kẹt ở Git | Làm cùng họ từ đầu tới cuối: tạo nhánh cho tới tạo PR |
| Cả nhóm ai cũng gõ, không ai review | Nhắc: “ra được một PR thì phải có người đọc diff” |
| Một người ôm hết, nhóm không chạy | Nhắc chuyện xoay vòng vai |

### Mục tiêu của phần này

- [ ] Mẫu đặc tả đã điền xong
- [ ] Đã có repo（hoặc thư mục）
- [ ] Có ít nhất một commit
- [ ] Đã ra một PR（khó quá thì push nhánh lên rồi cho nhau xem diff cũng được）

---

## 1:20 Tổng kết（10 phút）

### Xác nhận tiến độ（mỗi nhóm một câu）

- Đề tài là gì?
- Một thao tác đem ra demo là gì?
- Hiện giờ đã làm được gì, buổi sau làm gì?

### Cái được của hôm nay

1. **Giữ đúng ràng buộc về đề tài**（làm nhỏ thôi）
2. **Điền đặc tả trước**（what it does + out of scope + một thao tác demo）
3. **PR = thói quen đọc diff**（không cần review hoàn hảo）

### Giới thiệu buổi sau

> “Buổi sau làm nốt rồi trình bày.
> Mục tiêu là trạng thái demo được ‘một thao tác đem ra demo’.
> Hãy ưu tiên giữ cho nó chạy được, hơn là thêm tính năng mới.”

### Việc làm trước buổi sau（tùy chọn）

- Làm tiếp phần hiện thực（đừng gắng. Nửa đầu 40 phút của buổi sau vẫn làm tiếp được）
- Bí quá thì đọc [`06-rules.md`](../fundamentals/06-rules.md) và thử đặt một Rule

---

## Checklist cho giảng viên（dùng trong ngày）

### Chuẩn bị trước
- [ ] Đã chốt cách chia nhóm（ngẫu nhiên / tự do / chỉ định）
- [ ] Mẫu đặc tả ở trạng thái phát được ngay
- [ ] Đã nắm kết quả đo Git ở phần tổng kết buổi 2（bao nhiêu người không chạy được `git status`, bao nhiêu người chưa có tài khoản GitHub）
- [ ] Nếu con số trên từ 3 người trở lên, đã quyết trước phương án: kéo dài phần demo Git ở nửa đầu ② thêm 10 phút và chuyển PR ở nửa sau sang tùy chọn
- [ ] Đã chốt cách vận hành repo cho từng nhóm（repo dùng chung / fork / chia thư mục）
- [ ] Đã cài `gh` CLI（nếu định tạo PR từ terminal）

### Quản lý thời gian
- Phần chốt đề tài mà sắp quá 15 phút thì giảng viên đề xuất và chốt luôn
- Phần demo Git ở nửa đầu ② mà không xong trong 5 phút thì chuyển sang “cứ làm thử đi” và đẩy sang nửa sau
- Vạch tối thiểu của nửa sau = điền xong mẫu đặc tả + 1 commit. Không tới được PR cũng không sao

### Những chỗ hay kẹt
| Chỗ kẹt | Xử lý |
|---------|-------|
| Không chốt được đề tài | Bắt chọn một cái trong danh sách gợi ý bên trên |
| Không biết thao tác Git | Tối thiểu: `git init` → `git add <tệp>` → `git commit` → `git checkout -b`（tránh `git add .` vì nó kéo theo cả những thứ được sinh ra không liên quan） |
| Không biết tạo PR | Cho xem các bước bấm nút PR trên giao diện web của GitHub |
| Nhiệt độ trong nhóm chênh nhau | Nêu rõ vai và hứa sẽ xoay vòng |
