import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={t("nav.themeBtnAriaLabel")}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;
