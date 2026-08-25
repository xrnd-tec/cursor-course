# Session 2: Vibe coding → spec-driven development（90 minutes）

> **The goals（four rungs）**
> 01 Get something running with vibe coding → 02 Notice that the same request produced something different for everyone → 03 Write the spec before building → 04 Take a late requirement, add it to the spec, and push it through（stretch）
> **Reaching 01–03 is success. 04 is a stretch**, and not reaching it isn't a failure.

---

## The claim of this session（for the instructor to understand）

**This is built on the premise that we do NOT say “vibe coding breaks”.**

Memory match is a game the AI knows very well, so vibe coding finishes it perfectly well. Score, difficulty, a time limit — ask and it adds them without trouble（**measured in practice**）. Frame it as “this is bound to break” and the reality won't cooperate, and participants will see straight through it.

What this session shows is these four things.

| What vibe coding is actually like | Where it's experienced |
|---|---|
| **It builds things nobody asked for** — you can't tell your instructions apart from the AI's own decisions | Chapter 3 |
| **The same request produces something different for everyone** — it doesn't reproduce | Chapter 3 |
| **You can't judge correctness** — there's no basis for answering “is this right?” | Chapter 4 |
| **You can't hand it over** — you can't give it to someone without the context | Chapter 4 |

The landing point is **“vibe isn't the bad guy. The skill is spotting the switch-over point.”** If vibe works out well, that isn't a failure — it's the lesson “vibe was the right call this time”. The session holds together either way.

---

## How to read this script

Written on the assumption that **participants work with their hands while looking at the material, and the instructor explains as it goes**. The timings assume the same. Each chapter has five blocks（some sections, like the cover and intro, are missing a few）.

| Block | Who it's for |
|-------|--------------|
| **［Slide］Explanation** | How Cursor works. Goes on a slide. Sourced from `courses/en/fundamentals/` |
| **［Slide］What participants do** | Goes straight into the handout. Prompts printed in full, not read aloud |
| **What the instructor says** | What to say while participants are typing or waiting |
| **Checkpoint** | Whether to wait for everyone or move on |
| **When people get stuck** | The sticking points that actually occur, and what to do |

Explanations are drawn from [`courses/en/fundamentals/`](../fundamentals/). **To change the content, change it on the fundamentals side**（this script is an extract）.

| Chapter | fundamentals drawn from |
|---------|-------------------------|
| Chapter 2 | [`01-modes`](../fundamentals/01-modes.md)（models and Auto） |
| Chapter 5 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 6 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 7 | [`06-rules`](../fundamentals/06-rules.md) |

> Anything marked **［Say it out loud］** is delivered verbally by the instructor at that moment. Those are the “late requirements” in chapters 4 and 5.
> The timing is specified to recreate “the client says something after the fact” — there's nothing to keep secret.

---

## Preparation（what this session needs）

| Needed | What it is |
|---|---|
| `.cursor/skills/requirements/` | The spec-writing skill. It interviews you about the subject, fills in “what it does / screen / interactions / out of scope”, and produces a Markdown spec |
| `.cursor/skills/task-breakdown/` | The task-splitting skill. It cuts a spec into tasks small enough to hand the Agent one at a time, each with a definition of done |

**Both must already be in the repo.** Chapters 5 and 6 use them.

---

## Timetable

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | Ch.1 Today's goal | Build the same game twice（5 min） | Instructor |
| 0:05 | Ch.2 Build it with vibe | Everyone types the one example line（15 min） | Everyone |
| 0:20 | Ch.3 Compare | Show each other your screens（10 min） | Everyone |
| 0:30 | Ch.4 The late requirement | Fit the client's new requirement into your vibe version（15 min） | Everyone |
| 0:45 | Ch.5 Write the spec | Write your own spec with the spec skill（15 min） | Everyone |
| 1:00 | Ch.6 Split into tasks and build | Split into tasks → build one at a time（20 min） | Everyone |
| 1:20 | Ch.7 What to take away | Deciding which to use, and next session（10 min） | Instructor |

**Participants have their hands on the keyboard for 75 of the 90 minutes.**

> This timetable is also the chapter structure of the slides. Each chapter gets a title page.

> **If you're running late**: cut chapter 6（if the spec got written, half the purpose is achieved）. **Don't cut chapters 3 and 4.** They are the body of this session.

---

## Cover and intro — 0:00（inside chapter 1）

### ［Slide］Cover

```
From vibe coding to spec-driven development

Cursor hands-on course　Session 2 / 4　·　90 minutes
（date）
```

### ［Slide］Recap of last session（30 seconds）

**Last session's loop is unchanged today. The only thing that changes is what's inside the request.**

```
Ask（@file + question）
  ↓ understand it
Agent（@file + request + definition of done）
  ↓ read the diff
Keep or Undo
```

### ［Slide］What we're doing today

**Building the same game twice.**

| | How | Where |
|---|---|---|
| First time | Decide nothing, just say “make it nice” | Chapter 2 |
| Second time | Write the spec first, then build | Chapters 5 and 6 |

**Not to see which is better, but to take away an answer to: when do you use which.**

### What the instructor says

If anyone missed session 1, take the recap slide carefully. Otherwise run it in 30 seconds.

**Announcing up front that “we'll build it twice” stops people fretting about how rough the first attempt is.** Don't skip this.

---

## Chapter 1 Today's goal — 0:00（5 minutes）

> Build the same game twice. First with vibe coding, then from a spec.

### ［Slide］What participants do

Nothing. Just listen.

### What the instructor says

> “Today everyone builds the same game: memory match. But we build it twice.
> First: no thinking, just ask for ‘something nice’（vibe coding）
> Second: write the spec first, then build（spec-driven development）
> Which one goes better — let your hands find out.”

**Announcing up front that we build it twice stops people fretting about how rough the first attempt is.** Don't skip this.

One line of recap from last session（the Ask → Agent → diff → Keep loop）.

**Today's four rungs:**

| Rung | What you'll be able to do | Where |
|------|---------------------------|-------|
| 01 | Get something running with vibe coding | Chapter 2 |
| 02 | Notice that the same request produced something different for everyone | Chapter 3 |
| 03 | Write the spec before building | Chapters 5 and 6 |
| 04 | Take a late requirement, add it to the spec, push it through ← **stretch** | Chapter 6 |

> **Terminology**: the methods are called “vibe coding” and “spec-driven development”.
> When comparing what each produced, call them the “**vibe version**” and the “**spec version**”. Use those two terms with participants as well.

### Checkpoint

None. Wrap it up in five minutes.

### When people get stuck

If anyone missed session 1, add just the Ask → Agent → diff → Keep loop in 30 seconds.

---

## Chapter 2 Build it with vibe — 0:05（15 minutes）

> How far you get when you decide nothing. **Everyone ends up with their own vibe version.**

### ［Slide］Explanation — why we pin the model

Next to the input box sit both the **mode**（Agent / Ask…）and the **model**（Auto…）. Different things.

| | What it decides | Switch with |
|---|---|---|
| **Mode** | The AI's **behaviour**（does it edit, or only investigate） | `Shift+Tab` |
| **Model** | **The AI brain itself** handling the request | `Ctrl+/`（Mac: `Cmd+/`） |

The default **Auto** doesn't mean “no model is chosen” — it means **the Cursor Router picks one per request**. Hard tasks go to a stronger model, easy ones to a cheaper one.

**Day to day, Auto causes no trouble.** Pinning it is worth it when you **want to compare results**, exactly like today. Leave it on Auto and the vibe version and the spec version may run different models, and you can no longer tell whether the difference came from the method or the model.

> More detail: [`01-modes.md`](../fundamentals/01-modes.md)

### ［Slide］What participants do

**① Pin the model（3 minutes, required）**

Click the model shown in the input box（**Auto** or **High**）, or press `Ctrl+/`（Mac: `Cmd+/`）, and choose **a specific model rather than Auto**.

**You'll use that same model for the rest of today.** Change it partway and the later comparison becomes “a different model” rather than “a different method”.

**② Make a working folder（1 minute）**

Create a new folder called `session02/`.

**③ Have it build memory match（10 minutes）**

Open a new chat and send this. **That's all.**

```text
Build me a memory match game.
HTML + JS, playable in a browser.
Make it nice.
```

**④ Run it（1 minute）**

When it's done, open it in the browser and confirm you can play.

### What the instructor says

**At ①**: this is the one operation in this session that, if skipped, breaks the later comparison. Safest to check everyone's screen before moving on.

**Right after ③, during the wait（1–3 minutes）**: this is a long wait. Say the following.

- That we're deliberately asking sloppily. “Make it nice” is exactly the phrasing listed under “avoid saying” last session
- That **when it comes back, they should hunt for things nobody asked for** ← trailing chapter 3

**After ④**: “Fast. Something running, straight away. Up to here is vibe coding's home ground.”

**Don't let it end at ‘the AI is amazing’.** Use it as the hook into the next chapter.

### Checkpoint

- [ ] The model is pinned to a specific model, not Auto（**required for everyone**）
- [ ] Their own vibe version is running in the browser

**Move on even if someone's didn't run.** Chapter 3 works fine if they look at a neighbour's screen.

### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Doesn't know how to pick a model | Click the model name in the input box. `Ctrl+/`（Mac: `Cmd+/`）also opens it |
| Can't open it in a browser | Open it in Cursor's built-in browser. Check the file path too |
| A pile of files got generated and it's confusing | Leave it. Nothing gets tidied in this chapter |
| It doesn't run | Paste the error to the Agent and have it fixed. Still nothing — look at a neighbour's screen |

---

## Chapter 3 Compare — 0:20（10 minutes）

> **This chapter only works in a room together.** It shows what you can't notice on your own.

### ［Slide］What participants do

**① Show your vibe version to the person next to you（5 minutes）**

Compare the following between yours and theirs.

| Compare | Mine | Theirs |
|---|---|---|
| How many cards | | |
| What's on the face（numbers / emoji / colours） | | |
| Is a score or a move count shown | | |
| Is there a difficulty setting | | |
| Appearance（colours, layout） | | |

**② Count what *you* never asked for（3 minutes）**

The request you sent was three lines. List everything that came along beyond that.

**③ Answer in one line（2 minutes）**

> **Which of these is the thing you wanted to build?**

### What the instructor says

**Circulate during ① and collect the differences.** Someone with a different card count, someone with different faces, someone with a score and someone without. **Gather material to use with the whole room straight after.**

**At ②**: this is the first point.

> “Nobody asked for a score, or difficulty. The AI decided. **You can't tell what you specified apart from what the AI decided.** That's vibe's first property.”

**At ③**: this is the second point.

> “Everyone typed the same three lines, and everyone got something different. **Type them again and you'd get something different again.** It runs, but you didn't aim it.”

Then hand over to the next chapter.

> “It runs, so who cares. Except that vibe version is about to get **an extra requirement from the client**.”

### Checkpoint

- [ ] They compared with a neighbour（anyone on their own compares against the instructor's screen）
- [ ] They can name at least one thing that appeared without being asked for

### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Neighbour absent, working alone | Compare with the instructor's vibe version, or with someone at the next table |
| Everyone's looks very similar | Card count, faces, or the presence of a score will differ somewhere. Get them looking closer |
| “This doesn't bother me” | The right reaction. Reply: “what doesn't bother you now — watch what it does in the next chapter” |

---

## Chapter 4 The late requirement — 0:30（15 minutes）

> **The peak of this session.** What happens to a vibe version when an extra requirement arrives.

### ［Say it out loud］The extra requirement the instructor gives on the spot

The instructor plays the client and delivers this verbally at this moment.

> “The client has two more requests.
> **① When you match a pair, you get another turn.**
> **② From the third mistake onwards, shorten the wait before the cards flip back to 0.5 seconds.**”

Neither is **a rule the AI would infer from what everyone knows about memory match**. Which is why not one vibe version has them.

### ［Slide］What participants do

**① Open a new chat（1 minute）**

Not the chat you're using — **a new chat**.

> **Why**: the current chat still holds the context of what you just built. A new chat doesn't. **That puts you in exactly the position of handing this to someone else.**

**② Have the extra requirements implemented（8 minutes）**

Write the two things the instructor said in your own words and send them.

```text
@session02/
（write the extra requirements the instructor said, yourself）
Don't change any other behaviour.
```

**③ Record it（6 minutes）**

| Record | Answer |
|---|---|
| Lines changed（the +/- of the diff） | |
| Did any existing feature break | |
| **Could you judge for yourself that it was implemented correctly** | |

The third row is the most important question of the day.

### What the instructor says

**At ①**: a lot of people skip opening a new chat. Skip it and you never get into “handing it to someone without the context”, and the chapter stops working.

**Right after ② is sent, during the wait**: talk about the third row of the record sheet in advance.

> “When it comes back, check whether it went in correctly. **What are you comparing it against?**”

**At ③**: this is the third and fourth point.

> “It probably works. The AI is good. But how did you check that it's **actually 0.5 seconds**? From your own memory. **The thing you compare against exists only inside your head.**”

> “And just now, when you handed it to a new chat, the AI had to read the code from scratch. **Nobody except you knows what this code was meant to be.**”

**Most people will manage the implementation. That's fine.** The claim of this chapter isn't “you can't do it” but “**you can't tell whether you did it**”.

### Checkpoint

- [ ] They made the request in a new chat
- [ ] All three rows of the record sheet are filled in

**If someone's broke, that's a bonus.** Share it with the room as material. If nothing broke, that's fine too.

### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't remember the extra requirements | The instructor says them again |
| Carried on in the old chat | Record that too. “Having the context made it easier” is also a lesson worth catching |
| Doesn't know how to count lines changed | The +/- appears at the top right of the diff, or on the change bar in the Agent panel |
| Can't confirm whether it was implemented | **That is the correct answer.** Have them write “couldn't confirm” |

---

## Chapter 5 Write the spec — 0:45（15 minutes）

> Round two. This time **you write the spec first**.

### ［Slide］Explanation — what a Skill is

**A Skill is a package holding “the procedure for doing this kind of work”.** It saves you writing the same procedure out every time.

| Mechanism | Role | Example |
|-----------|------|---------|
| **Rules** | Policy and constraints, always in force | “Commit messages in English” |
| **Skills** | **A playbook loaded only when needed** | How to write a spec, how to split tasks |

They live at `.cursor/skills/<name>/SKILL.md`. There are three ways to invoke one.

| How | Scope |
|-----|-------|
| **Automatic** | When the Agent judges it should be used |
| **Slash** | Type `/` and pick it. **That one message only** |
| **Custom Mode** | Pin it with `Alt+Enter`（Mac: `Option+Enter`）. **The whole session** |

**Today we use the slash.**

---

**The four things a spec must contain**

| Section | Contents |
|---|---|
| **What it does** | What's needed for it to exist at all |
| **Screen** | What's visible and what can be clicked |
| **Interactions** | What happens when the user does something |
| **Out of scope** | **What you decide not to build this time** |

The fourth is where today's leverage is. **The AI keeps adding things that were never written down**, so you forbid them in advance. The same logic as the score and difficulty that appeared uninvited in chapter 2.

> More detail: [`07-skills.md`](../fundamentals/07-skills.md) · [`05-prompting.md`](../fundamentals/05-prompting.md)

### ［Slide］What participants do

**① Call the spec skill（2 minutes）**

In a new chat, type `/` in the input box and pick **requirements**.

```text
/requirements I want to build memory match
```

**② Fill in the spec through the conversation（8 minutes）**

Answer what the skill asks. There are four sections to fill.

| Section | Contents |
|---|---|
| **What it does** | What the game needs to exist at all |
| **Screen** | What's visible and what can be clicked |
| **Interactions** | What happens when the user does something |
| **Out of scope** | **What you decide not to build this time** |

**Don't forget to write down the two things the client asked for in chapter 4.**

**③ Take another requirement and add it（5 minutes）**

The instructor gives one more requirement. Handle it **by adding one line to the spec**.

### ［Say it out loud］The second extra requirement

**At step ③, the instructor says this out loud.**

> “One more. **When only two pairs are left, change the colour of the cards' backs.**”

### What the instructor says

**During ②**: circulate and **talk to anyone whose “Out of scope” is empty**. Leave it empty and the AI will start adding things again.

> “‘Out of scope’ is where today's leverage is. The AI adds things that were never written down, so **forbid them in advance**.”

**Later in ②**: check that the two things from chapter 4 made it into the spec. If they did, point at them and say:

> “What was said out loud earlier is now **in writing**. Now somebody other than you can judge whether it's right.”

**At ③**: this is today's answer key.

> “The same kind of extra requirement arrives. In chapter 4 you went and touched the code directly, right? **This time you added one line to the spec.** What was different?”

### Checkpoint

- [ ] All four sections of the spec are filled in（especially **Out of scope**）
- [ ] The two extra requirements from chapter 4 are written in the spec
- [ ] The second extra requirement has been added as one line

**The spec doesn't need to be perfect.** If it's filled in, move on.

### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't invoke the skill | Type `/` and look through the list. If it isn't there, check `.cursor/skills/` exists |
| Can't think of anything for “Out of scope” | Offer examples: difficulty settings, a time limit, animation, external libraries |
| The spec grew too big | Make them cut “What it does” to five items. The rest goes to “Out of scope” |
| The conversation never ends | Cut it at eight minutes. Move on with the unfilled sections empty |

---

## Chapter 6 Split into tasks and build — 1:00（20 minutes）

> Cut the spec into pieces you can hand over one at a time, then build.

### ［Slide］Explanation — one thing per request

Session 1 covered “a vague request gets you a vague result”. **Splitting into tasks is the concrete way of doing something about it.** Each request takes this shape.

```text
[What I want] one line
[Scope] @file or folder
[Constraints] what must not break
[Done when] what has to exist for this to be finished
```

**With a definition of done, you can judge what comes back.** That is the counterpart to chapter 4, where the basis for judging existed only inside your head.

When it gets long, switch to a **new chat**, so you don't drag old assumptions along.

> More detail: [`05-prompting.md`](../fundamentals/05-prompting.md)

### ［Slide］What participants do

**① Split it into tasks（5 minutes）**

```text
/task-breakdown （hand it the spec you wrote）
```

**Three to five** is plenty. Trim if there are more.

**② Build them one at a time（15 minutes）**

Open a **new chat** and hand over **exactly one** task.

```text
（the contents of task 1）
Done when: （the definition of done from the task）
Don't change any other feature.
```

Read the diff, Keep it, then move to the next task.

**③ The finish line**

- [ ] Cards are laid out and can be flipped
- [ ] Matches and mismatches are detected
- [ ] Matching every pair shows a completion message
- [ ] **At least one of the extra requirements from chapters 4 and 5 is in**

### What the instructor says

**At ①**: “one thing per request” is today's pattern. Session 1 covered “a vague request gets you a vague result”. **Splitting into tasks is the concrete way of doing something about it.**

**During the waits in ②**: circulate and watch for:

- Anyone vibing without handing over the spec → have a word
- Anyone cramming two or more things into one request → tell them “one at a time”

**When time is up, stop, finished or not.** The purpose of this chapter isn't completion but **running the handover pattern once**.

### Checkpoint

- [ ] It's split into three to five tasks
- [ ] At least two tasks were built and kept

**It doesn't have to be finished.** Two of the four finish-line items is enough.

### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| It split into ten or more tasks | The spec is too big. Add to “Out of scope” and split again |
| Handing them over one at a time is tedious, so they sent them all | Don't stop them. **It becomes material for comparing results later** |
| Not enough time | Stop at two finish-line items. Don't cut chapter 7 |
| It got mixed up with the vibe version | Separate the folders（`session02/` and `session02-spec/`） |

---

## Chapter 7 What to take away — 1:20（10 minutes）

> Deciding which to use, and next session. **Don't shorten this.**
> The split: reflection 3 + things to remember 2 + vibe isn't the bad guy 1 + what's ahead 1 + next session 1 + a check for next session 2 = 10 minutes

### ［Slide］What participants do

- Answer the three reflection questions
- At the end, **raise your hand** for the check for next session（does `git status` run / do you have a GitHub account）

### What the instructor says

**Reflection（ask participants, 3 minutes）**

1. The same “extra requirement”, put into the vibe version and added to the spec — **what was different**
2. How did you confirm “it was implemented correctly” in each case
3. If you were told tomorrow to build the same game again, which method would you use

**Three things to remember（2 minutes）**

1. **Vibe is fast. But you can't aim it**（things you didn't ask for appear / the same request gives different results）
2. **A spec has to be in a form you can hand to someone else**（what it does + **out of scope**）
3. **Add one thing at a time, with a definition of done**

**Vibe coding isn't the bad guy（1 minute）**

> “Vibe coding suits a first prototype and suits investigating. You had something running in minutes today, right? **That's a genuine strength.**
> But to ‘keep it working while several people grow it’, you need a spec.
> **Being able to decide which to use** — that's today's goal.”

**What's ahead（1 minute, one slide）**

What you wrote today was “a spec for this one job”. **The agreements you want obeyed every time can live in `.cursor/rules/`.**

| Mechanism | When it applies |
|-----------|-----------------|
| **Rules** | **Always**（policy and constraints, without retyping them in every prompt） |
| **Skills** | Only when needed（a procedure） |
| **The spec** | Only that one project |

Things like “commit messages in English” or “don't create tests unless asked” — **the agreements of a team or a repo** — are Rules. Session 3 uses them in the team work.

> More detail: [`06-rules.md`](../fundamentals/06-rules.md)

**Next session（1 minute）**

> “In session 3 you pick your own themes and start building an app. What does ‘write the spec first’ look like as a team? We'll also add the minimum flow of branches, PRs and review.”

### Checkpoint（measuring for next session, everyone, 2 minutes）

Session 3 uses Git and PRs. **Measure it here.** Discover it on the day and the second 40 minutes turns into a Git lesson.

- [ ] `git status` runs in the terminal
- [ ] They have a GitHub account

Have anyone missing either raise a hand, and **note the number**. Three or more is grounds for making session 3's PR optional.

### When people get stuck

If nobody can answer reflection question 1, point at the record sheet from chapter 4. There are numbers on it, which makes it easier to answer.

### Homework（optional）

- Read [`05-prompting.md`](../fundamentals/05-prompting.md)（the template for asking well）
- Add one line to today's spec yourself and grow one more feature

---

## Appendix: a sample minimum spec（for checking against）

**Don't hand this out at the start.** Use it to rescue anyone who couldn't write a spec in chapter 5, or for the instructor to show “this much is enough”.

```markdown
# Requirements — Memory match

## What it does

- Shuffle 8 pairs（16 cards）and lay them out face down
- The player flips two cards
- If they match, leave them face up（a pair）
- If they don't match, flip them back after 1 second
- **When you match a pair, you get another turn**
- **From the third mistake onwards, shorten the wait before flipping back to 0.5 seconds**
- **When only two pairs are left, change the colour of the cards' backs**
- Matching every pair completes the game（show “Congratulations”）

## Screen

- Lay the cards out in a 4×4 grid
- The backs share one design（a flat colour is fine）
- The faces carry a symbol that identifies a pair（emoji or a number）

## Interactions

- Click a card to flip it
- At most two cards face up at a time（a third click does nothing）
- Cards already face up can't be clicked

## Out of scope

- Difficulty settings
- A time limit
- Score and leaderboards
- Animation（no flip effect, just a display change）
- External libraries and APIs
- Persistence（a reload may reset everything）
```

**The three bold lines**（another turn on a match / 0.5 seconds / the backs change with two pairs left）are this session's trump card. They are **rules the AI won't infer from what everyone knows about memory match**, so no vibe version can contain them.

---

## Instructor checklist（for the day）

### Beforehand
- [ ] Checked whether anyone still hasn't cloned since session 1（if so, handle it at the very start）
- [ ] **`.cursor/skills/requirements/` and `.cursor/skills/task-breakdown/` are in the repo**
- [ ] You've run chapters 2 to 6 yourself once（**required**. Whether the AI infers the extra requirements varies by AI version）
- [ ] Confirmed you can open HTML in Cursor's built-in browser
- [ ] Chosen one model to use（pinned, not Auto）
- [ ] `session02/` and `session02-spec/` are empty
- [ ] **You know the three extra requirements（table below）and when each is given**

### The extra requirements（instructor only）

| Given when | What |
|---|---|
| Start of chapter 4 | Matching a pair earns another turn |
| Start of chapter 4 | From the third mistake, the wait before flipping back drops to 0.5 seconds |
| Chapter 5, step ③ | With two pairs left, the cards' backs change colour |

**If you meet an AI version that infers these, swap the requirements.** The conditions are “cheap to implement” and “not something you'd get from general knowledge of memory match”.

### Time management per chapter
- Cut chapter 2 at 15 minutes. The momentum of “it runs” beats a perfect result
- **Don't cut** chapters 3 and 4. They are the body of the session
- If chapter 6 passes 1:20, stop even if it isn't finished
- Chapter 7 keeps its full 10 minutes no matter what

### Assumptions about running it
- Pinning the model（chapter 2 ①）and opening a new chat（chapter 4 ①）break their chapters if skipped. The timings assume you confirm them before moving on
- The extra requirements are delivered verbally at the start of chapter 4 and at step ③ of chapter 5
- If someone's vibe version comes out well, “vibe was enough this time” is a legitimate part of the lesson

### Common sticking points
| Sticking point | What to do |
|----------------|------------|
| The Agent generated a pile of files and it's confusing | Nothing gets tidied in chapter 2. By chapter 6, have them write “one file is fine” into the spec |
| Can't open it in a browser | Open it in Cursor's built-in browser. Check the file path too |
| Extra features appear even after handing over the spec | Emphasise “Out of scope” and hand it over again. This itself makes excellent teaching material |
| Someone feels vibe went better | Say so honestly — at small scale it does. At larger scale it tends to flip |
| Results are too scattered to compare | Check whether the model is still on Auto. Chapters 2 and 6 must use the same pinned model |

> **The deliverable isn't decided.** If you want one, collect the record sheet from chapter 4（lines changed, did anything break, could you judge it）.
