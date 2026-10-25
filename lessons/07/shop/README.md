# Stationery Shop (session 7)

A small online shop that somebody else wrote. It already has users, tests, and a bug report.
In session 7 you investigate the bug, fix it, check the fix, tidy the code, and review what the AI did.

> These files are kept in **English only**, so every language track of the course points at the same code.

## Before you start

- Copy this whole folder (including the hidden `.cursor` folder) to a new place outside `cursor-course/`, and open the copy with **File → Open Folder**.
- Run `git init` and commit everything once, so that you can see every change the AI makes.
- You need **Node.js 22 or later**. Check with `node -v`.

## How to run it

| What | How |
|---|---|
| Run the tests | `node --test` |
| Open the shop | Open `index.html` in the browser built into Cursor |

## Files

| File | What is in it |
|---|---|
| `docs/spec.md` | The rules of the shop. **The source of truth.** |
| `docs/bug-report.md` | The bug report you work on |
| `src/` | The shop: `cart.js`, `coupons.js`, `shipping.js`, `checkout.js`, and the screen in `app.js` |
| `test/` | The tests that already exist |
| `work-log.md` | The AI adds one row here each time it finishes a step |
| `tools/trace.mjs` | Lists what each AI chat really did, from Cursor's records |

## The skills for this lesson

They live in `.cursor/`. Each one runs only when you call it.

| Step | Call | What it does | What it may change |
|---|---|---|---|
| 1 | `/investigate` | Restates the report and lists likely causes with evidence | Nothing |
| 2 | `/reproduce` | Writes a test that fails because of the bug | `test/` |
| 3 | `/fix` | Confirms the cause, fixes it, shows the test going from fail to pass | `src/` |
| 4 | `/evaluate` | Lets the `evaluator` subagent check the fix against the spec | `test/eval/` |
| 5 | `/refactor` | Tidies the code without changing what it does | `src/` |
| 6 | `/review-trace` | Compares what the AI said it did with what it really did | Nothing |

The rule `.cursor/rules/evidence.mdc` applies to all of them: show the command and output for every "it works", and mark how strong each claim is.
