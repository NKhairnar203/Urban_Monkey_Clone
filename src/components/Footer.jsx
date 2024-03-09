import { RiMailLine, RiTimeLine } from "@remixicon/react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="cool">
            <h2>cool stuff</h2>
            <ul>
              <li>accessories</li>
              <li>hats & caps </li>
              <li>clothing</li>
              <li>new arrivals </li>
              <li>skateboards</li>
              <li>eyewear</li>
              <li>um steals</li>
              <li>instagram shop</li>
              <li>blog</li>
              <li>streetwear hub</li>
              <li>about us</li>
              <li>offers</li>
            </ul>
          </div>
          <div className="boring">
            <h2>boring stuff</h2>
            <ul>
              <li> rewards </li>
              <li>track order</li>
              <li> returns</li>
              <li>support </li>
              <li>contact us</li>
              <li> privacy policy</li>
              <li> terms & conditions</li>
            </ul>
          </div>
          <div className="reach">
            <h2>reach out to us</h2>
            <div className="email">
              <RiMailLine />
              <p>hello@urbanmonkey.com</p>
            </div>
            <div className="time">
              <RiTimeLine />
              <p>11am to 6pm Mon - Sun*</p>
            </div>
            <p className="holiday">*except on public holidays</p>
            <p className="follow">Follow URBANMONKEY® India on social media</p>
          </div>
          <div className="cumunity">
            <h2>community exclusive</h2>
            <p className="sub">
              Subscribe to our newsletter and be the first to get all inside
              information on the latest drops and special offers.
            </p>
            <div className="search">
              <input type="text" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h2>Popular searches</h2>
          <p className="popular">
            hats & caps, baseball caps, snapback caps, dad caps, athleisure
            caps, trucker caps, bucket caps, beanies, eyewear, sunglasses,
            eyeglasses, wallets, unisex clothing, accessories, sling bags, loop
            watch, hoodies, sweatshirts, jogger pants, shorts, boxers, oversized
            t-shirts, regular fit t-shirts, denims, long sleeve t-shirts,
            jackets, co-ord sets, new arrivals, urban monkey sale, backpacks,
            skateboard deck, skateboard spare parts, streetwear belts,
            collaborations, gift cards,
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
