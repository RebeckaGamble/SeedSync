import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Leaf, Sprout, Droplet } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomeTipsCards = () => {
  const { t } = useTranslation();

  const tipsData = t("tipsCards.content", { returnObjects: true }) as {
    id: string;
    cardTitle: string;
    cardDescription: string;
    cardIcon: string;
  }[];

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
    <section className="py-16 sm:py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("tipsCards.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {tipsData.map((tip) => (
            <Link
              to="/tips"
              key={tip.id}
              className="transition-transform hover:-translate-y-1"
            >
              <Card className="border-border h-full hover:border-t-green hover:shadow-md transition-shadow">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTipsCards;
