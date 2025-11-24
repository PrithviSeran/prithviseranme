export const portfolioData = {
  // Personal Information
  personal: {
    name: "Prithvi Seran",
    email: "prithviseran0@gmail.com",
    title: "Engineer",
  },

  // Social Links
  social: {
    twitter: "https://x.com/PrithviSeran",
    github: "https://github.com/PrithviSeran",
    linkedin: "https://www.linkedin.com/in/prithvi-seran-029652218/",
    // scholar: "https://scholar.google.com/citations?user=yourid",
  },

  // Bento Box Images
  bentoImages: [
    {
      id: "1",
      src: "../../public/me.jpeg", // Add your image path here, e.g., "/images/photo1.jpg"
      alt: "Image 1",
      size: "large", // large = 2x2 grid
    },
    {
      id: "2",
      src: "../../public/superman.JPG", // Add your image path here
      alt: "Image 2",
      size: "wide", // wide = 2x1 grid
    },
    {
      id: "3",
      src: "../../public/ramen.jpeg", // Add your image path here
      alt: "Image 3",
      size: "small", // small = 1x1 grid
    },
    {
      id: "4",
      src: "../../public/cafe.jpg", // Add your image path here
      alt: "Image 4",
      size: "small", // small = 1x1 grid
    },
  ],

  // Bio sections for home page
  bio: [
    {
      type: "intro",
      content: [
        "I'm currently an engineer at [Shopify](https://shopify.com), working on making commerce easier for everyone.",
        "I also worked as a data scientist at Shopify, a machine learning engineer at [Rotman Commerce](https://rotmancommerce.com), and a researcher at the [Dynamic Optimization & Operations Management Lab](https://cglee.mie.utoronto.ca/research-lab/).",
        "My goal is to build products and technologies that people love and can benefit from.",
      ],
    },
    {
      type: "section",
      title: "Other than building...",
      content: [
        "I love combat sports. I myself train in kickboxing.",
        "Music is a big part of my life, almost anything I do is accompanied by music playing in the background.",
        "I am a big superhero/anime/comics/manga fan. The Absolute Batman comic run has been phenominal.",
      ],
    },
  ],

  // Skills
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
  ],

  // Experience
  experience: [
    {
      id: "1",
      company: "Shopify",
      role: "Software Engineering Intern",
      period: "Sept 2025 - Present",
      description:
        "Built and shipped backend services powering millions of daily requests, then jumped to the frontend to craft polished admin UIs. Spent my days juggling Ruby, GraphQL, Kafka, and React—and somehow made them all get along.",
    },
    {
      id: "2",
      company: "Shopify",
      role: "Data Science Intern",
      period: "Jan 2025 - April 2025",
      description:
        "Created end-to-end ML pipelines that trained themselves while I slept, wrangled huge datasets with BigQuery, and turned messy ETL processes into clean, automated DAGs. Also moonlighted as a dashboard wizard for Shopify’s data teams.",
    },
    {
      id: "3",
      company: "Rotman Commerce",
      role: "Machine Learning Engineer",
      period: "May 2025 - Present",
      description:
        "Built a contract-analyzing brain using GraphRAG, LLMs, and a giant graph database. Got agents to read legal documents, extract the juicy parts, and map out relationships like it was detective work.",
    },
    {
      id: "4",
      company: "Dynamic Optimization & Operations Management Lab",
      role: "Deep Reinforcement Learning Researcher",
      period: "May 2025 - Aug 2025",
      description:
        "Created drone-training arenas where autonomous agents learned to chase, dodge, and outsmart each other. Mixed pathfinding algorithms with RL to build tiny airborne strategists.",
    },
    {
      id: "5",
      company: "Dynamic Optimization & Operations Management Lab",
      role: "Research Assistant",
      period: "Oct 2024 - May 2025",
      description:
        "Built ML pipelines that could predict patient treatments and recommend what comes next. Spent my time tuning one-class models, crafting LSTM architectures, and turning dentistry datasets into something actually usable.",
    },
    {
      id: "6",
      company: "aUToronto (SAE AutoDrive Challenge)",
      role: "Mobility Innovations Lead",
      period: "May 2024 - Present",
      description:
        "Led a team defending autonomous cars from adversarial attacks—basically teaching a self-driving vehicle how to not get tricked by bad actors. Mixed robotics, safety, and a lot of creative debugging.",
    },
    {
      id: "7",
      company: "UTAT (University of Toronto Aerospace Team)",
      role: "Data Processing Developer",
      period: "Jan 2024 - Oct 2024",
      description:
        "Used diffusion models and transformers to clean up noisy hyperspectral images from a CubeSat mission. Helped turn raw space data into something scientists could actually use, and published it at SmallSat.",
    },
  ],
  
  

  // Projects
  projects: [
    {
      id: "1",
      title: "What's Poppin",
      description:
        "Designed a nightlife app that feels like a personal party scout. Built the full stack, from ML-powered recommendations to a clean React Native interface, so people could find the perfect spot without endless scrolling.",
      technologies: ["React Native", "PyTorch", "FastAPI", "Supabase", "Docker", "TypeScript"],
      githubUrl: "https://github.com/PrithviSeran/whats-poppin",
      liveUrl: "https://www.whatspoppin.info",
    },
    {
      id: "3",
      title: "GraphRAG Contract Analysis App @ Rotman Commerce",
      description:
        "Built a contract-analyzing sidekick that uses graphs and LLM agents to break down dense legal documents. Wired up a graph database, a FastAPI engine, and a slick Next.js UI so professors could explore contracts like an interactive map.",
      technologies: ["Python", "LangGraph", "Neo4j", "FastAPI", "Docker", "Next.js", "LLaMA"],
      githubUrl: "https://github.com/PrithviSeran/ContRAG",
      liveUrl: "https://cont-rag.vercel.app",
    },
    {
      id: "6",
      title: "AI Digital Marketing Platform",
      description:
        "Created a full-stack marketing assistant that writes emails, finds leads, and manages campaigns. Mixed scrapers, AI-powered writing, and live dashboards to make outreach feel less like a chore and more like magic.",
      technologies: ["Django", "Llama3", "React.js", "PostgreSQL", "GCP"],
      githubUrl: "https://github.com/PrithviSeran/AIDigitalMarketing",
      liveUrl: null,
    },
    {
      id: "7",
      title: "TAAM Item Collection Management App",
      description:
        "Led a small squad to build an app for a real museum, handling everything from scanning items to organizing collections. Wrote Java, wrangled Firebase, and treated clean architecture and testing like a sport.",
      technologies: ["Java", "Firebase", "Mockito", "JUnit5", "XML", "Jira"],
      githubUrl: "https://github.com/PrithviSeran/TAAM-Project",
      liveUrl: null,
    },
    {
      id: "8",
      title: "DrawNote AI",
      description:
        "Built an iOS app that turns messy classroom sketches into tidy digital notes. Mixed SwiftUI with a PyTorch model running through Azure so hand-drawn arrows and circles magically become OneNote-ready diagrams.",
      technologies: ["C#", "Azure", "PyTorch", "Swift", "XML"],
      githubUrl: "https://github.com/PrithviSeran/DrawNoteAI",
      liveUrl: null,
    },
    {
      id: "9",
      title: "Prince Financials",
      description:
        "Developed a Forex bot that watches markets and makes calls using sequence models. Automated the whole setup with Terraform so the bot could live in the cloud and trade without babysitting.",
      technologies: ["Python", "GCP", "Terraform", "Swift", "Firebase"],
      githubUrl: "https://github.com/PrithviSeran/Prince-Financials-Trading-Bot",
      liveUrl: null,
    },
  ],
  
  

  // Publications
  publications: [
    {
      id: "1",
      title: "Beyond the Visible: Jointly Attending to Spectral and Spatial Dimensions with HSI-Diffusion for the FINCH Spacecraft",
      authors: "UTAT's data processing team",
      venue: "2024 SmallSat Conference",
      year: "2024",
      link: "https://arxiv.org/html/2406.10724v1",
    },
  ],

  // Blog Posts
  
};

export type PortfolioData = typeof portfolioData;
