import { productCard } from "./js/productCard.js";

const productList = document.getElementById("product-list");
const products = [];

async function downloadProducts() {
  await fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
      products.push(...data);
    })
    .catch(() => {
      console.error;
      return false;
    });

  return true;
}

async function renderProductList() {
  if (await downloadProducts()) {
    products.forEach((item) => {
      productList.appendChild(productCard(item));
    });
  } else {
    alert("Товары не были загружены. Пожалуйста, обратитесь в техподдержку.");
  }
}

renderProductList();
