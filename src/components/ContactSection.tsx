
import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-xl p-6 space-y-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="text-neon-blue" size={20} />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>contact@example.com</p>
                  </div>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Linkedin size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p>linkedin.com/in/username</p>
                  </div>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Github size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p>github.com/username</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Resume download */}
            <div className="glass rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium mb-4">Need my resume?</h3>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-md w-full hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 glass rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:border-neon-blue/50 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-neon-blue text-black font-medium rounded-md flex items-center gap-2 hover:animate-pulse-glow transition-all w-full justify-center md:w-auto"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
