
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
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
        <a href="#about" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
        <a href="#projects" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
        <a href="#testimonials" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
        <a href="#blog" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Blog</a>
        <a href="#contact" className="text-xl font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
