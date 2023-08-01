import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import HeadshotImage from '../assets/headshot.JPG';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#5c7d91]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#f7ab49]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lauren Smith</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#25262b]'>I'm a Full Stack Web Developer.</h2>
            <p ClassName='text-[#25262b] py-6 max-w-[700px]'> I have an insatiable curiosity for technology and a strong desire to make my mark in the world of web development. While I may be at the beginning of my journey, my passion and dedication to learning have fueled my determination to break into the tech industry and create meaningful digital experiences.</p>
            
{/*  headshot image */}
<img src={HeadshotImage} alt='Lauren Smith Headshot' className='w-48 h-48 rounded-full mx-auto' />


            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f7ab49] hover:border-[#f7ab49]'>
                    View Projects
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>


        </div>
    
    </div>
  )
}

export default Home