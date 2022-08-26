import React from 'react'
import "./project.scss"
import Tiles from '../tiles/Tiles'
import Button from '../button/Button'

function project() {
  return (
    <div className='project'>
      <h1>Projects</h1>
      <div className="project-tiles">
        <Tiles 
        
        />
        <Tiles 
        projectTitle={"Zimla's administrative dashboard "}
        tools={'React, SCSS,'}
        description={'Huddle landing page with single introductory section solution'}
        gitUrl={"https://github.com/Bola22/Admin-Dashboard"}
        liveUrl={"https://celadon-faun-f5b17e.netlify.app/"}
        />
        <Tiles 
        projectTitle={'Huddle landing page'}
        tools={'JavaScript, CSS, HTML'}
        description={'Huddle landing page with single introductory section solution'}
        liveUrl={"https://celadon-faun-f5b17e.netlify.app/"}
        gitUrl={"https://github.com/Bola22/Admin-Dashboard"}
        />
        <Tiles
        projectTitle={'Rock Paper Scissors'}
        tools={'JavaScript, CSS'}
        description={'A browser based rock paper scissors game'}
        gitUrl={"https://github.com/Bola22/Rock-Paper-Scissors-Game"}
         />
      </div>

      <div className="ProjectBtn">
      <Button text = {"View More"} />
      </div>
    </div>
  )
}

export default project
