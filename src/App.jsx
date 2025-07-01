import React from 'react'

import HeaderImage from './components/HeroImage'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

const App = () => {
  return (
   <section className='w-full overflow-hidden'> 
      <HeaderImage /> 
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
   <ToastContainer />
   </section>
  )
}

export default App
