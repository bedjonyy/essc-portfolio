import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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

const projects: ProjectCard[] = [
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
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 bg-portfolio-orange rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-portfolio-orange-foreground">💼</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Projects
            </h2>
          </div>
          <div className="flex justify-between items-end mb-8">
            <p className="text-xl text-muted-foreground max-w-2xl">
              A selection of my recent projects showcasing different technologies and approaches to problem-solving.
            </p>
            <Button 
              asChild
              variant="outline" 
              className="border-portfolio-orange/30 hover:bg-portfolio-orange/10"
            >
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-gradient-card border-border hover:border-portfolio-orange/30 transition-all duration-300 shadow-card">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <motion.div 
                    className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="h-80 lg:h-96 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg-primary/80 to-transparent" />
                    </div>
                  </motion.div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium text-portfolio-orange mb-2 block">
                        Published on: {project.date}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-portfolio-orange/10 text-portfolio-orange rounded-full border border-portfolio-orange/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <Button variant="default" size="sm" className="bg-portfolio-orange hover:bg-portfolio-orange-glow">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="border-portfolio-orange/30 hover:bg-portfolio-orange/10">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}