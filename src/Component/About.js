import React from 'react';

export default function About({aboutRef}) {
  return (
    <div className="shadow-md flex justify-center items-center bg-purple-600 w-full h-[560px] p-6 sm:p-0">
      <div className="container mx-auto px-4">
        <div ref={aboutRef} className="text-center font-bold text-white text-2xl sm:text-4xl">
          Hi, I’m Shivang. Nice to meet you.
        </div>
        <div className="text-center font-poppins text-white text-base sm:text-xl mt-4 sm:mt-7">
          Since starting my journey in web development, I’ve built a strong foundation in coding fundamentals, web development, and logical problem-solving. As a fresher, I’m eager to gain real-world experience, contribute to impactful projects, and continue growing my skills in the industry.
        </div>
      </div>
    </div>
  );
}
