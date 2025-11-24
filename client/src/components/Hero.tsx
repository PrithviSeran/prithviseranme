import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  onViewProjects?: () => void;
}

export function Hero({ 
  name = "Your Name",
  title = "Developer & Creator",
  description = "Building beautiful and functional web experiences. Passionate about clean code, intuitive design, and solving complex problems.",
  onViewProjects
}: HeroProps) {
  const handleClick = () => {
    if (onViewProjects) {
      onViewProjects();
    }
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" data-testid="text-hero-name">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6" data-testid="text-hero-title">
            {title}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl" data-testid="text-hero-description">
            {description}
          </p>
          <Button onClick={handleClick} size="lg" data-testid="button-view-projects">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
