import Model from "../Model.js";
import View from "./View.js";

const Controller = (() => {
  const checkCartItem = (id) => {
    const cart = Model.Data.getCart();

    return cart.some((item) => item.id === id);
  };

  const addToCart = (product) => {
    if (checkCartItem(product.id)) return;

    const cart = [];

    //get cart items from local stroage
    const localCart = Model.Data.getCart();

    let currentCart = cart.concat(localCart);

    //create new array with new added item
    const newCartItem = [
      {
        ...product,
        quantity: 1,
      },
    ];

    //merge with local storage
    let newCart = currentCart.concat(newCartItem);

    //save new cart
    Model.Data.saveCart(newCart);

    //dispatch cart update
    Model.observeCartUpdate();
  };

  const firstRender = async () => {
    //render all products
    const productData = await Model.Data.getProducts();
    View.setProducts(productData);
  };

  return {
    firstRender,
    addToCart,
  };
})();

export default Controller;
