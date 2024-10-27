import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import Island from "../models/Island";

const cameraProperties: { near: number; far: number } = {
  near: 1,
  far: 1000,
};

const Home: React.FC = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);

  const adjustIslandForScreenSize = (): [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] => {
    let screenScale: [number, number, number];
    let screenPosition: [number, number, number];
    let screenRotation: [number, number, number] = [0.1, 4.7077, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -4.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, screenRotation];
  };

  const adjustPlaneForScreenSize = (): [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ] => {
    let screenScale: [number, number, number];
    let screenPosition: [number, number, number];
    let screenRotation: [number, number, number] = [0, 20.5, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -0.75, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition, screenRotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  return (
    <div>
      <Navbar />
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          camera={cameraProperties}
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight groundColor={"#000000"} intensity={1} />
            <Bird />
            <Sky isRotating={isRotating} rotationSpeed={rotationSpeed} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setRotationSpeed={setRotationSpeed}
              setCurrentStage={setCurrentStage}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              rotationSpeed={rotationSpeed}
              position={planePosition}
              rotation={planeRotation}
            />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;
