import React from 'react'
import "./project.scss"
import Tiles from '../tiles/Tiles'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from '../button/Button'

function project() {
  return (
    <div className='project'>
      <h1 className='titleSection'>Projects</h1>
      <div className="project-tiles">

      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <Tiles 
        projectTitle={"Get help Fast App"}
        tools={"React, SCSS"}
        description={'Web based medical emergency solution'}
        gitUrl={"https://github.com/Bola22/Admin-Dashboard"}
        liveUrl={"https://celadon-faun-f5b17e.netlify.app/"}
        />
      </ AnimationOnScroll >

      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <Tiles 
        projectTitle={"Zimla's administrative dashboard "}
        tools={'React, SCSS,'}
        description={'Huddle landing page with single introductory section solution'}
        gitUrl={"https://github.com/Bola22/Admin-Dashboard"}
        liveUrl={"https://celadon-faun-f5b17e.netlify.app/"}
        />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <Tiles 
        projectTitle={'Huddle landing page'}
        tools={'JavaScript, CSS, HTML'}
        description={'Huddle landing page with single introductory section solution'}
        liveUrl={"https://celadon-faun-f5b17e.netlify.app/"}
        gitUrl={"https://github.com/Bola22/Admin-Dashboard"}
        />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <Tiles
        projectTitle={'Rock Paper Scissors'}
        tools={'JavaScript, CSS'}
        description={'A browser based rock paper scissors game'}
        gitUrl={"https://github.com/Bola22/Rock-Paper-Scissors-Game"}
         />
         </AnimationOnScroll>
      </div>

      <div className="ProjectBtn">
      <Button text = {"View More"} url = {"https://github.com/Bola22?tab=repositories"} />
      </div>
    </div>
  )
}

export default project
