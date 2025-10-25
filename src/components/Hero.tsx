
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              TANISH PORTFOLIO
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Instrumentation Engineering Student & Entrepreneur
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="mb-2 font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
