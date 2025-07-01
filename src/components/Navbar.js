import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

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
    <nav className="bg-blue-900 dark:bg-black shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Md Shaif</h1>

        {/* Desktop Navigation + Theme Toggle */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-semibold">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="transition text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-105 transition"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-700 text-xl" />
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-white dark:text-white"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-blue-900 dark:bg-gray-900 px-6 py-4">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                onClick={() => setIsOpen(false)}
                className="transition text-white dark:text-white hover:text-amber-300 dark:hover:text-amber-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
