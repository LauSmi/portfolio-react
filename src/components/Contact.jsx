import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#5c7d91] flex justify-center items-center p-4'>
      {/* Container with padding */}
      <div className='max-w-[600px] w-full px-4 py-20 sm:px-8 sm:py-12'>
        <form method='POST' action="https://getform.io/f/475b2489-478e-403a-abc3-bd8a7945e2ed" className='flex flex-col'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#c28616] text-gray-300'>Contact</p>


            <p className='text-gray-300 py-5'> As I embark on my journey as a full-stack web developer, I am eager to connect with mentors, peers, and potential employers who share my enthusiasm for web development. If you are looking for a dedicated and hardworking team member who is eager to learn and grow, I'd love to be a part of your team or collaborate on exciting projects.

              Thank you for visiting my portfolio website. I look forward to exploring opportunities and contributing my skills and passion to make a positive impact in the tech world!</p>
            <p className='text-gray-300 py-5'>Submit the form below or send me an email directly - lauren.smi001@gmail.com.</p>
          </div>

          <div className='text-[#c28616] py-6'>
            <a href="https://drive.google.com/file/d/1qA9p5S7GShBuyWW-EBnssyfMW-c84s64/view?usp=sharing" download>
              Download My Resume
            </a>
          </div>


          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
          <button className='text-white border-2 hover:bg-[#c28616] hover:border-[#c28616] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>



        </form>
      </div>
    </div>
  );
}

export default Contact;



