import type { Tip } from "@/types/tip";
import StepByStepCard from "./StepByStepCard";
import { useTranslation } from "react-i18next";

const StepByStep = () => {
  const { t } = useTranslation();

  const stepsData = t("steps.content", { returnObjects: true }) as Tip[];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-secondary via-secondary/80 to-neutral dark:bg-secondary dark:to-secondary">
      <div className="w-full px-6 2xl:px-0 max-w-[90rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("steps.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-6 md:gap-10 ">
          {stepsData.map((step) => (
            <div key={step.id} className="w-full justify-center flex">
              <StepByStepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
