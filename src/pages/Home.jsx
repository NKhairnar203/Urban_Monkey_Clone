
import "./Home.css";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Sliderbar from "../components/Sliderbar";
import HomeProducts1 from "../components/products/HomeProducts1";
import CollectionM from "../components/CollectionM";
import CardSlider from "../components/CardSlider";

import logo from "../assets/favicon-um.webp"
import Colab from "../components/Colab";
import ActorCard from "../components/ActorCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Category />
      <Sliderbar />
      <div className="free-return-box">
        <h1>FREE RETURNS ON ALL ORDERS</h1>
      </div>
      <HomeProducts1 />
      <CollectionM />
      <CardSlider />
      <div className="home-banner"></div>
      <div className="after-banner">
        <p>SINCE 2013</p>
        <h5>HELPING OUR COMMUNITY EXPLORE THEIR INNER STREET ARTIST</h5>
        <h6>
          Our aim is to build the biggest self-sustaining Underground community
          by empowering vari0.us artists and athletes.
        </h6>
        <img src={logo} alt="" />
        <button
        onClick={()=>window.location="/about-us"}>MORE ABOUT US</button>
      </div>
      <Colab/>
      <ActorCard/>
      <Footer/>
    </div>
  );
};

export default Home;
