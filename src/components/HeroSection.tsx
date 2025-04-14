import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, FileText, Github, Mail, Code2, Trophy, Star, TrendingUp } from 'lucide-react';

const roles = [
  "FULL-STACK DEVELOPER",
  "PROBLEM SOLVER",
  "COMPETITIVE PROGRAMMER"
];

// Using real data from your profiles
const cpStats = [
  {
    platform: "LeetCode",
    rating: "1600+",
    solved: "100+",
    icon: <Trophy className="w-4 h-4 text-yellow-400" />,
    href: "https://leetcode.com/sairitesh",
    cardUrl: "https://leetcard.jacoblin.cool/sairitesh?theme=dark&font=Poppins&ext=contest&animation=true"
  },
  {
    platform: "CodeChef",
    rating: "1539",
    solved: "500+",
    stars: "2★",
    icon: <Star className="w-4 h-4 text-yellow-400" />,
    href: "https://www.codechef.com/users/sairitesh",
    globalRank: "26361",
    countryRank: "23695"
  },
  {
    platform: "Codeforces",
    rating: "1200+",
    solved: "70+",
    icon: <TrendingUp className="w-4 h-4 text-yellow-400" />,
    href: "https://codeforces.com/profile/sairiteshdomakuntla"
  }
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
      } else {
        setText(currentRole.substring(0, text.length - 1));
      }
    }, isDeleting ? 50 : 100);

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <section id="hero" className="min-h-screen grid-bg flex flex-col items-center justify-center relative px-0 md:px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="w-full md:container mx-auto text-center z-10 max-w-4xl flex flex-col items-center justify-center min-h-screen py-8">
        {/* Animated intro */}
        <div className="flex flex-col items-center w-full px-4 md:px-0 md:space-y-6">
          <h1 className={cn(
            "text-4xl md:text-7xl font-bold bg-gradient-neon bg-clip-text text-transparent bg-300% animate-gradient-flow transition-all duration-700 transform mb-3 md:mb-0",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            SAI RITESH DOMAKUNTLA
          </h1>

          <p className={cn(
            "text-neon-blue font-medium tracking-wider transition-all duration-700 transform h-7 md:h-8 mb-4 md:mb-0",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {text}<span className="animate-blink">|</span>
          </p>
          
          <p className={cn(
            "text-gray-300 max-w-2xl mx-auto text-base md:text-lg transition-all duration-700 delay-100 transform mb-6 md:mb-8",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I build exceptional and accessible digital experiences for the web.
            Transforming ideas into elegant, functional applications is my passion.
          </p>
          
          {/* CP Stats */}
          {/* Desktop version - full cards */}
          <div className={cn(
            "hidden md:grid grid-cols-3 gap-6 transition-all duration-700 delay-150 transform w-full max-w-4xl mx-auto",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {cpStats.map((stat, index) => (
              <a 
                key={`desktop-${index}`}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 px-6 py-4 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all group hover:bg-white/10 cursor-pointer relative"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredPlatform(stat.platform)}
                onMouseLeave={() => setHoveredPlatform(null)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                    {stat.icon}
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-neon-blue transition-colors">{stat.platform}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold text-neon-blue group-hover:scale-110 transition-transform">
                      {stat.rating}
                    </p>
                    <p className="text-xs text-gray-400">rating</p>
                    {stat.stars && (
                      <span className="text-yellow-400 text-sm ml-1">{stat.stars}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 group-hover:opacity-100 opacity-75"
                        style={{ width: `${Math.min((parseInt(stat.solved) / 1000) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400">
                      <span className="text-neon-blue font-medium">{stat.solved}</span> solved
                    </p>
                  </div>
                  {stat.globalRank && stat.countryRank && (
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Global: <span className="text-neon-blue">#{stat.globalRank}</span></span>
                      <span>India: <span className="text-neon-blue">#{stat.countryRank}</span></span>
                    </div>
                  )}
                </div>

                {/* Hover Card Preview */}
                {stat.cardUrl && hoveredPlatform === stat.platform && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <img 
                      src={stat.cardUrl} 
                      alt={`${stat.platform} Stats`} 
                      className="rounded-lg shadow-xl max-w-[300px]"
                    />
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile version - simplified cards in row */}
          <div className={cn(
            "flex md:hidden items-center justify-center gap-3 transition-all duration-700 delay-150 transform w-full mx-auto mb-6",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {cpStats.map((stat, index) => (
              <a 
                key={`mobile-${index}`}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/5 px-3 py-3 rounded-lg border border-white/10 transition-all hover:bg-white/10 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center">
                  <p className="text-xl font-bold text-neon-blue mb-1">
                    {stat.rating}
                  </p>
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-4 h-4 text-yellow-400">
                      {stat.icon}
                    </div>
                    <p className="text-xs text-gray-400">{stat.platform}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col md:flex-row items-center justify-center gap-3 transition-all duration-700 delay-200 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Mobile: Full width blue button */}
            {/* Desktop: Normal width button in a row */}
            <a 
              href="/sai_ritesh_resume.pdf" 
              target="_blank" 
              className="w-full md:w-auto px-5 md:px-6 py-3 text-sm md:text-base bg-neon-blue text-black font-medium rounded-md flex items-center justify-center gap-2 hover:animate-pulse-glow transition-all"
            >
              <FileText size={16} className="md:w-[18px] md:h-[18px]" />
              Download Resume
            </a>
            
            {/* Mobile: Two buttons in a row */}
            {/* Desktop: Normal buttons continuing the row */}
            <div className="flex flex-row w-full md:w-auto gap-3 mt-3 md:mt-0">
              <a 
                href="https://github.com/sairiteshdomakuntla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 md:flex-initial md:w-auto px-4 md:px-6 py-3 text-sm md:text-base bg-white/5 border border-white/10 hover:border-neon-blue/50 text-white rounded-md flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="whitespace-nowrap">GitHub</span>
              </a>
              
              <a 
                href="#contact" 
                className="flex-1 md:flex-initial md:w-auto px-4 md:px-6 py-3 text-sm md:text-base bg-white/5 border border-white/10 hover:border-neon-purple/50 text-white rounded-md flex items-center justify-center gap-2 transition-all hover:bg-white/10"
              >
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="whitespace-nowrap">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hide on mobile */}
      <div className="absolute bottom-4 md:bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors group opacity-75 hover:opacity-100"
          aria-label="Scroll to About section"
        >
          <span className="text-xs md:text-sm mb-2 group-hover:text-neon-blue transition-colors">
            Scroll Down
          </span>
          <div className="flex flex-col items-center gap-1">
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
