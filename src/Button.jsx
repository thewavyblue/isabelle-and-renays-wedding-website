import React from 'react';
import './Button.css'

export default function Button({link, buttonLabel, target = "_self"}) {
  const onClick = () => {
    window.location.href = link;
  };

  return (

      <a href={link} target={target}>
        <button onClick={onClick} className='button font__playfair-display'>
          {buttonLabel}
        </button>
      </a>

  )
}
