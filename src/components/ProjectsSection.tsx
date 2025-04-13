
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js and MongoDB. Features include user authentication, product management, and stripe payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing copy, blog posts, and social media content using OpenAI's GPT API.",
    tags: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates, filters, and customizable charts.",
    tags: ["React", "Redux", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.",
    tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile-first web app for tracking workouts, nutrition, and progress with customizable goals and data visualization.",
    tags: ["React Native", "GraphQL", "AWS", "Charts.js"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description: "Property listing and search platform with advanced filtering, map integration, and virtual tour functionality.",
    tags: ["Next.js", "Prisma", "Google Maps API", "AWS S3"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
  }
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 pb-4 relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-neon"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card glass rounded-xl overflow-hidden group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project image with overlay */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f19] to-transparent opacity-60"></div>
                
                {/* Hover overlay with actions */}
                <div 
                  className={cn(
                    "absolute inset-0 flex items-center justify-center gap-4 bg-neon-blue/20 backdrop-blur-sm transition-opacity duration-300",
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-neon-blue transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-neon-blue transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 text-xs rounded bg-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View details link */}
                <div className="pt-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-neon-blue hover:text-neon-purple transition-colors group"
                  >
                    View details
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
