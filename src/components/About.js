import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../assets/pr.jpg';


const AboutMe = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-transparent dark:text-white px-6 md:px-20 py-16 transition-colors duration-500"
  >
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
      
      {/* Profile Image */}
      <motion.img
        src={ProfilePic}
        alt="Mohamed Shaifudeen"
        className="w-52 sm:w-60 md:w-64 h-72 sm:h-80 md:h-96 rounded-xl shadow-lg object-cover animate-blue-glow"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Text Content */}
      <div className="text-center md:text-left flex-1">
        <motion.h3
          className="text-4xl font-bold font-heading mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h3>

        {/* 🌀 Scrambled Text Effect */}
        <ScrambledText className="text-base sm:text-1rem leading-relaxed text-black dark:text-white/90">
          I’m a final-year Computer Science Engineering student at E.G.S. Pillay Engineering College, passionate about Java development, artificial intelligence, cybersecurity, and problem solving.

          I enjoy building scalable, full-stack applications using technologies like React, Java, and Tailwind CSS, always aiming for clean design and seamless user experience. Currently, I’m working on an AI-Driven Automated Penetration Testing Framework, combining intelligent automation with system security to enhance cybersecurity testing.

          I’m also experienced in cloud-based projects, including a mobile detection system built using Python and YOLOv8, which highlights my interest in AI and real-world applications.

          What drives me most is problem solving. I actively sharpen my skills on platforms like HackerRank and Skillrack, where I enjoy tackling algorithmic challenges that enhance my coding logic and analytical thinking.

          I’m a dedicated and curious learner, always exploring new technologies and striving to build efficient, secure, and user-friendly solutions. I'm actively seeking internship or full-time opportunities in software development where I can grow, contribute, and make a meaningful impact.
        </ScrambledText>
      </div>
    </div>
  </section>
);

export default AboutMe;
