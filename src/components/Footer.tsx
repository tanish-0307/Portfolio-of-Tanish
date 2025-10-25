import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <a href="#" className="text-xl font-semibold text-foreground">
                Tanish Portfolio
              </a>
              <p className="text-muted-foreground mt-2 text-sm max-w-xs">
                Building innovative solutions in renewable energy and smart grid technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-center md:text-right">Quick Links</h4>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Tanish Portfolio. All rights reserved.
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center px-6 py-2 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                <span className="mr-2">↑</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
