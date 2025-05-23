import { Link, NavLink, useNavigate } from "react-router-dom";
import { Leaf, LogIn, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDialog } from "@/context/DialogContext";
import { useUserAuth } from "@/context/UserAuthContext";
import { navLinkClass } from "@/styles/styles";
// import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import MobileNav from "./MobileNav";
import UserForm from "../login/UserForm";
import "../../i18n/i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoginOpen, setIsLoginOpen } = useDialog();
  const navigate = useNavigate();

  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Successfully logged out");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleMobMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  // Scroll/resize event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`bg-primary fixed w-full z-[9999] transition-shadow duration-300 ${
        isScrolled && !isMenuOpen ? "shadow-lg" : ""
      }`}
    >
      <div className="flex relative py-4 h-full justify-between w-full items-center max-w-[90rem] mx-auto px-4 2xl:px-0 text-primary-foreground">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-green" />
          <span className="font-semibold text-xl">{t("nav.logo")}</span>
        </Link>
        {/* Desktop navlinks */}
        <ul className="hidden md:flex mx-auto gap-x-2">
          <li>
            <NavLink to="/tips" className={navLinkClass}>
              {t("nav.tips")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              {t("nav.about")}
            </NavLink>
          </li>
          {/* Show when admin is logged in */}
          {user?.isAdmin && (
            <li>
              <NavLink to="/admin" className={navLinkClass}>
                {t("nav.admin")}
              </NavLink>
            </li>
          )}
                    {/* Show when user is logged in */}

          {user && !user.isAdmin && (
            <>
              <li>
                <NavLink to="/profile" className={navLinkClass}>
                  {t("nav.profile")}
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="flex gap-x-4 items-center">
          <div className="hidden md:flex gap-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {/* Login/Create Account Button */}
          {user ? (
            <button
              onClick={handleLogout}
              aria-label={t("nav.logout")}
              className="flex items-center gap-1"
            >
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="">{t("nav.logout")}</span>
            </button>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              aria-label={t("nav.loginBtnAriaLabel")}
              className="flex items-center gap-1"
            >
              <LogIn className="w-5 h-5 text-green" />
              <span className="sr-only">{t("nav.login")}</span>
            </button>
          )}
          {/* Login/CreateAccount Dialog */}
          <UserForm
            isLoginOpen={isLoginOpen}
            toggleLoginDialog={toggleLoginDialog}
          />
          {/* Mobile menu */}
          <MobileNav isMenuOpen={isMenuOpen} toggleMobMenu={toggleMobMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
