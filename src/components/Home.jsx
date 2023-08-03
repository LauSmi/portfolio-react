import React from 'react';
import HeadshotImage from '../assets/headshot.JPG';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#5c7d91]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#f7ab49] text-2xl sm:text-3xl font-bold'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lauren Smith</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#25262b]'>I'm a Full Stack Web Developer.</h2>
        <p className='text-[#25262b] py-6 max-w-[700px]'>
          With an unwavering curiosity for technology and a genuine ambition to make a lasting impact in the realm of web development, I am driven by a profound passion for continuous learning. Fueled by this dedication, I am determined to enter the tech industry and create meaningful digital experiences that resonate with users and elevate the possibilities of the digital world.
        </p>

        {/* Headshot image */}
        <div style={{ padding: '40px' }}>
          <img src={HeadshotImage} alt='Lauren Smith Headshot' className='w-48 h-48 rounded-full mx-auto' />
        </div>
      </div>

    </div>
  );
}

export default Home;




// import React from 'react'

// import HeadshotImage from '../assets/headshot.JPG';

// const Home = () => {
//   return (
//     <div name='home' className='w-full h-screen bg-[#5c7d91]'>

//         {/* Container */}
//         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//             <p className='text-[#f7ab49] text-2xl sm:text-3xl font-bold'>Hello, my name is</p>
//             <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lauren Smith</h1>
//             <h2 className='text-4xl sm:text-7xl font-bold text-[#25262b]'>I'm a Full Stack Web Developer.</h2>
//             <p ClassName='text-[#25262b] py-6 max-w-[700px]'> With an unwavering curiosity for technology and a genuine ambition to make a lasting impact in the realm of web development, I am driven by a profound passion for continuous learning. Fueled by this dedication, I am determined to enter the tech industry and create meaningful digital experiences that resonate with users and elevate the possibilities of the digital world.</p>
            
// {/*  headshot image */}
// <div style={{ padding: '40px' }}>
// <img src={HeadshotImage} alt='Lauren Smith Headshot' className='w-48 h-48 rounded-full mx-auto ' /></div>

//         </div>
    
//     </div>
//   )
// }

// export default Home