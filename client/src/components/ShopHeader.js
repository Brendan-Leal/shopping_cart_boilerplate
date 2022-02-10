import axios from 'axios';
import React from 'react';
import CartItem from './CartItem';

const ShopHeader = ({ cart, setCart }) => {

  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout");

      setCart([]);
    } catch (error) {
      console.log("Something went wrong in the checkout");
      throw error;
    }
  };

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length > 0 ?
          <table className="cart-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => {
                return <CartItem key={item._id} {...item} />;
              })}

              <tr>
                <td colSpan="3" className="total">
                  Total: ${cart.reduce((sum, item) => {
                    return sum += item.price * item.quantity;
                  }, 0)}
                </td>
              </tr>
            </tbody>
          </table> :
          <p>
            Your cart is empty
            <br />
            <br />
            Total: $0
          </p>
        }
        <a
          onClick={cart.length > 0 ? handleCheckout : null}
          className={`button checkout ${cart.length > 0 ? "" : "disabled"}`}
        >
          Checkout
        </a>
      </div>
    </header>
  );
};

export default ShopHeader;