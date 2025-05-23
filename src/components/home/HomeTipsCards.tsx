import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Tip } from "@/types/tip";
import { TipCard } from "../tips/TipCard";

const HomeTipsCards = () => {
  const { t } = useTranslation();

  // const tipsData = t("tipsCards.content", { returnObjects: true }) as {
  //   id: string;
  //   cardTitle: string;
  //   cardDescription: string;
  //   cardIcon: string;
  // }[];
  const tipsData = t("tipsCards.content", { returnObjects: true }) as Tip[];

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="w-full px-4 2xl:px-0 max-w-[90rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("tipsCards.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {tipsData.map((tip) => (
            <Link
              to={`/tips?highlight=${tip.id}`}
              key={tip.id}
              className="transition-transform hover:-translate-y-1"
            >
              <TipCard tip={tip} showFullContent={false} showTags={false} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTipsCards;
