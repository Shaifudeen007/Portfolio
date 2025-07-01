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
  <footer className="bg-blue-900 dark:bg-black text-white transition-colors duration-500">
    <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* About / Brand Info */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Mohamed Shaifudeen</h4>
        <p className="text-sm text-gray-300 mb-4">
          Passionate developer focused on building full-stack apps with clean UI and strong functionality.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-xl">
          <a href="https://github.com/Shaifudeen007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="mailto:shaifshaif144@gmail.com" className="hover:text-gray-400">
            <MdEmail />
          </a>
          <a href="https://linkedin.com/in/mohamed-shaifudeen-632985268/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1 text-sm text-gray-300">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.path} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact or Technology Info */}
      <div>
        <h4 className="text-lg font-semibold mb-2">Technologies</h4>
        <p className="text-sm text-gray-300">
          Built with Efforts using <span className="font-semibold text-white">React</span> & <span className="font-semibold text-white">Tailwind CSS</span>.
        </p>
      </div>
    </div>

    {/* Bottom Footer Bar */}
    <div className="bg-blue-950 dark:bg-gray-800 text-xs text-gray-300 py-4 text-center">
      &copy; {new Date().getFullYear()} Mohamed Shaifudeen. All rights reserved.
    </div>
  </footer>
);

export default Footer;
