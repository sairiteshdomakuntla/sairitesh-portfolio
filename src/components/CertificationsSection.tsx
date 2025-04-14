// import React from 'react';
// import { BadgeCheck, Award, Calendar, BookOpen } from 'lucide-react';

import { BadgeCheck, BookOpen, Award, ShieldCheck, BarChart3, BrainCircuit, Trophy, Calendar } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Webathon 3.0 Winner",
    issuer: "Overnight Hackathon",
    date: "2025",
    icon: <Trophy className="h-6 w-6 text-neon-gold" />
  },
  {
    id: 2,
    title: "Inter IIT Competitive Programming Conclave",
    issuer: "Inter IIT Consortium",
    date: "2024",
    icon: <Trophy className="h-6 w-6 text-neon-gold" />,
    link: "https://drive.google.com/file/d/1Ag4lY1o7yJNYHXXhKikRYfhPSHzWjsGC/view?usp=drive_link"
  },
  {
    id: 3,
    title: "HacktoberFest 2024 Contributor",
    issuer: "DigitalOcean & Holopin",
    date: "2024",
    icon: <BadgeCheck className="h-6 w-6 text-neon-blue" />,
    link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm2rxkagg208860cmhqpy5065r"
  },
  {
    id: 4,
    title: "Cyber Security Certification",
    issuer: "Microsoft-TataStrive",
    date: "2024",
    icon: <ShieldCheck className="h-6 w-6 text-neon-red" />,
    link: "https://drive.google.com/file/d/1BfZH9pLGmu4oi8FHRwMpd64EJ34qouNv/view?usp=sharing"
  },
  {
    id: 5,
    title: "Summer of AI Internship",
    issuer: "Swechha Foundation",
    date: "2024",
    icon: <BrainCircuit className="h-6 w-6 text-neon-purple" />,
    link: "https://drive.google.com/file/d/1kt2F9gSzH9Yt5gifH_-WUU6H1IPEaWha/view?usp=sharing"
  },
  {
    id: 6,
    title: "Python Certification",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: <BookOpen className="h-6 w-6 text-neon-green" />,
    link: "https://drive.google.com/file/d/1maMlU59raWuNfsFD0_WEtd4gq_pcYuAI/view?usp=sharing"
  },
  {
    id: 7,
    title: "Top 2% Rank - CodeFrenzy",
    issuer: "CodeFrenzy",
    date: "2024",
    icon: <Trophy className="h-6 w-6 text-neon-orange" />
  },
  {
    id: 8,
    title: "Tableau Data Visualization",
    issuer: "Internshala",
    date: "2024",
    icon: <BarChart3 className="h-6 w-6 text-neon-cyan" />,
    link: "https://drive.google.com/file/d/1Z8Fsf6hn7ZlFxAQAwTM2nWDt9RCpmunG/view?usp=sharing"
  }
];


const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-white/[0.02] relative">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="w-full md:container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Certifications & Achievements
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional qualifications and recognitions in the field
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue hidden md:block"></div>
          
          {/* Certifications */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className="flex flex-col md:flex-row gap-4 md:gap-8 group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="md:absolute md:left-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0f0f19] border border-white/20 flex items-center justify-center group-hover:border-neon-blue transition-colors">
                    <Calendar className="h-4 w-4 text-neon-blue" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-8 md:ml-12 flex flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group-hover:border-neon-blue/20 transition-all">
                  <div className="mr-4 hidden md:block">
                    {cert.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {cert.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-sm text-neon-blue">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-400">
                      {cert.issuer}
                    </p>
                    
                    <div className="mt-4 flex md:hidden items-center gap-2 text-sm text-gray-400">
                      {cert.icon}
                      <span>Verified Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom dot */}
          <div className="absolute left-4 bottom-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple hidden md:block"></div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white rounded-md transition-all hover:bg-white/10"
          >
            <Award size={18} />
            View All Credentials
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
