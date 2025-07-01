import React from 'react'

import HeaderImage from './components/HeroImage'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
   <section className='w-full overflow-hidden'> 
   <ToastContainer />
      <HeaderImage /> 
      <About />
      <Projects />
      <Testimonials />
      <Contact />
   </section>
  )
}

export default App
