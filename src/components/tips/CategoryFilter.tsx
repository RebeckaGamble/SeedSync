import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import TipIcon from "../icons/TipIcon";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};
const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) => (
  <ToggleGroup
    type="single"
    className="flex flex-wrap justify-start sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-y-2 gap-x-2 sm:gap-x-6"
    value={selectedCategory}
    onValueChange={(value) => setSelectedCategory(value)}
  >
    {categories.map((category) => (
      <ToggleGroupItem
        key={category}
        value={category}
        aria-label={`Filter by ${category}`}
        className="flex items-center gap-1 bg-slate50 dark:bg-secondary border border-border
          data-[state=on]:bg-green/20 data-[state=on]:text-primary-foreground data-[state=on]:border-green"
      >
        <TipIcon className="text-green w-5 h-5" icon={category} />
        {category}
      </ToggleGroupItem>
    ))}
  </ToggleGroup>
);

export default CategoryFilter;
