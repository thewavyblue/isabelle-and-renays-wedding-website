import React from 'react';
import './Button.css'

export default function Button({link, buttonLabel, target = "_self"}) {

  return (

      <a href={link} target={target}>
        <button className='button font__playfair-display'>
          {buttonLabel}
        </button>
      </a>

  )
}
