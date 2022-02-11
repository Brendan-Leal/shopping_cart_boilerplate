import apiClient from '../lib/ApiClient';

export const itemAddedSuccess = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: { cartItem: data.item, updatedProduct: data.product }
  };
};

export const itemAdded = (productData, callback) => {
  return (dispatch) => {
    apiClient.addItem(productData, (item) => {
      dispatch(itemAddedSuccess(item));
      if (callback) callback();
    });
  };
};

export const cartReceivedSuccess = (data) => {
  return { type: "CART_RECEIVED", payload: { cart: data } };
};

export const cartReceived = () => {
  return (dispatch) => {
    apiClient.getCartItems((cartItems) => {
      dispatch(cartReceivedSuccess(cartItems));
    });
  };
};

export const checkoutSuccess = () => {
  return { type: "CHECKOUT" };
};

export const checkout = () => {
  return (dispatch) => {
    apiClient.checkoutItems(() => {
      dispatch(checkoutSuccess());
    });
  };
};
