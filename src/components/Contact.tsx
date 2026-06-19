"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative w-full py-24 bg-white dark:bg-darkBgDeep border-t border-slate-200/40 dark:border-slate-800/40 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-sky-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2 
            className="text-xs uppercase tracking-widest font-extrabold text-sky-600 font-poppins"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Connect
          </motion.h2>
          
          <motion.h3 
            className="text-3xl md:text-4xl font-extrabold tracking-tight font-poppins text-slate-850 dark:text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Get In Touch
          </motion.h3>
          
          <motion.p 
            className="font-hanken text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Have a project in mind, want to discuss opportunities, or simply say hello? Reach out anytime!
          </motion.p>
        </div>

        {/* Contact details wrapper */}
        <div className="max-w-4xl mx-auto flex justify-center">
          <motion.div 
            className="w-full max-w-xl glass-card rounded-3xl p-8 border border-slate-200/50 dark:border-slate-800/40 shadow-md text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-hanken text-sm text-slate-655 dark:text-slate-350">
              I am active and typically respond within a few hours. Use the options below to contact me directly:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <a 
                href="mailto:abdulqadirmustopha@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-105 dark:bg-slate-900/60 dark:hover:bg-slate-850 border border-slate-200/40 dark:border-slate-800/20 hover:border-sky-500/25 transition-all text-left group"
              >
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-slate-900 text-sky-600 group-hover:scale-115 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="space-y-0.5 truncate">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Email Me</span>
                  <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                    abdulqadirmustopha@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+2348112021272" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-105 dark:bg-slate-900/60 dark:hover:bg-slate-850 border border-slate-200/40 dark:border-slate-800/20 hover:border-sky-500/25 transition-all text-left group"
              >
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-slate-900 text-sky-600 group-hover:scale-115 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Call Me</span>
                  <span className="block text-xs font-semibold text-slate-700 dark:text-slate-200">
                    +234 811 202 1272
                  </span>
                </div>
              </a>
            </div>

            <div className="w-full h-[1px] bg-slate-200/60 dark:bg-slate-800/50"></div>

            {/* CTA button */}
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:abdulqadirmustopha@gmail.com"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all active:scale-98 shadow-md hover:shadow-sky-500/10"
              >
                <Send size={16} />
                <span>Send Mail Direct</span>
              </a>

              {/* Direct links */}
              <div className="flex gap-4 items-center justify-center">
                <a 
                  href="https://github.com/Elmoustafi-22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mustopha-abdulqadir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
