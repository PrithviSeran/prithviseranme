import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const handleClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-5xl mx-auto px-6">
        <div className="font-semibold text-lg" data-testid="text-site-name">
          Your Name
        </div>
        
        <nav className="flex items-center gap-6">
          <button
            onClick={() => handleClick("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-about"
          >
            About
          </button>
          <button
            onClick={() => handleClick("projects")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-projects"
          >
            Projects
          </button>
          <button
            onClick={() => handleClick("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
