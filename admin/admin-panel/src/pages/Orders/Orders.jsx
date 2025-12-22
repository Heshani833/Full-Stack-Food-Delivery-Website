import React, { use } from 'react'
import "./orders.css"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const Orders = ({url}) => {

const [orders, setOrders] = useState([])

const fetchOrders = async () => {
  const response = await axios.get(url + "/api/orders/list");
  if(response.data.success){
    setOrders(response.data.data)
    console.log(response.data.data)
  }
  else{
    toast.error("Error fetching orders"); 
  }
   
}

useEffect(() => {
  fetchOrders();
}, [])

  return (
    <div className="orders">Orders</div>
  )
}

export default Orders