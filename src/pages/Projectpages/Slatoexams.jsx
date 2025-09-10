import React from 'react'
import GoalsSection from './Projectcomponents/GoalsSection'
import ImpactSection from './Projectcomponents/ImpactSection'
import WhatILearnedSection from './Projectcomponents/WhatILearnedSection'
import Landingprojectsection from './Projectcomponents/Landingprojectsection'


const Slatoexams = () => {
  return (
    <>
    <Landingprojectsection
      heading="Designing Exams That Make Students Smile"
      para="This case study focuses on the design of Slato Exams, a mobile-first digital assessment platform built for rural students across India. The goal was to provide a simple, gamified, and accessible experience for students taking exams, while equipping internal teams with a powerful yet easy-to-use admin portal. The result is a scalable product that empowers young learners and supports digital learning in underserved communities."
      />
    <GoalsSection />
    <ImpactSection 
  impact1="Student Access - 85% of students completed exams without adult supervision after first session"
  impact2="Engagement Boost - Test completion rates improved by 40% after adding the coin reward system"
  impact3="Report Clarity - 100% of students received auto-generated certificates and score reports"
  impact4="Team Workflow - Admins reduced exam setup time by 60% using the web portal (no dev support)"
  note="“Based on internal team feedback and field observations.”"
/>

    <WhatILearnedSection
  heading="What I Learned (and Loved)"
  items={[
    <>Designing for <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> first-time tech users</span> requires empathy, not assumptions</>,
    <><span style={{ color: "var(--secondary-black, #1A1A1A)" }}>Gamification</span> adds meaningful motivation — even in simple forms</>,
    <>Admin tools are often invisible, but <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> crucial for scale and sustainability</span></>,
    <>A good design process includes <span style={{ color: "var(--secondary-black, #1A1A1A)" }}> feedback from every layer</span> — student, teacher, ops</>
  ]}
  note="Note: This project was designed during my role as a Senior Product Designer at Krishworks Technology and Research Labs Pvt. Ltd. and is publicly listed on their website. All content and visuals are shared for portfolio purposes only."
/>
    </>
  )
}

export default Slatoexams