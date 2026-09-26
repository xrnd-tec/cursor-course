# 20. Git integration（branches, commits, PRs, issues）

Git in Cursor is built on VS Code's **Source Control panel**. Cursor adds AI features on top of it.

You can go all the way from **creating a branch → committing → pushing → opening a PR** on the Cursor screen alone, without opening a terminal.

| The base（VS Code Source Control） | What Cursor adds |
|---|---|
| Change list, staging, commits, branches, Publish / Sync | **Commit message generation**（the ✨ button） |
| Showing merge conflicts | **Resolve in Chat**（the Agent resolves the conflict） |
| — | **PR creation with `gh pr create`**, and the `Made with Cursor` attribution |
| — | **Cursor Blame**（which lines the AI wrote. **Enterprise plan only**） |

This material uses Windows keys by default（Mac keys in parentheses）.

## Terms（for people new to GitHub）

These are the words that come up in this course. You don't need to memorise how they work in detail.

### Basics

| Term | Meaning |
|---|---|
| **Git** | A tool that records the history of changes to files. Cursor's Source Control panel uses Git |
| **GitHub** | A web service for putting Git repositories on the internet and sharing them with a team |
| **Repository** | The files of one app together with the history of their changes |
| **Branch** | A place to make changes separately from main. Changing a branch does not change main |
| **main** | The reference branch of the repository. Only work the team has checked goes into it |
| **Commit** | Recording changes as one step. Each record has a message |
| **PR（pull request）** | A request that says “please check whether the changes on this branch can go into main”. You create it on GitHub |
| **Merge** | Bringing the changes of a PR into main |

### When creating a repository

| Term | Meaning |
|---|---|
| **Template repository** | A repository used as the starting point for new ones. **Use this template** creates a repository with the same files |
| **Collaborator** | A member invited with write access to the repository. A private repository can only be seen by invited people |
| **Clone** | Copying a GitHub repository to your own PC |
| **GitHub CLI（`gh`）** | A tool for doing GitHub operations（such as creating PRs and issues）with terminal commands. The Agent uses it to create PRs and issues |

### When sharing changes

| Term | Meaning |
|---|---|
| **Stage** | Choosing the files to include in a commit. The **＋** in the Source Control panel |
| **Push（Publish Branch）** | Sending the branches and commits on your PC to GitHub. A branch that has never been sent shows **Publish Branch** |
| **Pull（Sync Changes）** | Bringing new changes on GitHub into your PC. **Sync Changes** pulls, then pushes your commits if you have any |
| **Files changed** | The tab on a PR page where you check the changed lines |
| **Review / Approve** | Checking the changes in a PR / checking them and approving them as fine. You can't approve your own PR |
| **Conflict** | When two people changed the same place in the same file and Git can't combine them automatically |

### When undoing changes

| Term | Meaning |
|---|---|
| **Revert** | Undoing the changes of a merged PR. Pressing **Revert** at the bottom of the PR page on GitHub creates **a new PR that puts the changes back**. Merging that PR restores main. Requires write access to the repository |

### When managing tasks

| Term | Meaning |
|---|---|
| **Issue** | A “thing to do” registered on GitHub. In this course, each task gets one issue |
| **Assignee** | Who works on the issue. The name is shown in the issue list |
| **Open / closed issue** | An issue that isn't finished yet / one that is finished |
| **`Closes #number`** | Written in a PR description, it closes the issue with that number automatically when the PR is merged into main |
| **Issue number** | Issues and PRs share one sequence of numbers. If there are two PRs, the next issue you create is #3 |

Reference: [About Git（GitHub Docs）](https://docs.github.com/en/get-started/using-git/about-git) · [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) · [About branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) · [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) · [About merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts) · [About issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) · [Creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) · [Reverting a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/reverting-a-pull-request)

## Opening the Source Control panel

Click the **Source Control** icon in the left sidebar, or press `Ctrl+Shift+G`（also `Ctrl+Shift+G` on Mac）.

Changed files are listed under **Changes**, and the icon shows how many there are. Click a file to open its diff.

## The whole flow

### ① Create a branch

Click **the branch name at the bottom left（status bar）** → **Create new branch...** → enter a name.

`Git: Create Branch...` from the command palette does the same. Use a name that **says what the branch is for**, such as `feature/add-timer`.

> **Create a branch only while you are on `main` and after updating it.** Branching from an old `main` makes conflicts more likely later（→ ⑤）.

### ② Stage and commit

1. Hover over a file in Changes and click **＋**（Stage Changes）. **Choose only the files you want to include**
2. Press **✨（sparkle）** in the input box to generate a commit message from the diff and the repository history
3. Read it, fix it if needed, and click **Commit**

**The generated message is a draft.** Don't commit it without reading it.

> If you click Commit with nothing staged, depending on your settings you may be asked whether to stage everything.
> **This is how unintended files（such as generated files）get pulled in**, so choose what to stage yourself.

### ③ Send to GitHub（Publish Branch / Sync Changes）

| Button | When it appears | What it does |
|---|---|---|
| **Publish Branch** | When the branch you created **has never been sent** | Creates the branch on GitHub and sends it |
| **Sync Changes** | A branch that has already been sent | Pulls, then pushes |

The first time you send, you may be asked to sign in to GitHub. Allow it in the browser and you'll come back.

### ④ Open a PR

**You can ask the Agent.** The Agent runs `gh pr create`（GitHub CLI）in the terminal to create the PR.

```text
Create a PR from the current branch into main.
Use the title "(what you did)".
In the description, write what was done and which completion criteria were checked.
```

- **GitHub CLI（`gh`）must be installed and `gh auth login` must be done.** `gh auth login` is interactive, so **run it yourself in the terminal（`` Ctrl+` ``）**, not through the Agent. Right after installing, `gh` may not be found until you restart Cursor（needs checking on a real machine）. If it isn't installed, create the PR on the GitHub website（the **Compare & pull request** button that appears right after you send the branch）
- Cursor adds a **`Made with Cursor`** attribution to commits and to PRs created with `gh pr create`. It is ON by default. You can turn it off in **Cursor Settings → Git & PRs → Attribution**（before 3.11, **Agent → Attribution**）. Your organisation's administrator may also have turned it off for everyone

For review after the PR is open（people / Bugbot）, see [11-bugbot-pr.md](11-bugbot-pr.md).

### ⑤ After the merge, update main

When the PR is merged on GitHub, your local copy is still old.

1. Click the branch name at the bottom left → switch to `main`（`Git: Checkout to`）
2. **Sync Changes**（or `Git: Pull`）

For the next piece of work, **go back to ① from here** and create a new branch.

## Managing tasks and assignees with issues

When building as a team, turning tasks into GitHub **issues** lets you see in one list **who is doing what** and **what is finished**.

| What to do | How |
|---|---|
| Turn a task into an issue | On GitHub, **Issues → New issue**. Or `gh issue create --title "..." --body "..."` |
| Decide the assignee | Choose people under **Assignees** on the right of the issue. To assign yourself, `gh issue edit <number> --add-assignee "@me"` |
| Find issues with no assignee | `gh issue list --search "no:assignee"` |
| Close the issue when the PR is done | Write **`Closes #number`** in the PR description. When the PR is **merged into the default branch（main）**, the issue closes automatically |

- An issue can have up to 10 assignees. You can assign yourself and people with write access to the repository（such as collaborators）
- Besides `Closes`, you can use `Fixes` / `Resolves` and others. **PRs aimed at a branch other than main don't close issues**

> In sessions 4 and 5 of this course, we use two Skills included in the team template. `/create-issues` turns the tasks in `docs/tasks.md` into issues（without creating duplicates）, and `/start-task` does the rest in one go: pick an issue with no assignee → assign yourself → create a branch from the latest main.

Reference: [Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) · [Assigning issues and pull requests](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users) · [gh issue edit](https://cli.github.com/manual/gh_issue_edit) · [gh issue list](https://cli.github.com/manual/gh_issue_list)

## When there is a conflict（Resolve in Chat）

When two people change the same area of the same file, Git can't combine them automatically and you get a **conflict**.

Press **Resolve in Chat** on the conflict screen and the Agent reads the changes on both sides and proposes a resolution. **Read the proposal as a diff too** before you Keep it.

When a GitHub PR says “This branch has conflicts”, you start by bringing `main` into your local branch. Asking the Agent is the quickest way.

```text
Bring the latest main into the current branch.
If there are conflicts, propose a resolution that keeps both sides' changes.
Commit once resolved, but don't push yet.
```

## Cursor Blame（for reference）

A feature that overlays on git blame which lines were written by Tab / the Agent / a person. **Enterprise plan only**, and usable once your team's administrator turns it on. This course doesn't use it.

## Exercise

1. In your own working folder, create `feature/practice-git` from the status bar
2. Change one line in any file, stage it with **＋** → generate a message with **✨** → read it, then Commit
3. Check in the Source Control panel that there is one more commit
4. Switch back to `main` and check that the change is no longer visible（switch back to the branch and it's there again）

**You don't need to push.** Please don't send anything to the course material repository.

Reference: [Git | Cursor Docs](https://cursor.com/help/integrations/git) · [Cursor Blame](https://cursor.com/docs/integrations/cursor-blame) · [Source Control（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/overview) · [Branches（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees) · [Staging and committing（VS Code）](https://code.visualstudio.com/docs/sourcecontrol/staging-commits) · [GitHub CLI](https://cli.github.com/)

> **Needs checking on a real machine（not confirmed in Cursor）**: the position of the ✨ button, how the sign-in appears on Publish Branch, where Resolve in Chat is shown, and whether the Agent asks for approval when it runs `gh`（when Run Mode is Auto-review）are written from the official documentation and VS Code's behaviour. Check them on a real machine when recording session 3, and fix this chapter if anything differs.

Next: [21-goals-loops.md](21-goals-loops.md)
