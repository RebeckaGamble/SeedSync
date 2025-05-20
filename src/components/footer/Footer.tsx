import { navLinkClass } from "@/styles/styles";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary shadow-sm border-t border-border/80">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <div className="py-4">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div className=" max-w-[300px]">
              <Link to="/" className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green" />
                <span className="font-semibold text-xl text-primary-foreground">
                  {t("footer.logo")}
                </span>
              </Link>
              <p className="text-secondary-foreground pt-2 text-[14px]">
                {t("footer.logoText")}
              </p>
            </div>
            <ul className="flex sm:pl-4 sm:justify-center flex-wrap gap-4 w-full mx-auto items-center text-primary-foreground">
              <li>
                <NavLink to="/tips" className={navLinkClass}>
                  {t("footer.tips")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  {t("footer.about")}
                </NavLink>{" "}
              </li>
              <li>link here</li>
              <li>link here</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border"></div>
        <div className="text-primary-foreground text-sm py-2 text-center sm:text-start ">
          &copy; {new Date().getFullYear()} <span>{t("footer.copy")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
