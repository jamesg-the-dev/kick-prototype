import { useState } from "react";
import { Search, Bell, ChevronDown, Radio } from "lucide-react";
import ChannelAvatar from "./ChannelAvatar";
import { followedChannels } from "../constants/mockData";
import { NEON, CARD_BG, ELEVATED, BORDER, BASE } from "../constants/theme";

interface TopNavProps {
  onMenuToggle: () => void;
}

export default function TopNav({ onMenuToggle }: TopNavProps) {
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
