# 1. Modes（Agent / Plan / Debug / Multitask / Ask）

Press **`Shift+Tab`** in the Agent panel's input box and the mode **cycles** to the next one.
To pick from a list, **click the mode name** at the bottom left of the input box, or open the menu with `Ctrl+.`（Mac: `Cmd+.`）.

> **Shortcuts in this course are written Windows-first.** On Mac, read what's in the brackets.

> Note: switching mode starts a new conversation context for that mode. When the task changes, a **new chat** is a good move too.

## Which one, when

There are **five** by default（the order you'll see in Cursor 3.16）. Your own **Custom Modes** can join them（below）.

| Mode | Good for | Edits files |
|------|----------|-------------|
| **Agent**（`Ctrl+I`） | Adding features, refactoring, fixing bugs, running tests | Yes |
| **Plan** | Agreeing the approach to a big change before building it | After you approve the plan |
| **Debug** | Chasing a hard-to-reproduce bug while gathering evidence | Yes |
| **Multitask** | Running several independent jobs in parallel | Yes（in parallel） |
| **Ask** | Investigating, explaining, discussing design（you don't want it writing yet） | No（read-only） |

### If you're unsure

1. “I want to understand what's in there first” → **Ask**
2. “I want to settle the approach first” → **Plan**
3. “Fix it / build it” → **Agent**
4. “It reproduces but I can't find the cause” → **Debug**
5. “I have several independent jobs” → **Multitask**

**Ask and Agent** are the only two you need at first. Learn the rest when you need them.

## Custom Mode（adding your own）

On top of the five defaults, you can **promote a Skill into a mode and leave it on**（see [07-skills.md](07-skills.md)）.

- Pick the Skill and press **`Alt+Enter`**（Mac: `Option+Enter`）, or choose **Use as Mode** from the menu
- A badge appears in the input box, and **that procedure stays in force for the whole session**

Calling a Skill with a slash attaches it to one message only; as a Custom Mode it covers the whole conversation. That's the one for “today I'm only doing reviews” or “keep writing to this convention”.

So “there are five modes” isn't fixed. More precisely: **five by default, plus whatever you add**.

## Modes and models are different things

Right next to the input box sit both the **mode**（the five above）and the **model**（Auto and friends）, which makes them easy to confuse.

| | What it decides | Switch with |
|---|---|---|
| **Mode** | The AI's **behaviour**（does it edit, does it plan first） | `Shift+Tab` |
| **Model** | **The AI brain itself** handling the request | `Ctrl+/`（Mac: `Cmd+/`） |

Sometimes there's a third item near the input box, something like **`High`**. That's the **reasoning effort**, and it's neither the mode nor the model. Leave it at the default.

### What Auto is

The default is **Auto**. It doesn't mean “no model is chosen” — it means **the Cursor Router picks a model per request**. It classifies the kind and difficulty of the task, sending hard ones to a stronger model and easy ones to a cheaper one.

There are three optimisation policies（on Teams / Enterprise an administrator can restrict them or set the default）.

| Policy | Aim |
|--------|-----|
| **Cost** | Hold down token spend while keeping quality. One flat rate whichever model runs |
| **Balance** | The right quality for everyday work. Most people want this |
| **Intelligence** | Quality on a par with the top model |

### Auto is fine as the default

While learning and in everyday work, **Auto rarely causes trouble**. Picking by hand is only worth it in these cases:

- **When you want to compare results** — Auto **can run a different model each turn**, so pin it for experiments that need matched conditions
- **When a hard design or debugging job is clearly outrunning it** — move up to a stronger model
- **When your team has a cost policy**

> Model names and generations（GPT / Claude / Grok…）rotate every few months. **Understanding the mechanism — “Auto is choosing for me” — lasts longer than memorising individual names.**

Reference: [Auto](https://cursor.com/docs/models) · [Cursor Router](https://cursor.com/changelog/router)

## About Multitask

Multitask **sits in the mode menu**（the fourth row above）. But where the other modes decide “how this conversation behaves”, Multitask alone decides **whether work happens one job at a time or across several agents at once**. Different in nature, so think of it separately even though it shares the menu.

It also works as the slash command `/multitask`.

### What it does

- Requests that would normally queue get **run in parallel by asynchronous sub-agents**（sub-agents themselves are [14-subagents.md](14-subagents.md)）
- Split a large request into small chunks and hand them to several agents
- Ask it to “multitask these, don't wait” for messages already in the queue
- In Plan, **Build in Parallel** can sometimes build independent steps at once

Open the Agents Window and use it like this:

```text
/multitask Write tests for module A, and while you're at it update module B's README
```

### When to use it, when not

- **Fits**: jobs independent of each other（tests for one file and docs for another module）
- **Doesn't fit**: a sequence of fixes where the order matters, or several people touching the same file

Parallel edits on the same branch can collide, so combine it with a **worktree**（an isolated working tree）when you need to.

Reference: [Changelog 3.2（Multitask）](https://cursor.com/changelog/04-24-26) · [Multi-agent](https://cursor.com/help/ai-features/multi-agent)

## Interrupting mid-run（steering）

You can send a message while the Agent is running and nudge it. **Sending doesn't cut it off; it gets applied at the next break between tool calls.**

| What you want | How |
|---------------|-----|
| Add an instruction while it keeps running | Just send it（Send / `Enter` twice） |
| Have it handled after the current job | `Enter` to queue it |
| Skip the queue and send now | `Ctrl+Enter`（Mac: `Cmd+Enter`） |

Because you can say “no, not that way” the moment you think it, you redo less.

### `/goal`

`/goal` hands over a **long-running objective it keeps working at until it's met**. Rather than finishing after one request, you use it for things like “keep fixing until CI is green”.

## Operation checklist

- [ ] Open the panel with `Ctrl+I`（Mac: `Cmd+I`）
- [ ] `Shift+Tab` to Ask
- [ ] Ask a question in Ask with `@practice/calculator.js` attached
- [ ] Switch back to Agent and request a small change
- [ ] Read the diff
- [ ] If you need to, roll back with **Restore Checkpoint** beside the message

## Exercise A（Ask）

Send this in Ask mode:

```text
@practice/ List the responsibility of each piece of code in this folder.
Don't edit anything yet.
```

## Exercise B（Agent）

Send this in Agent mode:

```text
Add a function to practice/calculator.js that takes a tax rate and returns the tax-inclusive amount.
Don't break the behaviour of the existing functions. When you're done, show exactly one usage example in a comment.
```

## Exercise C（Plan）

Send this in Plan mode:

```text
I want to grow practice/ into a simple shopping cart.
Give me the minimum plan to support adding items, a subtotal, a discount, and a tax-inclusive total.
Show me the plan before you write any code.
```

Next: [02-shortcuts.md](02-shortcuts.md)
