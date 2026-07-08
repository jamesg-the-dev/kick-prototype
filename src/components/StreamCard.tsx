import { useState } from "react";
import { Eye, Play, Volume2, Maximize2 } from "lucide-react";
import ChannelAvatar from "./ChannelAvatar";
import LivePulse from "./LivePulse";
import type { Stream } from "../types";
import { NEON, CARD_BG, ELEVATED, BORDER, BASE } from "../constants/theme";
import { formatViewers } from "../utils/formatViewers";

interface StreamCardProps {
  stream: Stream;
  large?: boolean;
}

export default function StreamCard({ stream, large = false }: StreamCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden cursor-pointer transition-transform duration-200"
      style={{
        background: CARD_BG,
        border: `1px solid ${hovered ? NEON + "40" : BORDER}`,
        boxShadow: hovered ? `0 0 20px ${NEON}18` : "none",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", background: "#111315" }}
      >
        <img
          src={`https://images.unsplash.com/${stream.thumbnail}?w=${large ? 1200 : 640}&h=${large ? 675 : 360}&fit=crop&auto=format`}
          alt={`${stream.streamer} playing ${stream.game}`}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,14,15,0.85) 0%, transparent 50%)",
          }}
        />
        {/* Live badge + viewers */}
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <LivePulse />
        </div>
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
          style={{ background: "rgba(11,14,15,0.80)", color: "#E8ECEE" }}
        >
          <Eye size={11} />
          {formatViewers(stream.viewers)}
        </div>
        {/* Hover play overlay */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: `${NEON}CC` }}
            >
              <Play size={20} fill={BASE} style={{ color: BASE }} />
            </div>
          </div>
        )}
        {large && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              className="p-1.5 rounded"
              style={{ background: "rgba(11,14,15,0.70)", color: "#E8ECEE" }}
            >
              <Volume2 size={14} />
            </button>
            <button
              className="p-1.5 rounded"
              style={{ background: "rgba(11,14,15,0.70)", color: "#E8ECEE" }}
            >
              <Maximize2 size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-3">
        <div className="flex items-start gap-2.5">
          <ChannelAvatar
            initials={stream.initials}
            color={stream.color}
            live={true}
          />
          <div className="flex-1 min-w-0">
            <p
              className="font-bold text-sm leading-tight mb-0.5 line-clamp-2"
              style={{
                color: "#F0F2F3",
                fontFamily: "'Barlow', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {stream.title}
            </p>
            <p className="text-xs mb-1.5" style={{ color: "#8A9299" }}>
              {stream.streamer}
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className="text-xs px-2 py-0.5 rounded font-semibold"
                style={{
                  background: ELEVATED,
                  color: "#C8CDD1",
                  fontFamily: "'Barlow', sans-serif",
                }}
              >
                {stream.game}
              </span>
              {stream.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                  style={{
                    background: `${NEON}15`,
                    color: NEON,
                    border: `1px solid ${NEON}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
