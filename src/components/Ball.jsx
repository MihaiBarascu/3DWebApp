import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Setează filtrarea texturii pentru a îmbunătăți calitatea
  decal.minFilter = THREE.LinearFilter;
  decal.magFilter = THREE.LinearFilter;
  decal.anisotropy = 16;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-10, -10, -10]} intensity={0.8} />
      <pointLight position={[0, 0, 10]} intensity={0.8} />
      <mesh scale={props.isMobile ? 1.7 : 2} castShadow receiveShadow>
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
          scale={1.1} // Ajustează dimensiunea decalului pentru a fi mai vizibil
          flatShading
          map={decal}
          opacity={0.8} // Ajustează opacitatea decalului pentru a fi mai blând
        />
      </mesh>
    </Float>
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
