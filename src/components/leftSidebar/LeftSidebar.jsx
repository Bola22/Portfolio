import React from 'react'
import "./leftsidebar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion";

function LeftSidebar() {
  return (
    <motion.div className='left-sidebar' 
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "easeIn", duration: 0.7, bounce: 0.3, delay: 2.0}}
    viewport={{ once: true }}>
      <ul className="social-icons">
        <li>
            <a href="https://github.com/Bola22">
            <GitHubIcon className='icon'/>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/Basit_Bola">
            <TwitterIcon className='icon'/>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/basit-animashaun-283482260/">
            <LinkedInIcon className='icon'/>
            </a>
        </li>
        <li>
            <a href="">
            <InstagramIcon className='icon'/>
            </a>
        </li>
      </ul>
    </motion.div>
  )
}

export default LeftSidebar
