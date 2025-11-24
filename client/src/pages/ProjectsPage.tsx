import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  const { projects } = portfolioData;

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
