
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
      {/* Clean minimal background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/30"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <HeroText3D />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            TANISH PORTFOLIO
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Instrumentation Engineering Student & Entrepreneur
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full px-8 py-4 text-lg font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-4 text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="mb-2">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
