# 14. Subagents

A Subagent is **a dedicated agent that the main Agent carves work off to**. It has its own context, so you can hand over investigation, verification or a fix without polluting the main conversation.

If `/multitask`（[01-modes.md](01-modes.md)）names a **way of working** — in parallel — then a Subagent defines **who** the work goes to.

## What you get

- Only the result of a long investigation comes back to the main conversation（not everything it read along the way）
- You can vary the model and tool permissions per role（a reviewer role can be read-only）
- Several Subagents can run at once

## Where they live

| Kind | Path |
|------|------|
| Project | `.cursor/agents/` |
| Personal | `~/.cursor/agents/` |

`.claude/agents/` and `.codex/agents/` are also read for compatibility, so work from other tools can be reused as-is.

## The definition file

Markdown plus YAML frontmatter.

```markdown
---
name: cart-verifier
description: Use when you need to read the cart implementation under practice/ and verify it against the spec. Does not modify code.
model: inherit
readonly: true
is_background: false
---

Read practice/cart.js and calculator.js, then report on the following.

1. Whether subtotal, discount and tax-inclusive totals match the spec
2. Any broken behaviour, with steps to reproduce
3. Never change the code
```

| Field | Meaning |
|-------|---------|
| `name` | The name you call it by. Match the folder / file name |
| `description` | **When to use it.** The Agent reads this to decide whether to delegate automatically |
| `model` | `inherit`（same as the parent）or a specific model ID |
| `readonly` | `true` means read-only. Very effective for reviewer and investigator roles |
| `is_background` | `true` runs it in the background |

## How to call it

1. **Automatically** — the Agent reads the `description` and delegates when it judges it should
2. **By name** — use a slash, e.g. `/cart-verifier check it against the spec`
3. **In plain language** — “have cart-verifier check this” works too
4. **In parallel** — name several and they run at once

On the cloud, Subagents can run in **isolated virtual machines**（a clean copy of the project）. Tests run in parallel without breaking each other.

## Rules, Skills or Subagents?

| Mechanism | What it decides |
|-----------|-----------------|
| **Rules** | The policy that is always in force（[06-rules.md](06-rules.md)） |
| **Skills** | The procedure. It says nothing about who does it（[07-skills.md](07-skills.md)） |
| **Subagents** | **Who does it.** With their own context, permissions and model |

## Watch out for

- A vague `description` never gets called automatically. Always write “when to use it”
- Give `readonly: true` to any role that must not modify anything
- Too many and the Agent hesitates over which to call. Start with one

## Exercise

In Agent mode:

```text
Create .cursor/agents/cart-verifier.md.
Make it a read-only sub-agent that only reads the cart implementation under practice/
and reports whether it matches the spec. It must be configured not to change code.
```

Then, in a new chat:

```text
/cart-verifier Verify the cart under practice/
```

Reference: [Subagents](https://cursor.com/docs/subagents)

Next: [15-plugins.md](15-plugins.md)
