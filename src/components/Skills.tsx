import React from 'react';
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

const SkillBar = ({ skill, index, inView }: { skill: Skill, index: number, inView: boolean }) => {
  return (
    <motion.div 
      className="skill-bar"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        {skill.category !== 'languages' && (
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        )}
      </div>
      
      {skill.category !== 'languages' ? (
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={inView ? { width: `${skill.level}%` } : { width: "0%" }}
            transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      ) : (
        <div className="text-sm text-muted-foreground italic">Proficient</div>
      )}
    </motion.div>
  );
};

const CategoryCard = ({ title, children, delay, inView }: { title: string, children: React.ReactNode, delay: number, inView: boolean }) => {
  return (
    <motion.div 
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 15 }}
      transition={{ duration: 0.8, delay: delay * 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotateX: -3, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
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
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiency levels across various technologies and tools.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {(Object.keys(groupedSkills) as Array<keyof typeof Categories>).map((category, catIndex) => (
            <CategoryCard 
              key={category} 
              title={Categories[category]} 
              delay={catIndex}
              inView={inView}
            >
              {groupedSkills[category].map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={skillIndex}
                  inView={inView}
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
