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

const sectionHeadingClass =
  "text-lg font-black tracking-[-0.02em] font-display text-foreground";

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const featured = streams[0];
  const gridStreams = streams.slice(1);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background font-sans">
      <TopNav onMenuToggle={() => setSidebarCollapsed((p) => !p)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((p) => !p)}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Featured stream */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-primary" />
                <h2 className={sectionHeadingClass}>FEATURED STREAM</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                  <StreamCard stream={featured} large />
                </div>
                {/* Live chat preview */}
                <div className="rounded-xl overflow-hidden flex flex-col bg-card border border-border min-h-[280px]">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={15} className="text-primary" />
                      <span className="text-sm font-bold font-heading text-foreground">
                        Live Chat
                      </span>
                    </div>
                    <LivePulse />
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto">
                    {messages.map((msg, i) => (
                      <div key={i} className="text-xs leading-relaxed">
                        <span
                          className="font-bold mr-1 font-heading"
                          style={{ color: msg.color }}
                        >
                          {msg.user}:
                        </span>
                        <span className="text-foreground/80">{msg.msg}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Send a message..."
                        className="flex-1 px-3 py-2 rounded-lg text-xs outline-none bg-input text-foreground border border-border font-sans"
                      />
                      <button className="px-3 py-2 rounded-lg text-xs font-bold bg-primary text-primary-foreground font-heading">
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
                  <Flame size={16} className="text-primary" />
                  <h2 className={sectionHeadingClass}>RECOMMENDED CHANNELS</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs font-semibold text-primary">
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
            <div className="rounded-xl p-4 flex flex-wrap items-center gap-6 bg-card border border-border">
              {[
                { label: "Live Channels", value: "24,831", icon: Radio },
                { label: "Viewers Right Now", value: "3.2M", icon: Eye },
                { label: "Categories", value: "892", icon: Grid3X3 },
                { label: "Clips Today", value: "142K", icon: Star },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10">
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-black leading-none font-display text-foreground tracking-[-0.02em]">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
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

      {/* Global scrollbar-hide + shared keyframes */}
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
