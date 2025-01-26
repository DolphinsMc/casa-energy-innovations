import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogDialog } from "@/components/BlogDialog";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
}

// Generate 100 blog posts
const generateBlogPosts = (): BlogPost[] => {
  const categories = ["Heat Pumps", "Solar Energy", "Energy Efficiency", "Green Technology", "Sustainability"];
  
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `${i % 2 === 0 ? "The Future of" : "Innovations in"} ${categories[i % categories.length]}`,
    description: `Discover the latest developments and insights in ${categories[i % categories.length].toLowerCase()} technology and how it's shaping sustainable living.`,
    content: `
      <h2>Introduction</h2>
      <p>The renewable energy sector continues to evolve rapidly, bringing new innovations and opportunities for sustainable living. This article explores the latest developments in ${categories[i % categories.length].toLowerCase()}.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Reduced carbon footprint</li>
        <li>Lower energy costs</li>
        <li>Improved efficiency</li>
        <li>Government incentives</li>
      </ul>
      
      <h2>Technology Overview</h2>
      <p>Modern ${categories[i % categories.length].toLowerCase()} systems utilize advanced technology to maximize efficiency and minimize environmental impact. These systems are designed to provide reliable, sustainable energy solutions for homes and businesses.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successful implementation requires careful planning and consideration of various factors including:</p>
      <ul>
        <li>Site assessment</li>
        <li>System sizing</li>
        <li>Installation requirements</li>
        <li>Maintenance planning</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>As technology continues to advance, we expect to see even more improvements in efficiency and functionality. Stay tuned for more updates on these exciting developments.</p>
    `,
    date: new Date(2024, i % 12, (i % 28) + 1).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: "RudyBtz",
    category: categories[i % categories.length],
    readTime: `${(i % 3) + 4} min read`,
    image: "/placeholder.svg" // Using placeholder image
  }));
};

const blogPosts = generateBlogPosts();

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Latest Insights</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and developments in renewable energy, heat pump technology, and sustainable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index % 9 * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-lg border-primary/10 hover:border-primary/20 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-secondary transition-colors duration-300"
                      onClick={() => {
                        setSelectedPost(post);
                        setDialogOpen(true);
                      }}
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BlogDialog
        post={selectedPost}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
      <Footer />
    </div>
  );
};

export default BlogPage;