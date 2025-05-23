import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary-foreground">404</h1>
        <p className="text-xl text-secondary-foreground mb-4">
          {t("error.notFoundText")}
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-link hover:text-link-hover underline"
        >
          {t("error.goHome")}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
