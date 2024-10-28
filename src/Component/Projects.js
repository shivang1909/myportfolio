// Projects.js
import React from 'react';
import viewpoint from './viewpoint.jpeg';
import lm from './library.avif';
import sw from './stopwatch.webp';
import edu from './edu.webp';
import chat from './chat.jpg';
import erp from './erp.jpg'

const projects = [
    {
      title: "View Point",
      description:
        "A platform for content creators to share thoughts on trending topics and promote videos. Users can view, like, comment on posts, and subscribe to creators for updates. Built using React, Node.js, and MongoDB.",
      image: viewpoint,
      githubLink: "#",
      demoLink: "#",
      techStack: ["php", "Mysql", "Html", "Bootstrap","Javascript"],
    },
    {
      title: "E-Library Management System",
      description:
        "A library management application developed without MVC using ASP.NET. Allows librarians to manage books, track inventory, and streamline lending processes.",
      image: lm,
      githubLink: "https://github.com/user/elib",
      demoLink: "https://demo-link.com/elib",
      techStack: ["ASP.NET", "SQL Server", "HTML", "CSS"],
    },
    {
      title: "Stopwatch Extension",
      description:
        "A Chrome extension that includes a voice-activated stopwatch with Start, Stop, and Reset functionalities, using JavaScript's Speech Recognition API for voice commands.",
      image: sw,
      githubLink: "#",
      demoLink: "#",
      techStack: ["JavaScript", "Speech Recognition API", "HTML", "CSS"],
    },
    
    {
      title: "EduText Extension",
      description:
        "A Chrome extension for converting selected educational text into organized reading material. Uses the Google Gemini API for semantic text processing and organization.",
      image: edu,
      githubLink: "#",
      demoLink: "#",
      techStack: ["JavaScript", "Google Gemini API", "HTML", "CSS"],
    },
    {
      title: "Basic Chat App",
      description:
        "A basic chat application where users can generate a unique Room ID and Password to chat in a private room. Supports two users per room. Built with Node.js, HTML, CSS, and Bootstrap.",
      image: chat,
      githubLink: "#",
      demoLink: "#",
      techStack: ["Node.js", "HTML", "CSS", "Bootstrap", "Socket.io"],
    },
    {
      title: "Mobile Shop ERP System",
      description:
        "An ERP system designed for mobile shop owners to generate bills, manage inventory, and track customer details. Built with ASP.NET Core MVC for small business needs.",
      image: erp,
      githubLink: "#",
      demoLink: "#",
      techStack: ["ASP.NET Core MVC", "SQL Server", "Bootstrap", "CSS"],
    },
  ];
  
export default function Projects({projectRef}) {
  return (
    <>
    <div className='' >

</div>
    <div ref={projectRef} className="projects-section py-10  flex justify-evenly">
        <div className='container  h-auto '>
        
      <h2 className="text-3xl font-bold text-center mb-6 ">My Projects</h2>
      <div className="md:mx-12 projects   grid grid-cols-1 md:grid-cols-3   gap-4  ">
        {projects.map((project, index) => (
          <div key={index} className="  project-card bg-white rounded-2xl shadow-xl p-5  flex flex-col items-center">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">GitHub</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
        </div> 
        </div>
    
                  </>
  );
}
