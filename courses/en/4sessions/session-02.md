# Session 2: Vibe coding（90 minutes）

> **The goals（four）**
> 1 Build a working game with vibe coding → 2 Compare everyone's games in the first presentations → 3 Add extra requests, and notice that you can't check whether they “went in correctly” → 4 In the second presentations, talk about the features you added and what you noticed
> **All of 1–4 are finished within this session.** How complete the game is doesn't matter.

> **Today we only use one way of working: asking the AI to “make it nice” without deciding anything（vibe coding）.**
> Everyone sends the same three lines, and we show each other the results straight away. **The same request produces different things for different people. That is what vibe coding is like.**
> In session 3, we build a game with a lot to decide（poker）after writing the requirements first（spec-driven development）.

---

## The whole shape of this script

1. The aim of this session（for the instructor）
2. 00-1 How to read this script
3. 00-2 Preparation on the day
4. 00-3 Timetable
5. 0-1 Cover and intro
6. Chapters 1 to 8
7. The instructor checklist

---

## The aim of this session（for the instructor）

**This session is not built on the premise that “things built with vibe coding break”.**

A memory game is a game the AI knows well, so vibe coding finishes it without trouble. A score, difficulty levels and a time limit can also be added without trouble if you ask（**we tried this and confirmed it**）. If you run the session on the premise that “it's bound to break”, it will actually work fine, and participants will notice that the explanation doesn't match what they see.

So this session **doesn't make “does it break?” the issue**. Instead, participants experience these four things.

| What happens with vibe coding | Chapter where it's experienced |
|---|---|
| **The same request produces different things for different people.** You can't build the same thing twice | Chapter 3（first presentations） |
| **Things you didn't ask for get built too.** You can't keep track of what's in your own game | Chapter 3（first presentations）, Chapter 4 |
| **You can't judge whether it was built correctly.** There is no standard for deciding “is this right?” | Chapter 4 |
| **You can't hand it over to someone else.** You can't pass it to someone who doesn't know the history | Chapter 4 |

Participants also experience **the good sides of vibe coding**（you can build fast, and you can change things casually）in chapters 2 and 5.

What this session wants to get across is: **“vibe coding isn't bad. What matters is being able to judge which way of working to use, and when.”** In this session, participants experience situations where vibe coding is enough. In session 3, they experience situations where it's better to write requirements.

### Why there are two presentations

- **The first（chapter 3）** comes straight after building with three lines. Nothing has been changed yet, so every difference clearly came from “the same three lines”.
- **The second（chapter 6）** comes after the extra requests and the free changes. The content is chosen so it doesn't overlap with the first.

### Why participants pick the extra requests from a list

With vibe coding, you can't decide in advance what will get built. If everyone had to add a request the instructor chose, some participants might already have it in their game from the start.

So the extra requests are given as **a list of eight**, and participants **choose ones that aren't in their game yet** and implement them. Checking “which ones are already in?” before choosing is itself an experience of “you can't keep track of what's in your own game”.

> **The course assumes 4 participants, so in both presentations everyone presents to everyone.**

---

## How to read this script

### The shape of this section

1. 00-1 The key points

### 00-1 The key points

This script is written on the assumption that **participants work with their hands while looking at the material, and the instructor explains as it goes**. The timings are based on the same assumption.

Prompts are printed in full in the material, and screen positions are shown in screenshots. So a separate live demo by the instructor isn't assumed. Adjust how you actually run it to the room.

The numbers in the headings read as **`N-M` = step M of chapter N**（e.g. `2-1`）. Sections before chapter 1 are **`00-M`**（how to read, preparation, timetable）, and the intro is **`0-1`**. Each chapter opens with **The shape of this chapter**, and sections before chapter 1 have **The shape of this section**（a table of contents）.

Each chapter is written in these five blocks（some sections, such as the intro, are missing some of them）.

| Block | Contents |
|-------|----------|
| **［Slide］Explanation** | How Cursor works. Goes on a slide. Sourced from `courses/en/fundamentals/` |
| **［Slide］What participants do** | Goes straight into the handout. Prompts are printed in full, so there's no need to read them aloud |
| **What the instructor says** | What to say while participants are typing or waiting for results |
| **Checkpoint** | The standard for deciding whether to wait for everyone or move on |
| **When people get stuck** | Problems that tend to occur in that chapter, and what to do |

Explanations are drawn from [`courses/en/fundamentals/`](../fundamentals/). **To change the content, change it on the fundamentals side**（the script only carries part of it）.

| Chapter | fundamentals drawn from |
|---------|-------------------------|
| Chapter 1 | [`19-plans`](../fundamentals/19-plans.md)（column: usage） |
| Chapter 2 | [`01-modes`](../fundamentals/01-modes.md)（models and Auto, revision of session 1） · [`16-browser-design`](../fundamentals/16-browser-design.md)（the built-in browser） |
| Chapter 4 | [`03-context`](../fundamentals/03-context.md)（passing the target with `@`, revision of session 1） |
| Chapter 5 | [`16-browser-design`](../fundamentals/16-browser-design.md)（column: Design Mode） |

> **The wording of the extra requests in chapter 4（eight of them）goes on the slide.**
> The instructor explains them in the role of the client, but **participants follow the wording on the slide**. Don't reword them on the spot.

After you send a request to the Agent, it takes 30–60 seconds for the result to come back. Everyone waits at the same time, so each chapter comes with something to say during that wait.

---

## Preparation on the day（checked at 0:00）

### The shape of this section

1. 00-2 The day's preparation list

### 00-2 The day's preparation list

We assume the environment was set up in session 1. **In the first few minutes from 0:00, only check things.** If anyone missed session 1, have them finish setup first, following the steps in chapter 1 of session 1.

| Item | Steps |
|------|-------|
| **Update the repo** | Open `cursor-course/` and run `git pull` |
| **Working folder** | `session02/`（the memory game）. Each person creates it in chapter 2 |
| **Model** | **Leaving it on Auto is fine.** Same as session 1; there's no need to change the settings |
| **Built-in browser** | Open HTML files by right-clicking in the sidebar → **Open In Browser**. Opening them in your operating system's browser may not work |
| **Presentations** | In chapters 3 and 6, **each person shows their own screen to everyone**. Try screen sharing or the projector once at 0:00 |

> **Node.js isn't needed today either.** The memory game runs in the browser alone.

---

## Timetable

### The shape of this section

1. 00-3 The 90 minutes

### 00-3 The 90 minutes

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | Ch.1 Today's goal | Explain what we do today（5 min） | Instructor |
| 0:05 | Ch.2 Build it with vibe coding | Build a memory game with a three-line request（15 min） | Everyone |
| 0:20 | Ch.3 First presentations | Show it in 1 minute each and compare everyone's games（10 min） | Everyone |
| 0:30 | Ch.4 Add extra requests | Pick requests from the list that aren't in your game and implement them（15 min） | Everyone |
| 0:45 | Ch.5 Change it freely | Add any feature you like（10 min） | Everyone |
| 0:55 | Ch.6 Second presentations | 3 minutes each on the features you added and what you noticed（15 min） | Everyone |
| 1:10 | Ch.7 Summary | Sort out the good points and the weak points（10 min） | Instructor |
| 1:20 | Ch.8 Review quiz and next session | Review questions and an explanation of next session（10 min） | Everyone |

75 of the 90 minutes are **time when participants are working with their hands or talking**.

> **If you're running late**, shorten chapter 5（change it freely）to 5 minutes and cut the chapter 8 quiz to four questions. **Don't cut the presentations（chapters 3 and 6）.** Lining up and comparing everyone's games is how this session reaches its conclusion.

---

## Cover and intro — 0:00（inside chapter 1）

> **The intro isn't a chapter.** Carry straight on into chapter 1.

### The shape of this section

1. 0-1 From the cover to what we do today

### 0-1 From the cover to what we do today

#### ［Slide］Cover

```
Vibe coding

Cursor hands-on course　Session 2 / 5　·　90 minutes
（date）
```

#### ［Slide］Recap of last session（30 seconds）

**Today we work with the same steps as last time.** What's different from last time is **what you hand to the AI**.

```
Ask（@file + question）
  ↓ understand the contents
Agent（@file + request + done-when condition）
  ↓ read the diff
Keep or Undo
```

#### ［Slide］What we do today

| | What we do | Chapter |
|---|---|---|
| 1 | Build a memory game by asking “make it nice” without deciding anything | Chapter 2 |
| 2 | Show each other the games and compare them（first presentations） | Chapter 3 |
| 3 | From the list of extra requests, pick ones that aren't in your game yet and add them | Chapter 4 |
| 4 | Change your game however you like | Chapter 5 |
| 5 | Talk about the features you added and what you noticed（second presentations） | Chapter 6 |

**Today's way of working is called “vibe coding”.** In session 3, we learn the way of writing the requirements first and then building（spec-driven development）.

#### ［Slide］How today runs

1. **Don't worry if it's rough.** Today we ask in a rough way on purpose.
2. **The presentations don't compare how complete the games are.** What we compare is how the games differ.
3. **If you get stuck, raise your hand.** Asking to look at your neighbour's screen is also a good way.

#### What the instructor says

If anyone missed session 1, explain only the recap slide carefully. If nobody missed it, move on after 30 seconds.

If someone asks “which way is the right one?”, answer that **both are right**. It isn't about which is better; you choose between them depending on the situation.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Missed session 1 and doesn't have Cursor installed | Have them set up following the steps in chapter 1 of session 1. They can go ahead without waiting for chapter 2 to start |

---

## Chapter 1 Today's goal — 0:00（5 minutes）

> This chapter explains what we do today and the terms we use today. **In this chapter the instructor only talks.**

### The shape of this chapter

1. 1-1 Share today's goal（column: usage）

### 1-1 Share today's goal

#### ［Slide］What participants do

In this chapter, participants only listen.

#### ［Slide］Today's goal

| | What you'll be able to do | Chapter |
|----|---------------------------|---------|
| 1 | Build a working game with vibe coding | Chapter 2 |
| 2 | Compare everyone's games in the first presentations | Chapter 3 |
| 3 | Add extra requests, and notice that you can't check whether they “went in correctly” | Chapter 4 |
| 4 | In the second presentations, talk about the features you added and what you noticed | Chapter 6 |

#### ［Slide］Terms

| Term | Meaning |
|---|---|
| **Vibe coding** | The way of asking the AI without deciding anything. Today we only use this way |
| **Spec-driven development** | The way of writing the requirements first and then asking the AI. We learn it in session 3 |

**What we build is called by the game's name: “the memory game”.** We don't shorten it to “the vibe”.

#### What the instructor says

Say the following.

- Today we build a memory game by only asking the AI to “make it nice”. This way of working is called vibe coding.
- As soon as it's built, we do the first presentations. Watch how different the results are when everyone asks with the same three lines.

As a recap of last session, mention the Ask → Agent → diff → Keep steps in one sentence.

#### ［Slide］Column: usage

**We use the Agent many times today, so here are 30 seconds on usage first.**

| | |
|---|---|
| **On Auto** | You're billed at the price of the model that was actually used |
| **On every plan** | A certain amount of usage is included |
| **When it runs out** | You choose between continuing with usage-based billing（paid afterwards）or moving up a plan |

Auto's settings（Cost / Balance / Intelligence）**change how the model is chosen**. They don't make anything cheaper.

> **This material doesn't write down any prices.** If prices change, it's easy to forget to update them.
> When you need to check prices, see the [official pricing page](https://cursor.com/pricing).
>
> For details, see [`19-plans.md`](../fundamentals/19-plans.md).

#### Checkpoint

This chapter has no checkpoint. Move to the next chapter after 5 minutes.

---

## Chapter 2 Build it with vibe coding — 0:05（15 minutes）

> This chapter checks how far you get when you ask without deciding anything. **By the end of the chapter, everyone has their own memory game.**

### The shape of this chapter

1. 2-1 Have it build a memory game

### 2-1 Have it build a memory game

#### ［Slide］What participants do（15 minutes）

> **Leaving the model on Auto is fine.** Same as session 1. There's no need to change the settings today.

**① Make a working folder（1 minute）**

Create a new folder called `session02/`.

**② Have it build a memory game（13 minutes）**

Open a new chat and send the three lines below. **That's all you send.**

```text
Build me a memory match game.
HTML + JS, playable in the browser.
Make it nice.
```

（Screen: `s02-03` the request typed in）

**③ Run it（1 minute）**

When the files are ready, open it in the browser and check that you can play. **Right-click** the HTML file in the sidebar and choose **Open In Browser**.

> **You don't need to read the diff closely here.** These are new files, so every change is an added line.
> The only thing to check here is **whether the game runs**.

#### What the instructor says

**If someone asks “which model should I use?”, answer that Auto is fine.** Today isn't about comparing models.

**Right after ② is sent（wait 1–3 minutes）**: the wait is long, so say these two things.

- Today we're asking in a rough way on purpose. “Make it nice” is a phrase that was introduced last time as “better to avoid”.
- **When the result comes back, look for things you didn't ask for.** In the first presentations, each person will introduce one thing they found.

**After ③**: confirm that something working was built quickly, and explain that building fast is what vibe coding is good at.

#### Checkpoint

- [ ] Their own memory game runs in the browser

**Move to the next chapter even if someone's didn't run.** In the first presentations, it's enough for them to show how far they got.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't open it in the browser | Right-click in the sidebar → choose **Open In Browser**, and open it in Cursor's built-in browser. **If you open the file directly in your operating system's browser, the browser's restrictions can stop the JavaScript from loading, and it may not run** |
| Lots of files were created and it's confusing | Leave them as they are. Nothing gets tidied in this chapter |
| It doesn't run | **Have the Agent open the browser and read the console errors**（see the explanation below）. If it still doesn't run, ask to look at a neighbour's screen |
| It doesn't finish in 15 minutes | Stop at 15 minutes, even if it doesn't run |

**When “it doesn't run”, there's a faster way than having people paste the error.**

Cursor's built-in browser **can be operated by the Agent**. You can ask it to open pages, click, type, and **read errors in the console**.

```text
Open the game I just built in the browser,
and if there are errors in the console, tell me the cause.
```

**When the Agent operates the browser, it needs approval**（by default it is set to “manual approval”, which asks every time）. Leave the default as it is in class.

> For details, see [`16-browser-design.md`](../fundamentals/16-browser-design.md).

---

## Chapter 3 First presentations — 0:20（10 minutes）

> Show each other the games straight after building them with three lines. **Nothing has been changed yet, so every difference came from the same three lines.**

### The shape of this chapter

1. 3-1 Show it in 1 minute each
2. 3-2 Compare everyone's games

### 3-1 Show it in 1 minute each

#### ［Slide］How to do the first presentations（1 minute each）

| Order | What to talk about | Rough time |
|---|---|---|
| 1 | Run your memory game and show it | 40 seconds |
| 2 | Introduce one **thing that came along without being asked for** | 20 seconds |

**We don't compare how complete the games are.** If someone's game didn't run, it's enough to show how far they got.

#### What the instructor says

There are 4 participants, so at 1 minute each it takes 4 minutes in total. **The instructor keeps the time.**

Write down the things that came up in item 2（things that came along without being asked for）on the whiteboard or in the chat. You use them in 3-2 and chapter 7.

### 3-2 Compare everyone's games

#### ［Slide］Compare everyone's games

Compare everyone's memory games using the table below.

| What to compare | Person 1 | Person 2 | Person 3 | Person 4 |
|---|---|---|---|---|
| How many cards | | | | |
| What's on the face（numbers / emoji / colours） | | | | |
| Is a score or a move count shown | | | | |
| Can you choose a difficulty | | | | |
| Look and feel（colours, layout） | | | | |

#### ［Slide］The instructor sent the same three lines twice

**These are games the instructor built by sending the same three lines twice, with the same settings.** These two also came out different.

（Two sample images: `s02-05` / `s02-06`）

#### ［Slide］The same request produces different things for different people

> **Everyone built something different from the same request. That is what vibe coding is like.**

| What happened | What it tells you |
|---|---|
| Everyone built something different | Even with the same request, **you get something different every time** |
| Things you didn't ask for came along | **You can't tell** what you specified **from what the AI decided** |

#### What the instructor says

After filling in the table, explain the following.

- All four sent the same three lines, but the card count and the faces are different. The AI decided those things.
- Even when the instructor sent the same three lines twice, different things came out. The difference in models isn't the only reason.
- Every game runs. That is a strength of vibe coding.

#### Checkpoint

- [ ] Everyone did the first presentation
- [ ] The comparison table is filled in

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Someone can't show their screen | Ask them to let you open their `session02/` on the instructor's PC, or have them explain it verbally |
| Everyone's games look very similar | The card count, the faces or whether there's a score usually differ somewhere. Have them show the details. Also use the instructor's two samples |
| Someone says “isn't it just because the models were different?” | Explain that the instructor's two samples were built with **the same settings** |
| Not enough time | Fill in only two rows of the table: the card count and the faces |

---

## Chapter 4 Add extra requests — 0:30（15 minutes）

> **The most important chapter of this session.** Check what happens to the memory game you just built when extra requests arrive from the client.

### The shape of this chapter

1. 4-1 Receive the list of extra requests
2. 4-2 Check what's in your game, then pick requests
3. 4-3 Have them implemented in a new chat, and record the results

### 4-1 Receive the list of extra requests

#### ［Slide］Extra requests from the client（eight）

**Playing the client, the instructor says “There are eight more requests. Please add the ones that aren't in yet”, and then shows this slide.**

| # | Request |
|---|---|
| A1 | Show the number of times cards were flipped（the move count）on screen |
| A2 | Show how long it took to clear the game |
| A3 | Add a button to start again from the beginning |
| A4 | Let the player choose the number of cards from 12, 16 and 20 |
| B1 | After three misses in a row, show all the cards face up for just one second |
| B2 | When the player matches pairs one after another, double the points from the second one onwards |
| B3 | After five or more misses, make the wait before cards flip back 0.5 seconds |
| B4 | If the same card has been flipped three times without making a pair, put a mark on that card |

#### What the instructor says

**The wording of the requests goes on the slide. The instructor must not reword them on the spot.**

The difference between A and B isn't written on the slide. A requests are ones where you can tell whether they went in just by looking at the screen. B requests are ones where the request text doesn't say “what counts as correct”. This is explained to participants in chapter 7.

On top of that, be careful **not to say in advance what you want participants to notice in this chapter**.

> What you want them to notice in this chapter is these two things.
> - They can't tell clearly which requests are already in their own game
> - For the B requests, they can't check afterwards whether the request “went in correctly”. For example, in B1 the request doesn't say whether miss → pair → miss → miss counts as “three in a row”
>
> **Don't say this in advance.** It's explained in chapter 7.

### 4-2 Check what's in your game, then pick requests

#### ［Slide］What participants do（4 minutes）

**① Mark the requests that are in（3 minutes）**

Run your game, and mark which of the eight requests are **in it from the start**.

| Mark | Meaning |
|---|---|
| ○ | It's in |
| × | It isn't in |
| ？ | Can't tell whether it's in |

**It's fine to put ？.** The number you couldn't tell is also recorded.

**② Pick two requests to add（1 minute）**

Pick two from those marked ×. **At least one of the two must come from B.**

#### What the instructor says

While circulating, check that the ○ × ？ marks differ from participant to participant. Many people will already have A requests from the start, and many will mark B requests with ？.

### 4-3 Have them implemented in a new chat, and record the results

#### ［Slide］What participants do（11 minutes）

**① Open a new chat（1 minute）**

Not the chat you're using now — open **a new chat**.

（Screen: `s02-07` where to open a new chat）

> **Why**: the current chat still holds the information about what you built in chapter 2. A new chat doesn't have that information. **It's the same situation as handing the work over to someone else.**

**② Have the chosen requests implemented（6 minutes）**

Send the two requests you chose, using the wording on the slide as it is.

```text
@session02/ Add the following two things.
- (the first request you chose)
- (the second request you chose)
Don't change any other behaviour.
```

**③ Record the results（4 minutes）**

| What to record | Answer |
|---|---|
| Of the eight, how many were in from the start（○）and how many you couldn't tell（？） | |
| The two requests you chose | |
| Lines changed（the +/- in the diff） | |
| Did a feature that was already there break | |
| **Could you judge for yourself whether the chosen requests went in correctly** | |

The last row is the most important question of the day. This record is used in the second presentations in chapter 6.

#### What the instructor says

**At ①**: many people carry on without opening a new chat, so remind them. Without a new chat, the situation of “handing work to someone who doesn't know the history” doesn't happen, and they don't get the experience this chapter is for.

**Right after ② is sent**: tell them to check whether the requests went in correctly when the result comes back. Don't explain how to check.

**After ③**: what they noticed in this chapter is explained in chapter 7. Here, only confirm that everyone has written the last row（could they judge whether it went in correctly）.

**Most people will manage to implement the requests. That's fine.** What this session wants to get across isn't “you can't implement it” but “**you can't judge whether it was implemented**”.

#### Checkpoint

- [ ] They marked the eight requests with ○ × ？
- [ ] They made the request in a new chat
- [ ] The record table is filled in

**If someone's existing features broke, share it with the whole room and use it as material for the explanation.** It's also fine if nothing broke.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Doesn't have two × marks | With one ×, add only that one. With no ×, pick from the ？ ones |
| All the B requests were ○ | Picking two from A is fine. Also record that “all the B requests were in from the start” |
| Carried on in the old chat | Have them record that too. The observation “the chat that knew the history was easier” is also worth picking up as a lesson |
| Doesn't know how to count lines changed | The +/- appears at the top right of the diff, or on the change bar in the Agent panel |
| Can't check whether it was implemented | **That is the correct result.** Have them record “couldn't check” |
| Their memory game from chapter 2 doesn't run | Have them read the list and only think about “what would count as correct” for the B requests |

---

## Chapter 5 Change it freely — 0:45（10 minutes）

> Add any feature you like to your memory game. In this chapter, participants experience **what vibe coding is good at**.

### The shape of this chapter

1. 5-1 Add any feature you like

### 5-1 Add any feature you like

#### ［Slide］What participants do（10 minutes）

**① Decide on one feature to add（1 minute）**

Any feature is fine. It's also fine to add one you didn't pick from the list in chapter 4. If nothing comes to mind, pick from the examples below.

| Examples |
|---|
| Change the pictures on the cards（animals, flags, food, etc.） |
| Add an effect when the game is cleared |
| Add sound effects |
| Change the colours or the layout |

**② Ask in a new chat（7 minutes）**

```text
@session02/
Add (the feature you want, in a few words).
```

**You don't need to specify details.** Today we work in the way that doesn't specify details.

**③ Run it and check（2 minutes）**

Reopen the game in the browser and check whether the added feature works.

#### ［Slide］Column: fixing the look with Design Mode

**When you want to fix the look, instead of describing it in words, you can select elements on the screen and pass them to the AI.**

With your game open in the built-in browser, press **`Ctrl+Shift+D`**（Mac: `Cmd+Shift+D`）.

| Action | Keys |
|--------|------|
| Turn Design Mode on and off | `Ctrl+Shift+D`（Mac: `Cmd+Shift+D`） |
| Select an area | Drag while holding `Shift` |
| Add the selected elements to the chat | `Ctrl+L`（Mac: `Cmd+L`） |

> **This is a column, so you don't have to try it.**
>
> For details, see [`16-browser-design.md`](../fundamentals/16-browser-design.md).

#### What the instructor says

Explain that being able to try an idea straight away is what vibe coding is good at.

While circulating, check that **different people added different features**. You use this in the presentations in chapter 6.

#### Checkpoint

- [ ] They added at least one feature they like

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't decide what to add | Have them pick one from the table of examples |
| Adding a feature broke it | Undo to go back. **That it broke is also something to talk about in the presentation** |
| The requests added in chapter 4 disappeared | It's fine to talk about that in the presentation. **It's an example of what happens when you ask someone who doesn't know the history** |

---

## Chapter 6 Second presentations — 0:55（15 minutes）

> Show each other the games after the extra requests and the free changes. **Unlike the first presentations, here participants talk about “what they added, and what they noticed”.**

### The shape of this chapter

1. 6-1 Show it in 3 minutes each

### 6-1 Show it in 3 minutes each

#### ［Slide］How to do the second presentations（3 minutes each）

| Order | What to talk about | Rough time |
|---|---|---|
| 1 | Run your memory game as it is now and show it | 1 minute |
| 2 | The requests you chose in chapter 4, and **whether you could check that they went in correctly** | 1 minute |
| 3 | The feature you added in chapter 5 | 1 minute |

**We don't compare how complete the games are.** Talk about things that broke, and things you couldn't check, just as they are.

#### What the instructor says

There are 4 participants, so at 3 minutes each it takes 12 minutes in total. **The instructor keeps the time.** In the remaining 3 minutes, check the following.

- If several people chose the same request（especially a B request）, did it behave the same way for them
- How many people said “I couldn't check”

If the same request behaves differently for different people, that's an example of how the request text alone doesn't settle on one “correct behaviour”.

#### Checkpoint

- [ ] Everyone did the second presentation

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Someone can't show their screen | Have them read out their record from chapter 4 |
| Not enough time | Cut it to 2 minutes each and shorten item 3（the feature they added）. **Don't cut item 2** |

---

## Chapter 7 Summary — 1:10（10 minutes）

> Put what participants have experienced so far into words. **This is the only chapter in this session where the instructor explains at length.**

### The shape of this chapter

1. 7-1 What happened with vibe coding

### 7-1 What happened with vibe coding

#### ［Slide］What you decided, and what the AI decided

| | Contents |
|---|---|
| **What you handed to the AI** | **A three-line request**（the game's name, HTML + JS, “make it nice”） |
| **What you decided** | Only two things: that it's a memory game, and that it runs in the browser |
| **What came back** | One playable game（built in a few minutes） |
| **What the AI decided** | The card count, the faces, the layout, the colours, whether there's a score, the difficulty, how many seconds before cards flip back, and so on |

**The AI decided far more than you did.**

#### ［Slide］Good point ① of vibe coding: you can build fast

With just a three-line request, a working game was built in a few minutes（chapter 2）. Everyone's game ran.

Even without writing code yourself, you get something playable straight away.

#### ［Slide］Good point ② of vibe coding: you can try ideas straight away

In chapter 5, a feature went into the game just by asking for it in a few words.

Without deciding details, you can keep building while trying things out.

#### ［Slide］Weak point ① of vibe coding: you can't check whether it was built correctly

You asked without deciding “what counts as correct”, so there's no standard to check against.

For example, B1 doesn't say any of the following.

- Whether miss → pair → miss → miss counts as “three in a row”
- On the fourth miss, whether the cards are shown face up again, or the count starts over
- Whether the cards can be clicked during the one second they are face up

Whatever isn't written, the AI decides and builds. Even if something happens when you run the game, there's no standard to compare it against to say whether it's correct. With the A requests you can tell whether they went in just by looking at the screen, so this problem doesn't arise.

#### ［Slide］Weak point ② of vibe coding: you can't hand it over to someone else

What was decided isn't written down anywhere, so anyone who takes over the work later can only guess from the code.

- The AI in the new chat doesn't know what the participant was trying to build. It reads the code, guesses, and makes changes.
- For example, nothing says whether having 16 cards was the participant's decision or the AI's.
- This time the work was handed to an AI, but the same thing happens when you hand it to another person, or to yourself at a later date.

#### ［Slide］Choosing between vibe coding and spec-driven development

| When | The way that suits it |
|---|---|
| Building something small, used only once, or used only by you | **Vibe coding**（about the size of the memory game） |
| There's a lot to decide, you build with other people, or you'll fix it later | **Spec-driven development**（learned in session 3） |

**Which one to use is judged not by the size of what you build, but by how much there is to decide.** The more there is to decide, the more you leave to the AI.

#### What the instructor says

Say the following.

- Good points ① and ② and weak points ① and ② are all true. Vibe coding isn't bad. When you build something small quickly, the good points help; when you build something with a lot to decide, the weak points become a problem.
- When explaining weak point ①, also bring up that some people marked ？ in 4-2. Even though they built the game themselves, they can't tell clearly what's in it.
- The “done-when condition” learned in session 1 was deliberately not written today. The B requests couldn't be checked because “what counts as correct” wasn't written.
- In session 3, we build a game with far more to decide than the memory game（poker）, writing the requirements and done-when conditions first.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| The explanation ran long | Read only the headings of good points ① and ②, and spend the time on weak points ① and ② |
| Someone says “vibe coding causes me no trouble” | Don't deny it. Explain that at the size of a memory game that's true, and that session 3 tries a game with far more to decide |

---

## Chapter 8 Review quiz and next session — 1:20（10 minutes）

> Check the content of sessions 1 and 2 by answering questions. After that, explain what's in the next session.

### The shape of this chapter

1. 8-1 Review quiz
2. 8-2 Next session

### 8-1 Review quiz

#### ［Slide］What participants do（8 minutes）

The questions are given one at a time. **Have participants write their answer on paper or in the chat first**, then the instructor goes through the answer.

| # | Question | Answer |
|---|---|---|
| 1 | What are the button that accepts the changes the Agent made to a file, and the button that cancels them? | Keep / Undo |
| 2 | When you want to hand a specific file to the Agent, what do you type in the input box? | `@`（the file name） |
| 3 | Which mode do you use when you only want to ask a question（you don't want files changed）? | Ask |
| 4 | What do we call asking “make it nice” without deciding anything? | Vibe coding |
| 5 | In chapter 4, why couldn't you check whether the B requests went in correctly? | Because “what counts as correct” wasn't decided |
| 6 | Everyone asked with the same three lines, so why did different things come out? | Because the AI decided the things you didn't decide |

#### What the instructor says

Go through the answers one question at a time. **Don't criticise anyone who got it wrong.** For 5 and 6, count an answer as correct if the meaning matches, even if the wording isn't exact.

### 8-2 Next session

#### ［Slide］Next session（session 3）

Next session we build **poker**. Poker is a game with far more to decide than the memory game. Even if you ask “make it nice” as we did today, you won't get the poker you intended. So **next session we write the requirements first, then build.**

#### ［Slide］To do before next session（optional）

- Run `git pull` in `cursor-course/`（the Skills used in session 3 are added）
- Read [`05-prompting.md`](../fundamentals/05-prompting.md)（how to ask the AI well）

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Running late | Cut the quiz to four questions（1, 2, 4 and 5）. **Don't cut the explanation of next session** |

---

## Instructor checklist（for the day）

#### By the day before

- [ ] Checked whether anyone couldn't clone the repository in session 1（if so, deal with it at the start of the day）
- [ ] Ran chapters 2 to 5 yourself once
- [ ] Checked which of the eight extra requests the AI includes from the start（see “Extra requests” below）
- [ ] **Took the two sample screenshots（`s02-05` / `s02-06`）by sending the request twice with the same settings**（used in chapter 3）
- [ ] Confirmed that HTML files open in Cursor's built-in browser
- [ ] Confirmed that participants' screens can be shown to everyone through screen sharing or the projector（chapters 3 and 6）

#### How to take the two samples

**Participants don't fix the model**（it stays on Auto）. So, to show that “the same request produces different things”, use **two samples taken by the instructor**（`s02-05` / `s02-06`）.

| | |
|---|---|
| **Send it twice with the same settings** | Don't send it twice in a row in the same chat. **Open a new chat and send it twice.** Use the same settings both times |
| **Send the same three lines** | Send the three lines from the script as they are. Don't reword them |
| **Pick two that visibly differ** | Pick two where the card count, the faces or whether there's a score differ enough to see at a glance |

#### Extra requests（the wording goes on the slide）

| Kind | Requests | Why they're there |
|---|---|---|
| A | A1–A4 | Requests you can check by looking. They're often in from the start, so they're material for the work of “checking whether it's in” |
| B | B1–B4 | Requests whose conditions aren't clear. Even after they're added, there's no standard for judging whether they're correct |

**If the AI starts including the B requests from the start more often, replace the B requests.** A replacement request must meet three conditions: “it's easy to implement”, “it doesn't follow from the usual rules of a memory game”, and “the text alone doesn't settle on one meaning of what counts as correct”.

#### Time management

- End chapter 2 at 0:20. Moving on once it runs matters more than building something perfect
- If you're running late, shorten chapter 5 to 5 minutes
- **Don't cut chapters 3 and 6（the presentations）.** They are where this session reaches its conclusion
- If you're running late, cut the chapter 8 quiz to four questions
