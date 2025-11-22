import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option" onClick={toggleSidebar}>
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
          </NavLink>
          <NavLink
            to="/list"
            className="sidebar-option"
            onClick={toggleSidebar}
          >
            <img src={assets.order_icon} alt="" />
            <p>List Items</p>
          </NavLink>
          <NavLink
            to="/orders"
            className="sidebar-option"
            onClick={toggleSidebar}
          >
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
