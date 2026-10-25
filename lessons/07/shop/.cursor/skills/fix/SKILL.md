---
name: fix
description: Use only when the user explicitly invokes `/fix`. Finds the root cause of a bug that already has a failing test, fixes it with the smallest change, and shows the test going from failing to passing. Changes files in src/ only.
disable-model-invocation: true
---

# Fix

Fix the bug at its root cause. **Change only files in `src/` and `work-log.md`. Never change a test.**

If there is no failing test for this bug yet, stop and tell the user to run `/reproduce` first.

Start a todo list with the steps below, copied as they are.

## Steps

1. **Run `node --test`** and confirm the reproduction test fails. Paste the failing lines.
2. **Confirm the cause by observation, not by guessing.** Take the possible causes one at a time. For each, run something that would come out differently if it were the cause (a short `node -e` script, or a temporary `console.log`). Rule causes out until one is left. Show what you ran and what you saw.
3. **Fix the first place where the code does something wrong**, not the place where the symptom shows up. A flag, a guard, a copy made by the caller, or a recalculation in the screen code only hides the bug. If you are about to write one, explain why it is not the root cause and fix the root cause instead.
4. **Make the smallest change** that the evidence supports. Do not add code that "might help". Remove every temporary `console.log`.
5. **Run `node --test` again.** The reproduction test and all other tests must pass. Paste the output.
6. **Show `git diff --stat`** to prove that only `src/` changed.
7. **Look for the same mistake elsewhere** in `src/`. Report what you find. Do not fix other problems in this step.

If you believe a test is wrong, do not edit it. Stop, quote the line of `docs/spec.md` that the test disagrees with, and let the user decide.

## Reply

What was broken, the root cause (file and function), how you confirmed it, the fix, and the failing-then-passing output. Mark the strength of each claim.

Tell the user to commit the fix with a message such as `fix: bug #42 ...`.

Then add one row to `work-log.md`.
