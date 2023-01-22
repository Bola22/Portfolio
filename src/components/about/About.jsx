import React from 'react'
import "./about.scss"
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import profile from "../../images/profile.jpg";


function about() {
  return (
    <section className="about">
      <h2 className="titleSection">About Me</h2>
      <div className="inner">
      <div className="about-text">
      <p>
        I currently work per-time as a Front-end Developer at{" "}
        <a href="" className="span">
          IVA Africa
        </a>
        , I'm an exceptional team player with an analytical approach to
        developing useful solutions, enjoy building eye-catchy accessible user
        interfaces. A software developer focused majorly on the front-end side
        of the web to use my skills in HTML, CSS, JavaScript, and React to
        troubleshoot complex problems, and assist in the timely completion of
        projects. <br /> Here are a few technologies I’ve been working with
        recently :
      </p>
      
      <div className="stack-list">
      <ul >
        <li className="stack">
          JavaScript (ES6+)
        </li>
        <li className="stack">
          React
        </li>
        <li className="stack">
          Vue
        </li>
        <li className="stack">
          TypeScript
        </li>
      </ul>

      <ul >
        <li className="stack">
          Tailwind
        </li>
        <li className="stack">
          Framer motion
        </li>
        <li className="stack">
          Next js
        </li>
        <li className="stack">
          python
        </li>
      </ul>
      </div>


      </div>

      <div className="about-img">
        <div className="img-wrapper">
          <img src={profile} alt="" />
        </div>
      </div>
      </div>
    </section>
  );
}

export default about
  