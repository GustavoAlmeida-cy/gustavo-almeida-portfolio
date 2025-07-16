"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import RoboticLights from "./RoboticLights";
import Model from "./RoboticHand";

const RotatingModel = () => {
  const rotatingGroup = useRef<Group>(null);
  const velocityY = useRef(0);
  const gravity = 0.002;
  const bounceFactor = 0.3;
  const groundY = 5;

  // Dispara o pulo ao montar
  useEffect(() => {
    velocityY.current = 0.06;
  }, []);

  useFrame((_, delta) => {
    if (!rotatingGroup.current) return;

    // Rotação contínua
    rotatingGroup.current.rotation.y += delta * 0.3;

    // Física do pulo
    velocityY.current -= gravity;
    rotatingGroup.current.position.y += velocityY.current;

    if (rotatingGroup.current.position.y <= groundY) {
      rotatingGroup.current.position.y = groundY;
      velocityY.current *= -bounceFactor;
      if (Math.abs(velocityY.current) < 0.005) {
        velocityY.current = 0;
      }
    }
  });

  return (
    <group
      ref={rotatingGroup}
      scale={1.6}
      position={[5, groundY, 0]}
      rotation={[0.8, 0.8, -0.5]}
    >
      <Model />
    </group>
  );
};

const RoboticHandModel = () => {
  const [cursorState, setCursorState] = useState("cursor-grab");

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop="always"
      shadows={false}
      camera={{ position: [0, 0, 15], fov: 45 }}
      className={cursorState}
      onMouseDown={() => setCursorState("cursor-grabbing")}
      onMouseUp={() => setCursorState("cursor-grab")}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <RoboticLights />
      <Suspense fallback={null}>
        <RotatingModel />
      </Suspense>
    </Canvas>
  );
};

export default RoboticHandModel;
