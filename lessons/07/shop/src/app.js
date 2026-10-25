import { products } from "./products.js";
import { createCart, addItem, setQuantity } from "./cart.js";
import { calculateTotal } from "./checkout.js";

const cart = createCart();
addItem(cart, "mug", 2);
addItem(cart, "notebook", 3);

let couponCode = "";

const $ = (id) => document.getElementById(id);
const yen = (n) => `${n.toLocaleString("en-US")} yen`;

function renderProducts() {
  const rows = products.map((p) => {
    const inCart = cart.items.find((item) => item.id === p.id);
    const qty = inCart ? inCart.qty : 0;
    return `<tr>
      <td>${p.name}</td>
      <td class="num">${yen(p.price)}</td>
      <td class="num"><input type="number" min="0" max="99" value="${qty}" data-id="${p.id}" aria-label="Quantity of ${p.name}"></td>
    </tr>`;
  });
  $("products").innerHTML = rows.join("");

  for (const input of document.querySelectorAll("input[data-id]")) {
    input.addEventListener("change", onQuantityChange);
  }
}

function onQuantityChange(event) {
  const id = event.target.dataset.id;
  const qty = Number(event.target.value);
  const inCart = cart.items.find((item) => item.id === id);
  try {
    if (inCart) {
      setQuantity(cart, id, qty);
    } else if (qty > 0) {
      addItem(cart, id, qty);
    }
    $("error").textContent = "";
  } catch (error) {
    $("error").textContent = error.message;
  }
  renderReceipt();
}

function renderReceipt() {
  const result = calculateTotal(cart, couponCode);
  $("subtotal").textContent = yen(result.subtotal);
  $("discount").textContent = result.discount > 0 ? `- ${yen(result.discount)}` : yen(0);
  $("shipping").textContent = result.shipping === 0 ? "Free" : yen(result.shipping);
  $("total").textContent = yen(result.total);
  $("couponMessage").textContent = result.couponMessage;

  const afterDiscount = result.subtotal - result.discount;
  $("shippingHint").textContent =
    afterDiscount >= 5000 || cart.items.length === 0
      ? ""
      : `Add ${yen(5000 - afterDiscount)} more for free shipping (600 yen now).`;
}

$("couponForm").addEventListener("submit", (event) => {
  event.preventDefault();
  couponCode = $("couponInput").value;
  renderReceipt();
});

renderProducts();
renderReceipt();
