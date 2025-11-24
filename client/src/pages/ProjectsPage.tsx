import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Projects
      </h1>
  
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-b pb-8 last:border-b-0"
            data-testid={`project-${project.id}`}
          >
            {/* Title + Tech Stack */}
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
  
            {/* Description */}
            <p
              className="text-base leading-relaxed mb-3"
              data-testid={`text-description-${project.id}`}
            >
              {project.description}
            </p>
  
            {/* Links (GitHub + Live) */}
            <div className="flex gap-4 mt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid={`link-github-${project.id}`}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
  
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  data-testid={`link-live-${project.id}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}
