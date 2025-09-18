import React from 'react';
import IMAGES from './img/Images';
import { Link } from 'react-router';
import './NavBar.css'

export default function NavBar() {

  return (
    <div className="navbar">
      <img className="nav-image" src={IMAGES.floralFooter} alt="" />
      <nav>
        {/* <Link to="/">Home</Link> */}
      </nav> 
    </div>
  )
}
