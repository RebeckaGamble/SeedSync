import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { navLinkClass } from "@/styles/styles";
import { useUserAuth } from "@/context/UserAuthContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface MobileProps {
  isMenuOpen: boolean;
  toggleMobMenu: (isMenuOpen: boolean) => void;
  isMainNav: boolean;
  isScrolled: boolean;
}

const MobileNav: React.FC<MobileProps> = ({ isMenuOpen, toggleMobMenu, isMainNav, isScrolled }) => {
  const { t } = useTranslation();
  const { user } = useUserAuth();
  


  return (
    <Dialog open={isMenuOpen} onOpenChange={toggleMobMenu}>
      <DialogTrigger asChild>
        <Menu className="w-6 h-6 md:hidden" />
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent
        className={cn(
          "fixed top-0 left-0 bottom-0 w-1/2 min-w-[200px] z-[9999] bg-primary flex flex-col p-4 space-y-3",
          "transform transition-transform duration-300 ease-in-out",
          "data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full",
          "focus:outline-none focus-visible:outline focus-visible:outline-ring"
        )}
      >
        <DialogClose asChild className="absolute top-0 right-0">
          <X className="w-10 h-10 p-2 text-primary-foreground rounded-full hover:bg-accent" />
        </DialogClose>
        <DialogTitle className="sr-only">Menu</DialogTitle>
          {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-500 ease-in-out">
          <Leaf className="w-6 h-6 text-green-600" />
          <span className="font-semibold text-xl text-secondary-foreground ">{t("nav.logo")}</span>
        </Link>
        <DialogDescription className="sr-only">
          Mobile navigation menu
        </DialogDescription>
        <DialogClose asChild>
          <NavLink to="/tips" className={navLinkClass({isScrolled, isMainNav})}>
            {t("nav.tips")}
          </NavLink>
        </DialogClose>
        <DialogClose asChild>
          <NavLink to="/about" className={navLinkClass({isScrolled, isMainNav})}>
            {t("nav.about")}
          </NavLink>
        </DialogClose>

        {user?.isAdmin && (
          <DialogClose asChild>
            <NavLink to="/admin" className={navLinkClass({isScrolled, isMainNav})}>
              {t("nav.admin")}
            </NavLink>
          </DialogClose>
        )}
        {user && !user.isAdmin && (
          <>
            <DialogClose asChild>
              <NavLink to={"/profile"} className={navLinkClass({isScrolled, isMainNav})}>
                {t("nav.profile")}
              </NavLink>
            </DialogClose>
          </>
        )}
        <div className="border-t border:border text-secondary-foreground flex space-x-4 pl-3 pt-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNav;
