import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Heat Pump Technology",
    description: "Explore the latest innovations in heat pump systems and how they're revolutionizing home heating efficiency.",
    date: "March 15, 2024",
    author: "John Smith",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Government Grants for Renewable Energy",
    description: "Learn about the new £7,500 government grant for central heating systems and how to qualify.",
    date: "March 12, 2024",
    author: "Sarah Johnson",
    category: "Grants",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Sustainable Home Heating Solutions",
    description: "Discover how air source heat pumps can reduce your carbon footprint and energy bills.",
    date: "March 10, 2024",
    author: "Mike Williams",
    category: "Sustainability",
    readTime: "6 min read"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:shadow-2xl transition-all duration-300 overflow-hidden group">
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
      <Footer />
    </div>
  );
};

export default BlogPage;