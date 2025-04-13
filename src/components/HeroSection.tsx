import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, FileText, Github, Mail } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen grid-bg flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto text-center z-10 max-w-4xl">
        {/* Animated intro */}
        <div className="space-y-6">
          <p className={cn(
            "text-neon-blue font-medium tracking-wider transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            FULL-STACK DEVELOPER
          </p>
          
          <h1 className={cn(
            "text-4xl md:text-7xl font-bold bg-gradient-neon bg-clip-text text-transparent bg-300% animate-gradient-flow transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            SAI RITESH DOMAKUNTLA
          </h1>

          <p className={cn(
            "text-gray-300 max-w-2xl mx-auto text-lg transition-all duration-700 delay-100 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I build exceptional and accessible digital experiences for the web.
            Transforming ideas into elegant, functional applications is my passion.
          </p>
          
          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-wrap items-center justify-center gap-4 mt-8 transition-all duration-700 delay-200 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <a 
              href="/sai_ritesh_resume.pdf" 
              target="_blank" 
              className="px-6 py-3 bg-neon-blue text-black font-medium rounded-md flex items-center gap-2 hover:animate-pulse-glow transition-all"
            >
              <FileText size={18} />
              Download Resume
            </a>
            
            <a 
              href="https://github.com/sairiteshdomakuntla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white rounded-md flex items-center gap-2 transition-all hover:bg-white/10"
            >
              <Github size={18} />
              GitHub Profile
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-purple/50 text-white rounded-md flex items-center gap-2 transition-all hover:bg-white/10"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
