import React, { useState } from 'react';

function Navbar({ props }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
   
    
  return (
    <>
      <nav className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-6 py-5">

          {/* Logo Section */}
          <div className="flex items-center space-x-3 text-3xl">
            Shivang Shah
          </div>

          {/* Desktop Navigation Links Section */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-lg font-medium hover:text-blue-700 hover:underline">
              Home
            </a>
            <a href="#" onClick={()=>{props('about')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              About
            </a>
            <a href="#" onClick={()=>{props('project')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              Projects
            </a>
            <a href="#" onClick={()=>{props('skill')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              Skill
            </a>

            {/* Button */}
            <button className="border border-blue-500 text-blue-500 font-bold py-2 px-5 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
              Say Hello
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col items-start px-6 py-4 space-y-4">
            <a href="#" className="text-lg font-medium hover:text-blue-700 hover:underline">
              Home
            </a>
            <a href="#" onClick={()=>{props('about')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              About
            </a>
            <a href="#" onClick={()=>{props('project')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              Projects
            </a>
            <a href="#" onClick={()=>{props('skill')}} className="text-lg font-medium hover:text-blue-700 hover:underline">
              Skill
            </a>

            {/* Button */}
            <button className="border border-blue-500 text-blue-500 font-bold py-2 px-5 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
              Say Hello
            </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
