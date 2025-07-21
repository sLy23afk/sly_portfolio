import React from 'react';
import { motion } from 'framer-motion';

const WaveDivider = ({ className = "", flip = false, color = "currentColor" }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <motion.svg
        className={`w-full h-16 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
          fill={color}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.path
          d="M0,80 C300,40 900,100 1200,80 L1200,120 L0,120 Z"
          fill={color}
          fillOpacity="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;