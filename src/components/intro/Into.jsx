import React from 'react'
import "./intro.scss"
import Avatar from "../../images/avartar.png"
import Button from "../button/Button"

function Into() {
  return (
    <div className="intro">
      <div className="left">
        <img src={Avatar} alt="Avatar" className='avatar' />
      </div>
      <div className="right">
        <h1>Hello! 👋, I'm Animashaun Basit</h1>
        <h2>FRONT — END DEVELOPER</h2>
        <div className="btn-container">
          <Button text={"Get In Touch"} url={"https://github.com/Bola22"} />
          <Button text={"Learn More"} />
        </div>
      </div>
    </div>
  )
}

export default Into
