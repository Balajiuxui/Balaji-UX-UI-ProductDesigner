import React from 'react'
import { LayoutGroup, motion } from "motion/react"

const Reveal = ({ children, direction = "up", delay = 0 }) => {
  // Direction logic
  let x = 0;
  let y = 0;

  if (direction === "up") y = 40;       // from bottom → up
  if (direction === "down") y = -40;    // from top → down
  if (direction === "left") x = 40;     // from right → left
  if (direction === "right") x = -40;   // from left → right

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal