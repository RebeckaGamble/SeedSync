import { navLinkClass } from "@/styles/styles";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

type FooterProps = {
  isScrolled: boolean;
  isMainNav: boolean;
};

const Footer = ({ isScrolled, isMainNav} : FooterProps) => {
  const { t } = useTranslation();
    
    

  return (
    <footer className="bg-primary shadow-sm border-t border-border/80">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <div className="py-4">
          {/* Logo + text */}
          <div className="flex flex-row gap-6 sm:gap-0">
            <div className="max-w-[180px]">
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
            {/* Links */}
            <div className="flex flex-wrap w-full mx-auto gap-x-4 lg:gap-6 items-start sm:pt-6 sm:pl-4 sm:justify-center ">
              <ul className="flex gap-x-3 text-primary-foreground">
                <li>
                  <NavLink to="/tips" 
className={navLinkClass({ isScrolled, isMainNav })}                  >
                    {t("footer.tips")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" 
                  // className={navLinkClass}
                  className={navLinkClass({ isScrolled, isMainNav })}                  >

                  
                    {t("footer.about")}
                  </NavLink>{" "}
                </li>
              </ul>
              <div className="text-primary-foreground flex px-3 flex-col space-y-1">
                <p className="font-medium">{t("footer.contactTitle")}</p>
                <span className="text-sm">info@seedsync.se</span>
              </div>
            </div>
          </div>
        </div>
        {/* © section */}
        <div className="border-t border-border"></div>
        <div className="text-primary-foreground text-sm py-2 text-center sm:text-start ">
          &copy; {new Date().getFullYear()} <span>{t("footer.copy")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
