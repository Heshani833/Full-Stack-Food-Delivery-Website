import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite order</h2>
        <p>
          Discover a wide variety of mouth-watering dishes made with fresh
          ingredients and delivered hot and fast to your door. Enjoy
          restaurant-quality meals without leaving the comfort of your home.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
