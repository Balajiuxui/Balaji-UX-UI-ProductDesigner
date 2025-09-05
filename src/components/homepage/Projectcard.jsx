import React from "react";
import "./Projectsection.css";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";


const Projectcard = (props) => {
  const navigate = useNavigate();

  return (


    <>
    <motion.div

  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
  style={{ display: "block" }}   // ✅ keep block layout
>

    <div className="project-card">
      <div
        className="project-content"
        onClick={() => navigate(props.link)}
        style={{ cursor: "pointer" }} // ✅ only project-content clickable
      >
        <div className="image-wrapper">
          <img
            src={props.imageUrl}
            className="image-mockup-projectsection"
            alt={props.projectName}
          />
        </div>

        <h1 className="heading-4">
          {props.projectName}
        </h1>
        <p className="project-section-para">
         {props.description}
        </p>

        <motion.button
          className="project-button"
          whileHover={{
            paddingLeft: "24px",
            paddingRight: "24px",
            color: "white",
            backgroundColor: "var(--primary-colour, #e63946) !important",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          onClick={(e) => {
            e.stopPropagation(); // ✅ prevent card click firing
            navigate(props.link);
          }}
        >
          View Case Study
        </motion.button>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Projectcard;
