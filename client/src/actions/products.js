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