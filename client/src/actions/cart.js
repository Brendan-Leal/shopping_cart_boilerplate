export const itemAdded = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: { cartItem: data.item, updatedProduct: data.product }
  };
};

export const cartReceived = (data) => {
  return { type: "CART_RECEIVED", payload: { cart: data } };
};

export const checkout = () => {
  return { type: "CHECKOUT" };
};
