
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after a brief delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    // Complete animation after 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={showText ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0.1em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              TANISH
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-light text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              PORTFOLIO
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={showText ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
