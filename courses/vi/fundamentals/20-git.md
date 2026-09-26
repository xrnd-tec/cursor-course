# 20. Kết nối Git（branch · commit · PR · Issue）

Các thao tác Git trong Cursor dựa trên **panel Source Control** của VS Code. Cursor bổ sung thêm các tính năng AI lên trên nền đó.

Các bước **tạo branch → commit → gửi lên → tạo PR** đều làm được chỉ trên màn hình Cursor, không cần mở terminal.

| Nền tảng（Source Control của VS Code） | Phần Cursor bổ sung |
|---|---|
| Danh sách thay đổi · stage · commit · branch · Publish / Sync | **Tạo commit message**（nút ✨） |
| Hiển thị merge conflict | **Resolve in Chat**（Agent giải quyết conflict） |
| — | **Tạo PR bằng `gh pr create`** và dòng ghi nguồn `Made with Cursor` |
| — | **Cursor Blame**（dòng nào do AI viết. **Chỉ có ở gói Enterprise**） |

Tài liệu này lấy Windows làm chuẩn（phím của Mac ghi trong ngoặc）.

## Thuật ngữ（dành cho người mới dùng GitHub）

Đây là những từ xuất hiện trong khóa học. Không cần nhớ cơ chế chi tiết.

### Cơ bản

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Git** | Công cụ ghi lại lịch sử thay đổi của file. Panel Source Control của Cursor dùng Git |
| **GitHub** | Dịch vụ web để đặt repo Git lên internet và chia sẻ trong team |
| **Repo（repository）** | Tập hợp các file của một ứng dụng cùng với lịch sử thay đổi của chúng |
| **Branch** | Nơi làm việc để tiến hành thay đổi tách riêng khỏi main. Thay đổi trên branch không làm main thay đổi |
| **main** | Branch làm chuẩn của repo. Chỉ đưa vào đây những gì team đã kiểm tra |
| **Commit** | Ghi lại thay đổi thành một mốc. Mỗi lần ghi có kèm một message |
| **PR（pull request）** | Yêu cầu “Hãy kiểm tra xem có thể đưa thay đổi của branch này vào main hay không”. Tạo trên màn hình GitHub |
| **Merge** | Đưa thay đổi của PR vào main |

### Khi tạo repo

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Template repository** | Repo dùng làm gốc khi tạo repo mới. Nhấn **Use this template** để tạo một repo có sẵn các file giống hệt |
| **Collaborator** | Thành viên được mời với quyền ghi vào repo. Repo Private thì chỉ người được mời mới xem được |
| **Clone** | Sao chép repo trên GitHub về máy của mình |
| **GitHub CLI（`gh`）** | Công cụ để thao tác GitHub（như tạo PR hay Issue）bằng lệnh trong terminal. Agent dùng công cụ này để tạo PR và Issue |

### Khi chia sẻ thay đổi

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Stage** | Chọn các file sẽ đưa vào commit. Là nút **＋** trong panel Source Control |
| **Push（Publish Branch）** | Gửi branch và commit trên máy mình lên GitHub. Branch chưa gửi lần nào sẽ hiển thị **Publish Branch** |
| **Pull（Sync Changes）** | Lấy những thay đổi mới trên GitHub về máy mình. **Sync Changes** lấy về xong, nếu có commit của mình thì gửi lên luôn |
| **Files changed** | Tab trên màn hình PR để kiểm tra các dòng đã thay đổi |
| **Review / Approve** | Kiểm tra thay đổi của PR / kiểm tra xong và chấp thuận là “không có vấn đề”. Không thể Approve PR của chính mình |
| **Conflict** | Trạng thái 2 người cùng sửa một chỗ trong cùng một file, Git không tự gộp được |

### Khi hủy thay đổi

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Revert** | Hủy thay đổi của một PR đã merge. Nhấn **Revert** ở cuối màn hình PR trên GitHub thì một **PR mới để đưa thay đổi về như cũ** sẽ được tạo. Merge PR đó thì main trở về như cũ. Cần có quyền ghi vào repo |

### Khi quản lý task

| Thuật ngữ | Ý nghĩa |
|---|---|
| **Issue** | “Việc cần làm” đăng ký trên GitHub. Trong khóa học này, mỗi task tạo một Issue |
| **Người phụ trách（Assignee）** | Ai sẽ làm Issue đó. Tên hiển thị trong danh sách Issue |
| **Issue đang mở / đã đóng** | Issue chưa xong / Issue đã xong |
| **`Closes #số`** | Viết vào nội dung PR thì khi PR đó được merge vào main, Issue có số đó sẽ tự động đóng |
| **Số Issue** | Issue và PR dùng chung một dãy số. Nếu đã có 2 PR thì Issue tạo tiếp theo sẽ là #3 |

Tham khảo: [About Git（GitHub Docs）](https://docs.github.com/en/get-started/using-git/about-git) · [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) · [About branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) · [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) · [About merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) · [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) · [Creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) · [Reverting a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request)

## Mở panel Source Control

Nhấn biểu tượng **Source Control** ở thanh bên trái, hoặc `Ctrl+Shift+G`（Mac cũng là `Ctrl+Shift+G`）.

Các file đã thay đổi được liệt kê trong **Changes**, và biểu tượng hiển thị số lượng thay đổi. Nhấn vào file thì diff sẽ mở ra.

## Quy trình từ đầu đến cuối

### ① Tạo branch

Nhấn vào **tên branch ở góc dưới bên trái（thanh trạng thái）** → **Create new branch...** → nhập tên.

Chạy `Git: Create Branch...` từ command palette cũng cho kết quả tương tự. Đặt tên sao cho **nhìn vào là biết branch dùng để làm gì**, ví dụ `feature/add-timer`.

> **Chỉ tạo branch khi đang ở `main` và đã cập nhật `main` mới nhất.** Tạo branch từ `main` cũ thì về sau dễ bị conflict（→ ⑤）.

### ② Stage rồi commit

1. Di chuột lên file trong Changes rồi nhấn **＋**（Stage Changes）. **Chỉ chọn những file muốn đưa vào**
2. Nhấn **✨（sparkle）** ở ô nhập thì commit message sẽ được tạo từ diff và lịch sử của repo
3. Đọc lại, sửa nếu cần, rồi nhấn **Commit**

**Message được tạo ra chỉ là bản nháp.** Không commit nguyên như vậy mà chưa đọc.

> Nếu nhấn Commit khi chưa stage gì, tùy thiết lập mà Cursor có thể hỏi “Có stage tất cả không”.
> **Việc này dễ kéo theo cả những file không mong muốn（như file được sinh tự động）**, nên hãy tự chọn file để stage.

### ③ Gửi lên GitHub（Publish Branch / Sync Changes）

| Nút | Khi nào xuất hiện | Làm gì |
|---|---|---|
| **Publish Branch** | Khi branch vừa tạo **chưa được gửi lần nào** | Tạo branch trên GitHub và gửi lên |
| **Sync Changes** | Branch đã được gửi lên trước đó | Lấy về（pull）rồi gửi lên（push） |

Lần gửi đầu tiên có thể được yêu cầu đăng nhập GitHub. Cho phép trên trình duyệt xong thì sẽ quay lại Cursor.

### ④ Tạo PR

**Có thể nhờ Agent.** Agent chạy `gh pr create`（GitHub CLI）trong terminal để tạo PR.

```text
Hãy tạo PR từ branch hiện tại vào main.
Tiêu đề là “（đã làm gì）”.
Trong nội dung, hãy viết những việc đã làm và các điều kiện hoàn thành đã kiểm tra.
```

- Cần **đã cài GitHub CLI（`gh`）và đã chạy xong `gh auth login`**. `gh auth login` chạy theo kiểu hỏi đáp, nên **hãy tự chạy từ terminal（`` Ctrl+` ``）** chứ không nhờ Agent. Ngay sau khi cài, có trường hợp phải khởi động lại Cursor thì mới tìm thấy `gh`（cần kiểm tra trên máy thật）. Nếu chưa cài thì tạo PR trên giao diện web của GitHub（nút **Compare & pull request** xuất hiện ngay sau khi gửi branch lên）
- Cursor gắn dòng ghi nguồn **`Made with Cursor`** vào commit và PR tạo bằng `gh pr create`. Mặc định là ON. Có thể tắt ở **Cursor Settings → Git & PRs → Attribution**（trước bản 3.11 là **Agent → Attribution**）. Cũng có trường hợp quản trị viên của tổ chức đã tắt cho tất cả

Phần review sau khi tạo PR（người review / Bugbot）xem ở [11-bugbot-pr.md](11-bugbot-pr.md).

### ⑤ Sau khi merge, cập nhật main mới nhất

Khi PR đã được merge trên GitHub, máy của bạn vẫn còn ở trạng thái cũ.

1. Nhấn tên branch ở góc dưới bên trái → chuyển sang `main`（`Git: Checkout to`）
2. Nhấn **Sync Changes**（hoặc `Git: Pull`）

Việc tiếp theo thì **quay lại ① từ đây** và tạo branch mới.

## Quản lý task và người phụ trách bằng Issue

Khi làm theo team, nếu đưa task thành **Issue** trên GitHub thì có thể xem trong một danh sách **ai đang làm gì** và **việc gì đã xong**.

| Việc cần làm | Cách làm |
|---|---|
| Đưa task thành Issue | Trên GitHub chọn **Issues → New issue**. Hoặc `gh issue create --title "..." --body "..."` |
| Chọn người phụ trách | Chọn người ở mục **Assignees** bên phải Issue. Nếu tự nhận thì dùng `gh issue edit <số> --add-assignee "@me"` |
| Tìm Issue chưa có người phụ trách | `gh issue list --search "no:assignee"` |
| Đóng Issue khi PR xong | Viết **`Closes #số`** trong nội dung PR. Khi PR **được merge vào branch mặc định（main）**, Issue đó sẽ tự động đóng |

- Mỗi Issue có tối đa 10 người phụ trách. Người có thể được chọn làm người phụ trách là chính bạn và những người có quyền ghi vào repo（như Collaborator）
- Ngoài `Closes` còn dùng được `Fixes` / `Resolves`. **PR nhắm vào branch khác main thì Issue sẽ không đóng**

> Ở buổi 4 và buổi 5 của khóa học này, chúng ta dùng 2 Skill có sẵn trong template cho team. `/create-issues` đưa các task trong `docs/tasks.md` thành Issue（không tạo trùng Issue）, còn `/start-task` làm gộp các bước: chọn Issue chưa có người phụ trách → gán cho chính mình → tạo branch từ main mới nhất.

Tham khảo: [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) · [Assigning issues and pull requests](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users) · [gh issue edit](https://cli.github.com/manual/gh_issue_edit) · [gh issue list](https://cli.github.com/manual/gh_issue_list)

## Khi bị conflict（Resolve in Chat）

Khi 2 người cùng sửa gần một chỗ trong cùng một file, Git không tự gộp được và sẽ xảy ra **conflict**.

Nhấn **Resolve in Chat** trên màn hình conflict thì Agent sẽ đọc thay đổi của cả hai phía và đưa ra phương án giải quyết. **Hãy đọc phương án đó bằng diff** rồi mới nhấn Keep.

Khi PR trên GitHub hiện “This branch has conflicts”, cần bắt đầu từ việc lấy `main` về branch trên máy mình. Nhờ Agent là cách nhanh nhất.

```text
Hãy đưa bản main mới nhất vào branch hiện tại.
Nếu có conflict, hãy đưa ra phương án giải quyết theo hướng giữ lại thay đổi của cả hai phía.
Giải quyết xong thì commit, nhưng chưa push.
```

## Cursor Blame（tham khảo）

Tính năng hiển thị chồng lên git blame để biết dòng nào do Tab / Agent / người viết. **Chỉ có ở gói Enterprise**, và dùng được sau khi quản trị viên của team bật lên. Khóa học này không dùng tính năng này.

## Thực hành

1. Trong thư mục làm việc của mình, tạo branch `feature/practice-git` từ thanh trạng thái
2. Sửa 1 dòng trong một file bất kỳ, nhấn **＋** để stage → nhấn **✨** để tạo message → đọc lại rồi Commit
3. Kiểm tra trong panel Source Control rằng đã có thêm 1 commit
4. Chuyển về `main` và kiểm tra rằng thay đổi không còn hiển thị（chuyển lại branch thì thay đổi lại hiện ra）

**Không cần push.** Vui lòng không gửi lên repo tài liệu học.

Tham khảo: [Git | Cursor Docs](https://cursor.com/help/integrations/git) · [Cursor Blame](https://cursor.com/docs/integrations/cursor-blame) · [Source Control（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/overview) · [Branches（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees) · [Staging and committing（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/staging-commits) · [GitHub CLI](https://cli.github.com/)

> **Cần kiểm tra trên máy thật（chưa xác nhận trên Cursor）**: vị trí nút ✨, cách hiện yêu cầu đăng nhập khi Publish Branch, vị trí hiển thị Resolve in Chat, và việc Agent có hỏi phê duyệt khi chạy `gh` hay không（khi Run Mode là Auto-review）được viết dựa trên tài liệu chính thức và đặc tả của VS Code. Khi quay video buổi 3, hãy kiểm tra trên máy thật và sửa chương này nếu có điểm khác.

Tiếp theo: [21-goals-loops.md](21-goals-loops.md)
