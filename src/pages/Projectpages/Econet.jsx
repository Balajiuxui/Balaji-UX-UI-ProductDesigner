import React from 'react'
import ImpactSection from './Projectcomponents/ImpactSection'
import WhatILearnedSection from './Projectcomponents/WhatILearnedSection'
import Landingprojectsection from './Projectcomponents/Landingprojectsection'

const Econet = () => {
  return (
    <>
    <Landingprojectsection 
      heading="Designing Smart Living for Canada"
      para="Econet is a smart home management platform designed from scratch for the Canadian market, offering users complete control over appliances, lighting, temperature, and automated routines. I led the entire design process — from research to responsive UI — creating an intuitive, visually rich experience backed by 3D illustrations, activity-focused flows, and custom iconography."
      />
    <ImpactSection 
  impact1="Usability - Activity-first design matched real-world use cases"
  impact2="Scalability - Modular components adapted easily for new features/devices"
  impact3="Visual Identity - Custom 3D visuals and icons enhanced brand and user confidence"
  impact4="Performance - Mobile-first designs ensured speed and clarity across screen sizes"
  note="“Based on internal team feedback and field observations.”"
/>

<WhatILearnedSection
  heading="What I Learned (and Loved)"
  items={[
    <><span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Design maturity </span>shows when your early ideas scale without breaking</>,
    <>Visuals (like 3D models) can <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> build user trust in invisible tech</span></>,
    <><span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Health setbacks can’t stop clarity-driven design</span></>,
    <>Every toggle, screen, and slider is a part of someone’s daily life — and must feel effortless<span style={{ color: "var(--secondary-black, #1A1A1A)" }}></span></>
  ]}
  note="Note: This project was designed during my role as a Senior Product Designer at Krishworks Technology and Research Labs Pvt. Ltd. and is publicly listed on their website. All content and visuals are shared for portfolio purposes only."
/>


    </>
  )
}

export default Econet