import React from "react";
import "./Impactsection.css";

const ImpactSection = ({ note, ...props }) => {
  // props may include impact1, impact2, ... impactN
  const impacts = props || {}; // default to empty object

  const impactLines = Object.keys(impacts)
    .filter((key) => key.startsWith("impact") && impacts[key])
    .map((key) => impacts[key]);

  return (
    <div className="container2">
      <h1
        className="heading-3"
        style={{ color: "var(--third-black, #333)", paddingTop: "10%" }}
      >
        The Impact We Made
      </h1>

      <div className="impact-content-group">
        {impactLines.map((line, index) => (
          <div className="content-impact" key={index}>
            <img src="./icons/starticonimpaxct.svg" alt="star" width="20" />
            <p className="Impact-body-test">{line}</p>
          </div>
        ))}
      </div>

      {note && <p className="body-small">{note}</p>}
    </div>
  );
};

export default ImpactSection;
