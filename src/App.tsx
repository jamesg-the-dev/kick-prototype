import { useState } from "react";
import {
  Eye,
  Flame,
  Radio,
  Star,
  Zap,
  MessageSquare,
  Grid3X3,
} from "lucide-react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import StreamCard from "./components/StreamCard";
import CategoryRail from "./components/CategoryRail";
import LivePulse from "./components/LivePulse";
import { streams, messages } from "./constants/mockData";
import { NEON, CARD_BG, ELEVATED, BORDER, BASE } from "./constants/theme";

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
