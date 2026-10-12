export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "AI & Blockchain" | "Full Stack" | "Python & Automation" | "Graphic Design";
  categorySlug: "ai-blockchain" | "full-stack" | "python" | "design";
  featured: boolean;
  description: string;
  problemSolved: string;
  techStack: string[];
  keyFeatures: string[];
  metricsOrOutcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  details: {
    overview: string;
    architectureNotes: string;
    role: string;
    timeline: string;
    institutionOrPlatform: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  skillsLearned: string[];
  highlights: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  coursework: string[];
  rollNo?: string;
}

export interface ExtracurricularItem {
  id: string;
  category: "Research" | "Public Speaking" | "Creative Arts" | "Mathematics" | "Leadership";
  title: string;
  organizationOrContext: string;
  period: string;
  description: string;
  badges: string[];
  bulletPoints: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    shortBio: string;
    fullBio: string;
    tagline: string;
    roles: string[];
    location: string;
    address: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    whatsappNumber: string;
    whatsappUrl: string;
    linkedinUrl: string;
    githubUrl: string;
    cvFileName: string;
    cvPath: string;
    avatarPath: string;
    collegeIdPath: string;
    availability: string;
  };
  skills: {
    category: string;
    description: string;
    items: { name: string; level: string; iconName?: string }[];
  }[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  extracurriculars: ExtracurricularItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Satyam Shukla",
    firstName: "Satyam",
    lastName: "Shukla",
    roles: [
      "Full Stack Developer",
      "Python Developer",
      "Software Engineer",
      "Web & Graphic Designer",
      "Computer Science Student"
    ],
    tagline: "Bridging mathematical rigor, scalable full-stack code, and bold visual design.",
    shortBio: "BTech Computer Science student at SRMCEM Lucknow with a prior B.Sc in Mathematics. IBM Cognitive certified in Python & Full Stack Web Development, with capstone research in Blockchain & AI fraud detection.",
    fullBio: "Aspiring Computer Science Engineering student with strong foundational knowledge in programming, data structures, and problem-solving. Eager to apply academic learning to real-world projects and gain industry experience through internships and collaborative opportunities. Passionate about software development, with a keen interest in learning new technologies and contributing to innovative solutions.",
    location: "Gorakhpur & Lucknow, Uttar Pradesh, India",
    address: "Shivpur Shahbajgung, Padri Bazar, Gorakhpur, UP - 273014",
    phone: "+919569075961",
    phoneDisplay: "+91 95690 75961",
    email: "er.satyamshukla7@gmail.com",
    whatsappNumber: "919569075961",
    whatsappUrl: "https://wa.me/919569075961",
    // Configurable URLs - easy to edit if Satyam updates his handles
    linkedinUrl: "https://linkedin.com/in/satyam-shukla-cse",
    githubUrl: "https://github.com/satyam-shukla",
    cvFileName: "Satyam-Shukla-CV.pdf",
    cvPath: "/Satyam-Shukla-CV.pdf",
    avatarPath: "/satyam-photo.jpg",
    collegeIdPath: "/satyam-id.jpg",
    availability: "Available for Internships, Junior Engineering Roles & Freelance Work"
  },
  skills: [
    {
      category: "Frontend Engineering",
      description: "Interactive, accessible, and high-performance user interfaces.",
      items: [
        { name: "React", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & Semantic Web", level: "Expert" },
        { name: "CSS3 & Modern Layouts", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Responsive UI/UX", level: "Expert" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Server architecture, RESTful API design, and database modeling.",
      items: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "RESTful API Development", level: "Advanced" },
        { name: "CRUD Architectures", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" }
      ]
    },
    {
      category: "Programming & Applied AI",
      description: "Algorithmic thinking, data handling, and hybrid research architectures.",
      items: [
        { name: "Python", level: "Advanced" },
        { name: "Data Structures & Algorithms", level: "Intermediate" },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
        { name: "Automation & Data Scripts", level: "Advanced" },
        { name: "Graph Neural Networks (GNN)", level: "Foundational / Research" },
        { name: "Federated Learning & Blockchain", level: "Foundational / Research" }
      ]
    },
    {
      category: "Visual Arts & Creative Tools",
      description: "Creative design, vector artwork, brand identity, and motion.",
      items: [
        { name: "Adobe Photoshop", level: "Advanced" },
        { name: "Adobe Illustrator", level: "Advanced" },
        { name: "Adobe After Effects", level: "Intermediate" },
        { name: "Canva Pro", level: "Expert" },
        { name: "Pixabay / Stock Asset Direction", level: "Advanced" },
        { name: "Brand Identity Design", level: "Advanced" }
      ]
    },
    {
      category: "Mathematics & Core CS",
      description: "Theoretical mathematical foundations applied to algorithmic logic.",
      items: [
        { name: "Calculus", level: "Proficient" },
        { name: "Linear Algebra", level: "Proficient" },
        { name: "Statistics & Probability", level: "Proficient" },
        { name: "Discrete Mathematics", level: "Proficient" },
        { name: "Version Control (Git & GitHub)", level: "Advanced" },
        { name: "Public Speaking & Technical Pitching", level: "Exceptional" }
      ]
    }
  ],
  projects: [
    {
      id: "scm-fraud-detection",
      number: "01",
      title: "Fraud Detection in SCM Using Hybrid Technology: Blockchain & AI",
      tagline: "Decentralized Federated Graph Neural Network & Blockchain Audit Trail",
      category: "AI & Blockchain",
      categorySlug: "ai-blockchain",
      featured: true,
      description: "A research-backed hybrid framework engineered to detect sophisticated fraud schemes—such as supplier collusion, invoice manipulation, and multi-hop shell vendor fraud—in global supply chains.",
      problemSolved: "Traditional centralized ML models analyze transactions in isolation, missing collusive fraud rings, and create single points of failure. This project solves that via Federated Learning for privacy-preserving collaboration, Graph Neural Networks (GNN) for multi-hop relation analysis, and Hyperledger Fabric for immutable on-chain auditing.",
      techStack: [
        "Python",
        "PyTorch Geometric (GNN)",
        "Hyperledger Fabric",
        "Federated Learning (Flower)",
        "Explainable AI (SHAP)",
        "MongoDB"
      ],
      keyFeatures: [
        "Multi-Hop Graph Detection: Uncovers hidden fraud rings across multi-tier supplier networks using Graph Attention Networks.",
        "Federated Learning (FL): Enables independent enterprises to train collaborative models without exposing raw commercial data.",
        "Immutable Audit Trail: Records transaction hashes and verification proofs to an enterprise distributed ledger.",
        "Explainable AI (XAI): Integrates GNNExplainer and SHAP to provide human-interpretable justifications for fraud alerts.",
        "Formal Capstone Report: 50+ page technical research report and review paper prepared at SRMCEM Lucknow."
      ],
      metricsOrOutcomes: [
        "Eliminates raw data exposure across competing enterprise stakeholders via FL",
        "Enables multi-hop fraud ring pattern detection beyond isolated transaction analysis",
        "Co-authored project report under faculty guidance at SRMCEM (AKTU Affiliated)"
      ],
      details: {
        overview: "Developed as a formal BTech Capstone Research Project at Shri Ramswaroop Memorial College of Engineering and Management (Lucknow). The system bridges modern distributed ledger technology with cutting-edge relational deep learning to tackle the estimated 5% annual revenue loss incurred by global supply chain fraud.",
        architectureNotes: "Layered architecture: Data Ingestion Layer -> Hyperledger Fabric Blockchain Layer -> Federated Graph Neural Network (GNN) Engine -> Explainable AI Layer (SHAP/GNNExplainer) -> Executive Alert Dashboard.",
        role: "Core Co-Author & Software/Algorithm Designer (with Sudhanshu Chaudhary)",
        timeline: "2025 – 2026",
        institutionOrPlatform: "SRMCEM, Lucknow (Affiliated to Dr. APJ Abdul Kalam Technical University)"
      }
    },
    {
      id: "full-stack-web-architecture",
      number: "02",
      title: "Full-Stack Web Application & REST API Architecture",
      tagline: "Enterprise-grade MERN Stack architecture with database persistence",
      category: "Full Stack",
      categorySlug: "full-stack",
      featured: true,
      description: "Comprehensive full-stack web application designed and built as part of the IBM Cognitive curriculum, implementing end-to-end decoupled client-server architecture with stateful client interactions.",
      problemSolved: "Bridges interactive user experience with reliable server persistence. Handled asynchronous state updates, CRUD request lifecycles, structured error responses, and database connection pooling across MongoDB and MySQL.",
      techStack: [
        "React",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
        "Git/GitHub"
      ],
      keyFeatures: [
        "Component-Driven UI: Declarative React views with modular components, responsive CSS, and state management.",
        "Express RESTful API: Well-structured endpoints handling GET, POST, PUT, DELETE with middleware validations.",
        "Polyglot Persistence: Hands-on implementation with document-oriented MongoDB and relational MySQL schemas.",
        "Version Control Workflows: Structured Git commits, branch management, and collaborative GitHub repository practices."
      ],
      metricsOrOutcomes: [
        "Awarded IBM Cognitive Full Stack Web Development Certification (2023)",
        "Integrated dual-database persistence models (MongoDB NoSQL & MySQL Relational)",
        "Deployed responsive web client with zero-layout-shift design patterns"
      ],
      details: {
        overview: "This project served as the capstone implementation for the IBM Cognitive Full Stack Web Development credential. The focus was on building industrial-grade web workflows from ground zero: clean semantic HTML/CSS, decoupled JavaScript logic, REST APIs in Express, and persistent storage.",
        architectureNotes: "Client (React SPA) -> RESTful HTTP Gateway (Node.js/Express) -> Middleware (Validation/Auth) -> Database Drivers (MongoDB Mongoose & MySQL Connection Pool).",
        role: "Full Stack Web Developer",
        timeline: "2023",
        institutionOrPlatform: "IBM Cognitive Certification Curriculum"
      }
    },
    {
      id: "python-automation-suite",
      number: "03",
      title: "Python Automation & Data Handling Engine",
      tagline: "Scripting suite for real-world automated file operations & algorithmic processing",
      category: "Python & Automation",
      categorySlug: "python",
      featured: true,
      description: "A production-grade Python scripting and data processing suite designed to automate tedious data wrangling, file transformations, batch processing, and programmatic problem-solving.",
      problemSolved: "Manual data management is slow and prone to human error. This suite automates complex multi-step file handling, parsing, and structured data extraction while utilizing OOP principles to ensure maintainability.",
      techStack: [
        "Python 3",
        "File I/O APIs",
        "Exception Handling",
        "OOP Design",
        "Data Structures",
        "Algorithmic Logic"
      ],
      keyFeatures: [
        "Automated File Processing: Seamlessly ingests, normalizes, and transforms heterogeneous text and tabular datasets.",
        "Robust Error Handling: Custom try-except mechanisms and recovery protocols ensuring zero crash on corrupted input.",
        "Object-Oriented Structure: Class-based modular design allowing reusable parser engines and extensibility.",
        "Mini-Project Suite: Algorithmic problem-solving implementations covering search, sort, and combinatorial routines."
      ],
      metricsOrOutcomes: [
        "Awarded IBM Cognitive Python Programming Certification (2023)",
        "Implemented fault-tolerant batch operations with structured logging",
        "Completed algorithmic problem sets strengthening computer science foundations"
      ],
      details: {
        overview: "Developed under the IBM Cognitive Python Programming certification track. Demonstrates hands-on mastery over core Python syntax, idiomatic collections, list comprehensions, context managers, and scalable scripting practices.",
        architectureNotes: "CLI / Script Entry Point -> Class-based Parser Engine -> Data Processing Pipeline -> Output Serializer & Error Logger.",
        role: "Python Developer",
        timeline: "2023",
        institutionOrPlatform: "IBM Cognitive Certification Curriculum"
      }
    },
    {
      id: "graphic-design-portfolio",
      number: "04",
      title: "Digital Graphic Artistry & Visual Communication System",
      tagline: "Creative branding, vector design, typography & motion graphic assets",
      category: "Graphic Design",
      categorySlug: "design",
      featured: false,
      description: "A curated body of creative graphic work demonstrating visual composition, color theory, vector logo craftsmanship, and promotional video motion graphics across Adobe Creative Suite.",
      problemSolved: "Developers often neglect visual storytelling and graphic harmony. This creative work gives technical products a memorable aesthetic identity, engaging typography, and compelling marketing assets.",
      techStack: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe After Effects",
        "Canva Pro",
        "Pixabay Media Assets",
        "Color Theory & Typography"
      ],
      keyFeatures: [
        "Vector Illustration: Scalable brand logos, icons, and graphic badges designed in Adobe Illustrator.",
        "Photo Manipulation: High-contrast image grading, background separation, and retouching in Adobe Photoshop.",
        "Motion Graphics: Kinetic typography, logo animation stingers, and title sequences produced in Adobe After Effects.",
        "Public Presentation Assets: Slide decks and seminar posters engineered for clarity and high audience retention."
      ],
      metricsOrOutcomes: [
        "Produced comprehensive graphic assets for academic project defenses and seminars",
        "Multi-tool mastery across industry-standard raster, vector, and motion software",
        "Directly elevates frontend web engineering with authentic creative aesthetic skills"
      ],
      details: {
        overview: "Demonstrates Satyam's multidisciplinary profile as both a software engineer and an experienced visual graphic artist. This artistic background directly informs his frontend engineering sensibility and Brutalist UI/UX aesthetic.",
        architectureNotes: "Concept Moodboard -> Vector Wireframes (Illustrator) -> Asset Rendering & Grading (Photoshop) -> Motion Sequences (After Effects).",
        role: "Graphic Artist & Creative Visual Designer",
        timeline: "2022 – Present",
        institutionOrPlatform: "Independent Creative Portfolio & College Seminars"
      }
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)",
      location: "Lucknow, Uttar Pradesh (Affiliated to Dr. APJ Abdul Kalam Technical University, AKTU)",
      period: "2023 – 2026",
      status: "Currently Pursuing (Final Year)",
      rollNo: "BE22CS231 / Univ Roll: 2301220109017",
      description: "Rigorous curriculum focused on software engineering, algorithms, system architecture, database design, and machine learning. Co-authored formal capstone research on Blockchain and Federated AI fraud detection.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Object-Oriented Programming (OOP)",
        "Artificial Intelligence & Machine Learning"
      ]
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      field: "Mathematics",
      institution: "Purvanchal University (VBSPU)",
      location: "Uttar Pradesh, India",
      period: "2020 – 2023",
      status: "Graduated",
      description: "Comprehensive undergraduate degree in core and applied mathematics, providing an analytical framework and rigorous mathematical intuition for complex algorithmic problems.",
      coursework: [
        "Calculus & Multivariable Analysis",
        "Linear Algebra & Matrix Theory",
        "Probability & Mathematical Statistics",
        "Discrete Mathematics & Combinatorics",
        "Numerical Analysis & Differential Equations"
      ]
    }
  ],
  certifications: [
    {
      id: "ibm-python",
      title: "Python Programming",
      issuer: "IBM Cognitive",
      year: "2023",
      skillsLearned: [
        "Python Syntax, Data Structures & Functions",
        "Automation & Real-World Data Handling",
        "File I/O & Exception Handling Protocols",
        "Object-Oriented Programming (OOP) Principles",
        "Mini-Project Problem Solving & Algorithmic Logic"
      ],
      highlights: [
        "Built modular scripts tackling real-world data processing challenges",
        "Developed solid foundation in algorithmic logic and Python idioms"
      ]
    },
    {
      id: "ibm-fullstack",
      title: "Full Stack Web Development",
      issuer: "IBM Cognitive",
      year: "2023",
      skillsLearned: [
        "Core Web Stack: HTML5, CSS3, Modern JavaScript (ES6+)",
        "Frontend Development with React",
        "Server-Side Applications with Node.js & Express.js",
        "Databases: MongoDB (NoSQL) & MySQL (Relational)",
        "RESTful API Architecture & CRUD Operations",
        "Version Control & Collaboration with Git and GitHub"
      ],
      highlights: [
        "Designed and deployed responsive full-stack applications",
        "Implemented end-to-end client-server data flows with authentication"
      ]
    }
  ],
  extracurriculars: [
    {
      id: "capstone-research",
      category: "Research",
      title: "Academic Research & Capstone Paper: AI & Blockchain in SCM",
      organizationOrContext: "Shri Ramswaroop Memorial College of Engineering and Management (SRMCEM)",
      period: "2025 – 2026",
      description: "Co-authored a comprehensive research project and review paper on hybrid fraud detection in supply chain management under the faculty supervision of Mr. Ravi Shekhar and Dr. Sadhana Rana.",
      badges: ["Research Paper", "Supply Chain Security", "Blockchain + AI"],
      bulletPoints: [
        "Analyzed vulnerabilities in traditional centralized ERP systems against multi-party collusive fraud rings.",
        "Formulated the conceptual integration of Federated Learning, Graph Attention Networks, and Hyperledger Fabric.",
        "Conducted in-depth comparative evaluations across 9 architectural dimensions including privacy, auditability, and explainability.",
        "Authored the 50+ page official Project Progress Report and departmental review documentation."
      ]
    },
    {
      id: "public-speaking",
      category: "Public Speaking",
      title: "Charismatic Public Speaker & Technical Seminar Presenter",
      organizationOrContext: "Collegiate & Academic Seminars, SRMCEM",
      period: "2023 – Present",
      description: "Recognized as a charismatic and confident orator, frequently delivering technical presentations, academic pitches, and leading project discussions.",
      badges: ["Public Speaking", "Communication", "Technical Seminars"],
      bulletPoints: [
        "Delivered project defense and progress seminars for academic committees with clear, compelling slides and live Q&A handling.",
        "Bridged deep technical architectural concepts with executive summaries accessible to non-technical stakeholders.",
        "Active participant in departmental debates, technical symposiums, and collaborative team reviews."
      ]
    },
    {
      id: "dual-academic-rigor",
      category: "Mathematics",
      title: "Dual Academic Background: Blending Pure Mathematics with Computer Science",
      organizationOrContext: "Purvanchal University & SRMCEM",
      period: "2020 – 2026",
      description: "Earned a B.Sc in Mathematics before pursuing B.Tech in Computer Science Engineering, equipping Satyam with unique depth in algorithmic thinking, data modeling, and mathematical proofs.",
      badges: ["B.Sc Mathematics", "B.Tech CSE", "Algorithmic Depth"],
      bulletPoints: [
        "Leverages core Linear Algebra and Multivariable Calculus intuition to understand modern Machine Learning and Graph Neural Network backpropagation.",
        "Applies Discrete Mathematics concepts directly to graph theory, relational networks, and algorithmic time complexity optimizations.",
        "Demonstrates dedication to continuous technical evolution and intellectual curiosity."
      ]
    },
    {
      id: "creative-graphic-arts",
      category: "Creative Arts",
      title: "Visual Graphic Design & Creative Media Production",
      organizationOrContext: "Independent Creative Practice & College Initiatives",
      period: "2022 – Present",
      description: "Prolific creative designer experienced in Adobe Photoshop, Adobe Illustrator, and Adobe After Effects, producing branding systems, vector artwork, and digital promotional assets.",
      badges: ["Adobe Creative Cloud", "Visual Identity", "UI/UX Aesthetic"],
      bulletPoints: [
        "Designed high-impact visual banners, promotional graphics, and presentation aesthetics for academic and extracurricular projects.",
        "Proficient in color palettes, spatial balance, brutalist typography, and asset optimization for web environments.",
        "Combines engineering discipline with artistic flair to build visually iconic web products."
      ]
    }
  ]
};
