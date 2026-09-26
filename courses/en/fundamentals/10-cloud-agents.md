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

GitHub / GitLab / Slack / Linear / PagerDuty / webhooks can all be the trigger. This is the point where it stops being “a tool a person starts” and becomes “a colleague that acts on its own”.

- How to create one: from `cursor.com/automations`, or from a template in the marketplace. You can also type **`/automate`** in a local chat and describe in words what you want（June 2026）
- There is a **memory** feature that learns from past runs
- The agent it starts can use its own computer to produce demos and deliverables（computer use, on by default）
- GitHub triggers also include issue comments, PR review comments, PR reviews, review threads, and GitHub Actions completing（June 2026）

### Subscriptions（watching and waking up on its own）

A Cloud Agent **watches** a PR, a Slack thread or a schedule, and wakes up to work by itself when something relevant happens（August 2026, Cloud Agents only）.

- On PRs it created itself, it fixes CI failures and responds to bot findings
- It is the cloud counterpart of the local `/goal` and `/loop`（[21-goals-loops.md](21-goals-loops.md)）

### Projects（a coordinating agent, beta）

A way to carry **large pieces of work** — adding a feature, a migration, a whole app — over several months（released as a beta on 10 September 2026）.

- A **coordinating agent**（coordinator）runs on its own dedicated computer in the cloud and handles planning and assigning work. It does not write code itself
- The work is assigned to **a large number of subagents**, each with its own isolated environment
- Each Project has shared files, and knowledge about the codebase and how the work is done builds up across agents and over time
- If you have it watch Slack channels, schedules or PRs, it does recurring work without being asked
- It keeps running when you close your laptop. Open it from the left navigation

### Other updates（August–September 2026）

- **Starting without GitHub**: you can start a Cloud Agent without connecting GitHub or a similar service. You can save it to a Cursor repository（Cursor Origin）later（27 August）
- **Self-hosted Machines**: you can run tools inside your internal network, such as on your own machine or your team's machines（2 September）
- **Rollouts / Security Review**: a bot that watches deployments, and a bot that looks for exploitable bugs in PRs. **Teams / Enterprise only**（23 September）

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

Reference: [Cloud Agents](https://cursor.com/docs/cloud-agent) · [Automations（2026-03-05）](https://cursor.com/changelog/03-05-26) · [Improvements to Automations（2026-06-18）](https://cursor.com/changelog/06-18-26) · [Cloud Agents and Harness Improvements（2026-08-19）](https://cursor.com/changelog/08-19-26) · [Changelog（Projects and more）](https://cursor.com/changelog)

Next: [11-bugbot-pr.md](11-bugbot-pr.md)
