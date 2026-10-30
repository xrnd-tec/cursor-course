# Stationery Shop: rules

This is the source of truth for how the shop must behave. When the code or a test disagrees with this page, this page wins.

## Cart

- A product can be in the cart once. Adding it again adds to its quantity.
- A quantity is a whole number from 1 to 99. Setting it to 0 removes the product.
- Changing the cart never changes the price of a product.

## Subtotal

- The subtotal is the sum of price × quantity for every product in the cart, at the product's listed price.

## Coupons

- One coupon per order. Codes are not case sensitive, and spaces around the code are ignored.

| Code | What it does | Who can use it |
|---|---|---|
| `WELCOME10` | 10% off the subtotal. Round the discount down to a whole yen. | A subtotal of 3,000 yen or more |
| `SAVE500` | 500 yen off | A subtotal of 5,000 yen or more |

- When the subtotal is too small, the discount is 0 and the message says how much is needed.
- An unknown code gives a discount of 0 and the message "This coupon code is not valid".
- Applying the same coupon again, or recalculating the receipt, gives the same result every time.

## Shipping

- Shipping is 600 yen.
- Shipping is free when the amount after the discount is 5,000 yen or more.
- An empty cart has no shipping.

## Total

- Total = subtotal − discount + shipping.
