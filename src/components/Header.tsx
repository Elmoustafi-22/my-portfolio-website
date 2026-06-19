'use client'
import React, { useCallback, useContext, useState } from 'react'
import { DarkModeContext } from '@/context/DarkModeContext'
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, [setDarkMode]);

  const navItems = ["projects", "experience", "skills", "education", "contact"];

  return (
    <motion.header
      className="sticky top-0 z-50 w-full glass-nav shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight font-poppins text-slate-800 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mustopha<span className="text-sky-600 font-extrabold">.A</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-slate-600 dark:text-slate-300 font-medium font-hanken text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <motion.li key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <a
                  href={`#${item}`}
                  className="relative pb-1 hover:text-sky-600 dark:hover:text-sky-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-sky-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="w-[1px] h-5 bg-slate-200 dark:bg-slate-800"></div>

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-250 transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-sky-600" />}
          </motion.button>
        </nav>

        {/* Mobile Navbar Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6 font-hanken text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-355">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
