import { React, useState, useEffect } from "react";
import "./navbar.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from "../../images/logo.png"

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header >
      <nav className="navbar">
      <div className="logo">
        <a href="/" className='home'>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav-menu">
        
        <ul className='nav-links'>
          <li className="nav-link">About</li>
          <li className="nav-link">Experience</li>
          <li className="nav-link">Work</li>
          <li className="nav-link">Contact</li>
        </ul>


        <a href="https://medium.com/@animashaunbasit22" className="btn">Blog</a>
      </div>

      <div className={sidebar ? "nav-sidebar-open" :"nav-sidebar-close" } >
        <button onClick={showSidebar} className="hamburger">
          {/* <MenuOutlinedIcon className='open-menu' /> */}
          <div className="ham-box">
            <div className="ham-box-inner"></div>
          </div>
        </button>
        <div className="sidebar-menu">
          <nav>
            <ol>
              <li className="sidebar-links">
              About
              </li>
              <li className="sidebar-links">
              Work
              </li>
              <li className="sidebar-links">
              Contact
              </li>
              <li className="sidebar-links">
    
              </li>
            </ol>
            <a href="https://medium.com/@animashaunbasit22" className="btn">Blog</a>
          </nav>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Navbar
