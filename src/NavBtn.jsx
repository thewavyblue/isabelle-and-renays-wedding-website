import React from 'react';
import './Button.css'
import './NavBtn.css'

export default function NavBtn({link, buttonLabel, target = "_self"}) {

  return (

      <a href={link} target={target}>
        <button className='navbtn button font__playfair-display'>
          {buttonLabel}
        </button>
      </a>

  )
}
