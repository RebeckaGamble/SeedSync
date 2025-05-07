import { Globe, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import "../i18n/i18n"
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sv" : "en");
    console.log('toggle lang')
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm">
      <div className="flex relative py-4 h-full justify-between w-full max-w-[90rem] mx-auto px-4 2xl:px-0 text-slate-900 dark:text-slate-100">
        <div className="">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-500" />
            <span className="font-semibold text-xl">SeedSync</span>
          </Link>
        </div>
        <div className="mx-auto">{t("nav.testText")}</div>
        <div className="absolute flex top-2 right-2 gap-x-4">
          <LanguageToggle />
          <button onClick={handleLanguageChange} aria-label="Toggle language" className="flex gap-x-1 items-center">
            <Globe className="h-[20px] w-[20px]" />
            <span>{i18n.language === "en" ? "🇸🇪" : "🇬🇧"}</span> 
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
