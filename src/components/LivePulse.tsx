export default function LivePulse() {
  return (
    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-primary text-primary-foreground font-display">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary-foreground" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-foreground" />
      </span>
      LIVE
    </span>
  );
}
