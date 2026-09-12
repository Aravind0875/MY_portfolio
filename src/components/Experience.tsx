"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function Experience() {
  const experiences = [
    {
      title: "Data Analyst - Market Research",
      company: "ANGEL ONE LTD – AP Branch PUNE",
      date: "07 May 2026 – 06 July 2026",
      type: "Internship",
      points: [
        "Collected and analyzed client data to identify customer trends and business patterns.",
        "Conducted market research to understand customer requirements, competitor offerings and market trends.",
        "Prepared weekly and monthly reports to support branch performance analysis and business decisions.",
        "Analyzed customer engagement and account-related data to identify useful business insights."
      ]
    },
    {
      title: "Data Analytics Simulation",
      company: "Tata Group",
      date: "Virtual Experience Program",
      type: "Remote",
      points: [
        "Performed AI-driven exploratory data analysis, developed predictive credit risk frameworks and collections strategies.",
        "Developed dashboards and generated strategic business insights through data visualization."
      ]
    },
    {
      title: "Data Analytics Simulation",
      company: "Deloitte Australia",
      date: "Virtual Experience Program",
      type: "Remote",
      points: [
        "Built Tableau dashboards, performed data analysis and derived business insights using Excel."
      ]
    },
    {
      title: "Software Engineering Simulation",
      company: "JPMorgan Chase",
      date: "Virtual Experience Program",
      type: "Remote",
      points: [
        "Worked on Kafka integration, Spring Boot microservices and REST API development."
      ]
    },
    {
      title: "Core Member – Volleyball and Carrom Teams",
      company: "Sports Club, IIIT Vadodara",
      date: "2024 – Present",
      type: "Volunteering",
      points: [
        "Represented IIIT Vadodara as a Volleyball Player in Inter-IIIT sports tournaments and competitions.",
        "Actively contributed to team coordination, practice sessions, and sports event management as a core member.",
        "Promoted student participation in sports activities and collaborated with fellow members to organize intra-college sporting events."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Work Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-black bg-slate-200 dark:bg-white/10 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-black transition-colors z-10">
                <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-white/50 group-hover:bg-black transition-colors"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <SpotlightCard className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{exp.title}</h3>
                    <span className="text-sm font-medium text-primary mt-1 sm:mt-0">{exp.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="pl-1 leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
