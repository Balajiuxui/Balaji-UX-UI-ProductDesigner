import React from "react";
import "./GoalsSection.css"; 


const WhatILearnedSection = ({ heading, items, note }) => {
  return (
    <div className="container2">
      <h1
        className="heading-3"
        style={{ color: "var(--third-black, #333)", paddingTop: "10%" }}
      >
        {heading}
      </h1>

      <div className="leftside-content">
        {items.map((item, index) => (
          <div className="content-list-each" key={index}>
            <img
              src="/icons/listicon.svg"
              alt="Check Icon"
              width="20"
              height="auto"
            />
            <p
              className="heading-8 content-list-each-p"
              style={{ color: "var(--grey-2, #808080)" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      {note && (
        <p
          className="body-small"
          style={{ paddingBottom: "8%", paddingTop: "2%" }}
        >
          {note}
        </p>
      )}
    </div>
  );
};

export default WhatILearnedSection;
