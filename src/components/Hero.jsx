import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

import Desk from "./Desk";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "./HeroCamera";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  {
    /*Hook-ul useMediaQuery compara dimensiunea curenta a displayullui cu cea data in proprietati */
  }

  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-r  from-gray-950 via-slate-800 to-gray-950  pt-20  text-white py-10">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mt-16 text-white tracking-wide">
            Welcome to my "Home Office"!
          </h1>
          <p className="text-lg md:text-xl leading-relaxed lg:max-w-[400px] max-w-[350px] mt-4 text-gray-200">
            This is where I spend most of my time, working on exciting projects
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full ">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              {/* PerspectiveCamera este un tip de camera 3d care simuleaza perspectiva umana */}

              <HeroCamera isMobile={isMobile}>
                {/* HeroCamera este un container pentru obiectele 3d */}
                <Desk
                  scale={isMobile ? 0.03 : 0.04}
                  position={[-1.3, -6.5, 8.9]}
                  rotation={[0.05, 0, -0.03]}
                />
                {/* Desk este un obiect 3d */}
              </HeroCamera>

              <ambientLight intensity={2} />
              {/* ambientLight este o sursa de lumina care afecteaza toate obiectele in scena */}
              <directionalLight position={[10, 10, 5]} intensity={1} />
              {/* directionalLight este o sursa de lumina care afecteaza toate obiectele in scena intr-o directie specifica */}
            </Suspense>
            {/* Suspense afiseaza Loading... pana cand scena se incarca*/}
          </Canvas>
          {/* Canvas este un container pentru scena 3d*/}
        </div>
      </section>
    </>
  );
};

export default Hero;
