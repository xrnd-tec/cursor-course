/**
 * 四則演算と割引の小さなユーティリティ（学習用）
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
 * amount に percent% の割引を適用する（未実装の宿題用）
 * 例: applyDiscount(1000, 10) => 900
 */
export function applyDiscount(amount, percent) {
  // TODO: Cursor の Agent / Cmd+K で実装してみよう
  return amount;
}
