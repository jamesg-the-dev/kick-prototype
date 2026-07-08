import { useState } from "react";
import { Eye, Menu } from "lucide-react";
import ChannelAvatar from "./ChannelAvatar";
import { navItems } from "../constants/navigation";
import { followedChannels } from "../constants/mockData";
import { NEON, CARD_BG, ELEVATED, BORDER } from "../constants/theme";
import { formatViewers } from "../utils/formatViewers";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
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
