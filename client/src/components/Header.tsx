import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-6">
          <Link href="/">
            <a
              className={`text-sm font-medium transition-colors ${
                location === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="link-home"
            >
              Home
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-sm font-medium transition-colors ${
                location === "/experience" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="link-experience"
            >
              Experience
            </a>
          </Link>
          <Link href="/publications">
            <a
              className={`text-sm font-medium transition-colors ${
                location === "/publications" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="link-publications"
            >
              Publications
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-sm font-medium transition-colors ${
                location === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="link-projects"
            >
              Projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`text-sm font-medium transition-colors ${
                location === "/blog" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid="link-blog"
            >
              Blog
            </a>
          </Link>
        </nav>
        
        <ThemeToggle />
      </div>
    </header>
  );
}
