# 11. Bugbot and PR review

Knowing about **automated PR review** around Cursor, as a quality gate after you've written the code, makes team work considerably lighter.

## The cast（briefly）

| Name | Role |
|------|------|
| **You + the Agent** | Build on a branch, commit, open the PR |
| **Bugbot**（or a similar PR bot） | Read the PR diff and point out bugs and risks |
| **Human reviewers** | The spec, the design, and the final call |

Names and how you enable them differ by environment. The point is not to mix up **review inside the chat** with **automated review on the PR**.

## Where Bugbot sits

Bugbot is a feature of [Cloud Agents](10-cloud-agents.md). It reads the PR diff and leaves comments with findings and suggested fixes. You can have it run automatically every time the PR updates, or call it by hand.

With **Autofix**, a Cloud Agent starts up to fix the bugs it found. Finding → fixing → landing in the PR becomes one continuous line, which also **makes it easier to merge without reading the findings at all**. The fixes it produces still have to be read as a diff.

## What you can do in the chat（even in this learning repo）

- Ask the Agent to “review this diff”（your local changes）
- Have Ask build you a pre-merge checklist
- Turn a `gh pr create`-based procedure into a Skill（[07-skills.md](07-skills.md)）

## The flow worth learning

1. Cut a branch at a size that commits cleanly
2. Open a PR（with a title and a test plan）
3. Triage the automated findings（fix them all / deliberately leave some）
4. A human reviewer checks it against the spec

In this learning repo, having **steps 1 → 2** in your fingers is enough.

## Exercise

Ask:

```text
Assuming the current changes in practice/ and courses/,
write a title for a small learning PR and a test plan with three checklist items.
Don't push and don't create a PR yet.
```

If your team already has Bugbot on a repo, the fastest route is to read its findings once on a real PR.

Reference: [Bugbot](https://cursor.com/docs/bugbot)

Next: [12-agents-window.md](12-agents-window.md)
