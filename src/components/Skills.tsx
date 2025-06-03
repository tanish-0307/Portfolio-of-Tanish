
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'tools' | 'other' | 'languages';
}

const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'C++', level: 85, category: 'programming' },
  { name: 'Java', level: 70, category: 'programming' },
  { name: 'HTML', level: 80, category: 'programming' },
  
  // Tools & Software
  { name: 'Microsoft Word', level: 95, category: 'tools' },
  { name: 'Microsoft Excel', level: 95, category: 'tools' },
  { name: 'Microsoft PowerPoint', level: 95, category: 'tools' },
  
  // Other Skills
  { name: 'Ethical Hacking', level: 85, category: 'other' },
  { name: 'Cybersecurity', level: 85, category: 'other' },
  { name: 'Robotics', level: 80, category: 'other' },
  { name: 'Photography', level: 90, category: 'other' },
  { name: 'Video Editing', level: 85, category: 'other' },
  
  // Languages
  { name: 'English', level: 95, category: 'languages' },
  { name: 'Tamil', level: 100, category: 'languages' },
  { name: 'Hindi', level: 85, category: 'languages' },
];

const Categories = {
  programming: 'Programming Languages',
  tools: 'Tools & Software',
  other: 'Technical Skills',
  languages: 'Languages',
};

const SkillBar = ({ skill, index }: { skill: Skill, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className="skill-bar opacity-0 translate-y-4 transition-all duration-700 ease-out"
      style={{ 
        opacity: inView ? 1 : 0, 
        transform: inView ? 'translateY(0)' : 'translateY(4px)',
        transitionDelay: `${index * 100}ms` 
      }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        {skill.category !== 'languages' && (
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        )}
      </div>
      
      {skill.category !== 'languages' ? (
        <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
            initial={{ width: "0%" }}
            animate={inView ? { width: `${skill.level}%` } : { width: "0%" }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
          />
        </div>
      ) : (
        <div className="text-sm text-muted-foreground italic">Proficient</div>
      )}
    </div>
  );
};

const CategoryCard = ({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <div className="w-2 h-6 bg-primary rounded-full mr-3"></div>
        {title}
      </h3>
      <div className="space-y-5">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.08)_0,rgba(255,255,255,0)_60%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiency levels across various technologies and tools.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(Object.keys(groupedSkills) as Array<keyof typeof Categories>).map((category, catIndex) => (
            <CategoryCard 
              key={category} 
              title={Categories[category]} 
              delay={catIndex}
            >
              {groupedSkills[category].map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={skillIndex} 
                />
              ))}
            </CategoryCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
