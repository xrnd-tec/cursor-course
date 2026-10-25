export const products = [
  { id: "notebook", name: "Notebook", price: 450 },
  { id: "pen", name: "Gel pen", price: 120 },
  { id: "mug", name: "Mug", price: 1280 },
  { id: "tshirt", name: "T-shirt", price: 2400 },
  { id: "bag", name: "Tote bag", price: 1650 },
];

export function findProduct(id) {
  return products.find((p) => p.id === id);
}
