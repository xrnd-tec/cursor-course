# 16. The built-in browser and Design Mode

Cursor ships with a browser. You don't switch to another app: you **see the running screen inside Cursor** — but the real point is that **the Agent can drive that browser**.

Nothing external to install or configure.

## How to open it

**For a local file, use the right-click menu.**

1. In the file tree in the sidebar, right-click `practice/index.html`
2. Choose **Open In Browser**

For a URL, open it from the command palette. **No dedicated shortcut is bound.**

1. `Ctrl+Shift+P`（Mac: `Cmd+Shift+P`）
2. Choose **Open Browser**
3. Type the URL into the address bar

There are four related commands.

| Command | What it does |
|---------|--------------|
| **Open Browser** | Open the browser pane |
| **New Browser Tab** | Add a browser tab |
| **Reload Browser Tab** | Reload the current tab |
| **Close Browser Tab** | Close the tab |

If a local dev server is already running, the Agent **finds the port by itself**（see below）.

> **Verified on a real machine（Cursor 3.16）. The official documentation does not describe how to open it**
> （the [Browser](https://cursor.com/docs/agent/tools/browser) page only says it “opens as a pane within Cursor”）.

## What the Agent can do in the browser

| Capability | Detail |
|------------|--------|
| **Navigate** | Open a URL, follow links, back / forward, reload |
| **Click** | Buttons, links, form elements. Double-click / right-click / hover too |
| **Type** | Enter text into forms and text fields |
| **Scroll** | Move through a long page to reach what it needs |
| **Screenshot** | Capture the screen to check the layout |
| **Read the console** | Read messages, errors and logs from the browser console |
| **Inspect network** | See HTTP requests and responses（in the Agent panel） |

In other words, you can ask for the whole loop: **fix it, open it, verify it**. Far less copying errors and pasting them back.

```text
Open http://localhost:3000 and try logging in.
If there are errors in the console, tell me the cause.
```

### It finds the dev server itself

It detects a local dev server that is already running and **uses the right port**. It won't stand up a second server or guess at ports.

### State is preserved

Cookies, localStorage, sessionStorage and IndexedDB are **kept across sessions**（isolated per workspace）. You continue where you left off without logging in again.

## How approvals work

Browser actions have three levels.

| Mode | Behaviour |
|------|-----------|
| **Manual approval**（recommended） | Asks on every action |
| **Allowlist** | Only approved actions run automatically |
| **Automatic** | Runs without asking. **Be careful** |

On Teams / Enterprise, an administrator can restrict which domains may be opened automatically（opening one by hand is not restricted）.

## Design Mode

While the browser is showing, toggle it with **`Ctrl+Shift+D`**（Mac: `Cmd+Shift+D`）. It's the mode for **pointing at the screen instead of describing the UI in words**.

| Action | Key |
|--------|-----|
| Toggle Design Mode | `Ctrl+Shift+D` |
| Select a region | `Shift` + drag |
| Add the selected element to the chat | `Ctrl+L`（Mac: `Cmd+L`） |
| Add the selected element to the input box | `Alt`+click（Mac: `Option`+click） |

The selected element's **code, layout and relationship to its surroundings** all go over to the Agent.

> Describing a UI fix in words gets long fast（“the middle one of the three icons on the right of the header”）. If you can point, pointing is faster and less error-prone.

## Where it lives

The browser opens as **a pane inside Cursor**. **It opens in the IDE view**（verified on a real machine; no need to switch to the Agents Window）.

**Design Mode** specifically is documented as a feature of **the browser in the Agents Window**（→ [12-agents-window.md](12-agents-window.md)）.

You can also put the browser's context into the conversation with `@Browser`（→ [03-context.md](03-context.md)）.

## Good for / not good for

- **Good**: appearance tweaks, spacing and placement, “I click it and nothing happens” bugs, verifying behaviour, chasing console errors
- **Not good**: fixing calculation logic or data structures. Just ask the Agent normally for that

## Watch out for

- **Opening a local HTML file directly in your operating system's browser（`file://`）blocks ES module loading.** Opening it in Cursor's built-in browser works（verified on a real machine）
- Don't leave automatic mode on and let it loose on external sites. Start with manual approval

## Exercise

1. Have a page that runs（`practice/index.html` is fine）
2. Open it in Cursor's browser
3. Ask the Agent:

```text
Look at the page that's open and name three things that aren't working.
If there are errors in the console, tell me those too.
Don't fix anything yet.
```

4. Press `Ctrl+Shift+D` for Design Mode, select one element and ask for a fix
5. Read the diff before you Keep（pointing at the screen doesn't change the checking steps）

Reference: [Browser](https://cursor.com/docs/agent/tools/browser) · [Design Mode](https://cursor.com/docs/agent/design-mode) · [Cursor 3.0](https://cursor.com/changelog/3-0)

Next: [17-cli.md](17-cli.md)
