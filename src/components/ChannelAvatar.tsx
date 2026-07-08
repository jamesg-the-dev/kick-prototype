interface ChannelAvatarProps {
  initials: string;
  color: string;
  live: boolean;
  size?: "sm" | "md";
}

export default function ChannelAvatar({
  initials,
  color,
  live,
  size = "md",
}: ChannelAvatarProps) {
  const sz = size === "sm" ? "w-7 h-7 text-[10px]" : "w-8 h-8 text-xs";
  return (
    <div className="relative flex-shrink-0">
      <div
        className={`${sz} rounded-full flex items-center justify-center font-bold text-white font-heading`}
        style={{ background: color }}
      >
        {initials}
      </div>
      {live && (
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 bg-primary border-card" />
      )}
    </div>
  );
}
