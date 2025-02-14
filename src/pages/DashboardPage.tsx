import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Suspense, lazy } from "react";

const BlogPostEditor = lazy(() => import("@/components/BlogPostEditor"));

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Content Dashboard</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 space-y-2 bg-white p-4 rounded-lg shadow-sm">
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
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6">
            <Tabs defaultValue="chatbot" className="w-full">
              <TabsList className="w-full bg-white">
                <TabsTrigger value="content" className="flex-1">
                  <FileText className="w-4 h-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="chatbot" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chatbot
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex-1">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chatbot">
                <div className="p-6 bg-white rounded-lg shadow-sm space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Chatbot Settings</h2>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Enable Chatbot</h3>
                      <p className="text-sm text-muted-foreground">Show or hide the chatbot across all pages</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold">Chatbot Name</label>
                    <Input placeholder="CASA Assistant" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
