import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, Shield } from 'lucide-react';
import { Button } from './ui/button';

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
    icon: <Bot className="w-5 h-5" />
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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Here are some of my key projects in robotics and cybersecurity, showcasing my hands-on experience and technical skills.
            </p>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView }: { project: Project, index: number, inView: boolean }) => {
  return (
    <motion.div 
      className="group rounded-3xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 10 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, rotateX: -2, rotateY: 2, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 p-3 rounded-full bg-background/80 backdrop-blur-sm z-20 border border-border">
          {project.icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.liveUrl && (
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink size={16} /> 
              Live Demo
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github size={16} /> 
            Source Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
