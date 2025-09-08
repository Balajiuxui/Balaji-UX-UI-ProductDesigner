import React from 'react'
import { LayoutGroup, motion } from "motion/react"
import Landingsection from '../components/homepage/Landingsection'
import Mockupsection from '../components/homepage/Mockupsection'
import Footer from '../components/Footer/Footer'
import UxProcess from '../components/homepage/Uxprocess'
import Projectsection from '../components/homepage/Projectsection'
import CaseStudySection from '../components/homepage/CaseStudySection'
import AboutUs from '../components/homepage/AboutUssection'
import TestimonialSection from '../components/homepage/TestimonialSection'
import CTASection from '../components/homepage/Ctasection'

const Home = () => {
  return (
   <>
   <Landingsection />
   <Projectsection />
   <Mockupsection />
   <UxProcess />
   <CaseStudySection />
   <AboutUs />
   <TestimonialSection />
   <CTASection />
   
 
   </>
  )
}

export default Home
