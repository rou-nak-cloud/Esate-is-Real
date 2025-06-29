import React from 'react'

import HeaderImage from './components/HeroImage'
import About from './components/About'

const App = () => {
  return (
   <section className='w-full overflow-hidden'> 
      <HeaderImage /> 
      <About />
   </section>
  )
}

export default App
