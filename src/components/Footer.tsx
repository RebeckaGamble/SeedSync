import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-slate-900 shadow-sm border-t border-slate-200 dark:border-slate-700">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <div className="py-4">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div className=" max-w-[300px]">
              <Link to="/" className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-xl text-slate-900 dark:text-slate-100">
                  {t("footer.logo")}
                </span>
              </Link>
              <p className="text-slate-900 dark:text-slate-100 text-[14px]">
                {t("footer.logoText")}
              </p>
            </div>
            <div className="flex sm:pl-4 sm:justify-center flex-wrap gap-4 w-full mx-auto items-center text-slate-900 dark:text-slate-100">
              <Link
                to="/tips"
                className="font-semibold tracking-wider text-[16px] text-slate-800 dark:text-slate-100 hover:text-green dark:hover:text-green transition-colors"
              >
                {t("footer.tips")}
              </Link>
              <p>link here</p>
              <p>link here</p>
              <p>link here</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-300 dark:border-slate-500"></div>
        <div className="text-slate-900 dark:text-slate-100 text-sm py-2 text-center sm:text-start ">
          &copy; {new Date().getFullYear()} <span>{t("footer.copy")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
