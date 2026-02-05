import "./Section08.css";

import cardImage from "../../assets/Section08Image01.png";

import logo1 from "../../assets/Section08Image02.png";
import logo2 from "../../assets/Section08Image03.png";
import logo3 from "../../assets/Section08Image04.png";
import logo4 from "../../assets/Section08Image05.png";

function Section08() {
  return (
    <section className="pp-case-section">
      <div className="container pp-case-wrapper">

    
        <div className="pp-case-left">
          <img src={cardImage} alt="Postcard" className="pp-case-img img-one" />
        </div>
        <div className="pp-case-right">
          <h2>
            How <span>obvi</span> Drives <br />
            Profits with Hands-Off <br />
            Postcard Campaigns
          </h2>

          <p className="pp-case-desc">
            The 🚀 supplements brand wanted to offset high ad costs
            and reach dormant customers. They scored 1000%+ ROIs.
          </p>

          <div className="pp-case-stats">
            <div>
              <strong>1468%</strong>
              <span>ROI</span>
            </div>
            <div>
              <strong>8.59%</strong>
              <span>Conversion rate</span>
            </div>
            <div>
              <strong>$73,457</strong>
              <span>Sales generated</span>
            </div>
          </div>

          <button className="pp-case-btn">
            READ CASE STUDY
          </button>

          <div className="pp-case-brands">
            <img src={logo1} alt="obvi" />
            <img src={logo2} alt="Bulletproof" />
            <img src={logo3} alt="Boom" />
            <img src={logo4} alt="Orbit Baby" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section08;
