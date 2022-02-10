import { React, useState } from 'react';
import axios from 'axios';

function EditProductForm({ handleFormToggle, _id, title, price, quantity, products, setProducts }) {
  const [formTitle, setFormTitle] = useState(title);
  const [formPrice, setFormPrice] = useState(price);
  const [formQuantity, setFormQuantity] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'put',
      url: `/api/products/${_id}`,
      data: {
        title: formTitle,
        price: formPrice,
        quantity: formQuantity
      }
    }).then(response => {
      let newProducts = products.slice();
      let product = products.find(product => product._id === _id);
      product.title = response.data.title;
      product.price = response.data.price;
      product.quantity = response.data.quantity;
      setProducts(newProducts);
      handleFormToggle();
    });
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input onChange={(e) => setFormTitle(e.target.value)} type="text" id="product-name" value={formTitle} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input onChange={(e) => setFormPrice(e.target.value)} type="text" id="product-price" value={formPrice} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input onChange={(e) => setFormQuantity(e.target.value)} type="text" id="product-quantity" value={formQuantity} />
        </div>

        <div className="actions form-actions">
          <a onClick={handleSubmit} className="button" >Update</a>
          <a onClick={handleFormToggle} className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default EditProductForm;