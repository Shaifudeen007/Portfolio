import React from 'react';
import ProfilePic from '../assets/profile.jpg';
import DownloadButton from './DownloadButton';
import Button from './Button';
import TrueFocus from './TrueFocus';

const IntroSection = () => (
  <section
    id="home"
    className="h-screen px-6 md:px-20 flex flex-col justify-center items-center text-black dark:text-white transition-colors duration-500"
  >
    <div className="flex flex-col items-center text-center gap-4">
      
      {/* Profile Image */}
      <img
        src={ProfilePic}
        alt="Mohamed Shaifudeen"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full border-4 border-black dark:border-white shadow-lg object-cover"
      />

      {/* Intro Text */}
      <p className="text-sm sm:text-base md:text-lg">Hi, I’m</p>

      {/* Responsive Animated Name */}
      <div className="text-lg sm:text-xl md:text-3xl font-semibold">
        <TrueFocus
          sentence="Mohamed Shaifudeen"
          blurAmount={3}
          borderColor="#22c55e"
          glowColor="rgba(34, 197, 94, 0.6)"
          animationDuration={0.4}
          pauseBetweenAnimations={1}
        />
      </div>

      {/* Short Introduction */}
      <p className="text-sm sm:text-base md:text-lg max-w-xl text-gray-700 dark:text-gray-300">
        A passionate Computer Science student specializing in full-stack web development, Java programming, and AI-driven projects.
      </p>

      {/* Social Buttons */}
      <div>
        <Button />
      </div>

      {/* Download Resume Button - lifted up slightly */}
      <div className="-mt-2">
        <DownloadButton />
      </div>
    </div>
  </section>
);

export default IntroSection;
