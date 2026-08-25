# Cursor Course Workspace

<!-- Tiếng Việt -->

## Tiếng Việt

Tài liệu dành cho người **đã dùng Cursor đôi lần**, để một lần nắm chắc **panel hội thoại, các mode, phím tắt và cách tham chiếu bằng `@`**. Ngoài phần tự học còn có **khóa thực hành 90 phút × 4 buổi**.

**→ Bắt đầu ở [`courses/vi/`](courses/vi/)**

## English

Material for people who have **used Cursor a few times** and want to lock down **the chat panel, the modes, the shortcuts, and `@` references** in one pass. It also contains a **hands-on course of 4 sessions × 90 minutes**.

**→ Start at [`courses/en/`](courses/en/)**

---

## Repo layout · Cấu trúc repo

| Path | Role |
|------|------|
| [`courses/vi/`](courses/vi/) | Tài liệu khóa học（tiếng Việt） |
| [`courses/en/`](courses/en/) | Course material（English） |
| [`practice/`](practice/) | Sample code you edit by hand（English, shared by both languages） |
| [`.cursor/skills/`](.cursor/skills/) | Skills used in session 2（English） |

`practice/` and `.cursor/skills/` are kept in **English only**: both language tracks point at the same files, so there is a single source of truth for the code you edit.

## Quick start · Thử ngay（3 min）

1. `Ctrl+I`（Mac: `Cmd+I`）— open the Agent panel
2. `Shift+Tab` — switch to **Ask** mode
3. Send:

```text
@practice/calculator.js Explain what this file does in 3 lines
```

4. Then `Shift+Tab` back to **Agent**:

```text
Add a function to practice/calculator.js that applies a percentage discount. No tests needed
```

5. Read the diff. **Keep** to accept, **Undo** to roll back

> Shortcuts are written **Windows-first**, with Mac in parentheses.
> Phím tắt viết theo **Windows**, Mac để trong ngoặc.

## Official documentation

- [Agent](https://cursor.com/help/ai-features/agent)
- [Prompting / @ mentions](https://cursor.com/docs/agent/prompting)
- [Tab](https://cursor.com/docs/tab/overview)
- [Rules](https://cursor.com/docs/context/rules)
- [Skills](https://cursor.com/docs/skills)
- [Hooks](https://cursor.com/docs/agent/hooks)
- [MCP](https://cursor.com/docs/context/mcp)
- [Multitask（Changelog 3.2）](https://cursor.com/changelog/04-24-26)
