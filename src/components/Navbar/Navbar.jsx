
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="navbar-menu">
        <Link
          to={"/"}
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon">
          <img src={basket_icon} alt="" className="basket-icon" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
