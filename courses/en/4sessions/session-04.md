# Session 4: Finishing and presenting（90 minutes）

> **The one-line goal**
> Demo “the one action you'll show”, and put into words what you learned across the course

---

## Timetable

| Time | Part | Contents |
|------|------|----------|
| 0:00 | Goal | Today's flow and the presentation format（5 min） |
| 0:05 | First half | Finishing work（35 min） |
| 0:40 | Presentations | Each team demos and presents（35 min） |
| 1:15 | Reflection | Looking back over the course（15 min） |

---

## 0:00 Goal（5 minutes）

> “Two goals today:
> ① show a demo that runs ② say in one sentence what this course changed for you”

### The presentation format（show this）

| Item | Rough length |
|------|--------------|
| Introduce the app | “We built ○○”（10 seconds） |
| Demo | Actually perform “the one action you'll show”（1–2 minutes） |
| What you figured out | How you used Cursor（30 seconds） |
| Where you got stuck | What didn't go well（30 seconds） |
| Total | **Under 3 minutes** |

> “No slides needed. A demo plus talking, three minutes.”

---

## 0:05 First half — finishing work（35 minutes）

### What to do

1. Confirm “the one action you'll show” runs
2. Fix any fatal bugs（adding new features is banned）
3. Decide the demo steps（“open what, click where, what happens”）
4. If there's time, one line in the README（what the app is, how to run it）

### While the instructor circulates

| Situation | What to do |
|-----------|------------|
| Still doesn't run | Cut scope. Only “the one action you'll show” has to work |
| About to add a new feature | Stop them. Spell out the risk of breaking what already runs |
| Demo steps not decided | Make them say it out loud: “open what, click what?” |
| Plenty of time, idle | One small improvement is fine, like a restart button |

### The goal for this part

- [ ] “The one action you'll show” runs without errors
- [ ] They can say the demo steps out loud（open what → click what → what happens）

---

## 0:40 Presentations（35 minutes）

### Running it

- Three minutes per team（budget four with questions）
- Order by volunteering, or the instructor picks
- Applause after every team has finished

### The format（again）

1. “We built ○○”
2. Demo（the one action you'll show）
3. What you figured out with Cursor
4. Where you got stuck

### The instructor's job

- Timekeeper（at three minutes, “please start wrapping up”）
- If the demo doesn't run, don't criticise. Ask what they were trying to build
- Ask at least one question（if a participant asks one, prefer theirs）

### Example questions（from the instructor）

- “Which items did you put under ‘out of scope’? Was there a moment it saved you?”
- “Between the part you vibe-coded and the part you built from a spec, how did the diff sizes differ?”
- “What was good about using PRs in your team, and what was a hassle?”

---

## 1:15 Reflection（15 minutes）

### Personal reflection（2 minutes, everyone writes）

Have them write down three things:

1. **The biggest thing this course changed for you**（an operation, or a way of thinking）
2. **The pattern you'll use from tomorrow**（Ask→Agent→diff / write the spec first / open a PR…）
3. **What you still don't understand**（if anything）

### Sharing（8 minutes）

Have a few people speak（volunteers or picked）.

### Looking back over the course（instructor, 5 minutes）

| Session | What we did | The pattern you took away |
|---------|-------------|---------------------------|
| Session 1 | Basic operations | Ask → Agent → diff → Keep |
| Session 2 | Vibe → spec | Write the spec before you build |
| Session 3 | Team work | The spec template plus PRs |
| Session 4 | Finishing and presenting | Finish something small and demo it |

> “Cursor is a tool. Now that you know how to use the tool, the next step is deciding *what* to build.”

### Resources from here

- Self-study: [`courses/en/fundamentals/`](../fundamentals/)（06-Rules onwards as you need it）
- Official: [cursor.com/docs](https://cursor.com/docs)
- When stuck: ask the Agent. Write the spec and hand it over. Read the diff.

---

## Instructor checklist（for the day）

### Beforehand
- [ ] Each team's repo / folder has carried over from last session
- [ ] A projector or screen share so demos are visible
- [ ] A timer（for the three minutes）
- [ ] Somewhere to capture the reflection（paper or an online doc）

### Time management
- If finishing work runs past 0:40, announce “presentations in five minutes”
- If teams × 4 minutes > 35 minutes, drop the questions and hold to three minutes strictly
- If there's time left after every team, make the reflection longer

### If a demo doesn't run
- Putting the code on screen and showing “this is how far we got” is fine
- Just saying “what we were trying to build and where we got stuck” is a lesson in itself
- The instructor should pick out “this part is working well” and feed it back
