
import { Logo } from "@/components/Logo";

export const AdminFooter = () => {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-sm text-gray-500">
              Admin Panel
            </span>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CASA Contracts. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="/terms" 
              className="text-sm text-gray-500 hover:text-primary"
            >
              Terms
            </a>
            <a 
              href="/privacy" 
              className="text-sm text-gray-500 hover:text-primary"
            >
              Privacy
            </a>
            <a 
              href="/help" 
              className="text-sm text-gray-500 hover:text-primary"
            >
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
