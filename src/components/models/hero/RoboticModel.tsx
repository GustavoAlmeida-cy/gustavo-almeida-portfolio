"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Group } from "three";
import HeroLights from "./HeroLights";
import Model from "./RoboticHand";

const RotatingModel: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const rotatingGroup = useRef<Group>(null);

  useFrame((_, delta) => {
    if (rotatingGroup.current) {
      rotatingGroup.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group
      ref={rotatingGroup}
      scale={isMobile ? 1.2 : 2}
      position={[0, 7, 0]}
      rotation={[0.8, 0.8, 0]} // ângulo inicial estilizado
    >
      <Model />
    </group>
  );
};

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      className="h-150! w-180!"
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet || !isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <RotatingModel isMobile={isMobile} />
    </Canvas>
  );
};

export default HeroExperience;
