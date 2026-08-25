# 6. Project Rules（`.cursor/rules`）

Put the **agreements of your team or repo** — the ones you don't want to retype in every prompt — into Rules. The Agent then works with those as given.

## Rules vs Skills vs Hooks（just this much for now）

| Mechanism | Role | Typical example |
|-----------|------|-----------------|
| **Rules** | Policies and constraints that are always in force | “Commit messages in English”, “CSS uses modules” |
| **Skills** | A playbook for one particular kind of work | How to open a PR, the shape of a weekly report |
| **Hooks** | Programmatic intervention on an event | Block a dangerous shell command, format after an edit |

## Where they live

```text
.cursor/rules/
  coding-style.mdc
  practice-js.mdc
```

Each file is `.mdc`（Markdown + YAML frontmatter）.

```markdown
---
description: JS under practice/ is ESM and prefers small functions
globs: practice/**/*.js
alwaysApply: false
---

# practice JS

- Use `export`（not CommonJS）
- Keep functions short. Push side effects towards index
```

### What the frontmatter fields mean

| Field | Purpose |
|-------|---------|
| `description` | The short description shown in the rules list |
| `globs` | Only applies when working on files matching this pattern |
| `alwaysApply` | Set `true` to include it every single time |

An easy way to remember it: **User Rules**（in Cursor Settings）are yours across every project; **Project Rules** are shared through the repo.

## Tips for writing them

- Short and concrete（5–15 lines people actually follow beats an encyclopedia nobody does）
- Write down what to do *and* what not to do
- Split them by file type（overusing `alwaysApply: true` eats your context）

## Exercise

In Agent mode:

```text
Create .cursor/rules/practice-js.mdc for this repo.
It should only apply to practice/**/*.js.
Exactly three points: "use ESM", "keep functions small", "don't create tests unless asked".
```

Then, in a new chat（Ask）:

```text
@practice/calculator.js
If I add one new function, how should it be written under this project's rules?
```

Reference: [Rules](https://cursor.com/docs/rules)

Next: [07-skills.md](07-skills.md)
