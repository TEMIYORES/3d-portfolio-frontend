import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import Island from "../models/Island";
import sakura from "../assets/music/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const cameraProperties: { near: number; far: number } = {
  near: 1,
  far: 1000,
};

// In your main JavaScript or a useEffect in React
const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
setVh();
window.addEventListener("resize", setVh);

const Home: React.FC = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
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
      screenPosition = [0, -6.5, -43.4];
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
      screenPosition = [0, -1.5, 0];
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
      <section className="w-full h-dynamic relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          camera={cameraProperties}
          className={`w-full h-dynamic bg-transparent ${
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
        <div className="absolute bottom-2 left-2">
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt="sound on/off"
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => {
              setIsPlayingMusic(!isPlayingMusic);
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
