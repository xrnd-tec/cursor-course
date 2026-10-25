---
name: review-trace
description: Use only when the user explicitly invokes `/review-trace`. Compares what the agents said they did (work-log.md and their replies) with what Cursor recorded them doing (the agent transcripts) and git history. Changes no files.
disable-model-invocation: true
---

# Review the trace

Check whether the agents' reports match what they really did. **Do not change any file.**

There are two kinds of record:

- **What the agents said:** `work-log.md` and their replies. They wrote these themselves.
- **What really happened:** the commits (`git log --stat`) and Cursor's transcripts, which record every tool the agents called.

Start a todo list with the steps below, copied as they are.

## Steps

1. **Read `work-log.md`** and `git log --stat`.
2. **Find the transcripts of this project only.** Your system prompt names the `agent-transcripts` folder for this workspace. Do not open the folders of other projects. Run `node tools/trace.mjs "<that folder>"` to list each chat and the tools it called.
   - If you cannot find or read the folder, say so, and do steps 3 and 4 with `work-log.md` and git only. Mark the checks you could not make as `INCONCLUSIVE`.
3. **Check each row of `work-log.md`** against the record:
   - When it says tests passed, did that chat run `node --test`?
   - Did `/investigate` or `/evaluate` change files they must not change?
   - Did `/fix` or `/refactor` change an existing test?
   - Does the commit for each step contain only the files that step may change?
4. **Find what is missing:** work in the record that has no row in `work-log.md`, and claims that have no evidence.

## Reply

A table with one row per step: what the agent said, what the record shows, and whether they match (`match`, `does not match`, `INCONCLUSIVE`). Then a short list headed **Attention** with what the user should look at. "Nothing to flag" is a valid answer.
