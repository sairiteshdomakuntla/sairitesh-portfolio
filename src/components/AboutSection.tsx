import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎸' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'NextJS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' }
];

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="section-padding relative">
      <div className="w-full md:container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 about-section-title">
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
          <div className="lg:col-span-7 space-y-4 md:space-y-6 about-content">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Full-Stack Developer & Problem Solver</h3>
            
            <p className="text-gray-300">
              I am a passionate Full-Stack Developer with expertise in building scalable web applications and solving complex problems. With a strong foundation in both frontend and backend technologies, I create seamless user experiences while ensuring robust and efficient systems.
            </p>
            
            <p className="text-gray-300">
              My approach combines technical excellence with a keen eye for detail and user experience. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of web development.
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
