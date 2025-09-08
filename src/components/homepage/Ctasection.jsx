// CTASection.jsx
import React from "react";
import "./CTASection.css";
import Reveal from '../reveal/Reveal';

const CTASection = () => {
  return (
    <section className="section-CTA">
        <Reveal direction="up">
      <div className="container">
        <div className="conta-CTA">
          {/* Left text block */}
          <div className="first-section-CTA">
            <h1 className="section-CTA-heading heading-2">
              Have a Project or Role in Mind? Let’s Talk.
            </h1>
            <p className="body-large section-CTA-para"  style={{ color: "var(--white2, #E5E5E5)" , paddingRight:"10%"}}>
              I’m currently open to full-time product design roles. If you're
              building something impactful and need a designer who blends speed,
              empathy, and execution — I’d love to connect.
            </p>
          </div>

          {/* Contact details & button */}
          <div className="withbuttom">
            <div className="contact-details-warp">
              <div className="contact-detailes">
                <div className="title">
                  <h1 className="heading-6 content-detailes-heading">
                    Phone Number
                  </h1>
                </div>
                <a href="tel:+919094923747" className="detail-CTA">
                  +91 90949 23747
                </a>
              </div>

              <div className="contact-detailes">
                <div className="title">
                  <h1 className="heading-6 content-detailes-heading">
                    Email ID
                  </h1>
                </div>
                <a
                  href="mailto:balajipaulpandian@gmail.com"
                  className="detail-CTA"
                >
                  balajipaulpandian@gmail.com
                </a>
              </div>

              <div className="contact-detailes">
                <div className="title">
                  <h1 className="heading-6 content-detailes-heading">
                    LinkedIn
                  </h1>
                </div>
                <a
                  href="https://www.linkedin.com/in/balaji-p-397256218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-CTA"
                >
                  Balaji P
                </a>
              </div>
            </div>

            {/* Resume download */}
            <div>
              <a
                href="icons/casestudyicon.svg"
                download
                className="about-us-download button download"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
