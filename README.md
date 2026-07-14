# 🚀 Premium 3D Developer Portfolio Website

A highly interactive, state-of-the-art **3D Developer Portfolio** built with **React**, **TypeScript**, **Three.js**, **GSAP**, and **WebGL**. It features an interactive 3D character with head-tracking capabilities, smooth smooth scrolling, dynamic components, and a playable Chess interface with an integrated LLM chat assistant.

---

## 🌟 Highlights & Features

*   **Interactive 3D Avatar**: Powered by **Three.js** and **React Three Fiber**, rendering a custom avatar that follows the user's mouse/touch movement using responsive head-tracking bones.
*   **Playground & Chess AI**: A fully interactive sub-page containing:
    *   An LLM-powered chatbot running serverless API calls (simulating Guna K) using Groq's high-performance `llama-3.3-70b` model.
    *   A playable **Chess game** integrated with a local chess engine.
*   **Modern Visual Aesthetics**: Designed with glassmorphism, responsive grid layouts, custom scroll animations, and clean dark-mode variables.
*   **Smooth Motion & Scrolling**: Integrated with **GreenSock (GSAP)** for layout animations and **Lenis** for smooth wheel-based virtual scrolling.
*   **Dynamic Data Configuration**: Content (about text, experiences list, project cards, and skills) is completely decoupled from the components, controlled cleanly through a central `src/config.ts` file.

---

## 🛠️ Tech Stack & Key Libraries

### **Core Frontend**
*   **React 18** & **Vite 5**: Fast development server and highly optimized production bundler.
*   **TypeScript 5**: Fully type-safe component props, state management, and Three.js configurations.
*   **CSS3 (Vanilla)**: Structured design system with custom variables and responsive media queries.

### **3D Graphics & WebGL**
*   **Three.js** & **Three-stdlib**: Standard WebGL graphics engine.
*   **React Three Fiber (R3F) & Drei**: Declarative bindings to orchestrate 3D meshes, rendering loops, lights, and material shaders in React.
*   **Draco Loader**: Highly optimized decoding for compressed 3D GLTF models.

### **Animations & Effects**
*   **GSAP (GreenSock)** & **ScrollTrigger**: Advanced timeline animations and scroll-driven trigger actions.
*   **Lenis**: Performance-first smooth scrolling framework.
*   **React Fast Marquee**: Sleek marquee loops for the landing loading screen.

### **Chat & Engine Integrations**
*   **Chess.js**: Internal chess state validation and move tracking.
*   **Groq Cloud API**: Llama 3.3 serverless endpoint wrapper.
*   **Vercel Serverless Functions**: Backed by a secure API handler routing Groq prompt credentials.

---

## 📂 Project Structure

```filepath
portfolio-website/
├── api/                    # Serverless API routes (Vercel)
│   └── chat.js             # API handler for the Groq chatbot
├── public/                 # Static assets folder
│   ├── draco/              # Draco compression decoder files
│   ├── images/             # Generated UI mockups & profile photos
│   ├── models/             # Encrypted 3D GLTF/GLB models
│   └── video/              # Background video assets
├── src/                    # Main source code
│   ├── assets/             # Raw SVG/styling images
│   ├── components/         # Reusable page components
│   │   ├── Character/      # 3D Renderer, Lighting, resize handlers, and bone utilities
│   │   ├── styles/         # CSS sheets for individual components
│   │   ├── About.tsx       # Profile description section
│   │   ├── Career.tsx      # Vertical chronological career timelines
│   │   ├── Landing.tsx     # Hero banner and mobile layouts
│   │   ├── Loading.tsx     # Marquee loader and visual welcome FX
│   │   ├── Navbar.tsx      # Lenis navigation controller
│   │   ├── SocialIcons.tsx # Floating responsive social anchors
│   │   ├── TechStackNew.tsx# Pyramid-styled skills list
│   │   └── Work.tsx        # Horizontal carousel preview cards
│   ├── context/            # React providers (e.g. Loading State)
│   ├── data/               # Static arrays (Three.js skeleton bones)
│   ├── pages/              # Main sub-pages (Home, MyWorks, Play/Chess Chat)
│   ├── utils/              # GSAP animations timelines and helper wrappers
│   ├── App.tsx             # Lazy routes orchestrator
│   ├── config.ts           # CENTRAL CONTENT CONFIGURATION FILE
│   └── main.tsx            # DOM root entry
├── index.html              # Main HTML entry & SEO meta titles
├── package.json            # Scripts and dependencies configurations
├── tsconfig.json           # Compiler rules
└── vercel.json             # Vercel routing configurations and headers
```

---

## 🚀 Setup & Local Installation

### **Prerequisites**
Ensure you have **Node.js** (v18+) installed on your machine.

### **1. Clone the repository**
```bash
git clone https://github.com/Guna-kannan/portfolio-website.git
cd portfolio-website
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Keys**
Copy the template `.env` and fill in your API key for the chatbot:
```bash
cp .env.example .env
```
Add your **Groq API Key**:
```env
GROQ_API_KEY=your_groq_api_key_here
```

### **4. Start Local Development**
```bash
npm run dev
```
The site will run on `http://localhost:5173` (or `5174`).

### **5. Production Compilation**
```bash
npm run build
```
This compiles typescript schemas and builds optimized chunks in the `dist/` directory.

---

## 🎨 Customization Guide

### **Editing Website Content**
Almost all visible texts, links, descriptions, projects, and careers can be customized directly in **[src/config.ts](file:///Users/gunak/portfolio-website/src/config.ts)**:
*   **`config.developer`**: Adjust your name, display titles, and hero introduction.
*   **`config.social`**: Update your GitHub, LinkedIn, email, and the PDF resume URL.
*   **`config.about`**: Write your professional profile summary.
*   **`config.experiences`**: Add or remove career cards. They render automatically sorted by their order.
*   **`config.projects`**: Add project metadata, descriptions, and linked preview images.
*   **`config.skills`**: Populate developer/design tool stacks to display under the skills categories.

### **Styling & Theme**
*   **Global Variables**: Adjust colors (like `--accentColor`, `--backgroundColor`) inside **[src/index.css](file:///Users/gunak/portfolio-website/src/index.css)**.
*   **Typography**: The font family is loaded from Google Fonts (`Geist`). You can replace the import block at the top of `index.css` to load custom fonts.

---

## 🤝 Connect
Feel free to reach out or check out more of my work:
*   **GitHub**: [github.com/Guna-kannan](https://github.com/Guna-kannan)
*   **LinkedIn**: [linkedin.com/in/guna-k-career](https://linkedin.com/in/guna-k-career)
*   **Email**: [guna.k.career@gmail.com](mailto:guna.k.career@gmail.com)
