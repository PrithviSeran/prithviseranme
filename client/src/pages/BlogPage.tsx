interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Thoughts on AI Research and the Future",
    date: "November 2024",
    excerpt: "Exploring the intersection of artificial intelligence and your specific domain, and what it means for the future of research.",
    link: "#"
  },
  {
    id: "2",
    title: "Building in Public: Lessons Learned",
    date: "October 2024",
    excerpt: "Reflections on open-sourcing projects and the importance of community-driven development in modern research.",
    link: "#"
  },
  {
    id: "3",
    title: "The Path to Becoming a Researcher",
    date: "September 2024",
    excerpt: "My journey from student to researcher, including challenges faced and advice for those starting their own path.",
    link: "#"
  }
];

export default function BlogPage() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-12" data-testid="text-page-title">
        Blog
      </h1>

      <div className="space-y-8">
        {blogPosts.map((post) => (
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
