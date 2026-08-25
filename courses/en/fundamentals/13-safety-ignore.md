# 13. Secrets, `.cursorignore` and safe operation（recommended）

The more useful the Agent gets, the more it matters where you draw the line on **what it must not read** and **what it must not do**.

## What to protect

- `.env`, API keys, personal tokens, customer data
- Confidential documents（if they're needed, let a human decide through another channel）

## `.cursorignore` and `.gitignore`

| File | Main purpose |
|------|--------------|
| `.gitignore` | Keep it out of git |
| `.cursorignore` | Keep it out of Cursor's / the Agent's index and references |

You often need both. **“It isn't in git, so the Agent can't see it” is wrong.** The highest priority is still **not putting secrets in the repo in the first place**.

## Limiting execution（how much the defaults already protect you）

Beyond “don't read it”, you can also set “don't do it”. Even at the defaults, things stand as follows.

| Subject | Default |
|---------|---------|
| Reading and searching files | No approval needed |
| Overwriting files | **Saved immediately.** Which is exactly why version control is assumed |
| Running terminal commands | **Follows the Run Mode**（Auto-review is recommended, see below） |
| Network | No arbitrary traffic. Limited to GitHub, links you point it at directly, web search, and similar |
| Calling MCP tools | Both connecting and calling need approval（an allowlist or Auto-review can pre-approve） |

### Run Modes

How far the Agent's tool calls may go without asking is set under **Settings → Agents → Approvals & Execution**. The first-time steps are in “Settings worth getting right first” in [00-map.md](00-map.md).

Cursor recommends **Auto-review** for most users.

| Run Mode | Runs without asking | When it fits |
|----------|---------------------|--------------|
| **Auto-review** | Anything matching the allowlist runs straight away. Shell commands run in the sandbox where they can. The rest is classified, and you're only asked when needed | You want fewer prompts but still want risky operations stopped |
| **Allowlist** | Only what you put on the list（sandbox optional） | You want to fix the allowed set yourself |
| **Run Everything** | Every tool call, automatically | Only when you accept having no confirmations |

Auto-review is convenient, but **it is not a security boundary**. It can classify things wrongly. Anything you need strictly stopped should go through Allowlist plus your own approval. No extra config file is required.

Turning on “run everything” makes that the doorway for accidents.

The CLI has `--sandbox` / `/sandbox` as well（→ [17-cli.md](17-cli.md)）.

Reference: [Run Modes](https://cursor.com/docs/agent/security/run-modes)

## The operational minimum

1. Put secrets in environment variables or a secret manager
2. Never tell the Agent to “paste the key into the chat”
3. Use a Hook or a Rule to block things like `git push --force`（[08-hooks.md](08-hooks.md)）
4. Check destructive operations yourself before you Keep

## Exercise

Ask:

```text
Give five candidates worth putting in .cursorignore for this learning repo.
Also point out anything that would get in the way of learning if it were ignored.
Don't create any files yet.
```

---

That's the end of the advanced material. If you want to try one thing right now:

1. Add one file to `.cursor/rules`
2. Write one small Skill
3. With Hooks, start with one that only observes

Chapters 14 to 19 are the applied material: **distributing to a team, and running things automatically**. The official docs move quickly, so when you're stuck use Cursor's Help / Docs alongside this chat.

Reference: [Agent Security](https://cursor.com/docs/agent/security)

Next: [14-subagents.md](14-subagents.md)
