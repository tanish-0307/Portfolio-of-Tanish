
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
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={showText ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-foreground"
          >
            TANISH PORTFOLIO
          </motion.h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
