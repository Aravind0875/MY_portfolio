"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Briefcase, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-10">
          Contact Me
        </h2>

        <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:aravind@example.com" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Say Hello</span>
                </a>
                <a href="https://github.com/Aravind0875" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/gamma-aravind-7252b5331/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Your Message" 
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full flex items-center justify-center space-x-2 bg-primary text-black font-medium px-6 py-3 rounded-xl hover:bg-primary-hover shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
