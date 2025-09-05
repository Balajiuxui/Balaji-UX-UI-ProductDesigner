import React from 'react'
import { LayoutGroup, motion } from "motion/react"
import Landingsection from '../components/homepage/Landingsection'
import Mockupsection from '../components/homepage/Mockupsection'
import Footer from '../components/Footer/Footer'
import UxProcess from '../components/homepage/Uxprocess'
import Projectsection from '../components/homepage/Projectsection'

const Home = () => {
  return (
   <>
   <Landingsection />
   <Projectsection />
   <Mockupsection />
   <UxProcess />
   
 
   </>
  )
}

export default Home
