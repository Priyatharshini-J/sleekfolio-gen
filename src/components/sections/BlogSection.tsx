
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  url: string;
}

const BlogSection = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Best Practices for Modern React Development",
      excerpt: "Exploring current best practices, patterns, and tools for building React applications in 2023.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "React",
      url: "#blog/1"
    },
    {
      id: 2,
      title: "The Complete Guide to CSS Grid Layout",
      excerpt: "A comprehensive guide to CSS Grid Layout and how it can revolutionize your web layouts.",
      date: "May 22, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "CSS",
      url: "#blog/2"
    },
    {
      id: 3,
      title: "Understanding Web Accessibility: ARIA and Beyond",
      excerpt: "Why accessibility matters and how to implement it effectively in your web projects.",
      date: "April 10, 2023",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Accessibility",
      url: "#blog/3"
    },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-black/40">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">Blog</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="glass-card overflow-hidden hover-card">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary" asChild>
                  <a href={post.url}>
                    Read More <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
