import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen pt-15 flex flex-col justify-center items-center px-4 bg-white text-black dark:bg-transparent dark:text-white transition-colors duration-500 relative overflow-hidden"
    >
      {/* Animated heading */}
      <motion.h2
        className="text-3xl font-bold text-gray-800 dark:text-white mb-8 animate-text-shimmer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Animated cards grid */}
      <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto justify-items-center relative z-10">
        {[
          {
            title: "AI Driven Penetration Testing",
            description: "Smart automation of security audits using AI",
            badge: "Final Year Project",
            price: "Security",
            githubLink:
              "https://github.com/Shaifudeen007/Automated-penetration-testing-framework",
          },
          {
            title: "Mobile Detection System",
            description: "Real-time monitoring using YOLOv8 and camera feeds.",
            badge: "Mini Project",
            price: "Surveillance",
            githubLink:
              "https://github.com/Shaifudeen007/Mini_Project_Mobile_Detection_System",
          },
          {
            title: "Green Gourment Website",
            description:
              "Promotes healthy eating through delicious recipe ideas.",
            badge: "Project",
            price: "Front-end",
            githubLink:
              "https://github.com/Shaifudeen007/Green-Gourmet-_Website",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="card-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Card {...project} />
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-16 right-16 w-12 h-12 border-2 border-blue-400/20 dark:border-green-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};

export default Projects;