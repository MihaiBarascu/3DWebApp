import { Html, useProgress } from "@react-three/drei";

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
      <span>Loading</span>
    </Html>
  );
};

export default CanvasLoader;
