import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Optional: menu click pe band kar dena (mobile pe)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="pp-nav-wrapper">
      <div className="pp-nav-container">
        {/* Logo + Brand */}
        <a className="pp-nav-brand" href="#">
          <img src={logo} className="LogoImage" alt="PostPilot Logo" />
          <span className="pp-nav-logo-text">PostPilot</span>
        </a>

        {/* Hamburger Button (mobile only) */}
        <button
          className="pp-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close (X) icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Hamburger icon (3 lines)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12H21" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Desktop Menu + Buttons */}
        <div className={`pp-nav-right ${isOpen ? "active" : ""}`}>
          <ul className="pp-nav-menu">
            <li className="nav-item nav-item-dropdown">
              <a className="nav-link" href="#" onClick={closeMenu}>
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

            <li>
              <a className="pp-nav-link" href="#" onClick={closeMenu}>
                Success stories
              </a>
            </li>

            <li className="nav-item nav-item-dropdown">
              <a className="nav-link" href="#" onClick={closeMenu}>
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

            <li>
              <a className="pp-nav-link" href="#" onClick={closeMenu}>
                Pricing
              </a>
            </li>
          </ul>

          <div className="pp-nav-buttons">
  <button className="pp-nav-btn pp-nav-btn-outline" onClick={closeMenu}>
    Login
  </button>
  <button className="pp-nav-btn pp-nav-btn-orange" onClick={closeMenu}>
    Create free account
  </button>
</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;