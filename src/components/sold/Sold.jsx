
import React from 'react'
import Button from '../button/Button'
import "./sold.scss"

function Sold() {
  return (
    <div className='sold'>
      <h1 className='titleSection'>Sold Already?</h1>
      <p>I'm currently looking for new opportunities, so my inbox is always open. Have a question? or you just want to say hi?, feel free to reach out to me. 🤗</p>
      <div className="soldBtn">
        <Button text={"Send Me An Email"} url={"animashaunbasit22@gmail.com"}  className="btn" />
        <Button text={"View My Resume"} className="btn" />
      </div>
    </div>
  )
}

export default Sold
