import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
      <footer className="bg-[#8a540d] text-white py-4 text-center">
       
        © 2023 Lauren Smith. All rights reserved.
  
        {/* Icon links */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/LauSmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:text-gray-500"
          >
            <AiFillGithub size={24} />
          </a>
  
          <a
            href="https://www.linkedin.com/in/lauren-smith-511606259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2 hover:text-gray-500"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </footer>
    );
  };
  

export default Footer;
