
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
              <span className="text-white">Port<span className="text-neon-blue">folio</span></span>
            </div>
            
            <p className="text-gray-400 text-sm max-w-xs">
              Building exceptional digital experiences with modern web technologies.
            </p>
            
            <div className="pt-4 flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white hover:text-neon-blue transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@example.com"
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
              <li>John Doe</li>
              <li>contact@example.com</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
