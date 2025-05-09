import { useTranslation } from "react-i18next";
import { seedSm } from "../../assets";
import { Button } from "../ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary text-primary-foreground pt-[60px] ">
      <div className="flex flex-col md:flex-row-reverse sm:px-4 md:gap-8 sm:py-16 w-full max-w-[90rem] 2xl:px-0 mx-auto">
        <div className="w-full text-center md:text-start py-16 sm:pt-0 md:justify-center flex flex-col space-y-4 md:w-1/2 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl">{t("hero.title")}</h1>{" "}
          <p className="text-secondary-foreground">{t("hero.text")}</p>
          <Button variant="default" size="lg" className="w-fit mx-auto md:mx-0">
            {t("hero.cta")}
          </Button>
        </div>
        <div className="w-full sm:rounded-xl overflow-hidden md:w-1/2 max-w-[768px] max-h-[600px] md:items-start">
          <img
            src={seedSm}
            alt="Flowers"
            className="w-auto h-full object-center object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
