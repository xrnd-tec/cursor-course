# 9. MCP（Model Context Protocol）

MCP is the shared interface through which the Agent reaches **external tools and data**（issue trackers, databases, browsers, internal APIs…）. Instead of pasting things into the chat, the Agent calls a tool and fetches them.

## What you get

- Linear / GitHub / Notion / Datadog and friends, connected from inside a conversation
- “Read the current issue and fix it” works with nothing pasted
- A read-only internal API can be handed over safely（the permission design is still yours to get right）

## How it looks from Cursor

1. Configure an MCP server（through the settings UI or `mcp.json`）
2. The server publishes its **tools / resources**
3. The Agent calls one when it needs to（sometimes asking you to approve）

While you're learning, don't “connect everything” — start with **exactly one server with one clear purpose**.

## How it relates to Rules and Skills

| Mechanism | Role |
|-----------|------|
| MCP | The ability to reach **an outside system** |
| Skill | The shape of how to reach it, the procedure |
| Rule | Constraints such as “never run anything destructive against the production DB” |

Merely “being connected” is dangerous, so decide who may call what at the same time.

## Watch out for

- For tools that write, tighten permissions and require approval
- Don't commit private keys or PATs to the repo
- When something doesn't work, check the server's state first（does it need auth? is it erroring?）

## Exercise（investigate）

In Ask mode:

```text
Summarise the steps to add one MCP to Cursor on this machine.
If it's purely for learning, what is safe to connect first? Give three candidates.
```

When you add a real server, follow the official instructions from whatever you are connecting to, alongside the MCP section of Cursor Settings.

Reference: [MCP](https://cursor.com/docs/mcp)

Next: [10-cloud-agents.md](10-cloud-agents.md)
