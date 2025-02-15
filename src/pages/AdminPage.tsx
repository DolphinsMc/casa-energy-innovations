
import AdminLayout from "@/components/layouts/AdminLayout";
import AdminDashboard from "@/components/admin/AdminDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

const AdminPage = () => {
  return (
    <ProtectedRoute requireAdmin>
      <AdminLayout>
        <AdminDashboard />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminPage;
