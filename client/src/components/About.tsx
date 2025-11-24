import { Badge } from "@/components/ui/badge";

interface AboutProps {
  bio?: string[];
  skills?: string[];
}

const defaultBio = [
  "I'm a passionate developer with a love for creating elegant solutions to complex problems. With several years of experience in web development, I specialize in building modern, responsive applications that users love.",
  "My journey in tech started with a curiosity about how things work, which evolved into a career focused on crafting exceptional digital experiences. I believe in writing clean, maintainable code and staying current with the latest technologies.",
  "When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new frameworks and tools to expand my skill set."
];

const defaultSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Docker",
  "AWS",
  "Git",
  "Tailwind CSS"
];

export function About({ bio = defaultBio, skills = defaultSkills }: AboutProps) {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12" data-testid="text-about-heading">
          About
        </h2>
        
        <div className="max-w-3xl">
          <div className="space-y-4 mb-12">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-base text-muted-foreground" data-testid={`text-bio-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6" data-testid="text-skills-heading">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
