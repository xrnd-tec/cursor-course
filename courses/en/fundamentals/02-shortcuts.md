# 2. The shortcuts worth memorising

These alone cover about 80% of daily work. Your setup may differ — if a key does nothing, check **Cursor → Keyboard Shortcuts**.

> **Shortcuts in this material are written Windows-first.** On Mac, read `Ctrl` as `Cmd` and `Alt` as `Option`（`Tab` and `Shift+Tab` are the same on both）.

## The nine you need

| Action | Windows | Mac | One line to remember |
|--------|---------|-----|----------------------|
| Open / close the Agent panel | `Ctrl+I` | `Cmd+I` | Call the AI（`Ctrl+L` is in the same family） |
| Cycle through modes | `Shift+Tab` | `Shift+Tab` | Agent→Plan→… |
| Mode menu | `Ctrl+.` | `Cmd+.` | Pick from a list |
| Switch model | `Ctrl+/` | `Cmd+/` | Auto ↔ a specific model |
| Inline edit | `Ctrl+K` | `Cmd+K` | Fix just this spot |
| Accept the Tab suggestion | `Tab` | `Tab` | Take the grey text |
| Accept one word only | `Ctrl+→` | `Cmd+→` | Take it a bit at a time |
| Send the selection to a **new** chat | `Ctrl+Shift+L` | `Cmd+Shift+L` | Start a fresh conversation carrying the selection |
| Pin a Skill as a mode | `Alt+Enter` | `Option+Enter` | Custom Mode（stays on for the whole session） |

## Handy to have

| Action | Windows | Mac |
|--------|---------|-----|
| Accept every change | `Ctrl+Enter` | `Cmd+Enter` |
| Reject every change | `Ctrl+Backspace` | `Cmd+Backspace` |
| Stop generating | `Ctrl+Shift+Backspace` | `Cmd+Shift+Backspace` |
| Command palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Send ahead of the queue | `Ctrl+Enter` | `Cmd+Enter`（`Enter` queues it for the next turn） |
| Toggle Design Mode | `Ctrl+Shift+D` | `Cmd+Shift+D`（while the browser is showing） |
| New chat | （the New Chat button on the panel / depends on your setup） | same as left |
| Reject a suggestion | `Esc`, or just keep typing | same as left |
| Move the Agent sidebar left / right | `Ctrl+E` | `Cmd+E` |

## How to think about diffs

- The Agent's changes are applied to your files as it works, so **read the diff and Undo anything you don't want**
- To accept, press **Keep**. The change bar at the bottom of the Agent panel also has `Undo` / `Keep` / `Review`
- Only the inline edit from `Ctrl+K` is labelled **Accept / Reject**（it means the same thing）
- To decide in one go: `Ctrl+Enter`（accept all）/ `Ctrl+Backspace`（reject all）
- To roll back further, use **Restore Checkpoint** next to the relevant message
- Even when you think you accepted everything, get into the habit of a final check with git or with your own eyes

## Exercise

1. Open `practice/greeter.js`
2. Select the body of the function → `Ctrl+K` → `Rewrite this as a more formal greeting`
3. Type on another line, and when the grey Tab suggestion appears, try both `Tab` and `Ctrl+→`
4. `Ctrl+I` → Ask → ask a question about the code you have selected

Reference: [Keyboard Shortcuts](https://cursor.com/docs/reference/keyboard-shortcuts)

Next: [03-context.md](03-context.md)
