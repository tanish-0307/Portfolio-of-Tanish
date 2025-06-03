
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color="#007AFF"
        transparent
        opacity={0.8}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const CentralCube = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <Float rotationIntensity={0.2} floatIntensity={0.3} speed={1.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#007AFF"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const HeroText3D = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] relative">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1.2} 
          castShadow 
        />
        <pointLight position={[-10, -10, -5]} intensity={0.6} color="#007AFF" />
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        
        <FloatingGeometry position={[-2.5, 1.5, 1]} />
        <FloatingGeometry position={[2.5, -1.2, 2]} />
        <FloatingGeometry position={[0, 2.5, -1]} />
        
        <CentralCube />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default HeroText3D;
