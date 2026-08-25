# 5. Asking well

More important than which model you pick is writing down **the goal, the constraints and the definition of done** first. Get those three down and the results become far more stable.

## A template

```text
[What I want] one line
[Scope] @file or folder（as far as you know）
[Constraints] what must not break / what technology is allowed
[Done when] what has to exist for this to be finished
[Not needed]（optional）
```

Example:

```text
[What I want] Add a discount coupon to the cart
[Scope] @practice/cart.js
[Constraints] Don't change what the existing getSubtotal returns. Keep it plain JS
[Done when] applyCoupon(code) applies 10% off for the code SUMMER10
[Not needed] UI, persistence, test files
```

## Phrasing tips

| Avoid saying | Say this instead |
|--------------|------------------|
| Make it nice | Be concrete about appearance, behaviour and edge cases |
| Refactor everything | Name the files, and what to do / not do |
| Fix the bug | Expected, actual, and how to reproduce |
| Optimise it | Which comes first: speed, readability, or compatibility |

## When to cut the conversation

- **New task, new chat**（old assumptions get less in the way）
- When the conversation gets long, watch the context ring; if needed, start a new chat and hand it a summary
- If you want to change direction mid-build, **just send it, don't stop it**（it gets applied at the next break → the steering section of [01-modes.md](01-modes.md)）

## Combined exercise（in this folder）

Send this to the Agent:

```text
Use practice/ to finish a small shopping demo.

Requirements:
- cart.js can add an item, remove an item, produce a subtotal, and a total with tax
- Reuse functions from calculator.js wherever you can
- index.js shows the whole flow through console.log
- Create as few new files as possible

Done when:
- `node practice/index.js` runs without errors and prints the amounts
```

Once it runs, ask this in Ask mode:

```text
Is the way responsibilities are split across practice/ reasonable right now?
If it should be improved, what is the smallest single step?
```

---

That's the end of the basics. On to the advanced material:

Reference: [Prompting](https://cursor.com/docs/agent/prompting)

Next: [06-rules.md](06-rules.md)（Rules → Skills → Hooks → MCP → Cloud → PR → parallel work → safe operation → Subagents → Plugins → Design Mode → CLI → integrations）
