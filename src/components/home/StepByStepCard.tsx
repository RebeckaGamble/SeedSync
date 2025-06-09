import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { Tip } from "@/types/tip";
import StepIcon from "@/components/icons/StepIcon";

const StepByStepCard = ({
  step,
  showIcon = true,
}: {
  step: Tip;
  showIcon?: boolean;
}) => {
  const hasIcon = showIcon && step.cardIcon;

  return (
    <Card className="border-border relative flex flex-col h-full w-full max-w-[400px] hover:border-green shadow-md hover:shadow-md transition-all">
      <CardHeader className="flex flex-col items-center p-[12px]">
        {hasIcon && <StepIcon icon={step.cardIcon!} />}
        <CardTitle className="text-xl">{step.cardTitle}</CardTitle>
      </CardHeader>
      <div className="flex flex-col h-full justify-between">
        <CardContent >
          <div className="absolute top-[-10px] left-[-10px]">
            <div className="rounded-full bg-green text-white w-8 h-8 items-center justify-center flex">
              {step.id}
            </div>
          </div>
          <CardDescription className="text-center text-[16px]">
            {step.cardDescription}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
};

export default StepByStepCard;
