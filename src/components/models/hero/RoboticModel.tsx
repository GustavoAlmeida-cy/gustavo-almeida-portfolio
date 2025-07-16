"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Group } from "three";
import RoboticLights from "./RoboticLights";
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
      scale={isMobile ? 1.2 : 1.6}
      position={[0, 6, 0]}
      rotation={[0.8, 0.8, -0.5]}
    >
      <Model />
    </group>
  );
};

const RoboticHandModel = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1080px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Estado para controlar a classe do cursor
  const [cursorState, setCursorState] = useState("cursor-grab");

  // Função para quando o botão do mouse é pressionado
  const handleMouseDown = () => {
    setCursorState("cursor-grabbing");
  };

  // Função para quando o botão do mouse é solto
  const handleMouseUp = () => {
    setCursorState("cursor-grab");
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      className={`h-150! w-180! ${cursorState}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet || !isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <RoboticLights />
      <RotatingModel isMobile={isMobile} />
    </Canvas>
  );
};

export default RoboticHandModel;
