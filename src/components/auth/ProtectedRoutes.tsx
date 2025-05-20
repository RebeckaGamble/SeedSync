import { useUserAuth } from "@/context/UserAuthContext";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";

type ProtectedRouteProps = {
  isAuthUser: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthUser }) => {
  const { user } = useUserAuth();
  const location = useLocation();
  const { id } = useParams();

  if (!isAuthUser) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  if (id && user?.uid !== id) {
    return <Navigate to={`/profile/${user?.uid}`} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
