import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Tip } from "@/types/tip";
import { TipCard } from "../tips/TipCard";

const HomeTipsCards = () => {
  const { t } = useTranslation();

  const tipsData = t("tipsCards.content", { returnObjects: true }) as Tip[];

  return (
    <section className="-mt-10 relative ">
      <div className="pb-16 sm:pb-10">
        <div className="w-full  px-4 2xl:px-0 max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 ">
            {tipsData.map((tip) => (
              <Link
                to={`/tips?highlight=${tip.id}`}
                key={tip.id}
                className="transition-transform hover:-translate-y-1"
              >
                <div className="w-full h-full justify-center flex">
                  <TipCard
                    className="dark:opacity-90 hover:border-b-green hover:border-b-3"
                    tip={tip}
                    showFullContent={false}
                    showTags={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTipsCards;
