import { Globe, Leaf, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LoginModal from "./login/LoginModal";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sv" : "en");
    console.log("toggle lang");
  };

  const openLogin = () => {
    setOpenModal(true);
    console.log("Open login modal");
  };

  return (
    <>
      <nav className="bg-white dark:bg-slate-900 shadow-sm">
        <div className="flex relative py-4 h-full justify-between w-full items-center max-w-[90rem] mx-auto px-4 2xl:px-0 text-slate-900 dark:text-slate-100">
          <div className="">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-500" />
              <span className="font-semibold text-xl">{t("nav.logo")}</span>
            </Link>
          </div>
          <div className="flex mx-auto gap-4">
           
            <Link
              to="/tips"
              className="font-semibold tracking-wider text-[16px] text-slate-800 dark:text-slate-100 hover:text-green dark:hover:text-green transition-colors"
            >
              {t("nav.tips")}
            </Link>
          </div>

          {/* <div className="absolute flex top-2 right-14 gap-x-4"> */}
          <div className="flex gap-x-4">
            {/* <LanguageToggle /> */}
            <button
              onClick={handleLanguageChange}
              aria-label="Toggle language"
              className="flex gap-x-1 items-center"
            >
              <Globe className="h-[16px] w-[16px]" />
              <span>{i18n.language === "en" ? "🇸🇪" : "🇬🇧"}</span>
            </button>
            <ThemeToggle />
          </div>
          {/* Open login Modal */}
          <div className="pl-4">
            <LogIn size={20} onClick={openLogin} className="cursor-pointer" />
          </div>
        </div>
      </nav>
      {/* Login Modal */}
      <LoginModal open={openModal} onOpenChange={setOpenModal} />
    </>
  );
};

export default Navbar;
