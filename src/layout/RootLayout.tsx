import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const RootLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
