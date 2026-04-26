import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state
  const [isDark, setIsDark] = useState(true); // Default to dark for tech enthusiasts

  useEffect(() => {
    // Initial theme setup
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#participations' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'GetsetAi', href: '#community', highlight: true }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 py-4 lg:py-6' : 'top-0 py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'ai-glass-panel rounded-full px-6 py-3' : 'px-2'}`}>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              A<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-magenta-neon">.</span>Sahoo
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    link.highlight 
                      ? 'bg-gradient-to-r from-cyan-neon to-magenta-neon text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(252,15,192,0.6)]' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-3 border-l border-gray-300 dark:border-white/10 pl-4 ml-2">
                <button 
                  onClick={toggleTheme}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-neon rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              
                <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"><FaGithub className="w-[18px] h-[18px]" /></a>
                <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-neon rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"><FaLinkedin className="w-[18px] h-[18px]" /></a>
                <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-magenta-neon rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"><FaTwitter className="w-[18px] h-[18px]" /></a>
              </div>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-neon rounded-full ai-glass-panel"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none rounded-full ai-glass-panel"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 ai-glass-panel rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    link.highlight 
                      ? 'bg-gradient-to-r from-cyan-neon to-magenta-neon text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-gray-200 dark:border-white/10">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"><FaGithub className="w-6 h-6" /></a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-neon"><FaLinkedin className="w-6 h-6" /></a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-magenta-neon"><FaTwitter className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
