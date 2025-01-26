import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { ChatBot } from "./components/ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/electrician" element={<ElectricianPage />} />
        <Route path="/plumber" element={<PlumberPage />} />
        <Route path="/tile" element={<TilePage />} />
        <Route path="/bathroom" element={<BathroomPage />} />
      </Routes>
      <ChatBot />
    </Router>
  );
}

export default App;