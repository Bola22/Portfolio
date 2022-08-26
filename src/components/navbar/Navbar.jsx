import React from 'react'
import "./navbar.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
        <span>Basit</span>
        </div>
      </div>
      <div className="right">
        <button className="hamburger">
          <MenuOutlinedIcon className='menu' />
        </button>
      </div>
    </div>
  )
}

export default navbar
