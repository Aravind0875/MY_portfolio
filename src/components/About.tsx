"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function About() {
  const education = [
    {
      institution: "Indian Institute of Information Technology Vadodara",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2023 – Present (Pursuing)",
      location: "Vadodara, Gujarat",
      score: "Undergraduate",
    },
    {
      institution: "TSMS Kuntala",
      degree: "Intermediate (Class XII)",
      period: "2020 – 2022",
      location: "Telangana",
      score: "Percentage: 90.9%",
    },
    {
      institution: "TSRS Boys Bellampally",
      degree: "Secondary (Class X)",
      period: "2014 – 2020",
      location: "Telangana",
      score: "GPA: 9.7 / 10",
    },
  ];

  const achievements = [
    "Successfully completed multiple industry virtual experience programs from Tata, Deloitte, TCS, JPMorgan Chase, Lloyds Banking Group, Commonwealth Bank and Datacom.",
    "Developed robust academic projects across Java, SQL, Operating Systems, and System Programming domains.",
    "Built a strong foundation in Data Structures & Algorithms, DBMS, Operating Systems, and Software Engineering through rigorous coursework and hands-on implementations.",
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-4">
            <p>
              I am currently pursuing a B.Tech in Computer Science and Engineering at the <strong>Indian Institute of Information Technology Vadodara</strong>. My academic journey has provided me with a strong foundation in Data Structures, Database Management Systems, Operating Systems, and Software Engineering.
            </p>
            <p>
              Professionally, I worked as a Data Analyst Intern at <strong>Angel One Ltd</strong> (AP Branch, Pune), where I collected and analyzed client data, conducted market research, and derived business insights to support branch performance analysis and strategic decisions.
            </p>
            <p>
              In addition to my internship, I have completed numerous Virtual Experience Programs with global leaders including Tata Group, Deloitte Australia, and JPMorgan Chase. Through these simulations, I've gained hands-on expertise in predictive analytics, Kafka integration, Spring Boot microservices, and interactive dashboards.
            </p>
            <p>
              Beyond technology, I am an enthusiastic sports player representing IIIT Vadodara as a Volleyball player in Inter-IIIT tournaments, and serve as a core member of the Sports Club organizing intra-college sporting events.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, idx) => (
              <SpotlightCard key={idx} className="p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary">{edu.period}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mt-1 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200">
                    {edu.score}
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Key Achievements
            </h3>
          </div>

          <SpotlightCard className="p-6">
            <ul className="space-y-3">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </motion.div>
    </section>
  );
}
