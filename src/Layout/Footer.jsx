import React from 'react';
import './Footer.css';

// Images Import
import logo from '../assets/Logo.png'; // Ye sirf teal icon wali image hai
import ecoLogo from '../assets/FooterLogo02.png';

function Footer() {
  return (
    <footer className="pp-footer">
      <div className="pp-footer-container">
        
        {/* TOP SECTION */}
        <div className="pp-footer-top">
          
          {/* Column 1: Eco */}
          <div className="pp-footer-eco">
            <img src={ecoLogo} alt="Eco Friendly" className="pp-eco-logo" />
            <p className="pp-eco-text">
              Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="pp-footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#partner">Partner program</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div className="pp-footer-links">
            <h4 style={{visibility: 'hidden'}}>More</h4> {/* Spacing ke liye */}
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#academy">Direct Mail Academy</a></li>
              <li><a href="#stories">Success stories</a></li>
              <li><a href="#terms">Terms & conditions</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="pp-footer-contact">
            <h4>Contact</h4>
            <div className="pp-contact-item">
               <span>✉</span> support@postpilot.com
            </div>
            <p className="pp-facility-text">
              Printed with ❤️ at our facility in South Carolina.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pp-footer-bottom">
          <div className="pp-footer-brand">
            <div className="pp-brand-logo-wrapper">
              <img src={logo} alt="PostPilot Icon" className="pp-footer-logo-icon" />
              <span className="pp-brand-text">PostPilot</span>
            </div>
            <span className="pp-copyright">© 2022 PostPilot, Inc. All rights reserved.</span>
          </div>

          <div className="pp-footer-btns">
            <button className="pp-btn-login">Login</button>
            <button className="pp-btn-orange">Try it for free</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;