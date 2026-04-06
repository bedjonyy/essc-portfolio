import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const allProjects: ProjectCard[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
    date: "Jan 2024",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
    date: "Oct 2023",
    technologies: ["Vue.js", "Firebase", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Machine learning powered content creation platform with natural language processing and automated optimization.",
    date: "Aug 2023",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "Real-time financial analytics platform with custom charts, automated reporting, and investment tracking.",
    date: "May 2023",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Social Media Scheduler",
    description: "Multi-platform social media management tool with AI-powered content suggestions and performance analytics.",
    date: "Mar 2023",
    technologies: ["Next.js", "Redis", "OpenAI API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Comprehensive LMS with video streaming, interactive quizzes, progress tracking, and certification management.",
    date: "Jan 2023",
    technologies: ["React", "Express", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-portfolio-bg-primary">
      <div className="container mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Button 
            asChild
            variant="ghost" 
            className="mb-8 text-portfolio-orange hover:bg-portfolio-orange/10"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 bg-portfolio-orange rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-portfolio-orange-foreground">💼</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              All Projects
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore my complete portfolio of projects, showcasing a diverse range of technologies and creative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gradient-card border-border hover:border-portfolio-orange/30 transition-all duration-300 shadow-card group">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg-primary/80 to-transparent" />
                  </div>
                </motion.div>
                
                <div className="p-6">
                  <span className="text-sm font-medium text-portfolio-orange mb-2 block">
                    {project.date}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-portfolio-orange/10 text-portfolio-orange rounded-full border border-portfolio-orange/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button variant="default" size="sm" className="bg-portfolio-orange hover:bg-portfolio-orange-glow flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="border-portfolio-orange/30 hover:bg-portfolio-orange/10 flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}