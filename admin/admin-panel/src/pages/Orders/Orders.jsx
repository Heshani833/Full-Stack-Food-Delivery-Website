import React, { use } from "react";
import "./orders.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/orders/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt={order.name} />
            <div>
              <p className="order-items-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>

              <div className="order-item-address">
                <p>
                  {order.address.street +
                    ", " +
                    order.address.city +
                    ", " +
                    order.address.state +
                    " " +
                    order.address.country +
                    " " +
                    order.address.zip}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Item : {order.items.length}</p>
            <p>${order.amount}</p>
            <select>
              <option value="Food Processing"></option>
              <option value="Out for Delivery"></option>
              <option value="Delivered"></option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
