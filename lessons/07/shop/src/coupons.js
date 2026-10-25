// Coupon rules: see docs/spec.md

export function applyCoupon(cart, code) {
  if (!code) {
    return { discount: 0, message: "" };
  }

  const normalized = code.trim().toUpperCase();
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (normalized === "WELCOME10") {
    if (subtotal <= 3000) {
      return { discount: 0, message: "WELCOME10 needs a purchase of 3,000 yen or more" };
    }
    let discount = 0;
    for (const item of cart.items) {
      const newPrice = Math.floor(item.price * 0.9);
      discount += (item.price - newPrice) * item.qty;
      item.price = newPrice;
    }
    return { discount, message: "WELCOME10: 10% off" };
  }

  if (normalized === "SAVE500") {
    if (subtotal <= 5000) {
      return { discount: 0, message: "SAVE500 needs a purchase of 5,000 yen or more" };
    }
    return { discount: 500, message: "SAVE500: 500 yen off" };
  }

  return { discount: 0, message: "This coupon code is not valid" };
}
