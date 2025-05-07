import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-slate-100">404</h1>
        <p className="text-xl text-slate-600 dark:text-slate-100 mb-4">
          Oops! Page not found
        </p>
        <a href="/" className="text-link hover:text-link-hover underline">
          Return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
