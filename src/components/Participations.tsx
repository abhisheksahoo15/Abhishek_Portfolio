import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MapPin, Calendar, Award } from 'lucide-react';

const Participations: React.FC = () => {
  const experiences = [
    {
      role: 'Founder & Lead Innovator',
      company: 'Getsetai Innovation Lab',
      date: '2023 - Present',
      description: 'Spearheading the development of next-gen AI tools, GenZ-styled platforms, and empowering the tech community through continuous innovation and project building.',
      icon: <Award className="w-6 h-6 text-cyan-neon" />
    },
    {
      role: 'Frontend Architect',
      company: 'Open Source Community',
      date: '2022 - Present',
      description: 'Contributed to multiple high-impact repositories. Implemented complex UI components, flagship-level dashboards, and highly performant AI-driven layouts.',
      icon: <Activity className="w-6 h-6 text-magenta-neon" />
    },
    {
      role: 'Hackathon Finalist',
      company: 'Global AI Summit',
      date: '2024',
      description: 'Built a predictive data pipeline dashboard using React and Python under 48 hours. Praised for exceptional UI/UX aesthetics.',
      icon: <MapPin className="w-6 h-6 text-cyan-neon" />
    }
  ];

  return (
    <section id="participations" className="py-16 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-cyan-neon/30 bg-cyan-neon/10 backdrop-blur-md mb-6">
            <Activity className="w-4 h-4 text-cyan-neon" />
            <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">TIMELINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Participations<span className="text-cyan-neon">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Subtle Vertical Line configured for Dark/Light Mode */}
          <div className="absolute left-6 md:left-[50%] transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-neon/20 via-magenta-neon/20 to-transparent rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Pulsing Dot */}
                <div className="absolute left-6 md:left-[50%] transform -translate-x-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-black border-[4px] border-cyan-neon shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10 mt-6 md:mt-0"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} w-full`}>
                  <div className="ai-glass-panel p-8 rounded-[2rem] group relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-neon group-hover:to-magenta-neon transition-all">{exp.role}</h3>
                        <div className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-cyan-neon font-bold mt-1">
                          {exp.company}
                        </div>
                      </div>
                      <div className="hidden sm:flex bg-white/20 dark:bg-black/20 w-14 h-14 rounded-2xl items-center justify-center border border-gray-200 dark:border-white/10 group-hover:bg-cyan-neon/10 transition-colors shadow-lg">
                        {exp.icon}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium mb-6">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-neon dark:text-magenta-neon text-xs font-bold uppercase bg-cyan-neon/10 inline-flex px-4 py-2 rounded-full border border-cyan-neon/20 shadow-sm">
                      <Calendar className="w-4 h-4" /> {exp.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participations;
