import Model from "../Model.js";
import View from "./View.js";

const Controller = (() => {
  const setCartItemQuantity = (item, value) => {
    item.quantity = parseInt(value);

    //get a local storage cart
    const cartItems = Model.Data.getCart();

    //change 'this' item's quantity
    const modifiedCartItems = cartItems.map((cartItem) => {
      return parseInt(cartItem.id) === parseInt(item.id)
        ? { ...cartItem, quantity: item.quantity }
        : cartItem;
    });

    //update local cart
    Model.Data.saveCart(modifiedCartItems);
  };

  const setTotalPrice = () => {
    let totalPrice = 0;

    const cartItems = Model.Data.getCart();
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  };

  const deleteItem = (item) => {
    const cartItems = Model.Data.getCart();

    const modifiedCartItems = cartItems.filter(
      (cartItem) => parseInt(cartItem.id) !== parseInt(item.id)
    );

    Model.Data.saveCart(modifiedCartItems);
    window.location.reload();
  };

  const firstRender = async () => {
    const cartItems = await Model.Data.getCart();

    if (cartItems.length === 0) {
      View.setEmpty(true);
    } else {
      View.setEmpty(false);
      View.setCartItems(cartItems);
    }
  };

  return {
    firstRender,
    setCartItemQuantity,
    setTotalPrice,
    deleteItem,
  };
})();

export default Controller;
