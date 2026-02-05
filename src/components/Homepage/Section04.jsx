import "./Section04.css";

import obviLogo from "../../assets/featureImage.png";
import overlandLogo from "../../assets/featureImage02.png";
import paragonLogo from "../../assets/featureImage03.png";

function Section04() {
  return (
    <section className="features-section">
      <div className="container">

        <h2 className="features-heading">
          PostPilot makes it a <span>cinch</span> to <br />
          send personalized, profit- <br />
          generating postcards.
        </h2>

        <div className="feature-block left">
          <h3>
            <span>Powerful</span><br />
            acquisition <br /> & retention
          </h3>

          <p>
            Send one-off or triggered campaigns to customers
            & prospects. Target email leads with MailMatch™.
          </p>

          <div className="quote-card">
            <span className="quote-mark">“</span>
            <p className="quote-text">
              It’s like Klaviyo for direct mail. The results are
              absolutely insane.
            </p>

            <div className="quote-footer">
              <span className="quote-author">
                Ash Melwani, CMO
              </span>
              <img src={obviLogo} alt="obvi" className="quote-logo" />
            </div>
          </div>
        </div>

        <div className="feature-block right">
          <h3>
            <span>Fight back</span> against iOS <br />
            updates, jacked-up <br />
            CPCs & spam folders
          </h3>

          <p>
            Deliver your message to <b>all</b> of your customers —
            for less than the cost of a click.
          </p>

          <div className="quote-card">
            <span className="quote-mark">“</span>
            <p className="quote-text">
              PostPilot is our new weapon against sinking email
              engagement and rising PPC costs. The results and
              ROI have been outstanding.
            </p>

            <div className="quote-footer">
              <span className="quote-author">
                Leah Keith, GM
              </span>
              <img src={paragonLogo} alt="Overland" className="quote-logo" />
            </div>
          </div>
        </div>

        <div className="feature-block left">
          <h3>
            Done for <span>you</span>
          </h3>

          <p>
            From design & strategy to stamp-licking, our
            ecommerce experts help you every step of the way.
          </p>

          <div className="quote-card">
            <span className="quote-mark">“</span>
            <p className="quote-text">
              The team is so knowledgeable and beyond helpful.
              I’m blown away by their communication, detail,
              and attentiveness. Definitely worth a try.
            </p>

            <div className="quote-footer">
              <span className="quote-author">
                Holly Davies, Marketing Director
              </span>
              <img src={overlandLogo} alt="Paragon" className="quote-logo" />
            </div>
          </div>

          <button className="pp-btn pp-btn-orange">
            TRY IT RISK-FREE
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section04;
