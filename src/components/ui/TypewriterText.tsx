"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        if (currentText.length === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="inline-block"
        >
          {currentText}
          <span className="animate-pulse">|</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
} 