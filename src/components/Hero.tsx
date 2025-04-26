
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const subtitleElement = subtitleRef.current;

    if (textElement) {
      const text = textElement.innerText;
      textElement.innerHTML = '';
      
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.setProperty('--index', `${index}`);
        textElement.appendChild(span);
      });

      setTimeout(() => {
        textElement.classList.add('animated');
      }, 100);
    }

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
          <h1 
            ref={textRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 reveal-text"
          >
            Building Digital Experiences That Matter
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-muted-foreground mb-10 transition-all duration-1000 opacity-0 translate-y-4"
          >
            Frontend & Backend Developer crafting beautiful, functional websites and applications
          </p>
          
          <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium animate-pulse duration-2000"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
