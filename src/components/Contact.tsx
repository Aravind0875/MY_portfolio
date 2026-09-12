"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Briefcase, Send, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:gammaaravind143@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name || "Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

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
                I'm currently looking for new opportunities, internships, and collaborative projects. Feel free to reach out via email or phone!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:gammaaravind143@gmail.com" 
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                    <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      gammaaravind143@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+919550968255" 
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                    <span className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      +91-9550968255
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5">
                    <MapPin className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      IIIT Vadodara, Gujarat / Telangana, India
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center space-x-4">
                  <a 
                    href="https://github.com/Aravind0875" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors border border-slate-200 dark:border-white/10"
                  >
                    <Globe className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/gamma-aravind-7252b5331/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors border border-slate-200 dark:border-white/10"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Your Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center space-x-2 bg-primary text-black font-semibold px-6 py-3 rounded-xl hover:bg-primary-hover shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all cursor-pointer"
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
