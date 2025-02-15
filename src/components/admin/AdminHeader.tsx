
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import {
  User,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AdminHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/admin" className="flex items-center gap-2">
              <Logo />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/admin" className="text-sm font-medium hover:text-primary">
                Dashboard
              </Link>
              <Link to="/admin/leads" className="text-sm font-medium hover:text-primary">
                Leads
              </Link>
              <Link to="/admin/content" className="text-sm font-medium hover:text-primary">
                Content
              </Link>
              <Link to="/admin/bookings" className="text-sm font-medium hover:text-primary">
                Bookings
              </Link>
              <Link to="/admin/chatbot" className="text-sm font-medium hover:text-primary">
                Chatbot
              </Link>
              <Link to="/admin/resources" className="text-sm font-medium hover:text-primary">
                Resources
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline">Admin</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
