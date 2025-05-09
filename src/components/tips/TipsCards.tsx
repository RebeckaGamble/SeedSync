import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const TipsCards = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h3 className="text-2xl md:text-3xl">{t("")}</h3>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription></CardDescription>
          <CardFooter></CardFooter>
        </CardContent>
      </Card>
    </section>
  );
};

export default TipsCards;
