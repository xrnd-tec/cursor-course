/**
 * 超小型カート（@参照と Agent 実習用）
 */

const items = [];

export function addItem(name, price, qty = 1) {
  items.push({ name, price, qty });
}

export function clearCart() {
  items.length = 0;
}

export function listItems() {
  return items.slice();
}

export function getSubtotal() {
  // TODO: price や qty が欠けたアイテムがあると NaN になる。耐えるように直してみよう
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
