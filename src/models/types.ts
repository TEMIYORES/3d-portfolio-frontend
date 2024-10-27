// types.ts or in each component's file

import { Dispatch, SetStateAction } from "react";

// Types for 3D position, scale, and rotation
type Vector3 = [number, number, number];

// Island Props
export interface IslandProps {
  position: Vector3;
  scale: Vector3;
  rotation: Vector3;
  setRotationSpeed: Dispatch<SetStateAction<number>>;
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
}
export interface FoxProps {
  position: Vector3;
  scale: Vector3;
  rotation: Vector3;
  currentAnimation: string;
}

// Sky Props
export interface SkyProps {
  isRotating: boolean;
  rotationSpeed: number;
}

// Plane Props
export interface PlaneProps {
  isRotating: boolean;
  scale: Vector3;
  rotationSpeed: number;
  position: Vector3;
  rotation: Vector3;
}
