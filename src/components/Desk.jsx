import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

const Desk = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/model.glb");

  const { actions } = useAnimations(animations, group);
  const screenTexture = useTexture("/models/smallrez.png");
  const screenTexture2 = useTexture("/models/smallrez2.png");

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[90.619, -1.254, 29.255]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={0.4}
        >
          <group
            name="e12bfb67a4ea4eef9b7ceb6a412eb33cfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Table"
                  position={[0, -5.472, 0]}
                  rotation={[-1.558, 0.025, 0]}
                  scale={[100, 101.366, 8.407]}
                >
                  <mesh
                    name="Table_Table_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Table_Table_0.geometry}
                    material={materials.Table}
                  />
                  <group
                    name="Cube001"
                    position={[0.052, 0, 11.894]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[-1.102, -0.08, -11.894]}
                  >
                    <mesh
                      name="Cube001_Table_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube001_Table_0.geometry}
                      material={materials.Table}
                    />
                  </group>
                  <group
                    name="Cube002"
                    position={[0.053, 0, 4.758]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[-1.091, -0.97, -0.987]}
                  >
                    <mesh
                      name="Cube002_Table_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube002_Table_0.geometry}
                      material={materials.Table}
                    />
                  </group>
                  <group
                    name="Shelf"
                    position={[0.053, 0, 21.489]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[-1.091, -0.97, -0.987]}
                  >
                    <mesh
                      name="Shelf_Table_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Shelf_Table_0.geometry}
                      material={materials.Table}
                    />
                  </group>
                  <group
                    name="Cylinder"
                    position={[3, 0, 11.894]}
                    scale={[0.081, 0.08, 11.894]}
                  >
                    <mesh
                      name="Cylinder_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cube004"
                    position={[2.998, 0, 28.646]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    scale={[-0.365, -0.97, -1.055]}
                  >
                    <mesh
                      name="Cube004_Table_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube004_Table_0.geometry}
                      material={materials.Table}
                    />
                  </group>
                  <group
                    name="Plane"
                    position={[0.04, 0, 0]}
                    scale={[0.042, 0.066, 1.482]}
                  >
                    <mesh
                      name="Plane_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cube003"
                    position={[0.091, -0.515, 23.27]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[-0.385, -0.38, -1.185]}
                  >
                    <mesh
                      name="Cube003_Black_Green_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube003_Black_Green_0.geometry}
                      material={materials.Black_Green}
                    />
                  </group>
                  <group
                    name="Cube006"
                    position={[0.091, 0.407, 23.27]}
                    rotation={[0, 0, -3.11]}
                    scale={[-0.385, -0.38, -1.185]}
                  >
                    <mesh
                      name="Cube006_Yellow_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube006_Yellow_0.geometry}
                      material={materials.Yellow}
                    />
                  </group>
                  <group
                    name="Cube000"
                    position={[0.139, -0.335, 25.137]}
                    rotation={[0, 0, -2.742]}
                    scale={[-0.371, -0.289, -0.682]}
                  >
                    <mesh
                      name="Cube000_Paper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube000_Paper_0.geometry}
                      material={materials.Paper}
                    />
                    <group
                      name="Cube005"
                      position={[-0.046, -0.139, 0]}
                      rotation={[0, 0, -0.462]}
                      scale={[1.059, 0.962, 1]}
                    >
                      <mesh
                        name="Cube005_Green_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube005_Green_0.geometry}
                        material={materials.Green}
                      />
                      <group
                        name="Cube085"
                        position={[-0.232, 0.087, -0.533]}
                        rotation={[0, 0, 3.131]}
                        scale={[-0.59, -0.752, -0.272]}
                      >
                        <mesh
                          name="Cube085_Paper_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Cube085_Paper_0.geometry}
                          material={materials.Paper}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Cylinder016"
                    position={[3, 0, 0.051]}
                    scale={[0.071, 0.07, 0.048]}
                  >
                    <mesh
                      name="Cylinder016_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder016_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube086"
                    position={[0.065, -0.184, 25.049]}
                    rotation={[0, 0, -0.066]}
                    scale={[0.516, 0.099, 0.185]}
                  >
                    <mesh
                      name="Cube086_Paper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube086_Paper_0.geometry}
                      material={materials.Paper}
                    />
                  </group>
                </group>
                <group
                  name="UPS"
                  position={[-66.919, 111.038, -41.475]}
                  rotation={[-1.49, 0.241, 0.135]}
                  scale={[60.404, 20.544, 31.205]}
                >
                  <mesh
                    name="UPS_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.UPS_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube007"
                    position={[1.023, 0.003, 0.111]}
                    scale={[1, 1.03, 1]}
                  >
                    <mesh
                      name="Cube007_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube007_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Plane001"
                    position={[-0.003, 0, 0]}
                    rotation={[Math.PI / 2, 1.571, 0]}
                    scale={[-0.518, -0.341, -0.176]}
                  >
                    <mesh
                      name="Plane001_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane001_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cylinder004"
                    position={[-0.832, -0.432, -0.185]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.225, 0.341, 0.025]}
                  >
                    <mesh
                      name="Cylinder004_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder004_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                  </group>
                  <group
                    name="Cube008"
                    position={[1.061, -0.004, 0.634]}
                    scale={[0.002, 0.399, 0.072]}
                  >
                    <mesh
                      name="Cube008_Pumpkin_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube008_Pumpkin_Light_0.geometry}
                      material={materials.Pumpkin_Light}
                    />
                  </group>
                </group>
                <group
                  name="Case"
                  position={[-141.049, 121.478, -169.031]}
                  rotation={[-1.698, -0.154, -0.167]}
                  scale={100}
                >
                  <mesh
                    name="Case_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Case_Glass_0.geometry}
                    material={materials.Glass}
                  />
                  <group name="Plane003" position={[-0.19, 0.119, 0.276]}>
                    <mesh
                      name="Plane003_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane003_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane004" position={[0.189, 0.58, 0.603]}>
                    <mesh
                      name="Plane004_Pumpkin_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane004_Pumpkin_0.geometry}
                      material={materials.Pumpkin}
                    />
                  </group>
                  <group
                    name="Plane005"
                    position={[-0.001, 0.751, 0.875]}
                    rotation={[-0.437, 0, 0]}
                  >
                    <mesh
                      name="Plane005_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane005_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane006" position={[-0.002, 0.992, 0.158]}>
                    <mesh
                      name="Plane006_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane006_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder007" position={[0, -0.86, 0.578]}>
                    <mesh
                      name="Cylinder007_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder007_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane007" position={[-0.001, 0.173, -0.432]}>
                    <mesh
                      name="Plane007_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane007_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane008" position={[-0.001, 0.482, 0.467]}>
                    <mesh
                      name="Plane008_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane008_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube020" position={[-0.007, 0.612, -0.368]}>
                    <mesh
                      name="Cube020_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube020_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube021" position={[0.068, -0.153, -0.18]}>
                    <mesh
                      name="Cube021_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube021_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder001" position={[0, -0.437, 0.984]}>
                    <mesh
                      name="Cylinder001_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder001_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder002" position={[0, 0.65, 0.106]}>
                    <mesh
                      name="Cylinder002_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder002_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder003" position={[0, 0.743, -0.433]}>
                    <mesh
                      name="Cylinder003_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder003_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder006" position={[0, -0.407, -0.427]}>
                    <mesh
                      name="Cylinder006_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder006_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder011" position={[-0.001, 0.751, 0.875]}>
                    <mesh
                      name="Cylinder011_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder011_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane009" position={[-0.011, 0.497, 0.785]}>
                    <mesh
                      name="Plane009_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane009_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder005" position={[-0.001, -0.358, 1.087]}>
                    <mesh
                      name="Cylinder005_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder005_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Filling" position={[-0.167, -0.336, 0.247]}>
                    <mesh
                      name="Filling_Black_Green_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Filling_Black_Green_0.geometry}
                      material={materials.Black_Green}
                    />
                    <group
                      name="Cube022"
                      position={[0.203, 0.758, -0.473]}
                      scale={[0.214, 0.225, 0.134]}
                    >
                      <mesh
                        name="Cube022_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube022_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube023"
                      position={[0.166, 0.757, 0.197]}
                      rotation={[0.387, 0, 0]}
                      scale={[0.084, 0.008, 0.115]}
                    >
                      <mesh
                        name="Cube023_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube023_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube025"
                      position={[0.005, -0.274, 0.151]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.005, -0.157, -0.221]}
                    >
                      <mesh
                        name="Cube025_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube025_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube026"
                      position={[0, -0.188, 0.384]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.001, -0.129, -0.033]}
                    >
                      <mesh
                        name="Cube026_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube026_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube027"
                      position={[0.008, 0.012, -0.107]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.003, -0.33, -0.05]}
                    >
                      <mesh
                        name="Cube027_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube027_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube028"
                      position={[0.018, -0.043, 0.228]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.037, -0.11, -0.092]}
                    >
                      <mesh
                        name="Cube028_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube028_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                    <group
                      name="Cube029"
                      position={[0.189, -0.043, 0.228]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.037, -0.11, -0.092]}
                    >
                      <mesh
                        name="Cube029_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube029_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube030"
                      position={[0.157, -0.073, 0.2]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.035, -0.105, -0.088]}
                    >
                      <mesh
                        name="Cube030_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube030_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                    <group
                      name="Cube031"
                      position={[0.026, -0.043, 0.228]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.037, -0.11, -0.092]}
                    >
                      <mesh
                        name="Cube031_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube031_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube032"
                      position={[-0.006, 0.242, -0.114]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.001, -0.075, -0.033]}
                    >
                      <mesh
                        name="Cube032_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube032_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube033"
                      position={[0, 0.097, 0.319]}
                      rotation={[-1.184, 0, -Math.PI]}
                      scale={[-0.001, -0.179, -0.016]}
                    >
                      <mesh
                        name="Cube033_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube033_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube034"
                      position={[0, 0.141, 0.337]}
                      rotation={[-1.184, 0, -Math.PI]}
                      scale={[-0.001, -0.179, -0.016]}
                    >
                      <mesh
                        name="Cube034_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube034_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube035"
                      position={[0.005, 0.199, 0.374]}
                      rotation={[1.957, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.018]}
                    >
                      <mesh
                        name="Cube035_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube035_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube036"
                      position={[0.005, 0.253, 0.242]}
                      rotation={[1.957, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.018]}
                    >
                      <mesh
                        name="Cube036_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube036_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube037"
                      position={[0.005, 0.308, 0.106]}
                      rotation={[1.957, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.018]}
                    >
                      <mesh
                        name="Cube037_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube037_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube038"
                      position={[0.005, 0.388, -0.091]}
                      rotation={[1.957, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.018]}
                    >
                      <mesh
                        name="Cube038_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube038_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube039"
                      position={[-0.001, -0.217, -0.284]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.001, -0.02, -0.016]}
                    >
                      <mesh
                        name="Cube039_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube039_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube040"
                      position={[-0.001, -0.196, -0.375]}
                      rotation={[0.386, 0, Math.PI]}
                      scale={[-0.001, -0.026, -0.021]}
                    >
                      <mesh
                        name="Cube040_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube040_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube041"
                      position={[0.005, 0.425, -0.31]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.013]}
                    >
                      <mesh
                        name="Cube041_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube041_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube042"
                      position={[0.005, 0.286, -0.366]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.013]}
                    >
                      <mesh
                        name="Cube042_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube042_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube043"
                      position={[0.005, 0.148, -0.422]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.07, -0.013]}
                    >
                      <mesh
                        name="Cube043_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube043_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube044"
                      position={[0.005, -0.029, -0.494]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.028, -0.013]}
                    >
                      <mesh
                        name="Cube044_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube044_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube045"
                      position={[0.005, -0.087, -0.518]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.028, -0.013]}
                    >
                      <mesh
                        name="Cube045_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube045_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube046"
                      position={[0.005, -0.139, -0.539]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.021, -0.013]}
                    >
                      <mesh
                        name="Cube046_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube046_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube047"
                      position={[0.005, 0.029, -0.38]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.155, -0.013]}
                    >
                      <mesh
                        name="Cube047_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube047_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube048"
                      position={[0.005, -0.022, -0.254]}
                      rotation={[-2.755, 0, -Math.PI]}
                      scale={[-0.001, -0.155, -0.013]}
                    >
                      <mesh
                        name="Cube048_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube048_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cube050"
                      position={[0.166, 0.389, 0.651]}
                      rotation={[-0.168, 0, 0]}
                      scale={[0.17, 0.346, 0.042]}
                    >
                      <mesh
                        name="Cube050_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube050_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cube053"
                      position={[0.166, 0.791, 0.211]}
                      rotation={[0.387, 0, 0]}
                      scale={[0.098, 0.02, 0.15]}
                    >
                      <mesh
                        name="Cube053_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube053_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                    </group>
                    <group
                      name="Cylinder014"
                      position={[0.166, 0.747, 0.494]}
                      rotation={[-0.16, 0, 0]}
                      scale={[-0.017, -0.017, -0.062]}
                    >
                      <mesh
                        name="Cylinder014_Dark_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder014_Dark_0.geometry}
                        material={materials.Dark}
                      />
                    </group>
                    <group
                      name="Cylinder015"
                      position={[0.047, 1.126, 0.63]}
                      rotation={[-0.974, 0, 0.398]}
                      scale={[0.005, 0.005, 0.013]}
                    >
                      <mesh
                        name="Cylinder015_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder015_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                    <group
                      name="Cube054"
                      position={[0.166, 0.129, -0.099]}
                      rotation={[0.365, 0, 0]}
                    >
                      <mesh
                        name="Cube054_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube054_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                    <group
                      name="Cube055"
                      position={[0.284, -0.115, -0.169]}
                      rotation={[1.936, 1.571, 0]}
                    >
                      <mesh
                        name="Cube055_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube055_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                  </group>
                  <group name="Culler" position={[-0.001, -0.112, 1.018]}>
                    <mesh
                      name="Culler_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Culler_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                    <group
                      name="Cube024"
                      position={[0, 0.66, -0.112]}
                      rotation={[-0.169, 0, 0]}
                      scale={[0.166, 0.166, 0.045]}
                    >
                      <mesh
                        name="Cube024_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube024_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                      <group
                        name="Cylinder008"
                        position={[0, 0, -0.008]}
                        scale={[0.843, 0.843, 0.87]}
                      >
                        <mesh
                          name="Cylinder008_Pumpkin_Light_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Cylinder008_Pumpkin_Light_0.geometry}
                          material={materials.Pumpkin_Light}
                        />
                      </group>
                    </group>
                    <group
                      name="Cube049"
                      position={[0, 0.33, -0.056]}
                      rotation={[-0.169, 0, 0]}
                      scale={[0.166, 0.166, 0.045]}
                    >
                      <mesh
                        name="Cube049_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube049_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                      <group
                        name="Cylinder009"
                        position={[0, 0, -0.008]}
                        scale={[0.843, 0.843, 0.87]}
                      >
                        <mesh
                          name="Cylinder009_Pumpkin_Light_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Cylinder009_Pumpkin_Light_0.geometry}
                          material={materials.Pumpkin_Light}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder010"
                      rotation={[-0.169, 0, 0]}
                      scale={[0.14, 0.14, 0.039]}
                    >
                      <mesh
                        name="Cylinder010_Pumpkin_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_Pumpkin_Light_0.geometry}
                        material={materials.Pumpkin_Light}
                      />
                    </group>
                    <group
                      name="Cube051"
                      position={[0, 0.953, -0.596]}
                      rotation={[-1.388, 0, 0]}
                      scale={[0.166, 0.166, 0.045]}
                    >
                      <mesh
                        name="Cube051_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube051_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                      <group
                        name="Cylinder012"
                        position={[0, 0, -0.008]}
                        scale={[0.843, 0.843, 0.87]}
                      >
                        <mesh
                          name="Cylinder012_Pumpkin_Light_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Cylinder012_Pumpkin_Light_0.geometry}
                          material={materials.Pumpkin_Light}
                        />
                      </group>
                    </group>
                    <group
                      name="Cube052"
                      position={[0, 1.013, -0.925]}
                      rotation={[-1.388, 0, 0]}
                      scale={[0.166, 0.166, 0.045]}
                    >
                      <mesh
                        name="Cube052_Black_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube052_Black_Metal_0.geometry}
                        material={materials.Black_Metal}
                      />
                      <group
                        name="Cylinder013"
                        position={[0, 0, -0.008]}
                        scale={[0.843, 0.843, 0.87]}
                      >
                        <mesh
                          name="Cylinder013_Pumpkin_Light_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Cylinder013_Pumpkin_Light_0.geometry}
                          material={materials.Pumpkin_Light}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Bat" position={[0.196, 0.67, 0.438]}>
                    <mesh
                      name="Bat_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bat_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                </group>
                <group
                  name="Shelf001"
                  position={[358.139, 246.476, 216.626]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[100, 112.924, 100]}
                >
                  <mesh
                    name="Shelf001_Shelf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Shelf001_Shelf_0.geometry}
                    material={materials.Shelf}
                  />
                  <group
                    name="Cube017"
                    position={[-0.001, 0.001, -3.014]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube017_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube017_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube056"
                    position={[-0.001, 0.001, 2.008]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube056_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube056_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube057"
                    position={[-0.001, 0.001, 0.282]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube057_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube057_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube058"
                    position={[-0.001, 0.001, -1.38]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube058_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube058_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube059"
                    position={[0, -0.295, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube059_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube059_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube060"
                    position={[0, 0.005, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube060_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube060_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube061"
                    position={[0, 0.298, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube061_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube061_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube062"
                    position={[0, -0.295, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube062_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube062_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube063"
                    position={[0, 0.005, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube063_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube063_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube064"
                    position={[0, 0.298, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube064_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube064_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube065"
                    position={[0, -0.295, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube065_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube065_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube066"
                    position={[0, 0.005, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube066_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube066_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube067"
                    position={[0, 0.298, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube067_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube067_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube068"
                    position={[0, -0.295, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube068_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube068_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube069"
                    position={[0, 0.005, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube069_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube069_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube070"
                    position={[0, 0.298, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube070_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube070_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                </group>
                <group
                  name="Shelf002"
                  position={[-68.442, 278.031, 209.322]}
                  rotation={[-1.544, -0.056, -0.274]}
                  scale={[100, 112.924, 100]}
                >
                  <mesh
                    name="Shelf002_Shelf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Shelf002_Shelf_0.geometry}
                    material={materials.Shelf}
                  />
                  <group
                    name="Cube015"
                    position={[-0.001, 0.001, -3.014]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube015_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube015_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube016"
                    position={[-0.001, 0.001, 2.008]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube016_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube016_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube071"
                    position={[-0.001, 0.001, 0.282]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube071_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube071_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube072"
                    position={[-0.001, 0.001, -1.38]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={[0.099, 0.019, 0.015]}
                  >
                    <mesh
                      name="Cube072_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube072_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube073"
                    position={[0, -0.295, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube073_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube073_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube074"
                    position={[0, 0.005, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube074_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube074_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube075"
                    position={[0, 0.298, -2.495]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube075_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube075_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube076"
                    position={[0, -0.295, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube076_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube076_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube077"
                    position={[0, 0.005, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube077_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube077_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube078"
                    position={[0, 0.298, -0.86]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube078_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube078_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube079"
                    position={[0, -0.295, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube079_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube079_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube080"
                    position={[0, 0.005, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube080_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube080_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube081"
                    position={[0, 0.298, 0.798]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube081_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube081_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube082"
                    position={[0, -0.295, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube082_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube082_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube083"
                    position={[0, 0.005, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube083_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube083_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                  <group
                    name="Cube084"
                    position={[0, 0.298, 2.528]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[0.1, 0.018, 0.041]}
                  >
                    <mesh
                      name="Cube084_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube084_Shelf_0.geometry}
                      material={materials.Shelf}
                    />
                  </group>
                </group>
                <group
                  name="Book_02001"
                  position={[-154.922, 250.921, 202.58]}
                  rotation={[2.743, -1.297, 2.791]}
                  scale={[43.378, 52.506, 3.731]}
                >
                  <mesh
                    name="Book_02001_Dark002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_02001_Dark002_0.geometry}
                    material={materials["Dark.002"]}
                  />
                  <group
                    name="Cube012"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube012_Paper001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube012_Paper001_0.geometry}
                      material={materials["Paper.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_02002"
                  position={[-155.088, 401.188, 177.065]}
                  rotation={[2.79, -1.276, 2.763]}
                  scale={[37.284, 44.399, 3.729]}
                >
                  <mesh
                    name="Book_02002_Dark002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_02002_Dark002_0.geometry}
                    material={materials["Dark.002"]}
                  />
                  <group
                    name="Cube345"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube345_Paper001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube345_Paper001_0.geometry}
                      material={materials["Paper.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_02003"
                  position={[301.688, 385.59, 262.812]}
                  rotation={[0.068, 0.105, -0.036]}
                  scale={[43.378, 52.506, 3.731]}
                >
                  <mesh
                    name="Book_02003_Dark002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_02003_Dark002_0.geometry}
                    material={materials["Dark.002"]}
                  />
                  <group
                    name="Cube358"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube358_Paper001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube358_Paper001_0.geometry}
                      material={materials["Paper.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_02004"
                  position={[278.138, 364.09, 244.247]}
                  rotation={[0.203, 0.119, -0.129]}
                  scale={[32.876, 27.925, 1.985]}
                >
                  <mesh
                    name="Book_02004_Brown_wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_02004_Brown_wood_0.geometry}
                    material={materials.Brown_wood}
                  />
                  <group
                    name="Cube360"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube360_Paper001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube360_Paper001_0.geometry}
                      material={materials["Paper.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Bass"
                  position={[-1.263, 44.11, 49.669]}
                  rotation={[-1.531, -0.035, 0.015]}
                  scale={[42.752, 31.897, 36.747]}
                >
                  <mesh
                    name="Bass_Red_Wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bass_Red_Wood_0.geometry}
                    material={materials.Red_Wood}
                  />
                  <group name="Cube088" scale={[0.007, 0.196, 0.04]}>
                    <mesh
                      name="Cube088_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube088_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group name="Circle" scale={[0.132, 0.177, 0.154]}>
                    <mesh
                      name="Circle_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Circle_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                  </group>
                  <group
                    name="Plane002"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.546, 0.849, 0.444]}
                  >
                    <mesh
                      name="Plane002_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane002_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                  </group>
                  <group name="Cube089" scale={[0.098, 0.678, 0.252]}>
                    <mesh
                      name="Cube089_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube089_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                  </group>
                  <group
                    name="Cylinder017"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.095, 0.11, 0.082]}
                  >
                    <mesh
                      name="Cylinder017_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder017_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cylinder018"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.053, 0.061, 0.045]}
                  >
                    <mesh
                      name="Cylinder018_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder018_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cylinder019"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.053, 0.061, 0.045]}
                  >
                    <mesh
                      name="Cylinder019_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder019_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cylinder020"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.053, 0.061, 0.045]}
                  >
                    <mesh
                      name="Cylinder020_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder020_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cylinder021"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.053, 0.061, 0.045]}
                  >
                    <mesh
                      name="Cylinder021_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder021_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group
                    name="Cylinder022"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.065, 0.075, 0.056]}
                  >
                    <mesh
                      name="Cylinder022_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder022_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cylinder023"
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.065, 0.075, 0.056]}
                  >
                    <mesh
                      name="Cylinder023_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder023_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube090"
                    rotation={[1.583, 0.032, -0.236]}
                    scale={[0.021, 0.08, 0.061]}
                  >
                    <mesh
                      name="Cube090_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube090_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Bass001">
                    <mesh
                      name="Bass001_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bass001_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cylinder024"
                    position={[-0.736, 0.001, 1.581]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.252, 0.29, 0.013]}
                  >
                    <mesh
                      name="Cylinder024_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder024_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                </group>
                <group
                  name="Speaker"
                  position={[-26.32, 245.194, 192.929]}
                  rotation={[-1.512, -0.054, 1.083]}
                  scale={[17.74, 16.869, 29.47]}
                >
                  <mesh
                    name="Speaker_Red_Wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Speaker_Red_Wood_0.geometry}
                    material={materials.Red_Wood}
                  />
                  <group name="Cube092" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube092_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube092_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube093" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube093_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube093_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube094" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube094_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube094_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube095" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube095_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube095_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube096">
                    <mesh
                      name="Cube096_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube096_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube097"
                    position={[1.028, 0.039, 0.428]}
                    scale={[0.017, 0.371, 0.05]}
                  >
                    <mesh
                      name="Cube097_Gray_Metal001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube097_Gray_Metal001_0.geometry}
                      material={materials["Gray_Metal.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Speaker001"
                  position={[329.114, 218.002, 329.167]}
                  rotation={[-1.409, -0.188, 1.916]}
                  scale={[17.74, 16.869, 29.47]}
                >
                  <mesh
                    name="Speaker001_Red_Wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Speaker001_Red_Wood_0.geometry}
                    material={materials.Red_Wood}
                  />
                  <group name="Cube098" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube098_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube098_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube099" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube099_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube099_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube100" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube100_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube100_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube101" scale={[0.103, 0.109, 0.017]}>
                    <mesh
                      name="Cube101_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube101_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube102">
                    <mesh
                      name="Cube102_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube102_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube103"
                    position={[1.028, 0.039, 0.428]}
                    scale={[0.017, 0.371, 0.05]}
                  >
                    <mesh
                      name="Cube103_Gray_Metal001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube103_Gray_Metal001_0.geometry}
                      material={materials["Gray_Metal.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Monitor_U2518D"
                  position={[259.308, 251.743, 58.429]}
                  rotation={[-1.538, 0.043, 0.075]}
                  scale={100}
                >
                  <mesh
                    name="Monitor_U2518D_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Monitor_U2518D_Material_0.geometry}
                  >
                    <meshStandardMaterial
                      attach="material"
                      map={screenTexture}
                    />
                  </mesh>
                  <group name="Cube104">
                    <mesh
                      name="Cube104_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube104_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube105">
                    <mesh
                      name="Cube105_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube105_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group name="Plane010">
                    <mesh
                      name="Plane010_Gray_Metal001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane010_Gray_Metal001_0.geometry}
                      material={materials["Gray_Metal.001"]}
                    />
                    <group
                      name="Cube107"
                      position={[-0.35, 0.309, 0.008]}
                      scale={[-0.055, -0.037, -0.008]}
                    >
                      <mesh
                        name="Cube107_Gray_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube107_Gray_Metal_0.geometry}
                        material={materials.Gray_Metal}
                      />
                    </group>
                    <group
                      name="Cube108"
                      position={[0.35, 0.309, 0.008]}
                      scale={[-0.055, -0.037, -0.008]}
                    >
                      <mesh
                        name="Cube108_Gray_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube108_Gray_Metal_0.geometry}
                        material={materials.Gray_Metal}
                      />
                    </group>
                    <group
                      name="Cube109"
                      position={[-0.35, -0.309, 0.008]}
                      scale={[-0.055, -0.037, -0.008]}
                    >
                      <mesh
                        name="Cube109_Gray_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube109_Gray_Metal_0.geometry}
                        material={materials.Gray_Metal}
                      />
                    </group>
                    <group
                      name="Cube110"
                      position={[0.35, -0.309, 0.008]}
                      scale={[-0.055, -0.037, -0.008]}
                    >
                      <mesh
                        name="Cube110_Gray_Metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube110_Gray_Metal_0.geometry}
                        material={materials.Gray_Metal}
                      />
                    </group>
                  </group>
                  <group name="Cube111">
                    <mesh
                      name="Cube111_Gray_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube111_Gray_Metal_0.geometry}
                      material={materials.Gray_Metal}
                    />
                  </group>
                  <group name="Cube112">
                    <mesh
                      name="Cube112_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube112_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube113">
                    <mesh
                      name="Cube113_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube113_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  {/* <group
                    name="Cube130"
                    position={[0.071, 0, -0.013]}
                    rotation={[Math.PI, 0, 0]}
                    scale={[-0.947, -0.029, -0.194]}
                  >
                    <mesh
                      name="Cube130_white_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube130_white_0.geometry}
                      material={materials.white}
                    />
                  </group> */}
                  {/* <group
                    name="Bat004"
                    position={[0, 0, -0.081]}
                    rotation={[0, -0.973, 0]}
                    scale={1.206}
                  >
                    <mesh
                      name="Bat004_Dark001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Bat004_Dark001_0.geometry}
                      material={materials["Dark.001"]}
                    />
                  </group> */}
                  <group
                    name="Cube336"
                    position={[-1.103, 0.1, 0.515]}
                    rotation={[-1.567, 0, 0]}
                    scale={[0.017, 0.007, 0.002]}
                  >
                    <mesh
                      name="Cube336_Pumpkin_Light001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube336_Pumpkin_Light001_0.geometry}
                      material={materials["Pumpkin_Light.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Monitor_V226hql"
                  position={[36.231, 273.104, 61.224]}
                  rotation={[1.608, 0.057, -2.804]}
                  scale={[-101.256, -2.558, -62.197]}
                >
                  <mesh
                    name="Monitor_V226hql_Black_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Monitor_V226hql_Black_Metal_0.geometry}
                  >
                    <meshStandardMaterial
                      attach="material"
                      map={screenTexture2}
                    />
                  </mesh>
                  <group name="Cube" scale={[1.009, 1.36, 1.001]}>
                    <mesh
                      name="Cube_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube131"
                    position={[-0.008, -5.31, 0.525]}
                    scale={[1.267, 1.554, 1.213]}
                  >
                    <mesh
                      name="Cube131_Gray_Metal002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube131_Gray_Metal002_0.geometry}
                      material={materials["Gray_Metal.002"]}
                    />
                  </group>
                  <group name="Cube132" scale={[0.167, 1.708, 0.561]}>
                    <mesh
                      name="Cube132_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube132_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cube133" scale={[0.473, 14.681, 0.04]}>
                    <mesh
                      name="Cube133_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube133_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube134"
                    rotation={[-Math.PI, 0, Math.PI]}
                    scale={[-0.09, -2.159, -0.047]}
                  >
                    <mesh
                      name="Cube134_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube134_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube135"
                    rotation={[Math.PI, 0, Math.PI]}
                    scale={[-0.128, -0.256, -0.067]}
                  >
                    <mesh
                      name="Cube135_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube135_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                </group>
                <group
                  name="Mug"
                  position={[403.219, 340.211, -1.467]}
                  rotation={[-1.382, 0.01, -1.987]}
                  scale={[12.821, 12.821, 12.71]}
                >
                  <mesh
                    name="Mug_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mug_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group name="Cylinder025" scale={[0.974, 0.974, 1.177]}>
                    <mesh
                      name="Cylinder025_Mug_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder025_Mug_0.geometry}
                      material={materials.material}
                    />
                  </group>
                  <group name="Cylinder026" scale={[1.207, 0.833, 1.177]}>
                    <mesh
                      name="Cylinder026_Mug_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder026_Mug_0.geometry}
                      material={materials.material}
                    />
                  </group>
                  <group name="Cylinder028">
                    <mesh
                      name="Cylinder028_Red_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder028_Red_0.geometry}
                      material={materials.material_23}
                    />
                  </group>
                  <group
                    name="Cylinder041"
                    position={[0.01, 0.006, 1.438]}
                    rotation={[0, 0, 0.868]}
                    scale={[-0.807, -0.807, -0.553]}
                  >
                    <mesh
                      name="Cylinder041_Red_Wood_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder041_Red_Wood_0.geometry}
                      material={materials.Red_Wood}
                    />
                  </group>
                </group>
                <group
                  name="Mug_base"
                  position={[390.34, 292.524, 9.583]}
                  rotation={[-1.549, -0.014, -0.049]}
                  scale={[15, 15, 1.839]}
                >
                  <mesh
                    name="Mug_base_Brown_wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mug_base_Brown_wood_0.geometry}
                    material={materials.Brown_wood}
                  />
                </group>
                <group
                  name="Tablet"
                  position={[237.918, 253.84, -40.212]}
                  rotation={[-1.565, 0.048, 0.019]}
                  scale={100}
                >
                  <mesh
                    name="Tablet_Wacom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Tablet_Wacom_0.geometry}
                    material={materials.Wacom}
                  />
                  <group
                    name="Cube009"
                    rotation={[0, 0, -Math.PI]}
                    scale={[-0.882, -0.555, -0.013]}
                  >
                    <mesh
                      name="Cube009_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube009_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Plane011" rotation={[0, 0, 3.034]} scale={0.05}>
                    <mesh
                      name="Plane011_Black_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane011_Black_Metal_0.geometry}
                      material={materials.Black_Metal}
                    />
                  </group>
                </group>
                <group
                  name="Keyboard"
                  position={[234.118, 256.454, 1.278]}
                  rotation={[-1.61, 0.045, -0.007]}
                  scale={[21.105, 26.73, 2.293]}
                >
                  <mesh
                    name="Keyboard_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Keyboard_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <mesh
                    name="Keyboard_Dark001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Keyboard_Dark001_0.geometry}
                    material={materials["Dark.001"]}
                  />
                  <group
                    name="Cube335"
                    rotation={[-0.2, 0, 0]}
                    scale={[0.08, 0.03, 0.075]}
                  >
                    <mesh
                      name="Cube335_Pumpkin_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube335_Pumpkin_Light_0.geometry}
                      material={materials.Pumpkin_Light}
                    />
                  </group>
                </group>
                <group
                  name="Mouse"
                  position={[122.618, 269.064, -63.675]}
                  rotation={[-1.582, -0.029, 0.138]}
                  scale={100}
                >
                  <mesh
                    name="Mouse_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Mouse_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group name="Cylinder030" position={[-0.029, -0.133, 0.052]}>
                    <mesh
                      name="Cylinder030_Pumpkin_Light001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder030_Pumpkin_Light001_0.geometry}
                      material={materials["Pumpkin_Light.001"]}
                    />
                  </group>
                  <group name="Cylinder031" position={[-0.029, -0.133, 0.052]}>
                    <mesh
                      name="Cylinder031_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder031_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group name="Cylinder029" position={[0.008, -0.03, 0.016]}>
                    <mesh
                      name="Cylinder029_Pumpkin_Light001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder029_Pumpkin_Light001_0.geometry}
                      material={materials["Pumpkin_Light.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01"
                  position={[-4.04, 261.108, -40.166]}
                  rotation={[-Math.PI / 2, 0, -0.095]}
                  scale={[40.984, 49.181, 6.317]}
                >
                  <mesh
                    name="Book_01_Pumpkin_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01_Pumpkin_0.geometry}
                    material={materials.Pumpkin}
                  />
                  <group
                    name="Cube337"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube337_Paper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube337_Paper_0.geometry}
                      material={materials.Paper}
                    />
                  </group>
                </group>
                <group
                  name="Book_02"
                  position={[-0.988, 299.956, -78.783]}
                  rotation={[-1.704, 0.102, -0.041]}
                  scale={[43.378, 52.506, 3.731]}
                >
                  <mesh
                    name="Book_02_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_02_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube010"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube010_Paper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube010_Paper_0.geometry}
                      material={materials.Paper}
                    />
                  </group>
                </group>
                <group
                  name="Cube013"
                  position={[-106.598, 68.03, 190.108]}
                  rotation={[-1.544, -0.056, -0.274]}
                  scale={[53.132, 41.293, 39.624]}
                >
                  <mesh
                    name="Cube013_Brown_wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_Brown_wood_0.geometry}
                    material={materials.Brown_wood}
                  />
                  <mesh
                    name="Cube013_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube014"
                    position={[-0.033, 0.008, 1.269]}
                    rotation={[0.002, -0.163, 0.02]}
                    scale={[1.066, 1.055, 0.229]}
                  >
                    <mesh
                      name="Cube014_Brown_wood_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube014_Brown_wood_0.geometry}
                      material={materials.Brown_wood}
                    />
                    <mesh
                      name="Cube014_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube014_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube366"
                    position={[0.875, 0.805, 1.037]}
                    rotation={[-0.561, 1.016, 0.203]}
                    scale={[0.068, 0.07, 0.205]}
                  >
                    <mesh
                      name="Cube366_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube366_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                  <group
                    name="Cube368"
                    position={[0.83, -0.88, 1.061]}
                    rotation={[1.283, 0.699, -2.31]}
                    scale={[0.064, 0.068, 0.225]}
                  >
                    <mesh
                      name="Cube368_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube368_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group>
                </group>
                <group
                  name="Cube018"
                  position={[384.401, 7.983, 209.654]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[59.709, 48.106, 9.977]}
                >
                  <mesh
                    name="Cube018_Brown_wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_Brown_wood_0.geometry}
                    material={materials.Brown_wood}
                  />
                </group>
                <group
                  name="Cube019"
                  position={[384.454, 9.75, 209.674]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[60.227, 48.524, 9.482]}
                >
                  <mesh
                    name="Cube019_Pumpkin_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_Pumpkin_0.geometry}
                    material={materials.Pumpkin}
                  />
                </group>
                <group
                  name="Cylinder035"
                  position={[300.234, 46.528, 243.546]}
                  rotation={[-1.544, 0.221, 1.139]}
                  scale={[18.608, 18.608, 33.485]}
                >
                  <mesh
                    name="Cylinder035_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder035_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <mesh
                    name="Cylinder035_Gray_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder035_Gray_Metal_0.geometry}
                    material={materials.Gray_Metal}
                  />
                </group>
                <group
                  name="Book_01001"
                  position={[414.898, 161.013, 193.272]}
                  rotation={[-1.56, 0.03, -1.346]}
                  scale={[26.324, 31.589, 4.057]}
                >
                  <mesh
                    name="Book_01001_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01001_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube338"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube338_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube338_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01002"
                  position={[412.436, 170.982, 191.516]}
                  rotation={[-1.56, 0.03, 0.115]}
                  scale={[32.671, 19.41, 2.562]}
                >
                  <mesh
                    name="Book_01002_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01002_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube339"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube339_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube339_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01003"
                  position={[610.485, 283.647, 197.974]}
                  rotation={[-1.394, 0.374, -0.132]}
                  scale={[32.864, 21.494, 1.567]}
                >
                  <mesh
                    name="Book_01003_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01003_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube340"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube340_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube340_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01004"
                  position={[413.65, 201.485, 240.746]}
                  rotation={[0.137, 0.176, -0.088]}
                  scale={[53.907, 37.448, 4.343]}
                >
                  <mesh
                    name="Book_01004_Pumpkin_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01004_Pumpkin_0.geometry}
                    material={materials.Pumpkin}
                  />
                  <group
                    name="Cube341"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube341_Paper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube341_Paper_0.geometry}
                      material={materials.Paper}
                    />
                  </group>
                </group>
                <group
                  name="Cube342"
                  position={[374.561, 334.448, 224.001]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[30.501, 23.705, 6.636]}
                >
                  <mesh
                    name="Cube342_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube342_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="Cube343"
                  position={[374.769, 341.303, 224.077]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[30.879, 23.998, 1.468]}
                >
                  <mesh
                    name="Cube343_Black_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube343_Black_Metal_0.geometry}
                    material={materials.Black_Metal}
                  />
                </group>
                <group
                  name="Cube344"
                  position={[374.408, 329.373, 223.944]}
                  rotation={[-1.56, 0.03, 0.141]}
                  scale={[30.879, 23.998, 1.468]}
                >
                  <mesh
                    name="Cube344_Black_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube344_Black_Metal_0.geometry}
                    material={materials.Black_Metal}
                  />
                </group>
                <group
                  name="Cube346"
                  position={[-56.276, 205.511, 206.992]}
                  rotation={[-1.544, -0.056, -0.274]}
                  scale={[85.163, 48.106, 9.977]}
                >
                  <mesh
                    name="Cube346_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube346_Dark_0.geometry}
                    material={materials.Dark}
                  />
                </group>
                <group
                  name="Cube347"
                  position={[-56.376, 207.275, 207.039]}
                  rotation={[-1.544, -0.056, -0.274]}
                  scale={[85.902, 48.524, 9.482]}
                >
                  <mesh
                    name="Cube347_Black_Metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube347_Black_Metal_0.geometry}
                    material={materials.Black_Metal}
                  />
                </group>
                <group
                  name="Book_01005"
                  position={[-93.692, 216.253, 204.527]}
                  rotation={[-1.544, -0.056, 2.888]}
                  scale={[26.324, 31.589, 4.057]}
                >
                  <mesh
                    name="Book_01005_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01005_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube348"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube348_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube348_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01006"
                  position={[-99.914, 358.215, 201.693]}
                  rotation={[-1.544, -0.056, 2.888]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01006_Mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01006_Mug_0.geometry}
                    material={materials.material}
                  />
                  <group
                    name="Cube349"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube349_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube349_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01007"
                  position={[-99.25, 363.383, 195.551]}
                  rotation={[-1.544, -0.056, 2.841]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01007_Mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01007_Mug_0.geometry}
                    material={materials.material}
                  />
                  <group
                    name="Cube350"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube350_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube350_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01008"
                  position={[-360.511, 448.294, 266.836]}
                  rotation={[-1.308, -0.688, 1.767]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01008_Puf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01008_Puf_0.geometry}
                    material={materials.material_26}
                  />
                  <group
                    name="Cube351"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube351_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube351_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01009"
                  position={[-94.715, 377.785, 198.927]}
                  rotation={[-1.544, -0.056, 2.764]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01009_Mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01009_Mug_0.geometry}
                    material={materials.material}
                  />
                  <group
                    name="Cube352"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube352_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube352_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01010"
                  position={[-99.739, 384.596, 195.627]}
                  rotation={[-1.544, -0.056, 2.834]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01010_Mug_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01010_Mug_0.geometry}
                    material={materials.material}
                  />
                  <group
                    name="Cube353"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube353_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube353_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01011"
                  position={[-97.267, 398.523, 196.837]}
                  rotation={[-1.611, -0.113, 2.864]}
                  scale={[47.121, 35.133, 2.479]}
                >
                  <mesh
                    name="Book_01011_Puf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01011_Puf_0.geometry}
                    material={materials.material_26}
                  />
                  <group
                    name="Cube354"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube354_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube354_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01012"
                  position={[-17.593, 362.328, 221.836]}
                  rotation={[-1.544, -0.056, 2.888]}
                  scale={[18.904, 25.272, 4.023]}
                >
                  <mesh
                    name="Book_01012_Wacom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01012_Wacom_0.geometry}
                    material={materials.Wacom}
                  />
                  <group
                    name="Cube355"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube355_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube355_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01013"
                  position={[-19.71, 371.929, 220.601]}
                  rotation={[-1.544, -0.056, 2.798]}
                  scale={[18.904, 25.272, 4.023]}
                >
                  <mesh
                    name="Book_01013_Wacom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01013_Wacom_0.geometry}
                    material={materials.Wacom}
                  />
                  <group
                    name="Cube356"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube356_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube356_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01014"
                  position={[-15.05, 369.787, 336.478]}
                  rotation={[-1.601, 0.349, 2.726]}
                  scale={[18.904, 25.272, 4.023]}
                >
                  <mesh
                    name="Book_01014_Wacom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01014_Wacom_0.geometry}
                    material={materials.Wacom}
                  />
                  <group
                    name="Cube357"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube357_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube357_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01015"
                  position={[440.595, 325.844, 196.989]}
                  rotation={[-1.56, 0.03, -0.039]}
                  scale={[18.904, 25.272, 4.023]}
                >
                  <mesh
                    name="Book_01015_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01015_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube359"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube359_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube359_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01016"
                  position={[401.611, 499.945, 217.682]}
                  rotation={[-1.56, 0.03, -1.346]}
                  scale={[40.061, 51.783, 3.728]}
                >
                  <mesh
                    name="Book_01016_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01016_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube361"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube361_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube361_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01017"
                  position={[443.893, 595.35, 252.719]}
                  rotation={[-1.271, 0.01, -1.338]}
                  scale={[34.662, 44.805, 3.226]}
                >
                  <mesh
                    name="Book_01017_Wacom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01017_Wacom_0.geometry}
                    material={materials.Wacom}
                  />
                  <group
                    name="Cube362"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube362_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube362_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01018"
                  position={[-107.579, 530.913, 211.795]}
                  rotation={[-1.544, -0.056, 1.308]}
                  scale={[40.061, 51.783, 3.728]}
                >
                  <mesh
                    name="Book_01018_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01018_Dark_0.geometry}
                    material={materials.Dark}
                  />
                  <group
                    name="Cube363"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube363_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube363_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01019"
                  position={[-160.092, 589.212, 398.595]}
                  rotation={[-1.475, 0.426, 1.77]}
                  scale={[35.893, 46.396, 1.734]}
                >
                  <mesh
                    name="Book_01019_Pumpkin_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01019_Pumpkin_0.geometry}
                    material={materials.Pumpkin}
                  />
                  <group
                    name="Cube364"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.87]}
                  >
                    <mesh
                      name="Cube364_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube364_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Book_01020"
                  position={[-14.556, 535.69, 229.716]}
                  rotation={[-1.544, -0.056, 2.84]}
                  scale={[18.904, 25.272, 4.023]}
                >
                  <mesh
                    name="Book_01020_Brown_wood_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Book_01020_Brown_wood_0.geometry}
                    material={materials.Brown_wood}
                  />
                  <group
                    name="Cube365"
                    position={[0.028, 0, 1]}
                    scale={[0.977, 0.977, 0.92]}
                  >
                    <mesh
                      name="Cube365_Paper002_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube365_Paper002_0.geometry}
                      material={materials["Paper.002"]}
                    />
                  </group>
                </group>
                <group
                  name="Bat001"
                  position={[250.003, 434.808, 185.214]}
                  rotation={[-3.126, -0.141, 1.415]}
                  scale={[13.688, 12.608, 12.608]}
                >
                  {/* <mesh
                    name="Bat001_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bat001_Dark_0.geometry}
                    material={materials.Dark}
                  /> */}
                </group>
                <group
                  name="Bat002"
                  position={[42.041, 532.915, 200.865]}
                  rotation={[-3.099, 0.273, 1.03]}
                  scale={[12.014, 8.779, 8.779]}
                >
                  {/* <mesh
                    name="Bat002_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bat002_Dark_0.geometry}
                    material={materials.Dark}
                  /> */}
                </group>
                <group
                  name="Bat003"
                  position={[467.07, 490.1, 154.71]}
                  rotation={[-0.033, 0.127, -2.039]}
                  scale={[13.688, 12.608, 12.608]}
                >
                  {/* <mesh
                    name="Bat003_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Bat003_Dark_0.geometry}
                    material={materials.Dark}
                  /> */}
                </group>
                <group
                  name="Lantern"
                  position={[-83.796, 478.106, 171.741]}
                  rotation={[-1.62, 0.004, -0.226]}
                  scale={[36.367, 36.367, 31.946]}
                >
                  {/* <mesh
                    name="Lantern_Pumpkin_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_Pumpkin_0.geometry}
                    material={materials.Pumpkin}
                  /> */}
                  {/* <mesh
                    name="Lantern_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_Dark_0.geometry}
                    material={materials.Dark}
                  /> */}
                  {/* <group
                    name="Cylinder027"
                    position={[-0.001, 0, 1.058]}
                    scale={[0.255, 0.255, 0.071]}
                  >
                    <mesh
                      name="Cylinder027_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder027_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group> */}
                  {/* <group
                    name="Cylinder032"
                    position={[-0.001, 0, -1.039]}
                    scale={[0.255, 0.255, 0.071]}
                  >
                    <mesh
                      name="Cylinder032_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder032_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group> */}
                  {/* <group
                    name="Circle001"
                    position={[-0.001, 0.018, 1.134]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.278, 0.308, 0.278]}
                  >
                    <mesh
                      name="Circle001_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Circle001_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group> */}
                  {/* <group
                    name="Circle002"
                    position={[-0.01, 0.005, 1.475]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.062, 0.056, 0.13]}
                  >
                    <mesh
                      name="Circle002_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Circle002_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group> */}
                  {/* <group
                    name="Circle003"
                    position={[-0.01, 0.005, 1.475]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.062, 0.056, 0.13]}
                  >
                    <mesh
                      name="Circle003_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Circle003_Dark_0.geometry}
                      material={materials.Dark}
                    />
                  </group> */}
                </group>
                <group
                  name="Chair"
                  position={[301.552, 140.176, -303.358]}
                  rotation={[-1.636, 0.055, -0.342]}
                  scale={100}
                >
                  {/* <mesh
                    name="Chair_Shelf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_Shelf_0.geometry}
                    material={materials.Shelf}
                  /> */}
                  <group
                    name="Torus"
                    position={[-0.182, 0.87, 1.101]}
                    rotation={[Math.PI / 2, 0.217, 0]}
                    scale={[0.382, 0.447, 0.447]}
                  >
                    {/* <mesh
                      name="Torus_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Torus_Dark_0.geometry}
                      material={materials.Dark}
                    /> */}
                  </group>
                  <group
                    name="Cube011"
                    position={[-0.125, 0.709, 0.966]}
                    rotation={[-0.183, -0.04, 0.213]}
                    scale={[0.495, 0.019, 0.39]}
                  >
                    {/* <mesh
                      name="Cube011_Shelf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube011_Shelf_0.geometry}
                      material={materials.Shelf}
                    /> */}
                  </group>
                  <group
                    name="Cylinder033"
                    position={[0.005, -0.001, -0.059]}
                    rotation={[0, 0, 0.217]}
                    scale={[0.223, 0.223, 0.046]}
                  >
                    {/* <mesh
                      name="Cylinder033_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder033_Dark_0.geometry}
                      material={materials.Dark}
                    /> */}
                  </group>
                  <group
                    name="Cylinder034"
                    position={[0.005, 0, -0.626]}
                    rotation={[0, 0, 0.217]}
                    scale={[0.075, 0.075, 0.316]}
                  >
                    {/* <mesh
                      name="Cylinder034_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder034_Dark_0.geometry}
                      material={materials.Dark}
                    /> */}
                  </group>
                  <group
                    name="Cylinder039"
                    position={[-0.402, 0.752, 0.941]}
                    rotation={[1.356, 0.212, 0.046]}
                    scale={0.037}
                  >
                    {/* <mesh
                      name="Cylinder039_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder039_Dark_0.geometry}
                      material={materials.Dark}
                    /> */}
                  </group>
                  <group
                    name="Cylinder040"
                    position={[0.068, 0.856, 0.941]}
                    rotation={[1.356, 0.212, 0.046]}
                    scale={0.037}
                  >
                    {/* <mesh
                      name="Cylinder040_Dark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Cylinder040_Dark_0.geometry}
                      material={materials.Dark}
                    /> */}
                  </group>
                </group>
                <group
                  name="Base"
                  position={[295.533, 43.042, -297.642]}
                  rotation={[-1.623, 0.067, -1.272]}
                  scale={100}
                >
                  {/* <mesh
                    name="Base_Dark_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Base_Dark_0.geometry}
                    material={materials.Dark}
                  /> */}
                </group>
                <group
                  name="Puf"
                  position={[304.358, 162.714, -305.262]}
                  rotation={[-1.776, 0.065, -0.323]}
                  scale={100}
                >
                  {/* <mesh
                    name="Puf_Puf_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Puf_Puf_0.geometry}
                    material={materials.material_26}
                  /> */}
                  <group
                    name="Torus002"
                    position={[0.009, 0.592, -0.063]}
                    rotation={[-0.145, -0.019, 0.019]}
                    scale={[0.266, 0.494, 0.494]}
                  >
                    {/* <mesh
                      name="Torus002_Puf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Torus002_Puf_0.geometry}
                      material={materials.material_26}
                    /> */}
                  </group>
                  <group
                    name="Torus003"
                    position={[-0.379, 0.487, -0.044]}
                    rotation={[-0.148, 0.153, 0.188]}
                    scale={[0.266, 0.494, 0.494]}
                  >
                    {/* <mesh
                      name="Torus003_Puf_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Torus003_Puf_0.geometry}
                      material={materials.material_26}
                    /> */}
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/model.glb");
export default Desk;
