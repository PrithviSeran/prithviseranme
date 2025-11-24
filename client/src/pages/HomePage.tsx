import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" data-testid="text-name">
          Your Name
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=yourid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-scholar"
          >
            <SiGooglescholar className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed mb-4" data-testid="text-bio-1">
          I'm a researcher at{" "}
          <a href="#" className="text-foreground underline hover:text-primary">
            Your Institute
          </a>{" "}
          and{" "}
          <a href="#" className="text-foreground underline hover:text-primary">
            Partner Organization
          </a>
          , working on interesting problems in your field of expertise.
        </p>

        <p className="text-base leading-relaxed mb-4" data-testid="text-bio-2">
          I lead the{" "}
          <a href="#" className="text-foreground underline hover:text-primary">
            Your Team
          </a>{" "}
          team, where we develop innovative solutions. The team has grown to over 20 researchers and engineers advancing the frontier of your field.
        </p>

        <p className="text-base leading-relaxed mb-8" data-testid="text-bio-3">
          My goal is to build{" "}
          <a href="#" className="text-foreground underline hover:text-primary">
            transformative technology
          </a>
          ; systems that push the boundaries of what's possible in your domain.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-12" data-testid="text-section-heading">
          On the Meaning of Life
        </h2>

        <p className="text-base leading-relaxed mb-4" data-testid="text-philosophy">
          I often contemplate the meaning of life. Currently, I believe life is meaningless if the chain of intelligence breaks at anytime in the future. Conversely, I've found purpose in increasing the breadth and depth of intelligence such that it, in billions of years down the road, it can give rise to new universes and keep the chain going. I'm not sure if, when, or how my perspective might change.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-12" data-testid="text-community-heading">
          Community
        </h2>

        <p className="text-base leading-relaxed" data-testid="text-community">
          Brief description of your involvement in the community, mentorship, or other activities you're passionate about.
        </p>
      </div>
    </div>
  );
}
