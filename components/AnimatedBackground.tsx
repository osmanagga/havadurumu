import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  weatherCondition: string;
}

export default function AnimatedBackground({ weatherCondition }: AnimatedBackgroundProps) {
  const getGradientColors = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return ['#87CEEB', '#4682B4'];
      case 'clouds':
        return ['#B0C4DE', '#708090'];
      case 'rain':
        return ['#4682B4', '#000080'];
      case 'snow':
        return ['#F0F8FF', '#B0E0E6'];
      default:
        return ['#87CEEB', '#4682B4'];
    }
  };

  const [color1, color2] = getGradientColors(weatherCondition);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 -z-10"
      animate={{
        background: [
          `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`,
          `linear-gradient(225deg, ${color1} 0%, ${color2} 100%)`,
          `linear-gradient(45deg, ${color1} 0%, ${color2} 100%)`,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    />
  );
}

