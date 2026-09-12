"use client";

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
          SOFTWARE DEVELOPER & DATA ANALYST
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hi, I'm Gamma Aravind.<br />
          I build <span className="text-primary glow-text">useful, data-driven</span> products.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          A Computer Science student at Indian Institute of Information Technology Vadodara, passionate about Software Engineering, Data Analytics, and building scalable applications.
        </p>

        {/* Quick Contact & Details Pills */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="mailto:gammaaravind143@gmail.com"
            className="flex items-center space-x-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>gammaaravind143@gmail.com</span>
          </a>
          <a
            href="tel:+919550968255"
            className="flex items-center space-x-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>+91-9550968255</span>
          </a>
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Vadodara, Gujarat</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 pt-4">
          <Link
            href="#projects"
            className="group flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-all border border-transparent dark:border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            See Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="group flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full bg-transparent text-slate-900 dark:text-white border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            Contact Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex space-x-6 pt-4 text-sm font-medium">
          <Link href="#experience" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border-b border-transparent hover:border-slate-900 dark:hover:border-white pb-1 transition-colors">
            Work Experience
          </Link>
          <Link href="#skills" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border-b border-transparent hover:border-slate-900 dark:hover:border-white pb-1 transition-colors">
            Skills
          </Link>
        </div>

        {/* GitHub Activity */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-medium text-slate-500 dark:text-slate-400">GitHub Activity</h2>
            <a href="https://github.com/Aravind0875" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-white/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>@Aravind0875</span>
            </a>
          </div>
          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <GitHubCalendar 
              username="Aravind0875" 
              colorScheme={theme === "dark" ? "dark" : "light"}
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['rgba(255,255,255,0.05)', '#00441b', '#006d2c', '#2ca25f', '#66c2a4']
              }}
              style={{
                color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
