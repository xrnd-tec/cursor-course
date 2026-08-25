# 1. Các mode（Agent / Plan / Debug / Multitask / Ask）

Ở ô nhập của panel Agent, bấm **`Shift+Tab`** là mode **chuyển lần lượt** sang cái kế tiếp.
Muốn chọn từ danh sách thì **bấm vào tên mode** ở góc dưới bên trái ô nhập, hoặc mở menu bằng `Ctrl+.`（Mac là `Cmd+.`）.

> **Phím tắt trong khóa này lấy Windows làm chuẩn.** Người dùng Mac đọc phần trong ngoặc.

> Lưu ý: đổi mode là bắt đầu một ngữ cảnh hội thoại mới cho mode đó. Khi đổi việc thì mở **chat mới** cũng là cách hay.

## Lúc nào dùng cái nào

Mặc định có **năm mode**（theo thứ tự thấy trên Cursor 3.16）. Bạn có thể thêm **Custom Mode** tự tạo vào đây（nói ở dưới）.

| Mode | Hợp với việc gì | Có sửa tệp không |
|------|-----------------|------------------|
| **Agent**（`Ctrl+I`） | Thêm tính năng, refactor, sửa bug, chạy test | Có |
| **Plan** | Việc lớn: thống nhất hướng đi trước rồi mới làm | Làm sau khi bạn duyệt kế hoạch |
| **Debug** | Truy bug khó tái hiện, vừa truy vừa thu thập bằng chứng | Có |
| **Multitask** | Chạy song song nhiều việc độc lập nhau | Có（song song） |
| **Ask** | Tra cứu, giải thích, bàn thiết kế（chưa muốn nó viết gì） | Không（chỉ đọc） |

### Khi phân vân

1. “Muốn biết bên trong có gì đã” → **Ask**
2. “Muốn chốt hướng đi trước” → **Plan**
3. “Sửa đi / làm đi” → **Agent**
4. “Tái hiện được nhưng khó lần ra nguyên nhân” → **Debug**
5. “Có mấy việc độc lập nhau” → **Multitask**

Lúc đầu chỉ cần thuộc **Ask và Agent** là đủ. Còn lại để khi nào cần hãy học.

## Custom Mode（tự thêm mode của mình）

Ngoài năm mode mặc định, bạn có thể **bật hẳn một Skill lên thành mode và để nó luôn có hiệu lực**（xem [07-skills.md](07-skills.md)）.

- Chọn Skill rồi bấm **`Alt+Enter`**（Mac là `Option+Enter`）, hoặc chọn **Use as Mode** trong menu
- Một badge hiện ra ở ô nhập, và **quy trình đó có hiệu lực suốt phiên làm việc**

Gọi Skill bằng dấu gạch chéo thì nó chỉ gắn vào đúng một tin nhắn; còn đưa lên Custom Mode thì nó phủ lên cả cuộc hội thoại. Hợp với kiểu “hôm nay chỉ làm review thôi”, hay “cứ viết theo đúng quy ước này giùm”.

Vì vậy “có năm mode” không phải con số cố định. Chính xác hơn là **năm mode mặc định, cộng thêm những cái bạn tự thêm**.

## Mode và model là hai thứ khác nhau

Ngay cạnh ô nhập có cả **mode**（năm cái ở trên）lẫn **model**（Auto, v.v.）nên rất dễ lẫn. Phân biệt cho rõ:

| | Quyết định điều gì | Đổi bằng |
|---|---|---|
| **Mode** | **Cách hành xử** của AI（có sửa tệp không, có ra kế hoạch trước không） | `Shift+Tab` |
| **Model** | **Chính bộ não AI** xử lý yêu cầu | `Ctrl+/`（Mac là `Cmd+/`） |

Đôi khi ở ô nhập còn một mục nữa kiểu **`High`**. Đó là mức **công sức dành cho suy nghĩ（reasoning effort）**, khác cả mode lẫn model. Cứ để mặc định là được.

### Auto là gì

Mặc định là **Auto**. Nó không có nghĩa “không chọn model”, mà là **Cursor Router tự chọn model cho từng request**. Nó phân loại kiểu việc và độ phức tạp, việc khó thì đẩy sang model mạnh, việc dễ thì đẩy sang model rẻ.

Có ba hướng tối ưu（với Teams / Enterprise, quản trị viên có thể giới hạn hoặc đặt giá trị mặc định）.

| Hướng | Nhắm tới |
|-------|----------|
| **Cost** | Giữ chất lượng mà ghìm chi tiêu token. Chạy model nào cũng cùng một mức tính phí |
| **Balance** | Chất lượng vừa phải cho công việc thường ngày. Phần đông chọn cái này |
| **Intelligence** | Chất lượng ngang tầm model cao nhất |

### Cứ để Auto là ổn

Cả lúc học lẫn lúc làm hằng ngày, **để Auto gần như không gặp vấn đề gì**. Chỉ có mấy trường hợp sau mới đáng tự chọn tay:

- **Khi muốn so sánh kết quả** — Auto **có thể chạy model khác nhau ở mỗi lượt**, nên thí nghiệm cần cùng điều kiện thì phải cố định lại
- **Khi thiết kế hoặc debug việc khó và thấy rõ là chưa đủ lực** — đổi lên model cao hơn
- **Khi team đã có quy định về chi phí**

> Tên và thế hệ model（GPT / Claude / Grok…）thay nhau vài tháng một lần. **Thay vì thuộc từng cái tên, nắm cơ chế “Auto đang tự chọn” sẽ dùng được lâu hơn.**

Tham khảo: [Auto](https://cursor.com/docs/models) · [Cursor Router](https://cursor.com/changelog/router)

## Về Multitask

Multitask **nằm trong menu mode**（cái thứ tư ở bảng trên）. Nhưng trong khi các mode khác quyết định “cách hành xử của cuộc hội thoại này”, riêng Multitask quyết định **làm từng việc một hay để nhiều agent làm cùng lúc**. Bản chất khác nhau, nên dù chung một menu vẫn nên nghĩ tách ra.

Nó cũng dùng được ở dạng lệnh gạch chéo `/multitask`.

### Làm được gì

- Những yêu cầu bình thường sẽ xếp hàng chờ, nay được **chạy song song bằng sub-agent bất đồng bộ**（bản thân sub-agent xem [14-subagents.md](14-subagents.md)）
- Chia một yêu cầu lớn thành nhiều mảnh nhỏ rồi giao cho nhiều agent
- Nhờ nó “multitask luôn, đừng chờ” với những tin nhắn đã nằm trong hàng đợi
- Ở Plan, đôi khi dùng được **Build in Parallel** để build song song những bước độc lập

Mở Agents Window rồi gõ như sau:

```text
/multitask Viết test cho module A, tiện thể cập nhật luôn README của module B
```

### Khi nên dùng / khi không

- **Hợp**: những việc độc lập với nhau（test của tệp này và tài liệu của module khác）
- **Không hợp**: một chuỗi sửa đổi mà thứ tự quan trọng, hoặc nhiều bên cùng động vào một tệp

Sửa song song trên cùng một nhánh thì có thể đụng nhau, nên khi cần hãy kết hợp với **worktree**（cây làm việc được tách riêng）.

Tham khảo: [Changelog 3.2（Multitask）](https://cursor.com/changelog/04-24-26) · [Multi-agent](https://cursor.com/help/ai-features/multi-agent)

## Chen lời khi đang chạy（steering）

Agent đang chạy dở bạn vẫn gửi tin nhắn để nắn hướng được. **Gửi vào không làm nó đứt giữa chừng; nó sẽ áp vào ở nhịp nghỉ giữa hai lần gọi tool.**

| Muốn gì | Làm thế nào |
|---------|-------------|
| Bổ sung chỉ dẫn mà vẫn để nó chạy | Cứ gửi（Send / bấm `Enter` hai lần） |
| Cho xử lý sau việc đang làm | `Enter` để xếp vào hàng đợi |
| Vượt hàng đợi, gửi ngay | `Ctrl+Enter`（Mac là `Cmd+Enter`） |

Nghĩ “không phải, không phải hướng đó” lúc nào là nói được lúc đó, khỏi phải dừng lại, nên đỡ phải làm lại từ đầu.

### `/goal`

`/goal` là lệnh giao một **mục tiêu dài hơi, làm tới khi đạt thì thôi**. Không kết thúc sau một lượt yêu cầu, mà dùng kiểu “sửa tiếp cho tới khi CI xanh”.

## Checklist thao tác

- [ ] Mở panel bằng `Ctrl+I`（Mac là `Cmd+I`）
- [ ] `Shift+Tab` để về Ask
- [ ] Ở Ask, gắn `@practice/calculator.js` rồi đặt câu hỏi
- [ ] Quay lại Agent và nhờ một thay đổi nhỏ
- [ ] Đọc diff
- [ ] Cần thì lùi lại bằng **Restore Checkpoint** cạnh tin nhắn

## Thực hành A（Ask）

Gửi ở mode Ask:

```text
@practice/ Liệt kê trách nhiệm của từng đoạn code trong thư mục này.
Chưa sửa gì cả.
```

## Thực hành B（Agent）

Gửi ở mode Agent:

```text
Thêm vào practice/calculator.js một hàm nhận thuế suất và trả về số tiền đã gồm thuế.
Đừng làm hỏng hành vi của các hàm sẵn có. Xong thì viết một comment nêu đúng một ví dụ dùng.
```

## Thực hành C（Plan）

Gửi ở mode Plan:

```text
Tôi muốn mở rộng practice/ thành một giỏ hàng đơn giản.
Hãy đưa ra kế hoạch tối thiểu để làm được: thêm món, tổng phụ, giảm giá, tổng gồm thuế.
Cho tôi xem kế hoạch trước rồi hãy viết code.
```

Tiếp theo: [02-shortcuts.md](02-shortcuts.md)
