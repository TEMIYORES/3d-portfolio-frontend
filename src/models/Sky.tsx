import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
interface PropsType {
  isRotating: boolean;
  rotationSpeed: number;
}
const Sky: React.FC<PropsType> = ({ isRotating, rotationSpeed, ...props }) => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating || rotationSpeed != 0) {
      if (skyRef.current) skyRef.current.rotation.y += 0.25 * delta;
    }
  });
  return (
    <mesh {...props} ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
