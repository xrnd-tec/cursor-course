# 12. Agents Window and Worktrees（recommended）

`/multitask` itself was covered in [01-modes.md](01-modes.md). This chapter only covers **the place you run it（the Agents Window）** and **the mechanism that prevents collisions（worktrees）**.

## The Agents Window is “the other view”

Cursor has an **IDE view**（the familiar editor）and the **Agents Window**, and you move between them（→ [00-map.md](00-map.md)）.

The reliable way to open it is the command palette — `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ **Agents Window**. **You can go back to the IDE view at any time, and you can keep both open at once.** If Cursor keeps starting into the Agents Window, the fix is in “Settings worth getting right first” in [00-map.md](00-map.md).

### What's in the Agents Window

| | Contents |
|---|---|
| **Agent tabs** | Several chats at once, **side by side or in a grid**. They can span repos |
| **Built-in browser** | Open the running app and let the Agent drive it（→ [16-browser-design.md](16-browser-design.md)） |
| **Design Mode** | Point at an element on screen and ask for a fix. `Ctrl+Shift+D` |
| **Choice of runtime** | Local / worktree / cloud / remote SSH |

The essential point of this screen is that you can choose where an agent runs — not just locally, but in a worktree or on the cloud.

### More often than not, you don't need it

**If one person is doing one thing, the IDE view is fine.** The built-in browser opens there too.

The Agents Window is worth opening only in one of these two cases:

- **You want several agents running at once**（side by side, so you can watch progress）
- **You want to run somewhere other than locally**（worktree / cloud / remote SSH）

There's no need to think “there's a new screen, so I have to use it”.

> `Ctrl+Shift+A`（Mac: `Cmd+Shift+A`）is bound to **toggling line comments** and similar in Cursor 3.16 — it is not the Agents Window.

## Worktrees

A git worktree lets you **check out several branches of the same repo into separate directories at the same time**. When you run agents in parallel, it stops them fighting over the same files.

Cursor has actions for worktrees too.

| Action | What it does |
|--------|--------------|
| Open new window in worktree | Open the worktree folder in a new window |
| Open terminal in worktree | Open a terminal at the worktree |
| Copy worktree path | Copy the worktree's path |

## Don't confuse the three

| Term | What it decides |
|------|-----------------|
| **Agents Window** | **Where you watch** several agents |
| **`/multitask`** | Whether the work happens **at the same time**（→ [01-modes.md](01-modes.md)） |
| **Worktrees** | **How isolated** the work is |

“Parallel” and “isolated” are different things. **Parallel without isolation means several agents writing to the same file and breaking it.**

## When to use what

- Two unrelated jobs at once → `/multitask`
- Experimenting safely in parallel on the same file → **worktree**（a separate checkout）
- Fixing one file locally → the ordinary Agent panel is plenty. Don't parallelise

## Exercise

Ask:

```text
@courses/en/fundamentals/01-modes.md
Give one example where combining Multitask with a worktree is a good idea,
and one example where it isn't.
```

If you have time, open the Agents Window and try `/multitask` once with two small unrelated requests.

Reference: [Agents Window](https://cursor.com/docs/agent/agents-window) · [Worktrees](https://cursor.com/docs/configuration/worktrees)

Next: [13-safety-ignore.md](13-safety-ignore.md)
