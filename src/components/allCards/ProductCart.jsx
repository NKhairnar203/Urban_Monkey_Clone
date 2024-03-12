import  { useState } from "react";
import "./ProductCart.css";
import { RiHeartLine } from "@remixicon/react";

const ProductCart = ({ key, image, name, price} ) => {
  const [cart, setCart] = useState(0)
  return (
    <>
     
      <div key={key} className="card">
        <div className="image">
          <img src={image} alt={name} />
          <div className="icon">
            <RiHeartLine className="heart-icon" />
          </div>
        </div>
        <p>{name}</p>
        <p className="price"> {price} </p>
        <button value={cart} onClick={()=>setCart(cart+1)}>ADD TO CART</button>
      </div>
      
    </>
  );
};

export default ProductCart;
