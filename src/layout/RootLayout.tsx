import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

  const isMainNav = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div>
      <ScrollToTop />
      <Navbar
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
        isMainNav={isMainNav}
      />
      <Outlet />
      <Footer isScrolled={isScrolled} isMainNav={isMainNav} />
    </div>
  );
};

export default RootLayout;
