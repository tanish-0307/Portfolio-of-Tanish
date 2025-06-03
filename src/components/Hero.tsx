
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import HeroText3D from './HeroText3D';
import { Button } from './ui/button';

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0,rgba(255,255,255,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 transform-gpu">
            <HeroText3D />
          </div>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-muted-foreground mb-10 transition-all duration-1000 opacity-0 translate-y-4"
          >
            Ethical Hacking Enthusiast & Instrumentation Engineering Student
          </p>
          
          <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-2 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium animate-pulse duration-2000"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
