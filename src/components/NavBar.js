import "../css/NavBar.css";

import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const navLinks = ['Home', 'About'];

  const [activeLink, setActiveLink] = useState('');

  const vistedLink = (value) => {
    setActiveLink(value);
  }
  return (
    <nav className="portfolio_navbar">
      <h2>PortFolio</h2>
      <div className="portfolio_desktop-menu">
        <a 
          className={`portfolio_desktop-menu-item`} 
          href="#Hero" 
          onClick={() => vistedLink('Home')}
        >
          Home
        </a>
        <a className="portfolio_desktop-menu-item" href="#About">
          About
        </a>
        <a className="portfolio_desktop-menu-item" href="#Services">
          Services
        </a>
        <a className="portfolio_desktop-menu-item" href="#Skills">
          Skills
        </a>
        <a className="portfolio_desktop-menu-item" href="#Portfolio">
          Portfolio
        </a>
        <a className="portfolio_desktop-menu-item" href="#Clients">
          Clients
        </a>
        <a className="portfolio_desktop-menu-item" href="#Contact">
          <p className="portfolio_desktop-menu-btn">Contact Me</p>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
