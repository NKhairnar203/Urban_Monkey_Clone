
import "./Sliderbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./db.json"
const Sliderbar = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container">
        <Slider className="sliders" {...settings}>
          {data.secondSlider.map((item) => (
            <div key={item.id} className="slide">
              <img src={item.Image} alt="" />
            </div>
          ))}
        </Slider>
          
      </div>
    </>
  );
};

export default Sliderbar;
