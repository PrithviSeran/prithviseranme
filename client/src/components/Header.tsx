import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-home"
          >
            Home
          </Link>
          <Link
            href="/experience"
            className={`text-sm font-medium transition-colors ${
              location === "/experience" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-experience"
          >
            Experience
          </Link>
          <Link
            href="/publications"
            className={`text-sm font-medium transition-colors ${
              location === "/publications" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-publications"
          >
            Publications
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors ${
              location === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            data-testid="link-projects"
          >
            Projects
          </Link>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
