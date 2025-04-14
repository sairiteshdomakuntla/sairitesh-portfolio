import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="w-full md:container mx-auto max-w-5xl">
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
                  href="mailto:sairiteshdomakuntla@gmail.com" 
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>sairiteshdomakuntla@gmail.com</p>
                  </div>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/sai-ritesh-domakuntla/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Linkedin size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p>linkedin.com/in/sai-ritesh-domakuntla/</p>
                  </div>
                </a>
                
                {/* GitHub */}
                <a 
                  href="https://github.com/sairiteshdomakuntla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Github size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p>github.com/sairiteshdomakuntla</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Resume download */}
            <div className="glass rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium mb-4">Need my resume?</h3>
              <a 
                href="/sai_ritesh_resume.pdf" 
                target='_blank'
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-md w-full hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3 glass rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
