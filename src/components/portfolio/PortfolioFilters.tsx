export type PortfolioCategory =
  | 'All'
  | 'AI Generated Videos'
  | 'Promotional Videos'
  | 'Product Advertisements'
  | 'Business Reels'
  | 'Social Media Creatives';

interface PortfolioFiltersProps {
  categories: PortfolioCategory[];
  activeCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
  categoryCounts?: Record<string, number>;
}

export const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = categoryCounts ? categoryCounts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              isActive
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105 font-semibold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/5 hover:border-white/15'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
