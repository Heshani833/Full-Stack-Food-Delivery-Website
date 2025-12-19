import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext";
import "./MyOrder.css";
import { assets } from "../../assets/assets";

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/orders/userorders",
      {},
      { headers: { token: token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-order">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="order-image" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + "x" + item.quantity;
                }else {
                  return item.name + "x" + item.quantity + ", ";
                }
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
