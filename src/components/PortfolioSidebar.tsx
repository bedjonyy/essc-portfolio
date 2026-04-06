import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { 
  User, 
  Briefcase, 
  Award, 
  Mail, 
  Menu, 
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import avatarImage from "@/assets/avatar.jpg";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navigationItems = [
  { id: "about", label: "ABOUT", icon: User },
  { id: "projects", label: "PROJECTS", icon: Briefcase },
  { id: "experience", label: "EXPERIENCE", icon: Award },
  { id: "contact", label: "CONTACT", icon: Mail },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/edson-correia-77508b223/", label: "LinkedIn" },
];

export function PortfolioSidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setTimeout(() =>setIsMobileOpen(false), 50);
  };

  const sidebarContent = (
    <motion.div 
      className="h-full flex flex-col bg-portfolio-bg-secondary border-r border-border"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <motion.div 
          className="relative w-20 h-20 mx-auto mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={avatarImage} 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover ring-2 ring-portfolio-orange/20"
          />
          <div className="absolute inset-0 rounded-full bg-portfolio-orange/10 animate-glow-pulse" />
        </motion.div>
        <h1 className="text-xl font-bold text-center text-foreground">
          Edson Salvador Semedo Correia
        </h1>
        <p className="text-sm text-muted-foreground text-center mt-1">
          DevOps Engineer & System Admin
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 + 0.1 }}
            >
              <Button
                variant={activeSection === item.id ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-12 ${
                  activeSection === item.id 
                    ? "bg-portfolio-orange text-portfolio-orange-foreground shadow-orange" 
                    : "text-muted-foreground hover:text-foreground hover:bg-portfolio-bg-tertiary"
                }`}
                onClick={() => handleNavigate(item.id)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Resume Button */}
      <div className="p-4 border-t border-border">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/resume" className="w-full">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 h-12 border-portfolio-orange/30 text-portfolio-orange hover:bg-portfolio-orange/10 hover:border-portfolio-orange/50"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="p-4 border-t border-border">
        <div className="flex justify-center gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-portfolio-bg-tertiary hover:bg-portfolio-orange/20 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 + 0.4 }}
            >
              <social.icon className="w-4 h-4 text-muted-foreground hover:text-portfolio-orange transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-portfolio-bg-secondary/80 backdrop-blur-sm border border-border"
        onClick={toggleMobile}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 h-screen fixed left-0 top-0 z-40">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMobile}
            />
            <motion.div
              className="fixed left-0 top-0 w-80 h-screen z-50 md:hidden"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ 
                type: "tween", 
                ease: "easeInOut",
                duration: 0.2
              }}
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}