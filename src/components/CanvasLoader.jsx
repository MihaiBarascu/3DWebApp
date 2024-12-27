import { Html } from "@react-three/drei";
import { ProgressSpinner } from "primereact/progressspinner";
const CanvasLoader = () => {
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressSpinner />
    </Html>
    // Html este un container pentru elemente html in scena 3d
  );
};

export default CanvasLoader;
