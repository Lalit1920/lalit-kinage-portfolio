import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  github,
  threejs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Java Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "API Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "SS&C Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - June 2025",
    points: [
      "Developed and optimized RESTful APIs using Java, Spring Boot, and Hibernate for workflows like policy management, claims, and premium transactions, ensuring scalability for high-volume insurance operations.",
      "Enhanced frontend performance with ReactJS, JavaScript, HTML, and CSS by integrating real-time dashboards and interactive components for a responsive user experience.",
      "Performed system analysis and optimized backend logic & SQL queries, reducing data retrieval time by 30% and translating insurance workflows and business requirements into seamless technical solutions.",
      "Collaborated in Agile sprints with cross-functional teams, managing code reviews, CI/CD pipelines, and implementing role-based access control to ensure secure and maintainable solutions.",
    ],
  },
  {
    title: "Associate Software Engineer",
    companyName: "SS&C Technologies",
    icon: tesla,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Developed backend services using Java, Spring Boot, and Hibernate, applying OOP principles and implementing RESTful APIs for transactions and registry platform management.",
      "Built a responsive front-end with ReactJS, JavaScript, HTML, and CSS, providing real-time updates, interactive charts, and notifications for enhanced user experience.",
      "Collaborated with cross-functional teams to translate requirements into technical solutions, ensuring seamless integration, optimized performance, and data security across the platform.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    companyName: "Colgate-Palmolive",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "June 2023 - Jan 2024",
    points: [
      "Developed full-stack features using Java, Spring Boot, and JavaScript, integrating RESTful APIs and backend logic.",
      "Optimized backend workflows, data integration, and database queries for high-volume enterprise operations.",
      "Implemented JWT-based authentication, role-based access control, and global exception handling with logging.",
      "Collaborated with analysts and cross-functional teams in Agile sprints, managing CI/CD pipelines and deployments.",
    ],
  },
];

const publications: TTestimonial[] = [
  {
    testimonial:
      "IEEE Research Publication\n\nPublished research paper exploring advanced techniques and methodologies in computer science and engineering. Available on IEEE Xplore digital library.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Microsoft Certified: Azure AI Fundamentals (AI-900)\n\nGained foundational knowledge of AI and ML concepts using Azure services like Cognitive Services, Computer Vision, and NLP. Built and tested simple AI models and learned responsible AI principles.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "Oracle Certified: OCI 2025 AI Foundations Associate (1Z0-1122-25)\n\nLearned Oracle Cloud's AI and Generative AI capabilities, including Vision, Language, and Data Science services. Explored deploying ML models and integrating AI into cloud applications.",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "ECommerceApp",
    description:
      "ECommerceApp is a full-stack web application built with Spring Boot (Java) and HTML, CSS, JavaScript, and Bootstrap. It offers secure user authentication, product browsing, cart and order management, and an admin dashboard for managing products, categories, and users — all within a responsive, modern UI.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Lalit1920/EcommerceApp",
    liveLink: "#", // Placeholder for live project link
  },
  {
    name: "TeleHealth",
    description:
      "TeleHealth is a full-stack web application built with Java Spring Boot, Hibernate, and MongoDB, focused on integrating third-party APIs for efficient patient data and communication management. It features secure admin authentication, patient record CRUD operations, and a responsive frontend using HTML, CSS, and JavaScript for a smooth user experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "hibernate",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Lalit1920/TeleHealth",
    liveLink: "#", // Placeholder for live project link
  },
  {
    name: "Weather API Integration",
    description:
      "A weather application that integrates with weather APIs to provide real-time weather information, forecasts, and location-based weather data with an intuitive user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Lalit1920/WhetherApiIntegration",
    liveLink: "#", // Placeholder for live project link
  },
];

export { services, technologies, experiences, publications, testimonials, projects };
