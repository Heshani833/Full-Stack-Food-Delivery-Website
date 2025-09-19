import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"; // adjust path if needed
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { subtotal, deliveryFee, total } = useContext(StoreContext);

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
          <button type="button">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
