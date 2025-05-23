import {
  BugOff,
  Carrot,
  Droplet,
  Flower2,
  Heart,
  Leaf,
  Shovel,
  Snail,
  Snowflake,
  Sprout,
  Sun,
} from "lucide-react";

type TipIconProps = {
  icon: string;
  className?: string;
};

const TipIcon = ({ icon, className = "h-8 w-8 text-green" }: TipIconProps) => {
  switch (icon) {
    case "leaf":
      return <Leaf className={className} />;
    case "sprout":
      return <Sprout className={className} />;
    case "droplet":
      return <Droplet className={className} />;
    case "bug":
      return <BugOff className={className} />;
    case "snail":
      return <Snail className={className} />;
    case "heart":
      return <Heart className={className} />;
    case "flower":
      return <Flower2 className={className} />;
    case "showel":
      return <Shovel className={className} />;
    case "carrot":
      return <Carrot className={className} />;
    case "sun":
      return <Sun className={className} />;
    case "snowflake":
      return <Snowflake className={className} />;
    default:
      return <Leaf className={className} />;
  }
};

export default TipIcon;
