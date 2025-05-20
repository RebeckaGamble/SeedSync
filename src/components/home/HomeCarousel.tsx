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

  // Set tot count of slides
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
    <section className="py-16 sm:py-20 px-4 bg-primary overflow-hidden">
      <div className="container w-full max-w-[90rem] overflow-hidden mx-auto relative">
        <div ref={emblaRef}>
          <div className="flex">
            {carouselData.map((slide, index) => (
              <div
                // className="min-w-full "
                className="min-w-full lg:min-w-[55rem] xl:min-w-[64rem]"
                key={index}
              >
                <Link to={slide.link} className="block">
                  <div className="bg-primary md:max-w-[800px] border-2 border-border lg:max-w-[800px] xl:max-w-[1000px] mx-auto rounded-xl overflow-hidden relative h-64 md:h-80 transition-all items-start duration-300">
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-10 ">
                      <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold mb-3 overflow-hidden">
                        {slide.title}
                      </h2>
                      {slide.text && (
                        <p className="text-md sm:text-lg">{slide.text}</p>
                      )}
                      <Button variant="default" size="sm" className="mt-4">
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
              className="absolute md:hidden left-2 xl:left-0 top-1/2 transform -translate-y-1/2 text-slate-900 dark:text-slate-100 bg-white opacity-80 hover:opacity-100 dark:bg-slate-900 p-2 rounded-full"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </button>
            <button
              className="absolute md:hidden right-2 xl:right-0 top-1/2 transform -translate-y-1/2 text-slate-900 dark:text-slate-100 bg-white opacity-80 hover:opacity-100 dark:bg-slate-900 p-2 rounded-full"
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
