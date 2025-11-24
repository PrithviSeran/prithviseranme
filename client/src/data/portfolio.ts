export const portfolioData = {
  // Personal Information
  personal: {
    name: "Your Name",
    email: "your.email@example.com",
    title: "Developer & Creator",
  },

  // Social Links
  social: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    scholar: "https://scholar.google.com/citations?user=yourid",
  },

  // Bento Box Images
  bentoImages: [
    {
      id: "1",
      src: "", // Add your image path here, e.g., "/images/photo1.jpg"
      alt: "Image 1",
      size: "large", // large = 2x2 grid
    },
    {
      id: "2",
      src: "", // Add your image path here
      alt: "Image 2",
      size: "wide", // wide = 2x1 grid
    },
    {
      id: "3",
      src: "", // Add your image path here
      alt: "Image 3",
      size: "small", // small = 1x1 grid
    },
    {
      id: "4",
      src: "", // Add your image path here
      alt: "Image 4",
      size: "small", // small = 1x1 grid
    },
  ],

  // Bio sections for home page
  bio: [
    {
      type: "intro",
      content: [
        "I'm a researcher at [Your Institute](https://example.com) and [Partner Organization](https://example.com), working on interesting problems in your field of expertise.",
        "I lead the [Your Team](https://example.com) team, where we develop innovative solutions. The team has grown to over 20 researchers and engineers advancing the frontier of your field.",
        "My goal is to build [transformative technology](https://example.com); systems that push the boundaries of what's possible in your domain.",
      ],
    },
    {
      type: "section",
      title: "On the Meaning of Life",
      content: [
        "I often contemplate the meaning of life. Currently, I believe life is meaningless if the chain of intelligence breaks at anytime in the future. Conversely, I've found purpose in increasing the breadth and depth of intelligence such that it, in billions of years down the road, it can give rise to new universes and keep the chain going. I'm not sure if, when, or how my perspective might change.",
      ],
    },
    {
      type: "section",
      title: "Community",
      content: [
        "Brief description of your involvement in the community, mentorship, or other activities you're passionate about.",
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
      company: "Arc Institute",
      role: "Bio AI Researcher",
      period: "May 2025 - Present",
      description:
        "Leading the BioReason team with Vector Institute to build reasoning foundation models that connect DNA, proteins, and disease pathways using reinforcement learning and multimodal biology.",
    },
    {
      id: "2",
      company: "Cohere",
      role: "Machine Learning Engineer Intern",
      period: "April 2025 - August 2025",
      description:
        "Built large-scale synthetic data pipelines across 1,024 GPUs, boosting math reasoning in foundation models and integrating real-time monitoring with Kubernetes and Grafana.",
    },
    {
      id: "3",
      company: "INSERM",
      role: "Machine Learning Researcher",
      period: "July 2023 - September 2024",
      description:
        "First-authored CodonTransformer (Nature Communications), a model that optimizes DNA sequences for protein expression across 160+ species, now used by thousands of biologists worldwide.",
    },
    {
      id: "4",
      company: "University Health Network (UHN)",
      role: "Health AI Researcher",
      period: "September 2024 - Present",
      description:
        "Developing MedRAX, a medical reasoning agent for chest X-rays that combines vision-language models with clinical tools, open-sourced with 700+ stars and 1M+ views.",
    },
  ],

  // Projects
  projects: [
    {
      id: "1",
      title: "UnsearchableTO",
      description:
        "Made the city of Toronto searchable by building an embedding search engine over 50,000+ Street View images using Cohere embeddings and FastAPI with a PostgreSQL (pgvector) database. Reached 35,000+ views and 15,000+ searches within 48 hours of launch.",
      technologies: ["Python", "Next.js", "FastAPI", "PostgreSQL", "Cohere API", "Vector DB"],
    },
    {
      id: "2",
      title: "SeaScript",
      description:
        "Created a Python game that turns MATLAB learning into an interactive underwater adventure. Built with Pygame, MongoDB, and MATLAB, and won Hack the 6ix 2024.",
      technologies: ["Python", "MATLAB", "MongoDB", "Pygame"],
    },
    {
      id: "3",
      title: "Vector Institute's Cyclops",
      description:
        "Contributed to Cyclops, a 100,000+ line open-source ML toolkit for healthcare research. Improved core TensorFlow and Scikit-learn pipelines and built new predictive modules for clinical datasets.",
      technologies: ["TensorFlow", "Scikit-learn", "Pandas"],
    },
    {
      id: "4",
      title: "Hugging Face Transformers",
      description:
        "Enhanced the Transformers library by integrating attention-hybrid Mamba2 models, improving sequence modeling performance for open-source NLP research.",
      technologies: ["Python", "Transformers", "NLP"],
    },
    {
      id: "5",
      title: "N-Queens",
      description:
        "Designed a new hill-climbing algorithm with adaptive randomness to escape local optima, achieving a 97%+ success rate. Benchmarked against simulated annealing and random search approaches.",
      technologies: ["Python", "Algorithms", "Optimization"],
    },
  ],

  // Publications
  publications: [
    {
      id: "1",
      title: "Your First Paper Title: A Novel Approach to Something Important",
      authors: "Your Name, Co-Author One, Co-Author Two",
      venue: "Nature Communications",
      year: "2024",
      link: "#",
    },
    {
      id: "2",
      title: "Another Significant Contribution to the Field",
      authors: "Your Name, Collaborator A, Collaborator B, Collaborator C",
      venue: "Conference on Important Topics (COIT)",
      year: "2023",
      link: "#",
    },
    {
      id: "3",
      title: "Research Paper on Innovative Methods",
      authors: "Lead Author, Your Name, Other Authors",
      venue: "Journal of Advanced Research",
      year: "2023",
    },
  ],

  // Blog Posts
  blog: [
    {
      id: "1",
      title: "Thoughts on AI Research and the Future",
      date: "November 2024",
      excerpt:
        "Exploring the intersection of artificial intelligence and your specific domain, and what it means for the future of research.",
      link: "#",
    },
    {
      id: "2",
      title: "Building in Public: Lessons Learned",
      date: "October 2024",
      excerpt:
        "Reflections on open-sourcing projects and the importance of community-driven development in modern research.",
      link: "#",
    },
    {
      id: "3",
      title: "The Path to Becoming a Researcher",
      date: "September 2024",
      excerpt:
        "My journey from student to researcher, including challenges faced and advice for those starting their own path.",
      link: "#",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
