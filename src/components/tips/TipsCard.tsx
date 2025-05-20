import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Droplet, Leaf, Sprout } from "lucide-react";
// import { useLoaderData } from "react-router-dom";

// export const tipsLoader = async () => {
//   const res = await fetch("/data/tipsData.json");
//   if (!res.ok) throw new Error("Failed to fetch tips data");
//   const data = await res.json();
//   return data.tips;
// }

const TipsCard = () => {
  const { t } = useTranslation();
  // const tipsData = t("tipsCard.content", { returnObjects: true }) as Array<any>;
  const tipsData = t("tipsCards.content", { returnObjects: true }) as {
    id: string;
    cardTitle: string;
    cardDescription: string;
    cardIcon: string;
  }[];
  // const tipsData = useLoaderData()

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "leaf":
        return <Leaf className="h-8 w-8 text-green" />;
      case "sprout":
        return <Sprout className="h-8 w-8 text-green" />;
      case "droplet":
        return <Droplet className="h-8 w-8 text-green" />;
      default:
        return <Leaf className="h-8 w-8 text-green" />;
    }
  };
  return (
    <section>
      <h3 className="text-2xl md:text-3xl">{t("")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {tipsData.map((tip) => (
          <Card
            key={tip.id}
            className="border-border h-full hover:border-t-green hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              {renderIcon(tip.cardIcon)}
              <CardTitle className="text-xl">{tip.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className=" text-base">
                {tip.cardDescription}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TipsCard;
