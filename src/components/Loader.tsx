import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="-ml-10 flex justify-center items-center">
        <div className="w-20 h-20 border-t-2 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
