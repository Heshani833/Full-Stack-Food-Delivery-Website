import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [itemCounts, setItemCounts] = useState({}); // Add new state for individual counts

  const addToCart = (itemId) => {
    // Update cart items
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }

    // Update individual item count
    setItemCounts((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    // Only remove if count is greater than 0
    if (itemCounts[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));

      // Update individual item count
      setItemCounts((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
    console.log("Item Counts:", itemCounts);
  }, [cartItems, itemCounts]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    itemCounts, // Add to context
    setItemCounts, // Add to context
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
