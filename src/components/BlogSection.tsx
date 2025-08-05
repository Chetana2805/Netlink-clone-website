import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "Solving Production Downtime with Citizen Development and Open-Source Low-Code Platforms",
      excerpt: "Production downtime is one of the most critical challenges in manufacturing. Every minute a machine...",
      date: "January 20, 2025",
      category: "Low Code",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    },
    {
      title: "The Future of Paperless Governance in BPO | Taking Inspiration from Apple's and DigiLocker's Digital Identity Solutions",
      excerpt: "Most technology managers believe that BPO is a stagnant industry. However, there are examples in...",
      date: "January 20, 2025", 
      category: "BPO, Document Imaging",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop"
    },
    {
      title: "Building a Modern Data Pipeline for Analytics Using Informatica and Snowflake",
      excerpt: "Organizations today are drowning in data — from sales transactions and customer interactions to social media posts...",
      date: "January 20, 2025",
      category: "Data Services, Informatica, Snowflake", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wide mb-4 block">
            Blogs & Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Technology and Business Updates</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg leading-tight mb-2">
                    {article.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span>{article.date}</span>
                  </div>
                  <span>{article.category}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <Button variant="link" className="p-0 h-auto text-primary group-hover:text-primary-hover">
                  CONTINUE READING →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;