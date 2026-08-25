# Session 3: Team development, first half（90 minutes）

> **The one-line goal**
> Pick a theme as a team, write a spec, and open one PR

---

## Timetable

| Time | Part | Contents |
|------|------|----------|
| 0:00 | Goal | What we're doing in the team work today（5 min） |
| 0:05 | First half ① | Forming teams, picking a theme（15 min） |
| 0:20 | First half ② | The minimum spec and the Git / PR pattern（20 min） |
| 0:40 | Second half | Start building + experience a PR（40 min） |
| 1:20 | Wrap-up | Progress check, next session（10 min） |

---

## 0:00 Goal（5 minutes）

> “From today you pick your own theme and build an app.
> Only four rules:
> ① keep to the theme constraints ② write the spec first ③ open a PR ④ aim for something demoable by session 4”

Recap of last time（one line）: spec → new chat → add one thing at a time.

---

## 0:05 First half ① — teams and theme（15 minutes）

### Forming teams

- Two to three people（adjust to headcount）
- A team of one is fine（though they'll need a way to show a PR in session 4）

### Theme constraints

Present these and hold people to them:

| Constraint | Why |
|------------|-----|
| One to a few screens | A scope that finishes by session 4 |
| No external APIs（or at most one） | Don't get stuck on environment differences |
| **Decide “the one action you'll show” up front** | Keeps the goal from drifting |
| Done = it runs well enough to demo（not perfect） | Lands inside the time available |

### Theme ideas（for anyone stuck）

- A ToDo app（add, complete, delete）
- Rock-paper-scissors（against the computer, with a win/loss count）
- A quiz app（three questions, then show the score）
- A timer / stopwatch
- A simple notepad（saved in localStorage）

### Done with this part

- [ ] Teams are formed
- [ ] One theme is chosen
- [ ] “The one action you'll show” can be said in a sentence

> If anyone is going to burn the full 15 minutes deciding, the instructor proposes one and settles it.

---

## 0:20 First half ② — the minimum spec and the Git / PR pattern（20 minutes）

### The spec template（hand this out）

Same structure as last session. The team fills it in.

```markdown
# App name: ____________

## What it does
- （bullets, 3–5）

## Screen
- （what's visible / what can be clicked）

## Interactions
- （what happens when the user does something）

## Out of scope
- （explicitly cut）

## The one action you'll show
- “Press ○○ and △△ happens”
```

### The minimum Git / PR flow（instructor demo）

> **Check the premise**: at the end of session 2 you measured `git status` and GitHub accounts.
> If three or more people fell short, it's fine to **make the PR optional**. The essence of this session
> isn't the PR itself but the experience of “showing a change to someone else and having them confirm it”,
> so pushing a branch and comparing diffs is enough to make it work.

**Preparing the repo:**

```bash
# Make a folder per team, or prepare a new repo
mkdir team-app && cd team-app && git init
```

**The branch pattern:**

```
main（don't break it）
  └── feature/xxx（working branch）
```

**The PR pattern（demo）:**

1. Cut `feature/add-html-skeleton` from `main`
2. Commit a minimal change（just the HTML skeleton）
3. `gh pr create`（or open the PR in the GitHub UI）
4. A reviewer reads the diff, approves, merges

> “A PR is a checkpoint for sharing ‘here's how far I got’. The review doesn't need deep comments — ‘read the diff, looks fine’ is enough.”

### The role pattern（a suggestion）

Rotate within the team if you like:

| Role | What they do |
|------|--------------|
| Driver | Builds it in Cursor |
| Spec keeper | Writes the spec / writes the request to the Agent |
| Reviewer | Reads the PR diff and says OK or asks a question |

> With two people, alternate between driver and reviewer.

---

## 0:40 Second half — start building + experience a PR（40 minutes）

### What to do

1. **Fill in the spec template**（within 10 minutes. It doesn't have to be perfect）
2. **Prepare the repo / folder**
3. **Cut a `feature/` branch and start building**
4. **Make one commit and open a PR**（at least one）

### What to watch for while circulating

| Situation | What to do |
|-----------|------------|
| Writing code without a spec | Ask: “have you decided the one action you'll show?” |
| The spec is too big（10+ items） | “Cut it to 3–5. Move more into out of scope” |
| Stuck on Git | Walk through branch creation to PR creation with them |
| Everyone is driving, nobody reviews | Prompt: “once a PR exists, someone read the diff” |
| One person doing everything, the team isn't working | Prompt the role rotation |

### The goal for this part

- [ ] The spec template is filled in
- [ ] A repo（or folder）exists
- [ ] There is at least one commit
- [ ] One PR is open（or, failing that, a pushed branch whose diff they showed each other）

---

## 1:20 Wrap-up（10 minutes）

### Progress check（one line per team）

- What's the theme?
- What's the one action you'll show?
- What works right now, and what's next?

### What worked today

1. **Keep to the theme constraints**（build small）
2. **Fill in the spec first**（what it does + out of scope + the one action）
3. **A PR is the habit of reading a diff**（it doesn't need to be a perfect review）

### Next session

> “Next time we finish and present.
> The goal is a state where ‘the one action you'll show’ demos cleanly.
> Prioritise keeping it running over adding new features.”

### Before next time（optional）

- Keep building（no need to push it. The first 40 minutes of next session are also for building）
- If you hit a wall, read [`06-rules.md`](../fundamentals/06-rules.md) and try one Rule

---

## Instructor checklist（for the day）

### Beforehand
- [ ] Decided how teams get formed（random / free / assigned）
- [ ] The spec template is ready to hand out
- [ ] You know the Git measurement from the end of session 2（how many can't run `git status`, how many have no GitHub account）
- [ ] If that number is three or more, you've already decided to extend the Git demo in first half ② by 10 minutes and make the PR optional
- [ ] Decided how each team's repo works（shared repo / fork / separate folders）
- [ ] `gh` CLI installed（if you'll create PRs from the terminal）

### Time management
- If picking a theme is about to pass 15 minutes, the instructor proposes one and settles it
- If the Git demo in first half ② isn't done in five minutes, switch to “just try it” and push it into the second half
- The minimum for the second half = spec template filled in + one commit. Not reaching a PR is fine

### Common sticking points
| Sticking point | What to do |
|----------------|------------|
| Can't settle on a theme | Make them pick one from the list above |
| Doesn't know Git | The minimum: `git init` → `git add <file>` → `git commit` → `git checkout -b`（avoid `git add .` — it sweeps up unrelated generated files） |
| Doesn't know how to open a PR | Show them the PR button flow in GitHub's web UI |
| Uneven enthusiasm in the team | Name the roles explicitly and commit to rotating them |
