
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, GraduationCap, User } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML/CSS",
    "Node.js", "UI/UX Design", "Tailwind CSS", "Next.js",
    "GraphQL", "RESTful APIs", "Figma", "Git"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-ratio-1 w-full max-w-lg mx-auto relative">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Developer working on a laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-background">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Close-up of code on a screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Hi, I'm <span className="text-gradient">Your Name</span></h3>
            <p className="text-muted-foreground">
              I'm a passionate developer and designer with over 5 years of experience creating beautiful, functional digital experiences. My expertise spans across frontend development, UI/UX design, and building scalable web applications.
            </p>
            <p className="text-muted-foreground">
              I believe in clean code, thoughtful design, and delivering projects that exceed expectations. When I'm not coding, you can find me hiking, reading, or exploring new coffee shops.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="glass-card hover-card">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <User size={24} className="text-primary" />
                  </div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-muted-foreground text-sm text-center">5+ Years</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-card">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  <h4 className="font-medium">Completed</h4>
                  <p className="text-muted-foreground text-sm text-center">20+ Projects</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover-card">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-muted-foreground text-sm text-center">Computer Science</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/5 hover:bg-white/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
