import {
  Code,
  Layout,
  Smartphone,
  Zap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Database,
  Server,
  Terminal,
} from "lucide-react";

export const personalInfo = {
  name: "Idir Lahcen",
  title: "Software Engineer",
  email: "lahcenidir21@gmail.com", // from CV
  phone: "+212 681 736 149",
  location: "Casablanca, Morocco",
  github: "https://github.com/idir2023",
  linkedin: "https://linkedin.com/in/lahcen-idir",
  about:
    "I am passionate and interested in the ever-growing field of Web Front-End development.I enjoy transforming designs into functional user interfaces using the latest tools and frameworks.",
  summary:
    "Results-driven PHP Laravel Developer with 3+ years of experience building scalable web applications, designing RESTful APIs, and optimizing database performance. Proven track record in delivering feature-rich solutions, reducing bug rates by 25%, and improving API response times by 40%. Expertise in full-stack development with Laravel, Eloquent ORM, MySQL, and modern JavaScript frameworks.",
  history:
    "Hello, my name is Lahcen Idir. I'm from Morocco and I'm 23 years old. I'm a web developer specializing in PHP Laravel. Currently, I'm working as an intern for Mandi Tech Info, a company based in Morocco, where I've been for 8 months. Before my time there, I've worked on various web projects such as hospital management systems, invoicing platforms, and online recruitment portals.",
  whatAmIDoing:
    "I am currently focusing on learning front-end frameworks such as React and Next.js, alongside honing my backend skills, with a particular emphasis on mastering user-friendly technologies like Node.js and Express.js. Keeping pace with the latest technological advancements, I am dedicated to continuously expanding my knowledge and applying emerging concepts. Concurrently, I am actively crafting my portfolio through the development of personal projects, ensuring practical application of my evolving skill set.",
  whatNext:
    "My goal now is to master Front-End and Back-End technology. So that I can build a solution to an existing problem easily. Even though it is not easy and it takes a long time, I believe I can achieve it if I practice and learn continuously.",
  dreams:
    "I aspire to join prestigious companies such as Google or Microsoft, targeting roles in software development engineering or front-end development. I am committed to diligently pursuing these opportunities, continuously enhancing my skills and knowledge until I achieve my goals. My ultimate aim is to become an inspiration to others and serve as a mentor, guiding individuals toward creating a brighter future.",
};

export const skills = [
  { name: "HTML 5", category: "Frontend", icon: "/next-portfolio-idir/images/skill-html5.svg" },
  { name: "CSS 3", category: "Frontend", icon: "/next-portfolio-idir/images/skill-css3.svg" },
  { name: "Javascript", category: "Frontend", icon: "/next-portfolio-idir/images/skill-javascript.svg" },
  { name: "TailwindCss", category: "Frontend", icon: "/next-portfolio-idir/images/skill-tailwindcss.svg" },
  { name: "Bootstrap 5", category: "Frontend", icon: "/next-portfolio-idir/images/bootstrap-logo.svg" },
  { name: "React JS", category: "Frontend", icon: "/next-portfolio-idir/images/skill-reactjs.svg" },
  { name: "Next JS", category: "Frontend", icon: "/next-portfolio-idir/images/skill-nextjs.svg" },
  { name: "Laravel", category: "Backend", icon: "/next-portfolio-idir/images/laravel.png" },
  { name: "Node JS", category: "Backend", icon: "/next-portfolio-idir/images/nodejs.png" },
  { name: "Firebase", category: "Backend", icon: "/next-portfolio-idir/images/skill-firebase.svg" },
  { name: "Sql", category: "Database", icon: "/next-portfolio-idir/images/skill-sql.png" },
  { name: "MongoDB", category: "Database", icon: "/next-portfolio-idir/images/mongodb.png" },
  { name: "Git", category: "Tools", icon: "/next-portfolio-idir/images/skill-git.svg" },
  { name: "Github", category: "Tools", icon: "/next-portfolio-idir/images/skill-github.svg" },
  { name: "Vite JS", category: "Tools", icon: "/next-portfolio-idir/images/vitejs.svg" },
  { name: "Visual Studio Code", category: "Tools", icon: "/next-portfolio-idir/images/vscode.png" },
  { name: "Linux", category: "Tools", icon: "/next-portfolio-idir/images/Linux.png" },
  { name: "Java", category: "Languages", icon: "/next-portfolio-idir/images/java.png" },
  { name: "C++", category: "Languages", icon: "/next-portfolio-idir/images/c++.png" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Mandi Tech Info, Morocco",
    period: "Oct 2023 – Jun 2024",
    achievements: [
      "Optimized POS system improving stability by 25% and reducing API response time by 40%",
      "Developed 5+ features: inventory tracking, multi-location support, automated reporting (Laravel & jQuery)",
      "Built RESTful API endpoints with OAuth 2.0 authentication for mobile app integration",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Fiverr & Independent Clients",
    period: "Jan 2023 – Sep 2024",
    achievements: [
      "Delivered 10+ web applications with 100% on-time delivery and 4.9/5 client satisfaction",
      "Architected RESTful APIs integrating payment gateways (Stripe, PayPal) and cloud storage (AWS S3)",
      "Built admin panels reducing administrative tasks by 35% using Laravel, jQuery, Tailwind CSS",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. Computer Engineering",
    institution: "FST Settat, Morocco",
    period: "2020 - 2023",
  },
];

export const projects = [
  {
    title: "Hospital Management System",
    stack: ["HTML", "CSS", "PHP", "JavaScript"],
    description: "Developed system with patient records, appointments, billing with secure data handling.",
    longDescription: "A comprehensive solution designed to streamline hospital operations. This system manages everything from patient registration and appointment scheduling to billing and medical records, ensuring data integrity and security at every step.",
    features: ["Patient Record Management", "Appointment Scheduling", "Automated Billing System", "Secure Data Encryption"],
    githubUrl: "https://github.com/idir2023/Gestion_Hospitalier",
    url: "https://github.com/idir2023/Gestion_Hospitalier",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/work-2.png"
  },
  {
    title: "Invoices Management System",
    stack: ["jQuery", "CSS", "Laravel"],
    description: "A system to manage invoices efficiently.",
    longDescription: "A robust invoicing platform built with Laravel and jQuery. It allows businesses to create, track, and manage invoices with ease, featuring automated calculations and PDF generation.",
    features: ["Invoice Generation", "Payment Tracking", "Client Management", "PDF Export"],
    githubUrl: "https://github.com/idir2023/Invoices_Management",
    url: "https://github.com/idir2023/Invoices_Management",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/invoice.png"
  },
  {
    title: "WhatsApp Portfolio",
    stack: ["JavaScript", "CSS"],
    description: "A portfolio website styled like WhatsApp.",
    longDescription: "A unique and creative portfolio website that mimics the user interface of WhatsApp. It features a chat-like navigation system and a responsive design that works perfectly on mobile and desktop.",
    features: ["WhatsApp UI Clone", "Interactive Chat Navigation", "Responsive Design", "Custom CSS Animations"],
    githubUrl: "https://github.com/idir2023/Portfolio_whatsapp",
    url: "https://github.com/idir2023/Portfolio_whatsapp",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/work-7.png"
  },
  {
    title: "Task Management Website",
    stack: ["jQuery", "CSS", "Laravel"],
    description: "Comprehensive task management solution for teams.",
    longDescription: "A collaborative task management platform that helps teams organize their work. It includes features for task assignment, progress tracking, and deadline management.",
    features: ["Team Collaboration", "Task Assignment", "Progress Tracking", "Deadline Alerts"],
    githubUrl: "https://github.com/idir2023/TASK-MANAGEMENT",
    url: "https://github.com/idir2023/TASK-MANAGEMENT",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/task_app.png"
  },
  {
    title: "My Portfolio",
    stack: ["Next.js"],
    description: "Personal portfolio website built with Next.js.",
    longDescription: "My personal portfolio website, built with Next.js for optimal performance and SEO. It showcases my projects, skills, and experience in a modern and professional way.",
    features: ["Server-Side Rendering", "SEO Optimization", "Responsive Design", "Modern UI/UX"],
    liveUrl: "https://syedmoin-lab.github.io/My-Portfolio-3/",
    url: "https://syedmoin-lab.github.io/My-Portfolio-3/",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/portfolio_react.png"
  },
  {
    title: "Airline Reservation System",
    stack: ["React.js", "Vite.js", "CSS", "API"],
    description: "Flight booking and management system.",
    longDescription: "A modern airline reservation system built with React and Vite. It features a real-time flight search, booking system, and an admin panel for managing flights and passengers.",
    features: ["Real-time Flight Search", "Secure Booking System", "Admin Dashboard", "Passenger Management"],
    githubUrl: "https://github.com/idir2023/airline-reservation",
    url: "https://github.com/idir2023/airline-reservation",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/airline.png"
  },
  {
    title: "Online Recruitment Platform",
    stack: ["HTML", "CSS", "PHP", "JavaScript"],
    description: "A platform for online recruitment and job applications.",
    longDescription: "A full-featured recruitment platform that connects employers with job seekers. It allows companies to post jobs and candidates to apply online, with a streamlined application tracking system.",
    features: ["Job Posting System", "Online Applications", "Resume Upload", "Application Tracking"],
    liveUrl: "https://restaurant-website-grilli.vercel.app/",
    url: "https://restaurant-website-grilli.vercel.app/",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/work-1.png"
  },
  {
    title: "Chat Application",
    stack: ["React.js", "Vite.js", "CSS", "HTML"],
    description: "Real-time chat application.",
    longDescription: "A real-time chat application built with React and WebSockets. It supports private messaging, group chats, and real-time notifications.",
    features: ["Real-time Messaging", "Group Chats", "User Authentication", "Typing Indicators"],
    githubUrl: "https://github.com/idir2023/Chat_real_use_react.js",
    url: "https://github.com/idir2023/Chat_real_use_react.js",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/chat_app.png"
  },
  {
    title: "Syndicate Management System",
    stack: ["Laravel", "jQuery", "Tailwind CSS"],
    description: "A system for managing syndicate operations.",
    longDescription: "A specialized management system for syndicates, handling member records, financial tracking, and meeting scheduling.",
    features: ["Member Management", "Financial Tracking", "Meeting Scheduling", "Automated Reports"],
    githubUrl: "https://github.com/idir2023/Syndicat-amine",
    url: "https://github.com/idir2023/Syndicat-amine",
    category: "Personal Project",
    image: "/next-portfolio-idir/images/syndichat.png"
  },
  {
    title: "Law Firm Management System",
    stack: ["Laravel", "jQuery", "Bootstrap"],
    description: "Built case management with automated invoicing, reducing billing time by 50%.",
    longDescription: "A professional management system for law firms. It streamlines case tracking, client communication, and invoicing, significantly improving operational efficiency.",
    features: ["Case Management", "Automated Invoicing", "Client Portal", "Document Management"],
    liveUrl: "https://cabinethbavocats.com/",
    url: "https://cabinethbavocats.com/",
    category: "Professional Project",
    image: "/next-portfolio-idir/images/avocat.PNG"
  },
  {
    title: "Afrilavage System",
    stack: ["Laravel", "jQuery", "Tailwind CSS"],
    description: "Management system for Afrilavage.",
    longDescription: "A custom-built management system for Afrilavage, focusing on service tracking, customer management, and financial reporting.",
    features: ["Service Tracking", "Customer Management", "Financial Reporting", "Inventory Control"],
    liveUrl: "https://www.afrilavage.com/",
    url: "https://www.afrilavage.com/",
    category: "Professional Project",
    image: "/next-portfolio-idir/images/afrilavage.png"
  },
  {
    title: "AI Invoice Payment SaaS Platform",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "API"],
    description: "Modern SaaS platform for invoice management and payments.",
    longDescription: "An advanced SaaS platform that leverages AI to automate invoice processing and payments. Built with Next.js and Supabase for high performance and scalability.",
    features: ["AI Invoice Processing", "Automated Payments", "Real-time Analytics", "Multi-tenant Architecture"],
    githubUrl: "https://github.com/idir2023/invoices_management_2026",
    url: "https://github.com/idir2023/invoices_management_2026",
    category: "Professional Project",
    image: "/next-portfolio-idir/images/invoicesPro.png"
  },
  {
    title: "RestoPOS",
    stack: ["Laravel", "jQuery", "Bootstrap", "AJAX"],
    description: "Point of Sale system for restaurants.",
    longDescription: "A high-performance Point of Sale system tailored for the restaurant industry. It features real-time order tracking, table management, and integrated payment processing.",
    features: ["Real-time Order Tracking", "Table Management", "Integrated Payments", "Kitchen Display System"],
    githubUrl: "https://github.com/idir2023/RestPos",
    url: "https://github.com/idir2023/RestPos",
    category: "Professional Project",
    image: "/next-portfolio-idir/images/invoicesPro.png"
  }
];

export const services = [
  {
    title: "Website Development",
    description:
      "Complete website development services, transforming designs into fully functional, visually appealing websites.",
    icon: "/next-portfolio-idir/images/service-website.svg",
  },
  {
    title: "Web Application Development",
    description:
      "Developing robust, feature-rich web applications that offer seamless user interactions and high performance.",
    icon: "/next-portfolio-idir/images/service-webapps.svg",
  },
  {
    title: "Responsive Design",
    description:
      "Creating responsive designs that adapt flawlessly to any device, including mobile, tablet, and desktop.",
    icon: "/next-portfolio-idir/images/service-rwd.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing the performance of websites and web applications, ensuring faster loading times and smooth interactions.",
    icon: "/next-portfolio-idir/images/service-performance.svg",
  },
];
