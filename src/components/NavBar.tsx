import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Height of the navbar
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar style when scrolled
      setScrolled(window.scrollY > 20);
      
      // Set active section based on scroll position
      const sections = [
        'hero',
        // 'timeline',
        'about',
        'skills',
        'projects',
        'community',
        'certifications',
        'contact'
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        const navbarHeight = 64; // Height of the navbar
        return rect.top <= navbarHeight && rect.bottom >= navbarHeight;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {[
            'Hero',
            // 'Timeline',
            'About',
            'Skills',
            'Projects',
            'Community',
            'Certifications',
            'Contact'
          ].map((item) => {
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
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
          
          {mobileMenuOpen && (
            <div className="fixed top-16 left-0 right-0 bottom-0 bg-[#0f0f19]/95 backdrop-blur-md z-50 p-4 border-t border-white/10 overflow-y-auto">
              <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
                {['Hero', 'About', 'Skills', 'Projects', 'Community', 'Certifications', 'Contact'].map((item) => {
                  const sectionId = item.toLowerCase();
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(sectionId);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-md text-base transition-all text-left w-full",
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
