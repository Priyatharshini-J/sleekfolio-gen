
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Handle background change on scroll
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Handle active section highlight
      const sections = ['about', 'projects', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient">Portfolio</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === 'about' 
                ? "text-primary" 
                : "hover:text-primary"
            )}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === 'projects' 
                ? "text-primary" 
                : "hover:text-primary"
            )}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === 'testimonials' 
                ? "text-primary" 
                : "hover:text-primary"
            )}
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === 'blog' 
                ? "text-primary" 
                : "hover:text-primary"
            )}
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={cn(
              "text-sm font-medium transition-colors",
              activeSection === 'contact' 
                ? "text-primary" 
                : "hover:text-primary"
            )}
          >
            Contact
          </button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 flex flex-col items-center justify-center gap-8",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <button onClick={() => scrollToSection('about')} className="text-xl font-medium hover:text-primary transition-colors">About</button>
        <button onClick={() => scrollToSection('projects')} className="text-xl font-medium hover:text-primary transition-colors">Projects</button>
        <button onClick={() => scrollToSection('testimonials')} className="text-xl font-medium hover:text-primary transition-colors">Testimonials</button>
        <button onClick={() => scrollToSection('blog')} className="text-xl font-medium hover:text-primary transition-colors">Blog</button>
        <button onClick={() => scrollToSection('contact')} className="text-xl font-medium hover:text-primary transition-colors">Contact</button>
      </div>
    </header>
  );
};

export default Header;
