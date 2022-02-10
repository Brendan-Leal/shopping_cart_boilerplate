import React from 'react';
import EditableProduct from "./EditableProduct";

function Products({ products, setCart, cart, setProducts }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <EditableProduct key={product._id} {...product} setCart={setCart} cart={cart} products={products} setProducts={setProducts} />;
      })}
    </div>
  );
}

export default Products;