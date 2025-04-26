import React, { useEffect, useRef } from 'react';
import { User, GraduationCap, Code, School } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-72 h-72 rounded-2xl border-4 border-primary/30 shadow-lg">
                <AvatarImage 
                  src="/lovable-uploads/8923e4dd-cab6-4ad4-a6e8-deda18b26714.png"
                  alt="Tanish S Profile Picture" 
                  className="object-cover"
                />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4">Student & Aspiring Engineer</h3>
              <p className="text-muted-foreground mb-6">
                A passionate coder and electronics enthusiast with a strong background in robotics 
                and programming. Currently exploring the realms of ethical hacking and cybersecurity 
                while pursuing my engineering degree.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Name</h4>
                    <p className="text-muted-foreground">Tanish.S</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <School size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-muted-foreground">B.E Electronics and Instrumentation</p>
                    <p className="text-sm text-muted-foreground">SRM Valliammai Engineering College</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Core Skills</h4>
                    <p className="text-muted-foreground">Python, C++, HTML, CSS, Robotics</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Current Focus</h4>
                    <p className="text-muted-foreground">Ethical Hacking & Cybersecurity</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
