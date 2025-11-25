
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
  ActinAiHub,
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
    title: "AI/ML Engineer",
    icon: creator,
  },
  {
    title: "Computer Vision Specialist",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
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
    name: "SafeAct - AI Safety Monitoring",
    description:
      "Enterprise-grade computer vision surveillance system for real-time safety compliance monitoring on manufacturing floors. Deployed across multiple camera streams, reducing manual supervision and on-the-job hazards by 60% while ensuring continuous workplace safety compliance.",
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
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Document QnA with RAG",
    description:
      "Retrieval-Augmented Generation (RAG) platform enabling efficient question-answering on custom documents. Fine-tuned Mistral-7B LLM to enhance knowledge retrieval, reducing response time for company operations by 40% while maintaining high accuracy on domain-specific queries.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Mistral-7B",
        color: "white-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: ActinAiHub,
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Automated Invoice Processing",
    description:
      "Vision-Language Model (VLM) solution extracting structured data from invoice images to automate ERP data entry. Reduced manual effort by 70% while achieving high accuracy in text extraction and data validation, processing hundreds of invoices daily.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "VLM",
        color: "white-text-gradient",
      },
      {
        name: "Tesseract",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: InvoiceProcessing,
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Automated Meter Reading (OCR)",
    description:
      "Deep learning-based OCR solution for capturing readings from production floor meters and checkpoints. Achieved 96% accuracy while expediting the reading process by 2 hours daily, eliminating manual data entry errors and improving operational efficiency.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "white-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Explicit Content Detection",
    description:
      "Award-winning hybrid approach combining Skin Tone Analysis, YOLO, and Random Forest to detect explicit images and malicious URLs on social media platforms. Published research paper and received 'Most Unique Project Idea of the Year' award. Trained custom vision models for robust content moderation.",
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
        name: "Random Forest",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: ParentalAdvisory,
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Personalized content-based movie recommendation engine using cosine similarity on movie metadata. Suggests relevant movies based on viewing history, analyzing features like genre, cast, director, and plot to deliver accurate recommendations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "white-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
    ],
    image: MovieRecommendation,
    source_code_link: "https://github.com/tanmayghosh01",
  },
  {
    name: "Criminal Database Management",
    description:
      "Secure platform for storing, managing, and retrieving criminal information with Role-Based Access Control (RBAC). Enables department-specific access to data and visualizations, ensuring data security while facilitating efficient law enforcement operations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "RBAC",
        color: "pink-text-gradient",
      },
    ],
    image: criminal,
    source_code_link: "https://github.com/tanmayghosh01",
  },
];

export { services, technologies, experiences, testimonials, projects };
