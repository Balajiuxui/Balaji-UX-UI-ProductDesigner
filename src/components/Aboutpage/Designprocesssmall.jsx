import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Aboutpage.css"; // your styles
import Reveal from "../reveal/Reveal"; 

const DesignProcess = () => {
  return (
    <section className="designprocess-small-section">
        <Reveal direction="up">
      <div className="container designprocess-small-section1">
        <div className="all-contents reveal from-bottom">
          <h1 className="all-contents-h1 heading-2">How I Think About Design</h1>
          <h2 className="heading-7 all-contents-h2">
            I approach problems with empathy, speed, and clarity — guided by
            Design Thinking and Lean UX principles.
          </h2>
          <p className="body-large all-contents-p">
            “I believe in solving the right problem, not just making things look
            good. I research fast, test early, and iterate with purpose.”
          </p>

          {/* Anchor link to home page section */}
          <HashLink smooth to="/#design-process" className="cta-button button">
  Explore My Process →
</HashLink>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default DesignProcess;
