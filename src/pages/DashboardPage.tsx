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
  Tag,
  Filter,
  ArrowUpDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
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

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1 space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 w-4 h-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 w-4 h-4" />
              Customers
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 w-4 h-4" />
              Blog Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 w-4 h-4" />
              Settings
            </Button>
          </div>

          {/* Content Area */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            {/* Actions Row */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button>
                  <Plus className="mr-2 w-4 h-4" />
                  New Post
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Filter className="mr-2 w-4 h-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Calendar className="mr-2 w-4 h-4" />
                      Date
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Tag className="mr-2 w-4 h-4" />
                      Category
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ArrowUpDown className="mr-2 w-4 h-4" />
                      Status
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((post) => (
                <motion.div
                  key={post}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-card rounded-lg border shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Blog Post Title {post}</h3>
                      <p className="text-sm text-muted-foreground">Last edited 2 days ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;