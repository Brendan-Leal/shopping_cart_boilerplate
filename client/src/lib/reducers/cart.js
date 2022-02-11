export const cart = (state = [], action) => {
  switch (action.type) {
    case "CART_RECEIVED":
      return action.payload.cart;
    case "CHECKOUT":
      return [];
    case "ADD_TO_CART":
      let indexOfCartItem = state.findIndex(c => c._id === action.payload.cartItem._id);
      const newState = state.slice();
      if (indexOfCartItem >= 0) {
        newState[indexOfCartItem] = action.payload.cartItem;
      } else {
        newState.push(action.payload.cartItem);
      }
      return newState;
    default:
      return state;
  }
}