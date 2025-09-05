import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'      
import Work from './pages/Work'
import Aboutme from './pages/Aboutme'

import { motion } from "motion/react"
import Serein from './pages/Projectpages/Serein'
import Footer from './components/Footer/Footer'
import Econet from './pages/Projectpages/Econet'
import Foursight from './pages/Projectpages/Foursight'
import Slatoexams from './pages/Projectpages/Slatoexams'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />   {/* ✅ Navbar stays here so it shows on every page */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/serein' element={<Serein />} />
           <Route path='/econet' element={<Econet />} />
            <Route path='/foursight' element={<Foursight />} />
             <Route path='/slatoexams' element={<Slatoexams />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
