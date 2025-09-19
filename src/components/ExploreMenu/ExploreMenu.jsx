import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a variety of delicious dishes crafted by our chefs.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={isActive ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p style={{ color: isActive ? "#cd49e4" : "" }}>
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
