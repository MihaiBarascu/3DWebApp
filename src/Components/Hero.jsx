import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

import { Leva, useControls } from "leva";
import Desk from "./Desk";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  // const x = useControls("Desk", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.01,
  //     max: 5,
  //   },
  // });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-r from-slate-950 via-gray-950 to-slate-900  pt-20  text-white">
        <div className="text-center px-4 mb-4 max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6 text-gray-400">
            Welcome to My Code Playground!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-[550px] mb-8">
            You've just stepped into my personal coding environment, where
            creativity meets functionality.
          </p>
          {/* <p className="text-md text-gray-300">
            Here, I bring web applications to life using modern technologies.
            This is where I build and test websites, craft intuitive user
            experiences, and transform ideas into seamless digital solutions. I
            specialize in full-stack web development, creating responsive and
            dynamic web applications from front-end design to back-end logic.
            Feel free to explore my work, and let’s connect to create something
            extraordinary together!

              Hi, I’m Mihai B., a passionate full-stack web developer. I specialize in bringing ideas to life with clean code and responsive designs. Explore my work, and let’s build something amazing together!

          </p> */}
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full ">
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <Desk
                // scale={0.05}
                scale={isMobile ? 0.03 : 0.04}
                position={[-1.3, -3.5, 8.9]}
                rotation={[0.05, 0, -0.03]}
              />

              <ambientLight intensity={2} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2} // Limita inferioară a rotației
              maxPolarAngle={Math.PI / 2} // Limita superioară a rotației
            />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

export default Hero;
