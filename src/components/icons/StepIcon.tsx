import { Lightbulb, UserPlus, Calendar, Sprout } from "lucide-react";

type StepIconProps = {
  icon: string;
  className?: string;
};

const StepIcon = ({
  icon,
  className = "h-8 w-8 text-green",
}: StepIconProps) => {
  switch (icon) {
    case "lightbulb":
      return <Lightbulb className={className} />;
    case "userplus":
      return <UserPlus className={className} />;
    case "calendar":
      return <Calendar className={className} />;
    case "sprout":
      return <Sprout className={className} />;

    default:
      return <Sprout className={className} />;
  }
};

export default StepIcon;
