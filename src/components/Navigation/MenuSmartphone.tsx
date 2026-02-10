'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RotatingArrow() {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="cursor-pointer inline-block"
          animate={{ rotate: isRotated ? 180 : 360 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => setIsRotated(!isRotated)}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-paleta-iconosMenu"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
    
      </div>
    </div>
  );
}