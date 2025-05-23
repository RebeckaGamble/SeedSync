import { useTranslation } from "react-i18next";
// import { Button } from "../ui/button";
import { seedSm } from "@/assets";
import { useDialog } from "@/context/DialogContext";
import { useUserAuth } from "@/context/UserAuthContext";
import { Navigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const { setIsLoginOpen } = useDialog();

  const { user } = useUserAuth();
  const isAdmin = (user as any)?.isAdmin;

  const handleCTAClick = () => {
    if (!user) {
      setIsLoginOpen(true);
    } else {
      <Navigate to={isAdmin ? "/admin" : "/profile"} />;
    }
  };

  return (
    <section className="bg-primary text-primary-foreground pt-[60px] ">
      <div className="flex flex-col md:flex-row-reverse sm:px-4 md:justify-between md:gap-4 py-16 sm:py-20 w-full max-w-[90rem] 2xl:px-0 mx-auto">
        <div className="w-full h-full lg:max-w-[670px] flex flex-col text-center xl:px-0 space-y-4 md:space-y-8 pb-16 sm:pb-20 sm:pt-0 md:pt-20 md:justify-center md:w-1/2 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-semibold">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-green via-green/70 to-green bg-clip-text text-transparent">
              {t("hero.titleSpan")}
            </span>
          </h1>{" "}
          <p className="text-secondary-foreground lg:text-lg px-4 sm:px-0 max-w-[600px] mx-auto">
            {t("hero.text")}
          </p>
          <div className="w-fit mx-auto">
            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary text-xs font-medium backdrop-blur-3xl">
                <button
                  // onClick={() => setIsLoginOpen(true)}
                  onClick={handleCTAClick}
                  className="inline-flex rounded-full text-sm text-center group items-center w-full justify-center py-3 px-8 bg-gradient-to-tr text-white from-green via-green/80 to-green"
                >
                  {/* {t("hero.cta")} */}
                  {!user ? t("hero.cta") : t("hero.dashboard")}
                </button>
              </div>
            </span>
          </div>
          {/*          
          <Button
            onClick={() => setIsLoginOpen(true)}
            variant="default"
            size="lg"
            className="w-fit mx-auto md:mx-0 mt-2"
          >
            {t("hero.cta")}
          </Button> */}
        </div>
        <div className="w-full flex md:w-1/2 sm:rounded-xl max-w-[768px] max-h-[600px] xl:justify-start justify-center md:items-start overflow-hidden">
          <img
            src={seedSm}
            alt={t("hero.imageAlt")}
            className="w-auto h-full object-cover object-center sm:rounded-xl shadow-sm shadow-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
