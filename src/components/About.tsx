"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          About
        </h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
          <p>
            I am currently pursuing a B.Tech in Computer Science and Engineering at the <strong>Indian Institute of Information Technology Vadodara</strong>. My academic journey has provided me with a strong foundation in Data Structures, Database Management Systems, Operating Systems, and Software Engineering.
          </p>
          <p>
            Professionally, I have worked as a Data Analyst Intern at <strong>Angel One Ltd</strong>, where I collected and analyzed client data, conducted market research, and derived business insights to support performance analysis. 
          </p>
          <p>
            In addition to my internship, I have completed numerous Virtual Experience Programs with industry leaders such as Tata Group, Deloitte Australia, and JPMorgan Chase. Through these programs, I have gained practical experience in exploratory data analysis, data visualization, predictive frameworks, and software engineering simulations.
          </p>
          <p>
            When I'm not coding or analyzing data, I am actively involved in sports. I represent IIIT Vadodara as a Volleyball player in inter-college tournaments and serve as a core member of the Sports Club, promoting student participation in sporting activities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
