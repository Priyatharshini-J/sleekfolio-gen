
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  category: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with payment processing, user accounts, and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "web"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio website template for creatives and developers.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "design"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "An intuitive task management application with real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Vue.js", "Firebase", "CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "web"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with forecasts, maps, and location search.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "web"
    },
    {
      id: 5,
      title: "Mobile App UI Kit",
      description: "A comprehensive UI kit for mobile app designers with 100+ components.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["Figma", "UI Design", "Mobile"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "design"
    },
    {
      id: 6,
      title: "Developer Blog",
      description: "A technical blog with articles on web development and programming.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Next.js", "MDX", "Tailwind CSS"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com",
      category: "web"
    },
  ];

  const categories = ["all", "web", "design", "mobile"];
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-black/40">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore my recent work across web development, design, and more.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-primary" : "border-white/10 hover:bg-white/5"}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden hover-card">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="border-white/10" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" /> Code
                  </a>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
