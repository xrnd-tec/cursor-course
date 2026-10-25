---
name: evaluate
description: Use only when the user explicitly invokes `/evaluate`. Hands a committed fix to the evaluator subagent, which checks it against the spec without trusting the fixer's report. Changes no files itself.
disable-model-invocation: true
---

# Evaluate

Let someone other than the fixer check the fix. **You do not change any file except `work-log.md`.** The `evaluator` subagent does the checking.

Start a todo list with the steps below, copied as they are.

## Steps

1. **Check the starting point.** Run `git status`. If there are uncommitted changes, stop and ask the user to commit the fix first. The evaluator restores files from git, so uncommitted work could be lost.
2. **Write the intent of the fix in one paragraph**, from `docs/bug-report.md`, `git log`, and the diff of the last commit (`git show --stat HEAD`). Ask the user if the intent is unclear.
3. **Call the `evaluator` subagent.** Give it the intent paragraph, the commit to check (`HEAD`), and the paths `docs/spec.md`, `src/`, and `test/`. Do not give it the fixer's explanation.
4. **Check its report yourself.** Run `node --test` and `git status`. Only new files in `test/eval/` may have appeared. If anything else changed, say so first.
5. **Do not fix anything.** For each finding the evaluator put under "Act on", say what you would do and why. The user decides.

## Reply

The evaluator's verdict, its findings in four groups (Act on, Consider, Noted, Dismissed), the result of your own check in step 4, and your recommendation for each "Act on" finding.

Then add one row to `work-log.md`.
