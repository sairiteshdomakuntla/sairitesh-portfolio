import React from 'react';

// Skill categories with their respective technologies
const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TailwindCSS", level: 85 }
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Python", level: 70 },
      // { name: "Django", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    name: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Database Design", level: 85 },
      // { name: "ORM", level: 80 }
    ]
  },
  {
    name: "DevOps & Tools",
    icon: "🔧",
    skills: [
      { name: "Git", level: 90 },
      { name: "Azure", level: 80 },
      { name: "Docker", level: 50 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 60 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-white/[0.02] relative px-4">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit and expertise across various technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 h-full hover:border-neon-blue/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1.5s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
