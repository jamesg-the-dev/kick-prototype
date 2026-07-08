import { useState } from "react";
import { Search, Bell, ChevronDown, Radio } from "lucide-react";
import ChannelAvatar from "./ChannelAvatar";
import { followedChannels } from "../constants/mockData";

interface TopNavProps {
  onMenuToggle: () => void;
}

export default function TopNav({ onMenuToggle }: TopNavProps) {
  const [searchVal, setSearchVal] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="flex items-center gap-4 px-4 h-14 flex-shrink-0 z-30 bg-card border-b border-border">
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary">
            <Radio size={18} className="text-background" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-[-0.03em] hidden sm:block text-foreground font-display">
            KAST
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1 ml-2">
        {["Browse", "Following", "Esports"].map((label, i) => (
          <button
            key={label}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors font-heading ${
              i === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}

        {/* Categories dropdown */}
        <div className="relative">
          <button
            onClick={() => setCatOpen(!catOpen)}
            className={`flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors font-heading ${
              catOpen
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Categories
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                catOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {catOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl overflow-hidden z-50 shadow-2xl bg-popover border border-border">
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
                  className="w-full text-left px-4 py-2 text-sm transition-colors text-foreground/80 font-heading hover:bg-[#2E3338] hover:text-primary"
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
        <div className="group relative">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
          />
          <input
            type="text"
            placeholder="Search streamers, games, clips..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg outline-none transition-all bg-input text-foreground border border-border font-sans focus:border-primary/40 focus:shadow-[0_0_0_3px_rgb(0_231_1_/_0.09)]"
          />
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
              notifOpen
                ? "bg-primary/10 text-primary"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
          </button>
          {notifOpen && (
            <div className="absolute top-full right-0 mt-2 w-72 rounded-xl z-50 shadow-2xl overflow-hidden bg-popover border border-border">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="font-bold text-sm text-foreground font-heading">
                  Notifications
                </span>
                <button className="text-xs text-primary">Mark all read</button>
              </div>
              {followedChannels
                .filter((c) => c.live)
                .slice(0, 3)
                .map((ch) => (
                  <div
                    key={ch.id}
                    className="flex items-center gap-3 px-4 py-3 border-b border-border/20"
                  >
                    <ChannelAvatar
                      initials={ch.initials}
                      color={ch.color}
                      live={true}
                      size="sm"
                    />
                    <div>
                      <p className="text-xs font-semibold text-foreground font-heading">
                        {ch.name} is live!
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Playing {ch.game}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors bg-secondary hover:bg-[#2E3338]">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground font-heading">
            YU
          </div>
          <ChevronDown size={13} className="text-muted-foreground" />
        </button>

        {/* CTA */}
        <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all bg-primary text-primary-foreground font-display tracking-[0.04em] hover:-translate-y-px hover:shadow-[0_0_20px_rgb(0_231_1_/_0.38)]">
          <Radio size={14} strokeWidth={2.5} />
          GO LIVE
        </button>
      </div>
    </header>
  );
}
