import Controller from "./Controller.js";

const View = (() => {
  const setProducts = (products) => {
    products.map((product) => {
      const shop__item = document.createElement("li");
      shop__item.classList.add("shop__item");
      const shop__list = document.querySelector(".shop__list");
      shop__list.append(shop__item);

      shop__item.innerHTML = `
        <div>
          <img src="${product.imageURL}" alt="" class="shop__item__image" />
          <h2 class="shop__item__name">${product.name}</h2>
          <p class="shop__item__info">${product.info.tone}</p>
        </div>
        <p class="shop__item__price">A$${product.price}.0</p>
      `;

      const shop__item__btnBox = document.createElement("div");
      shop__item__btnBox.classList.add("shop__item__btnBox");

      const shop__item__buyBtn = document.createElement("a");
      shop__item__buyBtn.classList.add("shop__item__buyBtn");
      shop__item__buyBtn.textContent = "Buy now";
      shop__item__buyBtn.setAttribute("href", "cart.html");

      const shop__item__cartBtn = document.createElement("div");
      shop__item__cartBtn.classList.add("shop__item__cartBtn");
      shop__item__cartBtn.addEventListener("click", () =>
        Controller.addToCart(product)
      );
      shop__item__cartBtn.innerHTML = `
        <object
        data="images/shop_images/cart-blue.svg"
        type="image/svg+xml"
        ></object>
      `;

      shop__item.append(shop__item__btnBox);
      shop__item__btnBox.append(shop__item__buyBtn, shop__item__cartBtn);
    });
  };

  const setCart = (cartData) => {
    const cartList = document.querySelector(
      ".global-nav__cartModal__myItems__list"
    );
    cartList.textContent = ``;

    cartData.map((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("global-nav__cartModal__myItems__item");
      cartList.append(cartItem);

      const cartItem__image = document.createElement("img");

      const cartItem__name = document.createElement("p");
      cartItem__name.classList.add(
        "global-nav__cartModal__myItems__item__name"
      );
      cartItem__name.textContent = `${item.name}`;

      cartItem.append(cartItem__image, cartItem__name);
    });
  };

  const setCartNum = (cartData) => {
    const bagBtn = document.querySelector(
      ".global-nav__cartModal__menu__bag > p"
    );
    bagBtn.textContent = `Bag (${cartData.length})`;
  };

  return {
    setProducts,
    setCart,
    setCartNum,
  };
})();

export default View;
