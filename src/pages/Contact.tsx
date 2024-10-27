import { ChangeEvent, FormEvent, Suspense, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "sonner";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    await axios
      .post("https://qayyum-portfolio.glitch.me/api/send-email", form)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err: any) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setCurrentAnimation("idle");
        }, 3000);
      });
  };
  return (
    <>
      <Navbar />
      <section className="relative flex lg:flex-row flex-col max-container">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>
          <form
            ref={formRef}
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                placeholder="Client Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                placeholder="client-email@gmail.com"
                className="input"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>
            <label className="text-black-500 font-semibold">
              Message
              <textarea
                name="message"
                placeholder="Let me know how I can help you!"
                className="input"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </label>
            <button
              className="btn"
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full md:h-[490px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.7, 0]}
                scale={[0.6, 0.6, 0.6]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
