
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Working with this developer was an exceptional experience. They delivered our project on time and exceeded all our expectations. Their technical expertise and attention to detail are truly impressive.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Creative Director",
      company: "Design Studio",
      content: "An incredibly talented designer who transformed our vision into a stunning reality. Their understanding of our brand and creative approach made all the difference in our project.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovate Labs",
      content: "I've worked with many developers, but few have the combination of technical skill and communication clarity that they possess. Our app launch was a huge success thanks to their contributions.",
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Lead",
      company: "BrandForward",
      content: "The website they created for our campaign drove conversion rates beyond our targets. Their understanding of both design aesthetics and user experience principles is exceptional.",
      image: "https://randomuser.me/api/portraits/women/17.jpg"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from the people I've had the pleasure of working with.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="glass-card">
                    <CardContent className="pt-6 pb-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        {testimonial.image && (
                          <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="text-primary mb-4">
                            <Quote size={32} />
                          </div>
                          <blockquote className="text-lg mb-4">
                            "{testimonial.content}"
                          </blockquote>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeIndex === index 
                      ? "bg-primary scale-110" 
                      : "bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/10 hover:bg-white/5 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-white/10 hover:bg-white/5 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
