import { useState } from 'react'
import Navbar from './components/Navbar' // fixed import (lowercase 'navbar')
import Heropage from './components/Heropage'
import Aboutus from './components/Aboutus'
import Products from './components/Products'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
      <div className="container mx-auto">
        <Navbar/>
        <Heropage/>
        <Aboutus/>
        <Products/>
        <Projects/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  )
}

export default App
