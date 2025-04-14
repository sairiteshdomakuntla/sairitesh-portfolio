import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    name: "Freelance Development",
    role: "Full Stack Developer",
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-neon-green" />,
    description: "Building custom web solutions and delivering high-quality applications for clients using modern web technologies. Specializing in responsive web applications with modern frameworks and best practices.",
    period: "2025 - Present",
    link: "#",
    achievements: [
      "Developed and deployed custom web applications for multiple clients",
      "Implemented responsive designs and modern UI/UX practices",
      "Managed entire project lifecycles from requirements gathering to deployment"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Azure"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Professional Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            My journey in professional software development
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 hover:border-neon-green/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-2 sm:p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all">
                  {exp.icon}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:items-center mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-neon-green transition-colors">
                        {exp.name}
                      </h3>
                      <p className="text-neon-green font-medium text-base sm:text-lg">{exp.role}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                    {exp.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 text-sm sm:text-base">
                          <span className="text-neon-green mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-neon-green border border-neon-green/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 