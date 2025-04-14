import React from 'react';
import { Briefcase, GraduationCap, Code2, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    date: "2023 - Present",
    title: "Freelance Full Stack Developer",
    description: "Building custom web solutions for clients. Specializing in modern web technologies and delivering high-quality applications.",
    icon: <Briefcase className="w-5 h-5 text-neon-blue" />,
    category: "work",
    highlights: [
      "Developed e-commerce solutions",
      "Created custom web applications",
      "Implemented responsive designs",
      "Managed client relationships"
    ]
  },
  {
    date: "2023 - Present",
    title: "Web Developer at GDGC VNRVJIET",
    description: "Contributing to Google Developer Groups Campus initiatives and helping build the tech community.",
    icon: <Code2 className="w-5 h-5 text-neon-purple" />,
    category: "community"
  },
  {
    date: "2023 - Present",
    title: "Core Member - Turing Hut",
    description: "Leading coding initiatives and mentoring fellow students in the college coding club.",
    icon: <Code2 className="w-5 h-5 text-neon-green" />,
    category: "community"
  },
  {
    date: "2020 - Present",
    title: "B.Tech in Computer Science",
    description: "VNR Vignana Jyothi Institute of Engineering and Technology",
    icon: <GraduationCap className="w-5 h-5 text-yellow-400" />,
    category: "education",
    highlights: [
      "CGPA: 8.5/10",
      "Specialization in AI/ML",
      "Active participant in technical events",
      "Member of coding clubs"
    ]
  },
  {
    date: "2023",
    title: "Competitive Programming Achievements",
    description: "Consistent performance in coding platforms",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    category: "achievement",
    highlights: [
      "LeetCode Rating: 1800+",
      "CodeChef Rating: 1539",
      "Codeforces Rating: 1400+"
    ]
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="w-full md:container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            My Journey
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The path that led me to where I am today
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0f0f19] border-2 border-neon-blue flex items-center justify-center">
                  {event.icon}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass rounded-xl p-6 hover:border-neon-blue/30 transition-all duration-300">
                    <span className="text-sm text-neon-blue font-medium">{event.date}</span>
                    <h3 className="text-xl font-semibold text-white mt-1 mb-2">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    
                    {event.highlights && (
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection; 