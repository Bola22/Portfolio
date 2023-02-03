import { React, useState, useEffect } from "react";
import "./navbar.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from "../../images/logo.png"
import { motion } from "framer-motion";

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        type: "easeIn"
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="home">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="nav-menu">
          <motion.ul
            className="nav-links"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li className="nav-link" variants={item}>
              About
            </motion.li>
            <motion.li className="nav-link" variants={item}>
              Experience
            </motion.li>
            <motion.li className="nav-link" variants={item}>
              Work
            </motion.li>
            <motion.li className="nav-link" variants={item}>
              Contact
            </motion.li>
            <motion.li className="nav-link" variants={item}>
              <a href="https://medium.com/@animashaunbasit22" className="btn">
                Blog
              </a>
            </motion.li>
          </motion.ul>
        </div>

        <div className={sidebar ? "nav-sidebar-open" : "nav-sidebar-close"}>
          <button onClick={showSidebar} className="hamburger">
            {/* <MenuOutlinedIcon className='open-menu' /> */}
            <div className="ham-box">
              <div className="ham-box-inner"></div>
            </div>
          </button>
          <div className="sidebar-menu">
            <nav>
              <ol>
                <li className="sidebar-links">About</li>
                <li className="sidebar-links">Work</li>
                <li className="sidebar-links">Contact</li>
                <li className="sidebar-links"></li>
              </ol>
              <a href="https://medium.com/@animashaunbasit22" className="btn">
                Blog
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
