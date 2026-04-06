/// <reference types="vite/client" />
import { motion } from "framer-motion";
import { Mail, Send, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  
  {
    icon: Mail,
    label: "Email",
    value: "esalvador0615@gmail.com"
  }
];

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/edson-correia-77508b223/", description: "Professional network and career updates" },
  { name: "GitHub", url: "https://github.com/bedjonyy/", description: "Open source projects and code repositories" }
  
];

export function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-8">
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
              <span className="text-sm font-bold text-portfolio-orange-foreground">📧</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
              Contact
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to be part of your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-portfolio-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-portfolio-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-portfolio-bg-tertiary rounded-lg hover:bg-portfolio-orange/10 transition-colors group"
                  >
                    <div>
                      <span className="font-medium text-foreground">{social.name}</span>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-portfolio-orange transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-card border-portfolio-orange/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      className="mt-1 bg-portfolio-bg-tertiary border-border focus:border-portfolio-orange"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-1 bg-portfolio-bg-tertiary border-border focus:border-portfolio-orange"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className="mt-1 bg-portfolio-bg-tertiary border-border focus:border-portfolio-orange"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={6}
                    className="mt-1 bg-portfolio-bg-tertiary border-border focus:border-portfolio-orange resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-orange hover:bg-portfolio-orange-glow text-portfolio-orange-foreground font-semibold py-3 shadow-orange"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-portfolio-orange/20 text-center"
        >
          <div className="bg-portfolio-orange/10 py-4 px-6 rounded-lg">
            <p className="text-sm text-muted-foreground">
              © 2026 EMSolution. All rights reserved by EMSolution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}