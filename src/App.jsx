import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import Homepage from './Homepage';
import FormDay from './FormDay';
import FormEve from './FormEve';
import Accommodation from './Accommodation';
import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import IMAGES from './img/Images';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/form-day" element={<FormDay />} />
          <Route path="/form-eve" element={<FormEve />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);