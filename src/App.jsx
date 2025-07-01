import React from 'react'

import HeaderImage from './components/HeroImage'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
   <section className='w-full overflow-hidden'> 
      <HeaderImage /> 
      <About />
      <Projects />
      <Testimonials />
   </section>
  )
}

export default App
