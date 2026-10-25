---
name: investigate
description: Use only when the user explicitly invokes `/investigate`. Reads a bug report and the code, and returns the likely causes with evidence. Changes no files.
disable-model-invocation: true
---

# Investigate

Find out why the reported problem happens. **Do not change any file except `work-log.md`.** You may run commands that change no files, such as `node --test` or a short `node -e` script.

Start a todo list with the steps below, copied as they are.

## Steps

1. **Restate the report in your own words.** What the user did, what they expected, what they saw, and when it does and does not happen. Write this before you read any code.
2. **Find the rules involved** in `docs/spec.md`. Quote the lines.
3. **Trace the path** from the user's action to the wrong result: which file and function runs, what it calls next, and what data it passes on.
4. **List 2 to 4 possible causes.** For each one, give:
   - where it is (file and function)
   - why it would produce exactly these symptoms, including the cases where the problem does not happen
   - one observation that would confirm it or rule it out
   - how strong your evidence is (`[said]`, `[line]`, `[traced]`, `[ran]`)
5. **Write what you could not find out.** Do not hide gaps.

Do not suggest a fix yet. If the user wrote their own guess about the cause, check it like any other candidate. Do not search only there.

## Reply

Use these headings: Restatement, Rules involved, How it works, Possible causes (a table), Open questions.

Then add one row to `work-log.md`.
