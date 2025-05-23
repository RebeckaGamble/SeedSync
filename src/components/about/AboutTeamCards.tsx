import { team1, team3, team4 } from "../../assets";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useTranslation } from "react-i18next";

const AboutTeamCards = () => {
  const { t } = useTranslation();

  const teamData = t("about.team", { returnObjects: true }) as {
    id: string;
    image: string;
    name: string;
    does: string;
    text: string;
  }[];

  const imageMap: Record<string, string> = {
    team1,
    team3,
    team4,
  };

  return (
    <section className="bg-secondary py-10 md:py-16">
      <div className="mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-12 text-center">
          {t("about.subtitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[90rem] 2xl:px-0 mx-auto">
          {/* mappa ut kort här */}
          {teamData.map((member) => (
            <Card
              key={member.id}
              className="border-border border-b-4 hover:border-b-green h-full hover:shadow-md transition-shadow mx-auto max-w-[540px]"
            >
              <CardHeader className="flex flex-col items-center gap-4 pb-0 group">
                <div className="relative h-44 w-44 mb-2 rounded-full overflow-hidden bg-primary shadow-inner">
                  <img
                    src={imageMap[member.image]}
                    alt="team member portrait"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-300 scale-95 ease-in-out group-hover:scale-105"
                  />
                </div>
                <CardTitle className="text-xl self-start text-primary-foreground ">
                  {member.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="flex flex-col space-y-4 text-base">
                  <span className="text-green">{member.does}</span>
                  <span className="text-secondary-foreground">
                    {member.text}
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamCards;
