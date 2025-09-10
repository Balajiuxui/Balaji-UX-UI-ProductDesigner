import React from 'react'
import "./SereinAdminPortalSection.css"

const SereinAdminPortalSection = () => {
  const tools = [
    "Upload exams",
    "Track submissions",
    "Manage users for education and sales",
  ];

  const features = [
    "Role-based access (sales, education, ops)",
    "Intuitive layouts with clear actions",
    "Simple filters and report views",
    "Easy scaling for future use",
  ];

  return (
    <div
      className="Designing-a-Simple-MVP-section reveal from-bottom"
      style={{ background: "var(--secondary-black, #1A1A1A)" }}
    >
      <div className="container2">
        <h1
          className="heading-3"
          style={{ color: "var(--grey5, #CCC)", paddingTop: "10%" }}
        >
          Building the Admin Portal
        </h1>

        <div className="totalcontent" style={{ paddingBottom: "7%", display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div className="totalleftsidecontent" style={{ flex: 1, minWidth: "300px" }}>
            <div className="leftside-content">
              <h2 className="heading-6" style={{ color: "var(--grey5, #CCC)" }}>
                The internal team needed tools to:
              </h2>
              {tools.map((tool, index) => (
                <div className="content-list-each" key={index}>
                  <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
                  <p className="heading-8 content-list-each-p" style={{ color: "var(--grey6, #D9D9D9)" }}>
                    {tool}
                  </p>
                </div>
              ))}
            </div>

            <div className="leftside-content">
              <h2 className="heading-6" style={{ color: "var(--grey5, #CCC)", paddingTop: "24px" }}>
                Admin Design Features:
              </h2>
              {features.map((feature, index) => (
                <div className="content-list-each" key={index}>
                  <img src="./icons/listicon.svg" alt="Check Icon" width="20" />
                  <p className="heading-8 content-list-each-p" style={{ color: "var(--grey6, #D9D9D9)" }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="totalrightsidecontent imageclas2" style={{ flex: 1, minWidth: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="./images/sereinwebsite.png" alt="Admin Portal Screenshot" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SereinAdminPortalSection