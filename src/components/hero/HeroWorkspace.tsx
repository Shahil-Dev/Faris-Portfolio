
"use client";

import CompositionViewer from "./CompositionViewer";
import EditingToolbar from "./EditingToolbar";
import ProjectPanel from "./ProjectPanel";
import Timeline from "./Timeline";
import TransformPanel from "./TransformPanel";
import WorkspaceMenu from "./WorkspaceMenu";



export default function HeroWorkspace() {
  return (
    <section
      id="home"
      className="cinematic-workspace relative min-h-screen overflow-hidden bg-[#09090d] p-2 text-white sm:p-4 lg:p-6"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[140px]" />
      </div>

      <div className="cinematic-frame relative mx-auto flex min-h-[calc(100vh-32px)] max-w-[1800px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111116] shadow-2xl shadow-black/40">
        
        <WorkspaceMenu />

        <div className="flex min-h-0 flex-1">
          {/* Left toolbar */}
          <EditingToolbar />

          {/* Project assets */}
          <ProjectPanel />

          {/* Main composition */}
          <CompositionViewer />

          {/* Right controls */}
          <TransformPanel />
        </div>

        {/* Bottom timeline */}
        <Timeline />
      </div>

      <div className="relative mx-auto mt-3 flex max-w-[1800px] items-center justify-between px-1 text-[10px] uppercase tracking-[0.2em] text-white/30">
        <span>Creative Workspace</span>
        <span>Real Estate Film Production</span>
      </div>
    </section>
  );
}
