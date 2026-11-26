
"use client";

import {
  MousePointer2,
  Hand,
  ZoomIn,
  RotateCw,
  Type,
  Square,
  PenTool,
  Move3D,
} from "lucide-react";

const tools = [
  { icon: MousePointer2, label: "Selection", active: true },
  { icon: Hand, label: "Hand" },
  { icon: ZoomIn, label: "Zoom" },
  { icon: RotateCw, label: "Rotation" },
  { icon: Type, label: "Text" },
  { icon: Square, label: "Shape" },
  { icon: PenTool, label: "Pen" },
  { icon: Move3D, label: "3D Transform" },
];

export default function EditingToolbar() {
  return (
    <aside className="hidden w-12 shrink-0 flex-col items-center gap-2 border-r border-white/10 bg-[#15151b] py-3 sm:flex">
      {tools.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          type="button"
          title={label}
          aria-label={label}
          className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
            active
              ? "bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/30"
              : "text-white/40 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Icon size={15} strokeWidth={1.7} />
        </button>
      ))}
    </aside>
  );
}
