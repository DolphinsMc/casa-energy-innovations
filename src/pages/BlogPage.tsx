import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card p-6">
              <h2 className="text-xl font-bold text-primary mb-2">Latest Heat Pump Technology</h2>
              <p className="text-gray-600 mb-4">Discover the newest innovations in heat pump systems...</p>
              <button className="text-secondary font-semibold hover:underline">Read more →</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;