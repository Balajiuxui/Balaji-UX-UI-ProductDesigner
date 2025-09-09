import React from 'react';
import "./Homepage.css"
import { LayoutGroup, motion } from "motion/react"
import { useNavigate } from "react-router-dom";



const Mockupsection = () => {
  return (
    <section className='mockup-section'>
    <div className='container'>
       
        <h1 className="heading-2 mockup-section-heading"> 
  Designs That Scale Seamlessly Across Devices
</h1>


<p className="mockup-section-para body-large">Every design I create is tested and tailored for all screen sizes — desktop, tablet, and mobile. Here's how my interfaces adapt across different platforms without losing usability or brand identity.</p>



 <img src='/images/mockup.png' alt="Logo" className="image-mockup" />
 <div className="section-divider-2 container"></div>


 
    </div>
    </section>
  )
}

export default Mockupsection