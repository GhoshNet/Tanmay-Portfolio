
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
  SafeAct,
  MovieRecommendation,
  InvoiceProcessing,
  ParentalAdvisory,
  criminal,
  langchain,
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
    icon: creator,
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
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
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
      "A real-time computer vision system for workplace safety compliance monitoring using YOLO models, reducing manual supervision and hazards by 60%.",
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
    image: SafeAct,
    source_code_link: "https://github.com/GhoshNet/",
  },
  {
    name: "Movie Recommendation System",
    description:
      "A movie recommendation system that uses machine learning to recommend movies to users based on their viewing history and preferences.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      // {
      //   name: "emailJs",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "Gsap",
      //   color: "pink-text-gradient",
      // },
    ],
      image: MovieRecommendation,
    source_code_link: "https://github.com/GhoshNet/",
  },
  {
    name: "Explicit Content Detection",
    description:
      "An explicit content detection system that uses machine learning to detect explicit content in images and block or report them before the user uploads or sees them.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "white-text-gradient",
      },
      // {
      //   name: "node",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: ParentalAdvisory,
    source_code_link: "https://github.com/GhoshNet/",
  },
  {
    name: "Criminal Database Management System",
    description:
      "A criminal database management system that allows the user to add, delete, update and search for criminals in the database.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      // {
      //   name: "Streamlit",
      //   color: "white-text-gradient",
      // },
      // {
      //   name: "node",
      //   color: "green-text-gradient",
      // },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: criminal,
    source_code_link: "https://github.com/GhoshNet/",
  },
  {
    name: "Document-based Chatbot",
    description:
      "A document-based question-answering platform that allows the user to ask questions about anything and get the answers from the documents already present in the database.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "green-text-gradient",
      },
    ],
      image: langchain,
    source_code_link: "https://github.com/GhoshNet/",
  },
  {
    name: "Automated Invoice Processing System",
    description:
      "An automated invoice processing system that allows the user to upload an invoice and get the details of the invoice in a structured format.",
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
        name: "Tesseract",
        color: "green-text-gradient",
      },
      // {
      //   name: "ChromaDB",
      //   color: "green-text-gradient",
      // },
    ],
    image: InvoiceProcessing,
    source_code_link: "https://github.com/GhoshNet/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
