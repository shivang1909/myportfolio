import './App.css';
import React, { useRef } from 'react';
import Navbar from './Component/Navbar';
import Intro from './Component/Intro';
import About from './Component/About';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import Footer from './Component/Footer';

function App() {
  const skillsection = useRef(null); // Create a ref to attach to the Skill component
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);


  const scrollevent = (section) => {
    console.log(section)
    // Now it should not be null after clicking the button
    const sectionref = {
      "skill": skillsection,
      "about": aboutSection,
      "project": projectsSection

    }
    console.log(sectionref[section]);
    
    sectionref[section].current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the ref
  };
  


  return (
    <>
      <Navbar props={scrollevent} />
       
      <Intro />
      <About aboutRef={aboutSection}/>
     
      <Skill skillRef={skillsection} />
      <Projects projectRef={projectsSection}/>
      <Footer/>

    </>
  );
}

export default App;
