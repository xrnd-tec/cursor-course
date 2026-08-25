# 17. The CLI（the Agent in your terminal）

The same Agent, **from the terminal**, without opening the editor. Where the editor version is for “fixing while you watch”, the CLI is for **building it into a process**.

## Installation

```bash
# macOS / Linux / WSL
curl https://cursor.com/install -fsS | bash
```

Windows（PowerShell）:

```powershell
irm 'https://cursor.com/install?win32=true' | iex
```

The command is `agent`.

## Two ways to use it

### 1. Interactive mode

```bash
agent
agent "Make getSubtotal in practice/cart.js safe"
```

The same feel as the Agent panel in the editor.

### 2. Print mode（headless）

```bash
agent -p "Review the changes from a security angle" --output-format text
agent -p "Fix the failing tests" --model "gpt-5"
```

With `-p` it **answers once and exits instead of conversing**, so it fits into scripts and CI. That is the CLI's biggest value.

## Worth knowing

| Feature | How |
|---------|-----|
| Choose a mode | `--mode`, or a slash command. `agent` / `plan` / `ask` |
| Resume a session | `agent resume` / `agent --continue` |
| Hand off to the cloud | Put `&` at the start of the prompt and it runs on the cloud |
| Sandbox | `/sandbox` or `--sandbox <mode>` to change command-execution limits |

## What to use it for

- **In CI** — run one review per PR, or summarise why tests failed
- **Repetitive work** — mechanical bulk edits, like “make every file's heading levels consistent”
- **Where you can't open an editor** — on a server, inside a container

Work where you think as you go is faster in the editor. Treat **the CLI as the doorway to automation**.

## Watch out for

- With `-p`, things can proceed with nobody reading the diff. **Only ever run it inside a git repo**
- When you put it in CI, give the token the minimum permissions（[13-safety-ignore.md](13-safety-ignore.md)）

## Exercise

In your terminal:

```bash
agent -p "List the role of each file in practice/, one line each. Don't change the code" --output-format text
```

Then ask the same thing with Ask in the editor and compare how the answers differ.

Reference: [CLI](https://cursor.com/docs/cli/overview)

Next: [18-integrations.md](18-integrations.md)
