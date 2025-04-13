
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 relative px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Logo & info */}
          <div className="space-y-4">
            <div className="text-2xl font-orbitron font-bold">
              <span className="text-white">Sai<span className="text-neon-blue">Ritesh</span></span> Portfolio
            </div>
            
            <p className="text-gray-400 text-sm max-w-xs">
              Building exceptional digital experiences with modern web technologies.
            </p>
            
            <div className="pt-4 flex gap-4">
              <a 
                href="https://github.com/sairiteshdomakuntla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sai-ritesh-domakuntla/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:sairiteshdomakuntla@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Middle - Quick links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
{/* Right - Contact info */}
<div>
  <h4 className="text-lg font-medium text-white mb-5">Contact</h4>
  <ul className="space-y-3 text-gray-400">
    <li className="text-white font-semibold">Sai Ritesh</li>

    {/* Email - Click to open mail */}
    <li>
      <a
        href="mailto:sairiteshdomakuntla@gmail.com"
        className="text-gray-400 hover:text-neon-blue transition-colors"
      >
        sairiteshdomakuntla@gmail.com
      </a>
    </li>

    {/* Phone - Click to call */}
    <li>
      <a
        href="tel:+918639154193"
        className="text-gray-400 hover:text-neon-blue transition-colors"
      >
        +91 8639154193
      </a>
    </li>

    {/* Location - Optional map link */}
    <li>
      <a
        href="https://www.google.com/maps/place/Hyderabad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-neon-blue transition-colors"
      >
        Hyderabad, India
      </a>
    </li>
  </ul>
</div>

        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sai Ritesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
