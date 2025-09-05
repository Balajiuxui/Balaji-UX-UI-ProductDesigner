import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import "./Homepage.css"
import { LayoutGroup, motion } from "motion/react"
import Reveal from '../reveal/Reveal';
import { useNavigate } from "react-router-dom";


const Landingsection = () => {
    const navigate = useNavigate();
  return (
    <section className='landing'>
        <div className='container'>
             <Reveal direction="up" >
    <h1 className='my-heading'>Designing Digital <br />
      Products with <br />
      {" "}
      <span className="text-white">
        <Typewriter
          words={["Purpose", "Impact", "Innovation", "Value"]}
          loop={true}         // keeps looping
          cursor              // shows the cursor
          cursorStyle="_"     // customize cursor
          typeSpeed={80}      // typing speed (ms)
          deleteSpeed={50}    // backspace speed
          delaySpeed={1000}   // delay before deleting
        />
      </span></h1>
      </Reveal>
    <div className='section-divider'></div>

    <div className='landing-section-below-content'>
        <Reveal direction='right'>
        <p className='body-large body-large-p'> I’m a Senior Product Designer with over 2.5 years of experience
          turning complex problems into user-friendly solutions. I’ve designed
          8+ successful products in domains like EdTech, Smart Homes, and Social
          Impact — all from the ground up.</p>
          </Reveal>

        <Reveal direction='left'>
        <motion.button   whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 }
  }} 
  
  whileTap={{
      scale: 0.8, // shrink a bit when pressed
      transition: { duration: 0.1 },
    }}
    
    className='view-work-btn' 
  onClick={() => navigate("/work")}
  >ViewWork</motion.button></Reveal>
    </div>

         <Reveal direction='right' delay={0.3}>
           <div className="mailid">
        <div className="icon-wrapper">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <a className="mail-id-text body-base" href="mailto:Balajipaulpandian@gmail.com">balajipaulpandian@gmail.com</a>
  </div>
</div>
</Reveal>



      </div>
    </section>
  )
}

export default Landingsection