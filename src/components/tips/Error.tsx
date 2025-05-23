import { useTranslation } from "react-i18next";
import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
}

const Error = () => {
  const { t } = useTranslation();
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();

  return (
    <div className="pt-[60px] h-full min-h-[calc(100vh-168px)] w-full bg-secondary">
      <div className="py-20 h-full space-y-4 flex flex-col items-center justify-center px-4 max-w-[90rem] mx-auto 2xl:px-0">
        <h3 className="text-secondary-foreground text-2xl">
          {t("error.title")}
        </h3>
        <p className="text-secondary-foreground italic">'{error.message}'</p>
        <button
          className="underline text-link hover:text-link-hover"
          onClick={() => navigate("/")}
        >
          {t("error.goHome")}
        </button>
      </div>
    </div>
  );
};

export default Error;
