type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    education: TSection;
    experience: TSection;
    publications: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Lalit Kinage Portfolio",
    fullName: "Lalit Kinage",
    email: "lalitkinage192@gmail.com",
  },
  hero: {
    name: "Lalit Kinage",
    p: ["I'm a Java Full-Stack Developer who loves", "building scalable APIs and modern web applications."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "",
      h2: "About Me",
      content: `Hi, I'm Lalit Kinage, a Java Full-Stack Developer with over 1.5 years of experience building scalable web applications using Java, Spring Boot, Hibernate, ReactJS, and SQL/NoSQL databases. I enjoy integrating APIs, optimizing backend systems, and crafting clean, responsive UIs. I've worked on both product-based and service-based projects, contributing to performance improvements and real-world business solutions. When I'm not coding, I love exploring new tech stacks, debugging complex problems, and refining my projects to be production-ready.`,
    },
    education: {
      p: "My academic background",
      h2: "Education.",
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    publications: {
      p: "Research & Publications",
      h2: "Publications.",
    },
    feedbacks: {
      p: "Professional Achievements",
      h2: "Certifications.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
