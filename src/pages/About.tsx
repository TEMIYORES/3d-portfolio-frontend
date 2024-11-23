import { experiences, skills } from "../constants";
import Navbar from "../components/Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="max-container">
        <h1 className="head-text">
          Hello 👋, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Qayyum
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer based in Nigeria 🇳🇬, specializing in JavaScript
            with ReactJS, TypeScript, Node.js, Express.js, and MongoDB. With
            experience across diverse tech industries and startups, I excel in
            creating cutting-edge products and building strong team dynamics.
          </p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          <div className="relative mt-16 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-5 sm:gap-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="block-container w-14 h-14 md:w-20 lg:h-20"
              >
                <div className="btn-back rounded-xl">
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex items-center justify-center">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-60% h-60% object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-points-${index}`}
                        className="text-black-500/70 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
    </div>
  );
};

export default About;
