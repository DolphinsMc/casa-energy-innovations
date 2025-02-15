
import { useState } from "react";
import {
  LayoutDashboard,
  Settings,
  FileText,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Download,
  Palette,
  FileCode,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LeadsManagement from "./leads/LeadsManagement";
import BookingsManagement from "./bookings/BookingsManagement";
import TemplatesManagement from "./templates/TemplatesManagement";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full bg-white">
          <TabsTrigger value="overview" className="flex-1">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="leads" className="flex-1">
            <Users className="w-4 h-4 mr-2" />
            Leads
          </TabsTrigger>
          <TabsTrigger value="bookings" className="flex-1">
            <Calendar className="w-4 h-4 mr-2" />
            Bookings
          </TabsTrigger>
          <TabsTrigger value="content" className="flex-1">
            <FileText className="w-4 h-4 mr-2" />
            Content
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex-1">
            <FileCode className="w-4 h-4 mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="chatbot" className="flex-1">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chatbot
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="theme" className="flex-1">
            <Palette className="w-4 h-4 mr-2" />
            Theme
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Bookings Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0%</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leads">
            <LeadsManagement />
          </TabsContent>

          <TabsContent value="bookings">
            <BookingsManagement />
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Content management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <TemplatesManagement />
          </TabsContent>

          <TabsContent value="chatbot">
            <Card>
              <CardHeader>
                <CardTitle>Chatbot Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Chatbot configuration interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Resource management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="theme">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Theme customization interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Settings interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
