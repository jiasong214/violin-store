const View = (() => {
  const setCart = (cartData) => {
    const cartList = document.querySelector(
      ".global-nav__cartModal__myItems__list"
    );
    cartList.textContent = ``;

    cartData.map((item) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("global-nav__cartModal__myItems__item");
      cartList.append(cartItem);

      const cartItem__image = document.createElement("div");
      cartItem__image.style.background = `url('${item.imageURL}') center bottom`;
      cartItem__image.style.backgroundSize = "180%";

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
