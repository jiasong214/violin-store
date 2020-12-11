const View = (() => {
  const setCart = (cartData) => {
    const cartList = document.querySelector(
      ".global-nav__cartModal__myItems__list"
    );
    cartList.textContent = ``;

    for (let i = 0; i < cartData.length; i++) {
      const cartItem = document.createElement("li");
      cartItem.classList.add("global-nav__cartModal__myItems__item");
      cartList.append(cartItem);

      const cartItem__image = document.createElement("div");
      cartItem__image.style.background = `url('${cartData[i].imageURL}') center bottom`;
      cartItem__image.style.backgroundSize = "180%";

      const cartItem__name = document.createElement("p");
      cartItem__name.classList.add(
        "global-nav__cartModal__myItems__item__name"
      );
      cartItem__name.textContent = `${cartData[i].name}`;

      cartItem.append(cartItem__image, cartItem__name);

      if (i === 2) break;
    }

    if (cartData.length >= 3) {
      const cartQuantity = document.createElement("span");
      cartQuantity.classList.add("global-nav__cartModal__myItems__quantity");
      cartQuantity.textContent = `${
        cartData.length - 3
      } more items in your Bag`;

      cartList.append(cartQuantity);
    }
  };

  const setCartNum = (cartData) => {
    const bagBtn = document.querySelector(
      ".global-nav__cartModal__menu__bag > p"
    );
    bagBtn.textContent = `Bag (${cartData.length})`;

    if (cartData.length !== 0) {
      const cartBtnCircle = document.createElement("div");
      cartBtnCircle.classList.add("global-nav__cartBtn__circle");
      document.querySelector(".global-nav__cartBtn").append(cartBtnCircle);

      const cartBtnNum = document.createElement("div");
      cartBtnNum.classList.add("global-nav__cartBtn__num");
      cartBtnNum.textContent = `${cartData.length}`;
      cartBtnCircle.append(cartBtnNum);
    }
  };

  return {
    setCart,
    setCartNum,
  };
})();

export default View;
