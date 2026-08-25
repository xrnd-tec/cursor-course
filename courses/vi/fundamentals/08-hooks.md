# 8. Hooks

Hook là phần **tự động hóa và hàng rào an toàn** chen vào vòng đời của Agent. Khác với phương châm（Rules）hay quy trình（Skills）, Hook dùng shell hoặc script nên **cho phép, từ chối, chỉnh sửa và ghi nhật ký** được.

## Đặt ở đâu

| Cấp | Tệp cấu hình | Ví dụ script |
|-----|--------------|--------------|
| Enterprise | Thư mục cấu hình chung của hệ điều hành | Quản trị viên phát xuống |
| Team | Dashboard trên cloud（chỉ Enterprise） | Phát cho toàn bộ thành viên |
| Dự án | `.cursor/hooks.json` | `.cursor/hooks/*.sh` |
| Người dùng | `~/.cursor/hooks.json` | `~/.cursor/hooks/*.sh` |

**Càng ở trên càng mạnh**（Enterprise → Team → dự án → người dùng）. Muốn chia sẻ trong team thì nên dùng hook cấp dự án.

## Những event hay dùng（thu hẹp lại cho việc học）

| Event | Dùng để làm gì |
|-------|----------------|
| `beforeShellExecution` | Chặn hoặc hỏi lại trước những lệnh nguy hiểm |
| `afterFileEdit` | Format sau khi sửa tệp, v.v. |
| `beforeSubmitPrompt` | Kiểm tra prompt có lọt thông tin bí mật không |
| `sessionStart` | Chuẩn bị lúc bắt đầu phiên |

Ngoài ra còn có: trước/sau khi chạy tool（`preToolUse` / `postToolUse` / `postToolUseFailure`）, trước/sau sub-agent（`subagentStart` / `subagentStop`）, trước/sau khi chạy MCP, trước khi đọc tệp（`beforeReadFile`）, sau khi Agent trả lời（`afterAgentResponse`）, trước/sau gợi ý Tab, và khi mở workspace. Lúc đầu chỉ cần đúng một cái là đủ.

## Hình dung tối thiểu

```json
{
  "version": 1,
  "hooks": {
    "beforeShellExecution": [
      {
        "command": ".cursor/hooks/check-shell.sh"
      }
    ]
  }
}
```

Dạng cơ bản của Hook là **đọc JSON từ stdin và trả JSON ra stdout**（chi tiết xem tài liệu chính thức hoặc skill create-hook）. An toàn nhất là bắt đầu bằng một hook chỉ quan sát, chỉ in log ra.

Mỗi Hook gắn thêm được những tùy chọn sau.

| Tùy chọn | Ý nghĩa |
|----------|---------|
| `type` | `"command"`（mặc định）hoặc `"prompt"`. Cái sau là **để LLM phán đoán chứ không chạy script** |
| `matcher` | Thu hẹp đối tượng（loại tool, loại sub-agent, mẫu lệnh） |
| `timeout` | Số giây |
| `failClosed` | Đặt `true` thì **không cho đi qua** khi Hook lỗi |

Trong JSON trả về, trường `permission` nhận `allow` / `deny` / `ask`. Thoát với mã `2` được xử lý y như `deny`.

## Lưu ý

- Chặn hết khi lỗi（`failClosed: true`）dễ làm cả việc phát triển đứng lại. Mặc định là “lỗi thì vẫn cho đi qua”
- Nên đi theo thứ tự: quan sát trước, thấy cần thì mới từ chối
- Đừng để secrets lọt vào log của Hook

## Thực hành（đọc và thiết kế）

Ở mode Ask:

```text
Cho repo này, hãy viết thiết kế một Hook dùng beforeShellExecution
chỉ để từ chối đúng hai lệnh “rm -rf /” và “git push --force”.
Chưa tạo tệp nào cả.
```

Thấy hướng đi hợp lý rồi thì nhờ Agent viết thật.

Tham khảo: [Hooks](https://cursor.com/docs/hooks)

Tiếp theo: [09-mcp.md](09-mcp.md)
