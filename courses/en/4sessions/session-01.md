# Session 1: Basic operations（90 minutes）

> **The goals（four rungs）**
> 01 Learn Cursor's basic operations → 02 Have the AI explain existing code → 03 Have the AI fix a defect → 04 Have the AI build a new feature（stretch）
> **Reaching 01–03 is success. 04 is a stretch**, and not reaching it isn't a failure.

> **Today's material is a broken shopping cart page.** Open `practice/index.html` and you'll see
> three things marked in orange: ① the discount doesn't apply ② the subtotal is NaN ③ the coupon isn't implemented.
> **Today is about getting the AI to fix all three, and watching the screen come good.**

---

## The whole shape of this script

1. 00-1 How to read this script
2. 00-2 The setup steps
3. 00-3 The timetable
4. 0-1 Cover and intro
5. Chapters 1 to 7
6. The instructor checklist

---

## How to read this script

### The shape of this section

1. 00-1 The key points

### 00-1 The key points

Written on the assumption that **participants work with their hands while looking at the material, and the instructor explains as it goes**. The timings assume the same.

Prompts are printed in full in the material and screen positions are shown in screenshots, so a separate live demo isn't assumed. Adjust how you actually run it to the room.

The numbers in the headings read as **`N-M` = step M of chapter N**（e.g. `1-2`）. Everything before chapter 1 is **`00-M`**（how to read, setup, timetable）, and the intro is **`0-1`**. Each chapter opens with **The shape of this chapter**; sections before chapter 1 have **The shape of this section**.

Each chapter has five blocks（some sections, like the intro, are missing a few）.

| Block | Who it's for |
|-------|--------------|
| **［Slide］Explanation** | How Cursor works. Goes on a slide. Sourced from `courses/en/fundamentals/` |
| **［Slide］What participants do** | Goes straight into the handout. Prompts printed in full, not read aloud |
| **What the instructor says** | What to say while participants are typing or waiting |
| **Checkpoint** | Whether to wait for everyone or move on |
| **When people get stuck** | The sticking points that actually occur, and what to do |

Every explanation is drawn from [`courses/en/fundamentals/`](../fundamentals/). **To change the content, change it on the fundamentals side**（this script is an extract）.

| Chapter | fundamentals drawn from |
|---------|-------------------------|
| Chapter 1 | [`00-map`](../fundamentals/00-map.md)（settings worth getting right first） |
| Chapter 3 | [`00-map`](../fundamentals/00-map.md) · [`04-tab-and-inline`](../fundamentals/04-tab-and-inline.md) |
| Chapter 4 | [`01-modes`](../fundamentals/01-modes.md) · [`03-context`](../fundamentals/03-context.md) |
| Chapter 5 | [`02-shortcuts`](../fundamentals/02-shortcuts.md) |
| Chapter 6 | [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 7 | [`13-safety-ignore`](../fundamentals/13-safety-ignore.md) |

> Anything marked **［Say it out loud］** is delivered verbally by the instructor at that moment. Session 1 has none.

After you send something to the Agent there's a 30–60 second silence. That's time the whole room spends waiting, so every chapter comes with something to say in that gap.

---

## The setup steps（done together at 0:00）

### The shape of this section

1. 00-2 The day's preparation list

### 00-2 The day's preparation list

We assume participants aren't in a position to install anything in advance. **In the 15 minutes from 0:00, the room works down this list together with the instructor.**
Anyone already finished is welcome to move ahead without waiting.

| Item | Steps |
|------|-------|
| **Download Cursor** | Install from [https://cursor.com](https://cursor.com), matching your operating system |
| **First launch and sign-in** | Sign in with a GitHub or Google account |
| **Clone this repo** | `git clone https://github.com/xrnd-tec/cursor-course.git` |
| **Open the folder in Cursor** | Open the `cursor-course/` folder（File → Open Folder）. In the **IDE view**（code in the middle, Agent to the side） |
| **Node.js** | **You don't need to install it today.** The material's page runs in the browser alone. Only exercise C（the stretch）in chapter 6 uses `node`, and skipping it is fine |

> **This session assumes the IDE view plus the Agent panel.** Chapter 1 gets everyone starting into the IDE.
> The language and Auto-review are **optional reading**. The canonical steps are in “Settings worth getting right first” in [`00-map.md`](../fundamentals/00-map.md).

> **The material's page opens in Cursor's built-in browser.** Nothing extra to install.
> Double-click `practice/index.html` to open it in your operating system's browser and ES modules get blocked, so no numbers appear.

> **For the instructor**: everyone downloading at once can choke the network. While it downloads, get ahead of it —
> talk through “the common sticking points” and how to go from **Agents Window → IDE**, and 15 minutes will hold.

---

## Timetable

### The shape of this section

1. 00-3 The 90 minutes

### 00-3 The 90 minutes

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | （Intro） | Cover, the whole course, today's work（spoken over the download wait） | Instructor |
| 0:00 | Ch.1 Set up the environment | Install, clone, launch（15 min） | Everyone |
| 0:15 | Ch.2 Today's goal | Today's four rungs（5 min） | Instructor |
| 0:20 | Ch.3 Three tools | Touch Tab / Ctrl+K / Agent one at a time（10 min） | Everyone |
| 0:30 | Ch.4 Ask and Agent | Ask to find out → Agent to build（15 min） | Everyone |
| 0:45 | Ch.5 Read the diff | Read your own diff and Keep it（10 min） | Everyone |
| 0:55 | Ch.6 Hands-on | Work through the `practice/` exercises（25 min） | Everyone |
| 1:20 | Ch.7 What to take away | What to remember, and next session（10 min） | Instructor |

**Participants have their hands on the keyboard for 75 of the 90 minutes.** The instructor talks one-way for only 15 minutes, in chapters 2 and 7.

> This timetable is also the chapter structure of the slides. Each chapter gets a title page.
> **The intro has no slot of its own.** It's spoken over the download wait in chapter 1.

> **If lots of people got stuck on setup**: compress chapter 3 to three minutes and keep only exercise A in chapter 6. **Don't compress chapters 4 and 5** — those two are the body of the day.

---

## Cover and intro — 0:00（spoken during the few minutes of downloading）

> **Not a chapter.** Spoken while the installer downloads.
> It's the only moment everyone's hands are free, so use it to hand over the framing for the day.

### The shape of this section

1. 0-1 From the cover to today's promises

### 0-1 From the cover to today's promises

#### ［Slide］Cover

```
Cursor: basic operations

Cursor hands-on course　Session 1 / 4　·　90 minutes
（date）
```

#### ［Slide］About this course

**Four sessions to get to “a team can build an app and present it”.**

| Session | What we do | What you can do afterwards |
|---------|------------|----------------------------|
| **Session 1（today）** | Basic operations | Have the AI fix a defect, and read the diff it produced |
| Session 2 | Vibe coding → spec-driven development | Write the requirements before you have it built |
| Session 3 | Team development（first half） | Write a spec as a team and open a PR |
| Session 4 | Finishing and presenting | Demo something that runs |

#### ［Slide］What we're doing today

**Getting the AI to fix a broken shopping cart page.**

Open `practice/index.html` and three things are broken, marked in orange.

| | What's showing wrong |
|---|---|
| ① Apply a discount | 10% off 1,000 and it's **still 1,000** |
| ② Cart subtotal | **NaN** |
| ③ Use a coupon | **not implemented** |

**When those three turn navy, today is a success.**

#### ［Slide］Today's three promises

1. **You don't have to remember everything.** We use exactly three tools today
2. **There's almost no time just watching.** 75 of the 90 minutes are your own hands
3. **Stuck? Look at your neighbour's screen.** Still stuck — raise your hand

#### What the instructor says

Run those four slides while watching the download progress. **Anyone whose download finished can carry on with setup instead of waiting.**

But **you only move to chapter 2 once everyone has the page open**（chapter 1's checkpoint）. Individual work can run ahead; only the chapter boundary has to be in step.

If someone asks “what are we building today?”, the answer is: **nothing**. Today is about **fixing something that already exists**. Building starts in session 2.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| “I already have Cursor” | Have them open `practice/index.html` instead of waiting |
| The downloads won't finish for everyone | Once you've said the intro, let whoever is ready move on to chapter 1 |

---

## Chapter 1 Set up the environment — 0:00（15 minutes）

> Install Cursor and get the material's page open. **Anyone free can move ahead, but you only move to chapter 2 once everyone has it open.**

### The shape of this chapter

1. 1-1 From installing to opening the page
2. 1-2 Settings to get right first（required + optional reading）

### 1-1 From installing to opening the page

#### ［Slide］What participants do

1. Download and install Cursor from [https://cursor.com](https://cursor.com)
2. Launch Cursor and sign in with a GitHub or Google account
3. Get the material in a terminal

```bash
git clone https://github.com/xrnd-tec/cursor-course.git
```

4. Open the `cursor-course/` folder in Cursor（File → Open Folder）
5. In the sidebar, **right-click** `practice/index.html` → choose **Open In Browser**（it opens in Cursor's built-in browser）
6. When the “Mini Shopping Cart” page appears, setup is done

### 1-2 Settings to get right first（required + optional reading）

#### ［Slide］Settings to get right first（1 required + optional reading）

Once the page is open, **the room aligns only the part of the screen we use today.** Language and Auto-review are optional reading（for anyone who finished early, or to take home）.

**Required — start into the IDE**

1. **Cursor Settings → General → Startup → Window Restoration** → **Last Used Windows**
2. Confirm you're in the **IDE view**（code in the middle）. If it's the Agents Window: `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ **Open Editor Window**
3. Get into the habit of quitting Cursor **from the IDE view**, so it opens there next time（no need to quit today）

> In the older UI the advice was to turn off **Agents → Open Agents Window on startup**. Detail in [`00-map.md`](../fundamentals/00-map.md).

**Optional reading — about the interface language**

Cursor's interface is in **English**, and Cursor's own surfaces（Agent, Cursor Settings）are **still almost entirely English as of August 2026** even if you change the display language. That isn't a misconfiguration. To see the available display languages, press `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）in the IDE and run `Configure Display Language`.

**Optional reading — Auto-review（optional, for individual work）**

Set the Run Mode under **Settings → Agents → Approvals & Execution** to **Auto-review** and safe-looking commands run on their own, while risky ones still ask. Not required for today's exercises.

> Canonical: “Settings worth getting right first” in [`00-map.md`](../fundamentals/00-map.md)

#### What the instructor says

Everyone downloading at once chokes the network. **The few minutes of downloading are the first wait**, so use them to get ahead of the common sticking points. Don't leave the room waiting in silence.

One line during the wait:

> “When it launches you might get an unfamiliar screen（the Agents Window）. Nothing is broken. **What we use today is the IDE — code in the middle.** The next slide gets everyone aligned.”

Once the page is open, **the room only confirms the required item, the IDE**. Language and Auto-review are **optional reading**. Let anyone who finished early try them, or tell people it's fine to take home — don't hold the room.

Once the pages are up, **point at the three orange spots** and explain today's work.

> “① the discount isn't applying ② the subtotal is NaN ③ the coupon isn't implemented. **Today we get the AI to fix all three.**
> Fix them and those numbers turn navy.”

Let anyone finished early play with the page. **No need to stop them.**

#### Checkpoint

**Don't move to chapter 2 until everyone reaches here.** This is the only time we wait for the room（no need to hold back anyone who's ahead）.

- [ ] Cursor is running
- [ ] Signed in（the account icon shows top right）
- [ ] `cursor-course/` is open in the **IDE view**（the file tree is visible in the sidebar）
- [ ] **The “Mini Shopping Cart” page is showing in Cursor's built-in browser**
- [ ] ①②③ on the page are showing in orange

Say “if you can see this screen you're good” and move on.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| The download is slow | Everyone at once tends to choke. Wait it out and check on others meanwhile |
| Don't know which build（Mac） | Apple Silicon or Intel. If unsure: Apple menu → About This Mac → the Chip line |
| Installing needs admin rights | Sometimes unsolvable on the spot. Check with IT in advance |
| Can't sign in | Check they have a GitHub / Google account. If not, create one with an email address |
| Can't open the folder | Launch Cursor → File → Open Folder → pick `cursor-course/` |
| No sidebar | Toggle it with `Ctrl+B`（Mac: `Cmd+B`） |
| Haven't cloned | In a terminal: `git clone https://github.com/xrnd-tec/cursor-course.git` |
| **The page appeared but the numbers stay as “…”** | Probably opened in the operating system's browser. Reopen it in Cursor's built-in browser |
| The page is blank | Reload the built-in browser. If that doesn't fix it, look at a neighbour's screen |
| An unfamiliar screen on launch（Agents Window） | ① `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ **Open Editor Window** ② Search Cursor Settings for `startup` → set **Window Restoration** to **Last Used Windows** ③ Quit Cursor **from the IDE view**. Detail in [`00-map.md`](../fundamentals/00-map.md) |
| The menus are in English | That's correct. Cursor's own surfaces stay English. Not a misconfiguration |

---

## Chapter 2 Today's goal — 0:15（5 minutes）

> A four-rung ladder. Decide how far up you're going, in advance. **This chapter is the instructor talking.**

### The shape of this chapter

1. 2-1 Share today's four rungs

### 2-1 Share today's four rungs

#### ［Slide］What participants do

Nothing. Just listen.

#### What the instructor says

> “There are four rungs today. Just climb from 01 in order — you don't have to remember everything. Getting to 03 is plenty. 04 is a stretch.”

**Today's four rungs:**

| Rung | What you'll be able to do | Where | What gets fixed on screen |
|------|---------------------------|-------|---------------------------|
| 01 | Learn Cursor's basic operations | Chapter 3 | The greeting in the heading changes |
| 02 | Have the AI explain existing code | Chapter 4（asking with `@` attached） | — |
| 03 | Have the AI fix a defect | Chapter 6, exercise A | **② the subtotal appears** |
| 04 | Have the AI build a new feature ← **stretch** | Chapter 4 / chapter 6, exercise B | **① the discount applies** / **③ the coupon works** |

> Chapter 4 implements `applyDiscount`, so **everyone passes through the doorway to rung 04 once, in chapter 4**. Exercise B is the extension of it.

> 03 is the line for the whole room. Not reaching 04 is fine — carry it into next time.

> Where this sits in the course as a whole **was covered in the intro**. Here we stick to today's four rungs.

#### Checkpoint

None. Wrap up in five minutes and go to chapter 3.

#### When people get stuck

If anyone looks braced for having to memorise everything, **repeat that 03 is the line for the room**. Take the tension out here and their hands will move in the later chapters.

---

## Chapter 3 Three tools — 0:20（10 minutes）

> `Tab`, `Ctrl+K`, Agent. Three of them, touched one at a time, by hand.

### The shape of this chapter

1. 3-1 Three tools（explanation）
2. 3-2 Try them（Tab / Ctrl+K / Agent）

### 3-1 Three tools（explanation）

#### ［Slide］Explanation

**Cursor is a VS Code-family editor with “an AI that can read, write and run code” on top.** There are three ways to ask it for something.

| Way | From the screen | Windows | Mac | For | Typical moment |
|-----|-----------------|---------|-----|-----|----------------|
| **Tab** | （none） | （automatic） | （automatic） | Suggests what comes next while you type | Finishing a function, imports, repeated patterns |
| **Inline edit** | （none） | `Ctrl+K` | `Cmd+K` | Changes only the selection | “Make this function async”, “Reword this” |
| **Agent** | The Agent panel on the right | `Ctrl+I` | `Cmd+I` | Works across several files while you talk | Adding features, investigating, refactoring, fixing bugs |

> **Shortcuts in this course are written Windows-first.** On Mac, read what's in the brackets.

> **Today's screen is the IDE view（code in the middle）plus the Agent panel on the right.** No need to open the Agents Window today（→ [`00-map.md`](../fundamentals/00-map.md)）.

**What Tab is looking at**: the surrounding code, your recent edits, linter information. Which is why it's strong at “more of what you're writing right now”.

| When Tab shines | When not to leave it to Tab |
|-----------------|-----------------------------|
| Repeating a similar pattern | Logic that needs a judgement about the spec |
| Filling in imports and types | Security or money calculations |
| Continuing the line you're writing | Anything that must be reviewed |

**What `Ctrl+K`（Mac: `Cmd+K`）is and isn't for**

- For: renaming or simplifying just this function, fixing this wording, rewriting this block
- Not for: a feature spanning several files → **Agent**; “how does this even work?” → **Ask**

**Quick reference**

```text
I want the rest of what I'm typing   → Tab
I only want to change this selection → Ctrl+K
I want to investigate / don't write  → Ask
Build it, fix it, run it             → Agent
It's big, agree the approach first   → Plan
```

> More detail: [`00-map.md`](../fundamentals/00-map.md) · [`04-tab-and-inline.md`](../fundamentals/04-tab-and-inline.md)

### 3-2 Try them（Tab / Ctrl+K / Agent）

#### ［Slide］What participants do（10 minutes）

Work down in order. ① and ② open different files.

**① Get a Tab suggestion（3 minutes）**

Open `practice/calculator.js`, put the cursor inside `applyDiscount` and start writing something. When grey text appears, `Tab` accepts it and `Esc` rejects it.

**② Change exactly one spot with `Ctrl+K`（5 minutes）**

Open `practice/greeter.js`, select the whole `greet` function and press `Ctrl+K`（Mac: `Cmd+K`）. Paste this and send it.

```text
Rewrite this English greeting as a more formal one.
```

When it appears, press **Accept** or **Reject**.

**If you accepted, reload the browser. The page's heading changes.**

**③ Open the Agent input box（2 minutes）**

`Ctrl+I`（Mac: `Cmd+I`）. **Don't send anything yet.** Just open it.

#### What the instructor says

**Before ①**: remind them the material is Windows-first and Mac users read `Ctrl` as `Cmd`（`Shift+Tab` is the same on both）. And say up front that **anyone whose shortcut does nothing should use the on-screen button**. People remap their keybindings, and getting stuck here derails the rest.

**During the wait at ①**: say in advance that the grey text can take a few seconds, so nobody panics. Add that the red squiggles from typing mid-line are expected.

**During the wait at ②**: explain that the confirm buttons come in two labellings. The inline input box says **Accept / Reject**; line-level diffs say **Keep / Undo**（older versions said Accept / Reject for both）. **We use it for certain in the next chapter, so say it once here.**

**After the reload at ②**: this is the first moment today that **their own change appears on screen**. Adding “what you just fixed was code, but what changed was the screen” makes the later chapters land.

**After ③**: “Tab is ‘what comes next’, Ctrl+K is ‘just here’, Agent is ‘while we talk’. Today we mostly use the Agent.”

#### Checkpoint

- [ ] They've seen a grey Tab suggestion at least once
- [ ] They made one change with `Ctrl+K` and either accepted or rejected it
- [ ] **They reloaded and saw the page's heading change**（for those who accepted）
- [ ] The Agent input box is open

**Move on even if Tab didn't fire for someone.** The body of today is chapters 4 and 5. Don't stall here.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| No Tab suggestion | Wait a few seconds. Still nothing — skip it. The Tab indicator bottom right can also be off |
| `Ctrl+K` does nothing | On Mac it's `Cmd+K`. Anyone who remapped should select and look in the right-click menu |
| A separate window opened | Some builds open the Agent in its own window. The Agent button top right, or `Alt+Ctrl+J`（Mac: `Option+Cmd+J`）, returns it to the right-hand panel |

---

## Chapter 4 Ask and Agent — 0:30（15 minutes）

> **The centre of today.** Investigate with Ask, then fix with Agent. Everyone runs that one cycle with their own hands.

### The shape of this chapter

1. 4-1 Ask, Agent and `@`（explanation）
2. 4-2 Run one cycle（Ask → Agent）

### 4-1 Ask, Agent and `@`（explanation）

#### ［Slide］Explanation

**A mode decides how the AI behaves.** It's shown at the bottom left of the input box; click it to choose, or `Shift+Tab` to cycle.

| Mode | Good for | Edits files |
|------|----------|-------------|
| **Agent** | Adding features, refactoring, fixing bugs, running tests | Yes |
| **Plan** | Agreeing the approach to a big change before building it | After you approve the plan |
| **Debug** | Chasing a hard-to-reproduce bug while gathering evidence | Yes |
| **Multitask** | Running several independent jobs in parallel | Yes（in parallel） |
| **Ask** | Investigating, explaining, discussing design（you don't want it writing yet） | **No（read-only）** |

**Today we use only two: Ask and Agent.** The rest when you need them.

> Switching mode starts a new conversation context for that mode. When the task changes, a new chat is a good move too.

**Modes and models are different things.** They sit next to each other by the input box, which makes them easy to confuse.

| | What it decides | Switch with |
|---|---|---|
| **Mode** | The AI's **behaviour**（does it edit, does it plan first） | `Shift+Tab` |
| **Model** | **The AI brain itself** handling the request | `Ctrl+/`（Mac: `Cmd+/`） |

The default **Auto** doesn't mean “no model is chosen” — it means **the Cursor Router picks one per request**. Hard tasks go to a stronger model, easy ones to a cheaper one. **Leave it as it is today.**

---

**`@` specifies what goes into the conversation.** Type `@` in the input box to pick.

| Reference | When to use it |
|-----------|----------------|
| `@<file>` | “Take this file as the basis for the answer / the fix” |
| `@<folder>/` | “Only look inside this scope” |
| `@Docs` | Reference registered documentation |
| `@Terminals` | Show it your error output or run results |
| `@Past Chats` | Continue from an earlier conversation |
| `@Commit` / `@Branch` | Uncommitted changes, or the diff against main |

The way to think about it: **if you know which files are involved, `@` them. If you don't, attach nothing and let the Agent go looking.**

| A weak request | A good request |
|----------------|----------------|
| `Fix the bug` | `@practice/cart.js @Terminals` Fix the “subtotal comes out as NaN” problem. To reproduce: addItem an item with no price, then call getSubtotal. |

**Don't over-attach**: `@`-ing a whole large irrelevant folder is just noise. **One file is plenty today.**

> More detail: [`01-modes.md`](../fundamentals/01-modes.md) · [`03-context.md`](../fundamentals/03-context.md)

### 4-2 Run one cycle（Ask → Agent）

#### ［Slide］What participants do（15 minutes）

**① Switch to Ask mode（2 minutes）**

Open the input box with `Ctrl+I`（Mac: `Cmd+I`）, click the mode name at the bottom left and choose **Ask**（`Shift+Tab` cycles through the modes）.

**② Ask（4 minutes）**

```text
@practice/calculator.js
Explain what this file does in 3 lines.
Then tell me why "Apply a discount" on the screen isn't working.
```

**③ Switch back to Agent mode（1 minute）**

Click the mode name and choose **Agent**.

**④ Have the Agent implement it（8 minutes）**

```text
@practice/calculator.js
Implement applyDiscount(amount, percent).
Example: applyDiscount(1000, 10) → 900
You don't need to keep the TODO comment
```

Once sent, **wait for the diff to appear**. Don't Keep it yet — we read it in the next chapter first.

#### What the instructor says

**At ①**: the mode is shown at the bottom left of the input box. **Make them confirm with their own eyes that it changed.** Asking for an implementation while still in Ask, or asking a question while still in Agent, is the first sticking point.

**Right after ② is sent, during the wait（30–60 seconds）**: talk about what `@` can carry. Lead with “attach `@` to a file and it reads that file to answer”, then add that folders and `@Terminals`（error output）work too. But **one file is plenty today**.

**At ③**: “Ask is ‘find out, confirm’; Agent is ‘change’. Telling those apart is the first pattern.”

**Right after ④ is sent, during the wait（about a minute）**: **do the next chapter's prep here.** Saying in advance “when it comes back you'll get a green-and-red screen. Green is added, red is removed. Reading that line by line is the next chapter” means the whole room can start reading the instant it lands.

If anyone asks about the model shown in the input box（**Auto** or **High**）, the answer is **leave it as it is today**.

#### Checkpoint

- [ ] Ask came back with an answer（they can say in their own words why ① isn't working）
- [ ] They got back into Agent mode
- [ ] The `applyDiscount` diff is on screen（**not Kept yet**）

**If three or more people are stuck switching between Ask and Agent, stop the room and go over it.** Not getting this means the day is over.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| The mode won't switch | Click the current mode name at the bottom left of the input box. `Shift+Tab` cycles |
| `@` shows no suggestions | Type a few characters of the file name and they appear |
| No diff appears | Scroll the Agent panel and check it doesn't say “no changes” |
| They asked for an implementation while still in Ask | Ask doesn't edit. Switch mode and send it again |
| They Kept it already | No problem. Chapter 5 reads fine from an already-Kept state |

---

## Chapter 5 Read the diff — 0:45（10 minutes）

> Read **the diff you produced**. Looking at someone else's screen doesn't build the skill.

### The shape of this chapter

1. 5-1 How to read a diff（explanation）
2. 5-2 Read it and Keep it

### 5-1 How to read a diff（explanation）

#### ［Slide］Explanation

**The Agent's changes are applied to your files as it works.** It isn't “see the proposal, then apply it” — you look at the diff **with the file already changed**. Which is exactly why you read before you decide.

| What you see | Meaning |
|--------------|---------|
| **Green** | A line that was added |
| **Red** | A line that was removed |

| The button | Meaning | Where it is |
|------------|---------|-------------|
| **Keep** | Accept | Bottom right of the diff, or the change bar at the bottom of the Agent panel |
| **Undo** | Revert it | Same |
| **Review** | Look over all the changes together | Bottom of the Agent panel |
| **Restore Checkpoint** | Roll right back to that point | Beside the relevant message |

> **A note on labels**: line-level diffs read **Keep / Undo**; only the inline edit from `Ctrl+K` reads **Accept / Reject**. **They mean the same thing**（older versions said Accept / Reject for both）.

**Even when you think you accepted everything, get into the habit of a final check with git or with your own eyes.**

> More detail: [`02-shortcuts.md`](../fundamentals/02-shortcuts.md)

### 5-2 Read it and Keep it

#### ［Slide］What participants do（10 minutes）

**① Read your own diff, line by line（4 minutes）**

Read the `applyDiscount` diff from the previous chapter, asking yourself three things.

- Has anything changed beyond what I asked for
- The removed lines（red）— is losing them a problem
- Does `applyDiscount(1000, 10)` look like it will give 900

**② Keep it（2 minutes）**

If you've read it and you're convinced, **Keep**. If not, **Undo** to revert it and ask again.

To roll back further, **Restore Checkpoint** beside the message takes you back to that point.

**③ Check it on screen（2 minutes）**

Reload the browser.

| Until just now | After the reload |
|----------------|------------------|
| ① After discount **1,000**（orange） | ① After discount **900**（navy） |

If the number doesn't change, either the Keep didn't happen or the implementation is wrong.

**④ Check the answer with Ask（2 minutes）**

Switch to **Ask** mode and send:

```text
@practice/calculator.js
What's the expected value of applyDiscount(1000, 10)? Is the current implementation right?
```

#### What the instructor says

**During ①**: circulate and ask one or two people “what are you looking at?”. They don't need an answer. The point is to create **the state of trying to read**.

**At ③**: the best moment of the day. Have the room confirm **orange turning navy** together. “You fixed the code, and the screen got fixed. That's one complete cycle.”

**Right after ④ is sent, during the wait**: pull today's pattern together.

```
Ask（@file + question）
  ↓ understand it
Agent（@file + request + definition of done）
  ↓ read the diff
Keep or Undo（Accept or Reject in older versions）
```

Then say the most important line of the day, right here.

> “Always read the diff before you Keep. That's the foundation for using Cursor safely.”

#### Checkpoint

- [ ] They read the diff before Keeping（not just clicking through）
- [ ] **① on screen changed to “900”**
- [ ] The Ask answer-check came back

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't see the Keep / Undo buttons | Bottom right of the diff, or the change bar at the bottom of the Agent panel. Older versions say Accept / Reject |
| Undo removed too much | **Restore Checkpoint** beside the message takes you back to that point |
| The implementation is wrong | Don't let them fix it yet. Make them ask “what's wrong with it?” in Ask first. The instructor doesn't give the answer |

---

## Chapter 6 Hands-on — 0:55（25 minutes）

> From here the instructor doesn't talk. Just circulates.

### The shape of this chapter

1. 6-1 The shape of a good request（explanation）
2. 6-2 Exercises A / B / C

### 6-1 The shape of a good request（explanation）

#### ［Slide］Explanation

**The knack of asking well isn't the model — it's writing down “the goal, the constraints and the definition of done” first.** The prompts in today's exercises follow exactly this shape.

```text
[What I want] one line
[Scope] @file or folder（as far as you know）
[Constraints] what must not break / what technology is allowed
[Done when] what has to exist for this to be finished
[Not needed]（optional）
```

| Avoid saying | Say this instead |
|--------------|------------------|
| Make it nice | Be concrete about appearance, behaviour and edge cases |
| Refactor everything | Name the files, and what to do / not do |
| Fix the bug | Expected, actual, and how to reproduce |
| Optimise it | Which comes first: speed, readability, or compatibility |

**New task, new chat.** Old assumptions get less in the way.

> More detail: [`05-prompting.md`](../fundamentals/05-prompting.md)

### 6-2 Exercises A / B / C

#### ［Slide］What participants do

**Exercise A（everyone, the minimum line）— goal 03: fix a defect → screen ②**

The subtotal in ② is showing **NaN**. Fix `getSubtotal` in `practice/cart.js`.
**Check with Ask first, then ask the Agent** — the same order as chapter 4.

```text
[Ask]
@practice/cart.js
Tell me one or two problems with getSubtotal as it stands.
I just want to confirm before fixing it.
```

```text
[Agent]
@practice/cart.js
Improve getSubtotal under these conditions.
- Skip items whose price or qty is undefined / null
- Keep the current behaviour where an empty cart returns 0
- Don't change the existing function name or parameters
```

Read the diff, Keep it, then **reload the browser**.

| Until just now | After the reload |
|----------------|------------------|
| ② Subtotal **NaN**（orange） | ② Subtotal **480**（navy） |

**Exercise B（if you have time）— goal 04: build a new feature → screen ③**

```text
[Agent]
@practice/cart.js @practice/calculator.js
Add applyCoupon(code) to cart.js.
- For the code SUMMER10, return getSubtotal with 10% off
- For an invalid code, return getSubtotal unchanged
- You may use applyDiscount from calculator.js
- Don't create new files
```

Keep it, reload, and “not implemented” in ③ disappears and an amount appears. **All three are now navy.**

**Exercise C（if you have even more time）— goal 03: fix from an error**

The same logic, this time **in the terminal**. `practice/index.js` is still an empty placeholder.

```text
[Agent]
@practice/index.js @practice/cart.js
Write code in index.js that prints the cart's contents and subtotal with console.log.
Done when: node practice/index.js runs without errors and prints the amounts
```

**If you get an error, paste the terminal output straight to the Agent and have it fixed.** That's the pattern for handling errors.

#### What the instructor says

**Nothing.** Circulate and support.

Don't give answers to anyone stuck. The default reply is **“try asking in Ask”**. The purpose of these 25 minutes is getting today's pattern into their bodies, and giving the answer misses that purpose.

#### Checkpoint

- [ ] Everyone got as far as the Agent request in exercise A
- [ ] **More than half saw screen ② change to “480”**

If lots of people haven't finished exercise A, don't introduce B and C.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Doesn't know what to ask for | Have them paste the prompt from the slide as-is. Writing it themselves isn't today's exercise |
| The Agent changed more than it should | Undo, then add “don't change anything else” to the request |
| **Fixed it but the screen didn't change** | They forgot to reload the browser. Check the Keep landed too |
| Exercise B says applyDiscount doesn't exist | They Undid it in chapter 4. Have them implement `applyDiscount` first |
| Exercise B and ③ still says “not implemented” | Check the function is called `applyCoupon`（and that it's `export`ed） |
| No `node` | Skipping exercise C is fine |

---

## Chapter 7 What to take away — 1:20（10 minutes）

> What to remember, what to hand in, and next session. **Don't shorten this.**

> Even if setup overran and chapter 3 got compressed, this chapter keeps its 10 minutes.

### The shape of this chapter

1. 7-1 Takeaways, hand-in, safety, next session

### 7-1 Takeaways, hand-in, safety, next session

#### ［Slide］What participants do

**Hand in（30 seconds）**

**Post exactly one screenshot of your own screen** into the chat or the shared folder.

> “One orange turning navy is enough. It doesn't have to all be fixed.”

#### What the instructor says

**Three things to remember（just three）:**

1. **Confirm with Ask before you ask the Agent**（don't change things straight away）
2. **Name the target with `@`**（a vague request gives a vague result）
3. **Read the diff before you Keep**（don't over-trust Cursor）

**One warning（30 seconds）:**

> “Today's repo is for learning, so nothing you do matters. But **when you do the same thing on a work repo, be careful not to let the Agent read API keys or customer data.**”

**［Slide］Explanation — how much the defaults already protect you**

| Subject | Default |
|---------|---------|
| Reading and searching files | No approval needed |
| Overwriting files | **Saved immediately.** Which is why version control is assumed |
| Running terminal commands | **Follows the Run Mode**（Auto-review for individual work） |
| Network | No arbitrary traffic. Limited to GitHub, links you point it at, web search, and similar |

You can exclude what you don't want read with `.cursorignore`. But the highest priority is **not putting secrets in the repo in the first place**.

For individual work, **Auto-review** is a good idea（the optional reading in chapter 1）. Under **Settings → Agents → Approvals & Execution**.

> More detail: [`13-safety-ignore.md`](../fundamentals/13-safety-ignore.md) · [`00-map.md`](../fundamentals/00-map.md)（settings worth getting right first）

**What we didn't do（later sessions）:**

- Rules / Skills / Hooks / MCP / Cloud Agents
- Git / PRs / team development
- Real application development

“We'll touch these from session 2 onwards, when they're needed. What matters more is that you got something moving today.”

**Next session:**

> “Next time we build memory match. First you'll build it ‘without thinking’. Then you'll write the requirements and build it again. Which one goes better — let your hands find out.”

#### Checkpoint

The hand-in exists so you can see **who fixed how much** without circulating. How many orange spots are left tells you at a glance. It's the material for deciding how to open session 2.

#### When people get stuck

Don't chase anyone who can't hand something in. **Just count the ones who did.**

#### Revision links（for self-study）

- [`00-map.md`](../fundamentals/00-map.md) — the overall picture and the settings to get right first（startup / language / Auto-review）
- [`01-modes.md`](../fundamentals/01-modes.md) — modes in detail
- [`03-context.md`](../fundamentals/03-context.md) — every kind of `@`
- [`05-prompting.md`](../fundamentals/05-prompting.md) — asking well

---

## Instructor checklist（for the day）

#### Beforehand

- [ ] Confirmed the venue's network can download from cursor.com
- [ ] Your own Cursor is up to date
- [ ] Opened `practice/index.html` **and confirmed ①②③ are all orange, the initial state**（the state of `main`）
- [ ] `applyDiscount` in `practice/calculator.js` is still a TODO
- [ ] The `node` command runs（**on the instructor's machine only**, to decide whether to introduce exercise C. Don't have participants install it）
- [ ] The clone URL is ready to paste into the chat（handed out to everyone at 0:00）
- [ ] Asked IT whether installing needs admin rights in this environment
- [ ] **Confirmed the prompts are printed in full on the slides**（in a work-along format you don't read them aloud）
- [ ] **The slides contain screenshots showing where things are on screen**（where the mode name is, the diff, where Keep / Undo are）
- [ ] Walked through returning from the Agents Window to the IDE yourself once（chapter 1's “When people get stuck”）

#### Time management per chapter

- If chapter 1 passes 0:20, compress chapter 3 to three minutes（**don't compress chapters 4 and 5**）
- If you're **past 0:55** when chapter 5 ends, keep only exercise A in chapter 6
- Chapter 7 keeps its 10 minutes no matter what

#### Assumptions about running it

- Prompts go on the slides. Reading them aloud invites typos and delays
- There's a wait right after every send. Each chapter's “What the instructor says” exists to fill it
- Waiting for the whole room is only assumed in chapter 1. Elsewhere the timings assume you cut and move on
- When someone is stuck, the fastest fix is looking at a neighbour's screen
