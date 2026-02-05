import "./Section07.css";
import profile01 from "../../assets/profilepicture01.jpg";
import profile02 from "../../assets/profilepicture02.jpg";
import profile03 from "../../assets/profilepicture03.jpg";

function Section07() {
  return (
    <section className="pp-social-section">
      <div className="container">

        {/* HEADING */}
        <h2 className="pp-social-heading">
          PostPilot is 🔥 for <span>DTC</span>
        </h2>

        {/* CARDS */}
        <div className="pp-social-cards">

          <div className="pp-social-card">
            <div className="pp-social-header">
              <img src={profile01} alt="profile" />
              <div>
                <strong>Helen Guo</strong>
                <span>@HelenGuo_</span>
              </div>
              <i className="pp-twitter">𝕏</i>
            </div>
            <p>
              Using PostPilot for years. Good re-engagement.
              And you can get creative with messaging.
            </p>
          </div>

          <div className="pp-social-card">
            <div className="pp-social-header">
              <img src={profile02} alt="profile" />
              <div>
                <strong>Nathan Woods</strong>
                <span>@HeyNathan</span>
              </div>
              <i className="pp-twitter">𝕏</i>
            </div>
            <p>
              I’ve done some rad winbacks to 1-day since purchase
              that have worked great.
            </p>
          </div>

          <div className="pp-social-card">
            <div className="pp-social-header">
              <img src={profile03} alt="profile" />
              <div>
                <strong>Chris Lander</strong>
                <span>@chris_basis</span>
              </div>
              <i className="pp-twitter">𝕏</i>
            </div>
            <p>
              +1 for PostPilot. Have only done a bit,
              but it’s been wonderful so far.
            </p>
          </div>

          <div className="pp-social-card">
            <div className="pp-social-header">
              <img src={profile01} alt="profile" />
              <div>
                <strong>ERUSA</strong>
                <span>@ERUSA</span>
              </div>
              <i className="pp-twitter">𝕏</i>
            </div>
            <p>
              PostPilot killer tool if you layer in
              proper messaging.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="pp-social-cta">
          <button className="pp-btn pp-btn-orange">
            TRY IT RISK-FREE
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section07;
