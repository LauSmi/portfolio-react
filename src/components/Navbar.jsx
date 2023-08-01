
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/LogoLS.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)



  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#5c7d91] text-gray-800'>
      <div>
        <img src={Logo} alt="Logo" style={{ width: '80px' }} />
      </div>

      {/* Menu*/}

      <ul className='hidden md:flex'>

        <li>
          <Link to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth={true} duration={500} >
            Projects
          </Link>
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>

      </ul>


      {/* Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#5c7d91] flex flex-col justify-center items-center'}>
        
        <li className='py-6 text-4xl'>
          <Link onClick= {handleClick} to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        
        <li className='py-6 text-4xl'>
          <Link onClick= {handleClick} to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        
        <li className='py-6 text-4xl'>
          <Link onClick= {handleClick} to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        
        <li className='py-6 text-4xl'>
          <Link onClick= {handleClick} to="projects" smooth={true} duration={500} >
            Projects
          </Link>
        </li>
        
        <li className='py-6 text-4xl'>
          <Link onClick= {handleClick} to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>

      </ul>

      {/* Social icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/lauren-smith-511606259/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/LauSmi">
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#66a597]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:lauren.smi001@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c28616]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="https://docs.google.com/document/d/e/2PACX-1vSK3q_IIKR8Ao83e4noJNot1VWUI1QwXmf4K_Ht6RhgEfL6BXNZVg2kdvDYNxNh2uuJoD07hsbA_B6U/pub">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>


      </div>

    </div>
  )
}

export default Navbar