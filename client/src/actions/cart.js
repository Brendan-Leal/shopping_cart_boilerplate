export const itemAdded = () => {
  return 
}

export const cartReceived = (data) => {
  return { type: "CART_RECEIVED", payload: { cart: data } };
}

export const checkout = () => {
  return { type: "CHECKOUT" };
}
