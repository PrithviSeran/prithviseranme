import { Mail, Github, Linkedin, Twitter } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter";
}

interface ContactProps {
  email?: string;
  socialLinks?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" }
];

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter
};

export function Contact({ 
  email = "your.email@example.com",
  socialLinks = defaultSocialLinks 
}: ContactProps) {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12" data-testid="text-contact-heading">
          Get in Touch
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-base text-muted-foreground mb-8" data-testid="text-contact-description">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <div className="flex items-center gap-2 mb-8">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a 
              href={`mailto:${email}`}
              className="text-base hover:text-primary transition-colors"
              data-testid="link-email"
            >
              {email}
            </a>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-social-${link.icon}`}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
