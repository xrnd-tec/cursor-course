export function shippingFee(amount) {
  if (amount >= 5000) {
    return 0;
  }
  return 600;
}
