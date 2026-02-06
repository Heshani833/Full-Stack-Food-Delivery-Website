import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Food Display</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (
            category === "All" ||
            category.toLowerCase() === item.category.toLowerCase()
          ) {
            return (
              <FoodItem
                key={item._id} //  use unique _id
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
