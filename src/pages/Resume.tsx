import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="min-h-screen bg-portfolio-bg-primary">
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-10 bg-portfolio-bg-secondary/80 backdrop-blur-sm border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-foreground">Resume Preview</h1>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/cvLatestEN.pdf"
                download="Edson_Salvador_Resume.pdf"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </a>
              <a
                href="/cvLatestEN.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Resume Content */}
      <motion.main 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-portfolio-bg-secondary rounded-lg border border-border overflow-hidden shadow-elegant">
            {/* PDF Viewer */}
            <div className="relative">
              <iframe
                src="/cvLatestEN.pdf"
                className="w-full h-[800px] md:h-[1000px]"
                title="Resume Preview"
                style={{ border: 'none' }}
              />
              {/* Fallback message for browsers that don't support PDF preview */}
              <div className="absolute inset-0 flex items-center justify-center bg-portfolio-bg-tertiary text-center p-8 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                <div className="pointer-events-auto">
                  <p className="text-muted-foreground mb-4">
                    If the resume doesn't display properly, you can:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/cvLatestEN.pdf" download="Edson_Salvador_Resume.pdf">
                      <Button variant="outline" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </a>
                    <a href="/cvLatestEN.pdf" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View in Browser
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground">
              Last updated: April 2025
            </p>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}