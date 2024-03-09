import "../css/Hero.css";
import React from "react";
import pic from "../assets/pic3.png";

const Hero = () => {
  return (
    <div className="portfolio_hero-section">
      <div className="portfolio_text-content">
        <span className="portfolio_greetings">Hello,</span>
        <h1>
          I'm <span className="portfolio_name">ahmed raza</span> <br /> full stack MERN developer
        </h1>
        <span className="portfolio_decription">
          I am skilled and passionate MERN developer with 1 year experience
          <br /> in web development.
        </span>
        <button className="portfolio-hire-me-btn">Hire ME</button>
      </div>
      <div className="portfolio_img-content">
        <img src={pic} alt="ahmed raza"/>
      </div>
    </div>
  );
};

export default Hero;
