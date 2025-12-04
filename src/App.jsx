import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Infrastructure from './pages/Infrastructure'
import Quality from './pages/Quality'
import Cliens from './pages/Cliens'

import Home from './pages/Home'
import Capibility from './pages/Capibility'
import ContactForm from './pages/ContactForm'
import CncNav from './components/CncNav'
import CncFoot from './components/CncFoot'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <CncNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Quality' element={<Quality />} />
          <Route path='/Infrastructure' element={<Infrastructure />} />
          <Route path='/capibility' element={<Capibility />} />
          <Route path='/valueablePartner' element={<Cliens />} />
          <Route path='/contact' element={<ContactForm />} />
        </Routes>
        <CncFoot />
      </BrowserRouter>
    </>
  )
}

export default App
