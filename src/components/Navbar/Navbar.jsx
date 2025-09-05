import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import './navbar.css'
import { motion } from "motion/react"
import { useEffect } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
      setShowNav(true);  // 👉 show nav when scrolling down
    } else {
      setShowNav(false); // 👉 hide nav when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


    // Animation states
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };



  return (
    <>
    <motion.nav
     variants={navVariants}
      initial="hidden"
      animate={showNav ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        // background: "#111",
        // color: "#fff",
        // padding: "1rem 2rem",
        zIndex: 1000,
      }}
    >
        <div class="container navbar2 glass-layer">
    <NavLink className="heading-5 color-white" to="/">Balaji</NavLink>
    <button className="menu-toggle"
            onClick={() => setOpen(!open)} id="menu-toggle">&#9776;</button>

    <div className={`nav-links ${open ? "open" : ""}`}>
      <NavLink className="heading-8" to="/">Home</NavLink>
      <NavLink className="heading-8" to="/work">Work</NavLink>
      <NavLink className="heading-8" to="/aboutme">About Me</NavLink>
      {/* Resume download stays <a> */}
      <a className="heading-8" href="/resume.pdf" download>Resume</a>
    </div>
  </div>
    </motion.nav>
    </>

  )
}

export default Navbar