import React from 'react';
import './Button.css'

export default function Button({link, buttonLabel}) {

  return (
    <>
      <a href={link}>
        <button className='button'>
          {buttonLabel}
        </button>
      </a>
    </>
  )
}
