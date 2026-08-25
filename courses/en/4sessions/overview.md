# The hands-on course: 90 minutes × 4

`courses/en/fundamentals/`（0–19）and `practice/` in this repo are **self-study material for using Cursor**.
This document is different: it is the overall design of the **hands-on course（4 sessions）** that runs separately.

## Session by session（the minute-by-minute script）

This document is the overall design. On the day, use the file for that session.

| Session | File | Theme |
|---------|------|-------|
| Session 1 | [session-01.md](session-01.md) | Basic operations（Ask → Agent → diff → Keep） |
| Session 2 | [session-02.md](session-02.md) | Vibe coding → spec-driven development（memory match） |
| Session 3 | [session-03.md](session-03.md) | Team development, first half（theme / spec / PR） |
| Session 4 | [session-04.md](session-04.md) | Finishing and presenting |

## Goals for the whole course

By the end, participants can do the following.

1. Carry out small fixes and additions themselves, using Cursor's basic operations
2. Feel where “vibe coding” runs out, and both explain and practise that **deciding the spec first** is more stable
3. Pick a theme as a team, get an app moving in short cycles, and present it

The existing self-study material（`courses/en/fundamentals/00–19`）is mainly **reference for session 1** and **revision**. Don't try to cram the whole advanced set into four sessions.

## The common shape of a session（90 minutes）

| Part | Rough length | What happens |
|------|--------------|--------------|
| State the goal | 5–8 min | Pin down “what you'll be able to do” in one or two sentences |
| First half: hands moving while you explain | 35–40 min | Participants follow along. Don't stall; get one pattern all the way through |
| Second half: exercises | 35–40 min | Individually or in teams, reproduce and apply that same pattern |
| Wrap-up | 5–8 min | What worked today, plus what's next |

If the first half overruns, the second half dies. The completion condition for the first half isn't “a perfect explanation” but **one pattern got all the way through**.

## The cap on participants（per instructor）

This course design only holds up to a certain size. **Go past it and session 4 falls apart.**

| Constraint | Calculation | Cap |
|------------|-------------|-----|
| Session 4's presentation slot | 35 min ÷ 3 min per team（no questions） | 11 teams |
| Session 4's presentation slot | 35 min ÷ 4 min per team（with questions） | **8 teams** |
| Circulating support in sessions 3 and 4 | How many teams one instructor covers in a 40-minute second half | **6–8 teams** |

**Rule of thumb: up to 8 teams / 24 participants per instructor.** Beyond that, add instructors or helpers and decide up front on measures such as splitting session 4's presentations across two rooms.

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

## Session 2: Vibe coding → spec-driven development（90 minutes）

### The goal

**Feel** the four real properties of vibe coding, and learn to spot the point where you should switch to writing a spec first.

> **Don't frame this as “vibe coding breaks”.** Memory match is something the AI knows very well, so vibe coding finishes it perfectly well（measured in practice）. See “The claim of this session” at the top of [session-02.md](session-02.md).

### The subject（fixed by the instructor）

**Memory match**

Why: everyone knows the rules, and card count, flipping and match detection are all easy to write as a spec. You also get something running quickly.

### First half（hands moving together）

1. **Build it in one go with vibe** — a vague request along the lines of “build me memory match” gets something running
2. **Compare** — show that the same request produced different things for everyone, and that things nobody asked for got added
3. **Take a late requirement** — try to fit a new client requirement into the vibe version, and notice there is no basis on which to judge whether it went in correctly

### Second half（exercises）

- Write your own spec（what it does / screen / interactions / out of scope）, split it into tasks and build them one at a time
- Handle late requirements by adding them to the spec

### Definition of done（the line for this session）

At minimum, these have to work. No polish or effects needed.

- [ ] Cards with a face and a back are laid out
- [ ] Flipping two cards detects a match or a mismatch
- [ ] At least one of the late requirements is in
- [ ] They can say in their own words how vibe and spec differed this time

### Not doing

- Starting their own themed app（session 3 onwards）
- Introducing a full team development workflow

---

## Session 3: Team development（first half）（90 minutes）

### The goal

Pick a theme as a team and start building, while running roles and a minimum Git / PR flow.

### Theme constraints（to stop it running away）

Each person or team picks their own theme, but must keep to these.

- One to a few screens
- No external APIs（or at most one）
- **Decide “the one action you'll show” up front**
- The target by the end of session 4 isn't “perfect” but **it runs well enough to demo**

### First half（hands moving together）

- The team role pattern（e.g. driver / spec keeper / reviewer）
- The minimum Git flow: feature branch → PR → one reviewer → merge
- Practising writing “the one action you'll show” first
- If needed, a light touch of Rules and PR integration（see `courses/en/fundamentals/06` and `11`）

### Second half（exercises）

- Decide the theme（within the constraints）
- Write the minimum spec（what it does / out of scope / the one demo action）
- Prepare the repo and branch, and start building

### Definition of done（the line for this session）

- [ ] The team's theme and “the one action you'll show” are decided
- [ ] A minimum spec exists（what it does / out of scope）
- [ ] They have been through at least one PR（or an equivalent way of sharing a change）
- [ ] There is a working partial result（a screen, or part of the main processing）

### Not doing

- Large-scale design or infrastructure
- Polishing presentation slides（session 4）

---

## Session 4: Finishing and presenting（90 minutes）

### The goal

Get the app to a demoable state and share, in a short presentation, what was built and how Cursor was used to build it.

### First half（hands moving together）

- The finishing checklist（does it run, fatal bugs, the shortest possible README, the demo steps）
- The presentation format（3 minutes）: the problem → the spec → the demo → what Cursor was good at / where you got stuck
- Check the time split（build time remaining vs the presentation slot）

### Second half（exercises）

- Finish the build
- Present and demo
- A short reflection（vibe vs spec, what worked in the team）

### Definition of done（the line for this session）

- [ ] “The one action you'll show” demos
- [ ] The team presented（inside the time, following the format）
- [ ] They shared at least one reflection（e.g. a moment the spec paid off）

### Not doing

- Adding major new features（only within what won't break the demo）
- Requiring a production deployment

---

## How this relates to the existing material

| Material | Role |
|----------|------|
| `courses/en/fundamentals/00–05` | Reference and revision for session 1 |
| `courses/en/fundamentals/06–19` | Reference only where needed（don't work through it all） |
| `practice/` | The drills for session 1 |
| This document | The canonical source for running the hands-on course（4 sessions） |

The self-study material aims at “work through the basics then the advanced material”; this course aims at “90 minutes × 4 and out the other side with something”. Different purposes — don't mix them up.

## Still open

- [x] The detailed agenda per session（minute-by-minute）→ `session-01.md` to `session-04.md`
- [x] The minimum spec for session 2 → in the appendix of `session-02.md`
- [ ] Where to keep a starter / finished example for session 2（best kept separate from `practice/`）
- [ ] Team size and repo handling for sessions 3–4（shared or fork）
- [x] A timetable that accounts for headcount and presentation length → see “The cap on participants” above
- [x] A route into this document from the README

## Related

- The self-study map: [../fundamentals/00-map.md](../fundamentals/00-map.md)
- The course material index: [../README.md](../README.md)
