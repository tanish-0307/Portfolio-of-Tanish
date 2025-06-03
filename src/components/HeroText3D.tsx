
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, PresentationControls, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial
        color="#0070F3"
        transparent
        opacity={0.7}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const BackgroundSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[4, 64, 64]} position={[0, 0, -5]}>
      <MeshDistortMaterial
        color="#001122"
        transparent
        opacity={0.3}
        distort={0.3}
        speed={2}
        wireframe
      />
    </Sphere>
  );
};

const HeroText3D = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.2} 
          penumbra={1} 
          intensity={1.5} 
          castShadow 
        />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0070F3" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        <BackgroundSphere />
        
        <FloatingGeometry position={[-3, 2, 1]} />
        <FloatingGeometry position={[3, -1, 2]} />
        <FloatingGeometry position={[0, 3, -1]} />
        
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 8, Math.PI / 8]}
        >
          <Center>
            <Float 
              rotationIntensity={0.1} 
              floatIntensity={0.2}
              speed={1}
            >
              <group>
                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[0.3, 0.3, 0.3]} />
                  <meshStandardMaterial
                    color="#0070F3"
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
                <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[0.2, 0.2, 0.2]} />
                  <meshStandardMaterial
                    color="#ffffff"
                    metalness={0.7}
                    roughness={0.3}
                  />
                </mesh>
              </group>
            </Float>
          </Center>
        </PresentationControls>
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default HeroText3D;
