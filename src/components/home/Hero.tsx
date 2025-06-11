import { useTranslation } from "react-i18next";
import { useDialog } from "@/context/DialogContext";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { blue } from "@/assets";


const Hero = () => {
  const { t } = useTranslation();
  const { setIsLoginOpen } = useDialog();

  const { user } = useUserAuth();
  const isAdmin = (user as any)?.isAdmin;
  const navigate = useNavigate();

  const handleCTAClick = () => {
    if (!user) {
      setIsLoginOpen(true);
    } else {
      navigate(isAdmin ? "/admin" : "/profile");
    }
  };

  return (
    <section className="bg-primary relative text-white h-[calc(100vh-80px)] max-h-[850px] w-full">
      <div className="inset-0 h-full w-full">
        <img
          src={blue}
          alt="Flowers"
          className=" h-full w-full opacity-95 object-cover "
        />
      </div>
      <div className="absolute w-full top-[60px]  z-10 ">
        <div className="flex pt-[60px] justify-center sm:pl-[10%] md:pl-[15%] lg:pl-[20%] xl:pl-[25%] 2xl:pl-0  2xl:justify-end w-full max-w-[90rem] px-4 2xl:px-0 mx-auto ">
          <div className="max-w-[800px] text-center flex flex-col space-y-4 lg:space-y-6 xl:space-y-8 ">
            <h1 className="text-4xl md:text-5xl font-semibold text-shadow-sm text-shadow-slate-500">
              {t("hero.title")}

              <span className="text-shadow-sm text-shadow-primary-foreground/50 dark:text-shadow-slate-800">
                {t("hero.titleSpan")}{" "}
              </span>
            </h1>
            <p className="sm:text-[16px] lg:text-lg px-4 sm:px-0 max-w-[600px] mx-auto text-shadow-2xs text-shadow-slate-500">
              {t("hero.text")}
            </p>

            <div className="">
              <button
                onClick={handleCTAClick}
                className="w-fit border border-white inline-flex text-shadow-sm font-semibold text-shadow-black/80 rounded-full text-[18px] text-center group items-center justify-center py-2.5 px-8 bg-gradient-to-tr text-white from-[#393BB2] via-[#c8a2f7] to-[#3f1db9] hover:bg-gradient-to-tl "
                // className="w-fit px-6 py-2 font-medium border cursor-pointer border-white text-shadow-sm text-shadow-black/80 rounded-full text-[18px] text-center group  text-white bg-gradient-to-tr from-green-700 via-green-500/90 to-green-700 hover:bg-gradient-to-tl"
              >
                {!user ? t("hero.cta") : t("hero.dashboard")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
