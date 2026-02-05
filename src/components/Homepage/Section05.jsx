import "./Section05.css";

import img1 from "../../assets/Card01.png";
import img2 from "../../assets/Card02.png";
import img3 from "../../assets/Card03.png";
import img4 from "../../assets/Card04.png";
import img5 from "../../assets/Card05.png";
import img6 from "../../assets/Card06.png";

function Section05() {
  return (
    <section className="features-grid-section">
      <div className="container">

        {/* HEADING */}
        <h2 className="features-grid-heading">
          Everything your brand needs to <br />
          <span>make your brand unforgettable</span>
        </h2>

        {/* GRID */}
        <div className="features-grid">

          <div className="feature-card beige">
            <img src={img1} alt="" />
            <h3>Plug-and-play with your stack</h3>
            <p>
              Native integrations provide seamless segmentation,
              automation & tracking. No clunky spreadsheets.
            </p>
          </div>

          <div className="feature-card mint">
            <img src={img2} alt="" />
            <h3>Run campaigns on autopilot</h3>
            <p>
              Ink profits while you sleep. Just set it and forget it.
            </p>
          </div>

          <div className="feature-card lavender">
            <img src={img3} alt="" />
            <h3>Real-time ROI dashboard</h3>
            <p>
              Track performance of every postcard by customer
              or discount code. Your CFO will love it.
            </p>
          </div>

          <div className="feature-card blue">
            <img src={img4} alt="" />
            <h3>Deliver WOW with real handwritten cards</h3>
            <p>
              Our proprietary robots use real pens and ink for
              an unforgettable VIP touch.
            </p>
          </div>

          <div className="feature-card peach">
            <img src={img5} alt="" />
            <h3>Predictable pricing</h3>
            <p>
              Unlike CPCs, postage rates don’t change based on
              competition or who you’re targeting.
            </p>
          </div>

          <div className="feature-card gray">
            <img src={img6} alt="" />
            <h3>Complimentary concierge service</h3>
            <p>
              DTC is in our DNA. Our pros will build your strategy
              and custom designs using battle-tested best practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section05;
