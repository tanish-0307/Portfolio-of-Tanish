
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroText3D from './HeroText3D';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const subtitleElement = subtitleRef.current;

    if (subtitleElement) {
      setTimeout(() => {
        subtitleElement.classList.add('opacity-100', 'translate-y-0');
      }, 1200);
    }
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0,rgba(255,255,255,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 transform-gpu"
          >
            <HeroText3D />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            TANISH PORTFOLIO
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10"
          >
            Ethical Hacking Enthusiast & Instrumentation Engineering Student
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center space-x-4"
          >
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-2 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/5"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium animate-pulse duration-2000 hover:scale-110 transition-transform"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
