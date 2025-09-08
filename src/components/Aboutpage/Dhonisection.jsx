import React from "react";
import Reveal from "../reveal/Reveal"; // adjust path as needed
// import "./DhoniSection.css"; // your CSS file
import "./Aboutpage.css"; // your styles

const DhoniSection = () => {
  return (
    <div className="container">
      <div className="leftandmsdimag">
        {/* Left Content */}
        <Reveal direction="left">
          <div className="left-content-msdhoni">
            <h1 className="heading-3">What M.S. Dhoni Taught Me About Design</h1>
            <h2 className="heading-7">
              If there’s one person who inspires how I work — it’s MS Dhoni.
            </h2>
            <p className="body-base">
              They call him Captain Cool — known for his ability to stay calm under
              pressure, lead with composure, and make smart decisions in real-time.
              As a designer, I try to channel the same:
            </p>

            <div className="clarity-quote-add">
              <div className="clarity-quote body-large">
                Prioritize clarity over chaos
              </div>
              <div className="clarity-quote body-large">
                Trust intuition backed by insight
              </div>
              <div className="clarity-quote body-large">
                Move fast without losing focus
              </div>
              <div className="clarity-quote body-large">
                Lead quietly, let the work speak
              </div>
              <div className="clarity-quote body-large">
                Prioritize clarity over chaos
              </div>
            </div>

            <div className="heading-4 ms-dhoni">
              "You don’t play for the crowd. You play for the country."
              <br />— M.S. Dhoni
              <br />I don’t design for trends — I design for users.
            </div>
          </div>
        </Reveal>

        {/* Right Image */}
        <Reveal direction="right">
          <div className="parent-ms-dhoni-img">
            <img src="/images/ms-dhoni.png" alt="M.S. Dhoni" />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default DhoniSection;
