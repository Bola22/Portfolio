import React from 'react'
import "./intro.scss"
import { motion } from "framer-motion";

function Into() {


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: "spring",
        delay: 1.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="intro">
      <motion.div className="right" variants={container}
            initial="hidden"
            animate="show">
        <motion.h4 className='span' variants={item}>Hi👋, my name is</motion.h4>
        <motion.h1 variants={item} >Animashaun Basit.</motion.h1>
        <motion.h1 className='into-title-2' variants={item} >FRONT-END DEVELOPER.</motion.h1>
        <motion.p variants={item} >Hello! My name is Basit and I enjoy creating things that live on the internet. <br />  I'm a Front-end developer and Software Engineer who is passionate about creating seamless pixel-perfect UI/UX experiences on the web while ensuring maximum accessibility, user-friendliness, and usability.</motion.p>
        <motion.div className="btn-container" variants={item} >
          <a href="https://drive.google.com/file/d/1X5sjdjZ5sxojLDT8vBG3Jv_xPHnaxnJK/view?usp=sharing" className="btn">My Resume</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Into
