import React from "react";
import "./Header.css";
import headerVideo from "../../assets/header-video.mp4";

const Header = () => {
  return (
    <div className="header">
      <video className="header-video" autoPlay loop muted>
        <source src={headerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-contents">
        <h2>Order your favorite order</h2>
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
