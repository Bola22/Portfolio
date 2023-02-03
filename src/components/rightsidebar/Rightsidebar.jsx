import React from 'react'
import "./rightsidebar.scss"
import { motion } from "framer-motion";

function Rightsidebar() {
  return (
    <motion.div className='rightsidebar' 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "easeIn", duration: 0.7, bounce: 0.3, delay: 2.0}}
    viewport={{ once: true }}>
        <div className="email-wrapper">
            <a href="mailto:animashaunbasit22@gmail.com">animashaunbasit22@gmail.com</a>
        </div>
    </motion.div>
  )
}

export default Rightsidebar
