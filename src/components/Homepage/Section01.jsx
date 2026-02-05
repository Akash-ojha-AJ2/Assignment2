import "./Section01.css";
import Image01 from "../../assets/HeaderImage01.png.png";
import Image02 from "../../assets/HeaderImage02.png.png";


function Section01() {
  return (
    <section className="hero-section">
      <div className="container-fluid px-5">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-left">
            <h1>
              Meet your <br />
              <span className="highlight">favorite</span> new (old) <br />
              marketing channel.
            </h1>

            <p className="hero-sub">
              Remarkable results. Easier than email.
              Postcard marketing reinvented for modern ecommerce.
            </p>

            <div className="d-flex align-items-center gap-4 mt-4">
              <button className="pp-btn pp-btn-orange">
                TRY IT RISK-FREE
              </button>

              <div className="rating">
              
                ⭐⭐⭐⭐⭐ <div>5.0 Shopify Rating</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 hero-right">

            <img src={Image02} className="postcard-img" alt="" />
            <img src={Image01} className="trend-image" alt=""/>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Section01;
