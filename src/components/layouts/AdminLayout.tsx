
import { Suspense } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminFooter } from "@/components/admin/AdminFooter";
import { Loader2 } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="pt-16 pb-6"> {/* Added padding-top to account for fixed header */}
        <Suspense 
          fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
