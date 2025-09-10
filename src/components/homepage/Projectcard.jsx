import React from "react";
import "./Projectsection.css";
import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link"; // ✅ Use HashLink

const Projectcard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ display: "block" }}
    >
      <div className="project-card">
        <HashLink
          smooth
          to={`${props.link}#top`} // ✅ Scrolls to first section
          className="project-content"
          style={{ cursor: "pointer" }}
        >
          <div className="image-wrapper">
            <img
              src={props.imageUrl}
              className="image-mockup-projectsection"
              alt={props.projectName}
            />
          </div>

          <h1 className="heading-4">{props.projectName}</h1>
          <p className="project-section-para">{props.description}</p>

          <motion.button
            className="project-button"
            whileHover={{
              paddingLeft: "24px",
              paddingRight: "24px",
              color: "white",
              backgroundColor: "var(--primary-colour, #e63946) !important",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            View Case Study
          </motion.button>
        </HashLink>
      </div>
    </motion.div>
  );
};

export default Projectcard;
