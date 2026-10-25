import { applyCoupon } from "./coupons.js";
import { shippingFee } from "./shipping.js";

export function calculateTotal(cart, couponCode) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const coupon = applyCoupon(cart, couponCode);
  const afterDiscount = subtotal - coupon.discount;
  const shipping = cart.items.length === 0 ? 0 : shippingFee(afterDiscount);

  return {
    subtotal,
    discount: coupon.discount,
    couponMessage: coupon.message,
    shipping,
    total: afterDiscount + shipping,
  };
}
