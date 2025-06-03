
import React, { useEffect, useRef } from 'react';
import { User, GraduationCap, Code, School, Building2 } from 'lucide-react';
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
      {/* Enhanced 3D Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0,transparent_70%)]"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 360],
            x: [-150, 150, -150],
            y: [-100, 100, -100]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="relative w-72 h-72"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur-xl opacity-30"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                <Avatar className="w-72 h-72 rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden relative z-10 backdrop-blur-sm">
                  <AvatarImage 
                    src="/lovable-uploads/8923e4dd-cab6-4ad4-a6e8-deda18b26714.png"
                    alt="Tanish S Profile Picture" 
                    className="object-cover"
                  />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-4 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Student, Entrepreneur & Cybersecurity Enthusiast
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A passionate first-year engineering student and founder of CYBERDIOXIDE, a startup dedicated to making cybersecurity accessible to everyone. Currently exploring the realms of ethical hacking while building a foundation in electronics and programming through hands-on projects.
                </p>
                <motion.div 
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" }}
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                    <Building2 size={18} className="mr-2" />
                    CYBERDIOXIDE
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    "Cybersecurity for Everyone" - Our mission is to democratize cybersecurity knowledge and tools, making digital safety accessible to individuals and businesses of all sizes.
                  </p>
                </motion.div>
              </motion.div>
              
              <div className="space-y-4 mb-8">
                <InfoItem 
                  icon={<User size={18} />} 
                  title="Name" 
                  value="Tanish.S" 
                  delay={0.6} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<School size={18} />} 
                  title="Current Education" 
                  value="First Year - B.E Electronics and Instrumentation" 
                  subvalue="SRM Valliammai Engineering College"
                  delay={0.7} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<Building2 size={18} />} 
                  title="Startup" 
                  value="Founder & CEO at CYBERDIOXIDE" 
                  subvalue="Cybersecurity for Everyone"
                  delay={0.75} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<Code size={18} />} 
                  title="Core Skills" 
                  value="Python, C++, HTML, CSS, Robotics" 
                  delay={0.8} 
                  inView={inView} 
                />
                
                <InfoItem 
                  icon={<GraduationCap size={18} />} 
                  title="Current Focus" 
                  value="Ethical Hacking & Cybersecurity" 
                  delay={0.9} 
                  inView={inView} 
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <AnimatedButton 
                  variant="default" 
                  size="lg" 
                  rounded="full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </AnimatedButton>
              </motion.div>
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
      className="flex items-center group"
      initial={{ opacity: 0, x: -20, rotateY: -10 }}
      animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -20, rotateY: -10 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05,
        x: 10,
        transition: { type: "spring", stiffness: 400 }
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div 
        className="mr-4 p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"
        whileHover={{ 
          rotateY: 180,
          scale: 1.1
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="font-medium group-hover:text-blue-500 transition-colors">{title}</h4>
        <p className="text-muted-foreground">{value}</p>
        {subvalue && <p className="text-sm text-muted-foreground">{subvalue}</p>}
      </div>
    </motion.div>
  );
};

export default About;
