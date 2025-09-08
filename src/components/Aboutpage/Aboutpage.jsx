// About.jsx
import React from "react";
import "./Aboutpage.css"; // your styles
import LandingAbout from "./Landingabout";
import Tools from "./Toolsuse";
import DesignProcess from "./Designprocesssmall";
import EnjoySection from "./Enjoysection";
import DhoniSection from "./Dhonisection";
import CTASection from "../homepage/Ctasection";


const About = () => {
  return (
    <>
    <LandingAbout />
    <Tools />
    <DesignProcess />
    <EnjoySection />
    <DhoniSection />
    <CTASection />
    </>
  );
};

export default About;
