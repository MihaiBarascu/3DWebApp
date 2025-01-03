import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  decal.minFilter = THREE.LinearFilter;
  decal.magFilter = THREE.LinearFilter;
  decal.anisotropy = 16;

  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-10, -10, -10]} intensity={0.8} />
      <pointLight position={[0, 0, 10]} intensity={0.8} />
      <mesh scale={isMobile ? 1.7 : 2} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color={"#ffffff"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          metalness={0.3}
          roughness={0.4}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.1}
          flatShading
          map={decal}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

const BallCanvas = ({ icon, isMobile }) => {
  return (
    <>
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Ball isMobile={isMobile} imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default BallCanvas;
