
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

const AnimatedText3D = ({ text, position, delay = 0 }: { text: string; position: [number, number, number]; delay?: number }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame((state) => {
    if (mesh.current && visible) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
  });

  if (!visible) return null;

  return (
    <Float rotationIntensity={0.1} floatIntensity={0.2} speed={1.2}>
      <Center>
        <Text3D
          ref={mesh}
          position={position}
          font="/fonts/Inter_Bold.json"
          bevelEnabled
          bevelSize={0.015}
          bevelThickness={0.02}
          height={0.2}
          lineHeight={0.75}
          letterSpacing={0.02}
          size={0.8}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial
            color="#007AFF"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1.5}
          />
        </Text3D>
      </Center>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 150;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#007AFF"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
};

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
      >
        <div className="w-full h-full relative">
          {showContent && (
            <Canvas 
              camera={{ position: [0, 0, 7], fov: 60 }}
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <ambientLight intensity={0.4} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.3} 
                penumbra={1} 
                intensity={1.5}
                castShadow
              />
              <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
              
              <ParticleField />
              
              <AnimatedText3D text="TANISH" position={[0, 0.8, 0]} delay={0} />
              <AnimatedText3D text="PORTFOLIO" position={[0, -0.8, 0]} delay={600} />
              
              <Environment preset="city" background={false} />
            </Canvas>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/70">
              <div className="w-0.5 h-8 bg-white/20 rounded-full mb-3 animate-pulse" />
              <span className="text-xs font-light tracking-[0.2em] uppercase">Loading Experience</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
