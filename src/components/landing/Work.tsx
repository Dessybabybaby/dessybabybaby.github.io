import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    name: "CVE-RSS Alert System",
    summary: "Automated vulnerability monitoring system reducing triage time by 95%.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Security Terminal Aesthetic
    link: "https://github.com/Dessybabybaby/cve-rss-alert-system",
    tags: ["n8n", "Security Operations", "Automation"]
  },
  {
    name: "Secret Exposure Pipeline",
    summary: "Real-time detection of exposed credentials in public repositories.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800", // Server/Data Aesthetic
    link: "https://github.com/Dessybabybaby/secret-exposure-monitoring-pipeline",
    tags: ["DevSecOps", "GitHub API", "Regex"]
  },
  {
    name: "OSINT Email Harvester",
    summary: "High-speed reconnaissance tool for automated phishing simulations.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // Deep Tech Aesthetic
    link: "https://github.com/Dessybabybaby/osint-email-harvester",
    tags: ["OSINT", "Automation", "Recon"]
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="p-8 md:p-16 bg-black border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            layoutId={project.name}
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="relative h-[400px] overflow-hidden border border-white/10 cursor-pointer group rounded-sm"
          >
            {/* Background Image with Hover Zoom */}
            <motion.img 
              src={project.image} 
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-[#ff5f1f] font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Project Briefing</p>
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tighter">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-[#ff5f1f]" />
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Read Impact _</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-40" 
            />
            
            {/* Modal Popup */}
            <motion.div
              layoutId={selectedProject.name}
              className="fixed inset-0 m-auto w-[95%] max-w-3xl h-fit max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-hidden z-50 rounded-lg shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Visual Side */}
                <div className="h-64 md:h-full relative overflow-hidden">
                  <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#ff5f1f]/20 mix-blend-overlay" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 relative">
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <h2 className="text-3xl font-black text-white uppercase mb-6 tracking-tighter leading-none">
                    {selectedProject.name}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <p className="text-[#ff5f1f] text-[10px] font-mono uppercase mb-2 tracking-[0.2em]">Objective & Outcome</p>
                      <p className="text-white/70 italic text-sm leading-relaxed">
                        {selectedProject.summary}
                      </p>
                    </div>

                    <div>
                      <p className="text-[#ff5f1f] text-[10px] font-mono uppercase mb-3 tracking-[0.2em]">Core Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono border border-white/10 px-3 py-1 text-white/60 bg-white/5 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#ff5f1f] text-black font-black uppercase text-xs rounded-sm hover:bg-white transition-all duration-300 group"
                    >
                      Enter Repository 
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}