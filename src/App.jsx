import React from 'react'

import HeaderImage from './components/HeroImage'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
   <section className='w-full overflow-hidden'> 
      <HeaderImage /> 
      <About />
      <Projects />
   </section>
  )
}

export default App
