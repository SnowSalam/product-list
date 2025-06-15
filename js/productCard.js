export function productCard(product) {
  const container = document.createElement("div");
  container.className = "product-card";

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-image-container";

  const img = document.createElement("img");
  img.className = "product-image";
  img.src = product.image !== "#" ? product.image : "images/placeholderImg.jpg";
  img.alt = product.name;

  imgContainer.appendChild(img);

  const name = document.createElement("h3");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = `${product.price} ₽`;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "product-tocart-button";
  button.textContent = "В корзину";
  button.addEventListener("click", () => {
    console.log(`${product.name} added to cart`);

    const originalText = button.textContent;

    button.textContent = "Добавлено";
    button.classList.add("added");

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("added");
    }, 1500);
  });

  container.append(imgContainer, name, price, description, button);

  return container;
}
