import apiClient from "../lib/ApiClient";

export const productsReceivedSuccess = (data) => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: { products: data }
  };
};

export const productsReceived = () => {
  return (dispatch) => {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
    });
  };
};

export const createProductSuccess = (data) => {
  return {
    type: 'CREATE_PRODUCT',
    payload: { newProduct: data }
  };
};

export const createProduct = (newProduct, callback) => {
  return (dispatch) => {
    apiClient.addProduct(newProduct, (product) => {
      dispatch(createProductSuccess(product));
      if (callback) callback();
    });
  };
};

export const deleteProductSuccess = (id) => {
  return { type: 'DELETE_PRODUCT', payload: { productId: id } };
};

export const deleteProduct = (id) => {
  return dispatch => {
    apiClient.deleteProduct(id, () => {
      dispatch(deleteProductSuccess(id));
    });
  };
};

export const editProductSuccess = (data) => {
  return { type: 'EDIT_PRODUCT', payload: { updatedProduct: data } };
};

export const editProduct = (updatedProduct, id, callback) => {
  return (dispatch) => {
    apiClient.updateProduct(updatedProduct, id, (product) => {
      dispatch(editProductSuccess(product));
      if (callback) callback();
    });
  };
};
