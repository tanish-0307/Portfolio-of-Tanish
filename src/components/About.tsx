
import React, { useEffect, useRef } from 'react';
import { User, GraduationCap, Code, School } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedButton } from './ui/animated-button';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(var(--primary),0.08)_0,rgba(255,255,255,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-72 h-72">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/40 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
                <Avatar className="w-72 h-72 rounded-2xl border-4 border-white/10 shadow-lg overflow-hidden relative z-10">
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
              className="pt-4"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Student & Aspiring Engineer</h3>
              <p className="text-muted-foreground mb-6">
                A passionate first-year engineering student with a strong interest in robotics
                and cybersecurity. Currently exploring the realms of ethical hacking while building
                a foundation in electronics and programming through hands-on projects.
              </p>
              
              <div className="space-y-4 mb-8">
                <InfoItem 
                  icon={<User size={18} />} 
                  title="Name" 
                  value="Tanish.S" 
                  delay={0.5} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<School size={18} />} 
                  title="Current Education" 
                  value="First Year - B.E Electronics and Instrumentation" 
                  subvalue="SRM Valliammai Engineering College"
                  delay={0.6} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<Code size={18} />} 
                  title="Core Skills" 
                  value="Python, C++, HTML, CSS, Robotics" 
                  delay={0.7} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<GraduationCap size={18} />} 
                  title="Current Focus" 
                  value="Ethical Hacking & Cybersecurity" 
                  delay={0.8} 
                  inView={inView} 
                />
              </div>
              
              <AnimatedButton 
                variant="default" 
                size="lg" 
                rounded="full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoItem = ({ 
  icon, 
  title, 
  value, 
  subvalue, 
  delay, 
  inView 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  subvalue?: string;
  delay: number;
  inView: boolean;
}) => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mr-4 p-2 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground">{value}</p>
        {subvalue && <p className="text-sm text-muted-foreground">{subvalue}</p>}
      </div>
    </motion.div>
  );
};

export default About;
