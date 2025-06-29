import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='about'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About 
            <span className='pl-2 underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>
            Passionate about real state and committed to excellence.
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="brand"  className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-500'>
                <div className='grid md:grid-cols-2 gap-8 md:gap-10 w-full 2xl:pr-28 '>
                    <div className='max-sm:flex max-sm:items-end'>
                        <p className='max-sm:mb-2 text-4xl font-medium text-gray-800'>10+</p>
                        <p className='pl-2 font-semibold'>Years of Excellence</p>
                    </div>
                    <div className='max-sm:flex max-sm:items-end'>
                        <p className='max-sm:mb-1  text-4xl font-medium text-gray-800'>12+</p>
                        <p className='pl-2 font-semibold'>Projects Completed</p>
                    </div>
                    <div className='max-sm:flex max-sm:items-end'>
                        <p className='max-sm:mb-1 text-4xl font-medium text-gray-800'>20+</p>
                        <p className='pl-2 font-semibold'>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div className='max-sm:flex max-sm:items-end'>
                        <p className='max-sm:mb-1 text-4xl font-medium text-gray-800'>18+</p>
                        <p className='pl-2 font-semibold'>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>
                    This Real Estate web application is a sleek, responsive platform built to connect property buyers and sellers. Whether you're a realtor, homeowner, or investor, this app allows you to browse, list, and manage properties with ease. Featuring detailed listings, high-resolution images, interactive maps, and category filters, users can navigate properties by location, price, type, and more.
                </p>
                <button className='bg-blue-700/90 text-white px-8 py-2 rounded-md hover:bg-blue-600/90 transition-all duration-200 ease-in cursor-pointer hover:scale-105'>
                    Explore Here
                </button>
            </div>
        </div>
    </div>
  )
}

export default About
