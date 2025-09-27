import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../assets/profile.jpg';
import DownloadButton from './DownloadButton';
import Button from './Button';
import TrueFocus from './TrueFocus';

const IntroSection = () => (
  <section
    id="home"
    className="h-screen px-6 md:px-20 flex flex-col justify-center items-center text-black dark:text-white transition-colors duration-500 relative overflow-hidden"
  >
    <motion.div 
      className="flex flex-col items-center text-center gap-4 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      {/* Profile Image (updated sizes) */}
      <motion.img
        src={ProfilePic}
        alt="Mohamed Shaifudeen"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-black dark:border-white shadow-lg object-cover animate-float animate-blue-glow hover-lift"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      />

      {/* Intro Text */}
      <motion.p 
        className="text-sm sm:text-base md:text-lg animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Hi, I'm
      </motion.p>

      {/* Responsive Animated Name */}
      <motion.div 
        className="text-lg sm:text-xl md:text-3xl font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <TrueFocus
          sentence="Mohamed Shaifudeen"
          blurAmount={3}
          borderColor="#22c55e"
          glowColor="rgba(34, 197, 94, 0.6)"
          animationDuration={0.4}
          pauseBetweenAnimations={1}
        />
      </motion.div>

      {/* Short Introduction */}
      <motion.p 
        className="text-sm sm:text-base md:text-lg max-w-xl text-gray-700 dark:text-gray-300 animate-fade-in-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        A passionate Computer Science student specializing in full-stack web development, Java programming, and AI-driven projects.
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Button />
      </motion.div>

      {/* Download Resume Button - lifted up slightly */}
      <motion.div 
        className="-mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <DownloadButton />
      </motion.div>
    </motion.div>

    {/* Floating Elements */}
    <motion.div
      className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 dark:bg-green-400/30 rounded-full"
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-32 right-16 w-6 h-6 border-2 border-blue-400/40 dark:border-green-400/40 rounded-full"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </section>
);

export default IntroSection;