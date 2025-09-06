// CaseStudySection.jsx
import React from "react";
import "./CaseStudy.css";
import { motion } from "motion/react";
import Reveal from '../reveal/Reveal';

const CaseStudySection = () => {
  return (
    <section className="case-study">
      <div className="container">
        {/* Title Section */}
        <Reveal direction="up">
        <div className="title-with-icon paddingclass">
          <img
            src="icons/casestudyicon.svg"
            alt="Description of icon"
            className="ux-process-icon"
          />
          <h1 className="heading-4 case-study-title">
            Deep Dives — Design Thinking in Action
          </h1>
        </div>
        </Reveal>

        {/* Case Study 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: "block" }}
        >
          <div className="containerwithimage">
            <div className="case-study-container">
              <h1 className="case-study-container-h heading-4">
                Pingis – A Platform for Artists
              </h1>
              <p className="case-study-container-p body-base">
                My first design case study where I explored platform design for
                independent artists (being one myself). This taught me how to
                translate creative workflows into structured, scalable UI.
              </p>
              <button
                className="read-case-stude-button button"
                onClick={() =>
                  window.open(
                    "https://www.behance.net/gallery/157851097/Pingis-UXUI-casestudy",
                    "_blank"
                  )
                }
              >
                Read Case Study
              </button>
            </div>
            <div className="image-wrapper-case">
              <div
                className="case-study-image-box"
                style={{
                  backgroundImage: "url('images/case-pingis.png')",
                }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Case Study 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="containerwithimage">
            <div className="case-study-container">
              <h1 className="case-study-container-h heading-4">
                Design Thinking Challenge – Problem to Product
              </h1>
              <p className="case-study-container-p body-base">
                A concept project where I applied full design thinking
                methodology to take an abstract user need and convert it into a
                working prototype — fast.
              </p>
              <button
                className="read-case-stude-button button"
                onClick={() =>
                  window.open(
                    "https://medium.com/@balajipaulpandian/welcome-to-the-story-of-how-i-designed-a-dining-container-fba87f264200",
                    "_blank"
                  )
                }
              >
                Read Case Study
              </button>
            </div>
            <div className="image-wrapper-case">
              <div
                className="case-study-image-box"
                style={{
                  backgroundImage: "url('images/case-designthinking.png')",
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
