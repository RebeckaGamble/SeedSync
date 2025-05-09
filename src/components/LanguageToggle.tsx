import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-1 outline-0">
          <Globe size={16} />
          <span className="sr-only">Toggle language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-4 ">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("sv")}>
          Svenska
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
