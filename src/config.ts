export const config = {
    developer: {
        name: "Guna K",
        fullName: "Guna K",
        title: "Software & GenAI Developer",
        description: "CS undergraduate (AI & ML specialisation) at SRMIST seeking a Software Development internship. Builds and ships full-stack applications and applied ML/GenAI systems end-to-end – from data pipeline and model to deployed, production-ready API – backed by hands-on experience with RESTful APIs, cloud deployment (AWS, Docker), LLM-based systems, and open-source collaboration."
    },
    social: {
        github: "Guna-kannan",
        email: "guna.k.career@gmail.com",
        phone: "+91-8778040276",
        location: "Chennai, Tamil Nadu",
        website: "https://gunak.me",
        resume: "https://drive.google.com/file/d/1alvIf7Gaei7MbtdU5Zl-D4UCEXXdYOMF/view?usp=sharing"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology (2024–2028). I build and ship full-stack applications and applied ML/GenAI systems end-to-end — from data pipelines and models to deployed, production-ready APIs. My technical experience spans MERN stack development (React 19, TypeScript, Node.js), RESTful APIs, cloud deployment (AWS, Docker), LLM-based systems, prompt engineering, RAG, and open-source collaboration. Backed by strong foundations in data structures and software engineering, I am passionate about engineering reliable software and intelligent systems."
    },
    experiences: [
        {
            position: "MERN Front End Developer Intern",
            company: "BrainMint",
            period: "May 2026 – Present",
            location: "Remote",
            description: "Building the Kanban Board and Sprint Management modules for CREWPAL, a team project-management app, using React 19, TypeScript, Vite, Tailwind CSS v4. Integrating Figma design specs into production components and coordinating shared data contracts across the frontend team.",
            responsibilities: [
                "Building the Kanban Board and Sprint Management modules for CREWPAL, a team project-management app, using React 19, TypeScript, Vite, Tailwind CSS v4",
                "Integrating Figma design specs into production components and coordinating shared data contracts across the frontend team"
            ],
            technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "MERN Stack", "Figma"]
        },
        {
            position: "Enterprise Software Intern",
            company: "Argit Solutions Private Limited",
            period: "June 2026 – July 2026",
            location: "Remote",
            description: "Developed features for an enterprise/ERP software product, gaining hands-on exposure to business-process-driven software development.",
            responsibilities: [
                "Developed features for an enterprise/ERP software product",
                "Gained hands-on exposure to business-process-driven software development"
            ],
            technologies: ["Enterprise Software", "ERP Software", "Business Process Driven Development"]
        },
        {
            position: "Generative AI Intern",
            company: "Edunet Foundation",
            period: "Jan 2026 – Mar 2026",
            location: "Remote",
            description: "Designed and deployed a Gen AI-powered application leveraging LLM APIs; integrated prompt engineering techniques, improving response accuracy by ~30%. Explored Retrieval-Augmented Generation (RAG) architectures; documented findings in a structured report for IBM SkillsBuild.",
            responsibilities: [
                "Designed and deployed a Gen AI-powered application leveraging LLM APIs",
                "Integrated prompt engineering techniques to improve response accuracy by ~30%",
                "Explored Retrieval-Augmented Generation (RAG) architectures",
                "Documented findings in a structured report for IBM SkillsBuild"
            ],
            technologies: ["Generative AI", "LLM APIs", "Prompt Engineering", "RAG", "IBM SkillsBuild"]
        },
        {
            position: "Machine Learning Intern",
            company: "Future Interns & axcentra",
            period: "Dec 2025 – Jan 2026",
            location: "Remote",
            description: "Completed project-based ML internships; built a Heart Disease Prediction system, implementing and comparing multiple classification algorithms across preprocessing, feature selection, and model evaluation.",
            responsibilities: [
                "Completed project-based ML internships",
                "Built a Heart Disease Prediction system",
                "Implemented and compared multiple classification algorithms across preprocessing, feature selection, and model evaluation"
            ],
            technologies: ["Python", "Machine Learning", "Classification Algorithms", "Data Preprocessing", "Feature Selection", "Model Evaluation"]
        },
        {
            position: "Full Stack Developer Intern",
            company: "Infogreen",
            period: "June 2025",
            location: "Salem, Tamil Nadu, India",
            description: "Built responsive web apps using React.js, Node.js, Express.js with RESTful APIs and MongoDB; improved page load speed by 40% through lazy loading and code-splitting. Implemented JWT-based authentication and role-based access control; deployed apps on AWS EC2 with Docker containerisation.",
            responsibilities: [
                "Built responsive web apps using React.js, Node.js, Express.js with RESTful APIs and MongoDB",
                "Improved page load speed by 40% through lazy loading and code-splitting",
                "Implemented JWT-based authentication and role-based access control",
                "Deployed applications on AWS EC2 using Docker containerisation"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT", "AWS EC2", "Docker"]
        },
        {
            position: "Open Source Contributor",
            company: "GSSoC (GirlScript Summer of Code), JEC Jabalpur",
            period: "May 2026 – Present",
            location: "Remote",
            description: "Contributed to open-source projects via GSSoC’26 – resolved issues and submitted PRs reviewed by maintainers, collaborating through standard Git/GitHub workflows.",
            responsibilities: [
                "Contributed to open-source projects via GSSoC’26",
                "Resolved issues and submitted PRs reviewed by maintainers",
                "Collaborated through standard Git/GitHub workflows"
            ],
            technologies: ["Git", "GitHub", "Open Source", "Collaboration"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "End-to-End Deployed ML Application",
            category: "Machine Learning / DevOps",
            technologies: "Python, FastAPI, Docker, AWS, Scikit-learn, Pandas",
            image: "/images/fraud-detection.png",
            description: "Built a fraud detection system (94% recall) covering the full pipeline – data preprocessing → model training → FastAPI serving layer → deployed web app. Containerised with Docker and deployed on AWS; added basic request/prediction logging for monitoring – a shipped product, not just a notebook."
        },
        {
            id: 2,
            title: "AI Resume Analyzer",
            category: "Generative AI",
            technologies: "Python, GPT-4, Claude APIs, Serverless, Text Extraction",
            image: "/images/resume-analyzer.png",
            description: "Serverless system integrating GPT-4/Claude APIs for ATS scoring and keyword gap analysis; processed 500+ resumes in beta testing with 95% text extraction accuracy."
        },
        {
            id: 3,
            title: "RAG-Based Document Q&A Assistant",
            category: "Generative AI / NLP",
            technologies: "Python, LLM APIs, FAISS, Vector Embeddings, RAG, REST API",
            image: "/images/rag-qa.png",
            description: "Built a Retrieval-Augmented Generation chatbot that answers questions grounded in uploaded PDFs/docs using vector embeddings and semantic search (FAISS), reducing hallucinated answers vs. plain LLM calls. Integrated LLM APIs with a prompt-engineered retrieval pipeline and exposed it via a REST API; extended learnings from GenAI internship work into a standalone deployable project."
        }
    ],
    contact: {
        email: "guna.k.career@gmail.com",
        phone: "+91-8778040276",
        github: "https://github.com/Guna-kannan",
        linkedin: "https://linkedin.com/in/guna-k-career",
        website: "https://gunak.me",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "AI & ML DEVELOPER",
            description: "Building intelligent models & applied GenAI systems",
            details: "Developing applied ML/GenAI systems end-to-end: from data pipeline and model to deployed, production-ready API. Backed by hands-on experience with LLM APIs, prompt engineering, RAG, FAISS, and vector embeddings.",
            tools: ["Python", "SQL", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "LLM APIs", "Prompt Engineering", "RAG", "Vector Embeddings", "FAISS", "EDA"]
        },
        design: {
            title: "FULL-STACK DEVELOPER",
            description: "Modern web applications & cloud deployment",
            details: "Building responsive and performant full-stack web applications using React.js, Node.js, Express.js, FastAPI, and databases (MySQL, MongoDB). Containerizing and deploying with Docker on AWS.",
            tools: ["JavaScript", "Java", "React.js", "Node.js", "Express.js", "FastAPI", "HTML/CSS", "TailwindCSS", "MySQL", "Docker", "AWS (EC2, S3)", "Git", "GitHub", "Postman"]
        }
    },
    education: {
        degree: "B.Tech – CSE (AI & ML Specialisation)",
        institution: "SRM Institute of Science and Technology",
        period: "July 2024 – May 2028 (Expected)"
    },
    certifications: [
        "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        "AWS Academy – Generative AI Foundations",
        "AWS Academy – Machine Learning for Natural Language Processing",
        "AWS Academy – Machine Learning Foundations",
        "IBM SkillsBuild – Artificial Intelligence Foundations",
        "Tata GenAI Powered Data Analytics Job Simulation (Forage)",
        "Mastering Data Structures & Algorithms using C and C++ (Udemy)",
        "Fundamentals of Object-Oriented Programming & C Programming",
        "C Programming for College Students",
        "Student Member – Indian Society for Technical Education (ISTE)"
    ],
    languages: [
        { name: "Tamil", level: "Native" },
        { name: "English", level: "Professional" },
        { name: "French", level: "Elementary" }
    ]
};
