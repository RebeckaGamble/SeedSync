import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp, Search } from "lucide-react";
import { Input } from "../ui/input";
import { useSearchParams } from "react-router-dom";
import { getCarouselData } from "../home/data/carouselData";
import { hero } from "@/assets";
import type { Tip } from "@/types/tip";
import TipsCards from "./TipsCards";
import CategoryFilter from "./CategoryFilter";

const TipsContent = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const highlightedId = searchParams.get("highlight");

  const tipsSectionRef = useRef<HTMLDivElement | null>(null);

  const allTips = t("tipsCards.content", { returnObjects: true }) as Tip[];
  const tipCardContent = t("tipCardContent.content", {
    returnObjects: true,
  }) as Tip[];
  const seasonal = getCarouselData(t) as Tip[];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const combinedTips = [...seasonal, ...allTips, ...tipCardContent];

  const categories = Array.from(
    new Set(combinedTips.flatMap((tip) => tip.tags ?? []))
  );

  const handleShowAll = () => {
    setSelectedCategory("");
    setSearchQuery("");
  };

  const toTop = () => {
    tipsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const visibleTips = combinedTips.filter((tip) => {
    const matchesCategory =
      !selectedCategory || tip.tags?.includes(selectedCategory);
    const matchesSearch =
      tip.cardTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.cardDescription?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-full text-primary-foreground">
      <div className="max-w-[90rem] mx-auto px-4 2xl:px-0 py-10 md:py-16">
        <div ref={tipsSectionRef} className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col lg:w-[60%] ">
            <h1 className="text-3xl font-bold md:text-4xl mb-4">
              {t("tips.title")}
            </h1>
            <p className="text-[16px] max-w-[35rem] lg:text-[18px] lg:leading-7">
              {t("tips.text")}
            </p>
            {/* Searchbar */}
            <div className="relative w-full max-w-[560px] my-6">
              <Input
                className="pr-4 shadow-sm"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                size={16}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              />
            </div>
            {/* Filter */}
            <div>
              <h2 className="pb-4 text-2xl">{t("tips.filterTitle")}</h2>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-end w-[40%]">
            <div className="w-full overflow-hidden max-h-[500px] flex lg:justify-end lg:rounded-xl">
              <img
                src={hero}
                alt={t("hero.imageAlt")}
                className="w-auto h-full object-contain object-center lg:rounded-xl shadow-sm shadow-accent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary py-10 md:py-16">
        {/* All tips */}
        <div className="space-y-10 max-w-[90rem] mx-auto px-4 2xl:px-0">
          <div className="flex flex-row justify-between items-center">
            <button
              aria-label={t("tips.showAllAriaLabel")}
              onClick={handleShowAll}
            >
              {t("tips.showAllBtn")}
            </button>
          </div>
          <div className="w-full">
            <TipsCards
              tips={combinedTips}
              highlightedId={highlightedId}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
            />
          </div>
          {visibleTips.length >= 6 && (
            <div className="flex mx-auto justify-center">
              <button
                onClick={toTop}
                className="border-border border rounded-full p-1.5 bg-primary"
                aria-label={t("tips.scrollToTopAriaLabel")}
              >
                <ArrowUp className="text-green " />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipsContent;
