import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Premium ID Management SaaS',
      description: 'Architected and built a highly responsive, secure ID Card management system for multi-organization use with role-based access control and live previews.',
      tech: ['React', 'Next.js', 'Tailwind', 'Node.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Data Pipeline Dashboard',
      description: 'Redesigned portfolio into an innovative data pipeline dashboard reflecting AI, Machine Learning, and Software Development expertise.',
      tech: ['React', 'Framer Motion', 'Vite', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'Getsetai Innovation Lab',
      description: 'High-performance GenZ styled platform incorporating live video calling, course management, and AI-driven features deployed on Azure Cloud.',
      tech: ['React Native', 'Expo', 'WebSockets', 'Azure'],
      github: '#',
      live: '#'
    },
    {
      title: 'Automated Cable Billing System',
      description: 'Billing management system for Shri Sai Enterprises automating 30-day subscription cycles and Razorpay integration.',
      tech: ['React', 'Node.js', 'Razorpay API', 'MongoDB'],
      github: '#',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="projects" className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-magenta-neon/30 bg-magenta-neon/10 backdrop-blur-md mb-6">
            <Code2 className="w-4 h-4 text-magenta-neon" />
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">ARCHITECTURE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Featured Projects<span className="text-magenta-neon">.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group ai-glass-panel rounded-[2rem] p-8 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-neon/10 to-magenta-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8 z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 dark:bg-black/20 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                  <Code2 className="text-cyan-neon w-7 h-7" />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-500 hover:text-cyan-neon dark:text-gray-400 dark:hover:text-cyan-neon transition-colors"><FaGithub className="w-6 h-6" /></a>
                  <a href={project.live} className="text-gray-500 hover:text-magenta-neon dark:text-gray-400 dark:hover:text-magenta-neon transition-colors"><ExternalLink className="w-6 h-6" /></a>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-neon group-hover:to-magenta-neon transition-all duration-300 z-10 w-fit">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed font-medium z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-neon/10 text-cyan-neon border border-cyan-neon/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
