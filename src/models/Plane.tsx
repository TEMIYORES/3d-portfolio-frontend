import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import planeScreen from "../assets/3d/plane.glb";
import { PlaneProps } from "./types";

const Plane: React.FC<PlaneProps> = ({
  isRotating,
  rotationSpeed,
  ...props
}) => {
  const planeRef = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF(planeScreen);
  const { actions } = useAnimations(animations, planeRef);
  useFrame(() => {
    actions["Take 001"]?.play();
  });
  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
