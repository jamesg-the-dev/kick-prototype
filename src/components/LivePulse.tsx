import { NEON, BASE } from "../constants/theme";

export default function LivePulse() {
  return (
    <span
      className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase"
      style={{
        background: NEON,
        color: BASE,
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: BASE }}
        />
        <span
          className="relative inline-flex rounded-full h-1.5 w-1.5"
          style={{ background: BASE }}
        />
      </span>
      LIVE
    </span>
  );
}
