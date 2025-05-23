import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import CreateTipsForm from "../forms/CreateTipsForm";
import Form from "../forms/Form";
import { useState } from "react";
import type { Tip } from "@/types/tip";

const HandleTips = () => {
  const { t } = useTranslation();

  // const tipsData = t("tipsCards.content", { returnObjects: true }) as {
  //   id: string;
  //   cardTitle: string;
  //   cardDescription: string;
  //   cardIcon: string;
  // }[];
  const tipsData = t("tipsCards.content", { returnObjects: true }) as Tip[];


  // const tips = t("homeCards.content", { returnObjects: true }) as Array<any>;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex flex-col pb-10">
      <h3 className="text-2xl py-10">Current tips</h3>
      <div className="flex flex-row gap-4 mb-6 items-center">
        Add new tips:
        <Button onClick={toggleForm} variant="default" size="sm">
          Create new
        </Button>
      </div>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm}>
        <CreateTipsForm />
      </Form>
      {/* Current tips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tipsData.map((tip: any) => (
          <form
            action=""
            key={tip.id}
            className="flex flex-col w-full max-w-[460px] space-y-4 rounded-md bg-primary text-primary-foreground border border-border p-4 shadow-sm"
          >
            <p>Card: {tip.id}</p>
            <div className="flex flex-col space-y-2">
              <Label>Current title</Label>
              <Input placeholder={tip.cardTitle} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Current description</Label>
              <Input placeholder={tip.cardDescription} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Current icon</Label>
              <Input placeholder={tip.cardIcon} />
            </div>
            <div className="flex flex-row justify-end space-x-4 w-full ">
              <Button variant="edit" size={"sm"}>
                Edit
              </Button>
              <Button variant="danger" size={"sm"}>
                Delete
              </Button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default HandleTips;
