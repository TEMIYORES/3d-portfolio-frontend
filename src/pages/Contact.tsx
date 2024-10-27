import { ChangeEvent, useRef, useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = () => {};
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
      </section>
    </>
  );
};

export default Contact;
