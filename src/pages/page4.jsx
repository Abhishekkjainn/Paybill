export default function Page4() {
  return (
    <div className="page3">
      {/* Section Tagline */}
      <div className="page3tag">
        <div className="circle-small"></div>
        <div className="tagname">How it Works?</div>
      </div>

      {/* Section Header */}
      <div className="page3head">
        How do we
        <span className="italics blue">
          <i> Work?</i>
        </span>
      </div>

      {/* Steps Container */}
      <div className="workdiv">
        {/* Step 1 */}
        <div className="step step1">
          <div className="stepicon">
            <img
              src="/register-black.png"
              alt="Register Now"
              className="stepiconimg"
            />
          </div>
          <div className="stepheading">1. Register & Set Up</div>
          <div className="stepdesc">
            Join us in a few clicks! Create your account, add your business
            details, and set up your inventory with ease—no technical expertise
            needed.
          </div>
        </div>

        {/* Step 2 */}
        <div className="step step2">
          <div className="stepicon">
            <img
              src="/generate.png"
              alt="Generate Bills"
              className="stepiconimg"
            />
          </div>
          <div className="stepheading">2. Generate & Share</div>
          <div className="stepdesc">
            Create professional digital bills in seconds. Add products,
            calculate totals, and send them directly to your customers via SMS.
          </div>
        </div>

        {/* Step 3 */}
        <div className="step step3">
          <div className="stepicon">
            <img
              src="/track.png"
              alt="Track Progress"
              className="stepiconimg"
            />
          </div>
          <div className="stepheading">3. Track & Grow</div>
          <div className="stepdesc">
            Access all your bills and insights in one dashboard. Stay organized
            and focus on scaling your business with ease.
          </div>
        </div>
      </div>
    </div>
  );
}
