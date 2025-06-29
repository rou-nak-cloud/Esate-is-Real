import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets, navLinks } from '../assets/assets'

const Navbar = () => {
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if(mobileMenu){
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow when component unmounts 
    }
  },[mobileMenu])

  return (
    <div className='absolute top-0 left-0 z-10 w-full md:shadow-xs md:shadow-white/10'>
      <div className='flex items-center justify-between container mx-auto py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="navLogo" />
        <ul className='hidden md:flex gap-6 items-center text-white'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
              onClick={() => setMobileMenu(mobileMenu)}
                href={`#${link.id}`}
                className='text-lg hover:text-gray-400 transition-colors duration-300 ease-in'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button className='hidden md:block bg-white/70 px-8 py-3 rounded-full text-gray-700 font-semibold hover:bg-gray-500/90 hover:scale-95 hover:text-white/70 cursor-pointer transition-all duration-500 ease-in-out'>
          Sign up
        </button>
        <img
          onClick={() => setMobileMenu(!mobileMenu)} 
        src={assets.menu_icon} alt="menuBar" className='md:hidden w-7 cursor-pointer' />
      </div>

      <div className={`md:hidden ${mobileMenu ? 'w-full' : 'w-0' } 
       min-h-screen backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out`}>
        {/* <div className='flex justify-end px-6 cursor-pointer'>
          <img src={assets.cross_icon} alt="cross" className='w-5 ' />
        </div> */}
          {navLinks.map((link) => (
            <ul key={link.id}
             className='flex flex-col items-end gap-4 font-mono leading-none px-5 py-3 mt-1'
            >
               <a
                href={`#${link.id}`}
                className='text-2xl text-white/70 hover:text-gray-400 transition-colors duration-300 ease-in'
              >
                {link.name}
              </a>
            </ul>
          ))}
      </div>
    </div>
  )
}

export default Navbar
