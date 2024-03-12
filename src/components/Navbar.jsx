import React, { useState } from "react";
import logo from "../assets/logo-news.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  RiArrowDropDownLine,
  RiHeartLine,
  RiShoppingCartLine,
  RiUser3Line,
  RiMenuLine,
  RiSearch2Line,
} from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const [Open, setOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 const toggleLogin = () => {
   setOpen(!Open);
 };

  return (
    <>
      <div className="container">
        <div className="navbar-1">
          <div className="logo-side">
            {/* <RiMenuLine className="menu-icon" color="black" /> */}
            {/* <RiSearch2Line className="search-icon" color="black" /> */}
            <Link to="/">
              {" "}
              <img className="" src={logo} alt="Logo" />
            </Link>
            <div className="search-category">
              <div className="category" onClick={toggleMenu}>
                <p>All Categories</p>
                <RiArrowDropDownLine />
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="">All Categories</a>
                    </li>
                    <li>
                      <a href="">Accessories</a>
                    </li>
                    <li>
                      <a href="">Apparel</a>
                    </li>
                    <li>
                      <a href="">Bearings</a>
                    </li>
                    <li>
                      <a href="">Eyewears</a>
                    </li>
                    <li>
                      <a href="">face Mask</a>
                    </li>
                    <li>
                      <a href="">Headwear</a>
                    </li>
                    <li>
                      <a href="">Keychains</a>
                    </li>
                    <li>
                      <a href="">Skateboard</a>
                    </li>
                  </ul>
                )}
              </div>
              <div className="divider"></div>
              <div className="search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for Products"
                />
                <button>SEARCH</button>
              </div>
            </div>
          </div>

          <div className="navbar-icons">
            <Link to="/login" className="login-drop">
              <RiUser3Line color="black" />
            </Link>
            <Link>
              <RiHeartLine color="black"/>
            
            </Link>
            <Link to="/cart">
              {" "}
              <RiShoppingCartLine color="black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="category-bar">
        <div className="category-container">
          <p>hats & caps</p>
          <RiArrowDropDownLine />
          <span className="badge">New</span>
        </div>
        <div className="category-container">
          <p>skateboards</p>
          <RiArrowDropDownLine />
        </div>
        <div className="category-container">
          <p>bottoms</p>
        </div>
        <div className="category-container">
          <p>legacy drop</p>
        </div>
        <div className="category-container">
          <p>mtv x um</p>
          <span className="badge">Hot</span>
        </div>
        <div className="category-container">
          <p>eyewear</p> <RiArrowDropDownLine />
        </div>
        <div className="category-container">
          <p>apparel</p>
          <RiArrowDropDownLine />
        </div>
        <div className="category-container">
          <p>accessories</p>
          <RiArrowDropDownLine />
        </div>
        <div className="category-container">
          <p>about us</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;




