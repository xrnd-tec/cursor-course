# Course material（English）

> **Cursor's interface is in English, so every on-screen label in this material is left in English**
> — Ask, Agent, Keep, Undo, Settings, Run Mode and the rest. They are quoted exactly as they appear.
>
> **Shortcuts are written Windows-first, with Mac in brackets.**
> For example `Ctrl+K`（Mac: `Cmd+K`）. Keys that are identical on both, like `Tab` and `Shift+Tab`, get no brackets.

| Path | Contents |
|------|----------|
| [fundamentals/](fundamentals/) | Self-study lessons on using Cursor（0–19） |
| [4sessions/](4sessions/) | The hands-on course（90 minutes × 4） |

## How to use it

### Studying on your own

1. Open the chat panel and work through this repo alongside the AI（**recommended**）
2. Read [fundamentals/](fundamentals/) from the top
3. Do the **Exercise** at the end of each lesson, in [`practice/`](../../practice/)
4. When an operation isn't clear, just ask in the panel

Read the basics（0–5）in order. The advanced material（6–19）is a reference to look things up in — open the chapter you need, when you need it.

### If you are running the class

The canonical source for the running order is [`4sessions/overview.md`](4sessions/overview.md). Session 1 refers to `fundamentals/00`–`05`.

## Basics

| # | File | Contents | Time |
|---|------|----------|------|
| 0 | [00-map.md](fundamentals/00-map.md) | The shape of Cursor and the settings to get right first | 10 min |
| 1 | [01-modes.md](fundamentals/01-modes.md) | Agent / Ask / Plan / Debug / Multitask | 15 min |
| 2 | [02-shortcuts.md](fundamentals/02-shortcuts.md) | The shortcuts worth memorising | 10 min |
| 3 | [03-context.md](fundamentals/03-context.md) | Passing context with `@` | 15 min |
| 4 | [04-tab-and-inline.md](fundamentals/04-tab-and-inline.md) | Tab suggestions and inline editing | 15 min |
| 5 | [05-prompting.md](fundamentals/05-prompting.md) | Asking well | 10 min |

## Advanced（look it up）

No need to read in order. **Open the chapter when you need it.**

| When you want to… | Read |
|-------------------|------|
| Cursor keeps starting into the Agents Window / change the interface language | [00. The shape of Cursor](fundamentals/00-map.md) |
| Be asked for confirmation less often when the AI runs commands | [13. Secrets and execution limits](fundamentals/13-safety-ignore.md) |
| Stop retyping the same instruction every time | [06. Project Rules](fundamentals/06-rules.md) |
| Have the AI remember a fixed procedure | [07. Skills](fundamentals/07-skills.md) |
| Automatically block dangerous commands | [08. Hooks](fundamentals/08-hooks.md) |
| Connect Cursor to issues, a database or another tool | [09. MCP](fundamentals/09-mcp.md) |
| Keep heavy work moving while you're away | [10. Cloud Agents](fundamentals/10-cloud-agents.md) |
| Automate PR review | [11. Bugbot and PR review](fundamentals/11-bugbot-pr.md) |
| Run several agents at once | [12. Agents Window and Worktrees](fundamentals/12-agents-window.md) |
| Keep the AI away from secrets | [13. Secrets and execution limits](fundamentals/13-safety-ignore.md) |
| Hand investigation or verification to another agent | [14. Subagents](fundamentals/14-subagents.md) |
| Ship one set of settings to the whole team | [15. Plugins](fundamentals/15-plugins.md) |
| Point at the screen to get the UI fixed | [16. The browser and Design Mode](fundamentals/16-browser-design.md) |
| Run Cursor from CI or a script | [17. The CLI](fundamentals/17-cli.md) |
| Trigger it from Slack or an issue | [18. Integrations](fundamentals/18-integrations.md) |
| Know how far the free plan goes, and what happens when you run out | [19. Plans and usage](fundamentals/19-plans.md) |

## Where you get your hands dirty

[`practice/`](../../practice/) is a small shopping cart that is broken. Open `index.html` and you can see exactly what's wrong on screen.

The code and the interface in `practice/` are **kept in English**, shared by both the English and the Vietnamese track.
