import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
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
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="place-order-right">
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
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
