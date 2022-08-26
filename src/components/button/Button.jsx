import { Link } from '@mui/material'
import React from 'react'
import './button.scss'

function button({text,url}) {
  return ( 
    
    <a href={url} className='btn'>
      {text}
    </a>
    
  )
}

export default button
