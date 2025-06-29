import { Link, NavLink, useNavigate } from "react-router-dom";
import { Leaf, LogIn, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDialog } from "@/context/DialogContext";
import { useUserAuth } from "@/context/UserAuthContext";
import { navLinkClass } from "@/styles/styles";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import MobileNav from "./MobileNav";
import UserForm from "../login/UserForm";
import "../../i18n/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

type NavbarProps = {
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  isMainNav: boolean;
};

const Navbar = ({ isScrolled, setIsScrolled, isMainNav}: NavbarProps ) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const { isLoginOpen, setIsLoginOpen } = useDialog();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // const location = useLocation();
  // const isMainNav = location.pathname === "/";

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
    if (isMobile || window.scrollY >= 20) {
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
      className={`fixed h-[60px] w-full z-[9998] transition-all duration-300 ease-in-out ${
        isScrolled && !isMenuOpen
          ? "shadow-lg bg-primary/80 backdrop-blur-lg text-secondary-foreground"
          : "bg-transparent text-nav"
      } ${isMainNav && !isScrolled ? "text-white" : ""}`}
    >
      <div className="flex relative h-full justify-between w-full items-center max-w-[90rem] mx-auto px-4 2xl:px-0">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          <Leaf className="w-6 h-6 text-green-600" />
          <span className="font-semibold text-xl">{t("nav.logo")}</span>
        </Link>
        {/* Desktop navlinks */}
        <ul className="hidden md:flex mx-auto gap-x-2">
          <li>
            <NavLink
              to="/tips"
              className={navLinkClass({ isScrolled, isMainNav })}
            >
              {t("nav.tips")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={navLinkClass({ isScrolled, isMainNav })}
            >
              {t("nav.about")}
            </NavLink>
          </li>
          {/* Show when admin is logged in */}
          {user?.isAdmin && (
            <li>
              <NavLink
                to="/admin"
                className={navLinkClass({ isScrolled, isMainNav })}
              >
                {t("nav.admin")}
              </NavLink>
            </li>
          )}
          {/* Show when user is logged in */}
          {user && !user.isAdmin && (
            <>
              <li>
                <NavLink
                  to="/profile"
                  className={navLinkClass({ isScrolled, isMainNav })}
                >
                  {t("nav.profile")}
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="flex gap-x-4 sm:gap-x-8 items-center">
          {/* Login/Create Account Button */}
          {user ? (
            <button
              onClick={handleLogout}
              aria-label={t("nav.logout")}
              className="flex items-center gap-1"
            >
              <span className="font-medium pl-3 py-2 tracking-wider text-[15px]  hover:text-red-600 transition-colors">
                {t("nav.logout")}
              </span>
              <LogOut className="w-5 h-5 text-red-600" />
            </button>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              aria-label={t("nav.loginBtnAriaLabel")}
              className="flex items-center gap-1"
            >
              <span className="font-medium pl-3 py-2 tracking-wider text-[15px] hover:text-green-600 transition-colors">
                {t("nav.login")}
              </span>
              <LogIn className="w-5 h-5 text-green" />
            </button>
          )}
          <div className="hidden md:flex gap-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          {/* Login/CreateAccount Dialog */}
          <UserForm
            isLoginOpen={isLoginOpen}
            toggleLoginDialog={toggleLoginDialog}
          />
          {/* Mobile menu */}
          <MobileNav isMainNav={false} isScrolled={false} isMenuOpen={isMenuOpen} toggleMobMenu={toggleMobMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
