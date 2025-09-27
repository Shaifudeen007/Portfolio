import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Certifications',path: '#certifications'},
  { name: 'Contact', path: '#contact' }
];

const Footer = () => (
  <motion.footer 
    className="bg-blue-900/90 dark:bg-black/90 backdrop-blur-md text-white transition-colors duration-500 border-t border-blue-800/30 dark:border-green-500/30"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* About / Brand Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-2 animate-text-shimmer">Mohamed Shaifudeen</h4>
        <p className="text-sm text-gray-300 mb-4 hover-lift">
          Passionate developer focused on building full-stack apps with clean UI and strong functionality.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-xl">
          <motion.a 
            href="https://github.com/Shaifudeen007" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-all duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-all duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="mailto:shaifshaif144@gmail.com" 
            className="hover:text-gray-400 transition-all duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdEmail />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/mohamed-shaifudeen-632985268/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400 transition-all duration-300"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-2 animate-text-shimmer">Quick Links</h4>
        <ul className="space-y-1 text-sm text-gray-300">
          {navLinks.map(link => (
            <motion.li 
              key={link.name}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
                className="hover:underline hover:text-white transition-colors duration-300"
              <a href={link.path} className="hover:underline">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact or Technology Info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold mb-2 animate-text-shimmer">Technologies</h4>
        <p className="text-sm text-gray-300 hover-lift">
          Built with Efforts using <span className="font-semibold text-white">React</span> & <span className="font-semibold text-white">Tailwind CSS</span>.
        </p>
      </motion.div>
    </div>

    {/* Bottom Footer Bar */}
    <motion.div 
      className="bg-blue-950/90 dark:bg-gray-800/90 backdrop-blur-md text-xs text-gray-300 py-4 text-center border-t border-blue-900/30 dark:border-gray-700/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      &copy; {new Date().getFullYear()} Mohamed Shaifudeen. All rights reserved.
    </motion.div>
  </motion.footer>
);

export default Footer;