import React from 'react'
import Component from './components/Component'
import Footer from './components/Footer'
import Groups from './components/Groups'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Groups />
      <Component />
      <Footer />
    </div>
  )
}

export default App