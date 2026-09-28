# 21. Mục tiêu và vòng lặp（để agent tự lặp lại công việc）

Các chương trước là cách dùng **người nhờ 1 lần, kiểm tra 1 lần**. Chương này là cách dùng **agent tự lặp lại việc làm và kiểm tra cho tới khi đạt mục tiêu**.

Việc của người dùng chuyển từ nhờ từng lần một sang **xác định mục tiêu, cách kiểm tra, điểm dừng rồi theo dõi**.

## Những cơ chế sử dụng（dùng được trên máy cục bộ）

| Cơ chế | Làm gì | Chương |
|--------|--------|--------|
| **`/goal`** | Giao một mục tiêu dài hạn và để agent làm cho tới khi đạt | Chương này |
| **`/loop`** | Lặp lại cùng một chỉ thị theo khoảng thời gian cố định, hoặc cho tới khi ra kết quả đã định | Chương này |
| **Steering** | Thêm chỉ thị trong lúc agent đang làm, không cần dừng agent | Chương này |
| **Hook `stop` của Hooks** | Khi agent làm xong, tự động gửi chỉ thị tiếp theo | [08-hooks.md](08-hooks.md) |
| **Subagents** | Đối tượng nhận phần việc được cắt ra, như vai triển khai hay vai review | [14-subagents.md](14-subagents.md) |
| **Custom Mode** | Cho Skill luôn có hiệu lực trong suốt cuộc hội thoại | [01-modes.md](01-modes.md) |

Các cơ chế chạy trên cloud（Automations · Subscriptions · Projects）nằm ở [10-cloud-agents.md](10-cloud-agents.md).

## `/goal`

Thông thường agent xử lý mỗi tin nhắn như một việc riêng. Dùng `/goal` thì có thể giao **một mục tiêu dài, làm cho tới khi hoàn tất hẳn**.

```text
/goal fix all flaky tests and make CI green
```

- Kết hợp với Custom Mode thì có thể cho agent theo đuổi mục tiêu theo một quy trình đã định.
- Kết hợp với `/loop` thì có thể cho agent kiểm tra tình hình định kỳ.
- Trong CLI, nhấn `Ctrl+C` để tạm dừng mục tiêu.

> **`/goal` đang được phát hành dần**（tính đến tháng 9/2026）. Tài liệu chính thức ghi rằng nếu không thấy hiện ra thì hãy thử trong một chat mới.

## `/loop`

Đây là Skill có sẵn. Skill này chạy lặp lại chỉ thị **trên máy cục bộ theo khoảng thời gian cố định, hoặc cho tới khi ra kết quả đã định, hoặc cho tới khi bạn dừng**. Nếu không chỉ định khoảng thời gian thì agent sẽ tự quyết định khi nào và dựa vào đâu để tiếp tục.

Ví dụ trong tài liệu chính thức:
- Cứ 5 phút kiểm tra tình trạng deploy một lần
- Tiếp tục làm tính năng cho tới khi test qua

> Được thêm vào ở tháng 5/2026（3.5）.

## Steering（thêm chỉ thị giữa chừng）

Nếu gửi tin nhắn trong lúc agent đang làm, agent sẽ không dừng việc mà nhận chỉ thị đó **ở điểm ngắt của lần gọi tool tiếp theo**.

- IDE: gửi tin nhắn, hoặc nhấn `Enter` 2 lần. Khi muốn chen vào ngay thì dùng `Cmd+Enter`（theo cách ghi trong tài liệu chính thức）
- CLI: nhấn `Enter` trong lúc agent đang làm thì chỉ thị sẽ được đưa vào ở một điểm ngắt an toàn

Dùng khi chạy lâu, để chỉnh lại ngay lúc hướng đi bắt đầu lệch.

## Tạo vòng lặp bằng hook `stop`

Hook `stop` của Hooks được gọi khi agent làm xong việc. Khi hook trả về `followup_message`, Cursor sẽ **tự động gửi nội dung đó như tin nhắn tiếp theo của người dùng**.

- Ví dụ: chạy test, nếu có test thất bại thì trả về “Hãy sửa các test bị thất bại”. Nếu tất cả đều qua thì không trả về gì
- Số lần tự động gửi có giới hạn. **Mặc định là 5 lần**, có thể đổi bằng `loop_limit`（đặt `null` thì không giới hạn）
- Hook `subagentStop` khi subagent kết thúc cũng gửi được chỉ thị tiếp theo theo cách tương tự

Cách viết thiết lập xem [08-hooks.md](08-hooks.md).

## 4 điều cần quyết định khi xây dựng vòng lặp

| Điều cần quyết định | Ví dụ | Nếu không quyết định thì sẽ xảy ra |
|---------------------|-------|-------------------------------------|
| **Mục tiêu** | Hoàn thành toàn bộ task trong `tasks.md` | Không rõ phải làm tới đâu, phạm vi công việc bị lan rộng |
| **Cách kiểm tra** | Subagent vai review đối chiếu code của từng task với điều kiện hoàn thành | Chỉ cần nói “Đã xong” là đi tiếp |
| **Điểm dừng** | Dừng khi toàn bộ task đạt / dừng lại hỏi người khi cùng một task không đạt 3 lần | Không bao giờ kết thúc, hoặc dùng hết hạn mức |
| **Chỗ người cần xem** | Báo cáo giữa chừng, diff cuối cùng, hoạt động khi chạy thực tế | Không biết đã có gì được đưa vào mà vẫn để nguyên |

4 điều này dùng lại nguyên **yêu cầu và điều kiện hoàn thành** đã viết ở buổi 3 của khóa thực hành, cùng với **Rules** đã tạo ở buổi 3 và buổi 4. Vòng lặp không hẳn là một cơ chế mới, mà là giao cho agent việc “nhờ → kiểm tra” mà trước đây người dùng phải tự làm từng lần một.

## Lưu ý

- **Mức sử dụng**: chạy càng lâu thì càng tốn hạn mức. Hãy chia mục tiêu thành từng phần nhỏ và nhất định phải quyết định điểm dừng（[19-plans.md](19-plans.md)）
- **Nếu cách kiểm tra lỏng lẻo, agent sẽ đi tiếp mà chỉ giả vờ đã kiểm tra**. Hãy gắn `readonly: true` cho vai kiểm tra, và cho vai đó đánh giá bằng điều kiện hoàn thành
- **Nếu để subagent chạy ứng dụng để kiểm tra mỗi lần, có khi subagent sẽ bị dừng lại**. Khi thử với một game, vai kiểm tra chạy game trên trình duyệt để đánh giá đã dừng lại mà không trả về kết quả đạt / không đạt. Hãy cho vai kiểm tra đọc code để đánh giá, còn việc chạy thử để kiểm tra thì để người làm ở bước cuối, như vậy sẽ ổn định hơn
  > Đã kiểm tra trên máy thật（2026-09-27, lần thử buổi 6 của khóa thực hành）. Tài liệu chính thức không ghi.
- **Người dùng là người kiểm tra cuối cùng**. Kể cả khi agent báo cáo “Tất cả đều đạt”, hãy tự chạy thử để kiểm tra

## Thực hành

1. Chuẩn bị `tasks.md`（có điều kiện hoàn thành）cho một ứng dụng nhỏ（`/task-breakdown` ở [07-skills.md](07-skills.md)）
2. Tạo subagent vai review（[14-subagents.md](14-subagents.md)）
3. Gửi nội dung sau

```text
/goal Hãy hoàn thành lần lượt toàn bộ task trong tasks.md, từ trên xuống.
Mỗi khi xong 1 task, hãy cho subagent reviewer review xem code đã thỏa điều kiện hoàn thành chưa; nếu không đạt thì sửa rồi mới sang task tiếp theo.
Nếu cùng một task không đạt 3 lần thì dừng lại và hỏi tôi.
```

Tham khảo: [Agent overview（goals · steering）](https://cursor.com/docs/agent/overview) · [/loop（changelog 2026-05-20）](https://cursor.com/changelog/shared-canvases) · [Cloud Agents and Cursor Harness Improvements（2026-08-19）](https://cursor.com/changelog/08-19-26) · [Hooks](https://cursor.com/docs/hooks)

Quay lại: [00-map.md](00-map.md)
