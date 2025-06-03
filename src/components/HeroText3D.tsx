
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, PresentationControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const TextMesh = ({ text }: { text: string }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float 
      rotationIntensity={0.3} 
      floatIntensity={0.5}
      speed={2}
    >
      <Text3D
        ref={mesh}
        font="/fonts/Inter_Bold.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        height={0.2}
        lineHeight={0.7}
        letterSpacing={0.02}
        size={0.5}
        curveSegments={12}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
        <meshStandardMaterial 
          color={hovered ? "#0070F3" : "#222222"} 
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
          emissive={new THREE.Color(hovered ? "#0070F3" : "#000000")}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </Text3D>
    </Float>
  );
};

const HeroText3D = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <pointLight position={[-10, -10, -5]} intensity={1} />
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
          <Center>
            <TextMesh text="Tanish Portfolio" />
          </Center>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroText3D;
