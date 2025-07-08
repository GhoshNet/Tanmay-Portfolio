
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  python,
  YOLO,
  openCV,
  fastapi,
  grpc
} from '../assets'


// Import Company Logos seperately
import actin from "../assets/company/actin_logo.png";

import privacera from "../assets/company/privacera.webp"

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Engineer",
    icon: web,
  },
  // {
  //   title: "Frontend Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Python",
    icon: python
  },
  {
    name: "YOLO",
    icon: YOLO
  },
  {
    name: "OpenCV",
    icon: openCV
  },
  {
    name: "fastapi",
    icon: fastapi
  },
  {
    name: "grpc",
    icon: grpc
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "AI-ML Engineer",
    company_name: "Actin Technologies",
    icon: actin,
    iconBg: "#ffffff",
    date: "March 2024 - July 2025",
    points: [
      "Designed a real-time computer vision system for workplace safety compliance monitoring using YOLO models, reducing manual supervision and hazards by 60%.",
      "Built an OCR-based Automated Meter Reading system using deep learning, improving reading accuracy to 96% and saving 2+ hours per day.",
      "Developed a document-based QnA system using Retrieval-Augmented Generation (RAG) and fine-tuned LLM to streamline enterprise knowledge access.",
      "Created an EDA chatbot capable of handling natural language queries to dynamically generate insights and visualizations.",
      "Engineered a Vision-Language Model (VLM)-based system to extract invoice data from images and integrate with ERP, reducing manual effort by 70%.",
    ],
  },
  {
    title: "Intern - Software Developer",
    company_name: "Privacera",
    icon: privacera,
    iconBg: "#ffffff",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Contributed to customer issue resolution, coding, testing, and deployment of scalable SaaS solutions.",
      "Participated in the complete Software Development Life Cycle (SDLC), from requirement analysis to production release.",
      "Collaborated with teams using Git, Jenkins, Jira, and Confluence for agile project delivery.",
      "Improved customer satisfaction by debugging and enhancing core platform features.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Testimonial's Comment",
    name: "V Mahajan",
    designation: "CEO",
    company: "Actin",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Testimonial's Opinion",
    name: "P Kumar",
    designation: "CTO",
    company: "Tech Company name",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Testimonial's Review",
    name: "James Wang",
    designation: "Senior Manager",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "SafeAct",
    description:
      "Safe Act Description",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "YOLO",
        color: "white-text-gradient",
      },
      {
        name: "gRPC",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "white-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
