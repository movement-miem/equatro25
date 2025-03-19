import React from 'react'
import Header from './components/Header'
import BrightSection from './components/BrightSection'
import LightSection from './components/LightSection'
import DarkSection from './components/DarkSection'
import GeneralSection from './components/GeneralSection'
import Rules from './components/Rules'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './index.css'

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="app">
      <div className="section-navigation">
        <button className="nav-button bright" onClick={() => scrollToSection('bright-section')}>
          детство
        </button>
        <button className="nav-button light" onClick={() => scrollToSection('light-section')}>
          детство
        </button>
        <button className="nav-button dark" onClick={() => scrollToSection('dark-section')}>
          детство
        </button>
        <button className="nav-button common" onClick={() => scrollToSection('general-section')}>
          детство
        </button>
      </div>
      <Header />
      <Rules />
      <BrightSection id="bright-section" />
      <LightSection id="light-section" />
      <DarkSection id="dark-section" />
      <GeneralSection id="general-section" />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
