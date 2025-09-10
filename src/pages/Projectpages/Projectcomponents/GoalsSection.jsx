import React from "react";
import "./GoalsSection.css"; // import the CSS you wrote

export default function GoalsSection() {
  return (
    <>
      <div className="container2">
        <h1
          className="heading-3"
          style={{ color: "var(--third-black, #333)", paddingTop: "8%" }}
        >
          Why This Project Mattered
        </h1>
        <p className="body-large para2">
          In rural India, students often lack access to structured digital
          assessments. Existing platforms are typically built for urban,
          tech-savvy users — not for children with limited device access or
          digital literacy.
        </p>
      </div>

      <div className="container2 goalsection">
        <h1
          className="heading-6"
          style={{ color: "var(--third-black, #333)", paddingTop: "24px" }}
        >
          Our goals:
        </h1>

        <div className="main-warrped">
          {/* Right side */}
          <div className="right">
            <p
              className="heading-8"
              style={{ color: "var(--grey-2, #808080)", textAlign: "center" }}
            >
              Build a mobile-first exam app that students can use{" "}
              <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>
                independently
              </span>
            </p>
            <img
              className="mockup-goals-img"
              src="./images/iPhone 12 Mockup 1.png"
              alt="Exam App Mockup"
            />
          </div>

          {/* Left side */}
          <div className="leftside">
            <div className="lefttop">
              <p
                className="heading-8"
                style={{ color: "var(--grey-2, #808080)", textAlign: "center" }}
              >
                Make exams{" "}
                <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>
                  engaging and motivating
                </span>{" "}
                with a reward system
              </p>
              <img
                className="mockup-goals-img"
                src="./images/GOALSSECTIONICON1.svg"
                alt="Reward System Icon"
              />
            </div>

            <div className="lefttop">
              <p
                className="heading-8"
                style={{ color: "var(--grey-2, #808080)", textAlign: "center" }}
              >
                Allow the Slato team to{" "}
                <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>
                  manage users, content, and reports
                </span>{" "}
                with ease
              </p>
              <img
                className="mockup-goals-img"
                src="./images/GOALSSECTIONICON2.svg"
                alt="Management Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
