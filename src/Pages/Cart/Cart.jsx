import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Correct: call useNavigate() as a hook
  const navigate = useNavigate();

  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id]) {
      acc += item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id]) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${total}</b>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <input type="text" placeholder="Promo code" />
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
