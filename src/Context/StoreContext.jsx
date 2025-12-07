import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { food_list as localFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState(localFoodList);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updated = { ...prev };
      updated[itemId] -= 1;
      if (updated[itemId] <= 0) delete updated[itemId];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
    console.log("Food list fetched:", response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      // Commented out API fetch to use local food list
      // await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
