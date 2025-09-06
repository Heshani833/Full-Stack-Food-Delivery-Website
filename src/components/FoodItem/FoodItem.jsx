import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart } = useContext(StoreContext);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    addToCart(id);
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      removeFromCart(id);
    }
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {count === 0 ? (
          <img
            className="add"
            onClick={handleAdd}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img onClick={handleRemove} src={assets.remove_icon_red} alt="" />
            <p>{count}</p>
            <img onClick={handleAdd} src={assets.add_icon_green} alt="" />
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
