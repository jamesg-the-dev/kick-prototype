import { Eye } from "lucide-react";
import { categories } from "../constants/mockData";
import { formatViewers } from "../utils/formatViewers";

export default function CategoryRail() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-black tracking-[-0.02em] font-display text-foreground">
          TOP CATEGORIES
        </h2>
        <button className="text-xs font-semibold transition-colors text-primary">
          Browse all →
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/4] bg-[#111315]"
          >
            <img
              src={`https://images.unsplash.com/${cat.img}?w=300&h=400&fit=crop&auto=format`}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 from-30% to-transparent to-70%" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-black text-sm leading-tight mb-1 font-display text-foreground tracking-[-0.01em]">
                {cat.name}
              </p>
              <p className="text-[10px] flex items-center gap-1 text-muted-foreground">
                <Eye size={9} />
                {formatViewers(cat.viewers)} viewers
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
