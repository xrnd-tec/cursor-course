# 8. Hooks

Hooks are **automation and guardrails** that interrupt the Agent's lifecycle. Unlike a policy（Rules）or a procedure（Skills）, a Hook is a shell command or script, so it can **allow, deny, modify and audit**.

## Where they live

| Level | Config | Example scripts |
|-------|--------|-----------------|
| Enterprise | The OS-wide config directory | Distributed by an administrator |
| Team | The cloud dashboard（Enterprise only） | Distributed to every member |
| Project | `.cursor/hooks.json` | `.cursor/hooks/*.sh` |
| User | `~/.cursor/hooks.json` | `~/.cursor/hooks/*.sh` |

**The higher up, the stronger**（Enterprise → Team → project → user）. If you want to share with a team, use project hooks.

## The events you'll actually use（narrowed down for learning）

| Event | What it's for |
|-------|---------------|
| `beforeShellExecution` | Block or confirm dangerous commands |
| `afterFileEdit` | Format after an edit, and so on |
| `beforeSubmitPrompt` | Check the prompt for secrets |
| `sessionStart` | Set things up when a session begins |

There are more: around tool execution（`preToolUse` / `postToolUse` / `postToolUseFailure`）, around sub-agents（`subagentStart` / `subagentStop`）, around MCP execution, before reading a file（`beforeReadFile`）, after a response（`afterAgentResponse`）, around Tab completion, and when a workspace opens. One is plenty to start with.

## The minimum shape

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

A Hook basically **reads JSON from stdin and replies with JSON on stdout**（see the official docs or the create-hook skill for detail）. The safe way to start is with an observing hook that only writes a log.

Each Hook takes these options.

| Option | Meaning |
|--------|---------|
| `type` | `"command"`（default）or `"prompt"`. The latter **has an LLM decide rather than running a script** |
| `matcher` | Narrow what it applies to（tool kind, sub-agent kind, command pattern） |
| `timeout` | Seconds |
| `failClosed` | `true` means **don't let it through** when the Hook fails |

In the JSON response, `permission` can be `allow` / `deny` / `ask`. Exit code `2` is treated the same as `deny`.

## Building a loop with the `stop` hook

The `stop` hook is called **when the agent finishes its work**. If the JSON response contains `followup_message`（a string）, Cursor **sends it automatically as the next user message**. If it is empty or left out, the agent stops there.

- The input includes `loop_count`（how many times the `stop` hook has already sent a message automatically in this conversation, counting from 0）
- The limit on automatic messages is **5 by default**. You can change it with `loop_limit`; `null` removes the limit
- `subagentStop`（when a subagent finishes）can also return `followup_message`. It uses the same `loop_limit`

Example: run the tests, return “Fix the failing tests” if any fail, and return nothing if they all pass. This gives you a loop that “keeps fixing until the tests pass”. For how to build loops, see [21-goals-loops.md](21-goals-loops.md).

## Watch out for

- Blocking everything on failure（`failClosed: true`）easily brings development to a halt. The default is “let it through on failure”
- Go in this order: observe first, deny only once you need to
- Don't let secrets end up in a Hook's log

## Exercise（read and design）

In Ask mode:

```text
For this repo, write the design of a Hook on beforeShellExecution
that denies exactly two commands: "rm -rf /" and "git push --force".
Don't create any files yet.
```

Once the approach makes sense, ask the Agent to implement it.

Reference: [Hooks](https://cursor.com/docs/hooks)

Next: [09-mcp.md](09-mcp.md)
