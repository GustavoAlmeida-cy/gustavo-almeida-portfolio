"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import RoboticLights from "./RoboticLights";
import Model from "./RoboticHand";

const RotatingModel = () => {
  const rotatingGroup = useRef<Group>(null);

  useFrame((_, delta) => {
    if (rotatingGroup.current) {
      rotatingGroup.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group
      ref={rotatingGroup}
      scale={1.6}
      position={[5, 5, 0]}
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
