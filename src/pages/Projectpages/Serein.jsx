import React from 'react'
import Landingprojectsection from './Projectcomponents/Landingprojectsection'
import RolesAndTitles from './Projectcomponents/Roletitle'

import SereinCardSection from './Projectcomponents/SereinCardSection'
import SereinMyRoleSection from './Projectcomponents/SereinMyRoleSection'
import SereinUnderstandUser from './Projectcomponents/SereinUnderstandUser'
import SereinDesignSystemSection from './Projectcomponents/SereinDesignSystem'
import SereinLMSProductHighlights from './Projectcomponents/SereinLMSProductHighlights'
import SereinAdminPortalSection from './Projectcomponents/SereinAdminPortalSection'
import ImpactSection from './Projectcomponents/ImpactSection'
import WhatILearnedSection from './Projectcomponents/WhatILearnedSection'


const Serein = () => {

  
  return (
    <div>
      <Landingprojectsection 
      heading="Empowering Inclusive Learning with Serein LMS"
      para="Designed Serein LMS, a corporate training platform for workplace safety, gender rights, and DEI. Led the full product design, including design system, LMS web app, and marketing site. Now used by companies like TATA, Siemens, Flipkart, and Spotify."
      />

      <RolesAndTitles
  role={{ title: "Role", value: "Senior Product Designer" }}
  year={{ title: "Year", value: "2023-Present" }}
  platforms={{ title: "Platforms", value: "	Web Application (LMS), Super Admin Portal, Website " }}
  industry={{ title: "Company", value: "Krishworks Technology and Research Labs Pvt. Ltd." }}
  tools={{ title: "Tools", value: "Figma, FigJam, Illustrator, Photoshop" }}
/>

<img src="/images/sereinmockupproject.png" alt="Mobile Exam UI Screenshot" style={{marginTop:"5%"}}/>
<SereinCardSection />
<SereinMyRoleSection />
<SereinUnderstandUser />
<SereinDesignSystemSection />
<SereinLMSProductHighlights />
<SereinAdminPortalSection />
<ImpactSection 
  impact1="UX Consistency - Design system streamlined new feature rollouts and dev handoff"
  impact2="Learning Completion- 30–40% increase in course completion reported by internal pilots"
  impact3="Admin Usability- HR teams could configure metrics and generate reports without training"
  impact4="Brand Perception- Soft, inclusive design aligned with DEI mission and user comfort"
  note="“Based on internal team feedback and field observations.”"
/>
<WhatILearnedSection
  heading="What I Learned (and Loved)"
  items={[
    <>How to design for <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>sensitive topics</span> like harassment and gender inclusion</>,
    <>Importance of visual language when users are from diverse cultural and corporate backgrounds</>,
    <>Balancing enterprise compliance with approachable UX</>,
    <>That <span style={{ color: "var(--secondary-black, #1A1A1A)" }}>internal admin tools</span> are just as important as learner-facing design</>
  ]}
  note="Note: This project was designed during my role as a Senior Product Designer at Krishworks Technology and Research Labs Pvt. Ltd. and is publicly listed on their website. All content and visuals are shared for portfolio purposes only."
/>



    </div>
  )
}

export default Serein