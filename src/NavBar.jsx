import React from 'react';
import IMAGES from './img/Images';
import LinkBtn from './LinkBtn';
import NavBtn from './NavBtn';
import './NavBar.css'
import './App.css'

export default function NavBar() {

  return (
    <div className="main-container">
      <nav className="navbar">
          <NavBtn link={"/"} buttonLabel={"Home"} />
          <NavBtn link={"/accommodation"} buttonLabel={"Accommodation"} />
          <NavBtn link={"/#rsvp"} buttonLabel={"R.S.V.P"} />
      </nav>
    </div>
  )
}
