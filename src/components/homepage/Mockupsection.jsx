import React from 'react';
import "./Homepage.css"
import { LayoutGroup, motion } from "motion/react"
import Reveal from '../reveal/Reveal';
import { useNavigate } from "react-router-dom";



const Mockupsection = () => {
  return (
    <section className='mockup-section'>
    <div className='container'>
        <Reveal direction='up'>
        <h1 className="heading-2 mockup-section-heading"> 
  Designs That Scale Seamlessly Across Devices
</h1>
</Reveal>

 <Reveal direction='up'>
<p className="mockup-section-para body-large">Every design I create is tested and tailored for all screen sizes — desktop, tablet, and mobile. Here's how my interfaces adapt across different platforms without losing usability or brand identity.</p>
</Reveal>

<Reveal direction='up' delay={0.2}>
 <img src='./public/images/mockup.png' alt="Logo" className="image-mockup" />
 <div className="section-divider-2 container"></div>
 </Reveal>

 
    </div>
    </section>
  )
}

export default Mockupsection