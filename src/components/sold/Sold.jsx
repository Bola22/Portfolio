
import React from 'react'
import "./sold.scss"
import { motion } from "framer-motion";

function Sold() {
  return (
    <motion.section className='sold' 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "easeIn", duration: 0.7, bounce: 0.3 }}
    viewport={{ once: true }}>
      <h1>Sold Already?</h1>
      <p>I'm currently looking for new opportunities, so my inbox is always open. Have a question? or you just want to say hi?, feel free to reach out to me. 🤗</p>
      <div className="sold-btn">
        <a href="mailto:animashaunbasit22@gmail.com" className="btn">Send Me An Email</a>
      </div>
    </motion.section>
  )
}

export default Sold
