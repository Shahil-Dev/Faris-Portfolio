"use client";

import { Maximize2, Play, Volume2, Monitor, ChevronDown } from "lucide-react";

export default function CompositionViewer() {
  return (
    <main className="flex min-w-0 flex-1 flex-col bg-[#0c0c11]">
      {/* Viewer toolbar */}
      <div className="flex h-10 shrink-0 items-center justify-between border-b border-white/10 px-3">
        <div className="flex items-center gap-2">
          <Monitor size={13} className="text-purple-400" />
          <span className="text-[10px] text-white/65">
            Composition: Main_Showreel
          </span>
          <ChevronDown size={12} className="text-white/30" />
        </div>

        <div className="flex items-center gap-3 text-white/35">
          <span className="hidden text-[9px] sm:inline">FIT: 50%</span>
          <Volume2 size={13} />
          <Maximize2 size={13} />
        </div>
      </div>

      {/* Composition area */}
      <div className="flex min-h-[300px] flex-1 items-center justify-center p-0">
        {" "}
        <div className="cinematic-screen relative h-full min-h-[300px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#17131e] shadow-2xl shadow-black/50">
          {/* Cinematic placeholder background */}
          <div className="cinematic-screen-base absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(139,92,246,0.35),transparent_50%),linear-gradient(125deg,#17131e_0%,#09090d_55%,#24130f_100%)]" />

          <div className="absolute -right-10 top-0 h-full w-1/2 skew-x-[-15deg] bg-gradient-to-l from-orange-500/10 to-transparent" />

          <div className="cinematic-screen-content absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
            <div className="cinematic-play-button mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Play size={20} fill="white" className="ml-1 text-white" />
            </div>

            <span className="mb-2 text-[9px] uppercase tracking-[0.35em] text-purple-300">
              Showreel Preview
            </span>

            <h2 className="font-heading text-xl font-semibold tracking-tight text-white sm:text-3xl lg:text-5xl">
              Cinematic
              <span className="text-purple-400"> Real Estate</span>
            </h2>

            <p className="mt-3 max-w-sm text-[10px] leading-relaxed text-white/45 sm:text-xs">
              A visual preview will appear here once the showreel footage is
              added.
            </p>

            <span className="mt-6 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-[8px] uppercase tracking-[0.2em] text-orange-300">
              Video placeholder
            </span>
          </div>

          <div className="absolute bottom-3 left-3 text-[9px] tracking-wider text-white/35">
            1920 × 1080 · 16:9
          </div>

          <div className="absolute bottom-3 right-3 text-[9px] text-white/35">
            PREVIEW
          </div>
        </div>
      </div>

      {/* Viewer footer */}
      <div className="flex h-8 shrink-0 items-center justify-between border-t border-white/10 px-3 text-[9px] text-white/35">
        <span>Active Camera: Main Composition</span>
        <span>Full Resolution</span>
      </div>
    </main>
  );
}
