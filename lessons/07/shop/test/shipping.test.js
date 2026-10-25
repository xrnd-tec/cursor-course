import { test } from "node:test";
import assert from "node:assert/strict";
import { shippingFee } from "../src/shipping.js";

test("shipping is 600 yen under 5,000 yen", () => {
  assert.equal(shippingFee(4999), 600);
});

test("shipping is free from 5,000 yen", () => {
  assert.equal(shippingFee(5000), 0);
});
