import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Home,
  TrendingUp,
  Grid3X3,
  Users,
  Eye,
  Trophy,
  Flame,
  Radio,
  Star,
  Menu,
  Zap,
  MessageSquare,
  Play,
  Volume2,
  Maximize2,
} from "lucide-react";

const NEON = "#00E701";
const CARD_BG = "#191B1F";
const ELEVATED = "#24272C";
const BORDER = "#474F54";
const BASE = "#0B0E0F";

const followedChannels = [
  {
    id: 1,
    name: "xQcOW",
    game: "Valorant",
    viewers: 45231,
    live: true,
    initials: "XQ",
    color: "#E74C3C",
  },
  {
    id: 2,
    name: "HasanAbi",
    game: "Just Chatting",
    viewers: 52100,
    live: true,
    initials: "HA",
    color: "#9B59B6",
  },
  {
    id: 3,
    name: "Hikaru",
    game: "Chess",
    viewers: 18442,
    live: true,
    initials: "HK",
    color: "#3498DB",
  },
  {
    id: 4,
    name: "Nickmercs",
    game: "Warzone",
    viewers: 31000,
    live: true,
    initials: "NK",
    color: "#F39C12",
  },
  {
    id: 5,
    name: "Trainwrecks",
    game: "Slots",
    viewers: 28910,
    live: true,
    initials: "TW",
    color: "#E67E22",
  },
  {
    id: 6,
    name: "Summit1g",
    game: "VALORANT",
    viewers: 22000,
    live: true,
    initials: "S1",
    color: "#1ABC9C",
  },
  {
    id: 7,
    name: "Symfuhny",
    game: "Fortnite",
    viewers: 12500,
    live: false,
    initials: "SF",
    color: "#8E44AD",
  },
  {
    id: 8,
    name: "Sneaky",
    game: "League of Legends",
    viewers: 8320,
    live: false,
    initials: "SN",
    color: "#27AE60",
  },
];

const streams = [
  {
    id: 1,
    title: "RANKED GRIND — Road to Diamond | 10h stream !prime",
    streamer: "xQcOW",
    game: "Valorant",
    viewers: 45231,
    thumbnail: "photo-1542751371-adc38448a05e",
    tags: ["English", "FPS", "Competitive"],
    initials: "XQ",
    color: "#E74C3C",
    featured: true,
  },
  {
    id: 2,
    title: "Morning grind - 2000 ELO or we go again",
    streamer: "Hikaru",
    game: "Chess",
    viewers: 18442,
    thumbnail: "photo-1611329695518-1763fc1cd893",
    tags: ["English", "Chess"],
    initials: "HK",
    color: "#3498DB",
    featured: false,
  },
  {
    id: 3,
    title: "WARZONE SOLOS — NEW META LOADOUT NO CAP",
    streamer: "Nickmercs",
    game: "Warzone",
    viewers: 31000,
    thumbnail: "photo-1560253023-3ec5d502959f",
    tags: ["English", "FPS"],
    initials: "NK",
    color: "#F39C12",
    featured: false,
  },
  {
    id: 4,
    title: "Just chatting with the Hasan gang — politics & gaming",
    streamer: "HasanAbi",
    game: "Just Chatting",
    viewers: 52100,
    thumbnail: "photo-1593305841991-05c297ba4575",
    tags: ["English", "IRL"],
    initials: "HA",
    color: "#9B59B6",
    featured: false,
  },
  {
    id: 5,
    title: "Summit plays: STALKER 2 first playthrough",
    streamer: "Summit1g",
    game: "STALKER 2",
    viewers: 22000,
    thumbnail: "photo-1511512578047-dfb367046420",
    tags: ["English", "Horror"],
    initials: "S1",
    color: "#1ABC9C",
    featured: false,
  },
  {
    id: 6,
    title: "Pro scrims | Fnatic bootcamp - EU championship prep",
    streamer: "Symfuhny",
    game: "Fortnite",
    viewers: 12500,
    thumbnail: "photo-1580327344181-c1163234e5a0",
    tags: ["English", "Tournament"],
    initials: "SF",
    color: "#8E44AD",
    featured: false,
  },
];

const categories = [
  { name: "Valorant", viewers: 312000, img: "photo-1542751371-adc38448a05e" },
  {
    name: "Fortnite",
    viewers: 248000,
    img: "photo-1580327344181-c1163234e5a0",
  },
  {
    name: "Just Chatting",
    viewers: 198000,
    img: "photo-1593305841991-05c297ba4575",
  },
  { name: "Chess", viewers: 87000, img: "photo-1560174038-da43ac74f01b" },
];

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: TrendingUp, label: "Following" },
  { icon: Flame, label: "Browse" },
  { icon: Grid3X3, label: "Categories" },
  { icon: Trophy, label: "Esports" },
  { icon: Users, label: "Crew" },
];

const messages = [
  {
    user: "GreenTurtle99",
    msg: "LET'S GOOO he just clutched that 1v4!",
    color: "#27AE60",
  },
  {
    user: "NightOwlAce",
    msg: "bro is actually cracked fr fr",
    color: "#3498DB",
  },
  {
    user: "ProGamerXD",
    msg: "what sens is he on??",
    color: "#9B59B6",
  },
  {
    user: "CryptoKing",
    msg: "KEKW that was clean",
    color: "#F39C12",
  },
  {
    user: "ShadowByte",
    msg: "he's going to hit radiant by next week I'm calling it",
    color: "#E74C3C",
  },
  {
    user: "VoidWalker",
    msg: "insane movement no cap",
    color: "#1ABC9C",
  },
  {
    user: "GreenTurtle99",
    msg: "pog pog pog",
    color: "#27AE60",
  },
  {
    user: "ArcadePhoenix",
    msg: "can't stop watching this stream 😭",
    color: "#E67E22",
  },
];

function formatViewers(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function LivePulse() {
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

function ChannelAvatar({
  initials,
  color,
  live,
  size = "md",
}: {
  initials: string;
  color: string;
  live: boolean;
  size?: "sm" | "md";
}) {
  const sz = size === "sm" ? "w-7 h-7 text-[10px]" : "w-8 h-8 text-xs";
  return (
    <div className="relative flex-shrink-0">
      <div
        className={`${sz} rounded-full flex items-center justify-center font-bold`}
        style={{
          background: color,
          color: "#fff",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {initials}
      </div>
      {live && (
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
          style={{ background: NEON, borderColor: CARD_BG }}
        />
      )}
    </div>
  );
}

function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <aside
      className="flex-shrink-0 flex flex-col h-full overflow-hidden transition-all duration-300"
      style={{
        width: collapsed ? 56 : 240,
        background: CARD_BG,
        borderRight: `1px solid ${BORDER}`,
      }}
    >
      {/* Nav icons */}
      <div className="flex flex-col gap-0.5 pt-3 px-2">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === activeNav;
          return (
            <button
              key={item.label}
              onClick={() => setActiveNav(i)}
              className="flex items-center gap-3 px-2 py-2.5 rounded-lg transition-all duration-150 group relative"
              style={{
                background: isActive ? `${NEON}18` : "transparent",
                color: isActive ? NEON : "#8A9299",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.background = "#24272C";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
              }}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.5 : 2}
                style={{ color: isActive ? NEON : undefined, flexShrink: 0 }}
              />
              {!collapsed && (
                <span
                  className="text-sm font-semibold tracking-wide whitespace-nowrap"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    color: isActive ? NEON : "#C8CDD1",
                  }}
                >
                  {item.label}
                </span>
              )}
              {isActive && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r"
                  style={{ background: NEON }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="mx-3 my-3" style={{ height: 1, background: BORDER }} />

      {/* Following section */}
      {!collapsed && (
        <div
          className="flex-1 overflow-y-auto px-3"
          style={{ scrollbarWidth: "none" }}
        >
          <p
            className="text-[10px] font-bold tracking-widest uppercase mb-2 px-1"
            style={{
              color: "#8A9299",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Following
          </p>
          <div className="flex flex-col gap-0.5">
            {followedChannels.map((ch) => (
              <button
                key={ch.id}
                className="flex items-center gap-2.5 px-1.5 py-1.5 rounded-lg transition-all duration-150 w-full text-left group"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = ELEVATED)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "transparent")
                }
              >
                <ChannelAvatar
                  initials={ch.initials}
                  color={ch.color}
                  live={ch.live}
                  size="sm"
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold truncate"
                    style={{
                      color: "#E8ECEE",
                      fontFamily: "'Barlow', sans-serif",
                    }}
                  >
                    {ch.name}
                  </p>
                  <p
                    className="text-[10px] truncate"
                    style={{ color: "#8A9299" }}
                  >
                    {ch.live ? ch.game : "Offline"}
                  </p>
                </div>
                {ch.live && (
                  <span
                    className="flex items-center gap-1 text-[10px] font-semibold flex-shrink-0"
                    style={{ color: "#8A9299" }}
                  >
                    <Eye size={9} />
                    {formatViewers(ch.viewers)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {collapsed && (
        <div
          className="flex-1 flex flex-col items-center gap-2 px-2 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {followedChannels
            .filter((c) => c.live)
            .slice(0, 6)
            .map((ch) => (
              <div key={ch.id} className="relative cursor-pointer">
                <ChannelAvatar
                  initials={ch.initials}
                  color={ch.color}
                  live={ch.live}
                  size="sm"
                />
              </div>
            ))}
        </div>
      )}

      {/* Bottom settings */}
      <div className="p-2 border-t" style={{ borderColor: BORDER }}>
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-full py-2 rounded-lg transition-colors"
          style={{ color: "#8A9299" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = ELEVATED)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "transparent")
          }
        >
          <Menu size={18} />
        </button>
      </div>
    </aside>
  );
}

function StreamCard({
  stream,
  large = false,
}: {
  stream: (typeof streams)[0];
  large?: boolean;
}) {
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

function TopNav({ onMenuToggle }: { onMenuToggle: () => void }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header
      className="flex items-center gap-4 px-4 h-14 flex-shrink-0 z-30"
      style={{ background: CARD_BG, borderBottom: `1px solid ${BORDER}` }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: NEON }}
          >
            <Radio size={18} style={{ color: BASE }} strokeWidth={2.5} />
          </div>
          <span
            className="text-xl font-black tracking-tight hidden sm:block"
            style={{
              color: "#F0F2F3",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            KAST
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1 ml-2">
        {["Browse", "Following", "Esports"].map((label, i) => (
          <button
            key={label}
            className="px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors"
            style={{
              fontFamily: "'Barlow', sans-serif",
              color: i === 0 ? NEON : "#8A9299",
              background: i === 0 ? `${NEON}15` : "transparent",
            }}
            onMouseEnter={(e) => {
              if (i !== 0)
                (e.currentTarget as HTMLElement).style.color = "#F0F2F3";
            }}
            onMouseLeave={(e) => {
              if (i !== 0)
                (e.currentTarget as HTMLElement).style.color = "#8A9299";
            }}
          >
            {label}
          </button>
        ))}

        {/* Categories dropdown */}
        <div className="relative">
          <button
            onClick={() => setCatOpen(!catOpen)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors"
            style={{
              fontFamily: "'Barlow', sans-serif",
              color: catOpen ? NEON : "#8A9299",
              background: catOpen ? `${NEON}15` : "transparent",
            }}
          >
            Categories
            <ChevronDown
              size={14}
              style={{
                transform: catOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            />
          </button>
          {catOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden z-50 shadow-2xl"
              style={{ background: ELEVATED, border: `1px solid ${BORDER}` }}
            >
              {[
                "FPS",
                "Battle Royale",
                "MOBA",
                "Sports",
                "Just Chatting",
                "Chess",
                "IRL",
              ].map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-4 py-2 text-sm transition-colors"
                  style={{
                    color: "#C8CDD1",
                    fontFamily: "'Barlow', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#2E3338";
                    (e.currentTarget as HTMLElement).style.color = NEON;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#C8CDD1";
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Search */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: searchFocused ? NEON : "#8A9299" }}
          />
          <input
            type="text"
            placeholder="Search streamers, games, clips..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg outline-none transition-all"
            style={{
              background: ELEVATED,
              color: "#F0F2F3",
              border: `1px solid ${searchFocused ? NEON + "60" : BORDER}`,
              fontFamily: "'Inter', sans-serif",
              boxShadow: searchFocused ? `0 0 0 3px ${NEON}18` : "none",
            }}
          />
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{
              color: notifOpen ? NEON : "#8A9299",
              background: notifOpen ? `${NEON}15` : ELEVATED,
            }}
          >
            <Bell size={18} />
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
              style={{ background: NEON }}
            />
          </button>
          {notifOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-72 rounded-xl z-50 shadow-2xl overflow-hidden"
              style={{ background: ELEVATED, border: `1px solid ${BORDER}` }}
            >
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span
                  className="font-bold text-sm"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    color: "#F0F2F3",
                  }}
                >
                  Notifications
                </span>
                <button className="text-xs" style={{ color: NEON }}>
                  Mark all read
                </button>
              </div>
              {followedChannels
                .filter((c) => c.live)
                .slice(0, 3)
                .map((ch) => (
                  <div
                    key={ch.id}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ borderBottom: `1px solid ${BORDER}20` }}
                  >
                    <ChannelAvatar
                      initials={ch.initials}
                      color={ch.color}
                      live={true}
                      size="sm"
                    />
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{
                          color: "#F0F2F3",
                          fontFamily: "'Barlow', sans-serif",
                        }}
                      >
                        {ch.name} is live!
                      </p>
                      <p className="text-[10px]" style={{ color: "#8A9299" }}>
                        Playing {ch.game}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <button
          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors"
          style={{ background: ELEVATED }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#2E3338")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = ELEVATED)
          }
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: NEON,
              color: BASE,
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            YU
          </div>
          <ChevronDown size={13} style={{ color: "#8A9299" }} />
        </button>

        {/* CTA */}
        <button
          className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all"
          style={{
            background: NEON,
            color: BASE,
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              `0 0 20px ${NEON}60`;
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.transform = "none";
          }}
        >
          <Radio size={14} strokeWidth={2.5} />
          GO LIVE
        </button>
      </div>
    </header>
  );
}

function CategoryRail() {
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

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const featured = streams[0];
  const gridStreams = streams.slice(1);

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: BASE, fontFamily: "'Inter', sans-serif" }}
    >
      <TopNav onMenuToggle={() => setSidebarCollapsed((p) => !p)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((p) => !p)}
        />

        {/* Main content */}
        <main
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Featured stream */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} style={{ color: NEON }} />
                <h2
                  className="text-lg font-black tracking-tight"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "#F0F2F3",
                    letterSpacing: "-0.02em",
                  }}
                >
                  FEATURED STREAM
                </h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <StreamCard stream={featured} large />
                </div>
                {/* Live chat preview */}
                <div
                  className="rounded-xl overflow-hidden flex flex-col"
                  style={{
                    background: CARD_BG,
                    border: `1px solid ${BORDER}`,
                    minHeight: 280,
                  }}
                >
                  <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{ borderBottom: `1px solid ${BORDER}` }}
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare size={15} style={{ color: NEON }} />
                      <span
                        className="text-sm font-bold"
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          color: "#F0F2F3",
                        }}
                      >
                        Live Chat
                      </span>
                    </div>
                    <LivePulse />
                  </div>
                  <div
                    className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {messages.map((msg, i) => (
                      <div key={i} className="text-xs leading-relaxed">
                        <span
                          className="font-bold mr-1"
                          style={{
                            color: msg.color,
                            fontFamily: "'Barlow', sans-serif",
                          }}
                        >
                          {msg.user}:
                        </span>
                        <span style={{ color: "#C8CDD1" }}>{msg.msg}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="p-3"
                    style={{ borderTop: `1px solid ${BORDER}` }}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Send a message..."
                        className="flex-1 px-3 py-2 rounded-lg text-xs outline-none"
                        style={{
                          background: ELEVATED,
                          color: "#F0F2F3",
                          border: `1px solid ${BORDER}`,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      />
                      <button
                        className="px-3 py-2 rounded-lg text-xs font-bold"
                        style={{
                          background: NEON,
                          color: BASE,
                          fontFamily: "'Barlow', sans-serif",
                        }}
                      >
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommended streams grid */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flame size={16} style={{ color: NEON }} />
                  <h2
                    className="text-lg font-black tracking-tight"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      color: "#F0F2F3",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    RECOMMENDED CHANNELS
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="text-xs font-semibold"
                    style={{ color: NEON }}
                  >
                    Show all →
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridStreams.map((stream) => (
                  <StreamCard key={stream.id} stream={stream} />
                ))}
              </div>
            </section>

            {/* Category rail */}
            <CategoryRail />

            {/* Stats bar */}
            <div
              className="rounded-xl p-4 flex flex-wrap items-center gap-6"
              style={{ background: CARD_BG, border: `1px solid ${BORDER}` }}
            >
              {[
                { label: "Live Channels", value: "24,831", icon: Radio },
                { label: "Viewers Right Now", value: "3.2M", icon: Eye },
                { label: "Categories", value: "892", icon: Grid3X3 },
                { label: "Clips Today", value: "142K", icon: Star },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${NEON}15` }}
                    >
                      <Icon size={15} style={{ color: NEON }} />
                    </div>
                    <div>
                      <p
                        className="text-lg font-black leading-none"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: "#F0F2F3",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[10px]" style={{ color: "#8A9299" }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Prevent dropdowns closing on outside click - click backdrop */}
      <style>{`
        * { scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        @keyframes greenPulse {
          0%, 100% { box-shadow: 0 0 0 0 #00E70140; }
          50% { box-shadow: 0 0 0 6px #00E70100; }
        }
      `}</style>
    </div>
  );
}
