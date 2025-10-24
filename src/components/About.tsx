
import React from 'react';
import { User, GraduationCap, Code, School, Building2 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-72 h-72">
                <Avatar className="w-72 h-72 rounded-2xl border border-border shadow-lg overflow-hidden">
                  <AvatarImage 
                    src="/lovable-uploads/8923e4dd-cab6-4ad4-a6e8-deda18b26714.png"
                    alt="Tanish S Profile Picture" 
                    className="object-cover"
                  />
                  <AvatarFallback>TS</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="pt-4 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Student & Entrepreneur
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A passionate second-year engineering student building RENSOLV, a renewable energy problem solver focusing on smart grid with AI. With a keen interest in photography, I'm dedicated to creating innovative solutions for sustainable energy management while building a strong foundation in electronics and programming through hands-on projects.
                </p>
                <div className="p-4 rounded-lg bg-muted border border-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Building2 size={18} className="mr-2" />
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
                  className="rounded-full apple-button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
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
    <div className="flex items-center group transition-all duration-200 hover:translate-x-2">
      <div className="mr-4 p-3 rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
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