import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "../../hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCarouselData } from "./data/carouselData";

const HomeCarousel = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [emblaRef, api] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7000, stopOnInteraction: false }),
  ]);

  const carouselData = getCarouselData(t);

  // Set total count of slides
  useEffect(() => {
    setCount(carouselData.length);
  }, []);

  // Handle slide change
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-10 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container w-full max-w-[90rem] overflow-hidden mx-auto relative">
        <div ref={emblaRef}>
          <div className="flex">
            {carouselData.map((slide, index) => (
              <div className="min-w-full lg:min-w-[55rem] xl:min-w-[64rem]" key={index}>
                <Link to={slide.link} className="block">
                  <div
                    className={`${slide.backgroundColor} ${slide.darkBackgroundColor} md:max-w-[800px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto rounded-lg overflow-hidden relative h-64 md:h-80 transition-all items-start duration-300 hover:shadow-md`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 md:p-10">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {slide.title}
                      </h2>
                      {slide.text && <p className="text-lg">{slide.text}</p>}
                      <Button
                        variant="default"
                        size="lg"
                        className="mt-4 bg-green text-[18px] tracking-wider dark:text-white hover:bg-green-hover dark:bg-green dark:hover:bg-green-hover"
                      >
                        {t("carousel.learnMore")}
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        {!isMobile && (
          <>
            <button
              className="absolute left-2 xl:left-0 top-1/2 transform -translate-y-1/2 text-slate-900 dark:text-slate-100 bg-white opacity-80 hover:opacity-100 dark:bg-slate-900 p-2 rounded-full"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              className="absolute right-2 xl:right-0 top-1/2 transform -translate-y-1/2 text-slate-900 dark:text-slate-100 bg-white opacity-80 hover:opacity-100 dark:bg-slate-900 p-2 rounded-full"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </button>
          </>
        )}

        {/* Indicators under */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === current - 1
                  ? "w-6 bg-green-500 dark:bg-green-400"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
