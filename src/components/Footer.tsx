import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, PenLine } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-200 dark:border-white/10 mt-20 pt-20 pb-10 overflow-hidden z-10 bg-slate-50 dark:bg-black transition-colors duration-500">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-cyan-neon/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <span className="text-3xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                Abhishek<span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-cyan-neon">.</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md font-medium">
              Building AI-first digital experiences with precision and style. Let's create something extraordinary together.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all bg-white dark:bg-white/5 shadow-sm">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-cyan-neon hover:border-cyan-neon hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all bg-white dark:bg-white/5 shadow-sm">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-magenta-neon hover:border-magenta-neon hover:shadow-[0_0_15px_rgba(252,15,192,0.6)] transition-all bg-white dark:bg-white/5 shadow-sm">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-base mb-6">Navigation</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/#home" className="text-gray-500 dark:text-gray-400 hover:text-cyan-neon transition-colors">Home</a></li>
              <li><a href="/#projects" className="text-gray-500 dark:text-gray-400 hover:text-cyan-neon transition-colors">Projects</a></li>
              <li><a href="/#participations" className="text-gray-500 dark:text-gray-400 hover:text-cyan-neon transition-colors">Experience</a></li>
              <li><a href="/#certifications" className="text-gray-500 dark:text-gray-400 hover:text-cyan-neon transition-colors">Certifications</a></li>
              <li>
                <Link to="/blog" className="text-gray-500 dark:text-gray-400 hover:text-magenta-neon transition-colors flex items-center gap-1 group">
                  <PenLine className="w-3.5 h-3.5" /> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-base mb-6" id="community">Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Join GetsetAi — AI education &amp; innovation for the next generation.
            </p>
            <a
              href="https://getsetai.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-cyan-neon to-magenta-neon text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(252,15,192,0.5)] transition-all uppercase tracking-wide text-sm"
            >
              Visit Getsetai <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Abhishek Sahoo. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-neon shadow-[0_0_5px_#00f0ff] animate-pulse" />
            <p className="text-gray-500 dark:text-gray-500 text-sm font-bold">
              Designed &amp; Developed by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-magenta-neon">
                Abhishek Sahoo
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
