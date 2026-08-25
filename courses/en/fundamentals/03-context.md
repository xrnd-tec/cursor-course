# 3. Passing context with `@`

Typing `@` in the input box lets you pick what to put into the conversation.

The official way to think about it: **if you know which files are involved, `@` them. If you don't, attach nothing and let the Agent go looking.**

## The ones you'll actually use

| Reference | When to use it |
|-----------|----------------|
| `@<file>` | “Take this file as the basis for the answer / the fix” |
| `@<folder>/` | “Only look inside this scope” |
| `@Docs` | Reference registered documentation（you can add more） |
| `@Terminals` | Show the AI your error output or run results |
| `@Past Chats` | Continue from an earlier conversation |
| `@Commit` / `@Branch` | Uncommitted changes, or the diff against main |
| `@Browser` | Context from the built-in browser（→ [16-browser-design.md](16-browser-design.md)） |

Images work too: take a screenshot and `Ctrl+V`（Mac: `Cmd+V`）, or drag and drop.

## A good request and a weak one

Weak:

```text
Fix the bug
```

Good:

```text
@practice/cart.js @Terminals
Fix the "subtotal comes out as NaN" problem.
To reproduce: addItem an item with no price, then call getSubtotal.
```

## Don't over-attach

- `@`-ing a whole large folder that isn't relevant is just noise
- Rather than pasting the same long file again and again, pick the part you need and pass that
- Use context in stages: Ask to investigate, then Agent to build

## Exercise

In Ask mode:

```text
@practice/calculator.js @practice/greeter.js
What do these two files have in common, and why do you think they were deliberately kept separate?
```

Then switch to Agent mode:

```text
@practice/cart.js
Make getSubtotal skip items that are missing price or qty.
Keep the current behaviour where an empty cart returns 0. While you're there, add one JSDoc block.
```

Reference: [@ symbols · Context](https://cursor.com/help/customization/context)

Next: [04-tab-and-inline.md](04-tab-and-inline.md)
