import React from "react";
import "./SereinMyRoleSection.css";

const SereinUnderstandUser = () => {
  return (
    <div className="container2">
      <h1 className="heading-3 reveal from-bottom" style={{ color: "var(--third-black, #333)" }}>
        Understanding the Problem
      </h1>

      <div className="content-listing" style={{ padding: "2% 0 10% 0" }}>
        <div className="leftside-content reveal from-bottom">
          <p className="heading-6">
            Before jumping into visuals, I worked with the client team to understand:
          </p>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              What makes DEI training effective (and engaging)?
            </p>
          </div>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              How do corporate teams monitor DEI progress?
            </p>
          </div>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              What do employees need to trust and use the LMS?
            </p>
          </div>
        </div>

        <div className="rightside-content reveal from-bottom">
          <p className="heading-6">I mapped these into four design priorities:</p>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Clarity:</span> No jargon-heavy UI
            </p>
          </div>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Inclusivity:</span> Soft visuals and gender-neutral themes
            </p>
          </div>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Scalability:</span> A system that works for teams of 10 or 10,000
            </p>
          </div>

          <div className="content-list-each">
            <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
            <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
              <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Compliance:</span> Every action leads to reportable, measurable outcomes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SereinUnderstandUser;

