"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import RoboticLights from "./RoboticLights";
import Model from "./RoboticHand";

// Componente que controla o modelo 3D rotativo com física simples de pulo
const RotatingModel = () => {
  const rotatingGroup = useRef<Group>(null);
  const velocityY = useRef(0);
  const gravity = 0.002;
  const bounceFactor = 0.3;
  const groundY = 4.6;

  // Inicializa o pulo com velocidade vertical ao montar o componente
  useEffect(() => {
    velocityY.current = 0.06;
  }, []);

  // Atualiza a rotação e a física do pulo a cada frame
  useFrame((_, delta) => {
    if (!rotatingGroup.current) return;

    // Rotação contínua no eixo Y
    rotatingGroup.current.rotation.y += delta * 0.3;

    // Atualiza velocidade e posição vertical (simula gravidade e salto)
    velocityY.current -= gravity;
    rotatingGroup.current.position.y += velocityY.current;

    // Detecta colisão com o "chão" e aplica bounce
    if (rotatingGroup.current.position.y <= groundY) {
      rotatingGroup.current.position.y = groundY;
      velocityY.current *= -bounceFactor;

      // Para o pulo quando velocidade for muito pequena
      if (Math.abs(velocityY.current) < 0.005) {
        velocityY.current = 0;
      }
    }
  });

  return (
    <group
      ref={rotatingGroup}
      scale={1.5}
      position={[5.8, groundY, 0]}
      rotation={[0.8, 0.8, -0.5]}
    >
      <Model />
    </group>
  );
};

// Componente principal do Canvas 3D com controle de órbita e estado do cursor
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
      {/* Controle de órbita limitado a rotação vertical */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Iluminação do modelo */}
      <RoboticLights />

      {/* Renderização do modelo com suspense para carregamento */}
      <Suspense fallback={null}>
        <RotatingModel />
      </Suspense>
    </Canvas>
  );
};

export default RoboticHandModel;
