import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[100svh] flex justify-center items-center pt-24 pb-12 overflow-hidden"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* ─── Left Side: Text Content ─── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-7/12 text-center md:text-left z-10 order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse shadow-[0_0_8px_#00f0ff]" />
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">
              SYSTEM <span className="text-cyan-neon">ONLINE</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
            Hello, I'm <br />
            <span className="text-gradient-cyan-magenta">Abhishek Sahoo</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
            I craft incredibly responsive, highly animated flagship experiences.
            Focused on AI technologies, UI/UX aesthetics, and bridging the gap
            between design and deep logic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-neon to-magenta-neon text-white rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(252,15,192,0.6)]"
            >
              Explore Matrix{' '}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-magenta-neon dark:hover:border-cyan-neon text-gray-800 dark:text-white rounded-xl font-bold uppercase tracking-wider transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* ─── Right Side: Rounded-Square Portrait ─── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">

            {/* Neon glow backdrop */}
            <div className="absolute inset-[-10px] rounded-[2rem] bg-gradient-to-tr from-cyan-neon to-magenta-neon opacity-40 dark:opacity-70 blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse pointer-events-none" />

            {/* Rounded-square image frame */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative z-10 border-2 border-cyan-neon/40 dark:border-magenta-neon/40 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/profile.jpeg"
                alt="Abhishek Sahoo"
                className="w-full h-full object-cover object-top contrast-110 dark:brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-neon shadow-[0_0_10px_#00f0ff] animate-[scan_3s_ease-in-out_infinite] opacity-70 pointer-events-none" />
            </div>

            {/* Floating AI badge */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 ai-glass-panel px-5 py-3 rounded-2xl flex items-center gap-3 z-20 animate-bounce shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-neon to-magenta-neon flex items-center justify-center shadow-[0_0_15px_rgba(252,15,192,0.5)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-800 dark:text-gray-100 uppercase tracking-widest">AI & Tech</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Enthusiast</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
