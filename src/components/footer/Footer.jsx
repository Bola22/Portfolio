import React from 'react'
import "./footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
      <div className="left">
        <ul>
            <li>
            <p>💖 and ✨ Always, from <span>Animashaun Basit</span></p>
            </li>
            <li>
            <p>@2022. Made with NextJs & TailwindCSS</p>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
