import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h1 
                className="text-6xl lg:text-8xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Edson
                <br />
                <span className="text-portfolio-orange">Correia</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                DevOps Engineer & System Admin
              </motion.p>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-card border-portfolio-orange/20 relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <Quote className="w-8 h-8 text-portfolio-orange/30" />
                </div>
                <blockquote className="text-lg leading-relaxed text-foreground mt-8 mb-4">
                  "Motivated and committed Computer Science Engineer eager to start a career in DevOps and 
                  Linux Systems Administrator with hands-on experience in cloud infrastructure, 
                  automation, and monitoring. I build and maintain reliable environments using AWS, Ansible, Terraform, 
                  Kubernetes, and Bash/Python scripting — with a focus on security, compliance, and reducing manual toil. 
                  Currently open to Application Operations and DevOps roles where I can help teams ship and deliver faster."
                </blockquote>
                <cite className="text-sm text-portfolio-orange font-medium">
                  — Edson Correia, DevOps & System Admin
                </cite>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center bg-portfolio-bg-tertiary border-border hover:border-portfolio-orange/30 transition-colors">
                <h3 className="text-2xl font-bold text-portfolio-orange mb-2">10+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="p-6 text-center bg-portfolio-bg-tertiary border-border hover:border-portfolio-orange/30 transition-colors">
                <h3 className="text-2xl font-bold text-portfolio-orange mb-2">2+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Geometric Design Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-96 h-96">
              {/* Background geometric shapes */}
              <motion.div 
                className="absolute inset-0 grid grid-cols-3 gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-2xl ${
                      i === 4 ? 'bg-portfolio-orange' : 'bg-portfolio-bg-tertiary'
                    } ${i % 3 === 1 ? 'animate-float' : ''}`}
                    style={{
                      animationDelay: `${i * 0.2}s`
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute top-8 right-8 w-8 h-8 bg-portfolio-orange rounded-full animate-glow-pulse"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute bottom-12 left-8 w-6 h-6 bg-portfolio-orange/50 rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}