import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";
import { BentoBox } from "@/components/BentoBox";
import { portfolioData } from "@/data/portfolio";

// Helper to convert markdown-style links to React elements
const parseMarkdownLinks = (text: string) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  
  return parts.map((part, index) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} className="text-foreground underline hover:text-primary">
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export default function HomePage() {
  const { personal, social, bio } = portfolioData;
  const introSection = bio.find((b) => b.type === "intro");
  const otherSections = bio.filter((b) => b.type === "section");

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" data-testid="text-name">
          {personal.name}
        </h1>
        <div className="flex items-center gap-4 mt-4 mb-8">
          <a
            href={`mailto:${personal.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={social.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-scholar"
          >
            <SiGooglescholar className="h-5 w-5" />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-github"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        
        <BentoBox />
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {introSection?.content.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed mb-4" data-testid={`text-bio-${index + 1}`}>
            {parseMarkdownLinks(paragraph)}
          </p>
        ))}

        {otherSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-2xl font-bold mb-4 mt-12" data-testid={`text-section-heading-${sectionIndex}`}>
              {section.title}
            </h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-base leading-relaxed mb-4" data-testid={`text-${section.title?.toLowerCase().replace(/\s+/g, '-')}-${pIndex}`}>
                {parseMarkdownLinks(paragraph)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
