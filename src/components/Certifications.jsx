import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python For MachineLearning",
    provider: "Great Learning",
    link: "https://coursera.org/example",
    image: "/certificates/PythonMl.png.png",
    description: "",
  },
  {
    title: "Natural Language Processing",
    provider: "NPTEL",
    link: "https://udemy.com/example",
    image: "/certificates/NLP.png.png",
    description: "",
  },
  {
    title: "Programming in Python",
    provider: "Swayam",
    link: "https://aws.amazon.com/example",
    image: "/certificates/Pythoncerti.png.png",
    description: "",
  },
  {
    title: "Foundations of CyberSecurity",
    provider: "Google",
    link: "https://freecodecamp.org/example",
    image: "/certificates/CYber.png.png",
    description: "",
  },
  {
    title: "Foundations of Prompt Engineering",
    provider: "AWS",
    link: "https://aws.amazon.com/example",
    image: "/certificates/Prompt.png.png",
    description: "",
  },
  {
    title: "Problem Solving Basic",
    provider: "Hackerrank",
    link: "https://freecodecamp.org/example",
    image: "/certificates/Problem.png.png",
    description: "",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen pt-28 pb-16 px-6 md:px-20 bg-white dark:bg-transparent text-black dark:text-white transition-colors duration-500"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-72 h-48 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Certificate Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-sm mb-1">{cert.provider}</p>
              <p className="text-xs">{cert.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;