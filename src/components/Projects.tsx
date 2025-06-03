
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
      {/* Enhanced 3D Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.1)_0,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/4 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-1400"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Here are some of my key projects in robotics and cybersecurity, showcasing my hands-on experience and technical skills.
            </p>
          </motion.div>
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
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
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
        <motion.div 
          className="absolute top-4 left-4 p-3 rounded-full bg-white/10 backdrop-blur-md z-20 border border-white/20"
          initial={{ rotate: -20, opacity: 0, scale: 0 }}
          animate={inView ? { rotate: 0, opacity: 1, scale: 1 } : { rotate: -20, opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
        >
          {project.icon}
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, i) => (
            <motion.span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -10, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 + 0.5 }}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 400 }
              }}
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
              className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/20"
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
            className="text-sm border-white/20 hover:border-white/40 hover:bg-white/5"
          >
            <Github size={16} /> 
            Source Code
          </AnimatedButton>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
