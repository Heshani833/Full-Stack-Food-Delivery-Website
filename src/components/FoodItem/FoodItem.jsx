import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating stars" />
        </div>
        <div className="food-item-price">
          <p>${price}</p>
        </div>
        <div className="food-item-desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
