
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, Environment, useTexture } from '@react-three/drei';
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
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <Float rotationIntensity={0.2} floatIntensity={0.3} speed={1.5}>
      <Text3D
        ref={mesh}
        position={position}
        font="/fonts/Inter_Bold.json"
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.03}
        height={0.3}
        lineHeight={0.8}
        letterSpacing={0.05}
        size={1.2}
        curveSegments={16}
      >
        {text}
        <meshStandardMaterial
          color="#0070F3"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
          emissive={new THREE.Color("#001a40")}
          emissiveIntensity={0.3}
        />
      </Text3D>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 200;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
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
        size={0.05}
        color="#0070F3"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center"
      >
        <div className="w-full h-full">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.3} 
              penumbra={1} 
              intensity={2}
              castShadow
            />
            <spotLight 
              position={[-10, -10, 5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1}
              color="#0070F3"
            />
            <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
            
            <ParticleField />
            
            {showContent && (
              <>
                <AnimatedText3D text="TANISH" position={[0, 1, 0]} delay={0} />
                <AnimatedText3D text="PORTFOLIO" position={[0, -1, 0]} delay={800} />
              </>
            )}
            
            <Environment preset="city" background={false} />
          </Canvas>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/80">
            <div className="w-1 h-12 bg-white/30 rounded-full mb-4 animate-pulse" />
            <span className="text-sm font-light tracking-wider">LOADING</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
