import "../css/NavBar.css"

import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="portfolio_navbar">
      {/* <img src="" alt="logo" /> */}
      <h2>porTFolio</h2>
      <div className="portfolio_desktop-menu">
        <Link className="portfolio_desktop-menu-item">Home</Link>
        <Link className="portfolio_desktop-menu-item">About</Link>
        <Link className="portfolio_desktop-menu-item">Portfolio</Link>
        <Link className="portfolio_desktop-menu-item">Clients</Link>
      </div>
      <button className="portfolio_desktop-menu-btn">
        <img src="" alt="" className="portfolio_desktop-menu-img" />
        Contact Me
      </button>
    </nav>
  );
}

export default NavBar
