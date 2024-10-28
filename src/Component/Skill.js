import React from 'react';
import { FaLaptopCode, FaTools, FaBrain } from 'react-icons/fa';

export default function Skill({ skillRef }) { // Accept the ref as a prop
  return (
    <div ref={skillRef} className="w-full  flex justify-center items-center py-10">
      <div className="h-auto p-4 w-4/5 flex flex-col md:flex-row justify-between gap-4 mt-[-120px]">

        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 p-6 bg-white shadow-lg rounded-3xl min-h-[400px] text-center">
          <FaLaptopCode size={40} className="text-purple-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Full-Stack Development</h3>
          <p className="text-gray-600 mb-4">Proficient in both frontend and backend technologies, crafting robust and scalable applications.</p>
          <div className="mt-5">
            <h4 className="font-semibold text-lg mb-2">Technologies</h4>
            <ul className="text-gray-500 space-y-1">
              <li>JavaScript (React, Node.js)</li>
              <li>HTML CSS & ASP.NET</li>
              <li>MongoDB & SQL</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 p-6 bg-white shadow-lg rounded-3xl min-h-[400px] text-center">
          <FaBrain size={40} className="text-purple-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Logical Thinking</h3>
          <p className="text-gray-600 mb-4">Strong analytical skills to solve complex problems efficiently and logically.</p>
          <div className="mt-5">
            <h4 className="font-semibold text-lg mb-2">Strengths</h4>
            <ul className="text-gray-500 space-y-1">
              <li>Problem-Solving</li>
              <li>Algorithmic Thinking</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 p-6 bg-white shadow-lg rounded-3xl min-h-[400px] text-center">
          <FaTools size={40} className="text-purple-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Tools & Communication</h3>
          <p className="text-gray-600 mb-4">Skilled in using developer tools and effective communication for seamless collaboration.</p>
          <div className="mt-5">
            <h4 className="font-semibold text-lg mb-2">Tools & Skills</h4>
            <ul className="text-gray-500 space-y-1">
              <li>Git & GitHub</li>
              <li>Team Collaboration</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
