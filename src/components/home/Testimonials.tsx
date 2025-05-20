import { testimonials, flowers } from "../../assets";
import { useTheme } from "../navbar/ThemeProvider";

const Testimonials = () => {
  const { theme } = useTheme();

  const resolveTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const selectedImage = resolveTheme === "light" ? flowers : testimonials;

  return (
    <div className="relative bg-primary h-[400px]">
      <img
        src={selectedImage}
        alt="Flowers"
        className="absolute inset-0 w-full object-cover h-full"
      />
      <div className="absolute z-10 flex w-full h-full items-center justify-center">
        <p className="text-secondary-foreground">Testimonials coming soon</p>
      </div>
    </div>
  );
};

export default Testimonials;
