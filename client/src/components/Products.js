import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditableProduct from "./EditableProduct";
import { productsReceived } from '../actions/products';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('/api/products');
      const data = response.data;
      dispatch(productsReceived(data));
    };
    getProducts();
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <EditableProduct key={product._id} {...product} />;
      })}
    </div>
  );
}

export default Products;