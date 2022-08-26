import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import "./tiles.scss"

function Tiles({projectTitle, tools, description, liveUrl, gitUrl}) {
  return (
    <div className='tile'>
      <h2>{projectTitle}</h2>
      <h3>{tools}</h3>
      <p>{description}</p>
      <ul >
        <li>
          <a href={liveUrl}>
          <span>Live</span>
          <RemoveRedEyeIcon className='tile-icon'/>
          </a>
        </li>
        <li>
          <a href={gitUrl}>
          <span>Code</span>
          <GitHubIcon className='tile-icon' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Tiles
