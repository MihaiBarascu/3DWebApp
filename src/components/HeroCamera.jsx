import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  // useRef creeaza o referinta mutable care poate fi accesata in timpul ciclului de viata al componentei

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 30], 1, delta);
    // easing.damp3 este o functie care aplica o interpolare liniara asupra unui obiect 3d

    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 7, -state.pointer.x / 4, 0],
        0.25,
        delta
      );
      // easing.dampE este o functie care aplica o interpolare liniara asupra unui obiect 3d
    }
  });
  // useFrmae creeaza animatia in care camera se misca la initializare si mai face ca obiectele 3d sa se roteasca in functie de miscarea mouse-ului

  return <group ref={groupRef}>{children}</group>;
  // group este un container pentru obiecte 3d
};

export default HeroCamera;
