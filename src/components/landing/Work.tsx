import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    name: "CVE-RSS Alert System",
    problem: "Security teams spend 4+ hours weekly manually checking NVD/CISA databases, risking missed 'Zero-Day' threats.",
    impact: "95% reduction in manual monitoring time. 60% reduction in alert noise via CVSS logic-based filtering.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", 
    link: "https://github.com/Dessybabybaby/cve-rss-alert-system",
    tags: ["NVD API", "CISA Feed", "Automation"]
  },
  {
    name: "Secret Exposure Pipeline",
    problem: "Accidental credential commits in public repos create immediate entry points for attackers.",
    impact: "Real-time detection of 15+ secret types. Continuous monitoring of attack surface with 0ms manual oversight.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200", 
    link: "https://github.com/Dessybabybaby/secret-exposure-monitoring-pipeline",
    tags: ["DevSecOps", "GitHub API", "Security"]
  },
  {
    name: "OSINT Email Harvester",
    problem: "Manual reconnaissance for phishing simulations is time-expensive and prone to data errors.",
    impact: "Reduced recon phase from hours to seconds. Improved simulation accuracy by 40% via automated validation.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200", 
    link: "https://github.com/Dessybabybaby/osint-email-harvester",
    tags: ["Regex", "RFC 5322", "n8n"]
  },
  {
    name: "Automated Backup Validator",
    problem: "Traditional monitoring misses silent bit-rot and rollback attacks where attackers restore older 'clean' backups to hide presence.",
    impact: "Stateless SHA-256 integrity verification. Detects tampering and temporal inconsistencies in S3 storage with 0ms local FS access.",
    image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80&w=1200", 
    link: "https://github.com/Dessybabybaby/automated-backup-validator",
    tags: ["SHA-256", "n8n", "S3 Storage", "Integrity"]
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="p-8 md:p-16 bg-black border-b border-white/10">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-[#ff5f1f] font-mono text-[10px] mb-4 tracking-[0.4em] uppercase opacity-60">
          // Projects Architecture
        </p>
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
          SECURE <span className="text-white/20">ARCHIVES.</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            layoutId={project.name}
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="relative h-[400px] overflow-hidden border border-white/10 cursor-pointer group rounded-sm bg-[#0a0a0a]"
          >
            <motion.img 
              src={project.image} 
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <p className="text-[#ff5f1f] font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Project Briefing</p>
              <h3 className="text-white text-2xl font-bold uppercase mb-4 tracking-tighter">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-[#ff5f1f]" />
                <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">View Case Study _</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Case Study View */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-[60]" 
            />
            
            <motion.div
              layoutId={selectedProject.name}
              className="fixed inset-0 m-auto w-[95%] max-w-4xl h-fit max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-hidden z-[70] rounded-lg shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-48 md:h-full relative overflow-hidden bg-black">
                  <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-[#ff5f1f]/10 mix-blend-overlay" />
                </div>

                <div className="p-8 md:p-12 relative">
                  <button 
                    onClick={() => setSelectedProject(null)} 
                    className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <h2 className="text-3xl font-black text-white uppercase mb-8 tracking-tighter leading-none">
                    {selectedProject.name}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <p className="text-[#ff5f1f] text-[10px] font-mono uppercase mb-2 tracking-[0.2em]">The Security Problem</p>
                      <p className="text-white/70 italic text-sm leading-relaxed font-medium">
                        "{selectedProject.problem}"
                      </p>
                    </div>

                    <div>
                      <p className="text-[#ff5f1f] text-[10px] font-mono uppercase mb-2 tracking-[0.2em]">The Operational Impact</p>
                      <p className="text-white text-base font-bold leading-relaxed uppercase tracking-tight">
                        {selectedProject.impact}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/20 text-[10px] font-mono uppercase mb-3 tracking-[0.2em]">Stack Integration</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono border border-white/10 px-3 py-1 text-white/40 bg-white/5 uppercase">
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