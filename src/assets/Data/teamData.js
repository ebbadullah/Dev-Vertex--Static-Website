
import founderImg from "../Data/Founder & Lead Developer.png"
import frontendImg from "../Data/Senior Frontend Developer.jpg"
import backendImg from "../Data/BackendArchitect.jpg"
import devopsImg from "../Data/DevOps Engineer.jfif"


import ceoImg from "../Data/professional-woman-ceo.png"
import ctoImg from "../Data/professional-man-cto.png"
import founderWomanImg from "../Data/professional-woman-founder.png"
import pmImg from "../Data/professional-product-manager.png"

export const teamMembers = [
  {
    name: "Ebad Ullah",
    role: "Founder & Lead Developer",
    image: founderImg,
    bio: "Full-stack developer with 2+ years of experience in MERN stack development. Passionate about creating scalable solutions.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Shahmeer Baloch",
    role: "Senior Frontend Developer",
    image: frontendImg,
    bio: "UI/UX focused developer specializing in React and modern CSS. Expert in creating beautiful, responsive user interfaces.",
    skills: ["React", "TypeScript", "CSS", "Figma"],
    social: { linkedin: "#", github: "#", dribbble: "#" },
  },
  {
    name: "Ehtisham Hassan",
    role: "Backend Architect",
    image: backendImg,
    bio: "Database and API specialist with expertise in Node.js, Express, and MongoDB. Focuses on performance and scalability.",
    skills: ["Node.js", "MongoDB", "Express", "Docker"],
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Arshil Mirza",
    role: "DevOps Engineer",
    image: devopsImg,
    bio: "Cloud infrastructure and deployment specialist. Ensures our applications run smoothly in production environments.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    social: { linkedin: "#", github: "#" },
  },
]


export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "CEO, PakTech Innovations",
    image: ceoImg,
    content:
      "The MERN stack platform revolutionized our workflow. Our efficiency skyrocketed, and the solution was both scalable and secure.",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "CTO, DataBridge Solutions",
    image: ctoImg,
    content:
      "Brilliant technical expertise! They created a data visualization system that processes millions of records with ease.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Founder, EcoMart Pakistan",
    image: founderWomanImg,
    content:
      "From design to deployment, everything was seamless. Our e-commerce store now handles thousands of orders daily with zero downtime.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Product Manager, FinServe PK",
    image: pmImg,
    content:
      "Security and compliance were our top concerns, and they delivered flawlessly while ensuring an amazing user experience.",
    rating: 5,
  },
]


export const companies = [
  "PakTech",
  "DataBridge",
  "EcoMart",
  "FinServe",
  "NextGen",
  "SoftLink",
]
