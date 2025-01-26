import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Package, Truck, Building, Phone, Mail, User, FileText, Home, Wrench, Shield, Award, HelpCircle } from "lucide-react";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ComponentType<any>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-foreground hover:text-primary px-4 py-2 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/building-materials" title="Building Materials" icon={Building}>
                      Quality construction supplies
                    </ListItem>
                    <ListItem href="/tools" title="Tools & Equipment" icon={Wrench}>
                      Professional grade tools
                    </ListItem>
                    <ListItem href="/delivery" title="Delivery Services" icon={Truck}>
                      Fast and reliable shipping
                    </ListItem>
                    <ListItem href="/packages" title="Supply Packages" icon={Package}>
                      Complete project solutions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/consultation" title="Expert Consultation" icon={HelpCircle}>
                      Professional guidance for your project
                    </ListItem>
                    <ListItem href="/warranty" title="Warranty" icon={Shield}>
                      Our guarantee to you
                    </ListItem>
                    <ListItem href="/support" title="Support" icon={Wrench}>
                      Technical assistance
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="text-white hover:text-secondary px-4 py-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-white hover:text-secondary px-4 py-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-foreground hover:text-primary hidden md:flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>1-800-555-0123</span>
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@example.com</span>
            </Link>
            <Link 
              to="/quote" 
              className="btn btn-primary"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
