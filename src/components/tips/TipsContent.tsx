import { useTranslation } from "react-i18next";
import TipsCard from "./TipsCard";
import { Search } from "lucide-react";

const TipsContent = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold md:text-4xl mb-4">{t("tips.title")}</h1>
      <p className="text-[16px] max-w-[35rem] lg:text-[18px] lg:leading-7">
        {t("tips.text")}
      </p>
      <div className="mt-4 max-w-[600px] shadow-sm border flex flex-row justify-between items-center rounded-md py-1.5 border-border px-2">
        search coming here
        <Search size={16} />
      </div>
      <div className="">
        <h1>Filter by category</h1>
        <div>
            
        </div>
      </div>
    
      <TipsCard />
    </div>
  );
};

export default TipsContent;
