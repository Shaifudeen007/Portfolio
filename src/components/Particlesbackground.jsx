// src/components/Particlesbackground.jsx

import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './config/particles-config';

const Particlesbackground = () => {
  return <Particles options={particlesConfig} />;
};

export default Particlesbackground;