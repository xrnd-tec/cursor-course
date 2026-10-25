import { test } from "node:test";
import assert from "node:assert/strict";
import { createCart, addItem } from "../src/cart.js";
import { calculateTotal } from "../src/checkout.js";

test("without a coupon, the total is the subtotal plus shipping", () => {
  const cart = createCart();
  addItem(cart, "mug", 2);
  addItem(cart, "notebook", 3);
  const result = calculateTotal(cart, "");
  assert.equal(result.subtotal, 3910);
  assert.equal(result.shipping, 600);
  assert.equal(result.total, 4510);
});

test("WELCOME10 is taken off before shipping is decided", () => {
  const cart = createCart();
  addItem(cart, "mug", 2);
  addItem(cart, "notebook", 3);
  const result = calculateTotal(cart, "WELCOME10");
  assert.equal(result.discount, 391);
  assert.equal(result.total, 3910 - 391 + 600);
});

test("an empty cart costs nothing", () => {
  const result = calculateTotal(createCart(), "");
  assert.equal(result.total, 0);
});
