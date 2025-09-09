import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Import HashLink
import "./navbar.css";
import { motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleLinkClick = () => setOpen(false);

  return (
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
        zIndex: 1000,
      }}
    >
      <div className="container navbar2 glass-layer">
        <NavLink className="heading-5 color-white" to="/" onClick={handleLinkClick}>
          Balaji
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          id="menu-toggle"
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink className="heading-8" to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink className="heading-8" to="/work" onClick={handleLinkClick}>
            Work
          </NavLink>
          {/* ✅ HashLink for smooth scroll */}
          <HashLink
            smooth
            to="/aboutme#top"
            className="heading-8"
            onClick={handleLinkClick}
          >
            About Me
          </HashLink>
          <a className="heading-8" href="/resume.pdf" download onClick={handleLinkClick}>
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
