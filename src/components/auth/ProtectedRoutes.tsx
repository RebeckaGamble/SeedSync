import { useUserAuth } from "@/context/UserAuthContext";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation();
  const { user, loading } = useUserAuth();

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-120px)] pt-[50%] text-center">
        <p>{t("profile.loading")}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
