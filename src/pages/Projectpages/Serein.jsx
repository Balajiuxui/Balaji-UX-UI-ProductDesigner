import React from 'react'
import Landingprojectsection from './Projectcomponents/Landingprojectsection'
import RolesAndTitles from './Projectcomponents/Roletitle'

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



    </div>
  )
}

export default Serein