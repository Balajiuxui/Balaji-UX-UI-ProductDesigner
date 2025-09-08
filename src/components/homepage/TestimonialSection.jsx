// TestimonialSection.jsx
import React from "react";
import "./Feedback.css";
import { LayoutGroup, motion } from "motion/react"
import Reveal from '../reveal/Reveal';

const testimonials = [
  {
    text: `Stepping into the design world as a fresher in the domain of UI UX, Designr. Balaji served a selfless mentorship to help me accustom to all the latest and required fundamentals. He also helped me broaden my design skills and corrected me at various levels to achieve professionalism.
Despite his league of prolonging projects, he ensured I learn every possible detail and helped my design better products.`,
    name: "Manash",
    role: "UX UI Designer",
    side: "left",
  },
  {
    text: `Balaji possesses exceptional talent as a UX/UI Designer. I worked with him while I was designing the company website and SaaS tool in my previous role. While collaborating with him I learned from his expert understanding of user behavior. His acute design sensibilities and meticulous attention to detail make our collaboration effortless.`,
    name: "Chrysllynn D’Costa",
    role: "Client",
    side: "right",
  },
  {
    text: `I highly endorse Balaji for his exceptional skills and enthusiasm. He is a powerhouse of innovative ideas and possesses the execution prowess to bring any project to life. Balaji's intuitive mind and ability to manage real-time challenges make him an invaluable asset. Having collaborated with him on multiple projects, I can confidently recommend Balaji for any product-based initiatives. His dedication and expertise ensure success in every endeavor.`,
    name: "Priti Naidu",
    role: "Designer",
    side: "left",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <Reveal direction="up">
      <div className="container">
        {/* Title */}
        <div className="title-with-icon paddingclass">
          <img
            src="icons/testimonialicon.svg"
            alt="Testimonial icon"
            className="ux-process-icon"
          />
          <h1 className="heading-4 case-study-title">
            What People Say About Working With Me
          </h1>
        </div>
        {/* Testimonials */}
        <div className="testimonial-section">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial ${item.side}`}
            >
              <p className="quote body-large">"{item.text}"</p>
              <div className="name-role">
                <p className={item.side === "right" ? "name-left" : "name"}>
                  – {item.name}
                </p>
                <p className="role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default TestimonialSection;
