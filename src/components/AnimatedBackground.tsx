import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const [dots, setDots] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    // Generate AI styled tech particles occasionally dotting the background
    const generatedDots = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5
    }));
    setDots(generatedDots);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-[#050510] transition-colors duration-500">
      
      {/* Abstract Glowing AI Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-neon opacity-20 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-magenta-neon opacity-20 blur-[160px] pointer-events-none"
      />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none transition-opacity duration-500 opacity-50 dark:opacity-20"></div>
      
      {/* Data particle floating dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -100 }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: dot.delay }}
          className="absolute rounded-full bg-gradient-to-t from-cyan-neon to-magenta-neon pointer-events-none"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size * 3}px`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
