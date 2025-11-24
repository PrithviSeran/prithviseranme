import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A modern web application built with React and TypeScript, featuring real-time updates and a clean, intuitive interface.",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "2",
    title: "Project Two",
    description: "Full-stack application with Node.js backend and PostgreSQL database, handling complex data relationships efficiently.",
    technologies: ["Node.js", "PostgreSQL", "Express"],
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Project Three",
    description: "Mobile-first responsive design system implementing modern UI/UX principles and accessibility standards.",
    technologies: ["CSS", "JavaScript", "Figma"],
    liveUrl: "#"
  }
];

export function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12" data-testid="text-projects-heading">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover-elevate" data-testid={`card-project-${project.id}`}>
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`text-project-description-${project.id}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    data-testid={`link-live-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
