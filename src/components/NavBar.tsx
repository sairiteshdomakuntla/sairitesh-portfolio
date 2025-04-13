import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar style when scrolled
      setScrolled(window.scrollY > 20);
      
      // Set active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        scrolled ? "glass shadow-md backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-orbitron font-bold">
          <span className="text-white">Sai<span className="text-neon-blue">Ritesh</span></span>
        </div>
        
        <div className="hidden md:flex space-x-1">
          {['Hero', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => {
            const sectionId = item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => scrollToSection(sectionId)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm transition-all",
                  activeSection === sectionId 
                    ? "text-neon-blue bg-white/5" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
