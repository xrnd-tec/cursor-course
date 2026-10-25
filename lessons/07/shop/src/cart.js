import { findProduct } from "./products.js";

export function createCart() {
  return { items: [] };
}

export function addItem(cart, productId, qty = 1) {
  const product = findProduct(productId);
  if (!product) {
    throw new Error(`Unknown product: ${productId}`);
  }
  checkQuantity(qty);

  const existing = cart.items.find((item) => item.id === productId);
  if (existing) {
    checkQuantity(existing.qty + qty);
    existing.qty += qty;
  } else {
    cart.items.push({ id: product.id, name: product.name, price: product.price, qty });
  }
}

export function setQuantity(cart, productId, qty) {
  const item = cart.items.find((i) => i.id === productId);
  if (!item) {
    throw new Error(`Not in the cart: ${productId}`);
  }
  if (qty === 0) {
    removeItem(cart, productId);
    return;
  }
  checkQuantity(qty);
  item.qty = qty;
}

export function removeItem(cart, productId) {
  cart.items = cart.items.filter((item) => item.id !== productId);
}

function checkQuantity(qty) {
  if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
    throw new Error("Quantity must be a whole number from 1 to 99");
  }
}
