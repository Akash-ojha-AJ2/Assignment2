import "./Section02.css";

import brand1 from "../../assets/brand01Image.png";
import brand2 from "../../assets/brand02Image.png";
import brand3 from "../../assets/brand03Image.png";
import brand4 from "../../assets/brand04Image.png";

import brand1Name from "../../assets/brand01Name.png";
import brand2Name from "../../assets/brand02Name.png";
import brand3Name from "../../assets/brand03Name.png";
import brand4Name from "../../assets/brand04Name.png";

function Section02() {
  return (
    <section className="trusted-section">
      <div className="container text-center">

        <h2 className="trusted-heading">
          Trusted by thousands <br />
          of top DTC <span>brands.</span>
        </h2>

       <div className="brands-row">

  <div className="brand-card">
    <img src={brand1} alt="Run Gum" className="brand-image" />
    <img src={brand1Name} alt="Run Gum name" className="brand-name" />
  </div>

  <div className="brand-card">
    <img src={brand2} alt="Beardbrand" className="brand-image" />
    <img src={brand2Name} alt="Beardbrand name" className="brand-name" />
  </div>

  <div className="brand-card">
    <img src={brand3} alt="Promix" className="brand-image" />
    <img src={brand3Name} alt="Promix name" className="brand-name" />
  </div>

  <div className="brand-card">
    <img src={brand4} alt="Brand 4" className="brand-image" />
    <img src={brand4Name} alt="Brand 4 name" className="brand-name" />
  </div>

</div>

      </div>
    </section>
  );
}

export default Section02;
