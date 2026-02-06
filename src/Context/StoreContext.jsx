import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { food_list as localFoodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState(localFoodList);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
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
    try {
      const response = await axios.get(url + "/api/food/list");
      if (
        response.data.success &&
        response.data.data &&
        Array.isArray(response.data.data) &&
        response.data.data.length > 0
      ) {
        // Merge API items with local items (API items take priority)
        const apiItems = response.data.data;
        const apiIds = new Set(apiItems.map((item) => item._id));
        const localOnly = localFoodList.filter(
          (item) => !apiIds.has(item._id)
        );
        setFoodList([...apiItems, ...localOnly]);
        console.log(
          "Food list: ",
          apiItems.length,
          "from API +",
          localOnly.length,
          "local items"
        );
      } else {
        console.log("Using local food list - no data from API");
        // Keep the local food list, don't change it
      }
    } catch (error) {
      console.log("Error fetching food list, using local data:", error.message);
      // Keep the local food list, don't change it
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.cartData) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log("Error loading cart data:", error.message);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

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
