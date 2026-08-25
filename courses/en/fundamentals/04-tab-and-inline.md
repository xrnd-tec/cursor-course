# 4. Tab suggestions and inline editing

## Tab（the grey continuation）

This is the AI completion that appears while you type. It uses the surrounding code, your recent edits, and linter information.

| Action | Key |
|--------|-----|
| Accept all of it | `Tab` |
| Accept one word at a time | `Ctrl+→`（Mac: `Cmd+→`） |
| Reject | `Esc`, or just keep typing |
| Jump to the next edit location | Press `Tab` again after accepting（when there is a suggestion） |

The **Tab** indicator in the bottom right lets you turn it off temporarily, or off for specific file extensions.

### When Tab shines

- Repeating a similar pattern
- Filling in imports and types
- Continuing the line of thought you're already writing

### When not to leave it to Tab

- Logic that requires a judgement call about the spec
- Anything that must be reviewed, such as security or money calculations

## Inline editing（`Ctrl+K`）

Changes the selection（or the area around the cursor）in place, from a short instruction.

Good for:

- Renaming or simplifying just this function
- Fixing this piece of wording
- Rewriting this block to match a convention

Not good for:

- Adding a feature that spans several files → **Agent**
- “How does this actually work?” → **Ask**

## Quick reference

```text
I want the rest of what I'm typing   → Tab
I only want to change this selection → Ctrl+K
I want to investigate / don't write  → Ask
Build it, fix it, run it             → Agent
It's big, agree the approach first   → Plan
```

## Exercise

1. Open `practice/greeter.js` and type just a new function name（for example `function farewell`）
2. When the Tab suggestion appears, try `Ctrl+→`（Mac: `Cmd+→`）first to accept only part of it
3. Select the whole `formatName` function → `Ctrl+K`（Mac: `Cmd+K`）→ `Passing null or undefined currently returns the string "null". Fix it to return an empty string`
4. Make the same change a second time, this time via **Ask to hear the approach → Agent to implement it**, and notice how the diff differs

Reference: [Tab](https://cursor.com/help/ai-features/tab)

Next: [05-prompting.md](05-prompting.md)
