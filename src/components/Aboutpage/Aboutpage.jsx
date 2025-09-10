// About.jsx
import React from "react";
import "./Aboutpage.css"; // your styles
import LandingAbout from "./Landingabout";
import Tools from "./Toolsuse";
import EnjoySection from "./Enjoysection";
import DhoniSection from "./Dhonisection";
import CTASection from "../homepage/Ctasection";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
    window.scrollTo(0, 0);   // ✅ force scroll reset when component mounts
  }, []);

  return (
    <div key={window.location.pathname} id="about"> 
    <LandingAbout />
    <Tools /> 
    <EnjoySection />
    <DhoniSection />
    <CTASection />
    </div>
  );
};

export default About;
