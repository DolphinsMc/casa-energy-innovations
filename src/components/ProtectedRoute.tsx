
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({
  children,
  requireAdmin = false,
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
}) {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/login");
      } else if (requireAdmin && !isAdmin) {
        navigate("/");
      }
    }
  }, [user, isAdmin, isLoading, navigate, requireAdmin]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!user || (requireAdmin && !isAdmin)) {
    return null;
  }

  return <>{children}</>;
}
