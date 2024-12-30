import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

import Desk from "./Desk";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "./HeroCamera";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-r  from-gray-950 via-slate-800 to-gray-950  pt-20  text-white ">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold font-sans text-white  mt-32 md:mt-14">
            Hello, I&apos;m Mihai! 🧑🏻‍💻
          </h1>
          <p className="text-base md:text-lg leading-7 mt-4 text-gray-300 max-w-[850px] mx-auto ">
            This is my home setup, where I spend most of my time coding.🏠💻
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full ">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <Sparkles
                count={300}
                speed={0.6}
                size={20}
                color={"#ffffff"}
                scale={30}
                position={[0, 0, 0]}
              />
              <HeroCamera isMobile={isMobile}>
                <Desk
                  scale={isMobile ? 0.025 : 0.04}
                  position={[-1.3, isMobile ? -4.5 : -6.5, 8.9]}
                  rotation={[0.05, 0, -0.03]}
                />
              </HeroCamera>

              <ambientLight intensity={2} />

              <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Hero;
