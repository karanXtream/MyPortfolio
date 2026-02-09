export const portfolioData = {
  hero: {
    name: "Karan Shrivastava",
    title: "Software Engineer",
    subtitle: "Building elegant solutions to complex problems",
    description: "Passionate about creating scalable applications "
  },
  
  about: {
    description: "I'm a software engineer with a passion for building innovative digital solutions. With expertise across the full development stack, I specialize in creating efficient, scalable applications that solve real-world problems. My approach combines technical excellence with creative problem-solving to deliver exceptional results.",
    highlights: [
      "Full-stack development expertise",
      "Open source contributor",
      "Continuous learner and innovator"
    ]
  },
  
  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Redux", level: 75 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 88 },
      { name: "Express", level: 80 },
    ],
    databases: [
      { name: "MongoDB", level: 85 },

    ],
    tools: [
      { name: "Git", level: 90 },
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "Web Application",
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "Scalable chat application supporting group conversations, file sharing, and end-to-end encryption using WebSocket technology.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      category: "Web Application",
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "REST API Service",
      description: "High-performance RESTful API service with authentication, rate limiting, and comprehensive documentation. Handles 10k+ requests per minute.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      category: "Backend Service",
      featured: true,
      links: {
        github: "#"
      }
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with drag-and-drop interface, team collaboration features, and progress tracking.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "Web Application",
      featured: false,
      links: {
        demo: "#",
        github: "#"
      }
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Architected and deployed microservices infrastructure",
        "Improved application performance by 40%",
        "Led team of 5 developers on major product release"
      ]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      description: "Developed full-stack applications and implemented CI/CD pipelines.",
      achievements: [
        "Built customer-facing dashboard used by 50k+ users",
        "Reduced deployment time by 60%",
        "Implemented automated testing framework"
      ]
    }
  ],
  
  contact: {
    email: "kshrivastava002@gmail.com",
    phone: "+91 8810616993",
    location: "India",
    social: {
      github: "https://github.com/karanXtream",
      linkedin: "https://www.linkedin.com/in/karanxtream/",
      twitter: "https://x.com/kshrivastava002"
    }
  }
};
