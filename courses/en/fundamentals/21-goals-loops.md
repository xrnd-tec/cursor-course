# 21. Goals and loops（letting the agent run the work by itself）

The chapters so far used Cursor as **a person asks once and checks once**. This chapter is about **the agent repeating the work and the checks by itself until it reaches the goal**.

Your job changes from asking one request at a time to **deciding the goal, how to check and where to stop, and then watching**.

## What you use（available locally）

| Mechanism | What it does | Chapter |
|-----------|--------------|---------|
| **`/goal`** | Hands over a long-running goal and has the agent work on it until it is achieved | This chapter |
| **`/loop`** | Repeats the same instruction at a fixed interval, or until a set result appears | This chapter |
| **Steering** | Adds instructions while the agent is working, without stopping it | This chapter |
| **The Hooks `stop` hook** | Sends the next instruction automatically when the agent finishes its work | [08-hooks.md](08-hooks.md) |
| **Subagents** | Who you hand carved-off work to, such as an implementer or a verifier | [14-subagents.md](14-subagents.md) |
| **Custom Mode** | Keeps a Skill in effect for the whole conversation | [01-modes.md](01-modes.md) |

The mechanisms that run in the cloud（Automations, Subscriptions, Projects）are in [10-cloud-agents.md](10-cloud-agents.md).

## `/goal`

Normally the agent treats each message as a separate job. With `/goal` you can hand over **a long goal that it works on until it is completely done**.

```text
/goal fix all flaky tests and make CI green
```

- Combined with Custom Mode, the agent works toward the goal following a set playbook.
- Combined with `/loop`, the agent checks on progress periodically.
- In the CLI, `Ctrl+C` pauses the goal.

> **`/goal` is rolling out gradually**（as of September 2026）. The official documentation says to try a new chat if it doesn't appear.

## `/loop`

A built-in Skill. It runs an instruction repeatedly **locally, at a fixed interval, or until a set result appears, or until you stop it**. If you don't give an interval, the agent decides when and on what to resume.

Examples from the official documentation:
- Check the deployment status every 5 minutes
- Keep building a feature until the tests pass

> Added in May 2026（3.5）.

## Steering（adding instructions midway）

If you send a message while the agent is working, it doesn't stop; it picks up the instruction **at the next tool-call boundary**.

- IDE: send a message, or press `Enter` twice. To interrupt immediately, `Cmd+Enter`（as written in the official documentation）
- CLI: press `Enter` while it is working, and the instruction goes in at a safe boundary

Use it on long runs to correct the direction as soon as it starts to drift.

## Building a loop with the `stop` hook

The Hooks `stop` hook is called when the agent finishes its work. When the hook returns `followup_message`, Cursor **sends it automatically as the next user message**.

- Example: run the tests and return “Fix the failing tests” if any fail. Return nothing if they all pass
- There is a limit on how many times it sends automatically. **The default is 5**, and you can change it with `loop_limit`（`null` removes the limit）
- The `subagentStop` hook, when a subagent finishes, can send the next instruction in the same way

For how to write the configuration, see [08-hooks.md](08-hooks.md).

## Four things to decide when building a loop

| What to decide | Example | What happens if you don't |
|----------------|---------|---------------------------|
| **The goal** | Complete every task in `tasks.md` | It's unclear how far to go, and the work spreads |
| **How to check** | A verifier subagent checks each task's completion criteria | It moves on just by saying “Done” |
| **Where to stop** | Stop when every task passes / stop and ask a person after 3 failures on the same task | It never ends, or it uses up your usage |
| **What a person looks at** | Progress reports, the final diff, how it behaves when you actually run it | Changes stay in without anyone knowing what went in |

These four reuse the **requirements and completion criteria** written in session 3 of the hands-on course, and the **Rules** created in sessions 3 and 4, as they are. A loop is less a new mechanism than handing the agent the “ask → check” cycle that a person used to run one round at a time.

## Watch out for

- **Usage**: the longer it runs, the more usage it consumes. Split the goal into small pieces and always decide where to stop（[19-plans.md](19-plans.md)）
- **If the checks are loose, it moves on while only pretending to check.** Give the verifier `readonly: true`, and have it judge by the completion criteria and by actual behaviour
- **A person checks at the end.** Even when the agent reports “everything passed”, run it yourself and check

## Exercise

1. Prepare a `tasks.md`（with completion criteria）for a small app（`/task-breakdown` in [07-skills.md](07-skills.md)）
2. Create a verifier subagent（[14-subagents.md](14-subagents.md)）
3. Send the following

```text
/goal Complete every task in tasks.md in order, from the top.
Each time you finish one, check its completion criteria with the verifier subagent; if it fails, fix it before moving on.
If the same task fails 3 times, stop and ask me.
```

Reference: [Agent overview（goals, steering）](https://cursor.com/docs/agent/overview) · [/loop（changelog 2026-05-20）](https://cursor.com/changelog/shared-canvases) · [Cloud Agents and Cursor Harness Improvements（2026-08-19）](https://cursor.com/changelog/08-19-26) · [Hooks](https://cursor.com/docs/hooks)

Back to: [00-map.md](00-map.md)
