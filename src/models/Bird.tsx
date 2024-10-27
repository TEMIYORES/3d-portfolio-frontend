import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Bird: React.FC = () => {
  const birdRef = useRef<THREE.Mesh>(null!);
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    let radius = 30; // Radius of the circular path around the island
    const speed = 0.07; // Adjust speed as needed
    let height = 8; // Constant height above the island

    if (window.innerWidth < 768) {
      radius = 20;
      height = 12;
    } else {
      height = 10;
    }
    // Calculate x and z for circular motion around the island center
    const islandCenter = new THREE.Vector3(0, -6.5, -43.4);
    birdRef.current.position.x =
      islandCenter.x + Math.cos(elapsedTime * speed) * radius;
    birdRef.current.position.z =
      islandCenter.z + Math.sin(elapsedTime * speed) * radius;

    // Adjust y position for height and simulate a slight bobbing effect
    birdRef.current.position.y =
      islandCenter.y + height + Math.sin(elapsedTime * 2) * 2;

    // Calculate a slightly offset position for the bird to look towards
    const lookAheadTime = elapsedTime + 0.1; // Adjust as necessary for rotation responsiveness
    const lookAtX = islandCenter.x - Math.cos(lookAheadTime * speed) * radius;
    const lookAtZ = islandCenter.z - Math.sin(lookAheadTime * speed) * radius;

    // Rotate the bird to face forward along the path
    birdRef.current.lookAt(
      new THREE.Vector3(lookAtX, birdRef.current.position.y, lookAtZ)
    );
  });

  return (
    <mesh ref={birdRef} scale={[0.005, 0.005, 0.005]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
