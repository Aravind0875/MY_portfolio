"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { FaJava, FaDatabase, FaServer, FaLaptopCode, FaGitAlt, FaGithub, FaCubes, FaProjectDiagram, FaChartLine, FaFileExcel } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { SiC, SiMysql, SiMongodb } from "react-icons/si";
import { TbMathFunction, TbBrandVscode, TbApi } from "react-icons/tb";
import { BiNetworkChart, BiBuildingHouse } from "react-icons/bi";
import { DiLinux } from "react-icons/di";
import { MdOutlineNetworkWifi } from "react-icons/md";

const skillsData = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "SQL", icon: FaDatabase, color: "#00758F" },
  { name: "Data Structures", icon: BiNetworkChart, color: "#00ff66" },
  { name: "Algorithms", icon: TbMathFunction, color: "#00ff66" },
  { name: "Operating Systems", icon: DiLinux, color: "#FCC624" },
  { name: "DBMS", icon: FaServer, color: "#00ff66" },
  { name: "Computer Networks", icon: MdOutlineNetworkWifi, color: "#00ff66" },
  { name: "Software Eng.", icon: FaLaptopCode, color: "#00ff66" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Excel", icon: FaFileExcel, color: "#217346" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "StarUML", icon: FaDiagramProject, color: "#00ff66" },
  { name: "OOP", icon: FaCubes, color: "#00ff66" },
  { name: "ER Modeling", icon: FaProjectDiagram, color: "#00ff66" },
  { name: "REST APIs", icon: TbApi, color: "#00ff66" },
  { name: "Microservices", icon: BiBuildingHouse, color: "#00ff66" },
  { name: "Data Analytics", icon: FaChartLine, color: "#00ff66" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 5) * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="h-full w-full py-8 px-4 flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-colors cursor-default">
                <skill.icon 
                  size={42} 
                  className="transition-transform duration-300 hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                  {skill.name}
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
