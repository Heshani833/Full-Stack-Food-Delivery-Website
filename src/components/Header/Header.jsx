import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite order</h2>
        <p>Order now and enjoy delicious food delivered to your doorstep!</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Header;
