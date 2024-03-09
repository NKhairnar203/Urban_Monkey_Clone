import React from "react";
import "./CardSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCart from "./allCards/ProductCart";
import data from "./db.json";
const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="card-box">
        <div className="heading">TRENDING</div>
        <div className="card-parent">
          <Slider {...settings}>
            {data.trending.map((e, i) => (
              <ProductCart
                key={i}
                image={e.Image}
                name={e.Name}
                price={e.Price}
              />
            ))}
          </Slider>
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
    </>
  );
};

export default CardSlider;
