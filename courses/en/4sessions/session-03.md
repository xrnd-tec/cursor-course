# Session 3: Spec-driven development（90 minutes）

> **The goals（four）**
> 1 Write the requirements for a game with a lot to decide（poker） → 2 Split the requirements into tasks and have them built one at a time → 3 Turn the two lines you typed every time into a development rule → 4 Add a later request to the requirements, and finish the game（stretch）
> **Reaching 1–3 is success.** 4 is a stretch, so not reaching it isn't a failure. At the end, everyone presents.

> **Last session, we built a memory game by asking without deciding anything（vibe coding）.**
> Today we build **a game with far more to decide（five-card draw poker）**, **writing the requirements first**（spec-driven development）.

---

## The whole shape of this script

1. The claim of this session（for the instructor）
2. 00-1 How to read this script
3. 00-2 Preparation on the day
4. 00-3 Timetable
5. 0-1 Cover and intro
6. Chapters 1 to 7
7. Appendix: sample requirements
8. The instructor checklist

---

## The claim of this session（for the instructor to understand）

Last session's conclusion was “**vibe coding is fast, but you can't build exactly what you intend**”. At the size of a memory game, that causes no trouble.

Today, participants experience that **when there's a lot to decide, vibe coding can no longer build what you intend**, and that **writing the requirements first lets you build what you intend**.

### Why poker

**Because the memory game is too simple.** In a memory game, about all there is to decide is “the card count”, “the faces” and “how many seconds before cards flip back”, and the AI has default values for them. Even if participants rebuild the memory game from requirements, **it only looks like extra work to them**.

So today we use **a game with far more to decide**. Five-card draw poker has at least these branches.

| Splits if undecided | Example |
|---|---|
| The order of hand strength | How many of the ten ranks to implement |
| **Comparing two of the same hand** | When both have One Pair, which one wins |
| The draw | Up to how many cards / how many times / can you choose zero |
| The opponent | How many CPUs. How the CPU draws |
| Betting | Are chips bet or not |

**The AI decides all of these on its own.** Without requirements, there's no way to check whether what it decided matches your intention.

The session finally lands on **“vibe coding isn't bad. Judge which to use, and when.”** Last session's memory game is brought back as the lesson “**at that size, vibe coding was enough**”.

> **There are 4 participants, so everyone presents to everyone.**

---

## How to read this script

### The shape of this section

1. 00-1 The key points

### 00-1 The key points

Written on the assumption that **participants work with their hands while looking at the material, and the instructor explains as it goes**. The timings assume the same.

Prompts are printed in full in the material and screen positions are shown in screenshots, so a separate live demo isn't assumed. Adjust how you actually run it to the room.

The numbers in the headings read as **`N-M` = step M of chapter N**（e.g. `2-1`）. Everything before chapter 1 is **`00-M`**（how to read, preparation, timetable）, and the intro is **`0-1`**. Each chapter opens with **The shape of this chapter**, and sections before chapter 1 have **The shape of this section**（a table of contents）.

Each chapter has five blocks（some sections, such as the intro, are missing a few）.

| Block | Who it's for |
|-------|--------------|
| **［Slide］Explanation** | How Cursor works. Goes on a slide. Sourced from `courses/en/fundamentals/` |
| **［Slide］What participants do** | Goes straight into the handout. Prompts printed in full, not read aloud |
| **What the instructor says** | What to say while participants are typing or waiting |
| **Checkpoint** | Whether to wait for everyone or move on |
| **When people get stuck** | The sticking points that actually occur in that chapter, and what to do |

Explanations are drawn from [`courses/en/fundamentals/`](../fundamentals/). **To change the content, change it on the fundamentals side**（this script is an extract）.

| Chapter | fundamentals drawn from |
|---------|-------------------------|
| Chapter 2 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 3 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 4 | [`06-rules`](../fundamentals/06-rules.md)（**participants actually write one in this session**） |
| Chapter 5 | [`16-browser-design`](../fundamentals/16-browser-design.md)（column: Design Mode） |

> **There is one extra request**（chapter 2）. **Its wording goes on the slide.**
> The instructor reads it out in the role of the client, but **the text on the slide is the authoritative version**. Don't improvise it.

After you send something to the Agent, nothing comes back for 30–60 seconds. That's time the whole room spends waiting, so every chapter comes with something to say in that gap.

---

## Preparation on the day（checked at 0:00）

### The shape of this section

1. 00-2 The day's preparation list

### 00-2 The day's preparation list

| Item | Steps |
|------|-------|
| **Update the repo** | Open `cursor-course/` and run `git pull`. **This brings in the Skills used today** |
| **Check the Skills are there** | `.cursor/skills/requirements/` and `.cursor/skills/task-breakdown/` are visible in the sidebar |
| **Working folder** | `session02-spec/`（poker）. Each person creates it in chapter 3 |
| **Model** | Leaving it on Auto is fine |
| **Built-in browser** | Open HTML by right-clicking in the sidebar → **Open In Browser** |
| **Presentations** | In chapter 6, **each person shows their own screen to everyone**. Try screen sharing or the projector once at 0:00 |

> **If anyone can't see the Skills, have them run `git pull` on the spot.** Without them, chapters 2 and 3 don't work.

> The working folder name `session02-spec/` is used as it is, because the Skills and the `.gitignore` in the distribution repo assume this name.

---

## Timetable

### The shape of this section

1. 00-3 The 90 minutes

### 00-3 The 90 minutes

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | Ch.1 Today's goal | Looking back at last session, how today differs, what we do today（5 min） | Instructor |
| 0:05 | Ch.2 Write the requirements | Write the poker requirements with the requirements Skill（15 min） | Everyone |
| 0:20 | Ch.3 Split into tasks, build two first | Task breakdown → implement two by hand（15 min） | Everyone |
| 0:35 | Ch.4 Set a development rule and put it to work | Write the rule → build the rest without the two lines（15 min） | Everyone |
| 0:50 | Ch.5 Finish it | The remaining tasks and the extra request（18 min） | Everyone |
| 1:08 | Ch.6 Presentations | Show it in 3 minutes each（12 min） | Everyone |
| 1:20 | Ch.7 Summary | Reflection, review quiz, next session（10 min） | Instructor |

> **If you're running late**: shorten chapter 5. **Don't cut chapter 4（the development rule）or chapter 6（the presentations）.**

---

## Cover and intro — 0:00（inside chapter 1）

> **Not a chapter.** Carry straight on into the start of chapter 1.

### The shape of this section

1. 0-1 From the cover to what we do today

### 0-1 From the cover to what we do today

#### ［Slide］Cover

```
Spec-driven development

Cursor hands-on course　Session 3 / 5　·　90 minutes
（date）
```

#### ［Slide］Before we start（everyone, at 0:00）

Before the lesson starts, everyone does these two things. **Today's Skills arrive with `git pull`.**

- [ ] Open `cursor-course/` and run `git pull`
- [ ] You can see `.cursor/skills/requirements/` and `.cursor/skills/task-breakdown/` in the sidebar

> If you can't see the Skills, run `git pull` again. Without them, you can't go past chapter 2.

#### ［Slide］Looking back at last session（30 seconds）

> **Vibe coding lets you build fast, but you can't build exactly what you intend.**

We all asked with the same three lines, and all four memory games came out different. We also couldn't check on screen whether the extra requests（the B requests）went in correctly.

#### ［Slide］How vibe coding and spec-driven development differ（1 minute）

| | Vibe coding（last session） | Spec-driven development（today） |
|---|---|---|
| A document that decides what is correct | None. It only exists in the head of the person who asked, and in the chat | The requirements, and tasks with done-when conditions, are written as documents |
| What the AI looks at when it builds | Only the text of the request sent at that moment | It looks at the requirements and task documents every time |
| How to check it was built correctly | There's no standard to compare against | Check it against the done-when condition |
| Handing it over to someone else | They can only guess from the code | They can understand it by reading the requirements |
| When the request changes | Have the code changed directly | Rewrite the requirements first |

**The process is the same as ordinary development（requirements → tasks → implementation → checking）.** The difference is that the AI helps with the writing and the implementation, and that the AI also reads the requirements and tasks you wrote every time.

#### What the instructor says

- Last session's weak point ①（you can't check whether it was built correctly）and weak point ②（you can't hand it over to someone else）both came from “there's no document that decides what is correct”.
- Today we write that document first, then build. We use the same Cursor as last time, but what we hand to the AI changes.

#### ［Slide］What we do today

| | What we do | Where |
|---|---|---|
| 1 | Write the requirements for poker | Chapter 2 |
| 2 | Split the requirements into tasks and build them one at a time | Chapter 3 |
| 3 | Turn the two lines you typed every time into a development rule | Chapter 4 |
| 4 | Finish it and present | Chapters 5 and 6 |

**Today's goal is to build poker “as you intend”.**

#### ［Slide］How today runs（three points）

1. **You don't have to finish.** Even if you stop halfway, you still present
2. **Write the requirements before you ask.** Today we don't ask for “make it nice”
3. **If you get stuck, raise your hand**

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Hasn't run `git pull` | Have them do it on the spot. Without the Skills, they stop in chapter 2 |
| Missed last session | Explain only the “looking back” slide carefully |

---

## Chapter 1 Today's goal — 0:00（5 minutes）

> **In this chapter the instructor only talks.**

### The shape of this chapter

1. 1-1 Share today's goal

### 1-1 Share today's goal

#### ［Slide］Today's goal

| | What you'll be able to do | Where |
|----|---------------------------|-------|
| 1 | Write the requirements for a game with a lot to decide（poker） | Chapter 2 |
| 2 | Split the requirements into tasks and have them built one at a time | Chapter 3 |
| 3 | Turn the two lines you typed every time into a development rule | Chapter 4 |
| 4 | Add a later request to the requirements, and finish the game ← **stretch** | Chapter 5 |

#### What the instructor says

> “Last session, we built a memory game with ‘make it nice’. **All four of you got something different.**
> Today it's poker. **A game with far more to decide.** ‘Make it nice’ won't get you the poker you intend. We write the requirements first.”

#### ［Slide］Column — the rules of poker

It's fine if you don't know the rules of poker. In chapter 2 we show a table of “hand rankings”.

#### Checkpoint

None. Wrap it up in five minutes.

---

## Chapter 2 Write the requirements — 0:05（15 minutes）

> The second game. **Something much harder than the memory game, built from requirements.**

### The shape of this chapter

1. 2-1 What a Skill is（where it lives, how to call it, what's inside, the two used today）
2. 2-2 The four sections every requirement needs, and the instructor demo（explanation）
3. 2-3 Write the requirements for poker

### 2-1 What a Skill is, what's inside, the two used today（explanation）

#### ［Slide］Explanation — what a Skill is

**A Skill is a package holding “the procedure for doing this kind of work”.** It saves you writing the same procedure out every time.

Where it lives and how you call it are fixed.

| Kind | Path | Scope |
|------|------|-------|
| **Project** | `.cursor/skills/<name>/SKILL.md` | This repository only |
| **Personal** | `~/.cursor/skills/<name>/SKILL.md` | All of your projects |

**The two used today are already in the repository**（they came down with `git pull`）.

| How to call it | Scope | Action |
|----------------|-------|--------|
| **Automatic** | When the Agent judges it should be used | Nothing. The description decides |
| **Slash** | **That one message only** | Type `/` in the input box → pick the Skill name |
| **Custom Mode** | **The whole session** | Pick the Skill and press `Alt+Enter`（Mac: `Option+Enter`） |

**Today we call them with a slash.**

#### ［Slide］Explanation — inside, a Skill is just Markdown

It only has two lines of settings on top.

```markdown
---
name: requirements
description: Use when drawing out what someone wants built through conversation and putting it into four requirement sections
---

# Writing requirements

(everything below is an ordinary set of steps)
```

| Field | Role |
|---|---|
| **`name`** | Lowercase letters, digits and hyphens only. **Must match the parent folder name** |
| **`description`** | **The most important part.** The Agent reads the description to decide “whether to use this Skill in this conversation” |

**Only these two are required.**

#### ［Slide］Explanation — the two Skills used today

| Skill | What it does | What it doesn't do |
|---|---|---|
| **`requirements`** | Draws out what you want to build through conversation, and puts it into four sections: **what it does / screen / interactions / out of scope** | **Doesn't write code** |
| **`task-breakdown`** | Splits the requirements into **3–5** tasks small enough to hand over in one request（**each with a done-when condition**）, and saves them to `session02-spec/tasks.md` | **Doesn't write code** |

**Neither of them implements anything. They are tools only for “deciding”.**

> More detail: [`07-skills.md`](../fundamentals/07-skills.md)

### 2-2 The four sections every requirement needs, and the instructor demo（explanation）

#### ［Slide］Explanation — the four sections of the requirements

| Section | Contents |
|---|---|
| **What it does** | What's needed for it to hold together |
| **Screen** | What's visible and what can be clicked |
| **Interactions** | What happens when the user does something |
| **Out of scope** | **What you decide not to build this time** |

The fourth is where today's leverage is. **The AI adds things that were never written down on its own**, so you forbid them in advance. The same logic as the score and difficulty that came along uninvited in last session's memory game.

#### ［Slide］Explanation — what splits in poker if you don't decide

**Unlike the memory game, poker is a game with a lot to decide.**

| Splits if undecided | Example |
|---|---|
| **The opponent** | **Is there an opponent at all?** If so, how many CPUs, and how do they draw |
| The order of hand strength | How many of the ten ranks to implement |
| **Comparing two of the same hand** | When both have One Pair, which one wins |
| The draw | Up to how many cards / how many times / can you choose zero |
| Betting | Are chips bet or not |

**Leave it alone and the AI decides all of it.** Without requirements, there's no way to check whether what was decided matches your intention.

#### ［Slide］Instructor demo — what happens if you ask for poker with “make it nice”

**The instructor shows one screen prepared in advance. Participants don't do this.**

The request is just these three lines. Exactly the same way we asked for the memory game last session.

```text
Build me a poker game.
HTML + JS, playable in the browser.
Make it nice.
```

Look at what came out together with the participants.

| | Contents |
|---|---|
| **What the AI decided** | The kind of game（**Texas Hold'em**, two cards in hand）／**three Bots**／chips and betting controls（Fold / Call / Raise / All-in） |
| **How it differs from what we build today** | **It isn't five-card draw**（five cards in hand, and a draw） |

**It runs. It looks tidy too.** Even so, this isn't the “five-card draw poker” we build today.
**Because we only said “poker”, the AI decided which poker, how many players, and whether to bet.**

> **What comes out changes from run to run.** On another run, it produced something with chips and a payout table but no opponent.
> Whatever comes out, the point is the same. **You decided neither the rules nor the number of players.**

> More detail: [`05-prompting.md`](../fundamentals/05-prompting.md)

#### ［Slide］Handout — hand rankings（strongest first）

**A handout for anyone who doesn't know the rules.** Participants write their requirements while looking at it.

**On the slide, the cards that make up each hand are outlined.** The grey cards are the ones that aren't part of the hand.

| Rank | Hand | Contents |
|------|------|----------|
| 1 | **Royal Flush** | 10, J, Q, K and A of the same suit |
| 2 | **Straight Flush** | Five cards in a row, all of the same suit |
| 3 | **Four of a Kind** | Four cards of the same rank |
| 4 | **Full House** | Three cards of one rank ＋ two cards of another rank |
| 5 | **Flush** | All five cards of the same suit |
| 6 | **Straight** | Five cards in a row |
| 7 | **Three of a Kind** | Three cards of the same rank |
| 8 | **Two Pair** | Two sets of two cards of the same rank |
| 9 | **One Pair** | Two cards of the same rank |
| 10 | **High Card** | None of the above |

**The hand names are always written in English.**

> **Why we keep them in English**: the game built after this also **shows the hand names in English on the screen**.
> If the slides and the game used different words, the theme of this session — **judging by looking at the screen** — wouldn't hold.

**How far down this table to build is something you decide in your requirements.** You don't have to build all of it.

### 2-3 Write the requirements for poker

#### ［Slide］What participants do（15 minutes）

**① Call the requirements Skill（2 minutes）**　In a new chat, type `/` in the input box and pick **requirements**.

```text
/requirements I want to build five-card draw poker
```

> Anyone who doesn't see it in the list hasn't finished `git pull`. Deal with it on the spot.

**② Fill in the requirements through the conversation（8 minutes）**　Answer what the Skill asks. There are four sections to fill.

| Section | Contents |
|---|---|
| **What it does** | What the game needs to hold together |
| **Screen** | What's visible and what can be clicked |
| **Interactions** | What happens when the user does something |
| **Out of scope** | **What you decide not to build this time** |

**For the hand rankings, decide yourself how far to implement, and write it down.** You don't need to build all ten ranks.

**③ Receive an extra requirement and add it（5 minutes）**

The instructor gives one more request. Handle it **by adding just one line to the requirements**.

#### ［Slide］Extra request

**At step ③, the instructor reads it out and then shows this slide.**

> “An extra request has come in.”

```text
Once the winner is decided, put an outline around the cards that make up the hand.
Grey out the cards that aren't part of the hand.
```

**It's the same way of showing it as the hand rankings slide.** Participants already know how to read it.

This is also something **the AI doesn't guess from the usual rules of poker**. It shows the hand name without being asked, but **which cards make up the hand** doesn't appear unless it's written in the requirements. Even though it's cheap to implement（a dozen or so lines）.

#### What the instructor says

**At ①**: anyone who doesn't see the Skill in the list hasn't finished `git pull`. Deal with it on the spot.

**During ②**: circulate and **talk to anyone whose “out of scope” is empty**. If it's empty, the AI will start adding things on its own again.

> “‘Out of scope’ is where today's leverage is. The AI adds things that were never written down, so **forbid them in advance**.”

**For anyone who can't think of anything for “out of scope”, give examples specific to poker.**

- Betting, chips, stakes
- Bluffing, CPU strategy
- Three or more players
- Jokers
- Animation（card-flipping effects）
- Saving results

**When showing the demo**: point at the screen and ask three questions. **Not being able to answer them is the motivation for writing requirements.**

> “Is this the poker we're building today?”
> “**Who decided it would be Texas Hold'em? Who decided on three Bots?**”
> “Who asked for chips and betting?”

Then add one sentence.

> “With the memory game, you got something that was ‘good enough’ without deciding anything. **With poker, the AI decided the very kind of game.** When there's more to decide, vibe coding can no longer aim.”

**Later in ②**: point at the difference from the extra requests last session.

> “You could notice just now that ‘this isn't the poker we're building today’ **because you had the right answer in your head**. But it existed only in your head. Writing the requirements now is **the work of getting it out of your head**.”

**At ③**: this is where today's answers come together. First ask about the difference in **how it was handed over**.

> “Another extra request came in. With the extra requests last session, **you went and touched the code directly**. This time **you only added one line to the requirements**. What was different?”

Then say **what this one line does**. **This is where today hits hardest.**

> “Last session, what did you check the B requests against to see whether they went in correctly? **Your own memory**.
> Once the line you just added works, **you can tell ‘Two Pair is right’ just by looking at the screen**.
> **You moved the standard for judging out of your head and onto the screen.**”

> “And this line is now written down. **People other than you can judge whether it's right, too.**”

#### Checkpoint

- [ ] All four sections of the requirements are filled in（especially **out of scope**）
- [ ] How far to implement the hand rankings is written
- [ ] The extra request（outline the cards that make up the hand）has been added to the requirements

**The requirements don't need to be perfect.** If they're filled in, move on.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't call the Skill | Type `/` and look through the list. If it isn't there, run `git pull` and check that `.cursor/skills/` exists |
| Doesn't know the rules of poker | Show the hand table from the handout slide. Tell them **the higher hands can go into “out of scope”** |
| Can't think of anything for “out of scope” | Give examples: betting / bluffing / three or more players / jokers / animation / saving |
| The requirements grew too big | Have them cut “what it does” to five items. The rest goes into “out of scope” |
| Asked “where are the card images?” | **None are handed out.** Have them write in the requirements that suits are shown as the characters `♠ ♥ ♦ ♣` |
| The conversation never ends | Cut it off at 8 minutes. Move on with the unfilled sections left empty |
| Couldn't write the requirements | Give them the sample requirements in the appendix. **Don't let this chapter stall** |

---

## Chapter 3 Split into tasks, build two first — 0:20（15 minutes）

> Split the requirements into pieces small enough to hand over one at a time. **Here, build only two first.**
> The rest continues in chapter 4, **once the rule is in effect**.

### The shape of this chapter

1. 3-1 One thing per request, and what to look at before Keep（explanation）
2. 3-2 Split it, then implement two first

### 3-1 One thing per request, and what to look at before Keep（explanation）

#### ［Slide］Explanation — the shape of one request

Session 1 covered “a vague request gets you a vague result”. **Task breakdown is the concrete way of doing something about it.** Each request takes this shape.

```text
[What I want] one line
[Target] @file or folder
[Constraints] what must not break
[Done when] what has to exist for this to be finished
```

**With a done-when condition, you can judge what comes back.** This is the counterpart to the extra requests last session, where “the standard for judging existed only in your own head”.

When it gets long, switch to a **new chat**, so you don't drag old assumptions along.

> More detail: [`05-prompting.md`](../fundamentals/05-prompting.md)

#### ［Slide］Explanation — what to look at before Keep

**The loop is the same as session 1. Only one thing is added.**

| | Session 1 | Today |
|---|---|---|
| After making the request | Read the diff | Read the diff |
| Before Keep | Did only the intended parts change | **＋ is the done-when condition met** |
| The standard for judging | Your own eyes | **The done-when condition that's written down** |

Last session, you “couldn't check whether the B requests went in correctly” because **there was nothing to check against**. Today it's written down.

> **When you have it build something new, the whole diff is added lines.** What you're reading is different, so what you look at there is
> “**does it run**” and “**have too many files been created**”（last session's memory game, and task 1 in chapter 3）.
> **When you have it add to something that exists**（last session's extra requests, and task 2 onwards in chapter 3）, you read it the same way as in session 1.

### 3-2 Split it, then implement two first

#### ［Slide］What participants do（15 minutes）

**① Make a working folder（1 minute）**

Create a new folder called `session02-spec/`. **Don't mix it with the memory game.**

**② Split it into tasks（4 minutes）**

```text
/task-breakdown (hand over the requirements you wrote)
```

**Three to five** tasks is plenty. If there are too many, cut some.

The split is saved to **`session02-spec/tasks.md`**. **From here on, you work while looking at this file.**

> For poker, for example, it might split like this（it doesn't have to be exactly this）.
>
> 1. Build a 52-card deck, shuffle it, deal five cards and show them on screen
> 2. Let the player pick cards and swap them
> 3. Judge the hand from the cards and show the hand name
> 4. Compare with the CPU's hand and show who wins

**③ For the next 10 minutes, go round this loop twice**

**When one round is finished, go back to 1.** Here it's **only two rounds**. The rest continues in chapter 4.

```
1  Open tasks.md and pick one task that isn't done yet
2  Open a new chat
3  Paste that task and send it (the template below)
4  When it comes back, read the diff
5  Check whether the done-when condition is met
6  If both are fine, Keep
7  Mark that task in tasks.md
8  Back to 1
```

**What you send at step 3 each time**

```text
(copy the task's “what to build” from tasks.md)
Done when: (copy that task's done-when condition from tasks.md)
Don't change any other feature.
```

> **Don't skip step 2, the new chat.** If the previous task's context is still there,
> it starts changing things you didn't ask for. **One task = one chat.**

When it comes back: **read the diff → check whether the done-when condition is met → Keep**. Then the next task.

**④ Stop here**

Once you've implemented two, stop for now. **The rest continues in chapter 4.**

> **If you think “I'm typing the same two lines every time”, that's exactly right.** The next chapter solves that.

#### What the instructor says

**At ②**: “one thing per request” is today's pattern. Session 1 covered “a vague request gets you a vague result”. **Task breakdown is the concrete way of doing something about it.**

**After ② is finished, this is where people get stuck most.** Right after the task list appears, some people stop, asking “so what now?”
**Have them open `tasks.md` and point at task 1.** Saying “copy this and paste it into a new chat” gets them moving.

**During the waits in ③**: circulate and check the following.

- **Anyone who hasn't opened `tasks.md`** → have them open it. This chapter is worked while looking at it
- Anyone carrying on with the second task in the same chat → tell them **one task = one chat**
- Anyone carrying on with vibe coding without handing over the requirements → have a word with them
- Anyone cramming two or more things into one request → tell them “one at a time”
- Anyone overwriting `session02/` → have them separate the folders

**Stop them once two are done.** The purpose of this chapter isn't completion but **going through the handover pattern twice**.

**If someone says “it's tedious writing the same thing every time”, pick it up.** That's the way into the next chapter.

> “Yes, **it's tedious**, isn't it? You end up writing the same two lines once for every task. **The next chapter solves that.**”

#### Checkpoint

- [ ] It's split into three to five tasks
- [ ] **Two tasks have been implemented and kept**

**Move on even if only one is done.** Chapter 4 is about writing a rule, so it works even if the implementation is only partway.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Stops after the task list appears | **Have them open `tasks.md` and point at task 1.** Go with them as far as “copy this and paste it into a new chat” |
| It split into ten or more tasks | The requirements are too big. Add more to “out of scope” and split again |
| Handing them over one at a time is tedious, so they sent them all | Don't stop them. **It becomes material for comparing results later** |
| Judging the hand is hard and they can't make progress | Stopping at tasks 1 and 2 is fine. Judging the hand can go into “out of scope” |
| The cards don't show / rows of □ appear | Add “show the suits as the characters `♠ ♥ ♦ ♣`. Don't use images” to the requirements and hand it over again |
| Not enough time | Stop even if two aren't implemented. **Don't cut chapter 4** |
| It got mixed up with the memory game | Separate the folders（`session02/` and `session02-spec/`） |

---

## Chapter 4 Set a development rule and put it to work — 0:35（15 minutes）

> Put the two lines you typed **every time** in chapter 3 somewhere they stay. Then build **the remaining tasks without typing them**.
> **This is the third mechanism we touch today.**

### The shape of this chapter

1. 4-1 Rules / Skills / requirements（explanation, 3 minutes）
2. 4-2 Write one rule（3 minutes）
3. 4-3 Put the rule to work and build the rest（9 minutes）

### 4-1 Rules / Skills / requirements（explanation）

#### ［Slide］Explanation — three mechanisms

| Mechanism | When it applies | Where it lives | Today that's |
|---|---|---|---|
| **Rules** | **Always.** Followed without being written in the prompt | `.cursor/rules/*.mdc` | **What we do next** |
| **Skills** | Only when called. A set of steps | `.cursor/skills/<name>/SKILL.md` | `/requirements`　`/task-breakdown` |
| **Requirements** | That project only. An ordinary file | Anywhere | The poker requirements written today |

**We've touched Skills and requirements today. Only Rules is left.**

#### ［Slide］Explanation — what you typed every time can stay in one place

In chapter 3, **you typed these two lines every time** you handed over a task.

```text
Done when: (copy that task's done-when condition from tasks.md)
Don't change any other feature.
```

You're writing the same thing once for every task. **`.cursor/rules/` is the place that saves you writing it in every prompt.**

#### ［Slide］Explanation — how to write an `.mdc`

Put an `.mdc` file in `.cursor/rules/`. It's **just Markdown with settings on top**.

```markdown
---
description: a short description shown in the rules list
globs: apply only when touching files that match this pattern
alwaysApply: if true, it's always included
---

# Heading

- what to do
- what not to do
```

| Tips for writing | Contents |
|---|---|
| **Short and concrete** | Rather than a long encyclopedia, **5–15 lines that can be followed** |
| **Write “do / don't”** | Vague principles don't get followed |
| **Don't overuse `alwaysApply: true`** | Because it's included every time, it uses up context |

> More detail: [`06-rules.md`](../fundamentals/06-rules.md)

### 4-2 Write one rule

#### ［Slide］What participants do（3 minutes）

**Send the following to the Agent as it is.**

```text
Create .cursor/rules/task-cycle.mdc.
Set alwaysApply: true.
The contents are only the four lines below. Don't add anything else.

- Work on only one task at a time
- After implementing, check it against that task's done-when condition
- Once the done-when condition is met, stop there. Don't move on to the next task on your own
- Don't add features that weren't asked for
```

**Look at the fourth line.** “Don't add features that weren't asked for” — the thing that has been causing trouble ever since last session.

#### What the instructor says

**This part starts with participants “already understanding it”.** They have just typed the same two lines several times in chapter 3. **Keep the explanation short and get their hands moving.**

> “You typed the same two lines once for every task, right? **You don't actually have to write them every time.**”

**Once it's written, have them open it and look inside.**

> “Look at the fourth line: ‘**Don't add features that weren't asked for**’.
> In last session's memory game, a score and difficulty levels nobody asked for came along. **This forbids that.**”

**If someone asks “how do you choose between Rules and Skills?”:**

> “**Rules are for things you want followed every time. Skills are for long procedures.** What you wrote today is the first kind.”

#### Checkpoint

- [ ] `.cursor/rules/task-cycle.mdc` exists
- [ ] It contains four lines（**nothing extra has been added**）

**If someone's file has more than that, that itself is today's teaching material.** Share with the room that it added things even though “don't add anything else” was written.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| There's no `.cursor/rules/` | The Agent creates it. It's fine that it doesn't exist yet |
| The contents have more than four lines | **Pick it up as today's teaching material.** Even when you write “don't add anything”, things sometimes get added |
| Doesn't understand the `.mdc` extension | Just explain it as Markdown + settings. Don't go deeper |
| Can't tell whether it's working | It gets checked in 4-3. Don't dig into it here |

### 4-3 Put the rule to work and build the rest

#### ［Slide］What participants do（9 minutes）

**This continues chapter 3. Implement the remaining tasks. But this time, change what you write.**

```text
(copy only the task's “what to build” from tasks.md)
```

**That's all.** You **no longer write** either the “done-when condition” or “don't change any other feature”.

| | Chapter 3 | Now |
|---|---|---|
| What you write every time | What to build ＋ **done-when condition** ＋ **don't change anything else** | **What to build only** |
| The done-when condition | Written in the prompt | **In `tasks.md`**（the AI reads it） |
| “Don't change anything else” | Written in the prompt | **In the rule** |

**The steps are the same as chapter 3.** Pick one from tasks.md → new chat → send → read the diff → check it against the done-when condition → Keep → mark it.

#### What the instructor says

**Say just one thing before they send.**

> “Unlike before, **you don't write the two lines**. If it still behaves the same way, that means **the rule is working**.”

**What to look at while circulating:**

- **Anyone still writing the two lines** → tell them “you don't need to write them”. **If they write them, they can't check whether the rule works**
- Anyone whose rule isn't working → check the contents of the `.mdc`. Is `alwaysApply: true` in it
- Anyone pressing Keep without checking the done-when condition → have them open `tasks.md`

**After 9 minutes, stop for now.** The purpose of this chapter is **to see the rule work once**. The rest continues in chapter 5.

> “It's fine if you stopped partway. **You can ask someone else to carry on.** The requirements, the tasks and the rule are all written down.
> With the memory game, **only you can carry on**. That's the difference.”

#### Checkpoint

- [ ] **They implemented at least one task without writing the two lines**

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Wrote the two lines out of habit | Have them send the next task without them. **If it gets through once without them, the purpose is achieved** |
| The rule isn't working | Check that `alwaysApply: true` is in the `.mdc`. If not, have them add it |
| No tasks left（already finished） | Have them check the finish line of chapter 5 first |
| Not enough time | The rest is done in chapter 5. **Don't extend here** |

---

## Chapter 5 Finish it — 0:50（18 minutes）

> This continues chapter 4. Build the remaining tasks and aim for the finish line.

### The shape of this chapter

1. 5-1 The remaining tasks and the extra request

### 5-1 The remaining tasks and the extra request

#### ［Slide］What participants do（18 minutes）

**Build the remaining tasks with the same steps as chapter 4.** You send only “what to build”.

```
1  Open tasks.md and pick one task that isn't done yet
2  Open a new chat
3  Send only that task's “what to build”
4  Read the diff → check whether the done-when condition is met → Keep
5  Mark that task in tasks.md
```

**When 5 minutes are left, stop and get ready for the presentation.** Open your poker game in the browser and check how far it runs.

#### ［Slide］The finish line

- [ ] Five cards are dealt and visible on screen
- [ ] You can pick cards and swap them
- [ ] The hand name is shown
- [ ] **The extra request from chapter 2（an outline around the cards that make up the hand）is in**

**Getting to the third one is plenty. The fourth is a stretch**（today's goal 4）.

#### ［Slide］Column — for anyone who finished early（Design Mode）

**If you want to fix the look, there's a way to “point” instead of describing it in words.**

With your game open in the built-in browser, press **`Ctrl+Shift+D`**（Mac: `Cmd+Shift+D`）.

| Action | Keys |
|--------|------|
| Toggle Design Mode | `Ctrl+Shift+D`（Mac: `Cmd+Shift+D`） |
| Select an area | `Shift` + drag |
| Add the selected elements to the chat | `Ctrl+L`（Mac: `Cmd+L`） |

**The code of the selected elements, and how they relate to what's around them,** are passed to the Agent together. It's faster than explaining “the cards are too close together” in words, and there are fewer mistakes.

| Good for | Not good for |
|---|---|
| Adjusting the look, spacing and layout, and places that don't respond when pressed | **Calculation logic such as judging the hand.** Ask the Agent for that in the usual way |

> **This is a column.** You don't have to do it. **It's a change to the look that isn't in the requirements, so it isn't today's main line.** If you change it, add a line to the requirements first, then ask.
>
> More detail: [`16-browser-design.md`](../fundamentals/16-browser-design.md)

#### What the instructor says

Circulate and see how far along the finish line each person is. **Reaching the third one is plenty.**

- Anyone who has gone back to vibe coding without writing requirements → have a word. “Add a line to the requirements first, then ask.”
- Anyone who hasn't done the extra request（the outline）yet → have them add a line to the requirements, add one task, and build it

#### Checkpoint

- [ ] They reached the third item of the finish line
- [ ] They opened their poker game in the browser and are ready to present

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Judging the hand doesn't work well | Cutting down the hands is fine. Put the higher hands into “out of scope” |
| The cards don't show / rows of □ appear | Add “show the suits as the characters `♠ ♥ ♦ ♣`. Don't use images” to the requirements and hand it over again |
| Can't reach the finish line | Stopping partway is fine. **In the presentation, show how far it runs** |

---

## Chapter 6 Presentations — 1:08（12 minutes）

> Show each other everyone's poker games. **Don't cut this.**

### The shape of this chapter

1. 6-1 Show it in 3 minutes each

### 6-1 Show it in 3 minutes each

#### ［Slide］How to present（3 minutes each）

| Order | What to talk about | Rough time |
|---|---|---|
| 1 | Run your poker game and show it | 1 minute |
| 2 | One thing you put in **“out of scope”** in your requirements | 30 seconds |
| 3 | Did **an outline appear** around the cards that make up the hand（could you judge it on screen） | 30 seconds |
| 4 | What was different compared with last session's memory game | 1 minute |

**We don't compare how complete the games are.** If you stopped partway, it's enough to show how far it runs.

#### What the instructor says

There are four people, so at 3 minutes each it takes 12 minutes. **The instructor keeps the time.**

If someone has the outline（item 3）, point at the screen and say:

> “**You can tell whether Two Pair is right just by looking at the screen.** Last session's B requests couldn't be told by looking at the screen.”

If someone says in item 4 “writing the requirements was a pain”, don't deny it.

> “Yes. **For the memory game, I think you didn't need to write them.** How was it with poker?”

#### Checkpoint

- [ ] Everyone presented

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Someone can't show their screen | Ask them to let you open their `session02-spec/` on the instructor's PC, or have them explain it verbally |
| Not enough time | Cut it to 2 minutes each. The instructor asks about item 4 for everyone at once |

---

## Chapter 7 Summary — 1:20（10 minutes）

> Judging which to use, a review quiz, and next session. **Don't shorten this.**
> The split: reflection 2 + things to remember 1.5 + review quiz 3 + next session 1 + checks for next session 2.5 = 10 minutes

### The shape of this chapter

1. 7-1 Reflection and choosing between them
2. 7-2 Review quiz
3. 7-3 Next session, and checks for next session

### 7-1 Reflection and choosing between them

#### ［Slide］Reflection（ask participants）

1. Between the memory game and poker, **what was different about what you handed to the AI**
2. If you were told tomorrow to build these two again, which way would you use **for each**

**The second question is today's answer.** If the answers split into “the memory game with vibe coding, poker from requirements”, this session has succeeded.

#### ［Slide］Three things to remember from today

1. **Put the requirements in “a form you can hand to someone else”**（what it does + **out of scope**）
2. **Leave it in a form that can be checked**（move the standard in your head onto the screen or into a done-when condition）
3. **Put what you write every time into a rule**（`.cursor/rules/`）

#### ［Slide］A rough guide to choosing

| When it's like this | The way |
|---|---|
| Small, used only once, used only by you | **Vibe coding**（about the size of the memory game） |
| A lot to decide, built with other people, fixed later | **Spec-driven development**（from about the size of poker） |

**The line isn't “size” but “how much there is to decide”.**

### 7-2 Review quiz

#### ［Slide］What participants do（3 minutes）

| # | Question | Answer |
|---|---|---|
| 1 | What are the four sections every set of requirements must have? | What it does / Screen / Interactions / Out of scope |
| 2 | When you hand over tasks, how many tasks go into one request? | One |
| 3 | Which folder do you put the file in that holds what should always be followed? | `.cursor/rules/` |

#### What the instructor says

Go through the answers one question at a time. If you're running late, use only question 3.

### 7-3 Next session, and checks for next session

#### ［Slide］Next session（session 4）

> “Over the next two sessions, **the four of you build one app as a team.** You'll do today's ‘write the requirements first’ as a team. We use GitHub to share changes.”

#### Checkpoint（checks for next session, everyone）

Session 4 uses GitHub. **Check it here.** If problems are discovered on the day, the time for team development shrinks.

- [ ] **“Source Control” in the sidebar shows today's changes**
- [ ] They have a GitHub account

If anyone is missing either, the instructor notes it down and deals with it before next session. **Installing GitHub CLI（`gh`）will be announced by the day before session 4**（00-2 in the session 4 script）.

#### Homework（optional）

- Add one line to today's poker requirements yourself, and try adding one more feature
- Read [`06-rules.md`](../fundamentals/06-rules.md)

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Nobody answers the reflection questions | The instructor picks one thing that came up in the presentations and asks “which way of working is that?” |
| Running late | Cut the quiz to one question. **Don't cut the checks for next session** |

---

## Appendix: sample requirements（for checking against）

**Don't hand this out to participants at the start.** Use it to rescue anyone who couldn't write their own requirements in chapter 2, or for the instructor to show “this much is enough”.

```markdown
# Five-card draw poker: requirements

## What it does

- Shuffle a 52-card deck (no jokers)
- Deal five cards each to the player and the CPU
- The player picks the cards to keep, and can swap the others once only
- The CPU also draws once only (a simple rule such as keeping cards that make a pair or better is fine)
- Judge the hand from each side's cards
- Show the side with the stronger hand as the winner
- **Once the winner is decided, put an outline around the cards that make up the hand. Grey out the cards that aren't part of it**
- If both have exactly the same hand and it's a complete tie, the side that swapped fewer cards wins

## Hands to implement (strongest first)

Four of a Kind / Full House / Flush / Straight / Three of a Kind / Two Pair / One Pair / High Card

> Straight Flush and Royal Flush go into "out of scope".

## Screen

- Lay out the player's five cards face up
- The CPU's cards stay face down until the winner is decided
- Each card is a white rectangle showing the rank (A 2 3 … K) and the suit (♠ ♥ ♦ ♣) **as characters**. No images
- A "Swap" button and a "Play again" button
- **Show the hand names in English** (Two Pair / Full House, etc.)
- Show the result in the form "You: One Pair / CPU: Two Pair → CPU wins"
- **Once the winner is decided, put an outline around the cards in both hands that make up the hand**

## Interactions

- Clicking a card switches it between "keep" and "discard"
- Pressing "Swap" redraws only the cards marked "discard"
- Swapping happens once only. It can't be pressed a second time
- Pressing "Play again" starts over from the beginning

## Out of scope

- Betting, chips, stakes
- Bluffing, strategic mind games by the CPU
- Three or more players
- Jokers
- Straight Flush / Royal Flush
- Animation (card-flipping effects)
- **Playing-card image assets** (suits are shown as characters)
- External libraries and APIs (including services that serve images)
- Saving results (resetting on reload is fine)
```

**The ★ line**（put an outline around the cards that make up the hand）is this session's trump card.

The AI shows the hand **name** without being asked. What it doesn't show is “**which cards make up that hand**”. Once this line is in, **you can check whether the judgement is right just by looking at the screen**. This is the answer to the extra requests last session, where “you could only check against your own memory”.

“When both have the same hand, the side that swapped fewer cards wins” is there as **an example of something you can decide in the requirements**. It isn't given as an extra request.

---

## Instructor checklist（for the day）

#### By the day before

- [ ] **`.cursor/skills/requirements/` and `.cursor/skills/task-breakdown/` are in the repository**
- [ ] **Created chapter 4's rule（`.cursor/rules/task-cycle.mdc`）yourself once**（does it stop at four lines / does it actually take effect with `alwaysApply: true`）
- [ ] Told participants in advance that they will run `git pull` on the day
- [ ] Ran chapters 2 to 5 yourself once
- [ ] **Had the AI build poker and measured how far it gets in the roughly 50 minutes of chapters 3 to 5**（to check that the finish line is realistic）
- [ ] **Built poker once with vibe coding and took a screenshot for the demo**（shown in 2-2 of chapter 2）
- [ ] Saw once, on the same operating system as the participants, that the cards display the characters `♠ ♥ ♦ ♣`
- [ ] Checked that participants' screens can be shown to everyone through screen sharing or the projector（chapter 6）

#### The extra request（the wording goes on the slide）

| When it's given | What |
|---|---|
| Chapter 2, 2-3, step ③ | Once the winner is decided, put an outline around the cards that make up the hand（grey out the cards that aren't part of it） |

**If you meet a version of the AI that guesses this, replace the request.** The conditions are “it's cheap to implement” and “it doesn't come from the usual rules of the game”.

#### Time management

- In chapter 2, cut the conversation off at 8 minutes. Move on to chapter 3 even if the requirements are full of blanks
- In chapter 3, **stop them once two are implemented.** Don't let them do everything（it continues in chapter 4）
- **Don't cut chapter 4（the development rule）.** It's the only place where they see “the rule takes effect”
- Shorten chapter 5 if you're running late. **Don't cut chapter 6（the presentations）**
- Keep the full 10 minutes for chapter 7 no matter what

#### Common sticking points

| Sticking point | What to do |
|----------------|------------|
| The Skills don't appear because `git pull` wasn't run | Check everyone at the start of chapter 2. Stalling here loses 15 minutes |
| Someone doesn't know the rules of poker | Show the hand table in chapter 2. Tell them the higher hands can go into “out of scope” |
| Extra features appear even after handing over the requirements | Emphasise “out of scope” and hand it over again. This itself makes good teaching material |
| The cards don't show | **No playing-card image assets are handed out.** Have them fix the requirements so that suits are shown as the characters `♠ ♥ ♦ ♣` |
| Someone feels vibe coding went better | Say so honestly. At the size of the memory game, that's true. When there's more to decide, it tends to flip |
