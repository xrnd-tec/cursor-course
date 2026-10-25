import { test } from "node:test";
import assert from "node:assert/strict";
import { createCart, addItem } from "../src/cart.js";
import { applyCoupon } from "../src/coupons.js";

test("WELCOME10 takes 10% off", () => {
  const cart = createCart();
  addItem(cart, "tshirt", 2);
  assert.equal(applyCoupon(cart, "WELCOME10").discount, 480);
});

test("WELCOME10 needs a purchase over 3,000 yen", () => {
  const cart = createCart();
  addItem(cart, "notebook", 4);
  addItem(cart, "pen", 10);
  assert.equal(applyCoupon(cart, "WELCOME10").discount, 0);
});

test("SAVE500 takes 500 yen off", () => {
  const cart = createCart();
  addItem(cart, "tshirt", 3);
  assert.equal(applyCoupon(cart, "SAVE500").discount, 500);
});

test("an unknown code gives no discount", () => {
  const cart = createCart();
  addItem(cart, "tshirt", 2);
  const result = applyCoupon(cart, "HELLO");
  assert.equal(result.discount, 0);
  assert.equal(result.message, "This coupon code is not valid");
});
