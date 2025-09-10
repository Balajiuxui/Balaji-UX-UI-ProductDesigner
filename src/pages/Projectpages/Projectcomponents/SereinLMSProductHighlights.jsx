import React from 'react'
import "./SereinLMSProductHighlights.css"

const SereinLMSProductHighlights = () => {
  const projects = [
    {
      title: "Culture Index",
      description:
        "Visual maturity scale showing where the organization stands in gender inclusion — from Initiate to Accelerator.",
      highlights: [
        "Clear, gamified feedback with color-coded tips and next steps",
        "Encourages action and progression without judgment",
      ],
      imgSrc: "./images/serein1.svg",
    },
    {
      title: "Diversity Metrics",
      description: "Helps HR teams visualize representation across gender and teams.",
      highlights: [
        "Custom filters by year, department, or role",
        "Designed for executives and DEI managers to view impact quickly",
      ],
      imgSrc: "./images/serein2.svg",
    },
    {
      title: "Interactive Learning Modules",
      description:
        "Course screens were designed like a modern dashboard — not like old-school LMS.",
      highlights: [
        "Content in mixed formats: videos, cards, quizzes, and games",
        "Real-time course status and gamified progress bars",
        "Accessibility considerations: color contrast, keyboard nav, large tap areas",
      ],
      imgSrc: "./images/serein3.svg",
    },
    {
      title: "Profile and Certificates",
      description:
        "Users can track course completion and download compliance certificates.",
      highlights: [
        "Simplified layout and card-based history",
        "Auto-generated branding and downloadable PDFs",
      ],
      imgSrc: "./images/serein4.svg",
    },
  ];

  return (
    <section className="LMS-Product-Highlights">
      <div className="container2">
        <h1
          className="heading-3 reveal from-bottom"
          style={{
            paddingTop: "8%",
            color: "var(--third-black, #333)",
            paddingBottom: "8%",
          }}
        >
          LMS Product Highlights
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className="project-container"
            style={{
              paddingTop: index === 0 ? undefined : "42px",
              paddingBottom: index === projects.length - 1 ? "64px" : undefined,
            }}
          >
            <div className="left-project-cotent">
              <h1 className="heading-4">{project.title}</h1>
              <p
                className="body-large"
                style={{
                  color: "var(--fourth-black, #4C4C4C)",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {project.description}
              </p>
              {project.highlights.map((highlight, idx) => (
                <p className="new-style-para" key={idx}>
                  {highlight}
                </p>
              ))}
            </div>
            <div className="svg-container">
              <img src={project.imgSrc} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SereinLMSProductHighlights