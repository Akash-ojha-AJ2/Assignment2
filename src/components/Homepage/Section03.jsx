import "./Section03.css";
import TrendImage from "../../assets/TrendImage.png";

function Section03() {
  return (
    <section className="why-section">
      <div className="container text-center">

        <h2 className="why-heading">
          Why use direct mail? <br />
          It <span>works</span> like crazy.
        </h2>

        <div className="why-content">

          <div className="why-box">
            <h3>28X</h3>
            <p>
              Higher response rate than email <br />
              & digital
            </p>
          </div>

          <div className="why-image">
            <img src={TrendImage} alt="Direct mail vs email" />
            <p className="why-caption">Your messages get read</p>
          </div>
          <div className="why-box">
            <h3>17 Days</h3>
            <p>
              Lifespan of a postcard vs. <br />
              seconds for email or SMS
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section03;
