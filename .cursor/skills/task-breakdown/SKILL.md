---
name: task-breakdown
description: Use when you need to split requirements into tasks small enough to hand to an Agent one at a time, each with its own definition of done. Does not write code.
---

# Split it into tasks

A skill for taking requirements and cutting them into tasks **small enough to hand over one per request**.

**Do not write code.** Stop once the task list exists.

## How to run it

### 1. Read the requirements

Read whatever was handed to you (or `session02-spec/requirements.md` if nothing was). If there are no requirements, **push them to write the requirements first**. Do not start from tasks.

### 2. Cut it into 3–5 tasks

**Five at the very most.** If it genuinely needs more than that, the requirements are too big — suggest moving things into “Out of scope” to shrink it.

Cut in this order:

1. **Something that runs first** (the screen appears / the outermost flow)
2. **The core mechanism** (the processing the thing cannot exist without)
3. **Rules for judging and finishing**
4. **The project-specific rules** (behaviour that only exists in these requirements)
5. **Polish** (appearance, small interactions)

**The first task must always leave the project in a running state.** Never put a task at the front that builds a part but runs nothing.

### 3. Write the list out

**Keep this shape exactly.**

```markdown
# Task list

## 1. (task name)

- What to do: (1–2 lines)
- Done when: (what has to happen. Write it so it can be checked on screen)
- Files touched: (if you know)

## 2. (task name)

...
```

Unless told otherwise, save it to **`session02-spec/tasks.md`**.

### 4. Show how to hand it over

At the end of the list, add **one request you can copy and paste as-is**.

```text
(what to do, from task 1)
Done when: (the "done when" from task 1)
Do not change any other feature.
```

## How to write “Done when”

**Write something you can confirm on screen.** Not the state of the code — something you can see with your eyes.

| Good | Weak |
|---|---|
| Flip two cards and the screen shows whether they match | The matching logic is implemented |
| When every pair is matched, “Congratulations” appears | The clear-screen handler runs |
| From the third mistake onward, cards flip back faster | The wait time is variable |

If you cannot write a “Done when” for a task, **the task was cut badly**. Cut it again.

## Keeping tasks independent

- If a task cannot be checked until an earlier one is finished, **state the order explicitly**
- If two tasks touch the same part of the same file, **merge them into one**

## Out of scope for this skill

- Writing code, or implementing anything
- Cutting it into six or more tasks
- Leaving out “Done when”
- Adding tasks that are not in the requirements
