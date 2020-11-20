import Model from "../Model.js";
import View from "./View.js";

const Controller = (() => {
  const checkCartEmpty = () => {
    const cartModal = document.querySelector(".global-nav__cartModal");

    if (Model.Data.getCart().length === 0) {
      cartModal.classList.add("empty");
      return true;
    } else {
      cartModal.classList.remove("empty");
      return false;
    }
  };

  const openCartModal = () => {
    const cartModal = document.querySelector(".global-nav__cartModal");

    if (!cartModal.classList.contains("active")) {
      cartModal.classList.add("active");
    } else {
      cartModal.classList.remove("active");
    }
  };

  const clickCartBtn = () => {
    const cartBtn = document.querySelector(".global-nav__cartBtn");

    cartBtn.addEventListener("click", () => {
      openCartModal();

      if (!checkCartEmpty()) {
        const cartData = Model.Data.getCart();
        View.setCart(cartData);
        // View.setCartNum(cartData);
      }
    });
  };

  const changeCartNum = () => {
    const cartData = Model.Data.getCart();
    View.setCartNum(cartData);
  };

  //수정 필요
  const closeCart = () => {
    const cartModal = document.querySelector(".global-nav__cartModal");

    if (cartModal.classList.contains("active")) {
      document.addEventListener("click", () => {
        cartModal.classList.remove("active");
      });
    }
  };

  const firstRender = async () => {
    //render if there is cart item in user's local storage
    const cartData = await Model.Data.getCart();

    View.setCart(cartData);
    View.setCartNum(cartData);

    //active click event listner
    clickCartBtn();
    closeCart();
  };

  return {
    firstRender,
    closeCart,
    changeCartNum,
  };
})();

export default Controller;
