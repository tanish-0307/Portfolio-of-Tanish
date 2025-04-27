
import React, { useEffect, useRef } from 'react';

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

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            
            if (entry.target.classList.contains('skill-bar')) {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              const progressBar = entry.target.querySelector('.progress-bar');
              
              if (progressBar) {
                setTimeout(() => {
                  const skill = skills[index];
                  if (skill.category !== 'languages') {
                    progressBar.setAttribute('style', `width: ${skill.level}%; transition: width 1s cubic-bezier(0.4, 0, 0.2, 1)`);
                  }
                }, 100 * index);
              }
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            My technical skills and proficiency levels across various technologies and tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {(Object.keys(groupedSkills) as Array<keyof typeof Categories>).map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">{Categories[category]}</h3>
              
              <div className="space-y-5">
                {groupedSkills[category].map((skill, index) => (
                  <div 
                    key={skill.name}
                    ref={el => skillRefs.current.push(el)}
                    className="skill-bar opacity-0 translate-y-4 transition-all duration-700 ease-out"
                    data-index={(Object.keys(groupedSkills) as Array<keyof typeof Categories>).indexOf(category) * 10 + index}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      {category !== 'languages' && (
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    {category !== 'languages' ? (
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="progress-bar h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground italic">Proficient</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
