import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, Heart, Zap, Users, Star, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements?: string[];
}

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Apr 2024 — Present",
    title: "IT Consultant",
    company: "NOESIS Portugal",
    location: "Lisbon, Portugal",
    description: "Leading development of enterprise-level applications with focus on scalability and performance optimization.",
    achievements: [
      "Ensured uptime through proactive monitoring and alerting, cutting unplanned downtime and accelerating incident detection.",
      "Automated job scheduling across multiple applications and servers, reducing missed-job incidents through standardized cron management and failure alerts.",
      "Handled support requests across multiple channels, for enterprise clients across multiple client environments.",
      "Escalation procedures that ensure full diagnostic context and reduce resolution time for incidents.",
    ]
  },
  
];

const skills: Skill[] = [
  {
    name: "Problem Solver",
    icon: Target,
    description: "Analytical approach to complex technical challenges with innovative solutions."
  },
  {
    name: "Team Player", 
    icon: Users,
    description: "Collaborative mindset with strong communication and leadership abilities."
  },
  {
    name: "Fast Learner",
    icon: Zap,
    description: "Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape."
  },
  {
    name: "Quality Focused",
    icon: Star,
    description: "Committed to writing clean, maintainable code with comprehensive testing."
  },
  {
    name: "User Advocate",
    icon: Heart,
    description: "Passionate about creating exceptional user experiences and accessible applications."
  },
  {
    name: "Innovation Driven",
    icon: Trophy,
    description: "Constantly exploring new technologies and best practices to deliver cutting-edge solutions."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-20 px-8">
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
              <span className="text-sm font-bold text-portfolio-orange-foreground">⚡</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Experience
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            My professional journey in Computer Science Engineering, from IT Consultant to DevOps/System Admin Engineer.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-portfolio-orange/30" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-6 w-4 h-4 bg-portfolio-orange rounded-full border-4 border-portfolio-bg-primary shadow-glow" />
                  
                  <Card className="p-6 bg-gradient-card border-border hover:border-portfolio-orange/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-portfolio-orange font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {exp.achievements && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Core Strengths
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-portfolio-bg-tertiary border-border hover:border-portfolio-orange/30 transition-all duration-300 hover:shadow-card group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-portfolio-orange/10 rounded-lg flex items-center justify-center group-hover:bg-portfolio-orange/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-portfolio-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}