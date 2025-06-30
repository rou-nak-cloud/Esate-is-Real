import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardShow, setCardShow] = useState(1)

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length -1 : prevIndex -1);
    }

    useEffect(() => {
        const updateCardsShow = () => {
            if(window.innerWidth >= 1024){
                setCardShow(projectsData.length)
            } else {
                setCardShow(1)
            }
         }    
            updateCardsShow();
            window.addEventListener('resize', updateCardsShow);
            return () => window.removeEventListener('resize', updateCardsShow);
    },[])
    
  return (
    <div className='container mx-auto py-4 px-6 pt-20 md:px-20 lg:px-32 my-10 w-full overflow-hidden' id='project'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-600 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/* Slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
        onClick={prevProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous'>
            <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
        onClick={nextProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous'>
            <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* Slider */}
      <div>
        <div className='flex gap-0 transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * (100 / cardShow)}%)`}}
        >
            {projectsData.map((project,index) => (
                <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 p-2'>
                    <img src={project.image} alt={project.title} className='w-full h-auto mb-12 rounded-lg' />
                    <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white shadow-md w-3/4 px-4 py-1 rounded-md'>
                            <h2 className='text-xl font-semibold text-gray-700'>
                                {project.title}    
                            </h2> 
                            <p className='text-gray-600 text-md'>
                                {project.price} <span>|</span> {project.location}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
