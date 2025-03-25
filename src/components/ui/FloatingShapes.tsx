"use client"

import { motion } from 'framer-motion';

const shapes = [
  { id: 1, size: 100, color: 'bg-blue-100' },
  { id: 2, size: 150, color: 'bg-purple-100' },
  { id: 3, size: 80, color: 'bg-pink-100' },
  { id: 4, size: 120, color: 'bg-green-100' },
  { id: 5, size: 90, color: 'bg-yellow-100' },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${shape.color} opacity-30`}
          style={{
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + shape.id * 5,
            repeat: Infinity,
            ease: "linear",
            delay: shape.id * 2,
          }}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
          }}
        />
      ))}
    </div>
  );
} 