
"use client";

import {
  ChevronDown,
  ChevronRight,
  AudioLines,
  Film,
  Plus,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const layers = [
  { name: "Hero_Reel.mp4", color: "bg-purple-500", width: "75%", type: "video" },
  { name: "Property_Footage.mp4", color: "bg-orange-500", width: "58%", type: "video" },
  { name: "Motion_Graphics", color: "bg-violet-400", width: "68%", type: "video" },
  { name: "Music_Bed.mp3", color: "bg-emerald-500", width: "82%", type: "audio" },
];

const rulerMarks = ["00:00", "00:05", "00:10", "00:15", "00:20", "00:25", "00:30"];

export default function Timeline() {
  return (
    <section className="flex h-[230px] shrink-0 flex-col border-t border-white/10 bg-[#111116] sm:h-[250px]">
      {/* Timeline toolbar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-white/10 px-3">
        <div className="flex items-center gap-2">
          <ChevronDown size={13} className="text-white/40" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/65">
            Timeline
          </span>
          <span className="rounded bg-purple-500/15 px-2 py-0.5 text-[8px] text-purple-300">
            MAIN COMP
          </span>
        </div>

        <div className="flex items-center gap-3 text-white/40">
          <ZoomOut size={13} />
          <div className="h-1 w-16 rounded-full bg-white/15">
            <div className="h-1 w-1/2 rounded-full bg-purple-400" />
          </div>
          <ZoomIn size={13} />
          <Plus size={14} />
        </div>
      </div>

      {/* Timeline content */}
      <div className="flex min-h-0 flex-1 overflow-hidden">
        {/* Layer names */}
        <div className="w-36 shrink-0 border-r border-white/10 bg-[#15151b] sm:w-48">
          <div className="flex h-8 items-center border-b border-white/5 px-3 text-[9px] uppercase tracking-wider text-white/30">
            Layer Name
          </div>

          {layers.map((layer) => (
            <div
              key={layer.name}
              className="flex h-9 items-center gap-2 border-b border-white/5 px-2"
            >
              <ChevronRight size={11} className="shrink-0 text-white/25" />
              {layer.type === "audio" ? (
                <AudioLines size={12} className="shrink-0 text-emerald-400" />
              ) : (
                <Film size={12} className="shrink-0 text-purple-400" />
              )}
              <span className="truncate text-[9px] text-white/55">
                {layer.name}
              </span>
            </div>
          ))}
        </div>

        {/* Tracks */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          {/* Time ruler */}
          <div className="relative flex h-8 items-center justify-between border-b border-white/10 px-2">
            {rulerMarks.map((mark) => (
              <span
                key={mark}
                className="text-[8px] text-white/35"
              >
                {mark}
              </span>
            ))}
          </div>

          {/* Layer tracks */}
          <div className="relative">
            {layers.map((layer, index) => (
              <div
                key={layer.name}
                className="relative flex h-9 items-center border-b border-white/5"
              >
                <div
                  className={`relative ml-1 h-5 overflow-hidden rounded-sm ${layer.color}/20`}
                  style={{ width: layer.width }}
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-full ${layer.color} opacity-20`}
                  />

                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center gap-1 px-2 opacity-70">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-px shrink-0 rounded-full bg-emerald-300"
                          style={{
                            height: `${20 + ((i * 17) % 65)}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {index !== 3 && (
                    <div className="absolute inset-0 flex items-center justify-evenly px-2">
                      {[0, 1, 2, 3, 4].map((key) => (
                        <span
                          key={key}
                          className="h-1 w-1 rotate-45 bg-white/60"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Animated playhead */}
            <div
              className="timeline-playhead pointer-events-none absolute bottom-0 top-0 z-10 w-px bg-orange-400"
              style={{ left: "2%" }}
            >
              <div className="-ml-[4px] h-2 w-2 rotate-45 bg-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex h-7 shrink-0 items-center justify-between border-t border-white/10 px-3 text-[9px] text-white/35">
        <span>00:00:12:18</span>
        <span>4 Layers · 30 FPS</span>
      </div>

     
    </section>
  );
}
