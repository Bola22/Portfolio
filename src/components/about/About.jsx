import React from 'react'
import "./about.scss"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function about() {
  return (
    <div className='about'>
      <h1 className='titleSection'>About Me</h1>
      <AnimationOnScroll animateIn="animate__fadeInBig">
      <p>I'm a Front-end developer and Software Engineer who is passionate about creating seamless pixel-perfect UI/UX experiences on the web while ensuring maximum accessibility, user-friendliness, and usability.</p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInBig">
      <p>I currently work as a Front-end Developer at IVA Africa, a property tech startup . I'm an exceptional team player with an analytical approach to developing useful solutions, enjoy building eye-catchy accessible user interfaces. A software developer focused majorly on the front-end side of the web to use my skills in HTML, CSS, JavaScript, and React to troubleshoot complex problems, and assist in the timely completion of projects.</p>
      </AnimationOnScroll>
      
    </div>
  )
}

export default about
  