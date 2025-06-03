
import React from 'react';
import { ArrowDown } from 'lucide-react';
import HeroText3D from './HeroText3D';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Apple-inspired background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <HeroText3D />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight"
          >
            TANISH PORTFOLIO
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Ethical Hacking Enthusiast & Instrumentation Engineering Student
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button 
              variant="default" 
              size="lg" 
              className="apple-button rounded-full bg-[#007AFF] hover:bg-[#0056CC] text-white px-8 py-4 text-lg font-medium transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="apple-button rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-[#007AFF] hover:text-[#007AFF] px-8 py-4 text-lg font-medium transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
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
        transition={{ duration: 1, delay: 1.8 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-light text-gray-500 dark:text-gray-400 hover:text-[#007AFF] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="mb-2 tracking-wider">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
