import React from 'react';
import IMAGES from './img/Images';
import LinkBtn from './LinkBtn';
import NavBtn from './NavBtn';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'
import './App.css'


const NavBar = () => {
  return (
    <div className="container__navbar">
      <nav>
        <ul className="navbar">
          {/* Normal route navigation */}
          <li className='button'>
            <Link to="/">Home</Link>
          </li>
          <li className='button'>
            <Link to="/accommodation">Accommodation</Link>
          </li>
          {/* Anchored section on homepage */}
          <li className='button'>
            <HashLink smooth to="/#rsvp">
              R.S.V.P
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;