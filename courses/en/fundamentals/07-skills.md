# 7. Skills

A Skill is a package holding “the procedure for doing this kind of work”. If Rules are the policy that is always on, Skills are **a playbook loaded only when it's needed**.

## Where they live

| Kind | Path | Scope |
|------|------|-------|
| Project | `.cursor/skills/<name>/SKILL.md` or `.agents/skills/<name>/SKILL.md` | This repo |
| Personal | `~/.cursor/skills/<name>/SKILL.md` or `~/.agents/skills/<name>/SKILL.md` | All your projects |

`.claude/skills/` is also read for compatibility, so work written for other tools can be dropped in as-is. Sub-folders for grouping are still recognised.

> Cursor's own built-in skills live in `~/.cursor/skills-cursor/`. **Don't touch them, don't overwrite them.**

The minimum structure:

```text
.cursor/skills/mini-cart-check/
  SKILL.md
```

```markdown
---
name: mini-cart-check
description: Use when you need to check the cart implementation under practice/ and report briefly on responsibilities and what is missing
---

# Mini cart check

1. Read practice/cart.js / calculator.js / index.js
2. Tabulate whether add, remove, subtotal and tax-inclusive total exist
3. If something is broken, point out exactly one thing with steps to reproduce
4. Only change code when the user asks
```

Only **two frontmatter fields are required: `name` and `description`**. `name` is lowercase letters, digits and hyphens only, and **must match the parent folder name**.

## `description` is the important part

The Agent **reads the `description`** to decide whether to use this Skill in a conversation.
The trick is to write “when to use it” right there in the description.

## Three ways to invoke it

| How | Scope |
|-----|-------|
| **Automatic** | When the Agent judges it should be used |
| **Slash** | Type `/` and pick it. **That one message only** |
| **Custom Mode** | Pin it with `Alt+Enter`（Mac: `Option+Enter`）, or choose **Use as Mode**. **The whole session** |

As a Custom Mode a badge appears in the input box and the procedure stays in force for the whole conversation. That's the one for “just keep reviewing against this convention today”（→ [01-modes.md](01-modes.md)）.

## Rules or Skill?

- Must be obeyed every time → **Rule**
- A long procedure like “open a PR”, “the weekly report”, “how to fix this API” → **Skill**
- Block or fix something on an event → **Hook**（next chapter）

## Exercise

Tell the Agent:

```text
Create .cursor/skills/mini-cart-check/SKILL.md using exactly the minimum structure above.
Don't generate any extra files.
```

Then, in a new chat:

```text
Check the cart implementation under practice/ (follow the Skill if there is one)
```

Reference: [Skills](https://cursor.com/docs/skills)

Next: [08-hooks.md](08-hooks.md)
