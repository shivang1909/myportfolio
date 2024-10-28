import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGit } from 'react-icons/fa';
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt, cibLeetcode } from '@coreui/icons';

function Footer() {
  return (
    <footer className="bg-purple-600 py-8 text-center text-white mt-10">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold italic mb-4">
          "Striving to learn and grow every day."
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {/* Social media icons */}
          <a
            href="https://github.com/shivang1909/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-700 hover:text-white transition-colors"
          >
            <FaGit />
          </a>
          <a
            href="https://www.linkedin.com/in/shivang-shah-3a22aa259/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-800 hover:bg-purple-700 hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/shivangshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-purple-700 hover:text-white transition-colors"
          >
            <CIcon icon={cibLeetcode} className="text-purple-900" style={{ width: '24px', height: '24px', color: '#6B46C1' }} /> {/* Purple color */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
