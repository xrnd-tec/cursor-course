# practice/

A small shopping cart. **Open `index.html` and you can see on screen exactly what is broken right now.**

> These files are kept in **English only**, so the Vietnamese and English tracks of the course
> both point at the same code. Nothing here needs translating.

## How to open it

**Open `index.html` in the browser built into Cursor.** Nothing else to install.

The page uses ES modules, so if you double-click the file and open it in your operating system's browser, **loading is blocked and the numbers stay as “…”** (a `file://` restriction).

## Files

| File | What is in it | Good practice for |
|------|---------------|-------------------|
| `index.html` | The screen. It runs the three files below as they are | Leave it alone |
| `calculator.js` | Arithmetic plus `applyDiscount` (**not implemented**) | Implementing a function with Agent, explaining with Ask |
| `cart.js` | The cart. `getSubtotal` has a **bug that produces NaN** | `@` references, fixing a bug |
| `greeter.js` | The greeting shown in the page heading | Tab, `Ctrl+K` |
| `index.js` | Entry point for the terminal exercise | The combined exercise |

## What you can see on screen

| On screen | State right now | File to fix |
|-----------|-----------------|-------------|
| 1. Apply a discount | **No discount happens** (the amount does not change) | `applyDiscount` in `calculator.js` |
| 2. Cart subtotal | Shows **NaN** | `getSubtotal` in `cart.js` |
| 3. Use a coupon | Shows **not implemented** | Add `applyCoupon` to `cart.js` |

Once you have fixed something and saved it, **reload the browser**. The display changes.

## Notes

This is ESM (the `package.json` at the repo root has `"type": "module"`). The terminal exercise runs with `node practice/index.js`.
