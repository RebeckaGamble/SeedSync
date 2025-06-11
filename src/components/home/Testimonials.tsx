import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { testimonials, flowers } from "../../assets";
import { useTheme } from "../navbar/ThemeProvider";
import { Button } from "../ui/button";

const Testimonials = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const testimonialsData = t("testimonials.content", {
    returnObjects: true,
  }) as {
    id: string;
    name: string;
    text: string;
    location: string;
  }[];

  const resolveTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const selectedImage = resolveTheme === "light" ? flowers : testimonials;

  return (
    <div className="relative bg-primary h-[480px]">
      <img
        src={selectedImage}
        alt="Flowers"
        className="absolute inset-0 w-full object-cover h-full"
      />
      <div className="relative backdrop-blur-[1px] z-10 w-full h-full flex flex-col items-center pb-4 pt-16 sm:pt-20 justify-between text-primary-foreground">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("testimonials.title")}
        </h2>
        <div className="relative h-full w-full max-w-[90rem] mx-auto">
          {testimonialsData.map((test, index) => (
            <div
              key={test.id}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <blockquote className="px-4 h-full flex flex-col text-center w-full space-y-4">
                <p className="text-[16px] text-secondary-foreground text-shadow-sm text-shadow-shadow max-w-[920px] mx-auto sm:text-xl md:text-2xl font-light italic mb-6">
                  {test.text}
                </p>
                <div className="flex flex-col space-y-2 text-primary-foreground">
                  <span>{test.name}</span>
                  <span>{test.location}</span>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
        {/* change testimonial btn */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialsData.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-2 w-2 rounded-full p-0 border-2 border-white ${
                index === currentIndex ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
