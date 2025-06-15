const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

function handleMobileChange(e) {
  if (e.matches) {
    // Если экран мобильный — добавляем бургер-меню
    document.querySelector("header").innerHTML = `
      <nav class="mobile">
        <div class="mobile-nav-text">
          <img class="logo-mobile" src="ShopLogo.png" alt="logo" />
          <span>ShopName</span>
        </div>
        <div class="hamb-field" id="hamb">
            <span class="bar"></span> <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <div class="popup">
            <ul class="popup-menu">
            </ul>
        </div>
      </nav>
    `;

    document.querySelector(".popup-menu").innerHTML = `
                        <li class="header-links"><a href="#header">Оплата</a></li>
                        <li class="header-links"><a href="#header">Доставка</a></li>
                        <li class="header-links"><a href="#header">Возврат</a></li>
                        <li class="header-links"><a href="#header">Контакты</a></li>
                        <li class="header-links area-controls">
                          <img src="images/portrait.png" class="control-icon" alt="profile" />
                          <img src="images/heart.png" class="control-icon" alt="liked products" />
                          <img src="images/cart.png" class="control-icon" alt="product cart" />
                        </li>
      `;

    document
      .querySelector(".hamb-field")
      .addEventListener("click", clickHambHandler);
    document
      .querySelector(".popup")
      .addEventListener("click", clickHambHandler);

    function clickHambHandler(event) {
      event.stopPropagation();

      document.body.classList.toggle("noscroll");
      document.querySelector(".hamb-field").classList.toggle("active");
      document.querySelector(".popup").classList.toggle("open");
    }
  } else {
    // Если экран большой — возвращаем обычное меню
    document.querySelector("header").innerHTML = `
      <nav>
        <div class="part-top">
          <div class="area-menu">
            <a href="#header">Оплата</a>
            <a href="#header">Доставка</a>
            <a href="#header">Возврат</a>
          </div>
          <div class="area-contacts">
            <a href="#header">Контакты</a>
          </div>
      </div>
      <div class="part-main">
        <div class="area-logo">
          <img src="images/ShopLogo.png" alt="logo" />
          <span>ShopName</span>
        </div>
        <div class="area-longimg">
          <img src="images/pexels-stephanthem-longimage.jpg" alt="long" />
        </div>
        <div class="area-controls">
          <img src="images/portrait.png" class="control-icon" alt="profile" />
          <img src="images/heart.png" class="control-icon" alt="liked products" />
          <img src="images/cart.png" class="control-icon" alt="product cart" />
        </div>
      </nav>
    `;

    const mobileControl = document.querySelector(".area-controls-mobile");
    if (mobileControl) mobileControl.remove();
  }
}

// Запускаем проверку при загрузке и при изменении размера окна
mobileMediaQuery.addEventListener("change", handleMobileChange);
handleMobileChange(mobileMediaQuery); // Проверить сразу
