// Mock data for Manas' portfolio
export const portfolioData = {
  personal: {
    name: "Manash",
    alias: "Sly",
    title: "Creative Developer & Engineer",
    tagline: "Crafting digital experiences that blur the line between art and code",
    bio: "I'm Manash, but you can call me Sly. I'm passionate about creating innovative web experiences that combine cutting-edge technology with compelling storytelling. My journey spans full-stack development, creative coding, and interactive design.",
    email: "manashbhowmick13@gmail.com",
    location: "Currently Vadodara/Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  skills: [
    { name: "JavaScript/TypeScript", level: 85, category: "Frontend" },
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 92, category: "Backend" },
    { name: "GSAP/Animations", level: 56, category: "Creative" },
    { name: "Three.js/WebGL", level: 78, category: "Creative" },
    { name: "PostgreSQL/MongoDB", level: 80, category: "Database" },
    { name: "AWS/Docker", level: 75, category: "DevOps" },
    { name: "UI/UX Design", level: 83, category: "Design" },
    { name: "Adobe After Effects", level: 86, category: "Design/Media" }
  ],

  timeline: [
    {
      year: "2020",
      title: "Started Coding Journey",
      company: "Self-taught",
      description:
        "Began learning programming fundamentals (Python, JavaScript, C++) and web development concepts through online courses and hands-on personal projects.",
      type: "education"
    },
    {
      year: "2021",
      title: "B.Tech in Computer Science",
      company: "Parul University, Vadodara",
      description:
        "Dove into core computer science subjects: Data Structures, Operating Systems, DBMS, Networks, Software Engineering, and Cybersecurity Fundamentals. GPA: 7.3.",
      type: "education"
    },
    {
      year: "2021",
      title: "Web & App Dev Hobbyist",
      company: "Personal Projects",
      description:
        "Built first mini e-commerce platform and REST APIs using HTML, CSS, JavaScript, Flask, and SQLite. Practiced Agile teamwork and version control (Git, GitHub).",
      type: "project"
    },
    {
      year: "2022",
      title: "Intern – Python & AI Projects",
      company: "University/Remote",
      description:
        "Developed 'Crop Disease Detection' with CNNs and TensorFlow; explored data visualization and full-stack projects (React basics, Flask, SQLAlchemy, JWT Auth).",
      type: "internship"
    },
    {
      year: "2023",
      title: "Open Source & Cybersecurity Labs",
      company: "Independent",
      description:
        "Built reverse shell tools, custom HTTP server, explored Linux CLI, Docker basics, and actively contributed to open-source repos for learning and collaboration.",
      type: "self-learning"
    },
    {
      year: "2024",
      title: "Degree Completed & Project Showcase",
      company: "Parul University + Freelance",
      description:
        "Graduated B.Tech, released a healthcare support site (Medicare AI), and freelanced as a web and API developer. Preparing for Cloud/DevOps and cybersecurity careers.",
      type: "milestone"
    }
  ],

  projects: [
    {
      id: 1,
      title: "JWT Authentication System",
      description:
        "Secure, role-based user authentication and authorization using Flask, SQLAlchemy, Bcrypt, and JWT. Implements registration, login, password hashing, and token-based access for real-world web API security.",
      tags: ["Python", "Flask", "SQLAlchemy", "JWT", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Website (Mini)",
      description:
        "Responsive front-end mini e-commerce site with shopping cart and product catalog. Connected to a SQLite backend via Flask for CRUD operations. Built from scratch using HTML, CSS, JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "API for Task Management",
      description:
        "RESTful API for managing tasks with CRUD routes for users and tasks. Implements token-based authentication and extensive Postman tests. Clear code structure for easy extension.",
      tags: ["Flask", "REST API", "JSON", "Postman"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Crop Disease Detection using CNN",
      description:
        "Deep learning system to classify crop diseases from images using Convolutional Neural Networks (TensorFlow). Automated pipeline for image processing and prediction.",
      tags: ["Python", "Deep Learning", "TensorFlow", "CNN"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Medicare AI Website",
      description:
        "Healthcare platform with symptom checker, chatbot integration, and appointment booking using Flask, HTML, CSS, and JS. Focus on user-centric design and accessibility.",
      tags: ["Python", "Flask", "HTML", "CSS", "Chatbot"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      text: "Manash brings incredible creativity to technical challenges. His animations and user experiences are top-notch.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Alex Chen",
      role: "CTO",
      company: "InnovateLab",
      text: "One of the most talented developers I've worked with. Combines technical excellence with artistic vision.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ]
};

export default portfolioData;