import Navbar from './Navbar'

const HeaderImage = () => {
  return (
    <div className='min-h-screen bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden'
     style={{ backgroundImage: "url('/header_img.png" }} id='header'
    >
        <Navbar />

        <div className='container mx-auto text-center text-white px-6 py-4 md:px-20 lg:px-32'>
          <h2 className='font-mono font-semibold text-5xl sm:text-6xl md:text-[95px] inline-block max-w-4xl pt-14 leading-none'>
            Find your dream home
          </h2>
          <div className='mt-3 space-x-6 md:space-x-15 flex items-center justify-center md:justify-end'>
            <a href="#project" className='border-1 border-white/30 px-8 py-3 rounded font-mono hover:border-white/80 hover:scale-90 transition-all duration-500 ease-in-out'>Projects</a>
            <a href="#contact" className='bg-blue-700/70 font-mono px-8 py-3 rounded-md hover:bg-blue-500/50 hover:rounded-2xl hover:leading-snug transition-all duration-300 ease-in-out'>Contact Us</a>
          </div>
        </div>
    </div>
  )
}

export default HeaderImage
