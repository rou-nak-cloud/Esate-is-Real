import React from 'react'
import { assets, projectsData, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
     initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1, delay:0.4, ease:"easeIn"}}
        viewport={{once:true, amount:0.1}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
      <h1 className='text-2xl sm:4xl font-bold mb-2 text-center text-gray-700'>
        Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from those who found home with us</p>

      <div className='flex flex-wrap gap-8 justify-center'>
        {testimonialsData.map((testimonial,index) => (
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='mx-auto mb-2' src={testimonial.image} alt={testimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-600 mb-4 text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-600 mb-4'>
                    {Array.from({ length: testimonial.rating }, (item,index) => (
                        <img key={index} src={assets.star_icon} alt="rating" />
                    ))}
                </div>
                <p className='text-gray-500'>{testimonial.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
