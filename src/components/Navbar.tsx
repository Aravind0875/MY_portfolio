"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300">
        <Link href="#home" className="text-lg font-bold hover:text-primary transition-colors">
          Gamma Aravind
        </Link>
        
        <ul className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <button
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative z-10 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </button>
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full z-0 pointer-events-none shadow-[0_0_10px_rgba(0,255,102,0.1)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => scrollToSection("#projects")}
            className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-bold rounded-full bg-primary text-black hover:bg-primary-hover shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all transform hover:scale-105"
          >
            See Work
          </button>
        </div>
      </nav>
    </div>
  );
}
