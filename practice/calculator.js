/**
 * A tiny arithmetic and discount utility (for practice)
 */

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Apply a percent discount to amount (left unimplemented on purpose)
 * Example: applyDiscount(1000, 10) => 900
 */
export function applyDiscount(amount, percent) {
  // TODO: implement this with the Cursor Agent, or with Ctrl+K (Cmd+K on Mac)
  return amount;
}
