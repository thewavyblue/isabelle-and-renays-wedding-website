import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router';
import Homepage from './Homepage';
import FormDay from './FormDay';
import FormEve from './FormEve';
import Accommodation from './Accommodation';
import Footer from './Footer';
import NavBar from './NavBar';
import IMAGES from './img/Images';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/form-day" element={<FormDay />} />
        <Route path="/form-eve" element={<FormEve />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
);