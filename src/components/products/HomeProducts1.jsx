import React from "react";
import ProductCart from "../allCards/ProductCart";
import "./HomeProducts1.css";
import data from "../db.json";
const HomeProducts1 = () => {
  return (
    <div className="container1">
      <div className="heading">NEW DROPS</div>
      <div className="all-products">
        {data.data.slice(0, 8).map((e, i) => (
          <ProductCart
            key={i}
            image={e.productImage}
            name={e.productName}
            price={e.productPrice}
          />
        ))}
      </div>
      <div className="view-all-btn">
        <button
          onClick={() => (window.location = "/allproducts")}
          className="viewAllBtn"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default HomeProducts1;
