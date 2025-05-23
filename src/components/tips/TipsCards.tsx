import type { Tip } from "@/types/tip";
import { TipCard } from "./TipCard";

type TipsCardsProps = {
  tips: Tip[];
  highlightedId?: string | null;
  selectedCategory: string;
  searchQuery: string;
};

const TipsCards = ({
  tips,
  highlightedId,
  selectedCategory,
  searchQuery,
}: TipsCardsProps) => {
  const normalize = (str: string) => str.toLowerCase();

  const filtered = tips.filter((tip) => {
    const matchesCategory =
      selectedCategory === "" || tip.tags?.includes(selectedCategory);

    const matchesSearch =
      normalize(tip.cardTitle).includes(normalize(searchQuery)) ||
      normalize(tip.cardDescription ?? "").includes(normalize(searchQuery));

    return matchesCategory && matchesSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (a.id === highlightedId) return -1;
    if (b.id === highlightedId) return 1;
    return 0;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
      {sorted.map((tip) => (
        <div
          key={tip.id}
          className={`transform transition hover:-translate-y-1 ${
            tip.id === highlightedId
              ? "ring-2 ring-green ring-offset-2 rounded-md dark:ring-offset-gray-900"
              : ""
          }`}
        >
          <TipCard tip={tip} showIcon={!tip.image} />
        </div>
      ))}
    </div>
  );
};

export default TipsCards;
