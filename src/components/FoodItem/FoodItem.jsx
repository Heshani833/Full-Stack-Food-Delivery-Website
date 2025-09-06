import React from "react";
import { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            {" "}
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
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
