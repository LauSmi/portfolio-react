import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full  bg-[#5c7d91] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 p-4'>
          <div className='sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f7ab49]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p className='break-words'>
              I approach challenges with a growth mindset, embracing each obstacle as an opportunity to learn and improve. As an entry-level developer, I am excited to collaborate with experienced professionals, absorb their knowledge, and contribute my fresh perspective to projects. I am a strong believer in the value of feedback and constantly seek ways to refine my skills and develop a strong foundation as a full-stack web developer.
            </p>
          </div>
          <div className='break-words'>
            <p>
              As an entry-level full-stack web developer, I have a solid foundation in both frontend and backend technologies. On the frontend, I enjoy crafting creative and elegant user interfaces using HTML, CSS, and JavaScript. I enjoy working with libraries and frameworks such as React, Bootstrap, and Tailwind to enhance the user experience and build engaging web applications.
            </p>
            <p>
              When it comes to the backend, I have experience working with server-side languages such as Node.js, Express.js, MySQL, and MongoDB. I am enthusiastic about learning how to design and manage databases effectively to create dynamic and data-driven web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;





// import React from 'react';

// const About = () => {
//     return (
//         <div name='about' className='w-full min-h-screen bg-[#5c7d91] text-gray-300'>
//             <div className='flex flex-col justify-center items-center w-full h-full'>
//                 <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
//                     <div className='sm:text-right pb-8 pl-4'>
//                         <p className='text-4xl font-bold inline border-b-4 border-[#f7ab49]'>
//                             About
//                         </p>
//                     </div>
//                     <div></div>
//                 </div>
//                 <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
//                     <div className='sm:text-right text-3xl font-bold '>
//                         <p className='break-words'>
//                         I approach challenges with a growth mindset, embracing each obstacle as an opportunity to learn and improve. As an entry-level developer, I am excited to collaborate with experienced professionals, absorb their knowledge, and contribute my fresh perspective to projects. I am a strong believer in the value of feedback and constantly seek ways to refine my skills and develop a strong foundation as a full-stack web developer.
//                         </p>
//                     </div>
//                     <div className='break-words'>
//                         <p>
//                         As an entry-level full-stack web developer, I have a solid foundation in both frontend and backend technologies. On the frontend, I'm enjoy crafting creative and elegant user interfaces using HTML, CSS, and JavaScript. I enjoy working with libraries and frameworks such as React, Bootstrap, and Tailwind to enhance the user experience and build engaging web applications.
// <p>
// When it comes to the backend, I have experience working with server-side languages such as Node.js, Express.js, MySQL, and MongoDB. I am enthusiastic about learning how to design and manage databases effectively to create dynamic and data-driven web applications.</p>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

