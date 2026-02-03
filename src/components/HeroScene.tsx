"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";

function CoreOrb() {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.4, 6]} />
        <MeshDistortMaterial color="#d36f43" roughness={0.24} metalness={0.1} distort={0.35} speed={2} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 48 }}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 2, 4]} intensity={1.1} />
      <pointLight position={[-2, -1, 2]} intensity={0.5} color="#ffe7c9" />
      <CoreOrb />
      <Sparkles count={35} scale={[4.6, 4.6, 4.6]} size={1.4} speed={0.25} color="#f5b17d" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
    </Canvas>
  );
}
