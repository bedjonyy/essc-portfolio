import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PortfolioSidebar } from "./PortfolioSidebar";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";

export function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      <PortfolioSidebar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      
      <motion.main 
        className="md:ml-80 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-portfolio-orange/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-portfolio-orange/3 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-portfolio-orange/5 rounded-full blur-3xl" />
        </div>

        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Scroll indicator */}
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col gap-3">
            {["about", "projects", "experience", "contact"].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section
                    ? "bg-portfolio-orange border-portfolio-orange shadow-glow"
                    : "border-portfolio-orange/30 hover:border-portfolio-orange/60"
                }`}
                aria-label={`Go to ${section} section`}
              />
            ))}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}