export const config = {
    developer: {
        name: "Guna K",
        fullName: "Guna K",
        title: "Software & GenAI Developer",
        description: "CS undergraduate specializing in AI & ML at SRMIST. Builds and ships full-stack applications and applied ML/GenAI systems end-to-end – from data pipeline and model to deployed, production-ready API."
    },
    social: {
        github: "Guna-kannan",
        email: "guna.k.career@gmail.com",
        location: "Chennai, Tamil Nadu",
        resume: "https://drive.google.com/file/d/1AJ8s8rx78Tv_kw2EV4Jz_niCXvW_3q9c/view?usp=sharing"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology. As a dedicated developer, I build, deploy, and scale responsive full-stack web applications and intelligent machine learning/Generative AI systems end-to-end. My technical experience spans MERN stack development, RESTful APIs, cloud infrastructure (AWS, Docker), open-source collaboration, and prompt engineering. With a strong foundation in data structures and software engineering, I am focused on bridging the gap between advanced AI models and production-ready applications to solve real-world challenges."
    },
    experiences: [
        {
            position: "Microsoft Student Ambassador",
            company: "Microsoft",
            period: "July 2026 - Present",
            location: "Chennai, Tamil Nadu",
            description: "Representing Microsoft on campus as a certified Student Ambassador. Organizing technical workshops and leading peer outreach on Microsoft and Azure developer tools.",
            responsibilities: [
                "Representing Microsoft on campus as a certified Student Ambassador",
                "Organizing technical workshops for peers",
                "Leading outreach on Microsoft/Azure developer tools"
            ],
            technologies: ["Azure", "Developer Tools", "Community Outreach", "Workshops"]
        },
        {
            position: "MERN Back End Developer Intern",
            company: "BrainMint",
            period: "June 2026 - Present",
            location: "Remote",
            description: "Focusing on backend development using the MERN stack. Building and deploying scalable backend services, integrating APIs, and managing database systems.",
            responsibilities: [
                "Developing backend services using Node.js, Express.js, and MongoDB",
                "Building and integrating RESTful APIs",
                "Managing database schemas and optimizing query performance"
            ],
            technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "MERN Stack"]
        },
        {
            position: "Open Source Contributor",
            company: "GirlScript Summer of Code (GSSoC)",
            period: "May 2026 - Present",
            location: "Remote",
            description: "Contributing to open-source software repositories, resolving bugs, developing features, and submitting pull requests reviewed by core maintainers using standard Git/GitHub workflows.",
            responsibilities: [
                "Resolving bugs and adding features in open-source projects",
                "Submitting pull requests reviewed by project maintainers",
                "Collaborating using standard Git/GitHub workflows"
            ],
            technologies: ["Git", "GitHub", "Open Source", "Collaboration"]
        },
        {
            position: "Gen AI Virtual Internship",
            company: "Edunet Foundation",
            period: "Jan 2026 - Mar 2026",
            location: "Remote",
            description: "Designed and deployed a Gen AI-powered application leveraging LLM APIs. Integrated prompt engineering techniques, improving response accuracy by ~30%. Explored Retrieval-Augmented Generation (RAG) architectures and documented findings in a structured report for IBM SkillsBuild.",
            responsibilities: [
                "Designed and deployed a Gen AI-powered application leveraging LLM APIs",
                "Integrated prompt engineering techniques to improve response accuracy by ~30%",
                "Explored Retrieval-Augmented Generation (RAG) architectures",
                "Documented findings in a structured report for IBM SkillsBuild"
            ],
            technologies: ["Generative AI", "LLM APIs", "Prompt Engineering", "RAG", "IBM SkillsBuild", "MongoDB", "AWS"]
        },
        {
            position: "Machine Learning Intern",
            company: "Future Interns",
            period: "Dec 2025 - Jan 2026",
            location: "Remote",
            description: "Developed machine learning models using Python and explored neural network architectures, data preprocessing pipelines, and model evaluation techniques.",
            responsibilities: [
                "Building predictive models and data preprocessing pipelines in Python",
                "Implementing and evaluating core machine learning algorithms",
                "Exploring neural network architectures for classification tasks"
            ],
            technologies: ["Python", "Machine Learning", "Data Preprocessing", "Neural Networks"]
        },
        {
            position: "Machine Learning Intern",
            company: "axcentra",
            period: "Dec 2025",
            location: "Remote",
            description: "Completed an internship focused on machine learning implementations, building predictive models, and analyzing data metrics for business insights.",
            responsibilities: [
                "Developing predictive models to deliver data-driven insights",
                "Analyzing data metrics and creating visualizations",
                "Assisting with model deployments and parameter tuning"
            ],
            technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"]
        },
        {
            position: "Student Member",
            company: "Indian Society for Technical Education",
            period: "Sept 2025 - Present",
            location: "Chennai, Tamil Nadu",
            description: "Engaging with the professional technical community to foster engineering education, attend workshops, and collaborate on student-led technical initiatives.",
            responsibilities: [
                "Fostering engineering education and student collaboration",
                "Participating in technical seminars and workshops",
                "Collaborating on student-led technical projects and initiatives"
            ],
            technologies: ["Technical Education", "Seminars", "Collaboration"]
        },
        {
            position: "Full Stack Developer Intern",
            company: "Infogreen",
            period: "June 2025",
            location: "Salem, Tamil Nadu, India",
            description: "Built responsive web apps using React.js, Node.js, Express.js with RESTful APIs and MongoDB. Improved page load speed by 40% through lazy loading and code-splitting. Implemented JWT-based authentication and role-based access control; deployed apps on AWS EC2 with Docker containerisation.",
            responsibilities: [
                "Built 3 responsive web apps using React.js, Node.js, Express.js, and MongoDB",
                "Improved page load speed by 40% through lazy loading and code-splitting",
                "Implemented JWT-based authentication and role-based access control",
                "Deployed applications on AWS EC2 using Docker containerization"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AWS EC2", "Docker"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "End-to-End Deployed ML",
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
            title: "RAG Document Q&A",
            category: "Generative AI / NLP",
            technologies: "Python, LLM APIs, FAISS, Vector Embeddings, RAG, REST API",
            image: "/images/rag-qa.png",
            description: "Built a Retrieval-Augmented Generation chatbot that answers questions grounded in uploaded PDFs/docs using vector embeddings and semantic search (FAISS), reducing hallucinated answers vs. plain LLM calls. Integrated LLM APIs with a prompt-engineered retrieval pipeline and exposed it via a REST API; extended learnings from GenAI internship work into a standalone deployable project."
        }
    ],
    contact: {
        email: "guna.k.career@gmail.com",
        github: "https://github.com/Guna-kannan",
        linkedin: "https://linkedin.com/in/guna-k-career",
        twitter: "",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "AI & ML DEVELOPER",
            description: "Building intelligent models & applied GenAI systems",
            details: "Developing applied ML/GenAI systems end-to-end: from data pipeline and model to deployed, production-ready API. Backed by hands-on experience with LLM APIs, prompt engineering, RAG, FAISS, and vector embeddings.",
            tools: ["Python", "SQL", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "LLM APIs", "RAG", "FAISS", "Vector Embeddings", "Prompt Engineering"]
        },
        design: {
            title: "FULL-STACK DEVELOPER",
            description: "Modern web applications & cloud deployment",
            details: "Building responsive and performant full-stack web applications using React.js, Node.js, Express.js, FastAPI, and databases (MySQL, MongoDB, Supabase). Containerizing and deploying with Docker on AWS.",
            tools: ["JavaScript", "React.js", "Node.js", "Express.js", "FastAPI", "HTML/CSS", "TailwindCSS", "MySQL", "MongoDB", "Supabase", "Git/GitHub", "Docker", "AWS"]
        }
    }
};
