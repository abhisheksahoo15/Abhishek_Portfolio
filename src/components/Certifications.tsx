import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Advanced React Architect Validation',
      issuer: 'TechPlatform / HackerRank',
      date: '2025',
      link: '#'
    },
    {
      title: 'Data Pipeline Analytics & AI',
      issuer: 'DeepLearning.AI / Coursera',
      date: '2024',
      link: '#'
    },
    {
      title: 'Cloud Solutions Deployment',
      issuer: 'Microsoft Azure',
      date: '2024',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 backdrop-blur-md mb-6 mx-auto">
            <ShieldCheck className="w-4 h-4 text-cyan-neon" />
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">VERIFIED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Global Credentials<span className="text-cyan-neon">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="ai-glass-panel p-8 rounded-[2rem] text-center relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="w-20 h-20 mx-auto bg-white/20 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-500">
                <ShieldCheck className="w-10 h-10 text-cyan-neon" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{cert.title}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-cyan-neon font-bold text-sm mb-8">{cert.issuer}</p>
              
              <div className="flex items-center justify-center gap-4 mt-auto z-10 relative">
                <span className="text-gray-600 dark:text-gray-300 text-xs font-bold bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 shadow-inner">
                  {cert.date}
                </span>
                <a href={cert.link} className="text-white bg-gradient-to-r from-cyan-neon to-cyan-400 hover:opacity-90 shadow-[0_0_15px_rgba(0,240,255,0.4)] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 uppercase tracking-wide">
                  Verify <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
