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
import { Home, Settings, Phone, FileText, Users, Lightbulb, Shield, Award, BarChart } from "lucide-react";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
            {props.icon && <props.icon className="w-4 h-4" />}
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/electrician" title="Electrical Services" icon={Lightbulb}>
                      Professional electrical installations and repairs
                    </ListItem>
                    <ListItem href="/plumber" title="Plumbing Services" icon={Settings}>
                      Expert plumbing solutions for your home
                    </ListItem>
                    <ListItem href="/tile" title="Tile Installation" icon={Home}>
                      Beautiful tile work for any space
                    </ListItem>
                    <ListItem href="/bathroom" title="Bathroom Remodeling" icon={Settings}>
                      Complete bathroom renovation services
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/about" title="About Us" icon={Users}>
                      Learn about our mission and values
                    </ListItem>
                    <ListItem href="/blog" title="Blog" icon={FileText}>
                      Latest news and industry insights
                    </ListItem>
                    <ListItem href="/contact" title="Contact" icon={Phone}>
                      Get in touch with our team
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/case-studies" title="Case Studies" icon={BarChart}>
                      Explore our success stories
                    </ListItem>
                    <ListItem href="/certifications" title="Certifications" icon={Award}>
                      Our professional qualifications
                    </ListItem>
                    <ListItem href="/warranty" title="Warranty" icon={Shield}>
                      Our guarantee to you
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link 
            to="/contact" 
            className="bg-secondary text-primary px-4 py-2 rounded-md font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};