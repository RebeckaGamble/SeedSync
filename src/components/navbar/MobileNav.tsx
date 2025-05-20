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
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { navLinkClass } from "@/styles/styles";
import { useUserAuth } from "@/context/UserAuthContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface MobileProps {
  isMenuOpen: boolean;
  toggleMobMenu: (isMenuOpen: boolean) => void;
}

const MobileNav: React.FC<MobileProps> = ({ isMenuOpen, toggleMobMenu }) => {
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
          "fixed top-[60px] left-0 bottom-0 w-1/2 min-w-[200px] z-50 bg-primary flex flex-col p-4 space-y-4",
          "transform transition-transform duration-300 ease-in-out",
          "data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full",
          "focus:outline-none focus-visible:outline focus-visible:outline-ring"
        )}
      >
        <DialogClose asChild className="absolute top-2 right-2">
          <X className="w-10 h-10 p-2 text-primary-foreground rounded-full hover:bg-accent" />
        </DialogClose>
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Mobile navigation menu
        </DialogDescription>
        <DialogClose asChild>
          <NavLink to="/tips" className={navLinkClass}>
            {t("nav.tips")}
          </NavLink>
        </DialogClose>
        <DialogClose asChild>
          <NavLink to="/about" className={navLinkClass}>
            {t("nav.about")}
          </NavLink>
        </DialogClose>

        {user?.isAdmin && (
          <DialogClose asChild>
            <NavLink to="/admin" className={navLinkClass}>
              {t("nav.admin")}
            </NavLink>
          </DialogClose>
        )}
        {user && !user.isAdmin && (
          <>
            <DialogClose asChild>
              <NavLink to={`/profile/${user.uid}`} className={navLinkClass}>
                {t("nav.profile")}
              </NavLink>
            </DialogClose>
            <DialogClose asChild>
              <NavLink to={`/calendar/${user.uid}`} className={navLinkClass}>
                {t("nav.calendar")}
              </NavLink>
            </DialogClose>
          </>
        )}
        <div className="border-t border:border text-secondary-foreground flex space-x-4 pt-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNav;
