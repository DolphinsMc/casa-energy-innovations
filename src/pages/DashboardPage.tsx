import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Recent Inquiries</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-white/50 rounded-lg">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-600">Heat Pump Installation Query</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Projects Status</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-white/50 rounded-lg">
                  <p className="font-semibold">Project {i}</p>
                  <p className="text-sm text-gray-600">In Progress</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Analytics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/50 rounded-lg">
                <p className="font-semibold">Website Visits</p>
                <p className="text-2xl text-primary">1,234</p>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <p className="font-semibold">Conversion Rate</p>
                <p className="text-2xl text-primary">4.5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;