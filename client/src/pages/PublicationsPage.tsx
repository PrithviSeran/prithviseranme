import { portfolioData } from "@/data/portfolio";

export default function PublicationsPage() {
  const { publications } = portfolioData;

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Publications
      </h1>

      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.id} className="pb-6 border-b last:border-b-0" data-testid={`publication-${pub.id}`}>
            <h2 className="text-lg font-semibold mb-2" data-testid={`text-title-${pub.id}`}>
              {pub.link ? (
                <a 
                  href={pub.link} 
                  className="hover:text-primary transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h2>
            <p className="text-sm text-muted-foreground mb-1" data-testid={`text-authors-${pub.id}`}>
              {pub.authors}
            </p>
            <p className="text-sm text-muted-foreground" data-testid={`text-venue-${pub.id}`}>
              {pub.venue}, {pub.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
