import Controller from "./global/Controller.js";

const Model = (() => {
  const observeCartUpdate = () => {
    Controller.changeCartNum();
  };

  const Data = {
    getProducts: async function () {
      try {
        let result = await fetch("products.json");
        let data = await result.json();

        let products = data.items;

        return products;
      } catch (error) {
        console.log(error);
      }
    },
    saveCart: function (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    getCart: function () {
      return localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
    },
  };

  return {
    Data,
    observeCartUpdate,
  };
})();

export default Model;
