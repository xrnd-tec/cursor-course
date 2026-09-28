# Session 4: Start building as a team（90 minutes）

> **The goals（four）**
> 01 Create the team's repository, and everyone has it locally → 02 Deliver the team's agreement（the rule）to everyone through a PR → 03 Write the requirements and tasks as a team, and review them in a PR → 04 Merge task 1, and start on your own task（stretch）
> **Reaching 01–03 is success. 04 is a stretch**, so not reaching it isn't a failure. It continues in the first half of session 5.

> **From today, we build one app as a team.** Three or four people hold one repository, and **every change is handed over as a PR**.
> In session 3 we said “if the requirements, tasks and rule are written down, you can ask someone else to carry on”. **Today, that “someone else” is a member of your team.**

---

## The whole shape of this script

1. The claim of this session（for the instructor）
2. 00-1 How to read this script
3. 00-2 The instructor's advance preparation
4. 00-3 Preparation on the day
5. 00-4 Timetable
6. 0-1 Cover and intro
7. Chapters 1 to 7
8. Appendix A: what's in the team template repository
9. The instructor checklist

---

## The claim of this session（for the instructor to understand）

**This isn't a session for learning Git.** Explanations of Git commands and how Git works are kept to a minimum, and the only thing we do is **get one flow all the way through using the buttons on the screen**.

What this session wants to hand over isn't Git operations but this one thing.

> **Hand over changes in a form other people can check.**

In session 3, participants wrote down the requirements, the tasks and the rule. At the end of session 3 we said “because it's written down, you can ask someone else to carry on”. Today we actually do that.

| What was written down in session 3 | What it becomes today | Where |
|---|---|---|
| **The rule**（`task-cycle.mdc`） | **The team's agreement.** When one person opens it as a PR, it takes effect in everyone's Cursor | Chapter 4 |
| **The requirements**（what it does / out of scope） | **Something the team agrees on.** Reviewed in a PR | Chapter 5 |
| **The tasks**（with done-when conditions） | **The unit of division of work.** 1 task = 1 branch = 1 PR | Chapters 5 and 6 |
| **The done-when condition** | **The standard for review.** The reviewer checks the done-when condition on screen and presses Approve | Chapter 6 |

**PR reviews don't have to be “deep comments”.** In a review between beginners, nobody can judge whether the code is good or bad. What they can judge is “**could the done-when condition be checked on screen**” and “**has anything that wasn't asked for been mixed in**”. Both are things they did in session 3.

### Why we do it on Cursor's screen

With `git` in the terminal, how it works comes across well, but **for first-timers the 40-minute second half turns into a Git lesson**. Sessions 1 to 3 were done entirely inside Cursor, so today follows suit.

- Branches, commits and sending（Publish / Sync）are buttons in the **Source Control panel**
- Commit messages are drafted with the **✨ button**, read, and then committed
- PRs are created by **having the Agent run `gh pr create`**（anyone without GitHub CLI creates them on the GitHub web page）
- Tasks become **GitHub Issues**, and when starting one, each person uses **`/start-task`** to make themselves the Assignee. The Issue list shows who is doing what, and two people never start the same task
- Reviews and merges are done on the **GitHub web page**

> More detail: [`20-git.md`](../fundamentals/20-git.md)

### Why the first PR is “the rule”

The first PR is **not code but the rule written in session 3**. There are three reasons.

1. **It's small.** It's five lines, so it can be read in full in the review. If the diff of the first PR is large, people get into the habit of pressing Approve without reading
2. **It doesn't conflict.** Nobody has touched any other file yet
3. **You can see the effect the moment it's merged.** The rule the Tech Lead wrote **takes effect in everyone's Cursor** just by syncing. The meaning of “sharing through Git” comes across without explanation

---

## How to read this script

### The shape of this section

1. 00-1 The key points

### 00-1 The key points

Written on the assumption that **participants work with their hands while looking at the material, and the instructor explains as it goes**. The format is the same as session 3.

The numbers in the headings read as **`N-M` = step M of chapter N**. Everything before chapter 1 is **`00-M`**（how to read, preparation, timetable）, and the intro is **`0-1`**.

Each chapter has five blocks（some sections are missing a few）.

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
| Chapter 3 | [`20-git`](../fundamentals/20-git.md)（preparing the repository） · [`07-skills`](../fundamentals/07-skills.md)（the Skills in the template） |
| Chapter 4 | [`20-git`](../fundamentals/20-git.md)（branches, commits, PRs） · [`06-rules`](../fundamentals/06-rules.md)（rules shared by the team） |
| Chapter 5 | [`07-skills`](../fundamentals/07-skills.md) · [`05-prompting`](../fundamentals/05-prompting.md) |
| Chapter 6 | [`20-git`](../fundamentals/20-git.md)（updating main, conflicts） · [`11-bugbot-pr`](../fundamentals/11-bugbot-pr.md)（where PR review fits） |

**Today, who works with their hands changes by role.** Every “What participants do” block in each chapter states **who does it**（Tech Lead / PM / Engineer / everyone）.

---

## The instructor's advance preparation（by the day before）

### The shape of this section

1. 00-2 The advance preparation list

### 00-2 The advance preparation list

**Deciding these on the day loses 15 minutes on its own.** Finish the following by the day before.

| Item | Contents |
|------|----------|
| **Forming teams** | **Four participants form one team.** Each person takes one of the four roles. When there are more participants, form teams of three or four, up to 8 teams（the cap on session 5's presentation slot） |
| **The template repository** | Prepare a **team template** on the organisation's GitHub, and tick **Template repository**. Its contents are in Appendix A |
| **Advance notice to participants** | Send “What to ask participants to do by the day before” below in the chat |
| **The instructor's demo repository** | Create one from the template, and **run through chapter 4's demo once**（branch → commit → PR → merge） |
| **The results of the show of hands in session 3** | Know how many people “don't see changes in Source Control” and how many “don't have a GitHub account” |

#### What to ask participants to do by the day before

```text
Session 4 uses GitHub as a team. Please do the following by the day before.

1. Create a GitHub account (only if you don't have one yet)
2. Paste your GitHub username in the chat (it's used to invite you to your team)
3. Install GitHub CLI and sign in
   Install it from https://cli.github.com/, then run gh auth login in a terminal
```

**Item 3 is required.** It's used by `/start-task`, which you use when starting a task, and for creating PRs and Issues. Anyone who hasn't done it has to set up PRs and assignments on the GitHub web page, which takes longer（chapters 4 and 6 have the steps）.

> **If item 2 isn't collected, the invitations in chapter 3 stall.** Talk individually to anyone who hasn't sent it by the day before.

---

## Preparation on the day（checked at 0:00）

### The shape of this section

1. 00-3 The day's preparation list

### 00-3 The day's preparation list

| Item | Steps |
|------|-------|
| **The team list** | Show it on a slide or in the chat. **Who is in which team**, and the team numbers |
| **The template URL** | Have `https://github.com/xrnd-tec/cursor-team-template` ready to paste in the chat |
| **The theme list** | The slides for chapter 2（five themes, two slides）. Also prepare **a table for noting the number each team chose** |
| **Working folder** | Today we don't work inside `cursor-course/`. **The team repository is cloned somewhere else**（chapter 3） |
| **Model** | Leaving it on Auto is fine |
| **Node.js** | Not needed today either. The app is limited to something that runs in the browser alone |

> **Don't create the team repository inside `cursor-course/`.** You end up with a repository inside a repository, and the Source Control view gets confused.

---

## Timetable

### The shape of this section

1. 00-4 The 90 minutes

### 00-4 The 90 minutes

| Time | Chapter | Contents | Who |
|------|---------|----------|-----|
| 0:00 | Ch.1 Today's goal | Announce that we build as a team, decide the roles（5 min） | Instructor |
| 0:05 | Ch.2 Decide the theme | Choose a theme **from the list**, and confirm “the one action you'll show in the presentation”（5 min） | Team |
| 0:10 | Ch.3 Create the repository | Create it from the template → invite → everyone clones（12 min） | Team |
| 0:22 | Ch.4 Open the first PR | Add the team's agreement（the rule）through a PR（18 min） | Team |
| 0:40 | Ch.5 Open a PR for the requirements and tasks | Requirements → tasks → PR → turn the tasks into Issues（17 min） | Team |
| 0:57 | Ch.6 Build task 1 and divide the work | Task 1 with `/start-task` → merge → each person runs `/start-task`（23 min） | Team |
| 1:20 | Ch.7 Summary | Sharing progress, next session（10 min） | Instructor |

**Participants work with their hands for 75 of the 90 minutes.** Choosing the theme from a list squeezes chapter 2 into 5 minutes, and the 5 minutes saved go to chapter 6（merging task 1）. The instructor only talks at length in chapters 1 and 7, and in the demo at the start of chapter 4.

> **If you're running late**: lower the finish line of chapter 6 to “the PR for task 1 has been opened（merging can wait until next session）”. **Don't cut chapter 4** — it's the only place where everyone sees the PR flow once. Cut off the requirements in chapter 5 at 8 minutes; it's fine to open the PR with unfilled sections left empty.

---

## Cover and intro — 0:00（inside chapter 1）

> **Not a chapter.** Carry straight on into the start of chapter 1.

### The shape of this section

1. 0-1 From the cover to what we do today

### 0-1 From the cover to what we do today

#### ［Slide］Cover

```
Start building as a team

Cursor hands-on course　Session 4 / 5　·　90 minutes
（date）
```

#### ［Slide］Before we start（everyone, at 0:00）

Before the lesson starts, everyone checks these three things.

- [ ] Find your team and team number on the team list
- [ ] You can sign in to GitHub（you create a repository in chapter 3）
- [ ] Today you don't work inside `cursor-course/`

> The team repository is cloned outside `cursor-course/`（chapter 3）. If you create it inside `cursor-course/`, the Source Control view gets confusing.

#### ［Slide］Recap of last session（30 seconds）

**Last session, you wrote down three things.**

| What was written down | Contents |
|---|---|
| **Requirements** | What it does / screen / interactions / **out of scope** |
| **Tasks** | Small enough to hand over in one request. **Each with a done-when condition** |
| **Rule** | The two lines you typed every time, put in `.cursor/rules/` |

> “Because it's written down, **you can ask someone else to carry on**.” — what we said at the end of last session.

#### ［Slide］What we do today

**Today, that “someone else” is a member of your team.**

| | What we do | Where |
|---|---|---|
| 1 | Hold one repository as a team | Chapter 3 |
| 2 | Turn last session's rule into **the team's agreement** | Chapter 4 |
| 3 | Write the requirements and tasks **as a team** | Chapter 5 |
| 4 | Divide the tasks and start building | Chapter 6 |

**Every change is handed over as a PR.** That is today's only new tool.

#### ［Slide］How today runs（three points）

1. **You don't have to finish.** Today's goal is to “start building”. Finishing and presenting are in session 5
2. **When it isn't your turn, be a reviewer.** The job of anyone not touching the screen is **to read PRs**
3. **If you get stuck, ask your team first.** If that doesn't solve it, raise your hand

#### What the instructor says

**Start by quoting, as it is,** the last line of session 3（“you can ask someone else to carry on”）. Today is where that pays off.

> “At the end of last session, I said ‘because it's written down, you can ask someone else to carry on’. Today we actually ask. The someone else is a member of your team.”

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Missed last session and hasn't written the rule | No problem. In chapter 4 the team's Tech Lead writes the rule, and **it reaches everyone when they Sync** |
| Doesn't have a GitHub account | Have them create one on the spot（an email address is enough）. Until then, they watch their team's screen together |

---

## Chapter 1 Today's goal — 0:00（5 minutes）

> We build one app as a team. **In this chapter the instructor only talks.** At the end, the roles within each team are decided.

### The shape of this chapter

1. 1-1 Share today's goal and decide the roles

### 1-1 Share today's goal and decide the roles

#### ［Slide］Today's goal

| Rung | What you'll be able to do | Where |
|----|---------------------------|-------|
| 01 | Create the team's repository, and everyone has it locally | Chapter 3 |
| 02 | Deliver the team's agreement（the rule）to everyone through a PR | Chapter 4 |
| 03 | Write the requirements and tasks as a team, and review them in a PR | Chapter 5 |
| 04 | Merge task 1, and start on your own task ← **stretch** | Chapter 6 |

#### ［Slide］The team roles

**Today there are these four roles.** In a team of three, the Tech Lead also takes on QA.

| Role | Number | What they do today |
|------|--------|--------------------|
| **Tech Lead** | 1 | Creates the repository, invites the members, **opens the first PR（the rule）** |
| **PM** | 1 | Runs `/requirements` and `/task-breakdown`, and **opens the PR for the requirements and tasks**. Decides when opinions split, and reports progress（leads the talking in session 5's presentation） |
| **Engineer** | 1 | **Implements task 1 and opens its PR** |
| **QA** | 1 | Keeps “the one action you'll show in the presentation” working. **Runs PRs on screen to check them, and merges them**（operates the screen in session 5's presentation） |

**Everyone has one more job: reading other people's PRs.**

#### ［Slide］The PR agreements（two）

1. **Whoever opens a PR doesn't merge it themselves.** Someone else reads it and presses Approve, then it's merged
2. **Nobody commits directly to `main`.** Always create a working branch before making changes

#### ［Slide］Column — basic GitHub terms

**This is the first time we use GitHub, so here are the terms we use from today.** You don't need to remember the details of how they work.

| Term | Meaning | Where we use it today |
|---|---|---|
| **GitHub** | A web service for putting a repository on the internet and sharing it as a team | Where the team's repository lives |
| **Repository** | One app's files, together with the history of their changes | The team creates one |
| **Branch** | A place to work on changes separately from main. Changes on a branch don't change main | One per task |
| **main** | The branch the repository is based on. Only things the team has checked go into it | Used for the presentation in session 5 |
| **Commit** | Recording changes as one unit | Each time a piece of work is done |
| **PR（pull request）** | A request saying “please check whether the changes on this branch can go into main” | When sharing changes |
| **Merge** | Taking a PR's changes into main | After checking is done |

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

#### What the instructor says

> “From today, you build one app as a team. You present it in session 5.
> Today's only new tool is the **PR**. A PR is a way of handing over that says ‘**I've built this far, please check it**’.
> The standard for checking is the **done-when condition** you wrote last session.”

**Have each team decide its roles within 30 seconds.** If they can't decide, assign Tech Lead, PM, Engineer and QA **in order from the top of the team list**.

> “The roles are just for today. You can swap them in session 5.”

#### Checkpoint

- [ ] Each team has decided four roles（three for a team of three）

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't decide the roles | Assign them in order from the top of the team list |
| It became a team of two（absences） | The Tech Lead also takes on PM, and the Engineer also takes on QA. Just make sure **there is always one person who reads the PR** |
| “What's a PR?” | Say you'll show a real one in chapter 4. Don't explain it here |

---

## Chapter 2 Decide the theme — 0:05（5 minutes）

> Choose what to build **from a list the instructor has prepared（five themes）**. Each one is **the kind of thing companies actually ask for**, and was chosen to be **fun to use**.
> **A theme outside the list is fine if it meets the constraints.**

### The shape of this chapter

1. 2-1 Choose a theme from the list, and decide “the one action you'll show in the presentation”

### 2-1 Choose a theme from the list, and decide “the one action you'll show in the presentation”

#### ［Slide］The theme list

**This time, we build it as a job for a client.** The assumption is that it was requested by the “client” in the table.

| # | Theme | Client | The one action you'll show in the presentation |
|---|---|---|---|
| 1 | **Mobile ordering** | A café | “Order on the customer's screen and **it appears on the kitchen's screen**; press ‘Served’ and the customer's screen changes” |
| 2 | **Cinema seat booking** | A cinema | “Pick two seats and choose the ticket types, the total appears, and after booking **those seats can no longer be chosen**” |
| 3 | **A campaign prize draw** | The sales promotion department of a drinks maker | “Press the button, a prize is won and the remaining count goes down, and **a prize whose stock is 0 never comes up again**” |
| 4 | **A product quiz** | A coffee chain | “Answer five questions and **your type and a recommended drink** appear” |
| 5 | **A vending machine** | A vending machine maker | “Put in 500 yen and buy a 150-yen item, the item comes out, and **the breakdown of the change** is shown” |

**For theme 1, the “customer's screen” and the “kitchen's screen” are built side by side, left and right, on one page**（because no server is used）.

#### ［Slide］Things you can't decide without asking the client

**What makes it feel like real client work is the detail of the rules.** Each of these can't be decided without asking the client, and **if you don't ask, the AI decides on its own**.

| # | What to decide in the requirements | Examples of what not to build |
|---|---|---|
| 1 | Options（size, toppings）and prices / **how to handle sold-out items** / until when an order can be cancelled / the order status（received → being prepared → served） | Payment / login / multiple shops |
| 2 | Ticket types（adult, student, senior）and prices / how many seats per booking / **whether to allow choices that leave a single seat stranded on its own** / wheelchair spaces | Payment / multiple screenings / membership |
| 3 | **The chance of winning each prize** / where the chance for a prize whose stock hits 0 goes / how many draws per day（does reloading reset the count?）/ whether there are losing draws | Shipping prizes / login / flashy effects |
| 4 | How points are given for the questions and choices / **the result when there's a tie** / whether you can go back and change an answer / how many results（how many types） | Posting to social media / generating images / saving answers |
| 5 | Which money can be used（kinds of coins and notes）/ **what happens when there aren't enough coins for change** / sold-out items / the return lever（cancelling） | Electronic money / showing the temperature / sales totals |

**The bold items are rules that split especially easily.** Like “comparing two of the same hand” in session 3's poker, if you don't write them, the AI usually doesn't ask.

**Common assumptions（all five themes）**

- Data is held **only inside the browser**（`localStorage`. No server）
- Menus, seats, prizes, questions, products and so on are **fixed from the start**（no admin screen）
- No images. Show things with **emoji and colour**

**It's fine to choose the same theme as another team.** Even with the same theme, how you decide the rules produces something different（you can compare them in session 5's presentations）.

#### ［Slide］Conditions for choosing from outside the list

| Condition | Reason |
|------|------|
| **Runs in the browser alone**（HTML + JS. No Node.js or server） | Can be built in the same environment as session 3 |
| **One screen** | A size that can be finished by session 5 |
| **No external APIs** | They're a cause of things working for some people and not for others |
| **You can say “press ○○ and △△ happens”** | The goal doesn't drift |
| **You can name the client and what to decide in the requirements** | Gives it the same “real client work” shape as the list |

**The size of the themes on the list is the upper limit.** Tell the instructor before you go ahead.

#### ［Slide］What participants do（5 minutes, everyone）

**① Choose one theme from the list（3 minutes）**

A team that wants something outside the list checks that it meets the conditions above, and tells the instructor.

**② Confirm “the one action you'll show in the presentation”（1 minute）**

A team that chose from the list can use the “one action you'll show in the presentation” from the table as it is. If you want to change it, rewrite it so it can be said in this form.

```text
“Press ○○ and △△ happens”
```

In session 5's presentation, you show **only this one action**.

**③ The PM notes it down（1 minute）**

The PM keeps the theme, the one action and the list number until chapter 5.

#### What the instructor says

> “From today, we build it as **a job for a client**. The assumption is that a café, a cinema or a maker asked you for it.
> Look at the second table. ‘Whether to allow choices that leave a single seat stranded’, ‘what happens when there aren't enough coins for change’ — **all of these can't be decided without asking the client**.
> If you build without asking, the AI decides. The same as in session 3's poker, where the AI even decided the kind of game.”

**Whichever theme is chosen, the core of the requirements is “the rules”.** In chapter 5, if a team's “what it does” has no rules written in it at all, point at this table.

Circulate and note down **each team's theme number**（used for sharing progress in chapter 7, and for deciding the presentation order in session 5）.

**Ask a team that chose from outside the list just one question.**

> “What's the one action you'll show in the presentation?”

If features start piling up — “it can do ○○, and △△, and…” — it's too big.

> “Is it bigger than the themes on the list? If it is, move something into ‘out of scope’, or choose again from the list.”

#### Checkpoint

- [ ] One theme has been decided（a list number, or an outside theme the instructor has been told about）
- [ ] “Press ○○ and △△ happens” can be said in one sentence

**If a team hasn't decided at the 3-minute mark, the instructor picks one from the list for them.**

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Can't decide | **The instructor picks one from the list** |
| Opinions split | The PM decides |
| The theme from outside the list is too big（login, online play, multiple screens） | Cut it down to one screen and one player. If that isn't possible, choose again from the list |
| Wants to use an external API（weather, translation, etc.） | Not allowed this time. Change direction to **building the same look with fixed data**, or choose from the list |

---

## Chapter 3 Create the repository — 0:10（12 minutes）

> The team holds one repository. **The Tech Lead creates it, and everyone clones it locally.**

### The shape of this chapter

1. 3-1 What a repository is, and how it's set up today（explanation）
2. 3-2 Create it from the template, and everyone clones it

### 3-1 What a repository is, and how it's set up today（explanation）

#### ［Slide］Explanation — how it's set up today

```
GitHub (the team's repository, just one)
   ├─ cloned to the Tech Lead's PC
   ├─ cloned to the PM's PC
   ├─ cloned to the Engineer's PC
   └─ cloned to the QA's PC
```

**Everyone has a copy of the same repository locally.** Someone sends a change to GitHub, and the others fetch it — we do this with PRs.

#### ［Slide］Explanation — what's in the template

The team repository is created from a **template** the instructor has prepared. It contains the following from the start.

| What's in it | Contents |
|---|---|
| `.cursor/skills/requirements/` | The requirements Skill used last session. **It saves to `docs/requirements.md`** |
| `.cursor/skills/task-breakdown/` | The task breakdown Skill used last session. **It saves to `docs/tasks.md`** |
| `README.md` | Fields for the team name, the theme, and the one action you'll show in the presentation |
| `.gitignore` | The list of files that aren't committed |

**The rule（`.cursor/rules/`）isn't in it.** The team adds that in chapter 4.

> More detail: [`20-git.md`](../fundamentals/20-git.md) · [`07-skills.md`](../fundamentals/07-skills.md)

#### ［Slide］Column — terms used when creating a repository

| Term | Meaning | Where we use it today |
|---|---|---|
| **Template repository** | A repository used as the base for creating a new one. With Use this template, you can create a repository containing the same files | Creating the team repository from the one the instructor prepared |
| **Collaborator** | A member invited as someone who can write to the repository | The Tech Lead invites the members |
| **Clone** | Copying a repository on GitHub to your own PC | Everyone does it |
| **GitHub CLI（`gh`）** | A tool for doing GitHub operations with commands in the terminal | When the Agent creates PRs or Issues, and `/start-task` |

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

### 3-2 Create it from the template, and everyone clones it

#### ［Slide］What participants do（12 minutes）

**① Tech Lead: create the repository from the template（3 minutes）**

1. Open the **template URL** pasted in the chat
2. **Use this template** → **Create a new repository**
3. Name it **`team-<team number>-<app name>`**（e.g. `team-3-quiz`）
4. Private is fine → **Create repository**

**② Tech Lead: invite the members（2 minutes）**

In the repository you created: **Settings** → **Collaborators** → **Add people** → enter a member's GitHub username. **Do it for every member.**

（Screen: `s03-01` Use this template ／ `s03-02` Add people）

**③ Everyone except the Tech Lead: accept the invitation（2 minutes）**

From the email GitHub sent, or from the GitHub notification, press **Accept invitation**.

> If you can't find the email, open `https://github.com/<Tech Lead's username>/<repository name>/invitations` and the page for accepting appears.

**④ Everyone: clone it and open it in Cursor（4 minutes）**

The same steps as session 1. Put it **outside `cursor-course/`**.

`Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）→ `Git: Clone` → paste the repository URL → choose where to put it → **Open**

**⑤ Everyone: check that you can commit and use GitHub CLI（1 minute）**

Send the following to the Agent.

```text
Check whether user.name and user.email are set in git on this PC.
Also check with gh auth status whether I'm signed in to GitHub CLI.
If anything is missing, just tell me what to do. Don't change any settings yet.
```

Anyone whose `user.name` / `user.email` isn't set tells the Agent **their name and the email address they registered with GitHub**, and has the Agent set them.
Anyone not signed in to `gh` runs `gh auth login` in the terminal（`` Ctrl+` ``）.

> If these are empty, things **stop the moment you commit** in chapter 4 onwards. Sort it out now.

#### What the instructor says

**During ①–③**: everyone except the Tech Lead is waiting. **You don't need to look at everyone's screen during this time.** Point at the contents of the template（the slide）and give a preview: “last session's Skills are in it. The rule isn't. We add that in the next chapter.”

**After ④**: have them check that `.cursor/skills/` is visible in the sidebar.

> “Last session's Skills are **already in this repository**. Because it was created from the template, everyone has the same tools from the start.”

#### Checkpoint

- [ ] Everyone in the team has the team repository open in Cursor
- [ ] `.cursor/skills/` is visible in the sidebar
- [ ] git's `user.name` / `user.email` are set
- [ ] `gh auth status` shows they are signed in

**Don't move to the next chapter until everyone is ready.** From chapter 4 on, everyone is assumed to have the repository locally. In a team where someone is behind, the other members help.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| **Use this template** doesn't appear | **Template repository** isn't ticked in the template's settings. The instructor fixes it |
| The invitation email doesn't arrive | Have them open `https://github.com/<Tech Lead>/<repository name>/invitations`. If it still doesn't appear, the Tech Lead checks the spelling of the username |
| Asked to authenticate when cloning | It's a Private repository, so signing in to GitHub is required. Allow it in the browser and come back |
| Cloned it inside `cursor-course/` | Close it, and clone it again somewhere else |
| Doesn't know how to set `user.name` | Ask the Agent: “set user.name to ○○ and user.email to ○○”（`--global` is fine） |
| The Tech Lead is absent or late | The next person takes over as Tech Lead. It's fine to shift the roles |

---

## Chapter 4 Open the first PR — 0:22（18 minutes）

> Turn last session's rule into **the team's agreement**. The Tech Lead opens it as a PR, someone else reads it and merges it, and **it reaches everyone's PC**.
> **This is the only chapter today where everyone sees the PR flow once. Don't cut it.**

### The shape of this chapter

1. 4-1 The PR flow and the instructor demo（explanation, 5 minutes）
2. 4-2 Add the rule through a PR（13 minutes）

### 4-1 The PR flow and the instructor demo（explanation）

#### ［Slide］Column — terms used when sharing changes

| Term | Meaning | Name on screen |
|---|---|---|
| **Stage** | Choosing the files to include in a commit | The **＋** in the Source Control panel |
| **Push** | Sending your PC's branch and commits to GitHub | **Publish Branch**（the first time） / **Sync Changes** |
| **Pull** | Bringing new changes on GitHub into your PC | **Sync Changes** |
| **Review / Approve** | Checking a PR's changes / approving them after checking that “there's no problem” | **Files changed** / **Review changes → Approve** |
| **Conflict** | When two people changed the same place in the same file, and Git can't combine them automatically | This branch has conflicts |

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Explanation — one flow

```
① Create a branch        (the branch name at the bottom left of Cursor)
② Make the change        (Agent)
③ Commit                 (Source Control → ＋ → ✨ → Commit)
④ Send it to GitHub      (Publish Branch)
⑤ Open a PR              (ask the Agent / the GitHub web page)
⑥ Someone else reads it, presses Approve → merge   (the GitHub web page)
⑦ Everyone updates main  (switch to main → Sync Changes)
```

**①–⑤ are done by the person opening the PR, ⑥ by the reader, and ⑦ by everyone.**

#### ［Slide］Explanation — the Source Control panel

**“Source Control” in the left sidebar**（`Ctrl+Shift+G`. Also `Ctrl+Shift+G` on Mac）. The place where the number of changes appeared last session.

| Where | What to do |
|---|---|
| The **branch name** at the bottom left（status bar） | Click → **Create new branch...** to create a branch / switch branches |
| The **＋** in **Changes** | Choose the files to put in the commit（stage） |
| The **✨** in the input box | The AI drafts a commit message. **Read it first**, then Commit |
| **Publish Branch** / **Sync Changes** | Send to GitHub / fetch from GitHub |

> **A message made with ✨ is a draft.** Just as you don't Keep without reading the diff, you don't commit without reading it.

#### ［Slide］Explanation — two ways to open a PR

| Way | Condition | Steps |
|---|---|---|
| **Ask the Agent** | GitHub CLI（`gh`）is installed and you're signed in | Send the prompt below. The Agent runs `gh pr create` |
| **Open it on the GitHub web page** | Nothing needed | Press **Compare & pull request**, which appears when you open the repository |

```text
Create a PR from the current branch to main.
Use the title “Add the team's agreement (rules)”.
In the description, write the files added and a summary of their contents.
```

**Either way, you get the same PR.** PRs and commits made with the Agent show `Made with Cursor`（this is Cursor's default setting）.

> More detail: [`20-git.md`](../fundamentals/20-git.md)

#### ［Slide］Instructor demo（screenshots）

**Using the instructor's demo repository, show four slides（instructor demo ①–④）in order（3 minutes）.** Participants stop and watch.

| Slide | Screen shown |
|---|---|
| Instructor demo ① Create a branch and have the rule file created | The branch name at the bottom left → Create new branch...（`feature/team-rules`）（`s03-05`） ／ Checking the diff of `team.mdc` created by the Agent, then Keep（`s03-06`） |
| Instructor demo ② Stage and commit | Pressing ＋ on `team.mdc` in Changes（`s03-07`） ／ The message filled in by ✨（`s03-09`） |
| Instructor demo ③ Send it to GitHub and create a PR | Publish Branch（`s03-10`） ／ The PR created by asking the Agent（`s03-11`） |
| Instructor demo ④ Check it, merge it, and bring it to everyone's PC | The PR's **Files changed** → **Approve**（`s03-13`） ／ On another member's screen: main → Sync Changes → `team.mdc` appears（`s03-17`） |

> In the actual class, show the screenshots in order. If you do it live, use **a repository you have already run through once**.

### 4-2 Add the rule through a PR

#### ［Slide］What participants do（13 minutes）

**① Tech Lead: create a branch（1 minute）**

The branch name at the bottom left → **Create new branch...** → `feature/team-rules`

**② Tech Lead: have the Agent write the rule（2 minutes）**

In a new chat, send the following as it is. **It's last session's four lines with one line added for the team.**

```text
Create .cursor/rules/team.mdc.
Set alwaysApply: true.
The contents are only the five lines below. Don't add anything else.

- Work on only one task at a time
- After implementing, check it against that task's done-when condition
- Once the done-when condition is met, stop there. Don't move on to the next task on your own
- Don't add features that weren't asked for
- When on the main branch, don't change files. Tell the user to create a working branch first
```

Read the diff, check that it contains only the `alwaysApply: true` frontmatter and **the five rules**, and Keep.

**③ Tech Lead: commit and send（2 minutes）**

Source Control → **＋** on `team.mdc` → **✨** → read the message → **Commit** → **Publish Branch**

**④ Tech Lead: open the PR（2 minutes）**

If `gh` is installed, ask the Agent（the prompt above）. If not, on the GitHub web page: **Compare & pull request** → **Create pull request**.

**⑤ Someone other than the Tech Lead: read it and merge it（3 minutes）**

1. Open the team repository on GitHub → **Pull requests** → the Tech Lead's PR
2. In **Files changed**, read the nine lines including the frontmatter. **Has anything other than the five rules been added?**
3. **Review changes** → **Approve** → **Submit review**
4. **Merge pull request** → **Confirm merge**

**⑥ Everyone: update main（3 minutes）**

1. The branch name at the bottom left → choose `main`
2. **Sync Changes** in Source Control（or `Ctrl+Shift+P` → `Git: Pull`）
3. Check that **`.cursor/rules/team.mdc` has appeared** in the sidebar

#### What the instructor says

**At ②**: point at the fifth line.

> “The fifth line is the one added today. It's there so that **if someone starts working directly on `main`, the AI stops them**. It's the second PR agreement, turned into a rule.”

**At ⑤**: say this to the readers.

> “**Approve is a mark meaning ‘I've read it, and it's fine’.** You don't need to say anything deep.
> Look at two things. **Is it the five lines that were asked for? Has anything that wasn't asked for been mixed in?** The same things you looked at before Keep last session.”

**After ⑥ — this is the most important part of this chapter.**

> “The rule written on the Tech Lead's PC has just **reached everyone's PC**.
> Last session, you each wrote a rule **for yourself**. Today one person wrote it, handed it over as a PR, and now **the same agreement is in effect in everyone's Cursor in the team**.”

**Have teams that finish early check whether the rule works（optional）:**

While on `main`, ask the Agent “add one line to the README”. **If the fifth line is working, it will tell you to create a branch.**

#### Checkpoint

- [ ] The Tech Lead's PR has been merged
- [ ] `.cursor/rules/team.mdc` is **on everyone's PC**
- [ ] The person who opened the PR and the person who merged it are **different people**

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Made the changes on `main` without creating a branch | Just create a branch now, and the changes come with you to the new branch. **Before committing**, this is no problem |
| The ✨ button doesn't appear / pressing it does nothing | The files may not be staged. Press **＋** first. If it still doesn't work, write the message by hand（“Add the team's rules”） |
| Commit says “set user.name” | Go back to step ⑤ of chapter 3 |
| Publish Branch asks you to sign in | Sign in to GitHub in the browser and allow it |
| The Agent can't find `gh` | Open the PR on the GitHub web page. **Switch without waiting** |
| `gh` is installed but the PR can't be created | `gh auth login` hasn't been done. Today, open it on the GitHub web page |
| **The Approve button can't be pressed** | You can't Approve your own PR. **Someone other than the person who opened it** does it |
| `team.mdc` doesn't appear even after Sync | They haven't switched to `main`. Check the branch name at the bottom left |
| The contents grew beyond five lines | As last session, **pick it up as teaching material**. If the reader noticed, the review is working |

---

## Chapter 5 Open a PR for the requirements and tasks — 0:40（17 minutes）

> Last session you wrote the requirements and tasks alone; today you write them **as a team**. **Everyone reads the PR for the requirements.**

### The shape of this chapter

1. 5-1 What changes when you write requirements as a team（explanation）
2. 5-2 Requirements → tasks → PR → turn the tasks into Issues

### 5-1 What changes when you write requirements as a team（explanation）

#### ［Slide］Explanation — how it differs from last session

| | Last session（alone） | Today（team） |
|---|---|---|
| Who writes the requirements | You | The **PM** writes them. **Everyone answers** |
| Where they're kept | `session02-spec/requirements.md` | **`docs/requirements.md`** |
| “Out of scope” | You decide | **The team agrees** |
| Tasks | You do them all yourself | **They become Issues, and each person takes some** |
| Checking they're right | Yourself, before Keep | **Everyone reads the PR** |

**“Out of scope” works even harder in a team.** If it isn't written, **each member starts adding different things**.

#### ［Slide］Explanation — how to split tasks（for teams）

| Rule | Reason |
|---|---|
| **Task 1 goes up to “the screen appears”** | The other tasks are built on top of task 1. **Nobody else can start until task 1 is merged** |
| **Number of tasks ≧ number of people** | Each person takes at least one |
| **1 task = 1 branch = 1 PR** | The smaller the PR, the more easily the reader can read all of it |
| **Assignments and completion are managed with Issues** | If assignments and completion marks are written in `tasks.md`, everyone edits the same file and the PRs collide. **Become the Assignee with `/start-task` when you start, and the task is done when the Issue closes on merging the PR** |

> More detail: [`07-skills.md`](../fundamentals/07-skills.md) · [`05-prompting.md`](../fundamentals/05-prompting.md)

### 5-2 Requirements → tasks → PR → turn the tasks into Issues

#### ［Slide］What participants do（17 minutes）

**The PM is the one who touches the screen.** The others watch the PM's screen and **answer out loud**（share the screen if online）.

**① PM: create a branch（1 minute）**

Check that you're on `main` → **Create new branch...** → `feature/requirements`

**② PM（everyone answers）: write the requirements（7 minutes）**

In a new chat, type `/`, pick **requirements**, and send.

```text
/requirements (the theme decided in chapter 2, in a few words)
```

The Skill asks four questions together. **Talk them over as a team and answer.** While looking at the second table in chapter 2（**things you can't decide without asking the client**）, **write the rules into “what it does”**, and decide “out of scope”.

The result is saved to **`docs/requirements.md`**.

**③ PM: split it into tasks（3 minutes）**

```text
/task-breakdown
```

**At least as many as there are people, and no more than ten**, is enough. With about two per person, anyone who finishes early can pick up the next Issue. The result is saved to **`docs/tasks.md`**. **Assignments aren't written here**（they're decided after turning the tasks into Issues in ⑦）.

**④ PM: write “the one action you'll show”（1 minute）**

In the “one action you'll show in the presentation” field of `README.md`, write the sentence decided in chapter 2.

**⑤ PM: open the PR（1 minute）**

The same as chapter 4. Source Control → ＋（**three files**）→ ✨ → Commit → Publish Branch → PR.

**⑥ Everyone except the PM: read it, and one person merges it（2 minutes）**

Read `docs/requirements.md` in **Files changed**. What to look at is **“out of scope”**.

- Is something you were planning to build in “out of scope”?
- Is there anything missing from “out of scope”?

**Once everyone has read it**, one person presses Approve → merge. After that, **everyone updates main**（step ⑥ of chapter 4）.

#### ［Slide］Column — terms used with Issues

| Term | Meaning |
|---|---|
| **Issue** | A “thing to do” registered on GitHub. Today, one Issue is created per task |
| **Assignee** | Who does that Issue. The name is shown in the Issue list |
| **Open / closed Issue** | An Issue that isn't finished yet / an Issue that's finished |
| **`Closes #number`** | Written in a PR's description, it automatically closes the Issue with that number when the PR is merged into main |
| **Issue number** | Issues and PRs share one sequence of numbers. If there are two PRs, the next Issue created is #3 |

> The authoritative explanation of these terms: [the “Terms” section of `20-git.md`](../fundamentals/20-git.md)

**⑦ PM: turn the tasks into Issues（2 minutes）**

After merging, send the following in a new chat.

```text
/create-issues
```

It reads `docs/tasks.md` on `main` and creates one Issue per task. **No Assignee is set.** Sending it twice doesn't create the same Issue twice. Each person makes themselves the Assignee with `/start-task` when they start（chapter 6）.

Everyone checks in the **Issues** tab of the GitHub repository that as many Issues as tasks have been created.

#### What the instructor says

**At ②**: circulate and look for **teams where a discussion about “out of scope” has started**. If you find one, introduce it to the whole room.

> “This team is arguing about ‘out of scope’. **That's exactly right.** If you don't argue now, once implementation starts **you'll begin building different things**.”

**After ③**: point at task 1 and say:

> “Task 1 goes up to the screen appearing. **Until this is merged, nobody else can start.** The next chapter begins with the Engineer building task 1.”

**At ⑥**: say how it differs from last session.

> “If everyone reads the requirements in the PR, nobody can say ‘I never heard about that’ later.”

**At ⑦**: show the Issues tab to the whole room.

> “The tasks have become Issues. **Nobody's name is on them yet.** In the next chapter, whoever starts one puts their own name on it with `/start-task`. An Issue with a name on it can't be taken by anyone else.”

#### Checkpoint

- [ ] The four sections of `docs/requirements.md` are filled in（especially **out of scope**）
- [ ] `docs/tasks.md` has at least as many tasks as people, and **the same number of Issues have been created**（no Assignees yet）
- [ ] “The one action you'll show in the presentation” is written in `README.md`
- [ ] The requirements PR has been merged, and **everyone has updated main**

**The requirements don't need to be perfect.** Cut it off at 8 minutes; it's fine to open the PR with unfilled sections left empty.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| `/requirements` doesn't appear in the list | The repository wasn't created from the template（there's no `.cursor/skills/`）. Tell the instructor |
| The requirements were saved somewhere other than `docs/` | Ask the Agent: “move it to `docs/requirements.md`” |
| The discussion never ends | Cut it off at 8 minutes. **Put anything undecided into “out of scope”** |
| Fewer tasks than people | Ask `/task-breakdown` again: “split it again so that ○ people can share it” |
| Eleven or more tasks | Add more to “out of scope” and split again |
| The Agent started writing the requirements on `main` | They forgot to create a branch. **If the fifth line of the rule is working, it stops**（if it stopped, introduce it to the whole room） |
| It takes a long time for everyone to read | Tell them it's enough to read just the “out of scope” section |
| Issues can't be created（no `gh`, or not signed in） | Create them on the GitHub web page. **Issues → New issue**, with the title “Task 1: (task name)” and the task's contents and done-when condition pasted into the body. Don't set an Assignee |
| The same Issue was created twice | Close one of them with **Close issue** |

---

## Chapter 6 Build task 1 and divide the work — 0:57（23 minutes）

> The Engineer starts task 1 with `/start-task`, and QA checks it on screen and merges it. **After that, everyone starts their own task with `/start-task`.**

### The shape of this chapter

1. 6-1 What a PR reader looks at（explanation）
2. 6-2 Merge task 1 through a PR, and each person starts with `/start-task`

### 6-1 What a PR reader looks at（explanation）

#### ［Slide］Explanation — what to look at before Approve

**It's the same as what you looked at before Keep last session.** The only change is that the person looking changes from yourself to someone else.

| | Last session（before Keep） | Today（before Approve） |
|---|---|---|
| What you look at | The diff | The PR's **Files changed** |
| What you check | Is the done-when condition met | **Could the done-when condition be checked on screen** |
| The standard | The done-when condition in `tasks.md` | **The same**（`docs/tasks.md`） |

**You don't have to judge whether the code is good or bad.** What you judge is these two things.

1. **Could the done-when condition be checked on screen**（switch to the branch on your own PC and open it in the browser）
2. **Has anything that wasn't asked for been mixed in**（files or features that aren't in the task）

#### ［Slide］Explanation — tasks are started with `/start-task`

**Every time you start a task, use `/start-task`.** It does the following in one go.

| What `/start-task` does | Why |
|---|---|
| Lists the Issues with no Assignee | You can see which tasks are free |
| Makes you the Assignee of the Issue you choose | **Nobody else starts the same task.** An Issue that already has an Assignee can't be chosen |
| Updates `main` and creates a branch from it | If you branch from an old `main`, the PRs collide later（a conflict） |
| Shows the task's “what to build” and “done-when condition” | You know what to send next |

**`/start-task` doesn't write code.** Once the branch exists, send “what to build” in a new chat.

In the PR description, write **`Closes #number`**（the Issue number）. When the PR is merged into main, that Issue closes automatically. **Open Issues = the tasks that are left.**

> More detail: [`20-git.md`](../fundamentals/20-git.md) · [`11-bugbot-pr.md`](../fundamentals/11-bugbot-pr.md)

### 6-2 Merge task 1 through a PR, and each person starts on their own task

#### ［Slide］What participants do（23 minutes）

**① Engineer: build task 1（8 minutes）**

1. In a new chat, send `/start-task` and choose **Task 1**. You become the Assignee, and a `feature/<number>-...` branch is created
2. Open **a new chat** again, and send **only task 1's “what to build”** that was shown

```text
(copy the “what to build” shown by /start-task)
```

**Write neither the done-when condition nor “don't change anything else”.** As in chapter 4 of last session, **they're in the rule**.

3. Read the diff → open it in the browser and check the done-when condition → Keep
4. Source Control → ＋ → ✨ → Commit → Publish Branch → PR. **Write `Closes #number` in the PR description**（when asking the Agent, add “put Closes #number in the description”）

**During ①, everyone else: look at the Issue list and think about which one to take**

In the GitHub **Issues** tab, read the done-when conditions of the Issues other than task 1. **Don't run `/start-task` yet**（wait until task 1 has been merged）.

**② QA: check task 1 on screen and merge it（4 minutes）**

1. The branch name at the bottom left → choose the Engineer's branch（`origin/feature/<number>-...`）（**bring the Engineer's branch to your PC**）
2. Right-click the HTML → open it with **Open In Browser**, and check **task 1's done-when condition**
3. Look at **Files changed** in the PR on GitHub, and check that there are no files that weren't asked for
4. **Approve** → **Merge pull request**

Once merged, task 1's Issue **closes automatically**（check in the Issues tab）.

**③ Everyone except the Engineer: start your own task with `/start-task`（3 minutes）**

In a new chat, send `/start-task` and choose one **free Issue**. You become the Assignee, and a branch is created from the latest `main`.

> **First come, first served.** `/start-task` won't let you choose an Issue someone else has already taken. It's also fine to talk it over as a team before choosing.

**④ Everyone（stretch）: start building your own task（the remaining time）**

The same steps as 2–4 of ①. Send only “what to build” in a new chat, and write `Closes #number` in the PR description. **If you get as far as opening the PR, you've reached today's 04.**

#### ［Slide］The finish line

- [ ] Task 1's PR has been merged
- [ ] On everyone's local `main`, **task 1's screen appears in the browser**
- [ ] Everyone has one Issue of their own, taken with `/start-task`
- [ ] **They opened the PR for their own task** ← stretch

**Getting to the second one is plenty.** The third and fourth can also be continued in the first half of session 5.

#### What the instructor says

**During ①（while the others are waiting）**: say this to the people waiting.

> “The job of the people waiting is **to read the done-when condition of your own task**. When you open a PR, be ready to tell the reader ‘how to check it’.”

**At ②**: pick one team where QA is opening someone else's branch in the browser, and show it to the whole room.

> “Right now, **QA is running what the Engineer built on their own PC**. This is a review.
> It's fine if you can't read the code. **Whether it works as the done-when condition says** is something anyone can check.”

**After ③**: say a little about next session.

> “Look at the Issues tab. **Every Issue now has a name on it.** You can see who is doing what just by looking here.”
> “From here on, everyone touches the same app at the same time. **PRs can collide.** If they do, don't panic — ask the Agent. We'll cover how to deal with it next session too.”

#### Checkpoint

- [ ] They reached the second item of the finish line

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| The Engineer's branch isn't in the branch list | The Engineer hasn't done Publish Branch, or you haven't fetched the latest. `Ctrl+Shift+P` → `Git: Fetch`, then try again |
| Task 1 doesn't work | QA doesn't press Approve. **Write what happened as a comment on the PR** → the Engineer fixes it on the same branch and commits → Sync Changes. The PR updates automatically |
| Task 1 is too big to finish in 8 minutes | Open the PR at the point where the screen appears. **Even if the done-when condition isn't met, today the experience of opening a PR comes first** |
| **The PR shows “This branch has conflicts”** | Ask the Agent for the following（the prompt below）. Read the proposed resolution in the diff too, then Keep |
| A conflict screen appeared locally | Press **Resolve in Chat**. The Agent reads both changes and proposes a resolution |
| Your task can't be built without waiting for someone else's task | It's a problem with the task order. **Today, switch to reading PRs while you wait.** Next session, proceed in that order |
| The Agent started working on `main` | The fifth line of the rule isn't working. Create a branch and start again |
| `/start-task` says “`gh` can't be used” | `gh auth login` hasn't been done. Do it by hand today: choose yourself under **Assignees** on the right of the Issue → `main` → Sync Changes → **Create new branch...** → `feature/<number>-<name>` |
| `/start-task` says “it already has an Assignee” | Someone else took it first. Choose **a different free Issue** |
| There are no free Issues | Every task has an Assignee. **Switch to reading other people's PRs** |
| The Issue doesn't close after merging | The PR description doesn't have `Closes #number`. Close it with **Close issue** on the Issue page |

What to send to the Agent when there's a conflict:

```text
Bring the latest main into the current branch.
If there are conflicts, propose a resolution that keeps both changes.
Once resolved, commit, but don't push yet.
```

---

## Chapter 7 Summary — 1:20（10 minutes）

> Sharing progress, and next session. **Don't shorten this.**
> The split: sharing progress 4 + things to remember 2 + next session 1 + homework and notices 3 = 10 minutes

### The shape of this chapter

1. 7-1 Progress, takeaways, next session

### 7-1 Progress, takeaways, next session

#### ［Slide］Sharing progress（30 seconds per team）

**The PM** says each of the following in a sentence.

1. The theme, and **the one action you'll show in the presentation**
2. The number of closed Issues（= the number of finished tasks）
3. What to do first at the start of next session

#### ［Slide］Three things to remember from today

1. **Hand over changes as PRs.** The person who opens a PR and the person who merges it are different
2. **The standard for reading a PR is the done-when condition.** Not whether the code is good or bad, but whether it could be checked on screen
3. **Rules and requirements reach the team through PRs too.** What one person writes takes effect in everyone's Cursor

#### ［Slide］Next session（session 5）

| Time | What we do |
|---|---|
| First half | Finish the remaining tasks（**no new features**） |
| Middle | Get the one action you'll show in the presentation running **on main** |
| Second half | Give a 5-minute team presentation |

**The presentation runs from `main`.** Anything that hasn't been merged can't be shown in the presentation.

#### What the instructor says

**Sharing progress**: 30 seconds for one team; with several teams, 30 seconds per team. **Always make them say the number of closed Issues.** If a team has 0, the instructor joins them at the start of next session.

**Next session preview（1 minute）**

> “Next session we finish and present. The goal is **for the one action you'll show in the presentation to work on main**.
> Rather than adding new features, put **not breaking what works** first.”

#### ［Slide］Homework（optional）

- **Carry on with your own task, and get as far as opening the PR.** If someone reads and merges it, the first half of next session will be easier
- If you've finished your own task and have time, take **a free Issue** with `/start-task`
- As a reader, **check the done-when condition on screen before** pressing Approve. The agreement is the same outside class
- If you want to go over the Git operations again, try the exercise in [`20-git.md`](../fundamentals/20-git.md)

> **Before merging anything as homework, always update main first and then create your branch.** There's no instructor outside class, so if a conflict happens, you handle it yourself, as far as asking the Agent.

#### When people get stuck

| Sticking point | What to do |
|----------------|------------|
| Sharing progress runs long | Cut it at 30 seconds per team. **Always make them say at least the number of closed Issues** |
| A team has 0 closed Issues | Don't criticise. Promise that **the instructor will go to that team at 0:05 next session** |
| Running late | Skip the homework. **Don't cut the next session preview**（always get across “we present from main”） |

---

## Appendix A: what's in the team template repository

The instructor prepares it on the organisation's GitHub. Tick **Settings → General → Template repository**.

**Template repository: https://github.com/xrnd-tec/cursor-team-template**（Public, with the Template repository setting already on）.

> **Why it's Public**: participants aren't members of the organisation, so if it were Private they couldn't press Use this template. It only contains Skills and a README.

```
(template)/
├── README.md
├── .gitignore
└── .cursor/
    └── skills/
        ├── requirements/SKILL.md
        ├── task-breakdown/SKILL.md
        ├── create-issues/SKILL.md
        └── start-task/SKILL.md
```

**`.cursor/rules/` isn't included.** The team adds it in chapter 4.

| Skill | Contents |
|---|---|
| `requirements` | The same as session 3. **Only the save location is `docs/requirements.md`** |
| `task-breakdown` | Based on session 3, with **split into at least as many tasks as people (about two each, ten at most)** and **don't write assignments** added |
| `create-issues` | **New.** Turns the tasks in `docs/tasks.md` on `main` into Issues one by one. Doesn't create an Issue if one with the same title exists. Doesn't set Assignees |
| `start-task` | **New.** Lists the Issues with no Assignee → makes you the Assignee of the one you choose（stops if it already has one）→ creates a branch from the latest `main` → shows what to build and the done-when condition. Doesn't write code |

`create-issues` and `start-task` use GitHub CLI（`gh`）. **All participants install it by the day before**（00-2）.

---

## Instructor checklist（for the day）

### Advance preparation（by the day before）
- [ ] Prepared a plan for the roles（four people per team. When there are more participants, three or four per team, up to 8 teams）
- [ ] Collected everyone's GitHub usernames
- [ ] Created the template repository and ticked **Template repository**
- [ ] In a repository created from the template, checked that Issues can be used and that `/start-task` makes you the Assignee
- [ ] Created your own demo repository from the template, and ran through ①–⑦ of chapter 4 once
- [ ] Had chapter 4's rule（five lines）written on a real machine, and checked **whether it stops at five lines** and **whether it stops work on `main`**
- [ ] Know the numbers from the show of hands in session 3（anyone without a GitHub account creates one by the day before）

### Time management
- Chapter 2 is just choosing from a list, so 5 minutes. Ask “what's the one action you'll show in the presentation?” only to teams that chose from outside the list
- If deciding the theme in chapter 2 goes over 3 minutes, the instructor picks from the list
- In chapter 3, **don't move on until everyone has cloned**. Have the team help anyone who's behind
- Don't cut chapter 4. If you're running late, cut off the requirements in chapter 5 at 8 minutes
- The minimum line for chapter 6 is “task 1 has been merged, and the screen appears on everyone's PC”

### Common sticking points
| Sticking point | What to do |
|----------------|------------|
| The invitation doesn't arrive | Have them open the `.../invitations` URL |
| Stops at commit | `user.name` / `user.email`. Step ⑤ of chapter 3 |
| Can't create a PR | Give up on `gh` and open it on the GitHub web page |
| Two people started the same task | They created a branch without using `/start-task`. Have them check the Assignees in the Issues tab |
| Can't Approve | You can't Approve your own PR. Someone else does it |
| Conflicts | Resolve in Chat, or ask the Agent to bring in main |
| One person is doing everything | Point at the roles table. **When it isn't your turn, your job is reading PRs** |
