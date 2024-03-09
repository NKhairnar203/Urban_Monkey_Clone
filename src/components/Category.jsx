import data from "./db.json";

import Slider from "react-slick";

import "./Category.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="category-box">
        <Slider {...settings}>
          {data.category.map((e, i) => (
            <div className="menu-slide" key={i}>
              <img src={e.catImage} alt="" />
              <p>{e.catTitle}</p>
            </div>
          ))}
          
        </Slider>
      </div>
    </>
  );
};

export default Category;
