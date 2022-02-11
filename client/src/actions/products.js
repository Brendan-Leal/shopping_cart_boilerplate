export const productsReceived = (data) => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: { products: data }
  };
};

export const createProduct = (data) => {
  return {
    type: 'CREATE_PRODUCT',
    payload: { newProduct: data }
  };
};

export const deleteProduct = (id) => {
  return { type: 'DELETE_PRODUCT', payload: { productId: id } };
};

export const editProduct = (data) => {
  return { type: 'EDIT_PRODUCT', payload: { updatedProduct: data } };
};