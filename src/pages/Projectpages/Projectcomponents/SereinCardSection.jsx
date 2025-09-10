import React from "react";
import "./CardSection.css";

const cardsData = [
  {
    icon: "./icons/Projectserein1.svg",
    text: "Gender equality & anti-harassment compliance",
  },
  {
    icon: "./icons/Projectserein2.svg",
    text: "Inclusive hiring and representation metrics",
  },
  {
    icon: "./icons/Projectserein3.svg",
    text: "Culturally sensitive training with certificates",
  },
  {
    icon: "./icons/Projectserein4.svg",
    text: "Legal education around DEI policies",
  },
];

const SereinCardSection = () => {
  return (
    <div className="container2">
      <h1 className="heading-3" style={{ paddingTop: "8%", color: "var(--third-black, #333)" }}>
        Why This Project Mattered
      </h1>

      <p className="body-large left-align" style={{ color: "var(--secondary-black, #1A1A1A)", width: "80%" }}>
        Serein’s core mission is to educate corporate employees about their
        rights and responsibilities in the workplace. It tackles real issues
        such as:
      </p>

      <div className="card-section">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon-wrapper">
              <img src={card.icon} alt="Icon" className="icon" />
            </div>
            <p className="body-large" style={{ color: "var(--third-black, #333)", width: "100%" }}>
              {card.text}
            </p>
          </div>
        ))}
      </div>

      <p className="heading-5" style={{ textAlign: "center", margin: "24px 0", fontWeight: 500 }}>
        It’s not just another LMS — it’s a platform designed for real cultural
        change in organizations.
      </p>
    </div>
  );
};

export default SereinCardSection;
