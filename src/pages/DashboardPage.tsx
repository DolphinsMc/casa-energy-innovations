
import { lazy } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import {
  LayoutDashboard,
  Settings,
  FileText,
  Bell,
  Search,
  MessageSquare,
  BarChart3,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsOverview } from "@/components/admin/dashboard/AnalyticsOverview";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <AnalyticsOverview />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <aside className="col-span-1 space-y-2 bg-white p-4 rounded-lg shadow-sm">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 w-4 h-4" />
                Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 w-4 h-4" />
                Chatbot
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 w-4 h-4" />
                Blog Posts
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="mr-2 w-4 h-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 w-4 h-4" />
                Settings
              </Button>
            </aside>

            <main className="col-span-1 md:col-span-3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Activity feed coming soon...
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Performance metrics coming soon...
                  </p>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
