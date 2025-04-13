
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'GraphQL', icon: '⬢' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Next.js', icon: '▲' }
];

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="section-padding relative px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple opacity-50 transition-opacity duration-500",
                isHovered ? "opacity-80" : "opacity-50"
              )}></div>
              
              {/* Placeholder avatar */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
              
              {/* Border effect */}
              <div className={cn(
                "absolute inset-0 border-2 rounded-full transition-all duration-500",
                isHovered 
                  ? "border-neon-blue shadow-[0_0_15px_rgba(54,181,255,0.5)]" 
                  : "border-white/20"
              )}></div>
            </div>
          </div>
          
          {/* Content area */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-semibold text-white">Full-Stack Developer & UX Enthusiast</h3>
            
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p className="text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            {/* Tech icons */}
            <div className="pt-4">
              <h4 className="text-lg font-medium text-neon-blue mb-3">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:border-neon-blue/50 transition-all hover:bg-white/10"
                  >
                    <span>{tech.icon}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
