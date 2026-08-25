# 0. The shape of Cursor

Cursor is a VS Code-family editor with **an AI that can read, write and run code** bolted on.

## Three ways in（learn these and a lot of confusion goes away）

| Way | What it's for | Typical moment |
|-----|---------------|----------------|
| **Tab** | Suggests what comes next while you type | Finishing a function, imports, repeated patterns |
| **Inline edit（`Ctrl+K`）** | Changes only the selection | “Make this function async”, “Reword this” |
| **Agent panel（`Ctrl+I`）** | Works across several files while you talk | Adding a feature, investigating, refactoring, fixing bugs |

The old “Chat / Composer” split is no longer the centre of gravity; today it's **the Agent panel plus mode switching**.

## Two views（knowing this first saves confusion）

Cursor has **two screen layouts**, and you move between them. **It isn't a choice of one or the other.**

| | **IDE view** | **Agents Window** |
|---|---|---|
| Looks like | The familiar editor. Code in the middle, Agent panel to the side | Agent-centric. Chats laid out side by side |
| Suits | **Reading and writing code yourself** | Running several jobs in parallel, checking results in a browser |
| Contains | Editor, terminal, Agent panel | Agent tabs（side by side）, the **built-in browser**, Design Mode |

- **Switching**: `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ `Agents Window`
- **You can return to the IDE view at any time, and keep both open at once**

**Day to day, the IDE view is enough.** The built-in browser opens there too, so you don't need to switch views just to check something works.

The Agents Window earns its keep when you **want several agents running at once**, or **want to run somewhere other than your own machine（worktree / cloud / remote SSH）**. As long as one person is doing one job, you won't miss it.

> More detail in [12-agents-window.md](12-agents-window.md); the browser is in [16-browser-design.md](16-browser-design.md).

## Settings worth getting right first

This course assumes **the IDE view plus the Agent panel**. Sorting out three things up front — how it starts, the language, and the approval level — makes everything afterwards lighter.

### Make Cursor start into the IDE view

Recent builds sometimes open straight into the **Agents Window**. That's a product change, not a fault on your machine.

1. Go to **Cursor Settings → General → Startup → Window Restoration** and choose **Last Used Windows**
2. Switch to the **IDE view** before you quit Cursor. Quit with the Agents Window in front and it will open there again next time

Search Settings for `startup` and you'll find it.

In the older UI, the advice was to turn off **Cursor Settings → Agents → Open Agents Window on startup**. As of 3.12 that item moved and was renamed. And turning it off doesn't mean “always the IDE” — it means **restore the window you used last**. Which is why quitting from the IDE view is the part that matters.

> Per community support guidance（July–August 2026）. No dedicated page found in the official documentation.
> Reference: [Stop cursor from opening into agents window](https://forum.cursor.com/t/stop-cursor-from-opening-into-agents-window/166472)

### About the interface language

Cursor inherits VS Code's language packs. To see which display languages are available on your machine, in the **IDE view**:

1. `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）
2. Type `Configure Display Language`
3. Look at the list

One thing worth knowing: **Cursor's own surfaces — Agent, Chat, Cursor Settings — are still almost entirely in English as of August 2026**, even if you do change the display language. Language packs only reach what Cursor inherits from VS Code. This course is written against the English wording you see on screen.

If `Configure Display Language` doesn't appear, switch back to the **IDE view** and try again — the Agents Window's command palette sometimes doesn't find it.

> Reference: [I can't change the interface language](https://forum.cursor.com/t/i-cant-change-the-interface-language/165625)（community support）

### The approval level（Run Mode）

This decides how far the Agent may go without asking when it calls the terminal or MCP. Under **Settings → Agents → Approvals & Execution**.

| Run Mode | Behaviour | Who it suits |
|----------|-----------|--------------|
| **Auto-review** | Anything that looks safe runs by itself. Whatever can run in the sandbox does. The rest is auto-reviewed, and you're only asked when it really matters | **Recommended for individual work** |
| **Allowlist** | Only what's on the allowlist runs automatically | When you want to decide what's permitted yourself |
| **Run Everything** | Essentially everything runs without asking | Only when you accept the risk |

Cursor also recommends **Auto-review** for most users: safe commands run in the sandbox, the rest is auto-reviewed and only surfaced when needed. Detail in [13-safety-ignore.md](13-safety-ignore.md).

Reference: [Run Modes](https://cursor.com/docs/agent/security/run-modes)

## Where to look on screen

- **Centre of the editor**: where you write code as usual. Tab suggestions appear here
- **Agent panel（on the right, or in its own layout）**: where you talk to the AI. Pick the mode here
- **Agents Window**: the screen for running several agents side by side. The built-in browser and Design Mode live here too
- **Diff view**: what the Agent changed. Decide with **Keep**（accept）/ **Undo**（revert）
- **Context ring**: near the input box. Shows how much context the conversation is using

> **A note on labels**: in Cursor 3.16, Agent diffs read **Keep / Undo / Review**.
> Only the inline edit bar from `Ctrl+K` reads **Accept / Reject**. They mean the same thing.

## What you'll be able to do（this course）

### Basics 00–05 — using it on your own

- Pick the right mode for the job
- Have the shortcuts you need in your fingers
- Pass the context you intended, with `@`
- Choose between Tab / `Ctrl+K` / Agent per situation
- Turn a vague request into one that can actually be executed

### Advanced 06–13 — keeping premises and safety in the code itself

- Say which of Rules / Skills / Hooks handles what
- Understand where MCP, Cloud Agents and PR review sit
- Know what to watch for around secrets, execution limits and parallel agents

### Applied 14–19 — distributing to a team, running things automatically

- Carve a piece of work off to a Subagent
- Bundle a whole setup into a Plugin and hand it out
- Trigger the Agent from a screen, a terminal or an external service

## Chapter list

| Chapter | Contents |
|---------|----------|
| [01](01-modes.md) | Modes（Agent / Plan / Debug / Multitask / Ask）and Custom Mode |
| [02](02-shortcuts.md) | The shortcuts worth memorising |
| [03](03-context.md) | Passing context with `@` |
| [04](04-tab-and-inline.md) | Tab suggestions and inline editing |
| [05](05-prompting.md) | Asking well |
| [06](06-rules.md) | Project Rules |
| [07](07-skills.md) | Skills |
| [08](08-hooks.md) | Hooks |
| [09](09-mcp.md) | MCP |
| [10](10-cloud-agents.md) | Cloud Agents（Builds / Automations） |
| [11](11-bugbot-pr.md) | Bugbot and PR review |
| [12](12-agents-window.md) | Agents Window and Worktrees |
| [13](13-safety-ignore.md) | Secrets, execution limits, safe operation |
| [14](14-subagents.md) | Subagents |
| [15](15-plugins.md) | Plugins and the marketplace |
| [16](16-browser-design.md) | The browser and Design Mode |
| [17](17-cli.md) | The CLI |
| [18](18-integrations.md) | Integrations with external services |
| [19](19-plans.md) | Plans and usage |

Next: [01-modes.md](01-modes.md)
