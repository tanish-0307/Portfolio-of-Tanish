import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, Code, School, Building2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from './ui/button';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-72 h-72">
                <Avatar className="w-72 h-72 rounded-3xl border-2 border-border shadow-xl overflow-hidden">
                  <AvatarImage 
                    src="/lovable-uploads/8923e4dd-cab6-4ad4-a6e8-deda18b26714.png"
                    alt="Tanish S Profile Picture" 
                    className="object-cover"
                  />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
            
            <motion.div 
              className="pt-4 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Student & Entrepreneur
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A passionate second-year engineering student building RENSOLV, a renewable energy problem solver focusing on smart grid with AI. With a keen interest in photography, I'm dedicated to creating innovative solutions for sustainable energy management while building a strong foundation in electronics and programming through hands-on projects.
                </p>
                <div className="p-5 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Building2 size={18} className="mr-2 text-primary" />
                    RENSOLV
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A renewable energy problem solver focusing on smart grid with AI - Creating intelligent solutions for sustainable energy management and grid optimization.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <InfoItem 
                  icon={<User size={18} />} 
                  title="Name" 
                  value="Tanish.S" 
                />
                
                <InfoItem 
                  icon={<School size={18} />} 
                  title="Current Education" 
                  value="Second Year Engineering Student - B.E Electronics and Instrumentation" 
                  subvalue="SRM Valliammai Engineering College"
                />
                
                <InfoItem 
                  icon={<Building2 size={18} />} 
                  title="Startup" 
                  value="Building RENSOLV" 
                  subvalue="Renewable Energy Smart Grid with AI"
                />
                
                <InfoItem 
                  icon={<Code size={18} />} 
                  title="Core Skills" 
                  value="Python, C++, HTML, CSS, Robotics" 
                />
                
                <InfoItem 
                  icon={<GraduationCap size={18} />} 
                  title="Current Focus" 
                  value="Renewable Energy & Smart Grid AI" 
                />
              </div>
              
              <div>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ 
  icon, 
  title, 
  value, 
  subvalue
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  subvalue?: string;
}) => {
  return (
    <div className="flex items-center group transition-all duration-300 hover:translate-x-2">
      <div className="mr-4 p-3 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-muted-foreground">{value}</p>
        {subvalue && <p className="text-sm text-muted-foreground">{subvalue}</p>}
      </div>
    </div>
  );
};

export default About;