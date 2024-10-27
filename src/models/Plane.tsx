import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import planeScreen from "../assets/3d/plane.glb";
import { useFrame } from "@react-three/fiber";
interface PropsType {
  isRotating: boolean;
  props: any;
  rotationSpeed: number;
}
const Plane: React.FC<PropsType> = ({
  isRotating,
  rotationSpeed,
  ...props
}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScreen);
  const { actions } = useAnimations(animations, ref);
  useFrame(() => {
    actions["Take 001"]?.play();
  });
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
