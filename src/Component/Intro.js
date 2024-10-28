import React from 'react';
import avatar from './shivang-avatar.svg';
import pc from './hero-devices.svg';
import '../App.css';

export default function Intro() {
  return (
    <>
      <div  className="flex items-center justify-center mt-32 relative overflow-hidden">
        {/* Background Shape */}
        
        {/* Content Container */}
        <div className="w-full md:w-4/5 flex flex-col items-center justify-center p-4 bg-transparent">
          <div   className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 font-sans text-center">
            Full-Stack Developer, Problem Solver & Thinker
          </div>
          <div className="text-lg md:text-xl text-gray-500 text-center mb-4 md:mb-6">
            I design and code beautifully simple things, and I love what I do.
          </div>
          <img src={avatar} alt="Avatar" className="w-64 h-32 md:w-50 md:h-64 mb-4 md:mb-7" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 md:mt-14">
        <div className="w-full md:w-4/5 h-auto md:h-2/3 flex flex-col items-center justify-center">
          <img src={pc} alt="Device Illustration" className="w-2/3 max-h-80 md:max-h-full mb-6" />
        </div>
      </div>
    </>
  );
}
