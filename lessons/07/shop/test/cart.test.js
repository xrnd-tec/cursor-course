import { test } from "node:test";
import assert from "node:assert/strict";
import { createCart, addItem, setQuantity, removeItem } from "../src/cart.js";

test("adding the same product twice adds up the quantity", () => {
  const cart = createCart();
  addItem(cart, "pen", 2);
  addItem(cart, "pen", 3);
  assert.equal(cart.items.length, 1);
  assert.equal(cart.items[0].qty, 5);
});

test("setting the quantity to 0 removes the product", () => {
  const cart = createCart();
  addItem(cart, "mug", 1);
  setQuantity(cart, "mug", 0);
  assert.equal(cart.items.length, 0);
});

test("a quantity over 99 is rejected", () => {
  const cart = createCart();
  addItem(cart, "pen", 1);
  assert.throws(() => setQuantity(cart, "pen", 100));
});

test("removing a product leaves the others", () => {
  const cart = createCart();
  addItem(cart, "pen", 1);
  addItem(cart, "mug", 1);
  removeItem(cart, "pen");
  assert.deepEqual(cart.items.map((item) => item.id), ["mug"]);
});
