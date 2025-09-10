import React from "react";
import "./SereinMyRoleSection.css";
import "./GoalsSection.css";

const SereinDesignSystemSection = () => {
  return (
    <section className="background-colour">
      <div className="container2">
        <h1
          className="heading-3 reveal from-bottom"
          style={{ paddingTop: "8%", color: "var(--grey5, #CCC)" }}
        >
          Designing the Design System
        </h1>
        <p
          className="body-large left-align reveal from-bottom"
          style={{ color: "var(--grey5, #CCC)", width: "80%" }}
        >
          To make the platform scalable across modules, I created a robust design system in
          Figma:
        </p>

        <div className="card-section reveal from-bottom" style={{ paddingBottom: "6%" }}>
          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/colourtoken.svg" alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--grey6, #D9D9D9)", width: "70%" }}>
              Color tokens for accessibility
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/typo.svg" alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--grey6, #D9D9D9)", width: "100%" }}>
              Type hierarchy for courses and metrics
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/reusable.svg" alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--grey6, #D9D9D9)", width: "100%" }}>
              Reusable components: cards, tabs, dashboards, icons
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/mobileresponsivess.svg" alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--grey6, #D9D9D9)", width: "80%" }}>
              Mobile responsiveness baked in
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <img src="./icons/navigation.svg" alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--grey6, #D9D9D9)", width: "100%" }}>
              Navigation standards for all user types (learner, admin, manager)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SereinDesignSystemSection;
