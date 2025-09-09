import React from "react";
import "./Aboutpage.css"; // your styles

const tools = [
  { src: "/icons/figma-svgrepo-com 1.svg", alt: "Figma Icon", name: "Figma" },
  { src: "/icons/adobe-svgrepo-com 1.svg", alt: "Adobe XD Icon", name: "Adobe XD" },
  { src: "/icons/language-html5-svgrepo-com 1.svg", alt: "HTML Icon", name: "HTML" },
  { src: "/icons/css3 1.svg", alt: "CSS Icon", name: "CSS" },
  { src: "/icons/js-svgrepo-com 1.svg", alt: "JavaScript Icon", name: "JavaScript" },
  { src: "/icons/notion-svgrepo-com 1.svg", alt: "Notion Icon", name: "Notion" },
  { src: "/icons/github-svgrepo-com 1.svg", alt: "GitHub Icon", name: "GitHub" },
];

const Tools = () => {
  return (
    <section className="tools-using">
    
      <div className="container">
        {/* Title */}
        <div className="title-with-icon paddingclass reveal from-bottom">
          <img
            src="icons/iconfortoolsused.svg"
            alt="Tools Icon"
            className="ux-process-icon"
          />
          <h1 className="heading-4 case-study-title">
            Tools I Use to Bring Ideas to Life
          </h1>
        </div>

        {/* Tools List */}
        <div className="all-icon reveal from-bottom">
          {tools.map((tool, index) => (
            <div key={index} className="icon-text">
              <img src={tool.src} alt={tool.alt} width="100" height="100" />
              <p className="body-large icon-p">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
