import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Load theme on initial render
  useEffect(() => {
    const storedMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(storedMode);
    document.documentElement.classList.toggle('dark', storedMode);
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Certifications', path: '#certifications' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <motion.nav 
      className="bg-blue-900/90 dark:bg-black/90 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 border-b border-blue-800/30 dark:border-green-500/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1 
          className="text-xl font-bold text-white animate-text-shimmer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Md Shaif
        </motion.h1>

        {/* Desktop Navigation + Theme Toggle */}
        <div className="flex items-center gap-6">
          <motion.ul 
            className="hidden md:flex gap-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {navLinks.map(({ name, path }) => (
              <motion.li 
                key={name}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={path}
                  className="relative transition-all duration-300 text-white dark:text-white hover:text-amber-300 dark:hover:text-green-400 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-amber-300 dark:after:bg-green-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {name}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-700 text-xl" />
            )}
          </motion.button>

          {/* Hamburger Menu Toggle */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-white dark:text-white hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul 
          className="md:hidden flex flex-col gap-4 bg-blue-900/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-4 border-t border-blue-800/30 dark:border-green-500/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ name, path }) => (
            <motion.li 
              key={name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ x: 10 }}
            >
              <a
                href={path}
                onClick={() => setIsOpen(false)}
                className="block py-2 transition-all duration-300 text-white dark:text-white hover:text-amber-300 dark:hover:text-green-400 hover:pl-4"
              >
                {name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;