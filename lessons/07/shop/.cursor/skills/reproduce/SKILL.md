---
name: reproduce
description: Use only when the user explicitly invokes `/reproduce`. Writes a test that reproduces a reported bug and shows that it fails for the right reason. Changes test files only.
disable-model-invocation: true
---

# Reproduce

Turn the bug into a test that fails now and will pass once the bug is fixed. **Change only files in `test/` and `work-log.md`. Do not touch `src/`.**

Start a todo list with the steps below, copied as they are.

## Steps

1. **Pick the smallest case** that shows the bug, from the report and the investigation.
2. **Write the expected values from `docs/spec.md`, not from running the code.** Show the calculation, for example "3 mugs = 3 × 1,280 = 3,840".
3. **Write one focused test** in `test/`. Drive the code the way its users do (`createCart`, `addItem`, `setQuantity`, `calculateTotal`). Do not test private details.
4. **Run `node --test`.** The new test must fail, and it must fail **for the reason in the report**. Paste the failing lines of the output.
   - If it passes, or fails for another reason, fix the test. Do not change `src/`.
5. **Check the other tests** still pass.
6. Say which possible causes from the investigation this result supports or rules out.

## Reply

The test name, the expected values with their calculation, the failing output, and the causes it supports or rules out.

Tell the user to commit the test now, before the fix, with a message such as `test: reproduce bug #42`.

Then add one row to `work-log.md`.
