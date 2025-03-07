
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-[128px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-[128px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "inline-block py-1 px-3 mb-8 rounded-full",
            "bg-white/5 border border-white/10 backdrop-blur-sm",
            "animate-fade-in"
          )}>
            <span className="text-sm font-medium">Developer & Designer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '150ms' }}>
            Creating digital <span className="text-gradient">experiences</span> that matter
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            I design and build exceptional digital experiences that are modern, responsive, and delightful to use. Let's turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '450ms' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 hover:bg-white/5"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 transition-colors hover:bg-white/10"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
