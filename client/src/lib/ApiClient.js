import axios from "axios";

const apiClient = {
  addProduct: (newProduct, callback) => {
    return axios
      .post("/api/products", newProduct)
      .then(response => response.data)
      .then(callback)
      .catch((err) => console.log(err));
  },
  getProducts: (callback) => {
    return axios
      .get('/api/products')
      .then(response => response.data)
      .then(callback)
      .catch(err => console.log(err));
  },
  deleteProduct: (id, callback) => {
    return axios
      .delete(`/api/products/${id}`)
      .then(callback)
      .catch(err => console.log(err));
  },
  updateProduct: (updatedProduct, id, callback) => {
    return axios
      .put(`api/products/${id}`, updatedProduct)
      .then(response => response.data)
      .then(callback)
      .catch(err => console.log(err));
  },
  addItem: (productData, callback) => {
    return axios
      .post('/api/add-to-cart', productData)
      .then(response => response.data)
      .then(callback)
      .catch(err => console.log(err));
  },
  getCartItems: (callback) => {
    return axios
      .get('/api/cart')
      .then(response => response.data)
      .then(callback)
      .catch(err => console.log(err));
  },
  checkoutItems: (callback) => {
    return axios
      .post('/api/checkout')
      .then(callback)
      .catch(err => console.log(err));
  },
};

export default apiClient;