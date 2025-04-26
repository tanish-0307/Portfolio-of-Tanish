
import React, { useEffect, useRef } from 'react';
import { User, Calendar, MapPin } from 'lucide-react';

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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                alt="Developer at work" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Full-Stack Developer</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate developer with expertise in both frontend and backend technologies. 
                I love creating intuitive user interfaces and powerful server-side applications that 
                solve real-world problems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Name</h4>
                    <p className="text-muted-foreground">John Doe</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-muted-foreground">5+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
