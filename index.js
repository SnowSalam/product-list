import { productCard } from "./js/productCard.js";

const productList = document.getElementById("product-list");
const categorySelect = document.getElementById("category-select");
const products = [];
const categoriesSet = new Set();

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

  fillCategories(products);
  return true;
}

async function renderProductList(productsArr) {
  productList.innerHTML = "";
  productsArr.forEach((item) => {
    productList.appendChild(productCard(item));
  });
}

if (await downloadProducts()) {
  renderProductList(products);
  populateCategorySelect(categoriesSet);
} else
  alert("Товары не были загружены. Пожалуйста, обратитесь в техподдержку.");

function fillCategories(productsArr) {
  productsArr.forEach((product) => {
    categoriesSet.add(product.category);
  });
}

function populateCategorySelect(set) {
  set.forEach((category) => {
    const option = document.createElement("option");
    option.className = "category-select-option";
    option.textContent = category;
    option.value = category;
    categorySelect.appendChild(option);
  });
}

categorySelect.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;

  if (selectedCategory === "Все") {
    renderProductList(products);
    return;
  }

  renderProductList(
    products.filter((item) => {
      return item.category === selectedCategory;
    })
  );
});
