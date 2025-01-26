import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">No recent activity</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <p className="text-gray-600">Loading statistics...</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              New Project
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;