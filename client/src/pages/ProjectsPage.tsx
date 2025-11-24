import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "UnsearchableTO",
    description: "Made the city of Toronto searchable by building an embedding search engine over 50,000+ Street View images using Cohere embeddings and FastAPI with a PostgreSQL (pgvector) database. Reached 35,000+ views and 15,000+ searches within 48 hours of launch.",
    technologies: ["Python", "Next.js", "FastAPI", "PostgreSQL", "Cohere API", "Vector DB"]
  },
  {
    id: "2",
    title: "SeaScript",
    description: "Created a Python game that turns MATLAB learning into an interactive underwater adventure. Built with Pygame, MongoDB, and MATLAB, and won Hack the 6ix 2024.",
    technologies: ["Python", "MATLAB", "MongoDB", "Pygame"]
  },
  {
    id: "3",
    title: "Vector Institute's Cyclops",
    description: "Contributed to Cyclops, a 100,000+ line open-source ML toolkit for healthcare research. Improved core TensorFlow and Scikit-learn pipelines and built new predictive modules for clinical datasets.",
    technologies: ["TensorFlow", "Scikit-learn", "Pandas"]
  },
  {
    id: "4",
    title: "Hugging Face Transformers",
    description: "Enhanced the Transformers library by integrating attention-hybrid Mamba2 models, improving sequence modeling performance for open-source NLP research.",
    technologies: ["Python", "Transformers", "NLP"]
  },
  {
    id: "5",
    title: "N-Queens",
    description: "Designed a new hill-climbing algorithm with adaptive randomness to escape local optima, achieving a 97%+ success rate. Benchmarked against simulated annealing and random search approaches.",
    technologies: ["Python", "Algorithms", "Optimization"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Projects
      </h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="border-b pb-8 last:border-b-0" data-testid={`project-${project.id}`}>
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold" data-testid={`text-title-${project.id}`}>
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 ml-4">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-xs whitespace-nowrap"
                    data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${project.id}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-base leading-relaxed" data-testid={`text-description-${project.id}`}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
