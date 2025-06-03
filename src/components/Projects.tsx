
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Bot, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedButton } from './ui/animated-button';

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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(var(--primary),0.05)_0,rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key projects in robotics and cybersecurity, showcasing my hands-on experience and technical skills.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-100px'
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group rounded-xl overflow-hidden border border-white/10 bg-black/5 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:shadow-primary/10"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 z-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
        />
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          initial={{ scale: 1.2, filter: "blur(5px)" }}
          animate={inView ? { scale: 1, filter: "blur(0px)" } : { scale: 1.2, filter: "blur(5px)" }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.1 }}
        />
        <div className="absolute top-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-md z-20">
          <motion.div 
            initial={{ rotate: -20, opacity: 0 }}
            animate={inView ? { rotate: 0, opacity: 1 } : { rotate: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {project.icon}
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, i) => (
            <motion.span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 + 0.5 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.liveUrl && (
            <AnimatedButton 
              variant="glass" 
              size="sm" 
              rounded="full"
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="text-sm"
            >
              <ExternalLink size={16} /> 
              Live Demo
            </AnimatedButton>
          )}
          <AnimatedButton 
            variant="outline" 
            size="sm" 
            rounded="full"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="text-sm"
          >
            <Github size={16} /> 
            Source Code
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
