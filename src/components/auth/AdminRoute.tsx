import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserAuth } from "@/context/UserAuthContext";
import AdminNav from "../admin/AdminNav";

const AdminRoute: React.FC = () => {
  const { user } = useUserAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!(user as any)?.isAdmin) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="bg-secondary text-secondary-foreground min-h-[calc(100vh-180px)]">
      <AdminNav />
      <div className=" pt-[120px] max-w-[90rem] mx-auto px-4 2xl:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminRoute;
