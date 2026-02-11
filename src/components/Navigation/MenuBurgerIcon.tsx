'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const MenuBurgerIcon = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    // Resetear después de que termine la animación
    setTimeout(() => setAnimate(false), 1500); // 1.5s * 2 repeticiones
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-12 h-12 flex items-center justify-center focus:outline-none cursor-pointer"
      aria-label="Menu icon"
    >
      <div className="w-7 h-6 flex flex-col justify-between">
        {/* Línea 1 */}
        <motion.span
          className="w-full h-0.5 bg-white block rounded-full"
          animate={animate ? {
            rotate: [0, 45, 45, 0],
            y: [0, 10, 10, 0]
          } : {}}
          transition={{
            duration: 1.5,
            times: [0, 0.3, 0.7, 1],
            ease: 'easeInOut',
            repeat: 1,
          }}
        />
        
        {/* Línea 2 */}
        <motion.span
          className="w-full h-0.5 bg-white block rounded-full"
          animate={animate ? {
            opacity: [1, 0, 0, 1],
            x: [0, -20, -20, 0]
          } : {}}
          transition={{
            duration: 1.5,
            times: [0, 0.3, 0.7, 1],
            ease: 'easeInOut',
            repeat: 1,
          }}
        />
        
        {/* Línea 3 */}
        <motion.span
          className="w-full h-0.5 bg-white block rounded-full"
          animate={animate ? {
            rotate: [0, -45, -45, 0],
            y: [0, -10, -10, 0]
          } : {}}
          transition={{
            duration: 1.5,
            times: [0, 0.3, 0.7, 1],
            ease: 'easeInOut',
            repeat: 1,
          }}
        />
      </div>
    </div>
  );
};

export default MenuBurgerIcon;