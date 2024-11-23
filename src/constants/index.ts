import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";
import { visaro, refondly, mms } from "../assets/images";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React TS Developer",
    company_name: "Visaro",
    icon: visaro,
    iconBg: "#a7f3d0",
    date: "September 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: refondly,
  //   iconBg: "#fbc3bc",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Application Developer",
    company_name: "Refondly",
    icon: refondly,
    iconBg: "#b7e4c7",
    date: "March 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Application Developer",
    company_name: "My Market Shop",
    icon: mms,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/TEMIYORES",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/qayyum-ibrahim-610320233/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Visaro",
    description:
      "Visaro is a web application enabling users to access services immediately and pay later, promoting financial flexibility. By empowering financial freedom, Visaro aims to revolutionize the future of payments in aviation, healthcare, and education sectors.",
    link: "https://www.visaro.ng/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Refondly",
    description:
      "Refondly offers discounted products and a unique refund-to-points system, allowing customers to save more and earn points for future purchases, creating a rewarding shopping experience.",
    link: "https://www.refondly.com/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Novarick Homes",
    description:
      "Novarick is a real estate company offering premium apartments and lands on Lagos Island, providing modern, eco-friendly housing solutions for individuals and investors.",
    link: "https://novarickhomes.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "My Market Shop",
    description:
      "My Market Shop is an e-commerce platform that enables retailers to list their products and connect with potential buyers, making online selling simple and efficient.",
    link: "https://seller.mymarketshop.io/",
  },
];
