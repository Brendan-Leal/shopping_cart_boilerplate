import React, { useState, useEffect } from "react";
import ShopHeader from "./ShopHeader";
// import data from "../lib/data.js";
import Products from "./Products";
import AddProductForm from "./AddProductForm";
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/cart',
    }).then(response => {
      setCart(response.data);
    });
  }, []);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/products',
    }).then(response => {
      // console.log(response)
      setProducts(response.data);
    });
  }, [cart]);



  return (
    <div id="app">
      <ShopHeader cart={cart} setCart={setCart} />

      <main>
        <Products cart={cart} setCart={setCart} products={products} setProducts={setProducts} />
        <AddProductForm products={products} setProducts={setProducts} />
      </main>
    </div>
  );
};

export default App;
