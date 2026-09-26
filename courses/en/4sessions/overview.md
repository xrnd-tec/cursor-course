# The hands-on course: 90 minutes × 5

`courses/en/fundamentals/`（0–20）and `practice/` in this repo are **self-study material for using Cursor**.
This document is different: it is the overall design of the **hands-on course（5 sessions）** that runs separately.

> On 2026-09-25 the course changed from 4 sessions to 5. The old session 2（vibe coding → spec-driven development）was split into two sessions, and each now includes presentations. The old sessions 3 and 4 moved to sessions 4 and 5.
> The course assumes **4 participants**（one team for the team development）.

## Session by session（the minute-by-minute script）

This document is the overall design. On the day, use the file for that session.

| Session | File | Theme |
|---------|------|-------|
| Session 1 | [session-01.md](session-01.md) | Basic operations（Ask → Agent → diff → Keep） |
| Session 2 | [session-02.md](session-02.md) | Vibe coding（build a memory game, then everyone compares） |
| Session 3 | [session-03.md](session-03.md) | Spec-driven development（build poker from requirements, then present） |
| Session 4 | [session-04.md](session-04.md) | Start building as a team（repo / a PR for the rules / a PR for the requirements and tasks） |
| Session 5 | [session-05.md](session-05.md) | Finishing and presenting（present from main） |

## Goals for the whole course

By the end, participants can do the following.

1. Carry out small fixes and additions themselves, using Cursor's basic operations
2. Feel where “vibe coding” runs out, and both explain and practise that **deciding the spec first** is more stable
3. Pick a theme as a team, get an app moving in short cycles, and present it

The existing self-study material（`courses/en/fundamentals/00–20`）is mainly **reference for session 1** and **revision**. Don't try to cram the whole advanced set into five sessions.

## The common shape of a session（90 minutes）

| Part | Rough length | What happens |
|------|--------------|--------------|
| State the goal | 5–8 min | Pin down “what you'll be able to do” in one or two sentences |
| First half: hands moving while you explain | 35–40 min | Participants follow the instructor's demo. Don't stall; get one pattern all the way through |
| Second half: exercises | 35–40 min | Individually or in teams, reproduce and apply that same pattern |
| Wrap-up | 5–8 min | What worked today, plus what's next |

If the first half overruns, the second half dies. The completion condition for the first half isn't “a perfect explanation” but **one pattern got all the way through**.

## Number of participants

**The course assumes 4 participants.** In session 2 everyone presents twice（1 minute each, then 3 minutes each）. In session 3 everyone presents for 3 minutes. In sessions 4 and 5 the four participants form one team（each person takes one of the four roles）.

If there are more participants, these are the rough caps per instructor.

| Constraint | Calculation | Cap |
|------------|-------------|-----|
| Presentations in sessions 2 and 3 | Session 2: 1 minute each（a 10-minute slot）and 3 minutes each（a 15-minute slot）. Session 3: 3 minutes each（a 12-minute slot） | 4–6 people（beyond that, cut it to 2 minutes each, or have people show each other at their tables） |
| Session 5's presentation slot | 4 minutes per team（questions included）. Shorten the finishing time to widen the slot to 35 minutes | **8 teams** |
| Circulating support in sessions 4 and 5 | How many teams one instructor can cover | **6–8 teams** |

---

## Session 1: Basic operations（90 minutes）

### The goal

Choose between modes, `@`, and Tab / Ctrl+K / Agent, and complete a small fix on your own.

### First half（hands moving together）

- The overall picture（choosing between Tab / Ctrl+K / Agent）
- Switching modes（the minimum: Ask / Agent / Plan）
- Passing files and folders with `@`
- Reading the Agent's diff and Keep / Undo
- Reference: `courses/en/fundamentals/00-map.md` to `05-prompting.md`（don't make them read it all, just what's needed）

### Second half（exercises）

- Short exercises in `practice/`（e.g. add a function to calculator, switch modes between explaining and implementing）
- Each person works through the equivalent of “Quick start” in the README at their own pace

### Definition of done（the line for this session）

- [ ] Can switch between Ask and Agent to make a request
- [ ] Can pass the file they intended with `@`
- [ ] Can review the Agent's diff and Keep / Undo it
- [ ] Completed at least one exercise in `practice/`

### Not doing

- Going deep on Rules / Skills / Hooks / MCP / Cloud Agents（a one-line mention at most）
- Starting real application development

---

## Session 2: Vibe coding（90 minutes）

### The goal

Build a memory game by asking the AI to “make it nice” without deciding anything（vibe coding）, and confirm through the presentations that **everyone builds something different from the same request**.

> **Don't frame this as “vibe coding breaks”.** A memory game is something the AI knows very well, so vibe coding finishes it perfectly well（confirmed by actually trying it）. See “The aim of this session” at the top of [session-02.md](session-02.md).

### The flow

1. **Build a memory game with three lines** — ask with nothing more than “make it nice”
2. **First presentations（1 minute each）** — line up the games straight after building them, compare them, and confirm that the same three lines produced different things
3. **Add extra requests** — from a list of eight requests, pick ones that aren't in your game yet and add them, and notice there is no standard for judging whether they went in correctly
4. **Change it freely** — experience what vibe coding is good at
5. **Second presentations（3 minutes each）** — talk about whether you could check that the chosen requests went in correctly, and what you added
6. **Summary and review quiz** — what happened with vibe coding, and review questions on sessions 1 and 2

### Definition of done（the line for this session）

- [ ] Their own memory game ran in the browser（or they got it as far as they could）
- [ ] In the first presentations, they compared everyone's games
- [ ] In the second presentations, they said whether they could check that the chosen requests went in correctly
- [ ] They can say in their own words what vibe coding is like（fast, can't aim it, can't check it）

### Not doing

- Writing requirements（session 3）
- Team development（session 4 onwards）

---

## Session 3: Spec-driven development（90 minutes）

### The goal

Build a game with a lot to decide（five-card draw poker）**after writing the requirements first**, and experience building what you intended.

**The game is deliberately harder than the memory game.** Poker has far more to decide（the order of the hands, comparing two of the same hand, the draw, the CPU, betting）, so you can't build it as intended without writing requirements.
**The line isn't “size” but “how much there is to decide”** — this is where the session lands.

### The flow

1. **Write the requirements** — with `/requirements`: what it does / screen / interactions / out of scope
2. **Split into tasks and build two first** — `/task-breakdown`, one task = one chat
3. **Write one development rule** — move the “done-when condition” and “don't change anything else” lines you typed every time into `.cursor/rules/`
4. **Finish it** — the remaining tasks and the extra request
5. **Presentations（3 minutes each）** — show your poker game and introduce one item from “out of scope”
6. **Summary, review quiz, and checks for next session**（Source Control, a GitHub account）

### Definition of done（the line for this session）

At minimum, these have to work. No polish or effects needed.

- [ ] Five cards are dealt and visible on screen
- [ ] You can pick cards and swap them
- [ ] The hand name is shown
- [ ] **`.cursor/rules/task-cycle.mdc` exists**
- [ ] They can say in their own words how vibe coding and spec-driven development differed

### Handouts

**Participants are not given a “minimum spec”.** They write the requirements themselves.
The only handout is **the table of hand rankings**（ten hands, with pictures of the cards）, which the slides draw.
The sample requirements are in the appendix of the script, and are used **only to rescue anyone who couldn't write their own**.

### Not doing

- Starting their own themed app（session 4 onwards）
- Introducing a full team development workflow

---

## Session 4: Start building as a team（90 minutes）

### The goal

As a team（4 people）, hold one repository and start building an app **while handing over every change as a PR**.

> **This isn't a session for learning Git.** The only thing to hand over is “hand over changes in a form other people can check”.
> See “The claim of this session” at the top of [session-04.md](session-04.md).

### Theme constraints（to stop it running away）

**The theme is chosen from a list the instructor prepares（five themes that are close to real client work and fun to use: mobile ordering / cinema seat booking / a campaign prize draw / a product quiz / a vending machine）.** It is built as a job for a client, and the core of the requirements is “things you can't decide without asking the client”. A theme outside the list is fine if it meets these constraints.

- Runs in the browser alone（HTML + JS. No Node.js）
- One screen, no external APIs
- Decide **the one action you'll show in the presentation** up front
- The target by the end of session 5 isn't “perfect” but **it runs well enough to demo**

### First half（hands moving together）

- The team roles（Tech Lead / PM / Engineer / QA）and the PR agreements（whoever opens a PR doesn't merge it / nobody commits directly to main）
- Create the team repository from the instructor's template, and everyone clones it
- **The first PR is session 3's rule**（plus one line for the team）. Merge it and Sync, and it takes effect in everyone's Cursor
- Git through Cursor's Source Control panel（branch / ✨ commit message / Publish）. PRs through `gh pr create` run by the Agent, or through the GitHub web page（`courses/en/fundamentals/20`）

### Second half（exercises）

- Write the requirements and tasks as a team（`/requirements` → `/task-breakdown`）, and everyone reads “out of scope” in the PR
- Turn the tasks into Issues with `/create-issues`, and each person takes one with `/start-task` before starting
- Merge task 1（up to the screen appearing）through a PR, and each person starts their own task

### Definition of done（the line for this session）

- [ ] Everyone in the team has the repository locally, and `.cursor/rules/team.mdc` has reached them
- [ ] The requirements（what it does / out of scope）and tasks have been merged through a PR, and the tasks are Issues
- [ ] Task 1 has been merged, and the screen appears on everyone's local `main`
- [ ] The person who opened each PR and the person who merged it are different people

### Not doing

- Lectures on how Git works or on Git commands
- Large-scale design or infrastructure
- Polishing presentation slides

---

## Session 5: Finishing and presenting（90 minutes）

### The goal

Get “the one action you'll show in the presentation” running **on main**, give a 5-minute team presentation, and put into one sentence what changed over the whole course.

### First half（finishing）

- Add the remaining tasks through the same PR flow as session 4（55 minutes）. **Don't add new features**
- QA runs the one action on main after every merge
- **Stop merging at 1:00**, update main on the presenting PC, and run the one action once

### Second half（presentations and reflection）

- A 5-minute presentation plus 5 minutes of questions（format: what we built → the one action → out of scope → what went well → what was hard. The four people split the talking）
- Reflection: how “what you hand over” changed over the five sessions（`@file` → three lines → requirements and rules → PR → main）

### Definition of done（the line for this session）

- [ ] They demoed “the one action you'll show” from main（if it didn't run, they talked about what they were trying to build）
- [ ] The team presented（inside the time, following the format）
- [ ] They wrote a reflection and shared at least one point

### Not doing

- Adding new features（anything not in tasks.md）
- Production deployment

---

## How this relates to the existing material

| Material | Role |
|----------|------|
| `courses/en/fundamentals/00–05` | Reference and revision for session 1 |
| `courses/en/fundamentals/06–20` | Reference only where needed（don't work through it all）. Sessions 4 and 5 refer to `20-git` |
| `practice/` | The drills for session 1 |
| This document | The canonical source for running the hands-on course（5 sessions） |

The self-study material aims at “work through the basics then the advanced material”; this course aims at “90 minutes × 5 and out the other side with something”. Different purposes — don't mix them up.

## Still open

- [x] The detailed agenda per session（minute-by-minute）→ `session-01.md` to `session-05.md`
- [x] Handouts for session 3 → **only the table of hand rankings**（the slides draw it）. Participants write the requirements themselves. The sample is in the appendix of the script（for rescue only）
- [x] Where to keep starters / finished examples for sessions 2 and 3 → **not needed**. Participants build them themselves in `session02/`（session 2）and `session02-spec/`（session 3）（already in `.gitignore`. Don't rename the folders; they match the Skills in the distribution repo）
- [ ] A full rehearsal of sessions 2 and 3（check the finish lines, the extra requests and the rule in chapter 4 of session 3 on a real machine）
- [x] Team size and repo handling for sessions 4–5 → **four participants form one team（three or four per team when there are more people）. Each team creates one repository from the instructor's template and invites the members as Collaborators**（no forks）. Git mainly through Cursor's Source Control panel; PRs through `gh pr create` run by the Agent, or the GitHub web page
- [x] A timetable that accounts for headcount and presentation length → see “Number of participants” above
- [x] A route into this document from the README

## Related

- The self-study map: [../fundamentals/00-map.md](../fundamentals/00-map.md)
- The course material index: [../README.md](../README.md)
