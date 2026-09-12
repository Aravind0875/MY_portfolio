"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Old Age Home Management System",
      domain: "Java & OOP",
      description: "A comprehensive management system engineered for old age home operations, handling resident records, staff scheduling, and inventory workflows.",
      highlights: [
        "Designed modules for residents, staff, and inventory using object-oriented principles.",
        "Integrated modular classes for high maintainability, code reusability, and scalability.",
        "Ensured smooth data flow and business logic validation across all management modules."
      ],
      tags: ["Java", "OOP", "System Architecture", "Modular Design"],
      link: "https://github.com/Aravind0875"
    },
    {
      title: "Rail Saarthi",
      domain: "SQL & DBMS",
      description: "A centralized railway assistance and management database designed with robust Entity-Relationship modeling for complex scheduling and passenger transactions.",
      highlights: [
        "Created a railway assistance database with comprehensive ER modeling and normalization.",
        "Implemented optimized SQL queries for schedules, bookings, and passenger records.",
        "Designed relational structures to ensure ACID compliance, performance, and data integrity."
      ],
      tags: ["SQL", "DBMS", "ER Modeling", "Relational Schema", "MySQL"],
      link: "https://github.com/Aravind0875"
    },
    {
      title: "Mixed Criticality Scheduling",
      domain: "Operating Systems",
      description: "An advanced real-time CPU scheduling simulation designed to balance mixed-criticality workloads under stringent task deadlines.",
      highlights: [
        "Developed scheduling strategies tailored for mixed-criticality real-time embedded tasks.",
        "Prioritized task execution dynamically based on criticality levels and hard deadlines.",
        "Ensured guaranteed system stability and fault resilience under high workload simulations."
      ],
      tags: ["Operating Systems", "C", "Real-Time Scheduling", "Simulation"],
      link: "https://github.com/Aravind0875"
    },
    {
      title: "Non-Contact Iron Bar Length Measurement System",
      domain: "Embedded & Sensors",
      description: "An industrial-grade measurement framework utilizing non-contact sensors and real-time algorithmic signal processing for high-precision length estimation.",
      highlights: [
        "Designed a sensor-based measurement system for non-contact iron bar dimensional inspection.",
        "Integrated data acquisition and signal processing algorithms for micro-precise calculations.",
        "Engineered real-time feedback mechanisms and calibration algorithms for error minimization."
      ],
      tags: ["Sensors", "Data Acquisition", "Signal Processing", "Algorithms"],
      link: "https://github.com/Aravind0875"
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
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {project.domain}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {project.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 mr-2 shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 group-hover:border-primary/30 transition-colors">
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
