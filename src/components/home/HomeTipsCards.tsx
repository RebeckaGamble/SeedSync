import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Leaf, Sprout, Droplet } from "lucide-react";
import { useTranslation } from "react-i18next";

// export interface GardenTask {
//   id: string;
//   title: string;
//   description: string;
//   icon: "leaf" | "sprout" | "droplet";
//   link: string;
// }

const HomeTipsCards = () => {
  const { t } = useTranslation();

  const tipsData = t("homeCards.content", { returnObjects: true }) as {
    id: string;
    cardTitle: string;
    cardDescription: string;
    cardIcon: string;
  }[];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "leaf":
        return <Leaf className="h-8 w-8 text-green-500" />;
      case "sprout":
        return <Sprout className="h-8 w-8 text-green-500" />;
      case "droplet":
        return <Droplet className="h-8 w-8 text-green-500" />;
      default:
        return <Leaf className="h-8 w-8 text-green-500" />;
    }
  };

  return (
    <section className="py-16 px-4 bg-green-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          {t("homeCards.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tipsData.map((tip) => (
            <Link
              to="/tips"
              key={tip.id}
              className="transition-transform hover:-translate-y-1"
            >
              <Card className="border-slate-200 dark:border-slate-700 h-full hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {renderIcon(tip.cardIcon)}
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-100">
                    {tip.cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
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
