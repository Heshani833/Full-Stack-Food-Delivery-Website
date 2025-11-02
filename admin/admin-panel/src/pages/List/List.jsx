import React, { useEffect } from "react";
import "./list.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";

  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setLists(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);
  return <div></div>;
};

export default List;
