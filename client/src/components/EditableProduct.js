import React, { useState } from 'react';
import EditProductForm from './EditProductForm';
import axios from 'axios';

function EditableProduct({ _id, title, price, quantity, setCart, cart, products, setProducts }) {
  const handleAddToCart = () => {
    console.log("_id: ", _id);
    console.log("quant: ", quantity);
    console.log("cart: ", cart);

    axios({
      method: 'post',
      url: '/api/add-to-cart',
      data: {
        productId: _id
      }
    }).then((r) => { // FIXME: Do not need additional req.
      console.log("data: ", r.data);
      axios({
        method: 'get',
        url: '/api/cart',
      }).then(response => {
        setCart(response.data);
      });
    });

  };
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/products/${_id}`);

      let newProductsList = products.slice();
      const indexOfItemToDelete = newProductsList.findIndex(prod => {
        return prod._id === _id;
      });
      newProductsList.splice(indexOfItemToDelete, 1);
      setProducts(newProductsList);
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
              _id={_id} products={products}
              setProducts={setProducts}
              handleFormToggle={toggleFormVisibility}
            /> :
            <>
              <a
                onClick={quantity === 0 ? null : handleAddToCart}
                className={"button add-to-cart" + (quantity === 0 ? " disabled" : "")}
              >
                Add to Cart</a>
              <a onClick={toggleFormVisibility} className="button edit">Edit</a>
            </>
          }
        </div>
        <a onClick={handleDelete} className="delete-button"><span>X</span></a>
      </div>
    </div>
  );
}

export default EditableProduct;