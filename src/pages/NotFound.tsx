import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate()

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
          Oops! Page not found
        </p>
        <button onClick={()=> navigate('/')} className="text-link hover:text-link-hover underline">Go to homepage</button>
        {/* <a href="/" className="text-link hover:text-link-hover underline">
          Return to home
        </a> */}
      </div>
    </div>
  );
};

export default NotFound;
