import React from 'react'
import { assets, footerLinks } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
      
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-1'>
            <img src={assets.logo_dark} alt="footer logo" />
            <p className='text-gray-400 mt-4 leading-5'>Helping you find the perfect place to call home. Your journey to the right home starts here. Proudly serving buyers and sellers across World.</p>
        </div>
      <div className='w-full md:w-1/5 mb-8 md:mb-1'>
        <h3 className='text-white text-xl font-bold mb-3'>Company</h3>
        <ul className='flex flex-col max-sm:flex-row gap-4 md:gap-1'>
            {footerLinks.map((link,index) => (
                <li key={index} className='text-gray-600 hover:text-red-800/90 transition-all ease-in-out'>
                    <a href={`#${link.id}`}>{link.name}</a>
                </li>
            ))}
        </ul>
      </div>
      <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-thin mb-4'><span className='text-red-500/90 underline underline-offset-5 decoration-0'>Subscribe</span> to our newsletter</h3>
        <p className='text-gray-500 leading-none mb-4 max-w-90'>
            Stay with our latest real estate news and listings. Subscribe to our newsletter and never miss an update. 
        </p>
        <div className='flex gap-2'>
            <input type="email" placeholder='Enter your email'
            className='p-2 max-sm:pl-4 rounded bg-gray-700/90 text-gray-100 border border-gray-500/80 focus:outline-0 max-sm:w-[225px] md:w-auto' />
            <button className='py-2 px-4 rounded-md cursor-pointer bg-red-950/98 text-gray-200 font-semibold hover:bg-red-900/90 transition-all duration-500 ease-in-out'>
                Subscribe
            </button>
        </div>
      </div>
      </div>
        <div className='flex items-center justify-center md:justify-end py-1 mt-8 md:mt-10 mb-4 md:border-t md:border-red-900/80'>
            <p className='text-gray-500 text-center leading-5 max-sm:border-t border-gray-700 pt-2'>2025 <span className='text-red-400 font-thin'>© RB</span> RealEstate. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
