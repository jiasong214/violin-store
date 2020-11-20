import Controller from "./Controller.js";

const View = (() => {
  const setEmpty = (empty) => {
    const cartTag = document.querySelector("#cart");

    if (empty) {
      cartTag.classList.add("empty");
    } else {
      cartTag.classList.remove("empty");
    }
  };

  const changeItemPrice = (item) => {
    const calculatedPrice = parseInt(item.price) * parseInt(item.quantity);

    const priceTag = document.querySelector(
      `#item${item.id} .cart__item__price`
    );
    priceTag.textContent = `A$${calculatedPrice}.0`;
  };

  const changeTotalPrice = (totalPrice) => {
    const brief__price = document.querySelector(".brief__price");

    const subtotal = document.querySelector(
      ".cart__summary__subtotal > .cart__summary__value"
    );

    const total = document.querySelector(
      ".cart__summary__total > .cart__summary__value"
    );

    brief__price.textContent = `Your bag total is A$${totalPrice}.0.`;
    subtotal.textContent = `A$${totalPrice}.0`;
    total.textContent = `A$${totalPrice}.0`;
  };

  const setCartItems = (items) => {
    const cartList = document.querySelector(".cart__list");
    cartList.textContent = ``;

    items.map((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("cart__item");
      cartItem.id = `item${item.id}`;
      cartList.append(cartItem);

      const cartItem__image = document.createElement("img");
      cartItem__image.classList.add("cart__item__image");
      cartItem__image.src = `${item.imageURL}`;

      const cartItem__name = document.createElement("h2");
      cartItem__name.classList.add("cart__item__name");
      cartItem__name.textContent = `${item.name}`;

      const cartItem__innerbox = document.createElement("div");
      cartItem__innerbox.classList.add("cart__item__innerbox");

      const cartItem__quantity = document.createElement("select");
      cartItem__quantity.classList.add("cart__item__quantity");

      let cartItem__quantity__option = [];

      for (let i = 0; i < 5; i++) {
        cartItem__quantity__option[i] = document.createElement("option");
        cartItem__quantity__option[i].setAttribute("value", i + 1);
        cartItem__quantity__option[i].textContent = `${i + 1}`;
        cartItem__quantity.append(cartItem__quantity__option[i]);

        if (item.quantity === i + 1) {
          cartItem__quantity__option[i].setAttribute("selected", "selected");
        }
      }

      cartItem__quantity.addEventListener("change", function () {
        Controller.setCartItemQuantity(item, this.value);
        changeItemPrice(item);
        changeTotalPrice(Controller.setTotalPrice());
      });

      const cartItem__innerbox2 = document.createElement("div");
      cartItem__innerbox2.classList.add("cart__item__innerbox2");

      const cartItem__price = document.createElement("div");
      cartItem__price.classList.add("cart__item__price");
      cartItem__price.textContent = `A$${
        parseInt(item.price) * parseInt(item.quantity)
      }.0`;

      const cartItem__deleteBtn = document.createElement("div");
      cartItem__deleteBtn.classList.add("cart__item__deleteBtn");
      cartItem__deleteBtn.textContent = "Remove";
      cartItem__deleteBtn.addEventListener("click", () =>
        Controller.deleteItem(item)
      );

      const cartItem__option = document.createElement("div");
      cartItem__option.classList.add("cart__item__option");

      cartItem.append(cartItem__image, cartItem__name, cartItem__innerbox);
      cartItem__innerbox.append(cartItem__quantity, cartItem__innerbox2);
      cartItem__innerbox2.append(cartItem__price, cartItem__deleteBtn);
    });

    changeTotalPrice(Controller.setTotalPrice());
  };

  return {
    setCartItems,
    setEmpty,
  };
})();

export default View;
