import "./Section06.css";

function Section06() {
  return (
    <section className="pp-steps-section">
      <div className="container">
        <h2 className="pp-steps-heading">
          Fast launch. Fast results. <br />
          <span>Here’s how.</span>
        </h2>
        <div className="pp-steps-content">

          <div className="pp-steps-left">

            <div className="pp-step muted">
              <span className="pp-step-number">01</span>
              <span className="pp-step-title">Segment</span>
            </div>

            <div className="pp-step muted">
              <span className="pp-step-number">02</span>
              <span className="pp-step-title">Design</span>
            </div>

            <div className="pp-step active">
              <span className="pp-step-number">03</span>
              <div className="pp-step-text">
                <span className="pp-step-title">Send</span>
                <p>
                  One-off announcements or automatically triggered
                  flows. Customers receive their personalized cards
                  within a week.
                </p>
              </div>
            </div>

            <div className="pp-step muted">
              <span className="pp-step-number">04</span>
              <span className="pp-step-title">Convert</span>
            </div>

          </div>

          <div className="pp-steps-right">
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section06;
