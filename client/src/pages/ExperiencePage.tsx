interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "Arc Institute",
    role: "Bio AI Researcher",
    period: "May 2025 - Present",
    description: "Leading the BioReason team with Vector Institute to build reasoning foundation models that connect DNA, proteins, and disease pathways using reinforcement learning and multimodal biology."
  },
  {
    id: "2",
    company: "Cohere",
    role: "Machine Learning Engineer Intern",
    period: "April 2025 - August 2025",
    description: "Built large-scale synthetic data pipelines across 1,024 GPUs, boosting math reasoning in foundation models and integrating real-time monitoring with Kubernetes and Grafana."
  },
  {
    id: "3",
    company: "INSERM",
    role: "Machine Learning Researcher",
    period: "July 2023 - September 2024",
    description: "First-authored CodonTransformer (Nature Communications), a model that optimizes DNA sequences for protein expression across 160+ species, now used by thousands of biologists worldwide."
  },
  {
    id: "4",
    company: "University Health Network (UHN)",
    role: "Health AI Researcher",
    period: "September 2024 - Present",
    description: "Developing MedRAX, a medical reasoning agent for chest X-rays that combines vision-language models with clinical tools, open-sourced with 700+ stars and 1M+ views."
  }
];

export default function ExperiencePage() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Experience
      </h1>

      <div className="space-y-12">
        {experiences.map((exp) => (
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
