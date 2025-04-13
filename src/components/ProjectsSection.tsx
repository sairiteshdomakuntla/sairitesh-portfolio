import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Gamified Habit Tracker",
    description: "A gamified habit tracker with animations, level progression, and a rewards system to build consistency in habits.",
    tags: ["React", "Framer Motion", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1616587894052-24597c1bd4bc?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/Gamified-Habit-Tracker",
    live: "https://habit-tracker-iota-coral.vercel.app/"
  },
  {
    id: 2,
    title: "Zyra - Virtual Assistant",
    description: "A voice-powered neon-themed virtual assistant built with Gemini API and React, supporting real-time responses.",
    tags: ["React", "Gemini API", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1612832021024-7b8e1a0c6f3e?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/Zyra---Virtual-Assistant",
    live: "https://zyra-virtual-assistant.vercel.app/"
  },
  {
    id: 3,
    title: "AI Code Reviewer / Visualizer",
    description: "An intelligent code reviewer evolving into a code visualizer that highlights execution flow, logic, and variables.",
    tags: ["React", "AI", "Code Analysis"],
    image: "https://images.unsplash.com/photo-1581093588401-12d8effadf29?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/AI-Code-Reviewer",
    live: "https://ai-code-reviewer-ruddy.vercel.app/"
  },
  {
    id: 4,
    title: "WhatsApp Clone",
    description: "A MERN stack real-time messaging app with interest-based chat access and WebSocket-powered communication.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1620192189865-1d661f2d8984?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/whatsapp-clone1",
    live: "https://github.com/sairiteshdomakuntla/whatsapp-clone1"
  },
  {
    id: 5,
    title: "Library Management System",
    description: "A feature-rich system to manage book lending, integrated with Azure and deployed on a custom domain.",
    tags: ["React", "Azure", "CI/CD", "MongoDB"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80",
    // github: "https://library.24ninjas.in",
    // live: "https://library.24ninjas.in"
    github: "https://github.com/sairiteshdomakuntla",
    live: "https://github.com/sairiteshdomakuntla"
  },
  {
    id: 6,
    title: "Event Management System",
    description: "System to organize and manage events with scheduling and participant tracking capabilities.",
    tags: ["React", "TailwindCSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1559027615-5c5c6e1c8b5d?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/Event-Management",
    live: "https://event-management-psi-seven.vercel.app/"
  },
  {
    id: 7,
    title: "Student Planner",
    description: "Task management platform with CRUD for tasks and subtasks, featuring responsive cross-device usage.",
    tags: ["React", "TailwindCSS", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1584697964154-8e8f6c6e8e8e?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/study-planner-MA11",
    live: "https://study-planner-ma-11.vercel.app/"
  },
  {
    id: 8,
    title: "Excelify",
    description: "Engineered a data visualization platform with Excel file processing and interactive dashboard capabilities.",
    tags: ["React", "ExcelJS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1581093588401-12d8effadf29?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/askarthikey/xcelifiee-repo",
    live: ""
  },
  {
    id: 9,
    title: "YTWrap",
    description: "Developing a creator-editor platform with automated video processing pipeline using AWS S3 storage.",
    tags: ["AWS", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1612832021024-7b8e1a0c6f3e?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla",
    live: ""
  },
  {
    id: 10,
    title: "Anime Stream",
    description: "Created a streaming platform with optimized caching and lazy loading, reducing load times by 60%.",
    tags: ["React", "Lazy Load", "Vercel"],
    image: "https://images.unsplash.com/photo-1601933470928-c6e6c1c6c6c6?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/kmahesh18/anime",
    live: "https://zenkai-ochre.vercel.app/"
  },
  {
    id: 11,
    title: "Blog Website",
    description: "Created a dynamic blog platform with role-based access control and global state management.",
    tags: ["React", "TailwindCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1601933470928-c6e6c1c6c6c6?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/InkFlow-BlogApp",
    live: "https://inkflow-ritesh.vercel.app/"
  },
  {
    id: 12,
    title: "React Chat App",
    description: "Real-time chat platform supporting group chats and direct messaging with 99.9% uptime.",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1612832021024-7b8e1a0c6f3e?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/chat-app",
    live: "https://chat-app-qaox.onrender.com/"
  },
  {
    id: 13,
    title: "Lost and Found",
    description: "A real-time item reporting and recovery platform, enabling users to report lost or found items with live updates.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/LostAndFound",
    live: "https://lost-and-found-blue.vercel.app/"
  },
  {
    id: 14,
    title: "User Management System",
    description: "Secure user authentication system with role-based access, using React, Redux, and React Hook Form for frontend validation.",
    tags: ["React", "Redux", "TailwindCSS", "React Hook Form"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
    github: "https://github.com/sairiteshdomakuntla/User-Management-System",
    live: "https://user-management-system-gamma.vercel.app/"
  }

]
 



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
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-neon-blue transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
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
