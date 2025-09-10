import React from 'react'
import ImpactSection from './Projectcomponents/ImpactSection'
import WhatILearnedSection from './Projectcomponents/WhatILearnedSection'
import Landingprojectsection from './Projectcomponents/Landingprojectsection'

const Foursight = () => {
  return (
    <>
     <Landingprojectsection 
      heading="Designing Safety with Custody Protect"
      para="This case study highlights my work on Custody Protect, a mission-critical application designed for 4sight Labs, USA, to help prevent custodial deaths in prisons. The goal was to create a real-time monitoring system that allows officers and administrators to track inmates’ vitals, movements, and sensor data using wearable IoT devices. With no previous UI to build on, I designed the entire product experience from the ground up — balancing technical complexity with usability, accessibility, and rapid alert response. The result was a clean, alert-first interface that empowers correctional teams to act faster and save lives."
      />
    <ImpactSection 
  impact1="Real-time Alerting- Officers could respond to abnormal vitals in under 2–5 seconds"
  impact2="Usability in Crisis- UI designed for recognition, not recall — saving critical time"
  impact3="Mobile-first Response- 40+ officers used mobile UI with no formal training needed"
  impact4="Accessibility- Contrast ratios, color themes, and icon cues improved alert recognition"
  note="“Based on internal team feedback and field observations.”"
/>
<WhatILearnedSection
  heading="What I Learned (and Loved)"
  items={[
    <>Designing for <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> life-saving outcomes</span> taught me real responsibility in UX</>,
    <>I learned to balance <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> aesthetics with critical functionality</span></>,
    <>Iterating with sensor data helped me build better <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> real-time interfaces</span></>,
    <>Accessibility isn’t a feature — it's a <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> fundamental requirement</span></>
  ]}
  note="Note: This project was designed during my role as a Senior Product Designer at Krishworks Technology and Research Labs Pvt. Ltd. and is publicly listed on their website. All content and visuals are shared for portfolio purposes only."
/>
    </>
   
  )
}

export default Foursight