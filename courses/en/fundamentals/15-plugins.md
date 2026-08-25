# 15. Plugins and the marketplace

**Rules / Skills / Subagents / Hooks / MCP** have all been separate mechanisms living in separate files. A Plugin is what **bundles them into a single unit you can distribute**.

Think of it as shipping “the whole way this place works” in one install.

## What goes into a Plugin

| Component | Related chapter |
|-----------|-----------------|
| Rules | [06-rules.md](06-rules.md) |
| Skills | [07-skills.md](07-skills.md) |
| Agents（Subagents） | [14-subagents.md](14-subagents.md) |
| Hooks | [08-hooks.md](08-hooks.md) |
| MCP servers | [09-mcp.md](09-mcp.md) |
| Commands | Fixed commands invoked with a slash |

## Two standards

| Standard | Manifest | Contents |
|----------|----------|----------|
| **Agent Plugins** | `plugin.json` at the root | Mostly Skills and MCP. Vendor-neutral, works in other tools |
| **Cursor Plugins** | `.cursor-plugin/plugin.json` | The above plus Cursor-specific things: Rules, Hooks, Commands |

Cursor reads both. Pick the first for portability, the second if you're staying inside Cursor.

## Where to get them

- **Marketplace** — Cursor's official one, with reviewed entries
- **Team Marketplace** — Teams / Enterprise get their own internal shelf. Visibility can be limited per group, and each entry can be **off by default / on by default / required**
- **Local development** — anything in `~/.cursor/plugins/local` is loaded. That's where you try your own
- **Deeplink** — share an MCP configuration as a URL for others to install

After installing, manage them from the **Customize panel**. That's also where you choose the level to install into — user, team or workspace.

## When to make one

- Just for yourself → put the files in directly（a lone Rule or Skill）
- **You want the whole team on the same footing** → Plugin
- You want a new joiner's environment set up in one action → Plugin

Conversely, packaging a procedure that hasn't settled yet makes updates painful. The right order is **run it loose first, bundle it once it sticks**.

## Exercise（investigate）

In Ask mode:

```text
List what's currently under .cursor/ in this repo (rules / skills / agents / hooks).
If it were bundled into one Plugin, what should go in and what should stay out? Give reasons.
Don't create any files yet.
```

Reference: [Plugins](https://cursor.com/docs/plugins)

Next: [16-browser-design.md](16-browser-design.md)
