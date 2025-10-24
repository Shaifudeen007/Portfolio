import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaPhp,
} from 'react-icons/fa';
import { SiTailwindcss, SiC } from 'react-icons/si';

// Skill icon sets
const frontendSkills = {
  HTML: <FaHtml5 size={32} color="#e34c26" />,
  CSS: <FaCss3Alt size={32} color="#264de4" />,
  JavaScript: <FaJs size={32} color="#f7df1e" />,
  React: <FaReact size={32} color="#61dafb" />,
  Tailwind: <SiTailwindcss size={32} color="#38bdf8" />,
};

const backendSkills = {
  Java: <FaJava size={32} color="#f44336" />,
  Python: <FaPython size={32} color="#ffd43b" />,
  PHP: <FaPhp size={32} color="#8892BF" />,
};

const otherSkills = {
  Git: <FaGitAlt size={32} color="#f34f29" />,
  C: <SiC size={32} color="#00599c" />,
};

// Styled component for card glow
const StyledWrapper = styled.div`
  .m2 {
    position: relative;
    width: 14vmin;
    height: 14vmin;
    background: #111;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 0;
  }

  .m2::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #ff0056, #00a6ff, #6500ff, #ff0056);
    background-size: 400% 400%;
    border-radius: inherit;
    z-index: -2;
    filter: blur(10px);
    animation: glow-rotate 6s linear infinite;
  }

  .m2::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #111;
    border-radius: inherit;
    z-index: -1;
  }

  @keyframes glow-rotate {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .logo {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: bold;
    user-select: none;
    text-align: center;
  }

  .logo span.label {
    margin-top: 0.4rem;
    font-size: 0.75rem;
    background: linear-gradient(to right, #ccc, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    .m2 {
      width: 20vmin;
      height: 20vmin;
    }
  }

  @media (max-width: 480px) {
    .m2 {
      width: 24vmin;
      height: 24vmin;
    }
  }
`;

// Renderer for skill icons
const renderSkills = (skills, delayOffset = 0) =>
  Object.entries(skills).map(([name, icon], index) => (
    <motion.div
      key={name}
      className="m2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayOffset + index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="logo">
        {icon}
        <span className="label">{name.toUpperCase()}</span>
      </div>
    </motion.div>
  ));

const Skills = () => (
  <StyledWrapper>
    <section
      id="skills"
      className="min-h-screen px-6 pt-24 pb-12 md:px-20 bg-white dark:bg-transparent text-black dark:text-white transition-colors duration-500 flex flex-col items-center justify-start"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Frontend Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {renderSkills(frontendSkills)}
          </div>
        </div>

        {/* Backend Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {renderSkills(backendSkills, Object.keys(frontendSkills).length * 0.1)}
          </div>
        </div>

        {/* Other Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Others</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {renderSkills(otherSkills, (Object.keys(frontendSkills).length + Object.keys(backendSkills).length) * 0.1)}
          </div>
        </div>
      </div>
    </section>
  </StyledWrapper>
);

export default Skills;
