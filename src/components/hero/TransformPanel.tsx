"use client";

import {
  ChevronDown,
  Crosshair,
  Move,
  RotateCw,
  Scaling,
  SlidersHorizontal,
  AlignCenter,
} from "lucide-react";

const properties = [
  { label: "Anchor Point", value: "960, 540", icon: Crosshair },
  { label: "Position", value: "960, 540", icon: Move },
  { label: "Scale", value: "100%, 100%", icon: Scaling },
  { label: "Rotation", value: "0°", icon: RotateCw },
  { label: "Opacity", value: "100%", icon: SlidersHorizontal },
];

export default function TransformPanel() {
  return (
    <aside className="hidden w-48 shrink-0 flex-col border-l border-white/10 bg-[#131319] lg:flex xl:w-52 2xl:w-56">
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
          Properties
        </span>
        <SlidersHorizontal size={13} className="text-white/40" />
      </div>

      <div className="border-b border-white/5 px-3 py-3">
        <div className="flex items-center gap-2 text-[10px] text-white/65">
          <ChevronDown size={12} />
          <span>Transform</span>
        </div>

        <div className="mt-3 space-y-4">
          {properties.map(({ label, value, icon: Icon }) => (
            <div key={label} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[9px] text-white/45">
                <Icon size={12} />
                <span>{label}</span>
              </div>

              <div className="flex h-7 items-center rounded border border-white/10 bg-[#0d0d12] px-2">
                <span className="font-mono text-[10px] text-purple-300">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-white/5 px-3 py-3">
        <div className="flex items-center gap-2 text-[10px] text-white/65">
          <ChevronDown size={12} />
          <AlignCenter size={13} />
          <span>Align & Distribute</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["Left", "Center", "Right", "Top", "Middle", "Bottom"].map(
            (item) => (
              <div
                key={item}
                className="flex h-7 items-center justify-center rounded border border-white/10 bg-[#0d0d12] text-[9px] text-white/45"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mt-auto border-t border-white/5 px-3 py-3">
        <span className="text-[9px] uppercase tracking-wider text-white/30">
          Selected Layer
        </span>
        <p className="mt-1 text-[10px] text-purple-300">Main_Showreel</p>
      </div>
    </aside>
  );
}
