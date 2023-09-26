import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur deserunt aspernatur officiis expedita impedit
            asperiores delectus dolorum cum consectetur illo, labore, earum quis
            architecto minima culpa est possimus commodi? Quia nam cumque quis
            rem quo architecto atque facere iure reprehenderit.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Sector-24, New Delhi</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 2478 0173</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: shopcart@oyeani.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            ShopCart 2023 CREATED BY dev@oyeani. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
