# Session 5: Finishing and presenting（90 minutes）

> **The goals（four）**
> 01 Finish the remaining tasks through PRs → 02 The one action you'll show in the presentation works **on main** → 03 Give a 5-minute team presentation → 04 Put into one sentence what changed over the whole course
> **Reaching 02–04 is success.** 01 is done only as far as it doesn't put 02 at risk（it's fine if not every task gets finished）.

> **Today is presentation day.** Finish in the first half, **stop merging at 1:00**, and then present as a team.
> **No new features are added.** Not breaking what works is today's most important agreement.

---

## The whole shape of this script

1. The claim of this session（for the instructor）
2. 00-1 How to read this script
3. 00-2 Preparation on the day
4. 00-3 Timetable
5. 0-1 Cover and intro
6. Chapters 1 to 5
7. The instructor checklist

---

## The claim of this session（for the instructor to understand）

**We don't assess “how complete it is”.** What we assess is whether the team could show **what they decided（the one action you'll show in the presentation）, in the place they decided（main）, at the time they decided**.

This continues sessions 3 and 4（session 2's vibe coding was the starting point for comparison）.

| Session | What was decided | The standard for checking |
|---|---|---|
| Session 3 | Requirements and tasks | **The done-when condition**（checked by yourself before Keep） |
| Session 4 | The team's requirements and assignments | **The done-when condition**（checked by someone else before Approve） |
| Session 5 | **The one action you'll show in the presentation** | **Does it work on main**（in front of everyone） |

**The one action you'll show in the presentation is the done-when condition for the whole app.** It was decided in chapter 2 of session 4, and is written in `README.md`.

### Why the presentation runs “from main”

Something that only works on one person's PC isn't the team's result. **Only what has been merged and is on main belongs to the team.** In session 4 we practised “hand over changes as PRs”, so to round that off, **we present from main**.

1:00–1:05 is set aside as **presentation preparation**. Here, merging new PRs stops, main is updated on the presenting PC, and the one action is run through once.

### What the reflection brings together

The reflection on the whole course connects the pattern of each session. What participants take home isn't “I learned how to use Cursor” but “**what I hand over has changed**”.

| Session | What was handed to the AI（or to other people） |
|---|---|
| Session 1 | `@file` and a request |
| Session 2 | A three-line request（“make it nice”） |
| Session 3 | Requirements, tasks, a rule |
| Session 4 | PRs（the change, and the standard for checking it） |
| Session 5 | Something that works on main |

---

## How to read this script

### The shape of this section

1. 00-1 The key points

### 00-1 The key points

The format is the same as sessions 3 and 4（`N-M` = step M of chapter N; each chapter has five blocks: “Explanation / What participants do / What the instructor says / Checkpoint / When people get stuck”）.

| Chapter | fundamentals drawn from |
|---------|-------------------------|
| Chapter 2 | [`20-git`](../fundamentals/20-git.md)（updating main, conflicts） · [`16-browser-design`](../fundamentals/16-browser-design.md)（column: Design Mode） |
| Chapter 3 | [`20-git`](../fundamentals/20-git.md) |

**Today we don't teach any new Cursor features.** This session uses up the patterns from sessions 1 to 4.

---

## Preparation on the day（checked at 0:00）

### The shape of this section

1. 00-2 The day's preparation list

### 00-2 The day's preparation list

| Item | Steps |
|------|-------|
| **The team repository** | Use last session's as it is. **Everyone opens it in Cursor and updates `main`** |
| **Who talks when** | Which of the four talks about which part is decided in chapter 3 |
| **Screen sharing** | Check that QA's PC can be shown. **Try it for one team at 0:00** |
| **Timer** | Time the 5-minute presentation. Show it where **everyone can see it** |
| **Where reflections go** | Paper / chat / a shared document. In chapter 5, participants answer three questions |

> **For a team whose PRs were merged as homework, main has already moved on at 0:00.** Have everyone do `main` → **Sync Changes** before starting.

---

## Timetable

### The shape of this section

1. 00-3 The 90 minutes

### 00-3 The 90 minutes

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | Ch.1 Today's goal | Share the deadline and the presentation format（5 min） | Instructor |
| 0:05 | Ch.2 Finish it | Add and fix the remaining tasks through PRs（55 min） | Team |
| 1:00 | Ch.3 Presentation preparation | Stop merging, and run the one action on the presenting PC（5 min） | Team |
| 1:05 | Ch.4 Presentation | A 5-minute team presentation + 5 minutes of questions（10 min） | Team |
| 1:15 | Ch.5 Reflection | Individual → the whole room → the whole course（15 min） | Everyone |

**There are 4 participants in one team, so the presentation takes 10 minutes（5 minutes presenting + 5 minutes of questions）.** That leaves 55 minutes for finishing.

> If you run it with several teams, widen the presentation slot to “number of teams × 4 minutes” and shorten chapter 2 by the same amount（35 minutes for 8 teams）.

> **If you're running late**: cut chapter 2. **Don't cut chapter 3（presentation preparation）** — skip it and you get “but it worked on my PC” in the middle of the presentation. Chapter 5 still works if you keep just two parts: the individual reflection → the summary of the whole course.

---

## Cover and intro — 0:00（inside chapter 1）

### The shape of this section

1. 0-1 From the cover to what we do today

### 0-1 From the cover to what we do today

#### ［Slide］Cover

```
Finish it and present

Cursor hands-on course　Session 5 / 5　·　90 minutes
（date）
```

#### ［Slide］Before we start（everyone, at 0:00）

Before the lesson starts, everyone does these two things.

- [ ] Open your team repository in Cursor
- [ ] Switch to `main` and press **Sync Changes** to get the latest

> If your team merged PRs after the last session, `main` has moved on. Update it before we start.

#### ［Slide］Recap of last session（30 seconds）

```
/start-task (become the Assignee of an Issue; a branch is created from the latest main)
  ↓
Send the task's “what to build” (the done-when condition and “don't change anything else” are in the rule)
  ↓
Read the diff → check the done-when condition → Keep → commit → PR (Closes #number in the description)
  ↓
Someone else checks it on screen and presses Approve → merge (the Issue closes)
```

#### ［Slide］How today runs（three points）

1. **Don't add new features.** Fix only what gets in the way of the one action you'll show in the presentation
2. **Stop merging at 1:00.** After that, nobody touches main
3. **Present even if it doesn't work.** “What we were trying to build” and “where we got stuck” also make a perfectly good presentation

#### ［Slide］Column — the terms from session 4, again

**These are terms first used in session 4.** We keep using them today.

| Term | Meaning |
|---|---|
| **Branch / main** | A place to work on changes separately from main / the base branch where only things the team has checked go in |
| **Commit / PR / Merge** | Recording changes / a request to check whether it can go into main / taking a PR's changes into main |
| **Issue / Assignee** | A “thing to do” registered on GitHub / who does that Issue |
| **`/start-task`** | A Skill that makes you the Assignee of a free Issue and creates a branch from the latest main |
| **`Closes #number`** | Written in a PR's description, it closes that Issue when the PR is merged |
| **Sync Changes** | Brings new changes on GitHub into your PC, and sends your commits if you have any |
| **Conflict** | When two people changed the same place in the same file, and they can't be combined automatically |

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

#### What the instructor says

**At 0:00, have everyone update main before starting.**

> “First, everyone switch to `main` and press Sync Changes. If anyone opened PRs as homework, they'll come through.”

**Say “present even if it doesn't work” at the very start.** Without it, teams whose app doesn't work panic in the first half and start adding new features.

---

## Chapter 1 Today's goal — 0:00（5 minutes）

> Hand over the deadline and the presentation format first. **In this chapter the instructor only talks.**

### The shape of this chapter

1. 1-1 Today's goal, the deadline, and how to present

### 1-1 Today's goal, the deadline, and how to present

#### ［Slide］Today's goal

| Rung | What you'll be able to do | Where |
|----|---------------------------|-------|
| 01 | Finish the remaining tasks through PRs | Chapter 2 |
| 02 | The one action you'll show in the presentation works **on main** | Chapter 3 |
| 03 | Give a 5-minute team presentation | Chapter 4 |
| 04 | Put into one sentence what changed over the whole course | Chapter 5 |

#### ［Slide］The deadline

```
0:05 ─────────── Finishing ─────────── 1:00 ── Presentation prep ── 1:05 ── Presentation
                                         ↑
                                  Stop merging here
```

**Anything merged after 1:00 isn't shown in the presentation.**

#### ［Slide］The presentation format（5 minutes）

| Order | Contents | Rough time |
|---|---|---|
| 1 | “We built ○○”（the client, and the one action you'll show in the presentation） | 30 seconds |
| 2 | Actually do **the one action you'll show in the presentation** | 1 minute 30 seconds |
| 3 | One **thing you put in “out of scope”**. Was it good to put it there? | 1 minute |
| 4 | What went well with Cursor and team development | 1 minute |
| 5 | What was hard | 1 minute |

**Don't make slides.** Show the screen and talk. **The four of you split the talking**（at least one part each）.

#### What the instructor says

> “Today's goal is to show the ‘one action you'll show in the presentation’, decided in session 4, **on main**.
> That's the done-when condition for the whole app.”

Point at item 3（out of scope）and add one sentence.

> “Always talk about one thing in ‘out of scope’. **What you didn't build** is a decision as important as what you built.”

#### Checkpoint

- [ ] Everyone has updated `main`
- [ ] You told them that who talks about which part is decided in chapter 3

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Missed last session and doesn't have the repository locally | Ask someone in the team for the repository URL, and use `Git: Clone`. If they haven't been invited yet, today they are **the one who watches the team's screen** |
| A conflict screen appeared on Sync | They may have been working directly on `main`. The instructor joins them（see “When people get stuck” in chapter 2） |

---

## Chapter 2 Finish it — 0:05（55 minutes）

> Add the remaining tasks with the same flow as session 4. **No new features are added.**

### The shape of this chapter

1. 2-1 The order for finishing（explanation）
2. 2-2 Add the remaining tasks, and check the one action

### 2-1 The order for finishing（explanation）

#### ［Slide］Explanation — where to start

**Work from the top down.** Don't do a lower item while an upper one isn't finished.

| Order | What to do | Who |
|---|---|---|
| 1 | Add **the tasks needed for the one action you'll show in the presentation** through PRs | The Assignee |
| 2 | Fix **bugs that get in the way of** the one action | Whoever finds them |
| 3 | Check that “how to run it” in `README.md` is correct | QA |
| 4 | The remaining tasks（ones the one action doesn't need） | The Assignee |

**If item 4 isn't finished by 1:00, drop it.** Its Issue can stay open. **Issues still open at 1:00 = the tasks not done this time.**

#### ［Slide］Explanation — where “don't add” draws the line

| OK to add | Don't add |
|---|---|
| Tasks that are Issues | Features that aren't in an Issue |
| Fixes for whatever stops the one action from working | Polishing the look（anything unrelated to the one action） |
| Fixes for a broken display that hides the one action | Improvements made “while you're at it” |

**If in doubt, decide by “does it relate to the one action you'll show in the presentation?”**

### 2-2 Add the remaining tasks, and check the one action

#### ［Slide］What participants do（55 minutes）

**① Everyone: add your own task through a PR**

The same as session 4.

```
1  Choose an Issue with /start-task (you become the Assignee; a branch is created from the latest main)
   (if you already became the Assignee last session, switch to your branch from the branch name at the bottom left)
2  In a new chat, send only the task's “what to build”
3  Read the diff → check the done-when condition → Keep
4  ＋ → ✨ → Commit → Publish Branch (Sync Changes from the second time on)
5  Open the PR. Closes #number in the description
6  Someone else checks it on screen and presses Approve → merge (the Issue closes)
```

**When your own task is done, take a free Issue with `/start-task`.** If there are no free Issues, read other people's PRs.

**② QA: every time something is merged, run the one action**

When a PR is merged: `main` → Sync Changes → open it in the browser, and try **the one action you'll show in the presentation**.

**If it's broken, tell the team straight away.** Fixing it while you still know which PR broke it is the fastest way.

**③ Once the one action works: decide how the presentation will run**

Make sure QA can **say out loud** “what to open → where to press → what happens”.

#### ［Slide］Column — terms for undoing a change（Revert）

| Term | Meaning |
|---|---|
| **Revert** | Undoing the changes of a merged PR. Press **Revert** at the bottom of the PR page, and **a new PR for putting things back** is created |
| **The Revert PR** | The PR created by Revert. **Merging it puts main back.** Just pressing the button doesn't put it back yet |

**Revert is the last resort when time is running out and you still can't fix it.** First, the Assignee of the PR that broke things fixes it on a new branch.

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Column — when you want to fix the look just a little（Design Mode）

Use it **only when the one action is hard to see**（a button is too small, text overlaps）.

With it open in the built-in browser, press `Ctrl+Shift+D`（Mac: `Cmd+Shift+D`）→ select the place to fix with `Shift` + drag → pass it to the chat with `Ctrl+L`（Mac: `Cmd+L`）.

**This also goes in through a branch and a PR.** No exceptions.

> More detail: [`16-browser-design.md`](../fundamentals/16-browser-design.md)

#### What the instructor says

**At 0:05, go first to any team that had 0 closed Issues**（this was promised in chapter 7 last session）.

What to look at while circulating:

| Situation | What to do |
|------|------|
| The one action still doesn't work | **Have them drop the tasks the one action doesn't need.** “It's enough if the one action you show works” |
| Trying to add a new feature | Stop them. “Before 1:00, it might break what's working now” |
| Fixing things directly on `main` | Have them create a branch. **No exceptions, even today** |
| Nobody is reading PRs | Remind them that “anyone with free hands reads PRs” |
| Has time to spare | Take a free Issue with `/start-task`. When that's done too, have them rehearse how the presentation runs twice |

**At 0:50, speak to the whole room once.**

> “Merging stops in 10 minutes. **If what you're building now won't be finished in 10 minutes, drop it.**”

#### Checkpoint

- [ ] All the tasks needed for the one action you'll show in the presentation have been merged
- [ ] The one action worked on QA's local `main`

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| **The PR shows “This branch has conflicts”** | Ask the Agent for the following（the prompt below）. Once resolved, send it with Sync Changes. The PR updates automatically |
| A conflict screen appeared locally | Press **Resolve in Chat**. Read the proposed resolution in the diff too, then Keep |
| The one action broke after a merge | **The PR just before is the cause.** That PR's Assignee fixes it on a new branch and opens a PR |
| 0:55 has passed and it still isn't fixed | Press **Revert** on the PR page on GitHub → **merge** the PR that was created（just pressing the button doesn't put it back）. **Getting back to the state that worked comes first** |
| Committed on `main` by mistake（not sent yet） | Ask the Agent: “move the current commit on `main` to a new branch, and put `main` back” |
| The branch from last session is out of date | Bring in `main`（the prompt below）. Or drop it and create a new branch from the latest `main` |
| The Assignee is absent | **If the one action doesn't need it, drop it.** If it does, someone else changes the Assignee of that Issue from the absent person to themselves（**Assignees** on the right of the Issue）, then starts with `/start-task` |
| Last session, created a branch without using `/start-task` | Check the Assignee in the Issues tab. If your name isn't there, choose yourself under **Assignees** on the right of the Issue |

What to send to the Agent when there's a conflict, or when bringing `main` into an old branch:

```text
Bring the latest main into the current branch.
If there are conflicts, propose a resolution that keeps both changes.
Once resolved, commit, but don't push yet.
```

---

## Chapter 3 Presentation preparation — 1:00（5 minutes）

> **Merging stops from here.** Update main on the presenting PC, and run the one action through once. **Don't cut this.**

### The shape of this chapter

1. 3-1 Run the one action on the presenting PC

### 3-1 Run the one action on the presenting PC

#### ［Slide］What participants do（5 minutes）

**① Everyone: stop merging**

**After 1:00, no PRs are merged.** It's fine to leave half-finished PRs as they are.

**② QA: update main on the presenting PC（1 minute）**

Switch to `main` → **Sync Changes**

**Always check that the branch name at the bottom left says `main`.** If you present while on a working branch, you'll be showing something that isn't on main.

**③ QA: run the one action through once（2 minutes）**

Open it in the browser, and do **the one action you'll show in the presentation** from start to finish.

**④ Team: go over how the presentation will run, out loud（2 minutes）**

- Who talks（the PM leads the talking and QA operates the screen. It's also fine to split the talking）
- Which item from “out of scope” to talk about
- What to show if it doesn't work（“If it doesn't work” below）

#### ［Slide］If it doesn't work

**Present even if it doesn't work.** Switch to one of the following.

| Situation | What to show |
|---|---|
| It stops partway through the one action | Show **up to just before it stops**, and say “we were trying to build the part after this” |
| The screen doesn't appear | Show `docs/requirements.md` and `docs/tasks.md`, and talk about **what you were trying to build** |
| It isn't on main, but it works on someone's PC | **Don't show it.** Talk about “we couldn't get it into main” as something you got stuck on |

#### What the instructor says

> “Stop merging. **From here on, the main you have now is what you present.**”

**The third one（it works on someone's PC）is today's most important judgement.** People understandably want to show it, so give the reason in advance.

> “Something that only works on one person's PC is something **nobody else in the team has checked**. Since session 4, we've only put things we've checked into main. We keep to that right to the end.”

#### Checkpoint

- [ ] The bottom left of QA's PC says `main`
- [ ] They ran the one action through once（a team whose app didn't work has decided what to show）

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| It stopped working after Sync | The last merged PR is the cause. **Don't Revert**（there's no time）. Show up to just before it stops |
| Still trying to merge after 1:00 | Stop them. **Make no exceptions** |
| Screen sharing doesn't work | Clone the team repository on the instructor's PC and show it there（try this at 0:00） |

---

## Chapter 4 Presentation — 1:05（10 minutes）

> A 5-minute presentation + 5 minutes of questions. **The instructor is the timekeeper.**

### The shape of this chapter

1. 4-1 Presentation and questions

### 4-1 Presentation and questions

#### ［Slide］The presentation format（again）

1. “We built ○○”
2. Actually do **the one action you'll show in the presentation**
3. One **thing you put in “out of scope”**
4. What went well with Cursor
5. What you got stuck on

**At 4 minutes 30 seconds, say “please start wrapping up”.**

#### What the instructor says

**Running it**

- At 4 minutes 30 seconds, say “please start wrapping up”. Cut it off at 5 minutes 30 seconds
- Applause when they finish
- In the question time（5 minutes）, the instructor asks. **Make sure all four people answer at least once**

**Questions（one from the instructor）** — if participants ask questions, those come first.

| What to ask | The aim |
|---|---|
| “Was there anything in ‘out of scope’ that you wanted to add partway through?” | Get them to put into words a moment when “out of scope” did its job |
| “Did reading a PR ever lead you to stop it?” | Check whether the reviews worked |
| “Did any conflicts happen? What did you do?” | Share what got stuck in team development |
| “Is there any part you built with vibe coding?” | Connect it to choosing between the ways of sessions 2 and 3 |

**If it didn't work**: don't criticise. **Ask “what were you trying to build” and “where did it stop”, then pick out one thing that went well and give it back to them.**

> “It was good that you said honestly that you couldn't get it into main. **Stopping there means the team's rule was working.**”

#### Checkpoint

- [ ] The team presented, and all four people spoke at least once

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| It goes far beyond 5 minutes | Cut it off at 5 minutes 30 seconds. **Protect the time for the reflection** |
| It stopped working during the presentation | Have them switch to the “If it doesn't work” table. The instructor picks it up with “it was working up to here” |
| Nobody asks questions | Use one of the instructor's questions |

---

## Chapter 5 Reflection — 1:15（15 minutes）

> Individual → the whole room → the whole course. **What participants take home isn't “how to use Cursor” but “what I hand over has changed”.**
> The split: individual 3 + sharing with the room 6 + summary of the whole course 4 + what's next 2 = 15 minutes

### The shape of this chapter

1. 5-1 Reflection and the course summary

### 5-1 Reflection and the course summary

#### ［Slide］What participants do — individual reflection（3 minutes）

Write the following three things on paper or in the chat.

1. **What changed most for you in this course**（an operation or a way of thinking）
2. **One pattern you'll use from tomorrow**（write the requirements first / one task = one chat / put it in a rule / hand it over as a PR …）
3. **Something another person in your team did that you thought was good**

#### ［Slide］What we did in five sessions

| Session | What we did | What was handed to the AI（or to other people） |
|---|---|---|
| Session 1 | Basic operations | `@file` and a request. Read the diff, then Keep |
| Session 2 | Vibe coding | A three-line request（“make it nice”）. All four got something different |
| Session 3 | Spec-driven development | **Requirements, tasks, a rule** |
| Session 4 | Start building as a team | **PRs**（the change, and the standard for checking it） |
| Session 5 | Finishing and presenting | **Something that works on main** |

**What changed across the five sessions is less about Cursor operations and more about “what you hand over”.**

#### ［Slide］Choosing between them（repeated from sessions 2 and 3）

| When it's like this | The way |
|---|---|
| Small, throwaway, only you will see it | **Vibe coding** |
| A lot to decide, built with others, fixed later | **Spec-driven development** |

**Team development is always on the “built with others” side.** That's why sessions 4 and 5 started from requirements.

#### ［Slide］What's next

| What you want to do | Where to look |
|---|---|
| Review today's patterns | `courses/en/fundamentals/`（05 asking well / 06 Rules / 07 Skills / 20 Git） |
| Automate PR reviews | `courses/en/fundamentals/11`（Bugbot） |
| Run several Agents side by side | `courses/en/fundamentals/12`（Agents Window / Worktrees） |
| The latest on Cursor | [cursor.com/docs](https://cursor.com/docs) |

#### What the instructor says

**Sharing with the room（6 minutes）**: have all four people talk about question 1 or question 2. **Question 3 is a comment about other people in the team, so read everyone's answers aloud.**

**Summary of the whole course（4 minutes）**: point down the right-hand column of the “What we did in five sessions” table, from the top.

> “In session 1, you handed over one file and asked. In session 2, you handed over just three lines, and all four of you got something different. In session 3, you handed over requirements and a rule. In session 4, you handed things to other people as PRs. Today, you showed everyone something that works on main.
> **Step by step, what you hand over changed from ‘what's in your head’ to ‘text anyone can check’.**”

The last words:

> “Cursor is a tool. Tools will keep changing. **What you decide, and what you hand over,** won't.”

#### Checkpoint

- [ ] Everyone wrote an individual reflection
- [ ] Three or four people shared with the room

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Nobody talks | The instructor picks one thing from the presentation and asks “which session's pattern is this?” |
| Running late | Cut the sharing with the room. **Keep the individual reflection and the summary of the whole course** |
| Asked “how should I use this at work?” | Answer that “write the requirements first” and “hand it over as a PR” can be used as they are. Anything more, deal with individually |

---

## Instructor checklist（for the day）

### Advance preparation
- [ ] Ready to try screen sharing for one team（plus a backup of showing it on the instructor's PC）
- [ ] Can show the timer（5-minute presentation）where everyone can see it
- [ ] Decided where reflections go（paper / chat / a shared document）
- [ ] Know which teams had 0 closed Issues last session（go to them first at 0:05）

### Time management
- At 0:50, tell the whole room “merging stops in 10 minutes”
- Stop merging at 1:00. **Make no exceptions**
- If you run it with several teams, widen the presentation slot to “number of teams × 4 minutes” and shorten chapter 2
- If time is left over after the presentation, spend more on sharing the reflections with the room

### Rescue when the presentation doesn't work
- Show up to just before it stops
- If the screen doesn't appear, show the requirements and tasks, and talk about “what we were trying to build”
- The instructor picks out one thing that “is going well” and gives it back to them
