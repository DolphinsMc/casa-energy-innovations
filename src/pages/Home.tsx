
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";

// Lazy load components that are not immediately visible
const Projects = lazy(() => import("@/components/Projects"));
const Innovation = lazy(() => import("@/components/Innovation"));
const Contact = lazy(() => import("@/components/Contact"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        
        {/* Lazy loaded components */}
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Innovation />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
