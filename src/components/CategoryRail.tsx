import { Eye } from "lucide-react";
import { categories } from "../constants/mockData";
import { NEON } from "../constants/theme";
import { formatViewers } from "../utils/formatViewers";

export default function CategoryRail() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2
          className="text-lg font-black tracking-tight"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            color: "#F0F2F3",
            letterSpacing: "-0.02em",
          }}
        >
          TOP CATEGORIES
        </h2>
        <button
          className="text-xs font-semibold transition-colors"
          style={{ color: NEON }}
        >
          Browse all →
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative rounded-xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: "3/4", background: "#111315" }}
          >
            <img
              src={`https://images.unsplash.com/${cat.img}?w=300&h=400&fit=crop&auto=format`}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,14,15,0.9) 30%, transparent 70%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                className="font-black text-sm leading-tight mb-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "#F0F2F3",
                  letterSpacing: "-0.01em",
                }}
              >
                {cat.name}
              </p>
              <p
                className="text-[10px] flex items-center gap-1"
                style={{ color: "#8A9299" }}
              >
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
