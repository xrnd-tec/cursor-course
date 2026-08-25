/**
 * A very small cart (for practising @ references and the Agent)
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
  // TODO: this returns NaN when an item is missing price or qty. Make it survive that
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
