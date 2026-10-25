---
name: refactor
description: Use only when the user explicitly invokes `/refactor`. Changes the structure of the code without changing what it does, and proves that with the tests. Adds no new behavior.
disable-model-invocation: true
---

# Refactor

Make the code easier to read without changing what it does. **Change files in `src/` and `work-log.md`. In step 1 only, you may add new tests. Never change an existing test.**

If you find a bug while you work, do not fix it. Write it down and report it. Fixing it is separate work.

Start a todo list with the steps below, copied as they are.

## Steps

1. **Pin the current behavior.** Run `node --test` and confirm everything passes. If the code you will change has no test that would fail when it breaks, add one in `test/` first. A new test must pass on the current code. Do not start if any test fails.
2. **Count the problem.** Find each rule that is written in more than one place (an amount such as `5000` or `600`, or a branch for each coupon code). Count the places with a search of `src/`. This is the "before" number.
3. **Write the target shape** in two or three lines: where each rule should live so it is written once.
4. **Remove before you add.** Delete repeated and unused code first, then build the new shape.
5. **Move in small steps.** After each step, run `node --test`. If a test fails, undo that step.
6. **Prove nothing changed.** Run `node --test`. The same tests pass as in step 1. Run `git diff --stat test/` to show that existing tests are unchanged.
7. **Count again.** Show the "before" and "after" numbers. If the code is not easier to read, undo the refactor and say so.

## Reply

What changed, the tests you held it against, the before and after counts, and anything you undid. No new behavior.

Tell the user to commit with a message such as `refactor: ...`.

Then add one row to `work-log.md`.
