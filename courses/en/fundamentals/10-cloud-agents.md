# 10. Cloud Agents

A local Agent runs on your machine. **Cloud Agents** run in an environment on the cloud side, which suits longer jobs and creating PRs remotely.

## A rough comparison

| | Local Agent | Cloud Agents |
|--|-------------|--------------|
| Runs where | Your own machine | An isolated environment on the cloud |
| Good for | Interactive editing, checking things by hand | Self-contained chunks of work, progress while you're away |
| Depends on | Your local git / network / tools | The cloud-side setup |

Both are “the Agent”. The difference is **where it runs and how it is isolated**.

The cloud side gets **its own virtual machine**, so you can hand over builds, tests, even browser work.

## How it looks in practice

- Specify a repo and a branch, then start it
- It explores, edits and tests on the cloud
- You receive the result as a PR or a branch diff（depending on your plan）

### Where you can start one from

| Entry point | When to use it |
|-------------|----------------|
| Cursor / Web | The normal way |
| **Slack** | Talk to `@Cursor` in a thread（→ [18-integrations.md](18-integrations.md)） |
| **CLI** | Put `&` at the start of the prompt（→ [17-cli.md](17-cli.md)） |
| **Mobile / iPad** | Review PRs and give instructions on the move |

### Builds（what makes startup fast）

Building the environment from scratch every time is slow, so Cursor quietly prepares **snapshots of a ready environment**. Agents start from those, so they get to work without waiting on dependency installs. The most recent successful build is kept, and you can fall back to it when one fails.

### Automations（running it by itself）

A way to start a Cloud Agent automatically, on a **schedule** or on an **event**.

- Summarise yesterday's changes every morning
- Review a PR for bugs whenever it is updated
- Triage bug reports as they land in Slack

GitHub / GitLab / Slack / Linear / webhooks can all be the trigger. This is the point where it stops being “a tool a person starts” and becomes “a colleague that acts on its own”.

The detailed UI moves quickly, so the safe move is to open the official Cloud Agents help and check.

## How it relates to Multitask and Worktrees

- **`/multitask`**: several sub-agents in parallel（usually on the same checkout）. On the cloud they can be split into **one isolated VM each**
- **Worktrees**: separate working trees per branch, to reduce collisions
- **Cloud**: push heavy work, or work that must continue while you're away, off your machine

“Parallel”, “isolated” and “remote” are three different ideas. Sometimes you combine them.

## Exercise（design）

Ask:

```text
Which of local Agent / Cloud Agents / multitask should each of these go to, and why?
1) Add one function to practice/calculator.js
2) Add tests to two unrelated modules at the same time
3) Run a large refactor overnight and look at the PR in the morning
```

Reference: [Cloud Agents](https://cursor.com/docs/cloud-agent)

Next: [11-bugbot-pr.md](11-bugbot-pr.md)
