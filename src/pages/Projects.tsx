import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've embarked on numerous projects throughout the years, but these
            are the ones I hold closest to my heart. Many of them are
            private-source, so I can't share the codebase but feel free to
            explore the applications.
          </p>
          <div className="flex flex-wrap my-20 gap-16">
            {projects.map((project) => (
              <div className="w-full lg:w-[400px]" key={project.name}>
                <div className="block-container w-12 h-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="project icon"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h4 className="text-xl sm:text-2xl font-poppins font-semibold">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-500 ">{project.description}</p>
                </div>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener nonreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
    </div>
  );
};

export default Projects;
