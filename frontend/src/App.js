import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WaveDivider from './components/WaveDivider';
import InteractiveJourney from './components/Journey';

// Custom Cursor Component
const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return null;
};

const Portfolio = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        
        <WaveDivider 
          className="text-gray-900" 
          color="#111827" 
        />
        
        <About />
        
        <WaveDivider 
          className="text-black" 
          color="#000000" 
          flip={true}
        />
        
        <Skills />
        
        <WaveDivider 
          className="text-gray-900" 
          color="#111827" 
        />
        
        <InteractiveJourney />

        <WaveDivider
          className="text-gray-900"
          color="#111827"
        />

        <Projects />
        
        <WaveDivider 
          className="text-purple-900" 
          color="#581c87" 
          flip={true}
        />
        
        <Contact />
      </main>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
