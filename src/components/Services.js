import React from "react";
import "../css/Services.css";
import pic1 from "../assets/analysis.png";
import pic2 from "../assets/flasks.png";
import pic3 from "../assets/new-product.png";

const Services = () => {
  return (
    <div className="portfolio-services-wrapper" id="Services">
      <h1 className="services-head">Services</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia
      </p>

      <div className="portfolio-services-sections">
        <div className="portfolio-services-section-wrapper">
          <img src={pic1} alt="ahmed raza" />
          <h2>Web Development</h2>
          <div></div>
        </div>

        <div className="portfolio-services-section-wrapper">
          <img src={pic2} alt="ahmed raza" />
          <h2>UI/UX Designing</h2>
          <div></div>
        </div>

        <div className="portfolio-services-section-wrapper">
          <img src={pic3} alt="ahmed raza" />
          <h2>Web Design</h2>
          <div></div>
        </div>
      </div>

      <div className="portfolio-services-sections">
        <div className="portfolio-services-section-wrapper">
          <img src={pic1} alt="ahmed raza" />
          <h2>Web Development</h2>
          <div></div>
        </div>

        <div className="portfolio-services-section-wrapper">
          <img src={pic2} alt="ahmed raza" />
          <h2>UI/UX Designing</h2>
          <div></div>
        </div>

        <div className="portfolio-services-section-wrapper">
          <img src={pic3} alt="ahmed raza" />
          <h2>Web Design</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
