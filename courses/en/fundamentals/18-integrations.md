# 18. Integrations with external services

MCP in [09-mcp.md](09-mcp.md) is the mechanism you wire up yourself. These are **the official integrations Cursor provides**. Configure them once and you can **start the Agent from places where Cursor isn't even open**.

## What you can connect

| Kind | Service |
|------|---------|
| Chat | Slack / Microsoft Teams |
| Issues and tasks | Jira / Linear / Notion |
| Repositories | GitHub / GitLab / Azure DevOps / Bitbucket |
| Other editors | JetBrains / Xcode |

## Example: starting it from Slack

Talk to `@Cursor` in a thread and [Cloud Agents](10-cloud-agents.md) run.

```text
@Cursor Fix the bug on the login screen
@Cursor Update the API response format on the dev branch
```

- It reads the repo, branch and model straight out of the message and runs
- It **reads the thread's context**, so the discussion so far becomes the premise
- When it's done it opens a PR and replies with the link

To use it you have to install the Slack app from the integrations dashboard and set a default repo and billing.

## Deeplinks

A way to **distribute an MCP or plugin configuration as a single URL**. Your setup guide can just say “click this URL”, which keeps a team's environments consistent.

## Official integrations or MCP?

| | Official integration | MCP |
|--|----------------------|-----|
| Who provides it | Cursor | You |
| What it connects to | Major SaaS | Internal APIs, databases, any tool |
| Entry point | Start the Agent **from outside**, e.g. Slack | Call it **from inside** a Cursor conversation |

“Say it in Slack and get a PR back” is an official integration; “read the internal inventory DB and fix it” is MCP.

## Watch out for

- Being startable from outside means **whatever is written in the chat gets executed for real**. Decide up front who may start it
- Start from minimum permissions. Get comfortable with read-oriented integrations first

## Exercise（design）

In Ask mode:

```text
For each of these three, should it be an official integration, MCP, or neither?
Classify them with reasons.
1) A bug reported in Slack that I want fixed on the spot and turned into a PR
2) Reading an internal inventory API and fixing the pricing logic
3) Fixing one line in practice/cart.js locally
```

Reference: [Integrations](https://cursor.com/docs) · [Slack](https://cursor.com/docs/integrations/slack)

---

That's the whole tour. For the order to work through things by hand, see the list in [00-map.md](00-map.md).
