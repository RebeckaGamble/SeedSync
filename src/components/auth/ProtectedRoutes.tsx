import { useUserAuth } from "@/context/UserAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const { user } = useUserAuth();

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
