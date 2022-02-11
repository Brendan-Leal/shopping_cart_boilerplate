import React, { useState } from 'react';
import EditProductForm from './EditProductForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function EditableProduct({ _id, title, price, quantity }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    axios({
      method: 'post',
      url: '/api/add-to-cart',
      data: {
        productId: _id
      }
    }).then((r) => {
      dispatch({ type: "ADD_TO_CART", payload: { cartItem: r.data.item, updatedProduct: r.data.product } });
    });

  };
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${_id}`);
      dispatch({ type: 'DELETE_PRODUCT', payload: { productId: _id } });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="product" >
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className={"quantity" + (quantity === 0 ? " none-left" : "")}>
          {quantity} left in stock
        </p>
        <div className="actions product-actions">
          {isFormVisible ?
            <EditProductForm
              title={title}
              price={price}
              quantity={quantity}
              _id={_id}
              handleFormToggle={toggleFormVisibility}
            /> :
            <>
              <a
                href="/#" onClick={quantity === 0 ? null : handleAddToCart}
                className={"button add-to-cart" + (quantity === 0 ? " disabled" : "")}
              >
                Add to Cart</a>
              <a href="/#" onClick={toggleFormVisibility} className="button edit">Edit</a>
            </>
          }
        </div>
        <a href="/#" onClick={handleDelete} className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

export default EditableProduct;