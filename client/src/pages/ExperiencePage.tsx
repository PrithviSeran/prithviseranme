import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Experience
      </h1>

      <div className="space-y-12">
        {experience.map((exp) => (
          <div key={exp.id} className="border-b pb-8 last:border-b-0" data-testid={`experience-${exp.id}`}>
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-2xl font-bold" data-testid={`text-company-${exp.id}`}>
                {exp.company}
              </h2>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4" data-testid={`text-period-${exp.id}`}>
                {exp.period}
              </span>
            </div>
            <p className="text-base italic text-muted-foreground mb-3" data-testid={`text-role-${exp.id}`}>
              {exp.role}
            </p>
            <p className="text-base leading-relaxed" data-testid={`text-description-${exp.id}`}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
