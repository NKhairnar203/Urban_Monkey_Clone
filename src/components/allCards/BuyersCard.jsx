import React from "react";
import "./BuyersCard.css";
import data from "../db.json";
import Slider from "react-slick";
const BuyersCard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div key="" className="card-second">
        <div className="slider-container">
          <Slider {...settings}>
            {data.buyersData.map((e, i) => (
              <div key={i} className="image-second">
                <div>
                  <img src={e.buyerImage} alt="" />
                  <h2>{e.name}</h2>
                  <p>{e.work}</p>
                  <h3>{e.productBuy}</h3>
                </div>
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default BuyersCard;
//
