import { Suspense, useState } from "react";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
const cameraPoperties = {
  near: 1,
  far: 1000,
};
const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [rationSpeed, setRationSpeed] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let screenRotation = [0.1, 4.7077, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -4.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, screenRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    let screenRotation = [0, 20.5, 0];

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
  const [currentStage, setCurrentStage] = useState(1);
  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();
  return (
    <div>
      <Navbar />
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas
          camera={cameraPoperties}
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            {/* <pointLight />
            <spotLight /> */}
            <hemisphereLight
              skyColor={"#b1e1ff"}
              groundColor={"#000000"}
              intensity={1}
            />
            <Bird />
            <Sky isRotating={isRotating} rotationSpeed={rationSpeed} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              setRationSpeed={setRationSpeed}
              setCurrentStage={setCurrentStage}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              rotationSpeed={rationSpeed}
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
