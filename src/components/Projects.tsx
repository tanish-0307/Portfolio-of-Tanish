import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Robot, Shield } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
  liveUrl?: string;
  githubUrl: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Line Follower Robot",
    description: "Developed an autonomous line-following robot using infrared sensors and Arduino, capable of navigating predefined paths with precision control algorithms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    skills: ["Arduino", "C++", "Robotics", "Electronics", "Sensor Integration"],
    githubUrl: "https://github.com/tanish-0307/line-follower-robot",
    icon: <Robot className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Network Vulnerability Scanner",
    description: "Created a basic network vulnerability assessment tool using Python, capable of identifying common security vulnerabilities and generating detailed reports.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    skills: ["Python", "Network Security", "Penetration Testing", "Ethical Hacking"],
    githubUrl: "https://github.com/tanish-0307/vulnerability-scanner",
    icon: <Shield className="w-5 h-5" />
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects in robotics and cybersecurity, showcasing my hands-on experience and technical skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
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

export default Projects;
