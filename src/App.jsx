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



function App() {

  return (
    <>
      <BrowserRouter>
      <CncNav/>
        <Routes>  
          <Route path='/' element={<Home/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/Quality' element={<Quality/>} />
          <Route path='/Infrastructure' element={<Infrastructure/>} />
          <Route path='/capibility' element={<Capibility/>} />
          <Route path='/valueablePartner' element={<Cliens/>} />
          <Route path='/contact' element={<ContactForm/>} />
        </Routes>
       <CncFoot/>
      </BrowserRouter>
    </>
  )
}

export default App
