import React from 'react';
import { Users, Code2, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const communities = [
  {
    name: "Google Developer Groups Campus",
    role: "Web Developer Volunteer",
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />,
    description: "Contributing to the tech community through web development initiatives at GDGC VNRVJIET.",
    period: "2023 - Present",
    link: "#",
    tags: ["Web Development", "Community", "Google Technologies"]
  },
  {
    name: "Open Source Contributor",
    role: "Developer",
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple" />,
    description: "Contributing to open source projects and helping fellow developers in the community.",
    period: "2023 - Present",
    link: "#",
    tags: ["Open Source", "Collaboration", "Community Support"]
  },
  {
    name: "Turing Hut Coding Club",
    role: "Core Member",
    icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-neon-red" />,
    description: "Actively contributing to the college's coding club, organizing events, and fostering a collaborative learning environment.",
    period: "2023 - Present",
    link: "#",
    tags: ["Club Activities", "Event Organization", "Teamwork"]
  }  
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="w-full md:container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Community Involvement
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            My contributions to the tech community and leadership roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {communities.map((community, index) => (
            <div
              key={index}
              className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-neon-green/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all">
                  {community.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-neon-green transition-colors">
                    {community.name}
                  </h3>
                  <p className="text-neon-blue font-medium text-sm sm:text-base">{community.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base min-h-[60px]">
                {community.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {community.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-neon-blue border border-neon-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 