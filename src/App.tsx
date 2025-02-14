
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/providers/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import DashboardPage from "./pages/DashboardPage";
import ElectricianPage from "./pages/ElectricianPage";
import PlumberPage from "./pages/PlumberPage";
import TilePage from "./pages/TilePage";
import BathroomPage from "./pages/BathroomPage";
import LoginPage from "./pages/LoginPage";
import { ChatBot } from "./components/ChatBot";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireAdmin>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/electrician" element={<ElectricianPage />} />
          <Route path="/plumber" element={<PlumberPage />} />
          <Route path="/tile" element={<TilePage />} />
          <Route path="/bathroom" element={<BathroomPage />} />
        </Routes>
        <ChatBot />
      </AuthProvider>
    </Router>
  );
}

export default App;
