"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Old Age Home Management System",
      description: "Designed modules for residents, staff and inventory using object-oriented principles. Integrated modular classes for maintainability and scalability.",
      tags: ["Java", "OOP", "System Design"],
      link: "#"
    },
    {
      title: "Rail Saarthi",
      description: "Created a railway assistance database with comprehensive ER modeling. Implemented SQL queries for schedules, bookings and passenger management.",
      tags: ["SQL", "DBMS", "ER Modeling"],
      link: "#"
    },
    {
      title: "Mixed Criticality Scheduling",
      description: "Developed scheduling strategies for mixed-criticality real-time tasks. Prioritized task execution based on criticality levels and deadlines.",
      tags: ["Operating Systems", "C", "Simulation"],
      link: "#"
    },
    {
      title: "Non-Contact Iron Bar Measurement",
      description: "Designed a sensor-based system for accurate iron bar length measurement. Integrated data acquisition and processing algorithms for precise calculations.",
      tags: ["Sensors", "Data Acquisition", "Algorithms"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col group p-2">
                <div className="relative h-64 w-full bg-slate-200 dark:bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-slate-300/50 dark:border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.1)_0,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Subtle placeholder icon or text since no images */}
                  <span className="text-slate-400 dark:text-slate-600 font-mono text-sm tracking-widest uppercase">Project Preview</span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 group-hover:border-primary/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors w-fit"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
