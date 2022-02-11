export const products = (state = [], action) => {
  let newState = state.slice();
  switch (action.type) {
    case 'CREATE_PRODUCT':
      return state.concat(action.payload.newProduct);
    case 'PRODUCTS_RECEIVED':
      return action.payload.products;
    case 'DELETE_PRODUCT':
      const index = state.findIndex(product => product._id === action.payload.productId);
      newState.splice(index, 1);
      return newState;
    case 'EDIT_PRODUCT':
      let indexOfProduct = state.findIndex(product => product._id === action.payload.updatedProduct._id);
      newState[indexOfProduct] = action.payload.updatedProduct;
      return newState;
    case 'ADD_TO_CART': {
      let indexOfProduct = state.findIndex(product => product._id === action.payload.updatedProduct._id);
      newState[indexOfProduct] = action.payload.updatedProduct;
      return newState;
    }

    default:
      return state;
  }
}