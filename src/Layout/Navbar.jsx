import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png"

function Navbar() {
  return (
    <nav className="pp-nav-wrapper">
      <div className="pp-nav-container">

        {/* LEFT : LOGO */}
        <a className="pp-nav-brand" href="#">
          <img src={logo} className="LogoImage"></img>
          <span className="pp-nav-logo-text">PostPilot</span>
        </a>

        {/* RIGHT : MENU + BUTTONS */}
        <div className="pp-nav-right">

          {/* MENU */}
          <ul className="pp-nav-menu">
           <li className="nav-item nav-item-dropdown">
  <a className="nav-link" href="#">
    Resources
    <span className="nav-arrow">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1L6 6L11 1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
</li>

            <li><a className="pp-nav-link" href="#">Success stories</a></li>
           <li className="nav-item nav-item-dropdown">
  <a className="nav-link" href="#">
    Company
    <span className="nav-arrow">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1L6 6L11 1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
</li>

            <li><a className="pp-nav-link" href="#">Pricing</a></li>
          </ul>

          {/* BUTTONS */}
          <div className="pp-nav-buttons">
            <button className="pp-nav-btn pp-nav-btn-outline">
              Login
            </button>
            <button className="pp-nav-btn pp-nav-btn-orange">
              Create free account
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
