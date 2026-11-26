
"use client";

import {
  Folder,
  FolderOpen,
  Film,
  Image as ImageIcon,
  Music2,
  Video,
  ChevronDown,
  Search,
  MoreHorizontal,
} from "lucide-react";

const assets = [
  { name: "Hero_Reel.mp4", type: "video", size: "248 MB" },
  { name: "Property_01.mp4", type: "video", size: "186 MB" },
  { name: "Drone_Footage.mp4", type: "video", size: "124 MB" },
  { name: "Voiceover.wav", type: "audio", size: "18 MB" },
  { name: "Music_Bed.mp3", type: "audio", size: "12 MB" },
  { name: "Thumbnail_01.png", type: "image", size: "4 MB" },
];

function AssetIcon({ type }: { type: string }) {
  if (type === "audio") return <Music2 size={13} />;
  if (type === "image") return <ImageIcon size={13} />;
  return <Film size={13} />;
}

export default function ProjectPanel() {
  return (
    <aside className="hidden w-52 shrink-0 flex-col border-r border-white/10 bg-[#131319] md:flex lg:w-60">
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
          Project
        </span>
        <MoreHorizontal size={15} className="text-white/40" />
      </div>

      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
        <Search size={13} className="text-white/30" />
        <span className="text-[10px] text-white/30">Search project assets...</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-3 text-[11px] text-white/70">
        <ChevronDown size={12} />
        <FolderOpen size={14} className="text-orange-400" />
        <span>REAL ESTATE PROJECT</span>
      </div>

      <div className="space-y-1 px-2">
        {assets.map((asset) => (
          <div
            key={asset.name}
            className="group flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-colors hover:bg-white/5"
          >
            <div className="flex min-w-0 items-center gap-2">
              <AssetIcon type={asset.type} />
              <span className="truncate text-[10px] text-white/65 group-hover:text-white">
                {asset.name}
              </span>
            </div>
            <span className="shrink-0 text-[9px] text-white/25">
              {asset.size}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3 border-t border-white/5 px-3 py-3">
        <div className="flex items-center gap-2 text-[10px] text-white/50">
          <ChevronDown size={12} />
          <Folder size={13} />
          <span>Motion Graphics</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/50">
          <ChevronDown size={12} />
          <Folder size={13} />
          <span>Exports</span>
        </div>
      </div>

      <div className="mt-auto border-t border-white/5 px-3 py-3">
        <div className="flex items-center gap-2 text-[9px] text-white/30">
          <Video size={12} />
          <span>6 PROJECT ASSETS</span>
        </div>
      </div>
    </aside>
  );
}
