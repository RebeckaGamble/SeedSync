import { useTranslation } from "react-i18next";
// import { Button } from "../ui/button";
import { seedSm } from "@/assets";
import { useDialog } from "@/context/DialogContext";

const Hero = () => {
  const { t } = useTranslation();
  const { setIsLoginOpen } = useDialog();

  return (
    <section className="bg-primary text-primary-foreground pt-[60px] ">
      <div className="flex flex-col md:flex-row-reverse sm:px-4 md:gap-8 py-16 sm:py-20 w-full max-w-[90rem] 2xl:px-0 mx-auto">
        <div className="w-full flex flex-col mx-auto text-center md:text-start md:px-4 space-y-4 md:space-y-8 pb-16 sm:pb-20 sm:pt-0 md:pt-20 md:justify-center md:w-1/2 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-semibold">
            {t("hero.title")} <span className="bg-gradient-to-r from-green via-green/70 to-green bg-clip-text text-transparent">{t("hero.titleSpan")}</span>
          </h1>{" "}
          <p className="text-secondary-foreground px-4 sm:px-0 lg:max-w-[670px]">
            {t("hero.text")}
          </p>
          <div className="w-fit mx-auto">
            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary text-xs font-medium backdrop-blur-3xl">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="inline-flex rounded-full text-sm text-center group items-center w-full justify-center py-3 px-8 bg-gradient-to-tr text-white from-green via-green/80 to-green"
                >
                  {t("hero.cta")}
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
        <div className="w-full flex md:w-1/2 sm:rounded-xl  max-w-[768px] shadow-sm shadow-accent max-h-[600px] justify-center md:items-start overflow-hidden">
          <img
            src={seedSm}
            alt={t("hero.imageAlt")}
            className="w-full h-auto object-center object-cover sm:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
