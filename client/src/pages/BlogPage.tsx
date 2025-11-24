import { portfolioData } from "@/data/portfolio";

export default function BlogPage() {
  const { blog } = portfolioData;

  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Blog
      </h1>

      <div className="space-y-8">
        {blog.map((post) => (
          <div key={post.id} className="pb-8 border-b last:border-b-0" data-testid={`blog-post-${post.id}`}>
            <div className="mb-2">
              <h2 className="text-xl font-semibold mb-1" data-testid={`text-title-${post.id}`}>
                {post.link ? (
                  <a 
                    href={post.link} 
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </a>
                ) : (
                  post.title
                )}
              </h2>
              <p className="text-sm text-muted-foreground" data-testid={`text-date-${post.id}`}>
                {post.date}
              </p>
            </div>
            <p className="text-base leading-relaxed" data-testid={`text-excerpt-${post.id}`}>
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
