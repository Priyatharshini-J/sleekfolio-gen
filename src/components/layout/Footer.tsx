
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-black py-12 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Portfolio</h3>
            <p className="text-muted-foreground max-w-md">
              A developer/designer portfolio showcasing creative work and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-primary transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Social</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter profile"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:hello@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
