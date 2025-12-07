import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems, url } =
    useContext(StoreContext);

  const count = cartItems[id] || 0; // only this item count

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {count === 0 ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{count}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
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
