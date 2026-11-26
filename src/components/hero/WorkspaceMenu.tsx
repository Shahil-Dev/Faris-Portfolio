
"use client";

import { ChevronDown } from "lucide-react";

const menuItems = [
  "File",
  "Edit",
  "Composition",
  "Layer",
  "Effect",
  "Animation",
  "View",
  "Window",
  "Help",
];

export default function WorkspaceMenu() {
  return (
    <header className="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-[#17171d] px-3">
      <div className="flex items-center gap-3">
        {/* Window controls */}
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="hidden h-4 w-px bg-white/10 sm:block" />

        <span className="text-[11px] font-semibold tracking-wide text-white/80">
        After Effects
        </span>
      </div>

      <nav className="hidden items-center gap-3 lg:flex">
        {menuItems.map((item) => (
          <button
            key={item}
            type="button"
            className="text-[10px] text-white/50 transition-colors hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2 text-[10px] text-white/50">
        <span className="hidden sm:inline">1920 × 1080</span>
        <span className="text-purple-400">●</span>
        <span>30 FPS</span>
        <ChevronDown size={12} className="text-white/30" />
      </div>
    </header>
  );
}
