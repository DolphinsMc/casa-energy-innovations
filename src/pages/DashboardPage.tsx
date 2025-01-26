import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Bell,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MessageSquare,
  BarChart3,
  Home,
  Lightbulb,
  Wrench,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-secondary" />
            <h1 className="text-3xl font-bold text-white">Content Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-10 w-64 bg-muted/50"
              />
            </div>
            <Button variant="outline" size="icon" className="text-secondary">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="text-secondary">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-1 space-y-2 bg-muted/20 p-4 rounded-lg"
          >
            <Button variant="ghost" className="w-full justify-start text-white hover:text-secondary">
              <Home className="mr-2 w-4 h-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:text-secondary">
              <MessageSquare className="mr-2 w-4 h-4" />
              Chatbot
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:text-secondary">
              <FileText className="mr-2 w-4 h-4" />
              Blog Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:text-secondary">
              <BarChart3 className="mr-2 w-4 h-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:text-secondary">
              <Settings className="mr-2 w-4 h-4" />
              Settings
            </Button>
          </motion.div>

          {/* Content Area */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            <Tabs defaultValue="chatbot" className="w-full">
              <TabsList className="w-full bg-muted/20">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-muted/20 rounded-lg space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">Chatbot Settings</h2>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Enable Chatbot</h3>
                      <p className="text-sm text-muted-foreground">Show or hide the chatbot across all pages</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <label className="font-semibold text-white">Chatbot Name</label>
                    <Input placeholder="CASA Assistant" className="bg-muted/50" />
                  </div>
                </motion.div>
              </TabsContent>

              {/* Other tab contents would go here */}
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
