import { Eye, Play, Volume2, Maximize2 } from "lucide-react";
import ChannelAvatar from "./ChannelAvatar";
import LivePulse from "./LivePulse";
import type { Stream } from "../types";
import { formatViewers } from "../utils/formatViewers";

interface StreamCardProps {
  stream: Stream;
  large?: boolean;
}

export default function StreamCard({ stream, large = false }: StreamCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden cursor-pointer bg-card border border-border transition-all duration-200 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgb(0_231_1_/_0.09)]">
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden aspect-video bg-[#111315]">
        <img
          src={`https://images.unsplash.com/${stream.thumbnail}?w=${large ? 1200 : 640}&h=${large ? 675 : 360}&fit=crop&auto=format`}
          alt={`${stream.streamer} playing ${stream.game}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 from-0% to-transparent to-50%" />
        {/* Live badge + viewers */}
        <div className="absolute top-2 left-2 flex items-center gap-2">
          <LivePulse />
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-background/80 text-foreground">
          <Eye size={11} />
          {formatViewers(stream.viewers)}
        </div>
        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/80">
            <Play size={20} className="text-background fill-current" />
          </div>
        </div>
        {large && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button className="p-1.5 rounded bg-background/70 text-foreground">
              <Volume2 size={14} />
            </button>
            <button className="p-1.5 rounded bg-background/70 text-foreground">
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
            <p className="font-bold text-sm leading-tight mb-0.5 line-clamp-2 text-foreground font-heading tracking-[-0.01em]">
              {stream.title}
            </p>
            <p className="text-xs mb-1.5 text-muted-foreground">
              {stream.streamer}
            </p>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded font-semibold bg-input text-foreground/80 font-heading">
                {stream.game}
              </span>
              {stream.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-primary/10 text-primary border border-primary/20"
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
