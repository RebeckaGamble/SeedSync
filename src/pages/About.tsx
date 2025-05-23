import { useTranslation } from "react-i18next";
import { pots } from "../assets";
import AboutTeamCards from "@/components/about/AboutTeamCards";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[60px] bg-primary">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0 py-10 md:py-16 text-primary-foreground">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-10">
          <div className="md:w-1/2 md:justify-center flex flex-col">
            <h1 className="text-3xl font-bold md:text-4xl mb-4">
              {t("about.title")}
            </h1>
            <p className="text-[16px] max-w-[35rem] lg:text-[18px] lg:leading-7">
              {t("about.text")}
            </p>
          </div>
          <div className="w-full md:w-1/2 md:justify-end flex md:max-h-[400px] mx-auto">
            <img
              src={pots}
              alt="Couple created with pots"
              className="bg-cover bg-center h-auto rounded-lg shadow-sm w-full overflow-hidden"
            />
          </div>
        </div>
      </div>
      <AboutTeamCards />
      <div className="w-full max-w-[90rem] py-10 md:py-16 px-4 2xl:px-0 mx-auto text-primary-foreground">
        <div className="mx-auto max-w-4xl ">
          <blockquote className="text-center space-y-1">
            {" "}
            <p className="text-xl max-w-[580px] mx-auto md:text-2xl font-light italic">
              {t("about.quote")}
            </p>
            <span className="text-green">{t("about.quoteAuthor")}</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
