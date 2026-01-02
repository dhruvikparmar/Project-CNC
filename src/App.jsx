import { useEffect } from 'react'
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
import Gallery from './pages/Gallery'
import ScrollToHero from './components/ScrollToHero'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      // Disable Ctrl+U, Ctrl+S, Ctrl+Shift+I
      if (
        e.ctrlKey &&
        (key === "u" || key === "s" || (key === "i" && e.shiftKey))
      ) {
        // Allow copy
        if (key === "c") return;

        // Allow typing in inputs
        const tag = e.target.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") return;

        e.preventDefault();
      }
    };

    const disableRightClick = (e) => e.preventDefault();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", disableRightClick);
    };
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
          <Route path='Gallery' element={<Gallery />} />
        </Routes>
        <CncFoot />
      </BrowserRouter>
      <ScrollToHero />
      <WhatsAppFloat />
    </>
  )
}

export default App
