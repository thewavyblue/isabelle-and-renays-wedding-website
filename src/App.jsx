import React from 'react';
import Button from './Button';
import NavBar from './NavBar';
import Divider from './Divider';
import Countdown from './Countdown';
import './App.css';

function App() {

  return (
    <>
      <NavBar />
      <p className="font__playfair-display">
        Welcome to the wed-site of
      </p>
      <Divider />
      <h1>
        Isabelle<br />
        &<br />
        Renay
      </h1>
      <Divider />
      <Countdown />
      <Button link={"#intro"} buttonLabel={"Jump to info"}/>
    </>
  )
}

export default App