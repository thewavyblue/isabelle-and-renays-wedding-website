import React from 'react';
import './Button.css'

export default function Button({link, buttonLabel}) {

  return (
    <>
      <a href={link}>
        <button className='button font__playfair-display'>
          {buttonLabel}
        </button>
      </a>
    </>
  )
}
