import React from "react";
import "./SereinMyRoleSection.css";

const leftContent = [
  {
    text: (
      <>
        Built a <span className="highlight">design system</span> for consistent components and scalability
      </>
    ),
  },
  {
    text: (
      <>
        Created the <span className="highlight">marketing website</span> to explain the platform’s value
      </>
    ),
  },
  {
    text: <>Collaborated with stakeholders, developers, and QA teams</>,
  },
];

const rightContent = [
  {
    text: (
      <>
        Designed the entire <span className="highlight">LMS web app</span> — student side and admin dashboard
      </>
    ),
  },
  {
    text: <>Ensured responsive, accessible layouts for real-world use</>,
  },
];

const SereinMyRoleSection = () => {
  return (
    <div className="container2">
      <h1 className="heading-3" style={{ paddingTop: "10%", color: "var(--third-black, #333)" }}>
        My Role in This Journey
      </h1>

      <p className="body-large myrolepara" style={{ color: "var(--secondary-black, #1A1A1A)" }}>
        I worked as the sole UX UI designer and led every stage of the UX/UI process:
      </p>

      <div className="content-listing" style={{ padding: "2% 0 8% 0" }}>
        <div className="leftside-content">
          {leftContent.map((item, index) => (
            <div className="content-list-each" key={index}>
              <img src="./icons/listicon.svg" alt="Check Icon" width="20" height="auto" />
              <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="rightside-content">
          {rightContent.map((item, index) => (
            <div className="content-list-each" key={index}>
              <img src="./icons/listicon.svg" alt="Check Icon" width="20" height="auto" />
              <p className="heading-8 content-list-each-p" style={{ color: "var(--grey-2, #808080)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SereinMyRoleSection;
