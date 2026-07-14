# 🚀 Interactive 3D & AI Developer Portfolio

A premium, interactive **3D Developer Portfolio Website** designed for software developers and AI engineers. Built using **React 18**, **TypeScript**, **Three.js / React Three Fiber**, **GSAP**, and **Vite**, this website offers an immersive visual experience.

It features a **custom 3D character** that dynamically follows cursor movements, smooth **Lenis** scrolling animations, a modern glassmorphism UI, and an **Interactive Play Zone** where visitors can play chess and converse with an AI persona of the developer.

---

## ✨ Features

### 1. 🎨 Premium Design & Aesthetics
* **Sleek Dark Mode**: Designed with customized color palettes (`#0b080c` backgrounds with `#c2a4ff` accenting highlights).
* **Modern Typography**: Styled with Google's high-tech variable **Geist** font at a readable, light weight (`350`) for a modern, clean editorial look.
* **Smooth Scrolling & Motion**: Integrated with **Lenis** for smooth scroll damping and **GSAP (ScrollTrigger)** for stagger animations and scroll-driven page elements.
* **Glassmorphic Layouts**: Semi-transparent panels, micro-animations, hover states, and canvas-aligned custom cursor interactions.

### 2. 🤖 Dynamic 3D Scene
* **WebGL Avatar Scene**: Powered by **React Three Fiber (R3F)** and **Three.js**.
* **Decryption Utility**: Dynamically loads and decrypts the encrypted 3D GLTF avatar model (`/models/character.enc`) securely in the browser.
* **Interactive Head Tracking**: The avatar's neck and head bones track mouse movements on desktop and swipe gestures on mobile devices.
* **GSAP Timelines**: Synchronized camera motions, zoom levels, and entrance animations coordinate on page load.

### 3. ♟️ Play Zone (Chess & AI Assistant Chat)
* **Chess Game Engine**: An interactive game board powered by **chess.js** and a local chess engine wrapper allowing visitors to play against an AI player.
* **Developer AI Chatbot**: A live messaging panel enabling users to chat directly with Guna's AI persona. 
* **Serverless Backend Integration**: Backend chat requests are handled securely via a Vercel serverless function (`/api/chat.js`) that proxies requests to the **Groq API** (`llama-3.3-70b-versatile` model) using your environment key.

### 4. 🎛️ Centralized Configuration Schema
* Fully content-driven via [config.ts](src/config.ts). All portfolio sections (about text, experiences, project lists, and social connections) update dynamically without altering component structures.

---

## 🧰 Tech Stack

* **Frontend**: React 18, TypeScript, Vite, React Router DOM 7
* **3D Rendering**: Three.js, React Three Fiber (R3F), React Three Drei, Draco Loader
* **Animations**: GSAP (GreenSock Animation Platform), ScrollTrigger, Lenis (Smooth Scroll)
* **APIs & Backend**: Node.js, Vercel Serverless Functions, Groq API (Chat completions)
* **Chess Engine**: chess.js, Web workers

---

## 📂 Project Structure

```bash
portfolio-website/
├── api/
│   └── chat.js            # Vercel Serverless Function (Groq API proxy)
├── public/
│   ├── draco/             # Draco compression decoders for 3D meshes
│   ├── images/            # Project mockup visuals and personal pictures
│   ├── models/            # Encrypted 3D GLTF model (character.enc)
│   └── video/             # WebM looping background video
├── src/
│   ├── assets/            # Global fonts and assets
│   ├── components/        # Modular UI Components
│   │   ├── Character/     # Three.js R3F Canvas and bone controllers
│   │   ├── About.tsx      # Biography section
│   │   ├── Contact.tsx    # Contact information and links
│   │   ├── Loading.tsx    # Entrance marquee loading screen
│   │   ├── Navbar.tsx     # Smooth scroll navigation header
│   │   ├── SocialIcons.tsx# Floating social links and resume portal
│   │   ├── TechStackNew.tsx # Skills arranged in a sleek pyramid layout
│   │   └── WhatIDo.tsx    # Sub-discipline listings
│   ├── context/           # App state managers (e.g., LoadingProvider)
│   ├── data/              # 3D bone mapping datasets
│   ├── pages/             # Page routing containers (Play, MyWorks)
│   ├── utils/             # GSAP timelines and chess engine wrappers
│   ├── config.ts          # Central developer configuration & content
│   └── main.tsx           # Application entrypoint
├── index.html             # HTML layout skeleton
├── package.json           # Scripts and package manifests
├── vercel.json            # Vercel routing rules & API rewrites
└── tsconfig.json          # TypeScript compilation settings
```

---

## ⚙️ Customization Guide

To personalize this portfolio with your details, check the following:

### 1. Update Core Content
Open [src/config.ts](src/config.ts) and customize:
* `developer`: Your name, job titles, and brief summaries.
* `about`: A detailed professional introduction.
* `experiences`: Experience records sorted reverse-chronologically (include roles, periods, and technologies).
* `projects`: Project cards linked to their respective image mockups.
* `contact`: GitHub, LinkedIn, email, and social handles.

### 2. Configure Your Resume
* Put your resume PDF in the `public/` directory (e.g., `public/Guna_K_Resume.pdf`).
* Open `config.ts` and set the `social.resume` property to point to the PDF path, or configure it to point to a Google Drive link.

### 3. Add Project Images
Replace or place project screenshot/mockup images in `public/images/` and ensure the filenames match the `image` paths in `config.ts` (e.g. `/images/fraud-detection.png`).

---

## 🚀 Setup & Local Development

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed.

### 2. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/Guna-kannan/portfolio-website.git
cd portfolio-website
npm install
```

### 3. Environment Setup
To enable the interactive chatbot, create a `.env` file in the root directory and add your Groq API Key:
```env
GROQ_API_KEY=your_groq_api_key_here
```
*(Get your free API key at [Groq Console](https://console.groq.com/))*

### 4. Running the Dev Server
Run the local Vite server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
Generate the static production build:
```bash
npm run build
```
The compiled build output will be exported to the `dist/` directory.

---

## ☁️ Deployment

This project is optimized for deployment on **Vercel** out-of-the-box.

1. Import your GitHub repository to Vercel.
2. In the Vercel project settings, add the **Environment Variable**:
   * Key: `GROQ_API_KEY`
   * Value: `your_actual_groq_api_key`
3. Click **Deploy**. Vercel will automatically read [vercel.json](vercel.json), set up the serverless function `/api/chat.js` to handle chatbot requests, and render the static frontend.

---

## 📄 License

This project is open-source and licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more information.
