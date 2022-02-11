import { React, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function EditProductForm({ handleFormToggle, _id, title, price, quantity }) {
  const [formTitle, setFormTitle] = useState(title);
  const [formPrice, setFormPrice] = useState(price);
  const [formQuantity, setFormQuantity] = useState(quantity);
  const dispatch = useDispatch();

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
      dispatch({ type: 'EDIT_PRODUCT', payload: { updatedProduct: response.data } });
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
          <a href="/#" onClick={handleSubmit} className="button" >Update</a>
          <a href='/#' onClick={handleFormToggle} className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default EditProductForm;