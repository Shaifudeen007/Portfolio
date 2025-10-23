import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 dark:bg-green-400/30 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            scale: [1, 1.5, 0.5, 1],
            opacity: [0.3, 0.8, 0.3, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Light Mode Background */}
      <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-1000">
        {/* Large Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.7, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '15%' }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />

        {/* Animated Geometric Shapes */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-blue-400/30 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '30%', right: '30%' }}
        />

        <motion.div
          className="absolute w-24 h-24 border-2 border-purple-400/30 rounded-full"
          animate={{
            rotate: [360, 0],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '40%', left: '40%' }}
        />
      </div>

      {/* Dark Mode Background */}
      <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-1000">
        {/* Glowing Orbs with Enhanced Effects */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', right: '10%' }}
        />

        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -60, 0],
            y: [0, -90, 70, 0],
            scale: [1, 0.8, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '20%' }}
        />

        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 90, 0],
            y: [0, 60, -50, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '40%', left: '5%' }}
        />

        {/* Animated Neon Shapes */}
        <motion.div
          className="absolute w-40 h-40 border-2 border-green-400/50 rounded-lg shadow-lg shadow-green-400/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            borderColor: ['rgba(34, 197, 94, 0.5)', 'rgba(6, 182, 212, 0.5)', 'rgba(34, 197, 94, 0.5)'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '25%', right: '25%' }}
        />

        <motion.div
          className="absolute w-28 h-28 border-2 border-cyan-400/50 rounded-full shadow-lg shadow-cyan-400/20"
          animate={{
            rotate: [360, 0],
            x: [0, 60, 0],
            y: [0, -40, 0],
            borderColor: ['rgba(6, 182, 212, 0.5)', 'rgba(168, 85, 247, 0.5)', 'rgba(6, 182, 212, 0.5)'],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '35%', left: '35%' }}
        />

        {/* Matrix-style Grid */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #22c55e 1px, transparent 1px),
                linear-gradient(180deg, #22c55e 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:from-transparent dark:via-black/20 dark:to-transparent" />
      
      {/* Radial Gradient for Focus */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10 dark:to-black/20" />
    </div>
  );
};

export default AnimatedBackground;