import React from "react";
import "./Card.css";
import Navbar from "../components/Navbar";
const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="container-card">
        <div className="heading">
          <h4>Your Shopping Cart</h4>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
