import React from 'react';
import './Section09.css'; // Nayi CSS file import karein
import handImage from '../../assets/Section09Image.png'; 

function Section09() {
  return (
    <section className="risk-free-container">
      <div className="risk-free-content">
        
        {/* Left Part */}
        <div className="risk-free-left">
          <h2>Try PostPilot <br /> Risk-Free</h2>
          <p className="risk-subtext">No contracts. No commitments. Guaranteed results.*</p>
          
          <div className="risk-free-actions">
            <button className="risk-free-btn">Get Started</button>
            
            <div className="risk-free-rating">
              <div className="risk-free-stars">★★★★★</div>
              <span className="risk-free-rating-label">5.0 Shopify Rating</span>
            </div>
          </div>

          <p className="risk-free-disclaimer">
            * for qualified brands with over $1m annual Shopify revenue.
          </p>
        </div>

        {/* Right Part */}
        <div className="risk-free-right">
          <img 
            src={handImage} 
            alt="Hand holding postcard" 
            className="risk-free-image" 
          />
        </div>

      </div>
    </section>
  );
}

export default Section09;