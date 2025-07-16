import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* Luz ambiente para iluminação geral suave */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Luz direcional principal - simula luz solar */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luz de preenchimento - lado esquerdo */}
      <directionalLight position={[-8, 6, 8]} intensity={0.8} color="#f0f8ff" />

      {/* SpotLight principal - destaque do objeto */}
      <spotLight
        position={[5, 8, 5]}
        intensity={120}
        angle={0.3}
        penumbra={0.3}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* SpotLight lateral direita */}
      <spotLight
        position={[8, 4, -3]}
        intensity={80}
        angle={0.4}
        penumbra={0.5}
        color="#ffffff"
      />

      {/* SpotLight traseira para contorno */}
      <spotLight
        position={[-5, 6, -8]}
        intensity={60}
        angle={0.5}
        penumbra={0.7}
        color="#e6f3ff"
      />

      {/* Luzes pontuais para detalhes */}
      <pointLight
        position={[3, 2, 4]}
        intensity={40}
        color="#ffffff"
        distance={15}
        decay={2}
      />

      <pointLight
        position={[-2, 4, 2]}
        intensity={30}
        color="#ffffff"
        distance={12}
        decay={2}
      />

      <pointLight
        position={[0, -2, 6]}
        intensity={25}
        color="#ffffff"
        distance={10}
        decay={2}
      />

      {/* RectAreaLight para iluminação suave e uniforme */}
      <primitive
        object={new THREE.RectAreaLight("#ffffff", 15, 6, 4)}
        position={[0, 8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* RectAreaLight lateral para preenchimento */}
      <primitive
        object={new THREE.RectAreaLight("#f8f8ff", 10, 4, 6)}
        position={[8, 3, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      {/* Luz hemisférica para transição suave céu-chão */}
      <hemisphereLight color="#ffffff" groundColor="#404040" intensity={0.6} />

      {/* Luzes de destaque específicas para a mão */}
      <spotLight
        position={[2, 1, 8]}
        intensity={50}
        angle={0.2}
        penumbra={0.4}
        color="#ffffff"
        target-position={[4, 0, 0]}
      />

      <spotLight
        position={[6, 3, 2]}
        intensity={40}
        angle={0.25}
        penumbra={0.6}
        color="#ffffff"
        target-position={[4, 0, 0]}
      />
    </>
  );
};

export default HeroLights;
