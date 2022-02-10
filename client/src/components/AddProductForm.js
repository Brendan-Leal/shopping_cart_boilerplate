import axios from 'axios';
import { React, useState } from 'react';

function AddProductForm({ products, setProducts }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCancelClick = () => {
    toggleFormVisibility();
    resetInputs();
  };
  const resetInputs = () => {
    setProductName("");
    setPrice("");
    setQuantity("");
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/products", {
        title: productName,
        price: price,
        quantity: quantity
      });

      let newProductsList = products.slice();
      newProductsList.push(res.data);
      setProducts(newProductsList);

      toggleFormVisibility();
      resetInputs();
    } catch (error) {
      console.log("Something went wrong with the request.");
    }
  };

  return (
    <div className={`add-form  ${isFormVisible ? "visible" : null}`} >
      <p><a onClick={toggleFormVisibility} className="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            id="product-name"
            value={productName}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} type="text" id="product-price" value={price} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input onChange={(e) => setQuantity(e.target.value)} type="text" id="product-quantity" value={quantity} />
        </div>

        <div className="actions form-actions">
          <a onClick={handleSubmit} className="button">Add</a>
          <a onClick={handleCancelClick} className="button">Cancel</a>
        </div>
      </form>
    </div >
  );
}

export default AddProductForm;